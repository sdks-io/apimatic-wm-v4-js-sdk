import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type ReportSchedule = {
  reportScheduleId: string;
  reportType: string;
  /** ISO 8601 duration for schedule recurrence */
  period: Period;
  nextReportCreationTime?: Date;
};

export const reportScheduleSchema: Schema<ReportSchedule> = s.object<ReportSchedule>({
  reportScheduleId: s.string(),
  reportType: s.string(),
  period: periodSchema,
  nextReportCreationTime: s.optional(s.dateTime()),
});
