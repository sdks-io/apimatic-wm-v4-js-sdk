import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportScheduleSchema, type ReportSchedule } from "./report-schedule.js";

export type GetReportSchedulesResponse = {
  reportSchedules?: ReportSchedule[];
};

export const getReportSchedulesResponseSchema: Schema<GetReportSchedulesResponse> =
  s.object<GetReportSchedulesResponse>({
    reportSchedules: s.optional(s.array(s.lazy(() => reportScheduleSchema))),
  });
