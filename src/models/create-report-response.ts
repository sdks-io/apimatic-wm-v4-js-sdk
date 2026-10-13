import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateReportResponse = {
  reportId: string;
};

export const createReportResponseSchema: Schema<CreateReportResponse> = s.object<CreateReportResponse>({
  reportId: s.string(),
});
