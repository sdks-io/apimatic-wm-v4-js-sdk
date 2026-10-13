import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { basicAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly sellerAuthAuthorizationCode: AuthScheme;
  readonly sellerAuthClientCredentials: AuthScheme;
  readonly basicClientAuth: AuthScheme;
  readonly walletAuth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    sellerAuthAuthorizationCode: oauth2RefreshableScheme(
      options.sellerAuthAuthorizationCode,
      options.sellerAuthAuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/auth/v4/authorize"),
          tokenUrl: servers.default("/auth/v4/token"),
          rawClient,
          placement: "header",
        }),
    ),
    sellerAuthClientCredentials: oauth2Scheme(
      options.sellerAuthClientCredentials,
      options.sellerAuthClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default("/auth/v4/token"),
          rawClient,
          placement: "header",
        }),
    ),
    basicClientAuth: basicAuth(options.basicClientAuth),
    walletAuth: oauth2Scheme(
      options.walletAuth,
      options.walletAuthStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default1("/auth/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
