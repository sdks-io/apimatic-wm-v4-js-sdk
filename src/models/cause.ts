import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Cause = {
  code?: string;
  field?: string;
  type?: string;
  description?: string;
};

export const causeSchema: Schema<Cause> = s.object<Cause>({
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  type: s.optional(s.string()),
  description: s.optional(s.string()),
});
