import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Shows whether the seller has met the requirements for the badge. */
export type MeetsCriteria = {
  /** Indicates whether the seller has met the minimum number of orders required. */
  isOrdersCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has a low delivery defect, meeting the threshold for the badge.
   */
  isDeliveryDefectCriteriaMet?: boolean;
  /**
   * Indicates whether the seller has a low cancellation rate, meeting the threshold for the badge.
   */
  isCancellationCriteriaMet?: boolean;
  /** Indicates whether the seller is meeting the trending catalog requirement. */
  isListingQualityCatalogCriteriaMet?: boolean;
  /** Indicates whether the seller has met the minimum number of active days required. */
  isActiveDaysCriteriaMet?: boolean;
};

export const meetsCriteriaSchema: Schema<MeetsCriteria> = s.object<MeetsCriteria>({
  isOrdersCriteriaMet: s.optional(s.boolean()),
  isDeliveryDefectCriteriaMet: s.optional(s.boolean()),
  isCancellationCriteriaMet: s.optional(s.boolean()),
  isListingQualityCatalogCriteriaMet: s.optional(s.boolean()),
  isActiveDaysCriteriaMet: s.optional(s.boolean()),
});
