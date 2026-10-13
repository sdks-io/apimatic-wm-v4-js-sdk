import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  detailedShippingTimeTypeSchema,
  type DetailedShippingTimeType,
} from "./detailed-shipping-time-type.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import {
  quantityDiscountPriceTypeSchema,
  type QuantityDiscountPriceType,
} from "./quantity-discount-price-type.js";
import { sellerFeedbackTypeSchema, type SellerFeedbackType } from "./seller-feedback-type.js";
import { shipsFromTypeSchema, type ShipsFromType } from "./ships-from-type.js";
import { wfsPrimeDetailsTypeSchema, type WfsPrimeDetailsType } from "./wfs-prime-details-type.js";

/** Schema for an individual offer detail. */
export type OfferDetail = {
  /** When true, this is the seller's offer. */
  myOffer?: boolean;
  /** Indicates whether the offer is a B2B or B2C offer. */
  offerType?: OfferType;
  /**
   * The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable,
   * Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
   */
  subCondition: string;
  /** The seller identifier for the offer. */
  sellerId?: string;
  /** Information about the condition of the item. */
  conditionNotes?: string;
  /**
   * Information about the seller's feedback, including the percentage of positive feedback and
   * total ratings.
   */
  sellerFeedbackRating?: SellerFeedbackType;
  /** The time range in which an item will likely be shipped once an order has been placed. */
  shippingTime: DetailedShippingTimeType;
  /** Currency type and monetary value. */
  listingPrice: MoneyType;
  /** Item pricing information when buying in bulk. */
  quantityDiscountPrices?: QuantityDiscountPriceType[];
  /** Currency type and monetary value. */
  shipping: MoneyType;
  /** The state and country from where the item is shipped. */
  shipsFrom?: ShipsFromType;
  /** When true, the offer is fulfilled by Walmart Fulfillment Services (WFS). */
  isFulfilledByWfs: boolean;
  /** Walmart Fulfillment Services prime eligibility information. */
  wfsPrimeDetails?: WfsPrimeDetailsType;
  /** When true, the offer is currently in the Buy Box. */
  isBuyBoxWinner?: boolean;
  /** When true, the seller of the item is eligible to win the Buy Box. */
  isFeaturedMerchant?: boolean;
};

export const offerDetailSchema: Schema<OfferDetail> = s.object<OfferDetail>({
  myOffer: s.optional(s.boolean()),
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  subCondition: s.string(),
  sellerId: s.optional(s.string()),
  conditionNotes: s.optional(s.string()),
  sellerFeedbackRating: s.optional(s.lazy(() => sellerFeedbackTypeSchema)),
  shippingTime: detailedShippingTimeTypeSchema,
  listingPrice: moneyTypeSchema,
  quantityDiscountPrices: s.optional(s.array(s.lazy(() => quantityDiscountPriceTypeSchema))),
  shipping: moneyTypeSchema,
  shipsFrom: s.optional(s.lazy(() => shipsFromTypeSchema)),
  isFulfilledByWfs: s.boolean(),
  wfsPrimeDetails: s.optional(s.lazy(() => wfsPrimeDetailsTypeSchema)),
  isBuyBoxWinner: s.optional(s.boolean()),
  isFeaturedMerchant: s.optional(s.boolean()),
  _keysMap: {
    myOffer: "MyOffer",
    subCondition: "SubCondition",
    sellerId: "SellerId",
    conditionNotes: "ConditionNotes",
    sellerFeedbackRating: "SellerFeedbackRating",
    shippingTime: "ShippingTime",
    listingPrice: "ListingPrice",
    shipping: "Shipping",
    shipsFrom: "ShipsFrom",
    isFulfilledByWfs: "IsFulfilledByWFS",
    wfsPrimeDetails: "WFSPrimeDetails",
    isBuyBoxWinner: "IsBuyBoxWinner",
    isFeaturedMerchant: "IsFeaturedMerchant",
  },
});
