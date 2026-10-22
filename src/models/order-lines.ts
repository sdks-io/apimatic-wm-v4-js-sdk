import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderLineSchema, type OrderLine } from "./order-line.js";

/** Array of Order lines.<br><b style='color:green;'>Market availability: MX</b> */
export type OrderLines = {
  orderLine?: OrderLine[];
};

export const orderLinesSchema: Schema<OrderLines> = s.object<OrderLines>({
  orderLine: s.optional(s.array(s.lazy(() => orderLineSchema))),
});
