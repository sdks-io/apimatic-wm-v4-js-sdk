import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterRequestSchema, type FilterRequest } from "./filter-request.js";
import { searchRequestSchema, type SearchRequest } from "./search-request.js";
import { sortRequestSchema, type SortRequest } from "./sort-request.js";

export type GetIrpItemsRequest = {
  /** Search request. */
  search?: SearchRequest[];
  /** Filter request. */
  filter: FilterRequest;
  /** Sort request. */
  sort?: SortRequest[];
};

export const getIrpItemsRequestSchema: Schema<GetIrpItemsRequest> = s.object<GetIrpItemsRequest>({
  search: s.optional(s.array(s.lazy(() => searchRequestSchema))),
  filter: filterRequestSchema,
  sort: s.optional(s.array(s.lazy(() => sortRequestSchema))),
});
