import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateReportScheduleResponse = {
  reportScheduleId: string;
};

export const createReportScheduleResponseSchema: Schema<CreateReportScheduleResponse> =
  s.object<CreateReportScheduleResponse>({
    reportScheduleId: s.string(),
  });
