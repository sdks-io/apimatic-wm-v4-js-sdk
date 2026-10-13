import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the seller's feedback, including the percentage of positive feedback and total
 * ratings.
 */
export type SellerFeedbackType = {
  /** The percentage of positive feedback for the seller in the past 365 days. */
  sellerPositiveFeedbackRating?: number;
  /** The number of ratings received about the seller. */
  feedbackCount: number;
};

export const sellerFeedbackTypeSchema: Schema<SellerFeedbackType> = s.object<SellerFeedbackType>({
  sellerPositiveFeedbackRating: s.optional(s.float64()),
  feedbackCount: s.int(),
  _keysMap: {
    sellerPositiveFeedbackRating: "SellerPositiveFeedbackRating",
    feedbackCount: "FeedbackCount",
  },
});
