import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A constraint that can apply to an individual owner. */
export const CommonOwnerConstraint = {
  SellerOnly: "SELLER_ONLY",
  NoneOnly: "NONE_ONLY",
} as const;
export type CommonOwnerConstraint =
  | (typeof CommonOwnerConstraint)[keyof typeof CommonOwnerConstraint]
  | (string & {});

export const commonOwnerConstraintSchema: EnumSchema<CommonOwnerConstraint> =
  s.enumOf<CommonOwnerConstraint>(CommonOwnerConstraint);
