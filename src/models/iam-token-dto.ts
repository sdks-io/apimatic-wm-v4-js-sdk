import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { GrantType, grantTypeSchema } from "./grant-type.js";

export type IamTokenDto = {
  /**
   * Type of grant requested. <br /> **Available grant types:** authorization_code, refresh_token
   * and client_credentials
   *
   * @default GrantType.ClientCredentials
   */
  grantType?: GrantType;
  /**
   * Authorization code obtained by your client app when the seller authorizes your app to access
   * the seller resource. <br /> This field is required when **grant_type: authorization_code**
   *
   * @default "65CA5DA313A549D49D15D3119D9AD85D"
   */
  code?: string;
  /**
   * This should be same as one of your client app URIs provided while registering the app. <br />
   * This field is required when **grant_type: authorization_code**
   *
   * @default "https://example-client-app.com"
   */
  redirectUri?: string;
  /**
   * Refresh token received as response of Authentication API with authorization_code grant type, to
   * be used to refresh the access token. <br /> This field is required when **grant_type:
   * refresh_token**
   *
   * @default "APXcIoTpKMH9OQN....."
   */
  refreshToken?: string;
};

export const iamTokenDtoSchema: Schema<IamTokenDto> = s.object<IamTokenDto>({
  grantType: s.defaulted(grantTypeSchema, GrantType.ClientCredentials),
  code: s.defaulted(s.string(), "65CA5DA313A549D49D15D3119D9AD85D"),
  redirectUri: s.defaulted(s.string(), "https://example-client-app.com"),
  refreshToken: s.defaulted(s.string(), "APXcIoTpKMH9OQN....."),
  _keysMap: {
    grantType: "grant_type",
    redirectUri: "redirect_uri",
    refreshToken: "refresh_token",
  },
});
