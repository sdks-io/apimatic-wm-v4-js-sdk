import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of print type for a given label. */
export const CommonLabelPrintType = {
  StandardFormat: "STANDARD_FORMAT",
  ThermalPrinting: "THERMAL_PRINTING",
} as const;
export type CommonLabelPrintType =
  | (typeof CommonLabelPrintType)[keyof typeof CommonLabelPrintType]
  | (string & {});

export const commonLabelPrintTypeSchema: EnumSchema<CommonLabelPrintType> =
  s.enumOf<CommonLabelPrintType>(CommonLabelPrintType);
