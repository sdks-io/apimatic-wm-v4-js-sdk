import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RatingReviews = {
  maxRating?: string;
  ratingCount?: string;
};

export const ratingReviewsSchema: Schema<RatingReviews> = s.object<RatingReviews>({
  maxRating: s.optional(s.string()),
  ratingCount: s.optional(s.string()),
});
