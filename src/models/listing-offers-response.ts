import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getOffersHttpStatusLineSchema,
  type GetOffersHttpStatusLine,
} from "./get-offers-http-status-line.js";
import { getOffersResponseSchema, type GetOffersResponse } from "./get-offers-response.js";
import { httpResponseHeadersSchema, type HttpResponseHeaders } from "./http-response-headers.js";
import { listingOffersRequestSchema, type ListingOffersRequest } from "./listing-offers-request.js";

/** Schema for an individual ListingOffersResponse. */
export type ListingOffersResponse = {
  /** A mapping of additional HTTP headers to receive for the individual batch request. */
  headers?: HttpResponseHeaders;
  /** The HTTP status line associated with the response. */
  status?: GetOffersHttpStatusLine;
  /** The response schema for the getListingOffers and getItemOffers operations. */
  body: GetOffersResponse;
  /** List of request parameters accepted by the getListingOffers operation. */
  request?: ListingOffersRequest;
};

export const listingOffersResponseSchema: Schema<ListingOffersResponse> = s.object<ListingOffersResponse>({
  headers: s.optional(s.lazy(() => httpResponseHeadersSchema)),
  status: s.optional(s.lazy(() => getOffersHttpStatusLineSchema)),
  body: getOffersResponseSchema,
  request: s.optional(s.lazy(() => listingOffersRequestSchema)),
});
