import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  multiValueFilterCriteriaForCategorizationSchema,
  type MultiValueFilterCriteriaForCategorization,
} from "./multi-value-filter-criteria-for-categorization.js";

/** Different type of filters can be passed in this object. */
export type CategorizationRequestFilter = {
  /** To filter with a search text having a word that can be part of the categorization data. */
  searchText?: string;
  /**
   * Filters based on multiple values associated with a specific parameter. No parameter should be
   * repeated.
   */
  multiValueFilter?: MultiValueFilterCriteriaForCategorization[];
};

export const categorizationRequestFilterSchema: Schema<CategorizationRequestFilter> =
  s.object<CategorizationRequestFilter>({
    searchText: s.optional(s.string()),
    multiValueFilter: s.optional(s.array(s.lazy(() => multiValueFilterCriteriaForCategorizationSchema))),
  });
