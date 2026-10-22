import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rowFilterTypeSchema, type RowFilterType } from "./row-filter-type.js";

export type RangeFilter = {
  /**
   * Start value for the filter range.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  from?: string;
  /**
   * End value for the filter range.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  to?: string;
  /**
   * The type of filter to apply.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  rowFilterType: RowFilterType;
  /**
   * Specifies the column name to which the filter should be applied. Only certain columns in the
   * report support this filter. Refer to the guide section for more details.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  columnName: string;
};

export const rangeFilterSchema: Schema<RangeFilter> = s.object<RangeFilter>({
  from: s.optional(s.string()),
  to: s.optional(s.string()),
  rowFilterType: rowFilterTypeSchema,
  columnName: s.string(),
});
