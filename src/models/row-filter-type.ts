import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of filter to apply.
 *
 * <strong style="color: green;">Market availability: Global</strong>
 */
export const RowFilterType = {
  RangeFilter: "rangeFilter",
  EnumFilter: "enumFilter",
  MultiValueFilter: "multiValueFilter",
} as const;
export type RowFilterType = (typeof RowFilterType)[keyof typeof RowFilterType] | (string & {});

export const rowFilterTypeSchema: EnumSchema<RowFilterType> = s.enumOf<RowFilterType>(RowFilterType);
