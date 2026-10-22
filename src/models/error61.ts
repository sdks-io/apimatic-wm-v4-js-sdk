import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error61 = {
  /** Additional contextual information about the error. */
  info?: string;
  /** Error code identifying the failure reason. */
  code?: string;
  /** The name of the request field that triggered this error, when applicable. */
  field?: string;
  /** Human-readable description of the error. */
  description?: string;
  /** Severity level of the error. */
  severity?: string;
  /** Category classifying the origin of the error. */
  category?: string;
  /**
   * HTTP status code associated with this error. 501 indicates the functionality is not
   * implemented.
   */
  httpStatus?: number;
};

export const error61Schema: Schema<Error61> = s.object<Error61>({
  info: s.optional(s.string()),
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  httpStatus: s.optional(s.int()),
});
