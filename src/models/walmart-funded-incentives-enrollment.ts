import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US</b> */
export type WalmartFundedIncentivesEnrollment = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  walmartFundedIncentivesEnrollment?: string;
};

export const walmartFundedIncentivesEnrollmentSchema: Schema<WalmartFundedIncentivesEnrollment> =
  s.object<WalmartFundedIncentivesEnrollment>({
    walmartFundedIncentivesEnrollment: s.optional(s.string()),
  });
