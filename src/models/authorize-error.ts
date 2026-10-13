import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

/** Authorization-endpoint error (RFC 6749 §4.1.2.1) — non-redirectable case only. */
export type AuthorizeError = {
  /** Machine-readable error code. */
  error: Error1;
  /** Human-readable explanation. */
  errorDescription?: string;
  /** Optional link to error docs. */
  errorUri?: string;
  /** The `state` from the request, when supplied. */
  state?: string;
};

export const authorizeErrorSchema: Schema<AuthorizeError> = s.object<AuthorizeError>({
  error: error1Schema,
  errorDescription: s.optional(s.string()),
  errorUri: s.optional(s.string()),
  state: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
    errorUri: "error_uri",
  },
});
