import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Currency type and monetary value. */
export type MoneyType = {
  /** The currency code in ISO 4217 format. @default "USD" */
  currencyCode?: string;
  /** The monetary value. */
  amount?: number;
};

export const moneyTypeSchema: Schema<MoneyType> = s.object<MoneyType>({
  currencyCode: s.defaulted(s.string(), "USD"),
  amount: s.optional(s.float64()),
  _keysMap: {
    currencyCode: "CurrencyCode",
    amount: "Amount",
  },
});
