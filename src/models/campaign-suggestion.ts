import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignRecommendationSchema, type CampaignRecommendation } from "./campaign-recommendation.js";

/**
 * Campaign-level suggestion containing current campaign settings and an array of actionable
 * recommendations.
 */
export type CampaignSuggestion = {
  /** Unique campaign identifier. */
  campaignId?: string;
  /** Human-readable campaign name. */
  name?: string;
  /**
   * Current bidding strategy type configured for the campaign (For example, `TARGET_ROAS`,
   * `MAXIMIZE_CLICKS`).
   */
  biddingStrategyType?: string;
  /**
   * Current target Return on Ad Spend (ROAS) configured for the campaign. Only applicable when
   * `biddingStrategyType` is `TARGET_ROAS`.
   */
  targetRoas?: number | null;
  /** Current daily budget configured for the campaign (in USD). */
  dailyBudget?: number;
  /**
   * List of actionable recommendations for this campaign. Each recommendation includes the type,
   * recommended value, and projected performance impact.
   */
  campaignRecommendations?: CampaignRecommendation[];
};

export const campaignSuggestionSchema: Schema<CampaignSuggestion> = s.object<CampaignSuggestion>({
  campaignId: s.optional(s.string()),
  name: s.optional(s.string()),
  biddingStrategyType: s.optional(s.string()),
  targetRoas: s.optionalNullable(s.float64()),
  dailyBudget: s.optional(s.float64()),
  campaignRecommendations: s.optional(s.array(s.lazy(() => campaignRecommendationSchema))),
});
