import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ineligibilityReasonSchema, type IneligibilityReason } from "./ineligibility-reason.js";

export type IneligibleRate = {
  carrierName?: string;
  serviceName?: string;
  ineligibilityReasons?: IneligibilityReason[];
};

export const ineligibleRateSchema: Schema<IneligibleRate> = s.object<IneligibleRate>({
  carrierName: s.optional(s.string()),
  serviceName: s.optional(s.string()),
  ineligibilityReasons: s.optional(s.array(s.lazy(() => ineligibilityReasonSchema))),
});
