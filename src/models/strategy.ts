import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentTypeSchema, type AdjustmentType } from "./adjustment-type.js";
import { strategyTypeSchema, type StrategyType } from "./strategy-type.js";

export type Strategy = {
  /**
   * Strategy type supported for markets is Buy Box Price(for us and mx), External Price(for US, MX
   * and CA), Competitive Price(for us and mx).<br><b style="color:green;">Market availability: US |
   * CA | MX</b>
   */
  strategyType?: StrategyType;
  /**
   * Specifies how price adjustment is applied. UNIT for a fixed amount or PERCENTAGE for a
   * percentage-based change.<br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   */
  adjustmentType?: AdjustmentType;
  /**
   * Defines the value by which price is adjusted, based on the selected adjustment value.<br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  adjustmentValue?: number;
};

export const strategySchema: Schema<Strategy> = s.object<Strategy>({
  strategyType: s.optional(s.lazy(() => strategyTypeSchema)),
  adjustmentType: s.optional(s.lazy(() => adjustmentTypeSchema)),
  adjustmentValue: s.optional(s.float64()),
});
