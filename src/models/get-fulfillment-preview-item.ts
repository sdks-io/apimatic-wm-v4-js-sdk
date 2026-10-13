import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetFulfillmentPreviewItem = {
  sellerSku: string;
  quantity: number;
  sellerFulfillmentOrderItemId: string;
};

export const getFulfillmentPreviewItemSchema: Schema<GetFulfillmentPreviewItem> =
  s.object<GetFulfillmentPreviewItem>({
    sellerSku: s.string(),
    quantity: s.int(),
    sellerFulfillmentOrderItemId: s.string(),
  });
