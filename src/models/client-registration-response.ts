import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RFC 7591 §3.2.1 registration response. */
export type ClientRegistrationResponse = {
  /** Issued client identifier. */
  clientId: string;
  /** Issue time (Unix epoch seconds). */
  clientIdIssuedAt?: number;
  /** Issued only for confidential clients. Treat as a secret; never log. */
  clientSecret?: string;
  /** Secret expiry (Unix epoch seconds); 0 = never. Absent for public clients. */
  clientSecretExpiresAt?: number;
  /** Registered callback URIs. */
  redirectUris: string[];
  /** The registered client authentication method. */
  tokenEndpointAuthMethod: string;
  /** Registered grant types. */
  grantTypes?: string[];
  /** Registered client name. */
  clientName?: string;
  /** Registered scopes. */
  scope?: string;
};

export const clientRegistrationResponseSchema: Schema<ClientRegistrationResponse> =
  s.object<ClientRegistrationResponse>({
    clientId: s.string(),
    clientIdIssuedAt: s.optional(s.int()),
    clientSecret: s.optional(s.string()),
    clientSecretExpiresAt: s.optional(s.int()),
    redirectUris: s.array(s.string()),
    tokenEndpointAuthMethod: s.string(),
    grantTypes: s.optional(s.array(s.string())),
    clientName: s.optional(s.string()),
    scope: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      clientIdIssuedAt: "client_id_issued_at",
      clientSecret: "client_secret",
      clientSecretExpiresAt: "client_secret_expires_at",
      redirectUris: "redirect_uris",
      tokenEndpointAuthMethod: "token_endpoint_auth_method",
      grantTypes: "grant_types",
      clientName: "client_name",
    },
  });
