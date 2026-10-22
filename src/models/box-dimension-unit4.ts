import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Box Dimension Unit [CM, IN]. Mandatory for CUSTOM_PACKAGE type, otherwise not required.
 * <br/><b>Applicable to SWW and WPS.</span></b>
 */
export const BoxDimensionUnit4 = {
  Cm: "CM",
  In: "IN",
} as const;
export type BoxDimensionUnit4 = (typeof BoxDimensionUnit4)[keyof typeof BoxDimensionUnit4] | (string & {});

export const boxDimensionUnit4Schema: EnumSchema<BoxDimensionUnit4> =
  s.enumOf<BoxDimensionUnit4>(BoxDimensionUnit4);
