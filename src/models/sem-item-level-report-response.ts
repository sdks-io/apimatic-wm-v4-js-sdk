import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semItemReportSchema, type SemItemReport } from "./sem-item-report.js";
import { semPaginationSchema, type SemPagination } from "./sem-pagination.js";

export type SemItemLevelReportResponse = {
  /** Pagination details */
  pagination?: SemPagination;
  /** List of items with performance data. */
  data?: SemItemReport[];
};

export const semItemLevelReportResponseSchema: Schema<SemItemLevelReportResponse> =
  s.object<SemItemLevelReportResponse>({
    pagination: s.optional(s.lazy(() => semPaginationSchema)),
    data: s.optional(s.array(s.lazy(() => semItemReportSchema))),
  });
