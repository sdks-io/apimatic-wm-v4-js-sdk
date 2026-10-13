import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderItemDispositionSchema, type OrderItemDisposition } from "./order-item-disposition.js";

export type FulfillmentOrderItem = {
  sellerSku?: string;
  sellerFulfillmentOrderItemId?: string;
  quantity?: number;
  orderItemDisposition?: OrderItemDisposition;
};

export const fulfillmentOrderItemSchema: Schema<FulfillmentOrderItem> = s.object<FulfillmentOrderItem>({
  sellerSku: s.optional(s.string()),
  sellerFulfillmentOrderItemId: s.optional(s.string()),
  quantity: s.optional(s.int()),
  orderItemDisposition: s.optional(s.lazy(() => orderItemDispositionSchema)),
});
