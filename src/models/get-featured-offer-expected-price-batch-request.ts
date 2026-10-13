import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featuredOfferExpectedPriceRequestSchema,
  type FeaturedOfferExpectedPriceRequest,
} from "./featured-offer-expected-price-request.js";

/** The request body for the getFeaturedOfferExpectedPriceBatch operation. */
export type GetFeaturedOfferExpectedPriceBatchRequest = {
  /** A batched list of FOEP requests. */
  requests?: FeaturedOfferExpectedPriceRequest[];
};

export const getFeaturedOfferExpectedPriceBatchRequestSchema: Schema<GetFeaturedOfferExpectedPriceBatchRequest> =
  s.object<GetFeaturedOfferExpectedPriceBatchRequest>({
    requests: s.optional(s.array(s.lazy(() => featuredOfferExpectedPriceRequestSchema))),
  });
