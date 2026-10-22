import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantitySchema, type Quantity } from "./quantity.js";

/**
 * A line number associated with each individual line in the return order. If return order has only
 * one return order line and it is not provided in the request, the only available return order line
 * is auto-selected. If return order has multiple return order lines, the required return order line
 * must be provided in the request. If not provided in the request, it will result in
 * data-error..<br><b style='color:green;'>Market availability: US</b>
 */
export type RefundLine = {
  returnOrderLineNumber: number;
  /** Total quantity returned in this return line.> */
  quantity: Quantity;
};

export const refundLineSchema: Schema<RefundLine> = s.object<RefundLine>({
  returnOrderLineNumber: s.int(),
  quantity: quantitySchema,
});
