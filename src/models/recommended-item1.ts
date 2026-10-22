import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insight1Schema, type Insight1 } from "./insight1.js";

export type RecommendedItem1 = {
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
  insights?: Insight1[];
};

export const recommendedItem1Schema: Schema<RecommendedItem1> = s.object<RecommendedItem1>({
  gtin: s.optional(s.string()),
  sku: s.optional(s.string()),
  itemId: s.optional(s.string()),
  brand: s.optional(s.string()),
  itemName: s.optional(s.string()),
  insights: s.optional(s.array(s.lazy(() => insight1Schema))),
});
