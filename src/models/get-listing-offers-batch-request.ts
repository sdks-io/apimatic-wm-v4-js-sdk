import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listingOffersRequestSchema, type ListingOffersRequest } from "./listing-offers-request.js";

/** The request associated with the getListingOffersBatch API call. */
export type GetListingOffersBatchRequest = {
  /** A list of getListingOffers batched requests to run. */
  requests?: ListingOffersRequest[];
};

export const getListingOffersBatchRequestSchema: Schema<GetListingOffersBatchRequest> =
  s.object<GetListingOffersBatchRequest>({
    requests: s.optional(s.array(s.lazy(() => listingOffersRequestSchema))),
  });
