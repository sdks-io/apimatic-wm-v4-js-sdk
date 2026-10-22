import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Shows the criteria for the Pro Seller badge.<br><b style='color:green;'>Market availability: MX
 * only</b>
 */
export type CriteriaData2 = {
  /**
   * Number of orders received during the last 90 days.<br><b style='color:green;'>Market
   * availability: MX only</b>
   */
  orders?: number;
  /**
   * Delivery Defect rate in the given timeframe.<br><b style='color:green;'>Market availability: MX
   * only</b>
   */
  deliveryDefectRate?: string;
  /**
   * Cancellation rate in the given timeframe.<br><b style='color:green;'>Market availability: MX
   * only</b>
   */
  cancellationRate?: string;
  /**
   * Avg gap (in days) between actual and promised delivery in the given timeframe.<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  actualVsPromisedGap?: number;
  /** Days active on the platform.<br><b style='color:green;'>Market availability: MX only</b> */
  activeDays?: number;
};

export const criteriaData2Schema: Schema<CriteriaData2> = s.object<CriteriaData2>({
  orders: s.optional(s.int()),
  deliveryDefectRate: s.optional(s.string()),
  cancellationRate: s.optional(s.string()),
  actualVsPromisedGap: s.optional(s.int()),
  activeDays: s.optional(s.int()),
});
