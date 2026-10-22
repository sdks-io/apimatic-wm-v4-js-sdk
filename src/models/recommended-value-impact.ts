import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { impactOptionSchema, type ImpactOption } from "./impact-option.js";

/**
 * Projected performance impact of the recommendation at three levels.
 *
 * - **recommended**: The optimal suggested value (marked `isRecommended: true`)
 * - **minRecommendation**: A conservative lower-bound option. May be `null` if not applicable.
 * - **maxRecommendation**: An aggressive upper-bound option. May be `null` if not applicable.
 */
export type RecommendedValueImpact = {
  /** A single recommendation option with its projected performance impact. */
  recommended?: ImpactOption;
  /**
   * Conservative lower-bound recommendation option. May be `null` when a minimum option is not
   * applicable.
   */
  minRecommendation?: ImpactOption | null;
  /**
   * Aggressive upper-bound recommendation option. May be `null` when a maximum option is not
   * applicable.
   */
  maxRecommendation?: ImpactOption | null;
};

export const recommendedValueImpactSchema: Schema<RecommendedValueImpact> = s.object<RecommendedValueImpact>({
  recommended: s.optional(s.lazy(() => impactOptionSchema)),
  minRecommendation: s.optionalNullable(s.lazy(() => impactOptionSchema)),
  maxRecommendation: s.optionalNullable(s.lazy(() => impactOptionSchema)),
});
