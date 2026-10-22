import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of grant requested. <br /> **Available grant types:** authorization_code, refresh_token and
 * client_credentials
 *
 * <strong style="color: green;">**Market availability: Global**</strong>
 */
export const GrantType1 = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
  ClientCredentials: "client_credentials",
} as const;
export type GrantType1 = (typeof GrantType1)[keyof typeof GrantType1] | (string & {});

export const grantType1Schema: EnumSchema<GrantType1> = s.enumOf<GrantType1>(GrantType1);
