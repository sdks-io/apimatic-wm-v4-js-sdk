import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonAllOwnersConstraintSchema,
  type CommonAllOwnersConstraint,
} from "./common-all-owners-constraint.js";
import { commonOwnerConstraintSchema, type CommonOwnerConstraint } from "./common-owner-constraint.js";
import { commonPrepCategorySchema, type CommonPrepCategory } from "./common-prep-category.js";
import { commonPrepTypeSchema, type CommonPrepType } from "./common-prep-type.js";

/** An MSKU and its related prep details. */
export type CommonMskuPrepDetail = {
  /**
   * A constraint that applies to all owners. If no constraint is specified, defer to any individual
   * owner constraints.
   */
  allOwnersConstraint?: CommonAllOwnersConstraint;
  /** A constraint that can apply to an individual owner. */
  labelOwnerConstraint?: CommonOwnerConstraint;
  /** The merchant SKU, a merchant-supplied identifier for a specific SKU. */
  msku: string;
  /** The preparation category for shipping an item to Walmart's fulfillment network. */
  prepCategory: CommonPrepCategory;
  /** A constraint that can apply to an individual owner. */
  prepOwnerConstraint?: CommonOwnerConstraint;
  /** A list of preparation types associated with a preparation category. */
  prepTypes: CommonPrepType[];
};

export const commonMskuPrepDetailSchema: Schema<CommonMskuPrepDetail> = s.object<CommonMskuPrepDetail>({
  allOwnersConstraint: s.optional(s.lazy(() => commonAllOwnersConstraintSchema)),
  labelOwnerConstraint: s.optional(s.lazy(() => commonOwnerConstraintSchema)),
  msku: s.string(),
  prepCategory: commonPrepCategorySchema,
  prepOwnerConstraint: s.optional(s.lazy(() => commonOwnerConstraintSchema)),
  prepTypes: s.array(s.lazy(() => commonPrepTypeSchema)),
});
