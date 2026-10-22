import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BoxWeightUnit2 = {
  Lb: "LB",
  Kg: "KG",
  Oz: "OZ",
} as const;
export type BoxWeightUnit2 = (typeof BoxWeightUnit2)[keyof typeof BoxWeightUnit2] | (string & {});

export const boxWeightUnit2Schema: EnumSchema<BoxWeightUnit2> = s.enumOf<BoxWeightUnit2>(BoxWeightUnit2);
