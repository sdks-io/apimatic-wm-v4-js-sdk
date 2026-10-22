import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measurement for the package weight. Allowed values: LB (pounds), KG (kilograms), OZ
 * (ounces).
 *
 * <b style="color: green;">Market availability: Global</b>
 */
export const BoxWeightUnit3 = {
  Lb: "LB",
  Kg: "KG",
  Oz: "OZ",
} as const;
export type BoxWeightUnit3 = (typeof BoxWeightUnit3)[keyof typeof BoxWeightUnit3] | (string & {});

export const boxWeightUnit3Schema: EnumSchema<BoxWeightUnit3> = s.enumOf<BoxWeightUnit3>(BoxWeightUnit3);
