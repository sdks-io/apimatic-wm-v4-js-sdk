import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buyBoxPriceTypeSchema, type BuyBoxPriceType } from "./buy-box-price-type.js";
import { lowestPriceTypeSchema, type LowestPriceType } from "./lowest-price-type.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerCountTypeSchema, type OfferCountType } from "./offer-count-type.js";
import { salesRankTypeSchema, type SalesRankType } from "./sales-rank-type.js";

/**
 * Contains price information about the product, including LowestPrices, BuyBoxPrices, and
 * NumberOfOffers.
 */
export type Summary = {
  /** The number of unique offers contained in NumberOfOffers. */
  totalOfferCount: number;
  /** A list of the total number of offers, by condition and fulfillment channel. */
  numberOfOffers?: OfferCountType[];
  /** A list of the lowest prices. */
  lowestPrices?: LowestPriceType[];
  /** A list of the Buy Box prices. */
  buyBoxPrices?: BuyBoxPriceType[];
  /** Currency type and monetary value. */
  listPrice?: MoneyType;
  /** Currency type and monetary value. */
  competitivePriceThreshold?: MoneyType;
  /** Currency type and monetary value. */
  suggestedLowerPricePlusShipping?: MoneyType;
  /** A list of sales rank information for the item, by category. */
  salesRankings?: SalesRankType[];
  /**
   * A list of the total number of offers eligible for the Buy Box, by condition and fulfillment
   * channel.
   */
  buyBoxEligibleOffers?: OfferCountType[];
  /**
   * When the status is ActiveButTooSoonForProcessing, the time when offers will be available for
   * processing.
   */
  offersAvailableTime?: Date;
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  totalOfferCount: s.int(),
  numberOfOffers: s.optional(s.array(s.lazy(() => offerCountTypeSchema))),
  lowestPrices: s.optional(s.array(s.lazy(() => lowestPriceTypeSchema))),
  buyBoxPrices: s.optional(s.array(s.lazy(() => buyBoxPriceTypeSchema))),
  listPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  competitivePriceThreshold: s.optional(s.lazy(() => moneyTypeSchema)),
  suggestedLowerPricePlusShipping: s.optional(s.lazy(() => moneyTypeSchema)),
  salesRankings: s.optional(s.array(s.lazy(() => salesRankTypeSchema))),
  buyBoxEligibleOffers: s.optional(s.array(s.lazy(() => offerCountTypeSchema))),
  offersAvailableTime: s.optional(s.dateTime()),
  _keysMap: {
    totalOfferCount: "TotalOfferCount",
    numberOfOffers: "NumberOfOffers",
    lowestPrices: "LowestPrices",
    buyBoxPrices: "BuyBoxPrices",
    listPrice: "ListPrice",
    competitivePriceThreshold: "CompetitivePriceThreshold",
    suggestedLowerPricePlusShipping: "SuggestedLowerPricePlusShipping",
    salesRankings: "SalesRankings",
    buyBoxEligibleOffers: "BuyBoxEligibleOffers",
    offersAvailableTime: "OffersAvailableTime",
  },
});
