import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalInsight = {
  /**
   * Estimated total dollar amount you could lose in sales each day if both out-of-stock and at-risk
   * items are not restocked.
   */
  totalEstimatedSalesLift?: number;
  /**
   * Estimated dollar amount you could lose in sales each day if all out-of-stock items are not
   * restocked.
   */
  totalForecastedSalesLost?: number;
  /**
   * Estimated dollar amount you could lose in daily sales if all items with under 4 weeks of supply
   * are not restocked.
   */
  totalForecastedSalesAtRisk?: number;
};

export const totalInsightSchema: Schema<TotalInsight> = s.object<TotalInsight>({
  totalEstimatedSalesLift: s.optional(s.float64()),
  totalForecastedSalesLost: s.optional(s.float64()),
  totalForecastedSalesAtRisk: s.optional(s.float64()),
});
