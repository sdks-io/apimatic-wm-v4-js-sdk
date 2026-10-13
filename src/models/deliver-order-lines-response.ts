import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeliverOrderLinesResponse = {
  purchaseOrderId?: string;
  deliveredAt?: Date;
};

export const deliverOrderLinesResponseSchema: Schema<DeliverOrderLinesResponse> =
  s.object<DeliverOrderLinesResponse>({
    purchaseOrderId: s.optional(s.string()),
    deliveredAt: s.optional(s.dateTime()),
  });
