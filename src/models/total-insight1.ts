import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalInsight1 = {
  /**
   * What you currently earn from seller-fulfilled items, based on your weekly average sales from
   * the past 30 days.
   */
  sellerFulfilledPast30DaysSales?: number;
  /**
   * What we predict you’ll earn if you convert the following items to WFS and send the suggested
   * quantities. This is the sum of your predicted WFS GMV in the 30 days after your items are
   * available to sell. To leverage these suggestions, we recommend you convert and send your items
   * to WFS within the next 4 weeks.
   */
  walmartFulfilledEstimatedSales?: number;
  /**
   * Total estimated sales lift if these items are converted to WFS and sold within the next 30 days
   * of recommendation generation. This is your Walmart-fulfilled GMV minus seller-fulfilled GMV.
   */
  totalEstimatedSalesLift?: number;
};

export const totalInsight1Schema: Schema<TotalInsight1> = s.object<TotalInsight1>({
  sellerFulfilledPast30DaysSales: s.optional(s.float64()),
  walmartFulfilledEstimatedSales: s.optional(s.float64()),
  totalEstimatedSalesLift: s.optional(s.float64()),
});
