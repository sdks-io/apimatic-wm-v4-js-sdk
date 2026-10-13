import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";

/**
 * Form-encoded token request. Fields required depend on `grant_type`: `client_credentials` (client
 * auth only), `authorization_code` (`code` + `code_verifier`), `refresh_token` (`refresh_token`).
 */
export type TokenRequest = {
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

export const tokenRequestSchema: Schema<TokenRequest> = s.object<TokenRequest>({
  grantType: grantTypeSchema,
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  code: s.optional(s.string()),
  codeVerifier: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  scope: s.optional(s.string()),
  _keysMap: {
    grantType: "grant_type",
    clientId: "client_id",
    clientSecret: "client_secret",
    codeVerifier: "code_verifier",
    refreshToken: "refresh_token",
    redirectUri: "redirect_uri",
  },
});
