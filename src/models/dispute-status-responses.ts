import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeStatusResponseSchema, type DisputeStatusResponse } from "./dispute-status-response.js";

export type DisputeStatusResponses = {
  /** Items status included in the list. */
  itemResponse: DisputeStatusResponse[];
};

export const disputeStatusResponsesSchema: Schema<DisputeStatusResponses> = s.object<DisputeStatusResponses>({
  itemResponse: s.array(s.lazy(() => disputeStatusResponseSchema)),
});
