import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipNodesSchema, type ShipNodes } from "./ship-nodes.js";

export type InventoryWfs = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  shipNodes?: ShipNodes[];
};

export const inventoryWfsSchema: Schema<InventoryWfs> = s.object<InventoryWfs>({
  sku: s.optional(s.string()),
  shipNodes: s.optional(s.array(s.lazy(() => shipNodesSchema))),
});
