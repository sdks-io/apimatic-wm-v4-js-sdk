import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rowFilter1Schema, type RowFilter1 } from "./unions/row-filter1.js";

/** Request Payload */
export type GenerateReportPayload = {
  /** Row Level filters */
  rowFilters?: RowFilter1[];
  /** Columns to exclude from report. */
  excludeColumns?: string[];
  /** Start timestamp of the report date range. */
  dataStartTime?: string;
  /** End timestamp of the report date range. */
  dataEndTime?: string;
};

export const generateReportPayloadSchema: Schema<GenerateReportPayload> = s.object<GenerateReportPayload>({
  rowFilters: s.optional(s.array(s.lazy(() => rowFilter1Schema))),
  excludeColumns: s.optional(s.array(s.string())),
  dataStartTime: s.optional(s.string()),
  dataEndTime: s.optional(s.string()),
});
