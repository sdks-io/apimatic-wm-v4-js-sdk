import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisputeEligibilityResponse = {
  isEligible?: boolean;
  reason?: string;
};

export const disputeEligibilityResponseSchema: Schema<DisputeEligibilityResponse> =
  s.object<DisputeEligibilityResponse>({
    isEligible: s.optional(s.boolean()),
    reason: s.optional(s.string()),
  });
