import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rowFilter1Schema, type RowFilter1 } from "./unions/row-filter1.js";

/** Request Payload */
export type Payload12 = {
  /** Row Level filters */
  rowFilters?: RowFilter1[];
  /** Columns to exclude from report */
  excludeColumns?: string[];
  /** Start timestamp of the report date range */
  dataStartTime?: string;
  /** End timestamp of the report date range */
  dataEndTime?: string;
};

export const payload12Schema: Schema<Payload12> = s.object<Payload12>({
  rowFilters: s.optional(s.array(s.lazy(() => rowFilter1Schema))),
  excludeColumns: s.optional(s.array(s.string())),
  dataStartTime: s.optional(s.string()),
  dataEndTime: s.optional(s.string()),
});
