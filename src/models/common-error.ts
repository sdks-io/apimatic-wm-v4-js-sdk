import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error object containing information about what went wrong. */
export type CommonError = {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
};

export const commonErrorSchema: Schema<CommonError> = s.object<CommonError>({
  code: s.string(),
  message: s.string(),
  details: s.optional(s.string()),
});
