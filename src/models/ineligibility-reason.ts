import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IneligibilityReason = {
  code?: string;
  message?: string;
};

export const ineligibilityReasonSchema: Schema<IneligibilityReason> = s.object<IneligibilityReason>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
