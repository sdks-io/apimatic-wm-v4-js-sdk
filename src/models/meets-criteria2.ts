import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Shows whether the seller has met the requirements for the badge.<br><b
 * style='color:green;'>Market availability: MX only</b>
 */
export type MeetsCriteria2 = {
  /**
   * Indicates whether the seller has met the minimum number of orders required.<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  ordersCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has a low delivery defect, meeting the threshold for the
   * badge.<br><b style='color:green;'>Market availability: MX only</b>
   */
  deliveryDefectCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has a low cancellation rate, meeting the threshold for the
   * badge.<br><b style='color:green;'>Market availability: MX only</b>
   */
  cancellationCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has a low gap between actual and promised delivery dates, meeting
   * the threshold for the badge.<br><b style='color:green;'>Market availability: MX only</b>
   */
  actualVsPromisedGapCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has met the minimum number of active days required.<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  activeDaysCriteriaMet?: boolean;
};

export const meetsCriteria2Schema: Schema<MeetsCriteria2> = s.object<MeetsCriteria2>({
  ordersCriteriaMet: s.optional(s.boolean()),
  deliveryDefectCriteriaMet: s.optional(s.boolean()),
  cancellationCriteriaMet: s.optional(s.boolean()),
  actualVsPromisedGapCriteriaMet: s.optional(s.boolean()),
  activeDaysCriteriaMet: s.optional(s.boolean()),
});
