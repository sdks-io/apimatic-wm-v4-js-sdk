import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Price3 = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  totalIssue?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  price?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueTitle?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  competitorPrice?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  walmartShipping?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  competitorShipping?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  competitorUrl?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  additionalDes?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  asin?: string;
};

export const price3Schema: Schema<Price3> = s.object<Price3>({
  totalIssue: s.optional(s.int()),
  price: s.optional(s.float64()),
  issueTitle: s.optional(s.string()),
  competitorPrice: s.optional(s.float64()),
  walmartShipping: s.optional(s.float64()),
  competitorShipping: s.optional(s.float64()),
  competitorUrl: s.optional(s.string()),
  score: s.optional(s.float64()),
  additionalDes: s.optional(s.string()),
  asin: s.optional(s.string()),
});
