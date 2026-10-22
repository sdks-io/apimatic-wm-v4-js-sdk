import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensionUnit3Schema, type BoxDimensionUnit3 } from "./box-dimension-unit3.js";
import { boxWeightUnit3Schema, type BoxWeightUnit3 } from "./box-weight-unit3.js";

/**
 * Dimensions and weight of the package being shipped. Used together with packageType. For FEDEX_PAK
 * or FEDEX_ENVELOPE, length/height/width are predetermined by the carrier and only weight is
 * required. For CUSTOM_PACKAGE, all dimensions and weight are required.
 *
 * <b style="color: green;">Market availability: Global</b>
 */
export type BoxDimensions3 = {
  /**
   * The length of the package. Required when packageType is CUSTOM_PACKAGE, not required for other
   * standard package types (Example: FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined
   * by the carrier. The Unit is determined by boxDimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxLength?: number;
  /**
   * The width of the package. Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (Example: FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined
   * by the carrier. The Unit is determined by boxDimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxWidth?: number;
  /**
   * The height of the package. Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (Example: FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined
   * by the carrier. The Unit is determined by boxDimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxHeight?: number;
  /**
   * The weight of the package. Required for all package types. The Unit is determined by
   * boxWeightUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxWeight: number;
  /**
   * The unit of measurement for the package length, width, and height. Allowed values: IN (inches),
   * FT (feet), CM (centimeters).
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxDimensionUnit?: BoxDimensionUnit3;
  /**
   * The unit of measurement for the package weight. Allowed values: LB (pounds), KG (kilograms), OZ
   * (ounces).
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxWeightUnit: BoxWeightUnit3;
};

export const boxDimensions3Schema: Schema<BoxDimensions3> = s.object<BoxDimensions3>({
  boxLength: s.optional(s.float64()),
  boxWidth: s.optional(s.float64()),
  boxHeight: s.optional(s.float64()),
  boxWeight: s.float64(),
  boxDimensionUnit: s.optional(s.lazy(() => boxDimensionUnit3Schema)),
  boxWeightUnit: boxWeightUnit3Schema,
});
