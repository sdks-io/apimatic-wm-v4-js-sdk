import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatus9Schema, type ItemStatus9 } from "./item-status9.js";

export type Item121 = {
  /** Specifies the item identifier.<br><b style='color:green;'>Market availability: US only</b> */
  itemId?: string;
  /** Name of the item.<br><b style='color:green;'>Market availability: US only</b> */
  itemName?: string;
  /**
   * Units sold during the specified date range. The default date range is the last 7 days. May be
   * null when data is unavailable for the item.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  sales?: number | null;
  /**
   * Current number of reviews on the item.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  currentReviews?: number;
  /**
   * The number of times the item appeared in search results during the specified date range. The
   * default date range is the last 7 days. May be null when data is unavailable for the item.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  impressions?: number | null;
  /**
   * The number of views on the item page during the specified date range. The default date range is
   * the last 7 days. May be null when data is unavailable for the item.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  currentPageViews?: number | null;
  /**
   * The number of reviews collected for the item through IRP.<br><b style='color:green;'>Market
   * availability: US only</b>
   */
  reviewsCollected?: number;
  /**
   * Represents the Stock Keeping Unit (SKU), which is a unique identifier as defined by the seller.
   * This identifier helps in tracking inventory and managing items efficiently.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  sku?: string;
  /**
   * Current status of the item in IRP.<br><b style='color:green;'>Market availability: US only</b>
   */
  itemStatus?: ItemStatus9;
  /**
   * Priority of the item as recommended by Walmart.<br><b style='color:green;'>Market availability:
   * US only</b>
   */
  itemPriority?: number;
  /**
   * Indicates whether the item is a customer favorite. When the isCustomerFavorite request filter
   * is omitted, this field may be true, false, or null depending on available item data. When the
   * filter is provided, only items matching the filter value are returned (true returns only
   * customer favorites; false returns only non-customer favorites).<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  isCustomerFavorite?: boolean | null;
};

export const item121Schema: Schema<Item121> = s.object<Item121>({
  itemId: s.optional(s.string()),
  itemName: s.optional(s.string()),
  sales: s.optionalNullable(s.int()),
  currentReviews: s.optional(s.int()),
  impressions: s.optionalNullable(s.int()),
  currentPageViews: s.optionalNullable(s.int()),
  reviewsCollected: s.optional(s.int()),
  sku: s.optional(s.string()),
  itemStatus: s.optional(s.lazy(() => itemStatus9Schema)),
  itemPriority: s.optional(s.int()),
  isCustomerFavorite: s.optionalNullable(s.boolean()),
});
