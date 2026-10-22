import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semItemDetailSchema, type SemItemDetail } from "./sem-item-detail.js";
import { semPaginationSchema, type SemPagination } from "./sem-pagination.js";

export type SemCatalogueResponse = {
  /** Pagination details */
  pagination?: SemPagination;
  /** List of item details included in the catalog response. */
  data?: SemItemDetail[];
};

export const semCatalogueResponseSchema: Schema<SemCatalogueResponse> = s.object<SemCatalogueResponse>({
  pagination: s.optional(s.lazy(() => semPaginationSchema)),
  data: s.optional(s.array(s.lazy(() => semItemDetailSchema))),
});
