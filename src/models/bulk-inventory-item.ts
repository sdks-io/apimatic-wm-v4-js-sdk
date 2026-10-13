import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkInventoryItem = {
  sellerSku: string;
  /** Declared on-hand quantity. Must be ≥ 0. */
  quantity: number;
  shipNode?: string;
  fulfillmentLag?: number;
};

export const bulkInventoryItemSchema: Schema<BulkInventoryItem> = s.object<BulkInventoryItem>({
  sellerSku: s.string(),
  quantity: s.int(),
  shipNode: s.optional(s.string()),
  fulfillmentLag: s.optional(s.int()),
});
