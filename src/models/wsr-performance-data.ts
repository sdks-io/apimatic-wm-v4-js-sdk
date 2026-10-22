import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrMetricsSchema, type WsrMetrics } from "./wsr-metrics.js";

/**
 * Performance data aggregated by the specified performance level.
 *
 * **Field Availability by `performanceBy`**:
 *
 * | Field | CAMPAIGN | ADGROUP | CREATIVE |
 * |:--|:--:|:--:|:--:|
 * | `campaignId` | ✓ | ✓ | ✓ |
 * | `adGroupId` | null | ✓ | ✓ |
 * | `creativeId` | null | null | ✓ |
 */
export type WsrPerformanceData = {
  /**
   * External campaign identifier. Available for all performanceBy levels (CAMPAIGN, ADGROUP,
   * CREATIVE).
   */
  campaignId?: string | null;
  /**
   * External ad group identifier.
   *
   * > **Note:** Only populated when `performanceBy` is `ADGROUP` or `CREATIVE`. Returns `null` for
   * campaign-level aggregation.
   */
  adGroupId?: string | null;
  /**
   * External creative/link identifier.
   *
   * > **Note:** Only populated when `performanceBy` is `CREATIVE`. Returns `null` for campaign and
   * adgroup-level aggregation.
   */
  creativeId?: string | null;
  /**
   * Performance metrics for the aggregated data.
   *
   * All metrics are based on last-touch attribution with a 14-day window.
   */
  metrics?: WsrMetrics;
};

export const wsrPerformanceDataSchema: Schema<WsrPerformanceData> = s.object<WsrPerformanceData>({
  campaignId: s.optionalNullable(s.string()),
  adGroupId: s.optionalNullable(s.string()),
  creativeId: s.optionalNullable(s.string()),
  metrics: s.optional(s.lazy(() => wsrMetricsSchema)),
});
