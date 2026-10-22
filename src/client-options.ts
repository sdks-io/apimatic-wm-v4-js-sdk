import type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly basicAuth?: BasicAuthCredentials | undefined;
  /**
   * Use the access token obtained from the Token API. Include it in the WM_SEC.ACCESS_TOKEN header.
   */
  readonly bearerAuth?: TokenProvider | undefined;
  /**
   * Access token required for authenticating API requests.
   *
   * To obtain a token, call `POST https://marketplace.walmartapis.com/v3/token` with your client ID
   * and client secret using the client credentials grant type. Refer to the [Token API
   * documentation](https://developer.walmart.com/us-marketplace/docs/get-an-access-token) for
   * details.
   *
   * Pass the resulting token in the `WM_SEC.ACCESS_TOKEN` header with every API request., Access
   * token required for authenticating API requests.
   *
   * To obtain a token, call `POST https://marketplace.walmartapis.com/v3/token` with your client ID
   * and client secret using the OAuth 2.0 client credentials grant type. Refer to the [Token API
   * documentation](https://developer.walmart.com/us-marketplace/docs/get-an-access-token) for
   * details.
   *
   * Pass the resulting token in the `WM_SEC.ACCESS_TOKEN` header with every API request., Access
   * token obtained from the Token API. This is required for authenticating requests to Walmart
   * Marketplace APIs., Access token required for authenticating API requests.
   *
   * To obtain a token, call `POST https://marketplace.walmartapis.com/v3/token` with your client ID
   * and client secret using the client credentials grant type. Refer to the [Token API
   * documentation](https://developer.walmart.com/us-marketplace/docs/get-an-access-token) for
   * details.
   *
   * Pass the resulting token in the `WM_SEC.ACCESS_TOKEN` header with every API request., Access
   * token from POST /v3/token (client_credentials grant).
   */
  readonly accessToken?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Sandbox;
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
