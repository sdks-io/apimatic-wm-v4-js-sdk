import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type FasterPayoutEligibilityResponse = {
  isEligible?: boolean;
  ineligibleReason?: string;
  availableAmount?: Money;
};

export const fasterPayoutEligibilityResponseSchema: Schema<FasterPayoutEligibilityResponse> =
  s.object<FasterPayoutEligibilityResponse>({
    isEligible: s.optional(s.boolean()),
    ineligibleReason: s.optional(s.string()),
    availableAmount: s.optional(s.lazy(() => moneySchema)),
  });
