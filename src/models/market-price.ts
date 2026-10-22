import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketPrice = {
  /** The numerical value of the price */
  amount?: string;
  /** The currency type */
  currency?: string;
};

export const marketPriceSchema: Schema<MarketPrice> = s.object<MarketPrice>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
