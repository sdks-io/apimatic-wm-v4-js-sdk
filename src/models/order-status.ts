import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderStatus = {
  Created: "Created",
  Acknowledged: "Acknowledged",
  Shipped: "Shipped",
  Delivered: "Delivered",
  Cancelled: "Cancelled",
  Refunded: "Refunded",
} as const;
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus] | (string & {});

export const orderStatusSchema: EnumSchema<OrderStatus> = s.enumOf<OrderStatus>(OrderStatus);
