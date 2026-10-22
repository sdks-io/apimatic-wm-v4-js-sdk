import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enumFilter5Schema, type EnumFilter5 } from "./enum-filter5.js";
import { multiValueFilter6Schema, type MultiValueFilter6 } from "./multi-value-filter6.js";
import { rangeFilter4Schema, type RangeFilter4 } from "./range-filter4.js";

/**
 * Different type of filters can be passed in this object.<br><b style='color:green;'>Market
 * availability: US | CA | MX</span></b>
 */
export type FilterCriteria5 = {
  /**
   * To filter with a search text having a word that can be part of the recommended data. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  searchText?: string;
  /**
   * Filters based on multiple values associated with a specific parameter. No parameter should be
   * repeated. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  multiValueFilter?: MultiValueFilter6[];
  /**
   * Filter based on preset parameters and their associated values is possible with EnumFilter. No
   * parameter should be repeated. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  enumFilter?: EnumFilter5[];
  /**
   * Filter based on a range with RangeFilter. You must also pass a parameter along with any of the
   * beginning or the ending points or both. No parameter should be repeated. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  rangeFilter?: RangeFilter4[];
  /**
   * Filters the Top Go-Get Items, which are high-demand, customer-favorite items that sellers
   * should prioritize adding to their Walmart catalog. Set to `true` to return only Top Go-Get
   * Items. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  isTopGoGetItem?: boolean;
  /**
   * Filter for newly added recommendations. These are high-demand, customer-favorite items added to
   * the recommendation set within the past 30 days. Set to `true` to return only these items.
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  isNewRecommendation?: boolean;
};

export const filterCriteria5Schema: Schema<FilterCriteria5> = s.object<FilterCriteria5>({
  searchText: s.optional(s.string()),
  multiValueFilter: s.optional(s.array(s.lazy(() => multiValueFilter6Schema))),
  enumFilter: s.optional(s.array(s.lazy(() => enumFilter5Schema))),
  rangeFilter: s.optional(s.array(s.lazy(() => rangeFilter4Schema))),
  isTopGoGetItem: s.optional(s.boolean()),
  isNewRecommendation: s.optional(s.boolean()),
});
