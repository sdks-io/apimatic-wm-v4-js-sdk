import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitivePriceTypeSchema, type CompetitivePriceType } from "./competitive-price-type.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerListingCountTypeSchema, type OfferListingCountType } from "./offer-listing-count-type.js";

/** Competitive pricing information for the item. */
export type CompetitivePricingType = {
  /** A list of competitive pricing information. */
  competitivePrices: CompetitivePriceType[];
  /** The number of active offer listings for the item, by condition. */
  numberOfOfferListings: OfferListingCountType[];
  /** Currency type and monetary value. */
  tradeInValue?: MoneyType;
};

export const competitivePricingTypeSchema: Schema<CompetitivePricingType> = s.object<CompetitivePricingType>({
  competitivePrices: s.array(s.lazy(() => competitivePriceTypeSchema)),
  numberOfOfferListings: s.array(s.lazy(() => offerListingCountTypeSchema)),
  tradeInValue: s.optional(s.lazy(() => moneyTypeSchema)),
  _keysMap: {
    competitivePrices: "CompetitivePrices",
    numberOfOfferListings: "NumberOfOfferListings",
    tradeInValue: "TradeInValue",
  },
});
