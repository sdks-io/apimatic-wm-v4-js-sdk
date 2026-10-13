import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A constraint that applies to all owners. If no constraint is specified, defer to any individual
 * owner constraints.
 */
export const CommonAllOwnersConstraint = {
  MustMatch: "MUST_MATCH",
} as const;
export type CommonAllOwnersConstraint =
  | (typeof CommonAllOwnersConstraint)[keyof typeof CommonAllOwnersConstraint]
  | (string & {});

export const commonAllOwnersConstraintSchema: EnumSchema<CommonAllOwnersConstraint> =
  s.enumOf<CommonAllOwnersConstraint>(CommonAllOwnersConstraint);
