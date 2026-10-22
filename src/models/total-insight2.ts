import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalInsight2 = {
  /**
   * The total number of units of all your unpublished items that are currently in stock at WFS
   * fulfillment centers.
   */
  totalUnpublishedUnitsStored?: number;
  /**
   * Based on your current inventory level, this is the estimated total cost of storing your
   * unpublished WFS items for the next 30 days.
   */
  totalEstimatedStorageFee?: number;
  /**
   * The estimated total dollar value of the available inventory for all your WFS unpublished items.
   */
  totalInventoryValue?: number;
};

export const totalInsight2Schema: Schema<TotalInsight2> = s.object<TotalInsight2>({
  totalUnpublishedUnitsStored: s.optional(s.float64()),
  totalEstimatedStorageFee: s.optional(s.float64()),
  totalInventoryValue: s.optional(s.float64()),
});
