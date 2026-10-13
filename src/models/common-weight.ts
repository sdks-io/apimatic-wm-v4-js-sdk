import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonUnitOfWeightSchema, type CommonUnitOfWeight } from "./common-unit-of-weight.js";

/** The weight of a package. */
export type CommonWeight = {
  /** Unit of the weight being measured. */
  unit: CommonUnitOfWeight;
  /** Value of a weight. */
  value: number;
};

export const commonWeightSchema: Schema<CommonWeight> = s.object<CommonWeight>({
  unit: commonUnitOfWeightSchema,
  value: s.float64(),
});
