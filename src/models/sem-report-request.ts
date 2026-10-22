import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semFilterSchema, type SemFilter } from "./sem-filter.js";
import { semPageSchema, type SemPage } from "./sem-page.js";
import { semSortSchema, type SemSort } from "./sem-sort.js";

export type SemReportRequest = {
  /** Pagination criteria */
  page?: SemPage;
  /** Sorting criteria */
  sort?: SemSort;
  /** Filtering criteria */
  filters?: SemFilter[];
};

export const semReportRequestSchema: Schema<SemReportRequest> = s.object<SemReportRequest>({
  page: s.optional(s.lazy(() => semPageSchema)),
  sort: s.optional(s.lazy(() => semSortSchema)),
  filters: s.optional(s.array(s.lazy(() => semFilterSchema))),
});
