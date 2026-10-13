import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonUnitOfWeightSchema, type CommonUnitOfWeight } from "./common-unit-of-weight.js";

/** The range of weights that are allowed for a package. */
export type CommonWeightRange = {
  /** Maximum allowed weight. */
  maximum: number;
  /** Minimum allowed weight. */
  minimum: number;
  /** Unit of the weight being measured. */
  unit: CommonUnitOfWeight;
};

export const commonWeightRangeSchema: Schema<CommonWeightRange> = s.object<CommonWeightRange>({
  maximum: s.float64(),
  minimum: s.float64(),
  unit: commonUnitOfWeightSchema,
});
