import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { enumFilter2Schema, type EnumFilter2 } from "../enum-filter2.js";
import { multiValueFilter1Schema, type MultiValueFilter1 } from "../multi-value-filter1.js";
import { rangeFilterSchema, type RangeFilter } from "../range-filter.js";

/** Supertype of all row filters. */
export type RowFilter1 = EnumFilter2 | RangeFilter | MultiValueFilter1;

export const rowFilter1Schema: Schema<RowFilter1> = s.of<RowFilter1>(
  s.union([
    s.lazy(() => enumFilter2Schema),
    s.lazy(() => rangeFilterSchema),
    s.lazy(() => multiValueFilter1Schema),
  ]),
);
