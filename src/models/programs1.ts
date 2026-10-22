import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incentivesEnrollmentSchema, type IncentivesEnrollment } from "./incentives-enrollment.js";

export type Programs1 = {
  incentivesEnrollment?: IncentivesEnrollment;
};

export const programs1Schema: Schema<Programs1> = s.object<Programs1>({
  incentivesEnrollment: s.optional(s.lazy(() => incentivesEnrollmentSchema)),
  _keysMap: {
    incentivesEnrollment: "IncentivesEnrollment",
  },
});
