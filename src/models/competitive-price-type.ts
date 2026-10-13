import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import { priceTypeSchema, type PriceType } from "./price-type.js";
import { quantityDiscountTypeSchema, type QuantityDiscountType } from "./quantity-discount-type.js";

/** Schema for competitive pricing information. */
export type CompetitivePriceType = {
  /**
   * The pricing model for each price that is returned. Possible values: 1 - New Buy Box Price. 2 -
   * Used Buy Box Price.
   */
  competitivePriceId: string;
  /**
   * Item price information. LandedPrice = ListingPrice + Shipping. Walmart does not have a
   * seller-configurable per-offer loyalty points mechanism; the Points field from the SP-API
   * reference spec is omitted..
   */
  price: PriceType;
  /**
   * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, or
   * Club.
   */
  condition?: string;
  /** Indicates the subcondition of the item. */
  subcondition?: string;
  /** Indicates whether the offer is a B2B or B2C offer. */
  offerType?: OfferType;
  /** Indicates at what quantity this price becomes active. */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** The seller identifier for the offer. */
  sellerId?: string;
  /**
   * Indicates whether the pricing information is for an offer listing that belongs to the
   * requester.
   */
  belongsToRequester?: boolean;
};

export const competitivePriceTypeSchema: Schema<CompetitivePriceType> = s.object<CompetitivePriceType>({
  competitivePriceId: s.string(),
  price: priceTypeSchema,
  condition: s.optional(s.string()),
  subcondition: s.optional(s.string()),
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  quantityTier: s.optional(s.int()),
  quantityDiscountType: s.optional(s.lazy(() => quantityDiscountTypeSchema)),
  sellerId: s.optional(s.string()),
  belongsToRequester: s.optional(s.boolean()),
  _keysMap: {
    competitivePriceId: "CompetitivePriceId",
    price: "Price",
  },
});
