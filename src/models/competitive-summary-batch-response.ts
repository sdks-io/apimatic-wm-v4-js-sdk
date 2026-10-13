import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  competitiveSummaryResponseSchema,
  type CompetitiveSummaryResponse,
} from "./competitive-summary-response.js";

/** The response schema for the getCompetitiveSummary operation. */
export type CompetitiveSummaryBatchResponse = {
  /** A batched list of competitive summary responses. */
  responses?: CompetitiveSummaryResponse[];
};

export const competitiveSummaryBatchResponseSchema: Schema<CompetitiveSummaryBatchResponse> =
  s.object<CompetitiveSummaryBatchResponse>({
    responses: s.optional(s.array(s.lazy(() => competitiveSummaryResponseSchema))),
  });
