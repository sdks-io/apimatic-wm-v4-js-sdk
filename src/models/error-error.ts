import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response returned when the request is unsuccessful. */
export type ErrorError = {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
};

export const errorErrorSchema: Schema<ErrorError> = s.object<ErrorError>({
  code: s.string(),
  message: s.string(),
  details: s.optional(s.string()),
});
