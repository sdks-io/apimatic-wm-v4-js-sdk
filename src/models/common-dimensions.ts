import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonUnitOfMeasurementSchema, type CommonUnitOfMeasurement } from "./common-unit-of-measurement.js";

/** Measurement of a package's dimensions. */
export type CommonDimensions = {
  /** The height of a package. */
  height: number;
  /** The length of a package. */
  length: number;
  /** The width of a package. */
  width: number;
  /** Unit of linear measure. */
  unitOfMeasurement: CommonUnitOfMeasurement;
};

export const commonDimensionsSchema: Schema<CommonDimensions> = s.object<CommonDimensions>({
  height: s.float64(),
  length: s.float64(),
  width: s.float64(),
  unitOfMeasurement: commonUnitOfMeasurementSchema,
});
