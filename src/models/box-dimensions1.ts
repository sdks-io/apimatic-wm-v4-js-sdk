import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensionUnit1Schema, type BoxDimensionUnit1 } from "./box-dimension-unit1.js";
import { boxWeightUnitSchema, type BoxWeightUnit } from "./box-weight-unit.js";

/** Box dimensions and weight for the shipping package. */
export type BoxDimensions1 = {
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
   * (feet), CM (centimeters). Required when packageType is CUSTOM_PACKAGE; not required for other
   * standard package types (e.g., FEDEX_ENVELOPE, FEDEX_PAK) where dimensions are predetermined by
   * the carrier.
   */
  boxDimensionUnit?: BoxDimensionUnit1;
  /**
   * Unit of measurement for the package weight. Allowed values: LB (pounds), KG (kilograms), OZ
   * (ounces).
   */
  boxWeightUnit: BoxWeightUnit;
};

export const boxDimensions1Schema: Schema<BoxDimensions1> = s.object<BoxDimensions1>({
  boxLength: s.optional(s.float64()),
  boxWidth: s.optional(s.float64()),
  boxHeight: s.optional(s.float64()),
  boxWeight: s.float64(),
  boxDimensionUnit: s.optional(s.lazy(() => boxDimensionUnit1Schema)),
  boxWeightUnit: boxWeightUnitSchema,
});
