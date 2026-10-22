import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diagnosticPageSchema, type DiagnosticPage } from "./diagnostic-page.js";
import { itemDiagnosticFilterSchema, type ItemDiagnosticFilter } from "./item-diagnostic-filter.js";

/**
 * Request DTO for searching item-level diagnostics.
 *
 * All fields are optional. The request body itself is also optional — when absent, sensible
 * defaults are applied:
 * - `page.offset`: 0
 * - `page.limit`: 100
 * - No filters (returns only items with issues: `BLOCKED` or `LIMITED`)
 *
 * **Current scope**: Results are scoped to items in active SEM campaigns. In a future release, the
 * `itemId` filter will support querying any item in the seller's catalog.
 *
 * **Default behavior**: When no `issueCategory` filter is provided, the API returns **only items
 * with issues** (`BLOCKED` or `LIMITED`). This design decision ensures diagnostics consumers
 * receive actionable problems first, reducing payload size and improving relevance. To include
 * healthy items, explicitly pass `issueCategory` with value `NO_ISSUES` or use all three values.
 *
 * **Filter behavior**: Filters are combined with AND logic. Multiple values within a single filter
 * act as OR. For example, filtering by `issueCategory`=[`BLOCKED`, `LIMITED`] returns items that
 * are either `BLOCKED` or `LIMITED`. Adding a second filter `issues`=[`ITEM_OUT_OF_STOCK`] narrows
 * results to items that are (`BLOCKED` or `LIMITED`) AND have `ITEM_OUT_OF_STOCK`.
 */
export type ItemDiagnosticSearchRequest = {
  /**
   * Pagination configuration for controlling result set size and navigation.
   *
   * **Defaults when page is not provided**: offset=0, limit=100
   *
   * Both `offset` and `limit` are required when the `page` object is provided.
   */
  page?: DiagnosticPage;
  /**
   * List of filters to narrow down results. Multiple filters are combined using the AND operator.
   * Each filter field must be specified only once (no duplicates).
   */
  filters?: ItemDiagnosticFilter[];
};

export const itemDiagnosticSearchRequestSchema: Schema<ItemDiagnosticSearchRequest> =
  s.object<ItemDiagnosticSearchRequest>({
    page: s.optional(s.lazy(() => diagnosticPageSchema)),
    filters: s.optional(s.array(s.lazy(() => itemDiagnosticFilterSchema))),
  });
