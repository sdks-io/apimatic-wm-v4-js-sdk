import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import {
  featuredOfferExpectedPriceResultSchema,
  type FeaturedOfferExpectedPriceResult,
} from "./featured-offer-expected-price-result.js";
import { offerIdentifierSchema, type OfferIdentifier } from "./offer-identifier.js";

/** The body of a FOEP response. */
export type FeaturedOfferExpectedPriceResponseBody = {
  /** Identifies an offer. */
  offerIdentifier?: OfferIdentifier;
  /** A list of FOEP results for the requested offer. */
  featuredOfferExpectedPriceResults?: FeaturedOfferExpectedPriceResult[];
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: Error3[];
};

export const featuredOfferExpectedPriceResponseBodySchema: Schema<FeaturedOfferExpectedPriceResponseBody> =
  s.object<FeaturedOfferExpectedPriceResponseBody>({
    offerIdentifier: s.optional(s.lazy(() => offerIdentifierSchema)),
    featuredOfferExpectedPriceResults: s.optional(
      s.array(s.lazy(() => featuredOfferExpectedPriceResultSchema)),
    ),
    errors: s.optional(s.array(s.lazy(() => error3Schema))),
  });
