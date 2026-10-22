import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderRefundSchema, type OrderRefund } from "./order-refund.js";
import { refundLineSchema, type RefundLine } from "./refund-line.js";

export type RefundRequest = {
  /**
   * A unique ID associated with the sales order for specified customer.<br><b
   * style='color:green;'>Market availability: US | MX</b>
   */
  customerOrderId: string;
  /** Array of refund lines.<br><b style='color:green;'>Market availability: US</b> */
  refundLines: RefundLine[];
  /** Array orderRefund.<br><b style='color:green;'>Market availability: MX</b> */
  orderRefund: OrderRefund;
};

export const refundRequestSchema: Schema<RefundRequest> = s.object<RefundRequest>({
  customerOrderId: s.string(),
  refundLines: s.array(s.lazy(() => refundLineSchema)),
  orderRefund: orderRefundSchema,
});
