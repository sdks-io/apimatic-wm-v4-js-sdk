import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatusSchema, type ItemStatus } from "./item-status.js";

export type ItemsPayload = {
  /** Specifies the item identifier. */
  itemId?: string;
  /** Name of the item. */
  itemName?: string;
  /**
   * Units sold during the specified date range. The default date range is the last 7 days. May be
   * null when data is unavailable for the item.
   */
  sales?: number | null;
  /** Current number of reviews on the item. */
  currentReviews?: number;
  /**
   * The number of times the item appeared in search results during the specified date range. The
   * default date range is the last 7 days. May be null when data is unavailable for the item.
   */
  impressions?: number | null;
  /**
   * The number of views on the item page during the specified date range. The default date range is
   * the last 7 days. May be null when data is unavailable for the item.
   */
  currentPageViews?: number | null;
  /** The number of reviews collected for the item through IRP. */
  reviewsCollected?: number;
  /**
   * Represents the Stock Keeping Unit (SKU), which is a unique identifier as defined by the seller.
   * This identifier helps in tracking inventory and managing items efficiently.
   */
  sku?: string;
  /** Current status of the item in IRP. */
  itemStatus?: ItemStatus;
  /** Priority of the item as recommended by Walmart. */
  itemPriority?: number;
};

export const itemsPayloadSchema: Schema<ItemsPayload> = s.object<ItemsPayload>({
  itemId: s.optional(s.string()),
  itemName: s.optional(s.string()),
  sales: s.optionalNullable(s.int()),
  currentReviews: s.optional(s.int()),
  impressions: s.optionalNullable(s.int()),
  currentPageViews: s.optionalNullable(s.int()),
  reviewsCollected: s.optional(s.int()),
  sku: s.optional(s.string()),
  itemStatus: s.optional(s.lazy(() => itemStatusSchema)),
  itemPriority: s.optional(s.int()),
});
