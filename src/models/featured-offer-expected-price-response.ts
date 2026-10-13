import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featuredOfferExpectedPriceResponseBodySchema,
  type FeaturedOfferExpectedPriceResponseBody,
} from "./featured-offer-expected-price-response-body.js";
import {
  getOffersHttpStatusLineSchema,
  type GetOffersHttpStatusLine,
} from "./get-offers-http-status-line.js";

/** An individual FOEP response. */
export type FeaturedOfferExpectedPriceResponse = {
  /** The HTTP status line associated with the response. */
  status?: GetOffersHttpStatusLine;
  /** The body of a FOEP response. */
  body?: FeaturedOfferExpectedPriceResponseBody;
};

export const featuredOfferExpectedPriceResponseSchema: Schema<FeaturedOfferExpectedPriceResponse> =
  s.object<FeaturedOfferExpectedPriceResponse>({
    status: s.optional(s.lazy(() => getOffersHttpStatusLineSchema)),
    body: s.optional(s.lazy(() => featuredOfferExpectedPriceResponseBodySchema)),
  });
