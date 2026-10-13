import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";

/**
 * Item price information. LandedPrice = ListingPrice + Shipping. Walmart does not have a
 * seller-configurable per-offer loyalty points mechanism; the Points field from the SP-API
 * reference spec is omitted..
 */
export type PriceType = {
  /** Currency type and monetary value. */
  landedPrice?: MoneyType;
  /** Currency type and monetary value. */
  listingPrice: MoneyType;
  /** Currency type and monetary value. */
  shipping?: MoneyType;
};

export const priceTypeSchema: Schema<PriceType> = s.object<PriceType>({
  landedPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  listingPrice: moneyTypeSchema,
  shipping: s.optional(s.lazy(() => moneyTypeSchema)),
  _keysMap: {
    landedPrice: "LandedPrice",
    listingPrice: "ListingPrice",
    shipping: "Shipping",
  },
});
