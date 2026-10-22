import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type FreeShippingSpeed5 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueTitle?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueDesc?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
};

export const freeShippingSpeed5Schema: Schema<FreeShippingSpeed5> = s.object<FreeShippingSpeed5>({
  issueTitle: s.optional(s.string()),
  issueDesc: s.optional(s.string()),
  score: s.optional(s.int()),
});
