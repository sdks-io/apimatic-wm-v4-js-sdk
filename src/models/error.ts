import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Machine-readable error code. */
export const Error = {
  InvalidRequest: "invalid_request",
  InvalidClient: "invalid_client",
  InvalidGrant: "invalid_grant",
  UnauthorizedClient: "unauthorized_client",
  UnsupportedGrantType: "unsupported_grant_type",
  InvalidScope: "invalid_scope",
} as const;
export type Error = (typeof Error)[keyof typeof Error] | (string & {});

export const errorSchema: EnumSchema<Error> = s.enumOf<Error>(Error);
