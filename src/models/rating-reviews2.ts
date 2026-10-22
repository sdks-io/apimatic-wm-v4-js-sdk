import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type RatingReviews2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  maxRating?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  ratingCount?: string;
};

export const ratingReviews2Schema: Schema<RatingReviews2> = s.object<RatingReviews2>({
  maxRating: s.optional(s.string()),
  ratingCount: s.optional(s.string()),
});
