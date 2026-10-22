import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Value = {
  scoreType?: string;
  scoreValue?: number;
  impact?: string;
};

export const valueSchema: Schema<Value> = s.object<Value>({
  scoreType: s.optional(s.string()),
  scoreValue: s.optional(s.int()),
  impact: s.optional(s.string()),
});
