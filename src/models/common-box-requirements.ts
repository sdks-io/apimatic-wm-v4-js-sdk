import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonWeightRangeSchema, type CommonWeightRange } from "./common-weight-range.js";

/** The requirements for a box in the packing option. */
export type CommonBoxRequirements = {
  /** The range of weights that are allowed for a package. */
  weight: CommonWeightRange;
};

export const commonBoxRequirementsSchema: Schema<CommonBoxRequirements> = s.object<CommonBoxRequirements>({
  weight: commonWeightRangeSchema,
});
