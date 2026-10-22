import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unit of measurement for the package length, width, and height. Allowed values: IN (inches), FT
 * (feet), CM (centimeters).
 */
export const BoxDimensionUnit = {
  In: "IN",
  Ft: "FT",
  Cm: "CM",
} as const;
export type BoxDimensionUnit = (typeof BoxDimensionUnit)[keyof typeof BoxDimensionUnit] | (string & {});

export const boxDimensionUnitSchema: EnumSchema<BoxDimensionUnit> =
  s.enumOf<BoxDimensionUnit>(BoxDimensionUnit);
