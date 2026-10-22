import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MonthlyTrend = {
  /**
   * Month of the year.
   *
   * Values: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
   */
  month?: string;
  /**
   * Year of trend.
   *
   * Example: 2024
   */
  year?: string;
  /**
   * | Trend Type | Description | Data type of value |
   * | --- | ----------- | ------- |
   * | PRICE_TRENDS | Indicates the price of the item in the market specific currency for the given month and year. Example: 5.99 | double |
   * | DEMAND_TRENDS | Normalised values to indicate relative demand for the recommendation for the given month. Example: 0.07 | double |
   */
  value?: number;
};

export const monthlyTrendSchema: Schema<MonthlyTrend> = s.object<MonthlyTrend>({
  month: s.optional(s.string()),
  year: s.optional(s.string()),
  value: s.optional(s.float64()),
});
