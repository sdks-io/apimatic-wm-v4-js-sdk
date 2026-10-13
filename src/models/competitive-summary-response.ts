import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  competitiveSummaryResponseBodySchema,
  type CompetitiveSummaryResponseBody,
} from "./competitive-summary-response-body.js";
import {
  getOffersHttpStatusLineSchema,
  type GetOffersHttpStatusLine,
} from "./get-offers-http-status-line.js";

/** An individual competitive summary response. */
export type CompetitiveSummaryResponse = {
  /** The HTTP status line associated with the response. */
  status?: GetOffersHttpStatusLine;
  /** The body of a competitive summary response. */
  body?: CompetitiveSummaryResponseBody;
};

export const competitiveSummaryResponseSchema: Schema<CompetitiveSummaryResponse> =
  s.object<CompetitiveSummaryResponse>({
    status: s.optional(s.lazy(() => getOffersHttpStatusLineSchema)),
    body: s.optional(s.lazy(() => competitiveSummaryResponseBodySchema)),
  });
