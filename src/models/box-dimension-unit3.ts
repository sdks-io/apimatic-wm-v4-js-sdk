import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measurement for the package length, width, and height. Allowed values: IN (inches),
 * FT (feet), CM (centimeters).
 *
 * <b style="color: green;">Market availability: Global</b>
 */
export const BoxDimensionUnit3 = {
  In: "IN",
  Ft: "FT",
  Cm: "CM",
} as const;
export type BoxDimensionUnit3 = (typeof BoxDimensionUnit3)[keyof typeof BoxDimensionUnit3] | (string & {});

export const boxDimensionUnit3Schema: EnumSchema<BoxDimensionUnit3> =
  s.enumOf<BoxDimensionUnit3>(BoxDimensionUnit3);
