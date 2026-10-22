import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enumFilter1Schema, type EnumFilter1 } from "./enum-filter1.js";
import { multiValueFilterSchema, type MultiValueFilter } from "./multi-value-filter.js";
import { rangeFilterCriteriaSchema, type RangeFilterCriteria } from "./range-filter-criteria.js";

/** Different type of filters can be passed in this object. */
export type RecommendationRequestFilter = {
  /** To filter with a search text having a word that can be part of the recommended data. */
  searchText?: string;
  /**
   * Filters based on multiple values associated with a specific parameter. No parameter should be
   * repeated.
   */
  multiValueFilter?: MultiValueFilter[];
  /**
   * Filter based on preset parameters and their associated values is possible with EnumFilter. No
   * parameter should be repeated.
   */
  enumFilter?: EnumFilter1[];
  /**
   * Filter based on a range with RangeFilter. You must also pass a parameter along with any of the
   * beginning or the ending points or both. No parameter should be repeated.
   */
  rangeFilter?: RangeFilterCriteria[];
  /**
   * Filters the Top Go-Get Items, which are high-demand, customer-favorite items that sellers
   * should prioritize adding to their Walmart catalog. Set to `true` to return only Top Go-Get
   * Items.
   */
  isTopGoGetItem?: boolean;
  /**
   * Filter for newly added recommendations. These are high-demand, customer-favorite items added to
   * the recommendation set within the past 30 days. Set to `true` to return only these items.
   */
  isNewRecommendation?: boolean;
};

export const recommendationRequestFilterSchema: Schema<RecommendationRequestFilter> =
  s.object<RecommendationRequestFilter>({
    searchText: s.optional(s.string()),
    multiValueFilter: s.optional(s.array(s.lazy(() => multiValueFilterSchema))),
    enumFilter: s.optional(s.array(s.lazy(() => enumFilter1Schema))),
    rangeFilter: s.optional(s.array(s.lazy(() => rangeFilterCriteriaSchema))),
    isTopGoGetItem: s.optional(s.boolean()),
    isNewRecommendation: s.optional(s.boolean()),
  });
