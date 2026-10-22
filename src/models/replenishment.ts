import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Replenishment = {
  /**
   * The Walmart-assigned ID used to track items. This ID is located at the end of the item page
   * URL.
   */
  itemId: string;
  /**
   * The Global Trade Identification Number (GTIN) associated with the item. If you provide a
   * 12-digit UPC rather than a GTIN, the GTIN will start with two 0s followed by the UPC.
   */
  gtin: string;
  /** Universal Product Code (UPC) of the item. */
  upc?: string;
  /** The unique identifier assigned to the item by the seller. */
  vendorSku: string;
  /** Recommended maximum quantity for the item */
  maxQty: number;
  /** Suggested inbound quantity */
  suggestedQty?: number;
  /** Indicates whether the item is identified as a customer favorite based on customer demand. */
  customerFavorite?: boolean;
};

export const replenishmentSchema: Schema<Replenishment> = s.object<Replenishment>({
  itemId: s.string(),
  gtin: s.string(),
  upc: s.optional(s.string()),
  vendorSku: s.string(),
  maxQty: s.int(),
  suggestedQty: s.optional(s.int()),
  customerFavorite: s.optional(s.boolean()),
});
