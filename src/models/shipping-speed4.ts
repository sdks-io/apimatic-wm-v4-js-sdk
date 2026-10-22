import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US only</b> */
export type ShippingSpeed4 = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  totalIssue?: number;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  shippingType?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  issueTitle?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  issueDesc?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  score?: number;
};

export const shippingSpeed4Schema: Schema<ShippingSpeed4> = s.object<ShippingSpeed4>({
  totalIssue: s.optional(s.int()),
  shippingType: s.optional(s.string()),
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
