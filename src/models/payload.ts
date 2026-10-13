import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentOrderItemSchema, type FulfillmentOrderItem } from "./fulfillment-order-item.js";
import { fulfillmentOrderSchema, type FulfillmentOrder } from "./fulfillment-order.js";
import { fulfillmentShipmentSchema, type FulfillmentShipment } from "./fulfillment-shipment.js";

export type Payload = {
  fulfillmentOrder?: FulfillmentOrder;
  fulfillmentOrderItems?: FulfillmentOrderItem[];
  fulfillmentShipments?: FulfillmentShipment[];
};

export const payloadSchema: Schema<Payload> = s.object<Payload>({
  fulfillmentOrder: s.optional(s.lazy(() => fulfillmentOrderSchema)),
  fulfillmentOrderItems: s.optional(s.array(s.lazy(() => fulfillmentOrderItemSchema))),
  fulfillmentShipments: s.optional(s.array(s.lazy(() => fulfillmentShipmentSchema))),
});
