import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FreeShippingSpeed = {
  issueTitle?: string;
  issueDesc?: string;
  score?: number;
};

export const freeShippingSpeedSchema: Schema<FreeShippingSpeed> = s.object<FreeShippingSpeed>({
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
