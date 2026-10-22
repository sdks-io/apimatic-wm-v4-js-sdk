import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { multiValueFilter7Schema, type MultiValueFilter7 } from "./multi-value-filter7.js";

/**
 * Different type of filters can be passed in this object.<br><b style='color:green;'>Market
 * availability: US | CA | MX</span></b>
 */
export type FilterCriteria4 = {
  /**
   * To filter with a search text having a word that can be part of the categorization data. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  searchText?: string;
  /**
   * Filters based on multiple values associated with a specific parameter. No parameter should be
   * repeated.
   */
  multiValueFilter?: MultiValueFilter7[];
};

export const filterCriteria4Schema: Schema<FilterCriteria4> = s.object<FilterCriteria4>({
  searchText: s.optional(s.string()),
  multiValueFilter: s.optional(s.array(s.lazy(() => multiValueFilter7Schema))),
});
