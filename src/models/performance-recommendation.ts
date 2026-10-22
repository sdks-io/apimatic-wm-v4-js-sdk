import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Recommendations to decrease the cancellation rate */
export type PerformanceRecommendation = {
  /** recommendation */
  recommendation?: string;
  /** More information link url */
  moreInfoLink?: string;
};

export const performanceRecommendationSchema: Schema<PerformanceRecommendation> =
  s.object<PerformanceRecommendation>({
    recommendation: s.optional(s.string()),
    moreInfoLink: s.optional(s.string()),
  });
