import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listingOffersResponseSchema, type ListingOffersResponse } from "./listing-offers-response.js";

/** The response associated with the getListingOffersBatch API call. */
export type GetListingOffersBatchResponse = {
  /** A list of getListingOffers batched responses. */
  responses?: ListingOffersResponse[];
};

export const getListingOffersBatchResponseSchema: Schema<GetListingOffersBatchResponse> =
  s.object<GetListingOffersBatchResponse>({
    responses: s.optional(s.array(s.lazy(() => listingOffersResponseSchema))),
  });
