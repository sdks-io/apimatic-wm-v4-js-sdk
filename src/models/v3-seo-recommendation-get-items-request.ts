import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchFilterSchema, type SearchFilter } from "./search-filter.js";

export type V3SeoRecommendationGetItemsRequest = {
  searchFilter?: SearchFilter;
};

export const v3SeoRecommendationGetItemsRequestSchema: Schema<V3SeoRecommendationGetItemsRequest> =
  s.object<V3SeoRecommendationGetItemsRequest>({
    searchFilter: s.optional(s.lazy(() => searchFilterSchema)),
  });
