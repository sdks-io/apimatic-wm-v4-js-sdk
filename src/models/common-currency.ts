import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The type and amount of currency. */
export type CommonCurrency = {
  /** Decimal value of the currency. */
  amount: number;
  /** ISO 4217 standard currency code. */
  code: string;
};

export const commonCurrencySchema: Schema<CommonCurrency> = s.object<CommonCurrency>({
  amount: s.float64(),
  code: s.string(),
});
