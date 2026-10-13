import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featuredOfferExpectedPriceResponseSchema,
  type FeaturedOfferExpectedPriceResponse,
} from "./featured-offer-expected-price-response.js";

/** The response schema for the getFeaturedOfferExpectedPriceBatch operation. */
export type GetFeaturedOfferExpectedPriceBatchResponse = {
  /** A batched list of FOEP responses. */
  responses?: FeaturedOfferExpectedPriceResponse[];
};

export const getFeaturedOfferExpectedPriceBatchResponseSchema: Schema<GetFeaturedOfferExpectedPriceBatchResponse> =
  s.object<GetFeaturedOfferExpectedPriceBatchResponse>({
    responses: s.optional(s.array(s.lazy(() => featuredOfferExpectedPriceResponseSchema))),
  });
