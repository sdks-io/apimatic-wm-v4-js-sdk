import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Pagination details */
export type SemPagination = {
  /** Page number. */
  pageNo?: number;
  /** Page size */
  pageSize?: number;
  /** Total count */
  totalCount?: number;
  /** Total pages */
  totalPages?: number;
};

export const semPaginationSchema: Schema<SemPagination> = s.object<SemPagination>({
  pageNo: s.optional(s.int()),
  pageSize: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
});
