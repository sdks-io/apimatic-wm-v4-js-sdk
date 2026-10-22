import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenDto = {
  /** Access token to be used for accessing business APIs */
  accessToken: string;
  /** Type of token according to user. (e.g., 'BEARER') */
  tokenType?: string;
  /** Expiry time of access token in seconds */
  expiresIn?: number;
  /**
   * Token which should be used to refresh access token.<br /> This field is present in response
   * when **grant_type: authorization_code**
   */
  refreshToken?: string;
};

export const oAuthTokenDtoSchema: Schema<OAuthTokenDto> = s.object<OAuthTokenDto>({
  accessToken: s.string(),
  tokenType: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  refreshToken: s.optional(s.string()),
  _keysMap: {
    refreshToken: "refresh_token",
  },
});
