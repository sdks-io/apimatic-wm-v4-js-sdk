import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  default1: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://marketplace.walmart.com/seller")) },
  default1: { baseUrl: s.of(s.defaulted(s.string(), "https://marketplace.walmart.com/seller/v1")) },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://sandbox.marketplace.walmart.com/seller")) },
  default1: { baseUrl: s.of(s.defaulted(s.string(), "https://sandbox.marketplace.walmart.com/seller/v1")) },
};

const environment3Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://walmart-apis-mock-server.onrender.com/seller")) },
  default1: {
    baseUrl: s.of(s.defaulted(s.string(), "https://walmart-apis-mock-server.onrender.com/seller/v1")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    default1: resolveBaseUrl(default1Server(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    default1: (subPath) => ({ baseUrl: base.default1, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment2:
      return { baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment3:
      return { baseUrl: environment3Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    default:
      unknownEnvironment(environment);
  }
}

function default1Server(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.default1.baseUrl.decode(options.serverOptions?.default1?.baseUrl) };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default1.baseUrl.decode(options.serverOptions?.default1?.baseUrl),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.default1.baseUrl.decode(options.serverOptions?.default1?.baseUrl),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
