import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getOffersHttpStatusLineSchema,
  type GetOffersHttpStatusLine,
} from "./get-offers-http-status-line.js";
import { getOffersResponseSchema, type GetOffersResponse } from "./get-offers-response.js";
import { httpResponseHeadersSchema, type HttpResponseHeaders } from "./http-response-headers.js";
import { itemOffersRequestSchema, type ItemOffersRequest } from "./item-offers-request.js";

/** Schema for an individual ItemOffersResponse. */
export type ItemOffersResponse = {
  /** A mapping of additional HTTP headers to receive for the individual batch request. */
  headers?: HttpResponseHeaders;
  /** The HTTP status line associated with the response. */
  status?: GetOffersHttpStatusLine;
  /** The response schema for the getListingOffers and getItemOffers operations. */
  body: GetOffersResponse;
  /** List of request parameters accepted by the getItemOffers operation. */
  request: ItemOffersRequest;
};

export const itemOffersResponseSchema: Schema<ItemOffersResponse> = s.object<ItemOffersResponse>({
  headers: s.optional(s.lazy(() => httpResponseHeadersSchema)),
  status: s.optional(s.lazy(() => getOffersHttpStatusLineSchema)),
  body: getOffersResponseSchema,
  request: itemOffersRequestSchema,
});
