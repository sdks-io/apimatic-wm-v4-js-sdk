import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderSchema, type Order } from "./order.js";

export type GetOrderResponse = {
  payload?: Order;
};

export const getOrderResponseSchema: Schema<GetOrderResponse> = s.object<GetOrderResponse>({
  payload: s.optional(s.lazy(() => orderSchema)),
});
