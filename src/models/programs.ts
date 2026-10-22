import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  walmartFundedIncentivesEnrollmentSchema,
  type WalmartFundedIncentivesEnrollment,
} from "./walmart-funded-incentives-enrollment.js";

export type Programs = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  walmartFundedIncentivesEnrollment?: WalmartFundedIncentivesEnrollment;
};

export const programsSchema: Schema<Programs> = s.object<Programs>({
  walmartFundedIncentivesEnrollment: s.optional(s.lazy(() => walmartFundedIncentivesEnrollmentSchema)),
  _keysMap: {
    walmartFundedIncentivesEnrollment: "WalmartFundedIncentivesEnrollment",
  },
});
