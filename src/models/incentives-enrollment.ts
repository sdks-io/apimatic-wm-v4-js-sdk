import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncentivesEnrollment = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  referralFeeIncentiveEnrollment?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  incentiveType?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  incentiveId?: string;
};

export const incentivesEnrollmentSchema: Schema<IncentivesEnrollment> = s.object<IncentivesEnrollment>({
  referralFeeIncentiveEnrollment: s.optional(s.string()),
  incentiveType: s.optional(s.string()),
  incentiveId: s.optional(s.string()),
});
