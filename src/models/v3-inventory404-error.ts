import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { supplyQuantitySchema, type SupplyQuantity } from "./supply-quantity.js";

export type V3Inventory404Error = {
  /** A seller-provided Product ID. Response will have decoded value. */
  sku: string;
  /** Quantity that has been ordered by the customers but not yet shipped. */
  quantity: SupplyQuantity;
  /** Information about when the inventory is expected at the given ship node.Format:YYYY-MM-DD */
  inventoryAvailableDate?: string;
};

export const v3Inventory404ErrorSchema: Schema<V3Inventory404Error> = s.object<V3Inventory404Error>({
  sku: s.string(),
  quantity: supplyQuantitySchema,
  inventoryAvailableDate: s.optional(s.string()),
});
