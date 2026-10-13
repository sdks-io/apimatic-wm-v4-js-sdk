import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateInventoryRequest = {
  /** Declared on-hand quantity (maps to PIS inputQty). Must be ≥ 0. */
  quantity: number;
  shipNode?: string;
  /** Lead time in days to ship (0-4 for standard) */
  fulfillmentLag?: number;
};

export const updateInventoryRequestSchema: Schema<UpdateInventoryRequest> = s.object<UpdateInventoryRequest>({
  quantity: s.int(),
  shipNode: s.optional(s.string()),
  fulfillmentLag: s.optional(s.int()),
});
