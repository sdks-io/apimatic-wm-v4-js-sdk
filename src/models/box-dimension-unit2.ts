import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BoxDimensionUnit2 = {
  In: "IN",
  Ft: "FT",
  Cm: "CM",
} as const;
export type BoxDimensionUnit2 = (typeof BoxDimensionUnit2)[keyof typeof BoxDimensionUnit2] | (string & {});

export const boxDimensionUnit2Schema: EnumSchema<BoxDimensionUnit2> =
  s.enumOf<BoxDimensionUnit2>(BoxDimensionUnit2);
