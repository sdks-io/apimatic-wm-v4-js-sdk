import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyType1Schema, type MoneyType1 } from "./money-type1.js";
import { points1Schema, type Points1 } from "./points1.js";

/** Price information used to estimate fees. */
export type PriceToEstimateFees = {
  /** Currency amount. */
  listingPrice: MoneyType1;
  /** Currency amount. */
  shipping?: MoneyType1;
  /** Walmart Rewards points. */
  points?: Points1;
};

export const priceToEstimateFeesSchema: Schema<PriceToEstimateFees> = s.object<PriceToEstimateFees>({
  listingPrice: moneyType1Schema,
  shipping: s.optional(s.lazy(() => moneyType1Schema)),
  points: s.optional(s.lazy(() => points1Schema)),
  _keysMap: {
    listingPrice: "ListingPrice",
    shipping: "Shipping",
    points: "Points",
  },
});
