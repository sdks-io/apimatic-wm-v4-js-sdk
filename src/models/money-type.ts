import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MoneyType = {
  value?: string;
  currency?: string;
  amount?: number;
};

export const moneyTypeSchema: Schema<MoneyType> = s.object<MoneyType>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
  amount: s.optional(s.float64()),
});
