import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insight2Schema, type Insight2 } from "./insight2.js";

export type RecommendedItem2 = {
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
   * The item's condition described by its appearance, quality, packaging, functionality, and
   * previous usage.
   */
  itemCondition?: string;
  /** The estimated number of units per item currently in stock at WFS fulfillment centers. */
  unitsStored?: number;
  /**
   * The overall status of the item in your Walmart Marketplace catalog. Available statuses include:
   * Published, Unpublished, Processing, Stage, Error, or WFS Ineligible.
   */
  publishingStatus?: string;
  insights?: Insight2[];
};

export const recommendedItem2Schema: Schema<RecommendedItem2> = s.object<RecommendedItem2>({
  gtin: s.optional(s.string()),
  sku: s.optional(s.string()),
  itemId: s.optional(s.string()),
  brand: s.optional(s.string()),
  itemName: s.optional(s.string()),
  itemCondition: s.optional(s.string()),
  unitsStored: s.optional(s.int()),
  publishingStatus: s.optional(s.string()),
  insights: s.optional(s.array(s.lazy(() => insight2Schema))),
});
