import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensionUnitSchema, type BoxDimensionUnit } from "./box-dimension-unit.js";
import { boxWeightUnitSchema, type BoxWeightUnit } from "./box-weight-unit.js";

/**
 * Dimensions and weight of the package being shipped. For CUSTOM_PACKAGE, all dimensions and weight
 * are required.
 */
export type BoxDimensions5 = {
  /**
   * Length of the package. Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (e.g., FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined by
   * the carrier. The Unit is determined by boxDimensionUnit.
   */
  boxLength?: number;
  /**
   * Width of the package. Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (e.g., FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined by
   * the carrier. The Unit is determined by boxDimensionUnit.
   */
  boxWidth?: number;
  /**
   * Height of the package. Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (e.g., FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined by
   * the carrier. The Unit is determined by boxDimensionUnit.
   */
  boxHeight?: number;
  /**
   * Weight of the package. Required for all package types. The Unit is determined by boxWeightUnit.
   */
  boxWeight: number;
  /**
   * Unit of measurement for the package length, width, and height. Allowed values: IN (inches), FT
   * (feet), CM (centimeters).
   */
  boxDimensionUnit?: BoxDimensionUnit;
  /**
   * Unit of measurement for the package weight. Allowed values: LB (pounds), KG (kilograms), OZ
   * (ounces).
   */
  boxWeightUnit: BoxWeightUnit;
};

export const boxDimensions5Schema: Schema<BoxDimensions5> = s.object<BoxDimensions5>({
  boxLength: s.optional(s.float64()),
  boxWidth: s.optional(s.float64()),
  boxHeight: s.optional(s.float64()),
  boxWeight: s.float64(),
  boxDimensionUnit: s.optional(s.lazy(() => boxDimensionUnitSchema)),
  boxWeightUnit: boxWeightUnitSchema,
});
