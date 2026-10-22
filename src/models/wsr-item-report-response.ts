import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrItemDataSchema, type WsrItemData } from "./wsr-item-data.js";
import { wsrPaginationSchema, type WsrPagination } from "./wsr-pagination.js";

/**
 * Item report response containing item-level performance data and pagination info.
 *
 * Each record includes both campaign hierarchy identifiers and item-specific details.
 */
export type WsrItemReportResponse = {
  /**
   * List of item-level performance data. Empty array when no data is available for the given
   * criteria.
   */
  data?: WsrItemData[];
  /**
   * Pagination metadata for navigating through the report results.
   *
   * **Empty Response**: When no data is available, all fields will be 0.
   */
  pagination?: WsrPagination;
};

export const wsrItemReportResponseSchema: Schema<WsrItemReportResponse> = s.object<WsrItemReportResponse>({
  data: s.optional(s.array(s.lazy(() => wsrItemDataSchema))),
  pagination: s.optional(s.lazy(() => wsrPaginationSchema)),
});
