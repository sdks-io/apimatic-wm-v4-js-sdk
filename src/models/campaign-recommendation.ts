import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendedValueImpactSchema, type RecommendedValueImpact } from "./recommended-value-impact.js";
import { typeSchema, type Type } from "./type.js";

/**
 * An actionable recommendation for a campaign. Includes the recommendation type, suggested value,
 * and projected performance impact at three levels (recommended, minimum, maximum).
 */
export type CampaignRecommendation = {
  /**
   * Recommendation category.
   *
   * - **BUDGET**: Recommended budget adjustment (daily or total)
   * - **BIDDING_STRATEGY**: Recommended change to bidding strategy
   */
  type?: Type;
  /**
   * Specific recommendation subtype indicating the optimization action being suggested. Example
   * values include `INCREASE_DAILY_BUDGET` and bidding strategy adjustment actions.
   */
  subType?: string;
  /**
   * The primary recommended value as a string representation. For budget recommendations, this is
   * the suggested new budget amount.
   */
  recommendedValue?: string;
  /**
   * Projected performance impact of the recommendation at three levels.
   *
   * - **recommended**: The optimal suggested value (marked `isRecommended: true`)
   * - **minRecommendation**: A conservative lower-bound option. May be `null` if not applicable.
   * - **maxRecommendation**: An aggressive upper-bound option. May be `null` if not applicable.
   */
  recommendedValueImpact?: RecommendedValueImpact;
};

export const campaignRecommendationSchema: Schema<CampaignRecommendation> = s.object<CampaignRecommendation>({
  type: s.optional(s.lazy(() => typeSchema)),
  subType: s.optional(s.string()),
  recommendedValue: s.optional(s.string()),
  recommendedValueImpact: s.optional(s.lazy(() => recommendedValueImpactSchema)),
});
