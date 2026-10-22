import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WeeklyTrend = {
  /** Week of the year. Example: 24 */
  week?: string;
  /** Year of trend. Example: 2024 */
  year?: string;
  /**
   * | Trend Type | Description | Data type of value |
   * | --- | ----------- | ------- |
   * | PRICE_TRENDS | Indicates the price of the item in the market specific currency for the given week and year. Example: 6.54 | double |
   * | DEMAND_TRENDS | Normalised values to indicate relative demand for the recommendation for the given week. Example: 0.08 | double |
   */
  value?: number;
};

export const weeklyTrendSchema: Schema<WeeklyTrend> = s.object<WeeklyTrend>({
  week: s.optional(s.string()),
  year: s.optional(s.string()),
  value: s.optional(s.float64()),
});
