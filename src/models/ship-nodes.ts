import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShipNodes = {
  /** Last changes date for the item. */
  modifiedDate?: string;
  /**
   * The available quantity is the Quantity of an item that is available to be allocated to orders.
   */
  availToSellQty?: number;
  /**
   * The on-hand balance is the quantity of active inventory stored at the warehouse.Active
   * inventory is defined as the usable amount of an item that is in the warehouse.Inventory is
   * active if it is not damaged, expired or being inspected.
   */
  onHandQty?: number;
  /**
   * Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is
   * 'WFSFulfilled'. In later phase we will also add seller fulfilled inventory.
   */
  shipNodeType?: string;
};

export const shipNodesSchema: Schema<ShipNodes> = s.object<ShipNodes>({
  modifiedDate: s.optional(s.string()),
  availToSellQty: s.optional(s.int()),
  onHandQty: s.optional(s.int()),
  shipNodeType: s.optional(s.string()),
});
