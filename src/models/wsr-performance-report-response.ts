import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrPaginationSchema, type WsrPagination } from "./wsr-pagination.js";
import { wsrPerformanceDataSchema, type WsrPerformanceData } from "./wsr-performance-data.js";

/**
 * Performance report response containing aggregated metrics data and pagination info.
 *
 * **Note**: The availability of identifier fields (`adGroupId`, `creativeId`) depends on the
 * `performanceBy` parameter used in the request.
 */
export type WsrPerformanceReportResponse = {
  /**
   * List of performance metrics data aggregated by the specified performance level (`CAMPAIGN`,
   * `ADGROUP`, or `CREATIVE`).
   *
   * Empty array when no data is available for the given criteria.
   */
  data?: WsrPerformanceData[];
  /**
   * Pagination metadata for navigating through the report results.
   *
   * **Empty Response**: When no data is available, all fields will be 0.
   */
  pagination?: WsrPagination;
};

export const wsrPerformanceReportResponseSchema: Schema<WsrPerformanceReportResponse> =
  s.object<WsrPerformanceReportResponse>({
    data: s.optional(s.array(s.lazy(() => wsrPerformanceDataSchema))),
    pagination: s.optional(s.lazy(() => wsrPaginationSchema)),
  });
