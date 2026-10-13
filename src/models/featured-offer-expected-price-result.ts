import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featuredOfferExpectedPriceSchema,
  type FeaturedOfferExpectedPrice,
} from "./featured-offer-expected-price.js";
import { featuredOfferSchema, type FeaturedOffer } from "./featured-offer.js";

/** The featured offer expected price result for a specific offer. */
export type FeaturedOfferExpectedPriceResult = {
  /** The featured offer expected price for a given SKU. */
  featuredOfferExpectedPrice?: FeaturedOfferExpectedPrice;
  /** The status of the FOEP request. */
  resultStatus?: string;
  /** A featured offer. */
  competingFeaturedOffer?: FeaturedOffer;
  /** A featured offer. */
  currentFeaturedOffer?: FeaturedOffer;
};

export const featuredOfferExpectedPriceResultSchema: Schema<FeaturedOfferExpectedPriceResult> =
  s.object<FeaturedOfferExpectedPriceResult>({
    featuredOfferExpectedPrice: s.optional(s.lazy(() => featuredOfferExpectedPriceSchema)),
    resultStatus: s.optional(s.string()),
    competingFeaturedOffer: s.optional(s.lazy(() => featuredOfferSchema)),
    currentFeaturedOffer: s.optional(s.lazy(() => featuredOfferSchema)),
  });
