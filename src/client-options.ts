import type {
  BasicAuthCredentials,
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly sellerAuthAuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly sellerAuthAuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  readonly sellerAuthClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly sellerAuthClientCredentialsStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
  /**
   * HTTP Basic with base64(client_id:client_secret). client_secret_post (body) also accepted;
   * public clients send no secret.
   */
  readonly basicClientAuth?: BasicAuthCredentials | undefined;
  readonly walletAuth?: OAuth2ClientCredentials | undefined;
  readonly walletAuthStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Production */
        default?: {
          baseUrl?: string;
        };
        /** Production */
        default1?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Production */
        default?: {
          baseUrl?: string;
        };
        /** Production */
        default1?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      readonly serverOptions?: {
        /** Production */
        default?: {
          baseUrl?: string;
        };
        /** Production */
        default1?: {
          baseUrl?: string;
        };
      };
    };
