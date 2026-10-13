import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelReportScheduleResponse = {
  reportScheduleId?: string;
};

export const cancelReportScheduleResponseSchema: Schema<CancelReportScheduleResponse> =
  s.object<CancelReportScheduleResponse>({
    reportScheduleId: s.optional(s.string()),
  });
