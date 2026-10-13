import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address2Schema, type Address2 } from "./address2.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";
import { moneySchema, type Money } from "./money.js";
import { orderLineSchema, type OrderLine } from "./order-line.js";
import { orderStatusSchema, type OrderStatus } from "./order-status.js";

export type Order = {
  /** Walmart-assigned Purchase Order ID */
  purchaseOrderId: string;
  /** Customer-facing order reference */
  customerOrderId?: string;
  sellerId: string;
  orderStatus: OrderStatus;
  fulfillmentType?: FulfillmentType;
  purchaseDate: Date;
  lastUpdatedDate?: Date;
  orderTotal?: Money;
  shippingAddress?: Address2;
  orderLines?: OrderLine[];
};

export const orderSchema: Schema<Order> = s.object<Order>({
  purchaseOrderId: s.string(),
  customerOrderId: s.optional(s.string()),
  sellerId: s.string(),
  orderStatus: orderStatusSchema,
  fulfillmentType: s.optional(s.lazy(() => fulfillmentTypeSchema)),
  purchaseDate: s.dateTime(),
  lastUpdatedDate: s.optional(s.dateTime()),
  orderTotal: s.optional(s.lazy(() => moneySchema)),
  shippingAddress: s.optional(s.lazy(() => address2Schema)),
  orderLines: s.optional(s.array(s.lazy(() => orderLineSchema))),
});
