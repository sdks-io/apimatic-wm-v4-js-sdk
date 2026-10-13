import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelOrderLinesResponse = {
  purchaseOrderId?: string;
  cancelledAt?: Date;
};

export const cancelOrderLinesResponseSchema: Schema<CancelOrderLinesResponse> =
  s.object<CancelOrderLinesResponse>({
    purchaseOrderId: s.optional(s.string()),
    cancelledAt: s.optional(s.dateTime()),
  });
