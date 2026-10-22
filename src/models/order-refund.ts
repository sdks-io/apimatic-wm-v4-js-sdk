import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderLinesSchema, type OrderLines } from "./order-lines.js";

/** Array orderRefund.<br><b style='color:green;'>Market availability: MX</b> */
export type OrderRefund = {
  /** Array of Order lines.<br><b style='color:green;'>Market availability: MX</b> */
  orderLines?: OrderLines;
};

export const orderRefundSchema: Schema<OrderRefund> = s.object<OrderRefund>({
  orderLines: s.optional(s.lazy(() => orderLinesSchema)),
});
