import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination metadata for navigating through search results.
 *
 * Includes `hasNextPage` and `hasPreviousPage` boolean flags for convenient pagination control in
 * UIs.
 */
export type DiagnosticPagination = {
  /** Current page number (0-based). Calculated as: offset / limit */
  pageNo?: number;
  /** Number of items per page (same as `limit` in request). */
  pageSize?: number;
  /** Total number of items matching the search criteria across all pages. */
  totalCount?: number;
  /** Total number of pages available. Calculated as: ceil(totalCount / pageSize) */
  totalPages?: number;
  /** `true` if more pages exist after the current page. */
  hasNextPage?: boolean;
  /** `true` if pages exist before the current page. */
  hasPreviousPage?: boolean;
};

export const diagnosticPaginationSchema: Schema<DiagnosticPagination> = s.object<DiagnosticPagination>({
  pageNo: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
  hasNextPage: s.optional(s.boolean()),
  hasPreviousPage: s.optional(s.boolean()),
});
