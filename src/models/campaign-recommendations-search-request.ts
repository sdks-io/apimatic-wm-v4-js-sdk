import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  campaignRecommendationsFilterSchema,
  type CampaignRecommendationsFilter,
} from "./campaign-recommendations-filter.js";
import {
  campaignRecommendationsPageSchema,
  type CampaignRecommendationsPage,
} from "./campaign-recommendations-page.js";
import { recommendationsSortSchema, type RecommendationsSort } from "./recommendations-sort.js";

/**
 * Request DTO for searching campaign-level recommendations.
 *
 * All fields are optional. The request body itself is also optional — when absent, sensible
 * defaults are applied:
 * - `page.offset`: 0
 * - `page.limit`: 10
 * - No filters, no sorting
 *
 * **Filter behavior**: Filters are combined using the AND operator. Multiple values within a single
 * filter act as OR.
 */
export type CampaignRecommendationsSearchRequest = {
  /**
   * Pagination configuration for campaign recommendations.
   *
   * **Defaults when page is not provided**: `offset=0`, `limit=10`
   *
   * Both `offset` and `limit` are required when the `page` object is provided.
   */
  page?: CampaignRecommendationsPage;
  /**
   * Sorting configuration for ordering search results.
   *
   * Both `field` and `order` are required when the `sort` object is provided.
   */
  sort?: RecommendationsSort;
  /**
   * List of filters to narrow down results. Multiple filters are combined using the AND operator.
   * Each filter field must be specified only once (no duplicates).
   */
  filters?: CampaignRecommendationsFilter[];
};

export const campaignRecommendationsSearchRequestSchema: Schema<CampaignRecommendationsSearchRequest> =
  s.object<CampaignRecommendationsSearchRequest>({
    page: s.optional(s.lazy(() => campaignRecommendationsPageSchema)),
    sort: s.optional(s.lazy(() => recommendationsSortSchema)),
    filters: s.optional(s.array(s.lazy(() => campaignRecommendationsFilterSchema))),
  });
