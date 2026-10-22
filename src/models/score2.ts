import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Score<br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Score2 = {
  /** Offer Score<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  offerScore?: number;
  /** Content Score<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  contentScore?: number;
  /** Rating Review Score<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  ratingReviewScore?: number;
  /** Competitive Price Score<br><b style='color:green;'>Market availability: US</b> */
  competitivePriceScore?: number;
  /** Shipping Score<br><b style='color:green;'>Market availability: US</b> */
  shippingScore?: number;
  /** Rating Review Score<br><b style='color:green;'>Market availability: US</b> */
  transactibilityScore?: number;
};

export const score2Schema: Schema<Score2> = s.object<Score2>({
  offerScore: s.optional(s.float64()),
  contentScore: s.optional(s.float64()),
  ratingReviewScore: s.optional(s.float64()),
  competitivePriceScore: s.optional(s.float64()),
  shippingScore: s.optional(s.float64()),
  transactibilityScore: s.optional(s.float64()),
});
