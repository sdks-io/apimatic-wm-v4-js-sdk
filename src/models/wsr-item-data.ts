import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrMetricsSchema, type WsrMetrics } from "./wsr-metrics.js";

/**
 * Item-level performance data with product details.
 *
 * **Note**: Item details (`itemName`, `productType`, `category`) are enriched from the seller's
 * catalogue and may be null if the item is not found.
 */
export type WsrItemData = {
  /**
   * External campaign identifier. Available for all performanceBy levels (`CAMPAIGN`, `ADGROUP`,
   * `CREATIVE`).
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
   * adgroup-level aggregation..
   */
  creativeId?: string | null;
  /** Walmart item identifier */
  itemId?: string;
  /**
   * Name of the item/product from catalogue. May be null if item not found in seller's catalogue.
   */
  itemName?: string | null;
  /**
   * Product type classification from catalogue. May be null if item not found in seller's
   * catalogue.
   */
  productType?: string | null;
  /** Product category from catalogue. May be null if item not found in seller's catalogue. */
  category?: string | null;
  /**
   * Performance metrics for the aggregated data.
   *
   * All metrics are based on last-touch attribution with a 14-day window.
   */
  metrics?: WsrMetrics;
};

export const wsrItemDataSchema: Schema<WsrItemData> = s.object<WsrItemData>({
  campaignId: s.optionalNullable(s.string()),
  adGroupId: s.optionalNullable(s.string()),
  creativeId: s.optionalNullable(s.string()),
  itemId: s.optional(s.string()),
  itemName: s.optionalNullable(s.string()),
  productType: s.optionalNullable(s.string()),
  category: s.optionalNullable(s.string()),
  metrics: s.optional(s.lazy(() => wsrMetricsSchema)),
});
