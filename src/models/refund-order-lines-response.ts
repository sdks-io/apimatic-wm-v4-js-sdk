import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefundOrderLinesResponse = {
  purchaseOrderId?: string;
  /**
   * Seller-visible refund handle, generated server-side. Stable for the lifetime of the refund;
   * future GET endpoints will accept it as a path variable.
   */
  refundId?: string;
  refundedAt?: Date;
};

export const refundOrderLinesResponseSchema: Schema<RefundOrderLinesResponse> =
  s.object<RefundOrderLinesResponse>({
    purchaseOrderId: s.optional(s.string()),
    refundId: s.optional(s.string()),
    refundedAt: s.optional(s.dateTime()),
  });
