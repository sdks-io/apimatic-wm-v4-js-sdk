import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FastShippingSpeed = {
  issueTitle?: string;
  issueDesc?: string;
  score?: number;
};

export const fastShippingSpeedSchema: Schema<FastShippingSpeed> = s.object<FastShippingSpeed>({
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
