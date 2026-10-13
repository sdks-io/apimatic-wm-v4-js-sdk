import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateFulfillmentOrderItem = {
  sellerSku: string;
  sellerFulfillmentOrderItemId: string;
  quantity: number;
  giftMessage?: string;
  displayableComment?: string;
};

export const createFulfillmentOrderItemSchema: Schema<CreateFulfillmentOrderItem> =
  s.object<CreateFulfillmentOrderItem>({
    sellerSku: s.string(),
    sellerFulfillmentOrderItemId: s.string(),
    quantity: s.int(),
    giftMessage: s.optional(s.string()),
    displayableComment: s.optional(s.string()),
  });
