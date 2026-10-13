import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A problem with additional properties persisted to an operation. */
export type CommonOperationProblem = {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
  /** A message that describes the error condition. */
  message: string;
  /** The severity of the problem. Possible values: `WARNING`, `ERROR`. */
  severity: string;
};

export const commonOperationProblemSchema: Schema<CommonOperationProblem> = s.object<CommonOperationProblem>({
  code: s.string(),
  details: s.optional(s.string()),
  message: s.string(),
  severity: s.string(),
});
