import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantity5Schema, type Quantity5 } from "./quantity5.js";

export type V3InventoryRequest = {
  /**
   * A seller-provided Product ID. Response will have decoded value.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  sku: string;
  /**
   * Quantity that has been ordered by the customers but not yet shipped.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  quantity: Quantity5;
  /**
   * Information about when the inventory is expected at the given ship node. Format:YYYY-MM-DD
   *
   * <strong style="color: green;">Market availability: US only</strong>
   */
  inventoryAvailableDate?: string;
};

export const v3InventoryRequestSchema: Schema<V3InventoryRequest> = s.object<V3InventoryRequest>({
  sku: s.string(),
  quantity: quantity5Schema,
  inventoryAvailableDate: s.optional(s.string()),
});
