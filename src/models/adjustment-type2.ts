import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how price adjustment is applied. UNIT for a fixed amount or PERCENTAGE for a
 * percentage-based change.<br><b style='color:green;'>Market availability: US | CA | MX</b>
 */
export const AdjustmentType2 = {
  Unit: "UNIT",
  Percentage: "PERCENTAGE",
} as const;
export type AdjustmentType2 = (typeof AdjustmentType2)[keyof typeof AdjustmentType2] | (string & {});

export const adjustmentType2Schema: EnumSchema<AdjustmentType2> = s.enumOf<AdjustmentType2>(AdjustmentType2);
