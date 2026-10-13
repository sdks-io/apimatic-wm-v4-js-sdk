import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getOffersHttpStatusLineSchema,
  type GetOffersHttpStatusLine,
} from "./get-offers-http-status-line.js";
import { getOffersResponseSchema, type GetOffersResponse } from "./get-offers-response.js";
import { httpResponseHeadersSchema, type HttpResponseHeaders } from "./http-response-headers.js";

/** Common schema present in ItemOffersResponse and ListingOffersResponse. */
export type BatchOffersResponse = {
  /** A mapping of additional HTTP headers to receive for the individual batch request. */
  headers?: HttpResponseHeaders;
  /** The HTTP status line associated with the response. */
  status?: GetOffersHttpStatusLine;
  /** The response schema for the getListingOffers and getItemOffers operations. */
  body: GetOffersResponse;
};

export const batchOffersResponseSchema: Schema<BatchOffersResponse> = s.object<BatchOffersResponse>({
  headers: s.optional(s.lazy(() => httpResponseHeadersSchema)),
  status: s.optional(s.lazy(() => getOffersHttpStatusLineSchema)),
  body: getOffersResponseSchema,
});
