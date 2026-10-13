import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentChannel1Schema, type FulfillmentChannel1 } from "./fulfillment-channel1.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import { quantityDiscountTypeSchema, type QuantityDiscountType } from "./quantity-discount-type.js";

/** Schema for an individual lowest price. */
export type LowestPriceType = {
  /**
   * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
   */
  condition: string;
  /** Indicates whether the item is fulfilled by WFS or the seller. */
  fulfillmentChannel: FulfillmentChannel1;
  /** Indicates whether the offer is a B2B or B2C offer. */
  offerType?: OfferType;
  /** Indicates at what quantity this price becomes active. */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** Currency type and monetary value. */
  landedPrice?: MoneyType;
  /** Currency type and monetary value. */
  listingPrice: MoneyType;
  /** Currency type and monetary value. */
  shipping?: MoneyType;
};

export const lowestPriceTypeSchema: Schema<LowestPriceType> = s.object<LowestPriceType>({
  condition: s.string(),
  fulfillmentChannel: fulfillmentChannel1Schema,
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  quantityTier: s.optional(s.int()),
  quantityDiscountType: s.optional(s.lazy(() => quantityDiscountTypeSchema)),
  landedPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  listingPrice: moneyTypeSchema,
  shipping: s.optional(s.lazy(() => moneyTypeSchema)),
  _keysMap: {
    landedPrice: "LandedPrice",
    listingPrice: "ListingPrice",
    shipping: "Shipping",
  },
});
