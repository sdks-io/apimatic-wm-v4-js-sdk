import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Items status included in the response list. */
export type DisputeContestResponse = {
  /** Status of the issue submitted. */
  status?: Status;
};

export const disputeContestResponseSchema: Schema<DisputeContestResponse> = s.object<DisputeContestResponse>({
  status: s.optional(s.lazy(() => statusSchema)),
});
