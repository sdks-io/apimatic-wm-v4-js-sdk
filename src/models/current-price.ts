import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

export type CurrentPrice = {
  currency?: Currency;
  amount?: number;
};

export const currentPriceSchema: Schema<CurrentPrice> = s.object<CurrentPrice>({
  currency: s.optional(s.lazy(() => currencySchema)),
  amount: s.optional(s.float64()),
});
