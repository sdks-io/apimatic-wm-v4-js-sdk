import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensionUnit4Schema, type BoxDimensionUnit4 } from "./box-dimension-unit4.js";
import { boxWeightUnit4Schema, type BoxWeightUnit4 } from "./box-weight-unit4.js";

/** Box Dimensions */
export type BoxDimensions4 = {
  /**
   * Box Dimension Unit [CM, IN]. Mandatory for CUSTOM_PACKAGE type, otherwise not required.
   * <br/><b>Applicable to SWW and WPS.</span></b>
   */
  boxDimensionUnit?: BoxDimensionUnit4;
  /** Box Weight Unit [LB, KG]. <br/><b>Applicable to SWW and WPS.</span></b> */
  boxWeightUnit: BoxWeightUnit4;
  /** Box Weight. <br/><b>Applicable to SWW and WPS.</span></b> */
  boxWeight: number;
  /**
   * Box Length. Mandatory for CUSTOM_PACKAGE type, otherwise not required. <br/><b>Applicable to
   * SWW and WPS.</span></b>
   */
  boxLength?: number;
  /**
   * Box Width. Mandatory for CUSTOM_PACKAGE type, otherwise not required. <br/><b>Applicable to SWW
   * and WPS.</span></b>
   */
  boxWidth?: number;
  /**
   * Box Height. Mandatory for CUSTOM_PACKAGE type, otherwise not required. <br/><b>Applicable to
   * SWW and WPS.</span></b>
   */
  boxHeight?: number;
};

export const boxDimensions4Schema: Schema<BoxDimensions4> = s.object<BoxDimensions4>({
  boxDimensionUnit: s.optional(s.lazy(() => boxDimensionUnit4Schema)),
  boxWeightUnit: boxWeightUnit4Schema,
  boxWeight: s.float64(),
  boxLength: s.optional(s.float64()),
  boxWidth: s.optional(s.float64()),
  boxHeight: s.optional(s.float64()),
});
