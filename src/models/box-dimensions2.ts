import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensionUnit2Schema, type BoxDimensionUnit2 } from "./box-dimension-unit2.js";
import { boxWeightUnit2Schema, type BoxWeightUnit2 } from "./box-weight-unit2.js";

export type BoxDimensions2 = {
  boxLength?: number;
  boxWidth?: number;
  boxHeight?: number;
  boxWeight: number;
  boxDimensionUnit?: BoxDimensionUnit2;
  boxWeightUnit: BoxWeightUnit2;
};

export const boxDimensions2Schema: Schema<BoxDimensions2> = s.object<BoxDimensions2>({
  boxLength: s.optional(s.float64()),
  boxWidth: s.optional(s.float64()),
  boxHeight: s.optional(s.float64()),
  boxWeight: s.float64(),
  boxDimensionUnit: s.optional(s.lazy(() => boxDimensionUnit2Schema)),
  boxWeightUnit: boxWeightUnit2Schema,
});
