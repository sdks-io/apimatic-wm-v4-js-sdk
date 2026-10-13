import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderLineSchema, type OrderLine } from "./order-line.js";

export type Payload11 = {
  purchaseOrderId?: string;
  orderItems?: OrderLine[];
};

export const payload11Schema: Schema<Payload11> = s.object<Payload11>({
  purchaseOrderId: s.optional(s.string()),
  orderItems: s.optional(s.array(s.lazy(() => orderLineSchema))),
});
