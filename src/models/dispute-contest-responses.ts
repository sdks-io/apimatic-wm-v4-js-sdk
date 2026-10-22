import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeContestResponseSchema, type DisputeContestResponse } from "./dispute-contest-response.js";

export type DisputeContestResponses = {
  /** Items status included in the response list. */
  itemResponse: DisputeContestResponse[];
};

export const disputeContestResponsesSchema: Schema<DisputeContestResponses> =
  s.object<DisputeContestResponses>({
    itemResponse: s.array(s.lazy(() => disputeContestResponseSchema)),
  });
