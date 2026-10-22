import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";
import { severity1Schema, type Severity1 } from "./severity1.js";

/** Error detail object. */
export type ErrorResponse4 = {
  /** Additional contextual information about the error. */
  info?: string;
  /** Error code identifying the failure reason. */
  code?: string;
  /** The Name of the request field that triggered this error, when applicable. */
  field?: string;
  /** Human-readable description of the error. */
  description?: string;
  /** Severity level of the error. */
  severity?: Severity1;
  /** Category classifying the origin of the error. */
  category?: Category1;
  /** HTTP status code associated with this error. */
  httpStatus?: number;
};

export const errorResponse4Schema: Schema<ErrorResponse4> = s.object<ErrorResponse4>({
  info: s.optional(s.string()),
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  severity: s.optional(s.lazy(() => severity1Schema)),
  category: s.optional(s.lazy(() => category1Schema)),
  httpStatus: s.optional(s.int()),
});
