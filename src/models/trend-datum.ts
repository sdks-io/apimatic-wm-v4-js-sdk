import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta9Schema, type Meta9 } from "./meta9.js";
import { monthlyTrendSchema, type MonthlyTrend } from "./monthly-trend.js";
import { weeklyTrendSchema, type WeeklyTrend } from "./weekly-trend.js";

export type TrendDatum = {
  /** Meta information related to the trends response. */
  meta?: Meta9;
  /** Trend data at a monthly level. */
  monthlyTrends?: MonthlyTrend[];
  /**
   * Trend data at a weekly level.<br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  weeklyTrends?: WeeklyTrend[];
};

export const trendDatumSchema: Schema<TrendDatum> = s.object<TrendDatum>({
  meta: s.optional(s.lazy(() => meta9Schema)),
  monthlyTrends: s.optional(s.array(s.lazy(() => monthlyTrendSchema))),
  weeklyTrends: s.optional(s.array(s.lazy(() => weeklyTrendSchema))),
});
