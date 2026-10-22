import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination configuration for campaign recommendations.
 *
 * **Defaults when page is not provided**: `offset=0`, `limit=10`
 *
 * Both `offset` and `limit` are required when the `page` object is provided.
 */
export type CampaignRecommendationsPage = {
  /**
   * The starting position for fetching records (0-based).
   *
   * **Constraints**: Must be zero or a positive value **Default**: 0 (when page is not provided)
   *
   * @default 0
   */
  offset?: number;
  /**
   * Maximum number of records to fetch per page.
   *
   * **Constraints**: Must be between 1 and 100 **Default**: 10 (when page is not provided)
   *
   * @default 10
   */
  limit?: number;
};

export const campaignRecommendationsPageSchema: Schema<CampaignRecommendationsPage> =
  s.object<CampaignRecommendationsPage>({
    offset: s.defaulted(s.int(), 0),
    limit: s.defaulted(s.int(), 10),
  });
