import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error51 = {
  code?: string;
  severity?: string;
  description?: string;
  category?: string;
  field?: string;
};

export const error51Schema: Schema<Error51> = s.object<Error51>({
  code: s.optional(s.string()),
  severity: s.optional(s.string()),
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  field: s.optional(s.string()),
});
