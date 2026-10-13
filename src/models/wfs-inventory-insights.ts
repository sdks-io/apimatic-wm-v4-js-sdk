import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Demand intelligence and replenishment recommendations (WFS-only — no SP-API equivalent) */
export type WfsInventoryInsights = {
  /** Estimated units to sell in weeks 1–4. */
  salesForecastWeek1To4?: number | null;
  /** Estimated units to sell in weeks 5–8. */
  salesForecastWeek5To8?: number | null;
  /** Estimated units to sell in weeks 9–12. */
  salesForecastWeek9To12?: number | null;
  /** Units shipped ÷ average stored, last 90 days. */
  sellThroughRate?: number | null;
  /** Estimated days until stock exhaustion at current sell rate */
  daysOfSupply?: string;
  /** Projected date of stock exhaustion */
  outOfStockDate?: string | null;
  /** Walmart-recommended reorder quantity */
  suggestedUnits?: number;
  /** Units exceeding 180 days of supply */
  surplusUnits?: number | null;
  /** Whether this item is flagged as a customer favorite */
  customerFavorite?: boolean;
};

export const wfsInventoryInsightsSchema: Schema<WfsInventoryInsights> = s.object<WfsInventoryInsights>({
  salesForecastWeek1To4: s.optionalNullable(s.float64()),
  salesForecastWeek5To8: s.optionalNullable(s.float64()),
  salesForecastWeek9To12: s.optionalNullable(s.float64()),
  sellThroughRate: s.optionalNullable(s.float64()),
  daysOfSupply: s.optional(s.string()),
  outOfStockDate: s.optionalNullable(s.dateOnly()),
  suggestedUnits: s.optional(s.int()),
  surplusUnits: s.optionalNullable(s.int()),
  customerFavorite: s.optional(s.boolean()),
  _keysMap: {
    salesForecastWeek1To4: "salesForecastWeek1to4",
    salesForecastWeek5To8: "salesForecastWeek5to8",
    salesForecastWeek9To12: "salesForecastWeek9to12",
  },
});
