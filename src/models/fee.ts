import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type Fee = {
  name?: string;
  amount?: Money;
};

export const feeSchema: Schema<Fee> = s.object<Fee>({
  name: s.optional(s.string()),
  amount: s.optional(s.lazy(() => moneySchema)),
});
