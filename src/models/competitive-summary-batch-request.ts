import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  competitiveSummaryRequestSchema,
  type CompetitiveSummaryRequest,
} from "./competitive-summary-request.js";

/** The request body for the getCompetitiveSummary operation. */
export type CompetitiveSummaryBatchRequest = {
  /** A batched list of competitive summary requests. */
  requests?: CompetitiveSummaryRequest[];
};

export const competitiveSummaryBatchRequestSchema: Schema<CompetitiveSummaryBatchRequest> =
  s.object<CompetitiveSummaryBatchRequest>({
    requests: s.optional(s.array(s.lazy(() => competitiveSummaryRequestSchema))),
  });
