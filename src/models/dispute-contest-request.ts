import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issuesSchema, type Issues } from "./issues.js";

export type DisputeContestRequest = {
  /** Items status included in the response list. */
  issues: Issues[];
};

export const disputeContestRequestSchema: Schema<DisputeContestRequest> = s.object<DisputeContestRequest>({
  issues: s.array(s.lazy(() => issuesSchema)),
});
