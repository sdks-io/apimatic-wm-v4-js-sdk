import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthTokenModel = {
  /**
   * Access token to be used for accessing business APIs
   *
   * @default "eyJraWQiOiI1MWY3MjM0Ny0wYWY5LTRhZ...."
   */
  accessToken?: string;
  /** Type of token according to user. (e.g., 'BEARER') @default "Bearer" */
  tokenType?: string;
  /** Expiry time of access token in seconds @default 900 */
  expiresIn?: number;
  /**
   * Token which should be used to refresh access token.<br /> This field is present in response
   * when **grant_type: authorization_code**
   *
   * @default "APXcIoTpKMH9OQN……."
   */
  refreshToken?: string;
};

export const oAuthTokenModelSchema: Schema<OAuthTokenModel> = s.object<OAuthTokenModel>({
  accessToken: s.defaulted(s.string(), "eyJraWQiOiI1MWY3MjM0Ny0wYWY5LTRhZ...."),
  tokenType: s.defaulted(s.string(), "Bearer"),
  expiresIn: s.defaulted(s.int(), 900),
  refreshToken: s.defaulted(s.string(), "APXcIoTpKMH9OQN……."),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    refreshToken: "refresh_token",
  },
});
