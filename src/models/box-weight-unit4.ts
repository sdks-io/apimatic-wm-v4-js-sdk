import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Box Weight Unit [LB, KG]. <br/><b>Applicable to SWW and WPS.</span></b> */
export const BoxWeightUnit4 = {
  Lb: "LB",
  Kg: "KG",
} as const;
export type BoxWeightUnit4 = (typeof BoxWeightUnit4)[keyof typeof BoxWeightUnit4] | (string & {});

export const boxWeightUnit4Schema: EnumSchema<BoxWeightUnit4> = s.enumOf<BoxWeightUnit4>(BoxWeightUnit4);
