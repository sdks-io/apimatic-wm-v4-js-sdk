import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateGranularitySchema, type DateGranularity } from "./date-granularity.js";
import { rowFilter1Schema, type RowFilter1 } from "./unions/row-filter1.js";

/** Request payload */
export type V3ReportsReportRequestsRequest = {
  /**
   * Specifies a set of row level filters used to narrow down data by specific reportType. Refer to
   * the guide section for more details.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  rowFilters?: RowFilter1[];
  /**
   * Specifies columns to exclude from a report. Note that not all reports support this filter.
   * Refer to the guide section for more details.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  excludeColumns?: string[];
  /**
   * Start timestamp for the report data range. Use ISO 8601 format for the date
   * (`YYYY-MM-DDTHH:mm:ssZ`). Required when using `reportType=ITEM_PERFORMANCE` and
   * `reportVersion=v3`. The date range from `dataStartTime` to `dataEndTime` must not exceed 2
   * years (730 days).
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  dataStartTime?: string;
  /**
   * End timestamp for the report data range. Use ISO 8601 format for the date
   * (`YYYY-MM-DDTHH:mm:ssZ`). Required when using `reportType=ITEM_PERFORMANCE` and
   * `reportVersion=v3`. Must be greater than or equal to `dataStartTime`.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  dataEndTime?: string;
  /**
   * Specifies the date granularity for aggregating report data. Required when using
   * `reportType=ITEM_PERFORMANCE` and `reportVersion=v3`. Valid values are `DAILY`, `WEEKLY`,
   * `MONTHLY`, or `QUARTERLY`. Ignored for all other report types and versions.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  dateGranularity?: DateGranularity;
};

export const v3ReportsReportRequestsRequestSchema: Schema<V3ReportsReportRequestsRequest> =
  s.object<V3ReportsReportRequestsRequest>({
    rowFilters: s.optional(s.array(s.lazy(() => rowFilter1Schema))),
    excludeColumns: s.optional(s.array(s.string())),
    dataStartTime: s.optional(s.string()),
    dataEndTime: s.optional(s.string()),
    dateGranularity: s.optional(s.lazy(() => dateGranularitySchema)),
  });
