import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelReportResponse = {
  reportId?: string;
};

export const cancelReportResponseSchema: Schema<CancelReportResponse> = s.object<CancelReportResponse>({
  reportId: s.optional(s.string()),
});
