import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Issue1 = {
  date?: string;
  publishFlag?: boolean;
  transactableFlag?: boolean;
};

export const issue1Schema: Schema<Issue1> = s.object<Issue1>({
  date: s.optional(s.string()),
  publishFlag: s.optional(s.boolean()),
  transactableFlag: s.optional(s.boolean()),
});
