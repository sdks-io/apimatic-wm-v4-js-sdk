import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PerformanceBy, performanceBySchema } from "./performance-by.js";
import { wsrFilterSchema, type WsrFilter } from "./wsr-filter.js";
import { wsrPageSchema, type WsrPage } from "./wsr-page.js";
import { wsrSortSchema, type WsrSort } from "./wsr-sort.js";

/**
 * Request DTO for fetching campaign performance reports and item performance reports.
 *
 * **Required Fields**: `startDate`, `endDate` **Optional Fields**: `performanceBy` (defaults to
 * `CREATIVE`), `page`, `sort`, `filters`
 */
export type WsrReportRequest = {
  /**
   * Aggregation level for metrics. Determines which identifier fields are populated in response.
   *
   * - **CAMPAIGN**: Only `campaignId` populated (`adGroupId`, `creativeId` will be null)
   * - **ADGROUP**: `campaignId` and `adGroupId` populated (`creativeId` will be null)
   * - **CREATIVE**: All IDs populated (`campaignId`, `adGroupId`, `creativeId`)
   *
   * **Default**: `CREATIVE` (when not specified)
   *
   * @default PerformanceBy.Creative
   */
  performanceBy?: PerformanceBy;
  /**
   * Report start date in ISO format (YYYY-MM-DD).
   *
   * **Required**: Yes **Validation**: Must be a valid date in ISO format
   */
  startDate: string;
  /**
   * Report end date in ISO format (YYYY-MM-DD).
   *
   * **Required**: Yes **Validation**:
   * - Must be strictly after startDate (not equal)
   * - Duration between startDate and endDate must be less than 1 year
   */
  endDate: string;
  /**
   * Pagination configuration for controlling result set size and navigation.
   *
   * The pagination uses offset-based navigation where:
   * - `offset` = starting record position (0-indexed)
   * - `limit` = number of records per page
   *
   * **Internal Conversion**: pageNumber = (offset / limit) + 1
   */
  page?: WsrPage;
  /**
   * Sort configuration for ordering the report results.
   *
   * **Defaults**: field="gmv", order="DESC"
   */
  sort?: WsrSort;
  /**
   * List of filters to apply on the report. Multiple filters can be combined for more specific
   * queries.
   */
  filters?: WsrFilter[];
};

export const wsrReportRequestSchema: Schema<WsrReportRequest> = s.object<WsrReportRequest>({
  performanceBy: s.defaulted(performanceBySchema, PerformanceBy.Creative),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  page: s.optional(s.lazy(() => wsrPageSchema)),
  sort: s.optional(s.lazy(() => wsrSortSchema)),
  filters: s.optional(s.array(s.lazy(() => wsrFilterSchema))),
});
