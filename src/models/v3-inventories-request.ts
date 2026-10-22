import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventories3Schema, type Inventories3 } from "./inventories3.js";

export type V3InventoriesRequest = {
  /** <strong style="color: green;">Market availability: Global</strong> */
  inventories: Inventories3;
};

export const v3InventoriesRequestSchema: Schema<V3InventoriesRequest> = s.object<V3InventoriesRequest>({
  inventories: inventories3Schema,
});
