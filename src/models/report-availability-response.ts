import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportAvailabilityResponse = {
  availableDates?: string[];
  isWfsReportPresent?: boolean;
  isLegacyReportPresent?: boolean;
  isMtReportPresent?: boolean;
};

export const reportAvailabilityResponseSchema: Schema<ReportAvailabilityResponse> =
  s.object<ReportAvailabilityResponse>({
    availableDates: s.optional(s.array(s.string())),
    isWfsReportPresent: s.optional(s.boolean()),
    isLegacyReportPresent: s.optional(s.boolean()),
    isMtReportPresent: s.optional(s.boolean()),
  });
