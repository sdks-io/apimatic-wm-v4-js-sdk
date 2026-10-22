import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

/**
 * This is applicable only for promotions, Charge of AddOn type., Declared value of shipment. This
 * value is applicable in case of INSURANCE AddOn Type only., Charge of add-on type., Declared value
 * of shipment. This value is applicable in case of INSURANCE add-on type only.
 */
export type ComparisonPrice = {
  currency?: Currency;
  amount?: number;
};

export const comparisonPriceSchema: Schema<ComparisonPrice> = s.object<ComparisonPrice>({
  currency: s.optional(s.lazy(() => currencySchema)),
  amount: s.optional(s.float64()),
});
