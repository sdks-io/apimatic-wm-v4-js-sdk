import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentChannelSchema, type FulfillmentChannel } from "./fulfillment-channel.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import { priceTypeSchema, type PriceType } from "./price-type.js";
import {
  quantityDiscountPriceTypeSchema,
  type QuantityDiscountPriceType,
} from "./quantity-discount-price-type.js";

/** Schema for an individual offer. */
export type OfferType1 = {
  /** Indicates whether the offer is a B2B or B2C offer. */
  offerType?: OfferType;
  /**
   * Item price information. LandedPrice = ListingPrice + Shipping. Walmart does not have a
   * seller-configurable per-offer loyalty points mechanism; the Points field from the SP-API
   * reference spec is omitted..
   */
  buyingPrice: PriceType;
  /** Currency type and monetary value. */
  regularPrice: MoneyType;
  /** Currency type and monetary value. */
  businessPrice?: MoneyType;
  /** Item pricing information when buying in bulk. */
  quantityDiscountPrices?: QuantityDiscountPriceType[];
  /** The fulfillment channel for the offer listing. Possible values: WFS, SELLER. */
  fulfillmentChannel: FulfillmentChannel;
  /**
   * The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished,
   * or Club.
   */
  itemCondition: string;
  /** The item subcondition for the offer listing. */
  itemSubCondition: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sellerSku: string;
};

export const offerType1Schema: Schema<OfferType1> = s.object<OfferType1>({
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  buyingPrice: priceTypeSchema,
  regularPrice: moneyTypeSchema,
  businessPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  quantityDiscountPrices: s.optional(s.array(s.lazy(() => quantityDiscountPriceTypeSchema))),
  fulfillmentChannel: fulfillmentChannelSchema,
  itemCondition: s.string(),
  itemSubCondition: s.string(),
  sellerSku: s.string(),
  _keysMap: {
    buyingPrice: "BuyingPrice",
    regularPrice: "RegularPrice",
    fulfillmentChannel: "FulfillmentChannel",
    itemCondition: "ItemCondition",
    itemSubCondition: "ItemSubCondition",
    sellerSku: "SellerSKU",
  },
});
