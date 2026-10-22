import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShippingSpeed = {
  shippingType?: string;
  issueTitle?: string;
  issueDesc?: string;
  score?: number;
};

export const shippingSpeedSchema: Schema<ShippingSpeed> = s.object<ShippingSpeed>({
  shippingType: s.optional(s.string()),
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
