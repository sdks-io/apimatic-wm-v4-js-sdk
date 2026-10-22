import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { supplyQuantitySchema, type SupplyQuantity } from "./supply-quantity.js";

export type Inventory1 = {
  /** A seller-provided Product ID. Response will have decoded value. */
  sku: string;
  /** Quantity that has been ordered by the customers but not yet shipped. */
  quantity: SupplyQuantity;
  /** Information about when the inventory is expected at the given ship node.Format:YYYY-MM-DD */
  inventoryAvailableDate?: string;
};

export const inventory1Schema: Schema<Inventory1> = s.object<Inventory1>({
  sku: s.string(),
  quantity: supplyQuantitySchema,
  inventoryAvailableDate: s.optional(s.string()),
});
