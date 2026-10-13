import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import { getOffersResultSchema, type GetOffersResult } from "./get-offers-result.js";

/** The response schema for the getListingOffers and getItemOffers operations. */
export type GetOffersResponse = {
  /** The payload for the getListingOffers and getItemOffers operations. */
  payload?: GetOffersResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: Error3[];
};

export const getOffersResponseSchema: Schema<GetOffersResponse> = s.object<GetOffersResponse>({
  payload: s.optional(s.lazy(() => getOffersResultSchema)),
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
});
