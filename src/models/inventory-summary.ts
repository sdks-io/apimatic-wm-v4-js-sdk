import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { inventoryDetailsSchema, type InventoryDetails } from "./inventory-details.js";

export type InventorySummary = {
  sellerSku: string;
  /** Item title as listed on the marketplace. Null if not available. */
  productName?: string | null;
  walmartItemId?: string;
  shipNode?: string;
  /** Item condition. */
  condition?: Condition;
  /**
   * Timestamp of the most recent inventory update for this SKU at this ship node. Null if no update
   * timestamp is available.
   */
  lastUpdated?: Date | null;
  /**
   * Date from which this inventory is available to sell at this ship node. Null if no availability
   * date has been set.
   */
  inventoryAvailableDate?: string | null;
  /** Inventory quantity breakdown for this SKU at this ship node. */
  inventoryDetails?: InventoryDetails | null;
};

export const inventorySummarySchema: Schema<InventorySummary> = s.object<InventorySummary>({
  sellerSku: s.string(),
  productName: s.optionalNullable(s.string()),
  walmartItemId: s.optional(s.string()),
  shipNode: s.optional(s.string()),
  condition: s.optional(s.lazy(() => conditionSchema)),
  lastUpdated: s.optionalNullable(s.dateTime()),
  inventoryAvailableDate: s.optionalNullable(s.dateOnly()),
  inventoryDetails: s.optionalNullable(s.lazy(() => inventoryDetailsSchema)),
});
