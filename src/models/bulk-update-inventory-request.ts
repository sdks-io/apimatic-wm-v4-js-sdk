import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkInventoryItemSchema, type BulkInventoryItem } from "./bulk-inventory-item.js";

export type BulkUpdateInventoryRequest = {
  items: BulkInventoryItem[];
};

export const bulkUpdateInventoryRequestSchema: Schema<BulkUpdateInventoryRequest> =
  s.object<BulkUpdateInventoryRequest>({
    items: s.array(s.lazy(() => bulkInventoryItemSchema)),
  });
