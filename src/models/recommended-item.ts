import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightSchema, type Insight } from "./insight.js";

export type RecommendedItem = {
  /**
   * The Global Trade Identification Number (GTIN) associated with the item. If you provide a
   * 12-digit UPC rather than a GTIN, the GTIN will start with two 0s followed by the UPC.
   */
  gtin?: string;
  /** The unique identifier you as the seller have assigned to your item. */
  sku?: string;
  /** Unique identifier assigned by Walmart for each item. */
  itemId?: string;
  /** The company name or manufacturer of the item. */
  brand?: string;
  /** The name of the item. */
  itemName?: string;
  /**
   * Out-of-stock items have 0 units available to sell. At-risk items have fewer than 28 days of
   * supply, including both available and inbound units. In-stock items have more than 28 days of
   * total supply. Long term out of stock items that have been consistently out of stock for more
   * than 30 days. New to WFS items that have been set up in WFS but haven't been inbounded because
   * a shipment order has not been created.
   */
  stockStatus?: string;
  /**
   * The item's condition described by its appearance, quality, packaging, functionality, and
   * previous usage.
   */
  itemCondition?: string;
  insights?: Insight[];
};

export const recommendedItemSchema: Schema<RecommendedItem> = s.object<RecommendedItem>({
  gtin: s.optional(s.string()),
  sku: s.optional(s.string()),
  itemId: s.optional(s.string()),
  brand: s.optional(s.string()),
  itemName: s.optional(s.string()),
  stockStatus: s.optional(s.string()),
  itemCondition: s.optional(s.string()),
  insights: s.optional(s.array(s.lazy(() => insightSchema))),
});
