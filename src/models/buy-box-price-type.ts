import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import { quantityDiscountTypeSchema, type QuantityDiscountType } from "./quantity-discount-type.js";

/** Schema for an individual Buy Box price. */
export type BuyBoxPriceType = {
  /**
   * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
   */
  condition: string;
  /** Indicates whether the offer is a B2B or B2C offer. */
  offerType?: OfferType;
  /** Indicates at what quantity this price becomes active. */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** Currency type and monetary value. */
  landedPrice: MoneyType;
  /** Currency type and monetary value. */
  listingPrice: MoneyType;
  /** Currency type and monetary value. */
  shipping: MoneyType;
  /** The seller identifier for the offer. */
  sellerId?: string;
};

export const buyBoxPriceTypeSchema: Schema<BuyBoxPriceType> = s.object<BuyBoxPriceType>({
  condition: s.string(),
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  quantityTier: s.optional(s.int()),
  quantityDiscountType: s.optional(s.lazy(() => quantityDiscountTypeSchema)),
  landedPrice: moneyTypeSchema,
  listingPrice: moneyTypeSchema,
  shipping: moneyTypeSchema,
  sellerId: s.optional(s.string()),
  _keysMap: {
    landedPrice: "LandedPrice",
    listingPrice: "ListingPrice",
    shipping: "Shipping",
  },
});
