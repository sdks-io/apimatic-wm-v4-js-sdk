import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Score */
export type Score = {
  /** Offer Score */
  offerScore?: number;
  /** Content Score */
  contentScore?: number;
  /** Rating Review Score */
  ratingReviewScore?: number;
};

export const scoreSchema: Schema<Score> = s.object<Score>({
  offerScore: s.optional(s.float64()),
  contentScore: s.optional(s.float64()),
  ratingReviewScore: s.optional(s.float64()),
});
