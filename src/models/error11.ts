import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error11 = {
  code?: string;
  field?: string;
  description?: string;
  info?: string;
  severity?: string;
  category?: string;
  causes?: Record<string, unknown>[];
  errorIdentifiers?: Record<string, unknown>;
};

export const error11Schema: Schema<Error11> = s.object<Error11>({
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  info: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  causes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
