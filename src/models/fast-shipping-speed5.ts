import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type FastShippingSpeed5 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueTitle?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueDesc?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
};

export const fastShippingSpeed5Schema: Schema<FastShippingSpeed5> = s.object<FastShippingSpeed5>({
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
