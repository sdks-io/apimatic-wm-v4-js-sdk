import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how price adjustment is applied. UNIT for a fixed amount or PERCENTAGE for a
 * percentage-based change.<br><b style='color:green;'>Market availability: US | CA | MX</span></b>
 */
export const AdjustmentType = {
  Unit: "UNIT",
  Percentage: "PERCENTAGE",
} as const;
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType] | (string & {});

export const adjustmentTypeSchema: EnumSchema<AdjustmentType> = s.enumOf<AdjustmentType>(AdjustmentType);
