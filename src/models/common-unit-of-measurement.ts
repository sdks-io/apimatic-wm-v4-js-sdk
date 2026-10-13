import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of linear measure. */
export const CommonUnitOfMeasurement = {
  In: "IN",
  Cm: "CM",
} as const;
export type CommonUnitOfMeasurement =
  | (typeof CommonUnitOfMeasurement)[keyof typeof CommonUnitOfMeasurement]
  | (string & {});

export const commonUnitOfMeasurementSchema: EnumSchema<CommonUnitOfMeasurement> =
  s.enumOf<CommonUnitOfMeasurement>(CommonUnitOfMeasurement);
