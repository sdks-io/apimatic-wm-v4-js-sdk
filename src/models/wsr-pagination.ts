import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination metadata for navigating through the report results.
 *
 * **Empty Response**: When no data is available, all fields will be 0.
 */
export type WsrPagination = {
  /** Current page number (1-indexed). Value is 0 when no data is available. */
  pageNo?: number;
  /**
   * Number of records per page (same as limit in request). Value is 0 when no data is available.
   */
  pageSize?: number;
  /** Total number of records available across all pages */
  totalCount?: number;
  /** Total number of pages available */
  totalPages?: number;
};

export const wsrPaginationSchema: Schema<WsrPagination> = s.object<WsrPagination>({
  pageNo: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
});
