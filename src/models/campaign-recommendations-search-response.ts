import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignSuggestionSchema, type CampaignSuggestion } from "./campaign-suggestion.js";
import { diagnosticPaginationSchema, type DiagnosticPagination } from "./diagnostic-pagination.js";

/**
 * Search response containing paginated campaign-level recommendations and pagination metadata.
 *
 * Each campaign in the `data` array includes its current settings (bidding strategy, target ROAS,
 * daily budget) and an array of actionable recommendations with projected performance impact.
 */
export type CampaignRecommendationsSearchResponse = {
  /**
   * Pagination metadata for navigating through search results.
   *
   * Includes `hasNextPage` and `hasPreviousPage` boolean flags for convenient pagination control in
   * UIs.
   */
  pagination?: DiagnosticPagination;
  /**
   * Paginated list of campaign-level suggestions. Each campaign appears once with all its
   * recommendations. Empty array when no campaigns match the search criteria.
   */
  data?: CampaignSuggestion[];
};

export const campaignRecommendationsSearchResponseSchema: Schema<CampaignRecommendationsSearchResponse> =
  s.object<CampaignRecommendationsSearchResponse>({
    pagination: s.optional(s.lazy(() => diagnosticPaginationSchema)),
    data: s.optional(s.array(s.lazy(() => campaignSuggestionSchema))),
  });
