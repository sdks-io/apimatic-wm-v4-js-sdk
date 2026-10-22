import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unit of measurement for the package weight. Allowed values: LB (pounds), KG (kilograms), OZ
 * (ounces).
 */
export const BoxWeightUnit = {
  Lb: "LB",
  Kg: "KG",
  Oz: "OZ",
} as const;
export type BoxWeightUnit = (typeof BoxWeightUnit)[keyof typeof BoxWeightUnit] | (string & {});

export const boxWeightUnitSchema: EnumSchema<BoxWeightUnit> = s.enumOf<BoxWeightUnit>(BoxWeightUnit);
