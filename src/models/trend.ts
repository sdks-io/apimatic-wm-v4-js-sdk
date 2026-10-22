import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trendDatumSchema, type TrendDatum } from "./trend-datum.js";

export type Trend = {
  /**
   * Type of trend.
   *
   * Values: DEMAND_TRENDS, PRICE_TRENDS
   */
  trendType?: string;
  /**
   * Trend data for the recommended item. The array will be empty if trends are not available for
   * the item.
   */
  trendData?: TrendDatum[];
};

export const trendSchema: Schema<Trend> = s.object<Trend>({
  trendType: s.optional(s.string()),
  trendData: s.optional(s.array(s.lazy(() => trendDatumSchema))),
});
