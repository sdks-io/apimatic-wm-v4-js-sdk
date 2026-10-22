import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportErrorSchema, type ReportError } from "./report-error.js";

export type V3ReportReconreportReconFile400Error = {
  error?: ReportError[];
};

export const v3ReportReconreportReconFile400ErrorSchema: Schema<V3ReportReconreportReconFile400Error> =
  s.object<V3ReportReconreportReconFile400Error>({
    error: s.optional(s.array(s.lazy(() => reportErrorSchema))),
  });
