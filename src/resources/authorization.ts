import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { GrantType1, grantType1Schema } from "../models/grant-type1.js";
import { oAuthTokenModelSchema, type OAuthTokenModel } from "../models/oauth-token-model.js";
import { tokenDetailResponseSchema, type TokenDetailResponse } from "../models/token-detail-response.js";
import { v3Token400Error1Schema, type V3Token400Error1 } from "../models/v3-token400-error1.js";
import { v3Token401Error1Schema, type V3Token401Error1 } from "../models/v3-token401-error1.js";
import { v3Token500Error1Schema, type V3Token500Error1 } from "../models/v3-token500-error1.js";
import type { Servers } from "../servers.js";

export class Authorization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Token Detail
   *
   * @remarks
   * This process retrieves the access permissions granted by sellers to applications in the context
   * of OAuth 2.0. The scope encompasses various API categories, each with its respective access
   * levels, for example Reports: View Only, Item: Full Access, etc. <br><b
   * style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTokenDetail(
    request: Authorization.GetTokenDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenDetailResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/token/detail"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenDetailResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Token API
   *
   * @remarks
   * <p>This endpoint issues access tokens required for authenticating API requests. It supports
   * multiple OAuth 2.0 grant types to accommodate various integration scenarios.</p> <b
   * style='color:green;'>Market availability: Global</b><br/><h3>Supported Grant
   * Types</h3><table><tr><th>Grant Type</th><th>Description</th><th>How to get the
   * credentials</th></tr><tr><td>authorization_code</td><td>Exchanges an authorization code for an
   * access token.</td><td>Used in app integration only via the OAuth consent screen. This is
   * applicable to the <strong>US market only</strong>. Refer to <a
   * href=/global-marketplace/docs/oauth-20-authorization>OAuth 2.0 authorization</a> for more
   * details.</td></tr><tr><td>client_credentials</td><td>Issues a token using client ID and
   * secret.</td><td>For <strong>sellers</strong>: Obtain client_id and client_secret from the
   * <strong>Developer Portal</strong>.<br/>For <strong>solution providers</strong>: Obtain
   * credentials from sellers via <a href=/global-marketplace/docs/delegated-access-auth>Delegated
   * Access authorization</a>.</td></tr><tr><td>refresh_token</td><td>Issues a new access token
   * using a refresh token.</td><td>Provided during the authorization_code flow. This is applicable
   * to the <strong>US market only</strong>. Refer to <a
   * href=/global-marketplace/docs/oauth-20-authorization>OAuth 2.0 authorization</a> for more
   * details.</td></tr></table><br/><b>Note:<br/></b> Use authorization_code and refresh_token
   * <b>only for app-based integrations.</b> These grant types are currently <b>supported only in
   * the US market</b>.<br/><br/><h3>Token Lifetimes</h3><table><tr><th>Token
   * Type</th><th>Duration</th></tr><tr><td>Access Token</td><td>15 minutes <i>(900
   * seconds)</i></td></tr><tr><td>Refresh Token</td><td>1 year <i>(365 days)</i></td></tr></table>
   *
   * @returns Successful Operation
   *
   * @throws {@link Authorization.TokenApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokenApi(
    request: Authorization.TokenApiRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenModel, Authorization.TokenApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_PARTNER.ID", value: request.wmPartnerId, schema: s.optional(s.string()) },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "grant_type",
              value: request.grantType,
              schema: s.defaulted(grantType1Schema, GrantType1.ClientCredentials),
            },
            {
              name: "code",
              value: request.code,
              schema: s.defaulted(s.string(), "65CA5DA313A549D49D15D3119D9AD85D"),
            },
            {
              name: "redirect_uri",
              value: request.redirectUri,
              schema: s.defaulted(s.string(), "https://example-client-app.com"),
            },
            {
              name: "refresh_token",
              value: request.refreshToken,
              schema: s.defaulted(s.string(), "APXcIoTpKMH9OQN....."),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: oAuthTokenModelSchema },
        errorFactory: Authorization.TokenApiError,
      },
      options,
    );
  }
}

export namespace Authorization {
  export type GetTokenDetailRequest = {
    /**
     * The access token retrieved in the Token API call
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmSecAccessToken: string;
    /**
     * Available marketplace location: us (USA), mx (Mexico), ca (Canada) or cl (Chile)
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmMarket: string;
    /**
     * Content type of the request body.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    contentType: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmConsumerChannelType?: string;
  };

  export type TokenApiRequest = {
    /**
     * Available marketplace location: us (USA), mx (Mexico), ca (Canada) or cl (Chile)
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmMarket: string;
    /**
     * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step
     * two of the integration steps.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    authorization: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmSvcName: string;
    /**
     * Partner Id registered in Walmart marketplace to identify a seller. <br /> This field is
     * required when **grant_type: authorization_code** and **grant_type: refresh_token**
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmPartnerId?: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    wmConsumerChannelType?: string;
    /**
     * Type of grant requested. <br /> **Available grant types:** authorization_code, refresh_token
     * and client_credentials
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default GrantType1.ClientCredentials
     */
    grantType?: GrantType1;
    /**
     * Authorization code obtained by your client app when the seller authorizes your app to access
     * the seller resource. <br /> This field is required when **grant_type: authorization_code**
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default "65CA5DA313A549D49D15D3119D9AD85D"
     */
    code?: string;
    /**
     * This should be same as one of your client app URIs provided while registering the app. <br />
     * This field is required when **grant_type: authorization_code**
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default "https://example-client-app.com"
     */
    redirectUri?: string;
    /**
     * Refresh token received as response of Authentication API with authorization_code grant type,
     * to be used to refresh the access token. The token lifetime is 1 year.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default "APXcIoTpKMH9OQN....."
     */
    refreshToken?: string;
  };

  export class TokenApiError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token401Error1", V3Token401Error1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TokenApiError> = [
      { on: 400, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 401, kind: "v3Token401Error1", decode: { kind: "json", schema: v3Token401Error1Schema } },
      { on: 500, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
    ];
  }
}
