import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CommonUnitOfMeasurement, commonUnitOfMeasurementSchema } from "./common-unit-of-measurement.js";
import { WeightUnit, weightUnitSchema } from "./weight-unit.js";

/**
 * Physical dimensions of a shipped package. All numeric values are non-negative; unit enums avoid
 * the unit-ambiguity bug that bit gmp-orders-mono PayloadUtil pre-2024.
 */
export type PackageDimensions1 = {
  length?: number;
  width?: number;
  height?: number;
  /** @default CommonUnitOfMeasurement.In */
  dimensionUnit?: CommonUnitOfMeasurement;
  weight?: number;
  /** @default WeightUnit.Lb */
  weightUnit?: WeightUnit;
};

export const packageDimensions1Schema: Schema<PackageDimensions1> = s.object<PackageDimensions1>({
  length: s.optional(s.float64()),
  width: s.optional(s.float64()),
  height: s.optional(s.float64()),
  dimensionUnit: s.defaulted(commonUnitOfMeasurementSchema, CommonUnitOfMeasurement.In),
  weight: s.optional(s.float64()),
  weightUnit: s.defaulted(weightUnitSchema, WeightUnit.Lb),
});
