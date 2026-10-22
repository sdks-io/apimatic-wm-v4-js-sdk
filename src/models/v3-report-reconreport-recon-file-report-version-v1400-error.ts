import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportErrorSchema, type ReportError } from "./report-error.js";

export type V3ReportReconreportReconFileReportVersionV1400Error = {
  error?: ReportError[];
};

export const v3ReportReconreportReconFileReportVersionV1400ErrorSchema: Schema<V3ReportReconreportReconFileReportVersionV1400Error> =
  s.object<V3ReportReconreportReconFileReportVersionV1400Error>({
    error: s.optional(s.array(s.lazy(() => reportErrorSchema))),
  });
