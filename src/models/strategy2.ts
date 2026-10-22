import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentType2Schema, type AdjustmentType2 } from "./adjustment-type2.js";
import { strategyTypeSchema, type StrategyType } from "./strategy-type.js";

export type Strategy2 = {
  /**
   * Strategy type supported for markets is Buy Box Price(for us and mx), External Price(for US, MX
   * and CA), Competitive Price(for us and mx).<br><b style="color:green;">Market availability: US |
   * CA | MX</b>
   */
  strategyType?: StrategyType;
  /**
   * Specifies how price adjustment is applied. UNIT for a fixed amount or PERCENTAGE for a
   * percentage-based change.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  adjustmentType?: AdjustmentType2;
  /**
   * Defines the value by which price is adjusted, based on the selected adjustment value.<br><b
   * style='color:green;'>Market availability: US | CA | MX</b>
   */
  adjustmentValue?: number;
};

export const strategy2Schema: Schema<Strategy2> = s.object<Strategy2>({
  strategyType: s.optional(s.lazy(() => strategyTypeSchema)),
  adjustmentType: s.optional(s.lazy(() => adjustmentType2Schema)),
  adjustmentValue: s.optional(s.float64()),
});
