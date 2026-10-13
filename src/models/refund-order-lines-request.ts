import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundOrderLineSchema, type RefundOrderLine } from "./refund-order-line.js";

export type RefundOrderLinesRequest = {
  orderLines: RefundOrderLine[];
};

export const refundOrderLinesRequestSchema: Schema<RefundOrderLinesRequest> =
  s.object<RefundOrderLinesRequest>({
    orderLines: s.array(s.lazy(() => refundOrderLineSchema)),
  });
