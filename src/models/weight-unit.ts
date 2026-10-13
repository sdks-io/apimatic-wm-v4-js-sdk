import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WeightUnit = {
  Lb: "LB",
  Kg: "KG",
  Oz: "OZ",
} as const;
export type WeightUnit = (typeof WeightUnit)[keyof typeof WeightUnit] | (string & {});

export const weightUnitSchema: EnumSchema<WeightUnit> = s.enumOf<WeightUnit>(WeightUnit);
