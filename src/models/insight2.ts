import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Insight2 = {
  /** High-level issue type explaining why your item is unpublished. */
  unpublishedIssueType?: string;
  /**
   * Based on your current inventory level, this is the estimated per-unit storage cost of your
   * unpublished WFS items for the next 30 days.
   */
  estimatedStorageFee?: number;
  /**
   * The estimated dollar value of the available inventory for each unpublished WFS item in your
   * catalog.
   */
  inventoryValue?: number;
  /** Indicates whether the item is identified as a customer favorite based on customer demand. */
  customerFavorite?: boolean;
};

export const insight2Schema: Schema<Insight2> = s.object<Insight2>({
  unpublishedIssueType: s.optional(s.string()),
  estimatedStorageFee: s.optional(s.float64()),
  inventoryValue: s.optional(s.float64()),
  customerFavorite: s.optional(s.boolean()),
});
