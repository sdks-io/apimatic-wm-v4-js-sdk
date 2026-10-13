import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemOffersResponseSchema, type ItemOffersResponse } from "./item-offers-response.js";

/** The response associated with the getItemOffersBatch API call. */
export type GetItemOffersBatchResponse = {
  /** A list of getItemOffers batched responses. */
  responses?: ItemOffersResponse[];
};

export const getItemOffersBatchResponseSchema: Schema<GetItemOffersBatchResponse> =
  s.object<GetItemOffersBatchResponse>({
    responses: s.optional(s.array(s.lazy(() => itemOffersResponseSchema))),
  });
