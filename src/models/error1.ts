import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Machine-readable error code. */
export const Error1 = {
  InvalidRequest: "invalid_request",
  UnauthorizedClient: "unauthorized_client",
  AccessDenied: "access_denied",
  UnsupportedResponseType: "unsupported_response_type",
  InvalidScope: "invalid_scope",
  ServerError: "server_error",
  TemporarilyUnavailable: "temporarily_unavailable",
} as const;
export type Error1 = (typeof Error1)[keyof typeof Error1] | (string & {});

export const error1Schema: EnumSchema<Error1> = s.enumOf<Error1>(Error1);
