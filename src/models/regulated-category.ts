import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Top-level category of regulation that applies. NOT_REGULATED means no verification is required
 * and the rest of the fields are informational only.
 */
export const RegulatedCategory = {
  NotRegulated: "NOT_REGULATED",
  Alcohol: "ALCOHOL",
  Tobacco: "TOBACCO",
  AgeRestricted: "AGE_RESTRICTED",
  Pharmacy: "PHARMACY",
} as const;
export type RegulatedCategory = (typeof RegulatedCategory)[keyof typeof RegulatedCategory] | (string & {});

export const regulatedCategorySchema: EnumSchema<RegulatedCategory> =
  s.enumOf<RegulatedCategory>(RegulatedCategory);
