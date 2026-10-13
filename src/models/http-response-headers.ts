import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A mapping of additional HTTP headers to receive for the individual batch request. */
export type HttpResponseHeaders = {
  /** The timestamp that the API request was received. */
  date?: string;
  /** Unique request reference identifier. */
  xRequestId?: string;
};

export const httpResponseHeadersSchema: Schema<HttpResponseHeaders> = s.object<HttpResponseHeaders>({
  date: s.optional(s.string()),
  xRequestId: s.optional(s.string()),
  _keysMap: {
    date: "Date",
    xRequestId: "X-Request-Id",
  },
});
