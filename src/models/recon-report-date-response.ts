import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReconReportDateResponse = {
  /** All available report dates are returned */
  availableApReportDates?: string[];
};

export const reconReportDateResponseSchema: Schema<ReconReportDateResponse> =
  s.object<ReconReportDateResponse>({
    availableApReportDates: s.optional(s.array(s.string())),
  });
