import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Currency amount. */
export type MoneyType1 = {
  /** Three-digit currency code (ISO 4217). */
  currencyCode: string;
  amount: number;
};

export const moneyType1Schema: Schema<MoneyType1> = s.object<MoneyType1>({
  currencyCode: s.string(),
  amount: s.float64(),
  _keysMap: {
    currencyCode: "CurrencyCode",
    amount: "Amount",
  },
});
