import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error7 = {
  code: string;
  field?: string;
  description: string;
  info: string;
  severity: string;
  category: string;
  causes: string[];
  errorIdentifiers: Record<string, string>;
};

export const error7Schema: Schema<Error7> = s.object<Error7>({
  code: s.string(),
  field: s.optional(s.string()),
  description: s.string(),
  info: s.string(),
  severity: s.string(),
  category: s.string(),
  causes: s.array(s.string()),
  errorIdentifiers: s.record(s.string(), s.string()),
});
