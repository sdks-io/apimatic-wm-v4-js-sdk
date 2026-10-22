import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Performance metrics for the aggregated data.
 *
 * All metrics are based on last-touch attribution with a 14-day window.
 */
export type WsrMetrics = {
  /** Number of clicks on affiliate links. Defaults to 0 if no traffic data available. */
  clicks?: number;
  /**
   * Number of orders based on last-touch 14-day attribution. Defaults to 0 if no attribution data
   * available.
   *
   * @default 0
   */
  orders?: number;
  /**
   * Gross Merchandise Value (GMV) in USD based on last-touch 14-day attribution. This represents
   * the total revenue generated from orders attributed to affiliate links. Defaults to 0.0 if no
   * attribution data available.
   *
   * @default 0
   */
  gmv?: number;
  /**
   * Commission earned from Walmart Seller Referral (WSR) program in USD. This is the primary
   * commission earned through the affiliate program. Defaults to 0.0 if no commission data
   * available.
   *
   * @default 0
   */
  wsrCommission?: number;
  /**
   * Commission earned from other promotional programs in USD. This includes any additional
   * commissions beyond the WSR program. Defaults to 0.0 if no commission data available.
   *
   * @default 0
   */
  otherCommission?: number;
  /**
   * Total number of units sold based on last-touch 14-day attribution. Defaults to 0 if no
   * attribution data available.
   *
   * @default 0
   */
  totalUnits?: number;
};

export const wsrMetricsSchema: Schema<WsrMetrics> = s.object<WsrMetrics>({
  clicks: s.optional(s.int()),
  orders: s.defaulted(s.int(), 0),
  gmv: s.defaulted(s.float64(), 0),
  wsrCommission: s.defaulted(s.float64(), 0),
  otherCommission: s.defaulted(s.float64(), 0),
  totalUnits: s.defaulted(s.int(), 0),
});
