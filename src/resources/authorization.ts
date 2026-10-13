import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authorizeErrorSchema, type AuthorizeError } from "../models/authorize-error.js";
import {
  clientRegistrationRequestSchema,
  type ClientRegistrationRequest,
} from "../models/client-registration-request.js";
import {
  clientRegistrationResponseSchema,
  type ClientRegistrationResponse,
} from "../models/client-registration-response.js";
import { codeChallengeMethodSchema, type CodeChallengeMethod } from "../models/code-challenge-method.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import { oAuthErrorSchema, type OAuthError } from "../models/oauth-error.js";
import { registrationErrorSchema, type RegistrationError } from "../models/registration-error.js";
import { responseType1Schema, type ResponseType1 } from "../models/response-type1.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import type { Servers } from "../servers.js";

/**
 * OAuth 2.0 / 2.1 token issuance, delegated consent, and client registration.
 */
export class Authorization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Authorization endpoint (delegated consent)
   *
   * @remarks
   * Browser endpoint for the authorization-code grant (RFC 6749 §3.1). The Solution Provider
   * redirects the seller here; the seller authenticates and consents at Walmart IAM, and the
   * response redirects to `redirect_uri` with a single-use `code`.
   *
   * - **PKCE required** — `code_challenge` + `code_challenge_method=S256` (RFC 7636). `plain` is
   *   not accepted.
   * - **Exact** `redirect_uri` match against a value registered for the client.
   * - `state` required; echoed back verbatim (CSRF).
   * - The success and error redirects (performed by IAM) carry `iss` (RFC 9207); clients MUST
   *   validate it.
   *
   * **Error handling.** For a valid request, this endpoint `302`-redirects to the Walmart IAM
   * consent URL; IAM then drives consent and performs the RFC 6749 §4.1.2.1 redirect back to the
   * client's `redirect_uri` (success or error), because IAM is the party that can verify the
   * `redirect_uri` is registered. For request-level errors that `the Authorization API` itself
   * detects (missing/invalid `client_id`/`redirect_uri`, `response_type` != `code`,
   * `code_challenge_method` != `S256`), it returns a JSON `400` (`AuthorizeError`). It deliberately
   * does **not** redirect these errors to the supplied `redirect_uri`: the proxy has no client
   * registry, so self-redirecting to an unverified URI would be an open redirect.
   *
   * > **Upstream status (, pending):** `iss` emission, exact-redirect > enforcement, and
   * server-side rejection of `code_challenge_method=plain` are > IAM / app-store responsibilities
   * not yet fully in place. the Authorization API > enforces the request-side invariants it can and
   * redirects valid requests to > IAM; the full guarantee lands when those upstream changes ship.
   *
   * @throws {@link Authorization.AuthorizeApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorize(
    request: Authorization.AuthorizeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Authorization.AuthorizeApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/auth/v4/authorize"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "response_type", value: request.responseType, schema: responseType1Schema },
          { name: "client_id", value: request.clientId, schema: s.string() },
          { name: "redirect_uri", value: request.redirectUri, schema: s.string() },
          { name: "scope", value: request.scope, schema: s.string() },
          { name: "state", value: request.state, schema: s.string() },
          { name: "code_challenge", value: request.codeChallenge, schema: s.string() },
          {
            name: "code_challenge_method",
            value: request.codeChallengeMethod,
            schema: codeChallengeMethodSchema,
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Authorization.AuthorizeApiError,
      },
      options,
    );
  }

  /**
   * Issue an access token (client_credentials, authorization_code, or refresh_token)
   *
   * @remarks
   * Exchanges a grant for an OAuth access token. Supported `grant_type` values:
   *
   * | grant_type | Flow | Required (besides grant_type) |
   * |----------------------|------------------|---------------------------------|
   * | `client_credentials` | seller-direct | client auth (see below) |
   * | `authorization_code` | delegated | `code`, `code_verifier` (PKCE) |
   * | `refresh_token` | delegated | `refresh_token` |
   *
   * **Client authentication:** credentials in the form body (`client_secret_post`) — `client_id` +
   * `client_secret`. HTTP Basic is also accepted. **Public clients** (Solution-Provider apps
   * registered `token_endpoint_auth_method: none`) send no secret on the delegated grants; PKCE
   * protects the code.
   *
   * **`client_credentials`:** issues **no** refresh token (re-mint on expiry). **`scope` is
   * decorative here** — accepted for compatibility but **not honored**; access is governed by the
   * scopes provisioned per client in IAM ; there is no down-scoping and the response does not echo
   * `scope`. (Verified: `/v3/token` ignores any `scope=` value.)
   *
   * **`authorization_code`:** `redirect_uri` is accepted for OAuth 2.0 back-compat but not required
   * in 2.1 (PKCE covers injection).
   *
   * **`refresh_token`:** the response includes a **rotated** `refresh_token` — the presented token
   * is invalidated (OAuth 2.1 §4.3.1; IAM rotates today, ~1-year TTL). A requested `scope` MUST NOT
   * exceed the originally granted scope.
   *
   * **Token:** `Bearer` (RFC 6750), sent downstream as `Authorization: Bearer <token>` — **not**
   * `WM_SEC.ACCESS_TOKEN`.
   *
   * **Implemented by `the Authorization API` as a stateless proxy to Walmart IAM .**
   *
   * @returns Access token issued.
   *
   * @throws {@link Authorization.CreateTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createToken(
    request: Authorization.CreateTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Authorization.CreateTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/v4/token"),
        auth: this.#auth.basicClientAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "grant_type", value: request.grantType, schema: grantTypeSchema },
            { name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
            { name: "code", value: request.code, schema: s.optional(s.string()) },
            { name: "code_verifier", value: request.codeVerifier, schema: s.optional(s.string()) },
            { name: "refresh_token", value: request.refreshToken, schema: s.optional(s.string()) },
            { name: "redirect_uri", value: request.redirectUri, schema: s.optional(s.string()) },
            { name: "scope", value: request.scope, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Authorization.CreateTokenError,
      },
      options,
    );
  }

  /**
   * Dynamic Client Registration (RFC 7591)
   *
   * @remarks
   * Registers a Solution Provider client and returns its `client_id` (RFC 7591). Lets Solution
   * Providers onboard without manual registration.
   *
   * Public clients set `token_endpoint_auth_method: none` (no secret; PKCE required). Confidential
   * clients receive a `client_secret`. `redirect_uris` are validated and later enforced by exact
   * match at `/auth/v4/authorize`.
   *
   * Proxied to Walmart IAM's registration endpoint (/). RFC 7592 registration management
   * (read/update/delete via a `registration_access_token`) is not offered in this version.
   *
   * @returns Client registered.
   *
   * @throws {@link Authorization.RegisterClientError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerClient(
    request: Authorization.RegisterClientRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, Authorization.RegisterClientError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/v4/register"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clientRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: Authorization.RegisterClientError,
      },
      options,
    );
  }
}

export namespace Authorization {
  export type AuthorizeRequest = {
    /** Must be `code`. */
    responseType: ResponseType1;
    /** The registered client identifier. */
    clientId: string;
    /** Callback URI; must exactly match a registered value. */
    redirectUri: string;
    /** Space-delimited scopes. Include `offline_access` to receive a refresh token. */
    scope: string;
    /** Opaque CSRF token; echoed back unchanged. */
    state: string;
    /** PKCE challenge — base64url(SHA-256(code_verifier)). */
    codeChallenge: string;
    /** Must be `S256`. */
    codeChallengeMethod: CodeChallengeMethod;
  };

  export class AuthorizeApiError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error302", undefined>
      | Declared<"authorizeError", AuthorizeError>
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
    >;

    static readonly errors: ErrorDecoders<AuthorizeApiError> = [
      { on: 302, kind: "error302", decode: { kind: "empty" } },
      { on: 400, kind: "authorizeError", decode: { kind: "json", schema: authorizeErrorSchema } },
      { on: 429, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 500, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }

  export type CreateTokenRequest = {
    /** The OAuth grant type. */
    grantType: GrantType;
    /** Client identifier (client_secret_post / public clients). Omit if using HTTP Basic. */
    clientId?: string;
    /** Client secret (client_secret_post). Omit for public clients or HTTP Basic. */
    clientSecret?: string;
    /** Authorization code from `/auth/v4/authorize` (authorization_code grant). */
    code?: string;
    /**
     * PKCE verifier whose S256 hash equals the earlier `code_challenge` (authorization_code grant).
     */
    codeVerifier?: string;
    /** A previously issued refresh token (refresh_token grant). Rotated on use. */
    refreshToken?: string;
    /**
     * Accepted for OAuth 2.0 back-compat on authorization_code; not required in 2.1 (PKCE covers
     * injection).
     */
    redirectUri?: string;
    /**
     * **client_credentials:** accepted for compatibility but **not honored** — no down-scoping; not
     * echoed. **refresh_token:** optional; MUST NOT exceed the originally granted scope.
     */
    scope?: string;
  };

  export class CreateTokenError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Declared<"oAuthError3", OAuthError>
      | Declared<"oAuthError4", OAuthError>
    >;

    static readonly errors: ErrorDecoders<CreateTokenError> = [
      { on: 400, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 401, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 429, kind: "oAuthError3", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 500, kind: "oAuthError4", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }

  export type RegisterClientRequest = {
    body: ClientRegistrationRequest;
  };

  export class RegisterClientError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"registrationError", RegistrationError>
      | Declared<"registrationError2", RegistrationError>
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
    >;

    static readonly errors: ErrorDecoders<RegisterClientError> = [
      { on: 400, kind: "registrationError", decode: { kind: "json", schema: registrationErrorSchema } },
      { on: 401, kind: "registrationError2", decode: { kind: "json", schema: registrationErrorSchema } },
      { on: 429, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 500, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }
}
