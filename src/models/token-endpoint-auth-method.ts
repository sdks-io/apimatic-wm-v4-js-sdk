import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `none` for public clients (PKCE), `client_secret_post`/`client_secret_basic` for confidential.
 */
export const TokenEndpointAuthMethod = {
  None: "none",
  ClientSecretPost: "client_secret_post",
  ClientSecretBasic: "client_secret_basic",
} as const;
export type TokenEndpointAuthMethod =
  | (typeof TokenEndpointAuthMethod)[keyof typeof TokenEndpointAuthMethod]
  | (string & {});

export const tokenEndpointAuthMethodSchema: EnumSchema<TokenEndpointAuthMethod> =
  s.enumOf<TokenEndpointAuthMethod>(TokenEndpointAuthMethod);
