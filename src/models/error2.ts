import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error2 = {
  code: string;
  field?: string;
  description: string;
  info?: string;
  severity: string;
  category: string;
  causes?: string[];
  errorIdentifiers?: Record<string, unknown>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>({
  code: s.string(),
  field: s.optional(s.string()),
  description: s.string(),
  info: s.optional(s.string()),
  severity: s.string(),
  category: s.string(),
  causes: s.optional(s.array(s.string())),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
