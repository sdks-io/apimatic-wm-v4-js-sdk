import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type Payload2 = {
  nextToken?: string;
  orders?: Order[];
};

export const payload2Schema: Schema<Payload2> = s.object<Payload2>({
  nextToken: s.optional(s.string()),
  orders: s.optional(s.array(s.lazy(() => orderSchema))),
});
