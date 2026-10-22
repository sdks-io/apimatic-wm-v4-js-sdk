import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unit of measurement for the package length, width, and height. Allowed values: IN (inches), FT
 * (feet), CM (centimeters). Required when packageType is CUSTOM_PACKAGE; not required for other
 * standard package types (e.g., FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined by
 * the carrier.
 */
export const BoxDimensionUnit1 = {
  In: "IN",
  Ft: "FT",
  Cm: "CM",
} as const;
export type BoxDimensionUnit1 = (typeof BoxDimensionUnit1)[keyof typeof BoxDimensionUnit1] | (string & {});

export const boxDimensionUnit1Schema: EnumSchema<BoxDimensionUnit1> =
  s.enumOf<BoxDimensionUnit1>(BoxDimensionUnit1);
