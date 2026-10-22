import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeItemIssuesSchema, type ActiveItemIssues } from "./active-item-issues.js";
import { diagnosticPaginationSchema, type DiagnosticPagination } from "./diagnostic-pagination.js";

/**
 * Search response containing paginated item-level diagnostics and pagination metadata.
 *
 * Each item's `issues` array contains `issueType` values as lightweight lookup keys. Partners
 * should use the dedicated `GET /item-issues/issue-types` endpoint to retrieve complete issue
 * metadata (name, description, category, fixability, help links) and cache it locally (recommended
 * TTL: 24 hours) to enrich search results.
 */
export type ItemDiagnosticSearchResponse = {
  /**
   * Pagination metadata for navigating through search results.
   *
   * Includes `hasNextPage` and `hasPreviousPage` boolean flags for convenient pagination control in
   * UIs.
   */
  pagination?: DiagnosticPagination;
  /**
   * Paginated list of item-level diagnostics. Each item appears once per unique `offerId` with all
   * campaign associations. Empty array when no items match the search criteria.
   */
  data?: ActiveItemIssues[];
};

export const itemDiagnosticSearchResponseSchema: Schema<ItemDiagnosticSearchResponse> =
  s.object<ItemDiagnosticSearchResponse>({
    pagination: s.optional(s.lazy(() => diagnosticPaginationSchema)),
    data: s.optional(s.array(s.lazy(() => activeItemIssuesSchema))),
  });
