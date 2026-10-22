import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload61Schema, type Payload61 } from "./payload61.js";
import { reportType11Schema, type ReportType11 } from "./report-type11.js";

export type Schedule = {
  /** Unique identifier for the schedule. */
  scheduleId?: string;
  /** The timestamp (date and time) indicating when the report request was submitted. */
  requestSubmissionDate?: string;
  /** Specifies the type of report to be generated. Example: ITEM for Item Report. */
  reportType?: ReportType11;
  /** Specifies the version of report for which the request is created. Example: v1. */
  reportVersion?: string;
  /** Provides a brief summary of the report. */
  reportSummary?: string;
  /**
   * Specifies the start date for the schedule. The date should be in a valid date format (Example:
   * YYYY-MM-DD).
   */
  scheduleStartDate?: string;
  /** The next scheduled time for the report. */
  nextScheduledTime?: string;
  payload?: Payload61;
  /** The date and time when the report schedule was last modified. */
  requestModifiedTime?: string;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>({
  scheduleId: s.optional(s.string()),
  requestSubmissionDate: s.optional(s.string()),
  reportType: s.optional(s.lazy(() => reportType11Schema)),
  reportVersion: s.optional(s.string()),
  reportSummary: s.optional(s.string()),
  scheduleStartDate: s.optional(s.string()),
  nextScheduledTime: s.optional(s.string()),
  payload: s.optional(s.lazy(() => payload61Schema)),
  requestModifiedTime: s.optional(s.string()),
});
