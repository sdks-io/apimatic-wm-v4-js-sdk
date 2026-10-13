import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcknowledgeOrderResponse = {
  purchaseOrderId?: string;
  acknowledgedAt?: Date;
};

export const acknowledgeOrderResponseSchema: Schema<AcknowledgeOrderResponse> =
  s.object<AcknowledgeOrderResponse>({
    purchaseOrderId: s.optional(s.string()),
    acknowledgedAt: s.optional(s.dateTime()),
  });
