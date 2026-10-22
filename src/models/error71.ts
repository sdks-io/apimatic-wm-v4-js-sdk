import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error71 = {
  info?: string;
  code?: string;
  field?: string;
  description?: string;
  severity?: string;
  category?: string;
  /** HTTP status code for this error, 501 indicates the functionality is not implemented */
  httpStatus?: number;
};

export const error71Schema: Schema<Error71> = s.object<Error71>({
  info: s.optional(s.string()),
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  httpStatus: s.optional(s.int()),
});
