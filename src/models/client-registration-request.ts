import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantType1Schema, type GrantType1 } from "./grant-type1.js";
import { responseTypeSchema, type ResponseType } from "./response-type.js";
import { TokenEndpointAuthMethod, tokenEndpointAuthMethodSchema } from "./token-endpoint-auth-method.js";

/** RFC 7591 §2 client metadata. */
export type ClientRegistrationRequest = {
  /** Registered callback URIs. Enforced by exact match at authorize. HTTPS (or localhost). */
  redirectUris: string[];
  /**
   * `none` for public clients (PKCE), `client_secret_post`/`client_secret_basic` for confidential.
   *
   * @default TokenEndpointAuthMethod.None
   */
  tokenEndpointAuthMethod?: TokenEndpointAuthMethod;
  /** Grants the client will use. */
  grantTypes?: GrantType1[];
  /** Must be `[code]`. */
  responseTypes?: ResponseType[];
  /** Human-readable name shown on the consent screen. */
  clientName?: string;
  /**
   * Space-delimited scopes the client may request (subset of the sellerAuth catalog +
   * `offline_access`).
   */
  scope?: string;
  /** Homepage of the client. */
  clientUri?: string;
  /** Logo shown on the consent screen. */
  logoUri?: string;
  /** Contact emails for the client. */
  contacts?: string[];
};

export const clientRegistrationRequestSchema: Schema<ClientRegistrationRequest> =
  s.object<ClientRegistrationRequest>({
    redirectUris: s.array(s.string()),
    tokenEndpointAuthMethod: s.defaulted(tokenEndpointAuthMethodSchema, TokenEndpointAuthMethod.None),
    grantTypes: s.optional(s.array(s.lazy(() => grantType1Schema))),
    responseTypes: s.optional(s.array(s.lazy(() => responseTypeSchema))),
    clientName: s.optional(s.string()),
    scope: s.optional(s.string()),
    clientUri: s.optional(s.string()),
    logoUri: s.optional(s.string()),
    contacts: s.optional(s.array(s.string())),
    _keysMap: {
      redirectUris: "redirect_uris",
      tokenEndpointAuthMethod: "token_endpoint_auth_method",
      grantTypes: "grant_types",
      responseTypes: "response_types",
      clientName: "client_name",
      clientUri: "client_uri",
      logoUri: "logo_uri",
    },
  });
