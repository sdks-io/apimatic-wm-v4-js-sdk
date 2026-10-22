import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of grant requested. <br /> **Available grant types:** authorization_code, refresh_token and
 * client_credentials
 */
export const GrantType = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
  ClientCredentials: "client_credentials",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
