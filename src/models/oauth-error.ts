import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** OAuth 2.0 token-endpoint error (RFC 6749 §5.2). */
export type OAuthError = {
  /** Machine-readable error code. */
  error: Error;
  /** Human-readable explanation. */
  errorDescription?: string;
  /** Optional link to error documentation. */
  errorUri?: string;
};

export const oAuthErrorSchema: Schema<OAuthError> = s.object<OAuthError>({
  error: errorSchema,
  errorDescription: s.optional(s.string()),
  errorUri: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
    errorUri: "error_uri",
  },
});
