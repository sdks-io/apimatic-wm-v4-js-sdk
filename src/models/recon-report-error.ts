import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportErrorSchema, type ReportError } from "./report-error.js";

export type ReconReportError = {
  error?: ReportError[];
};

export const reconReportErrorSchema: Schema<ReconReportError> = s.object<ReconReportError>({
  error: s.optional(s.array(s.lazy(() => reportErrorSchema))),
});
