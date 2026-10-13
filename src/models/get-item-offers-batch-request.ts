import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemOffersRequestSchema, type ItemOffersRequest } from "./item-offers-request.js";

/** The request associated with the getItemOffersBatch API call. */
export type GetItemOffersBatchRequest = {
  /** A list of getItemOffers batched requests to run. */
  requests?: ItemOffersRequest[];
};

export const getItemOffersBatchRequestSchema: Schema<GetItemOffersBatchRequest> =
  s.object<GetItemOffersBatchRequest>({
    requests: s.optional(s.array(s.lazy(() => itemOffersRequestSchema))),
  });
