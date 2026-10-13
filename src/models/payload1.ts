import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentShipmentSchema, type FulfillmentShipment } from "./fulfillment-shipment.js";

export type Payload1 = {
  fulfillmentShipments?: FulfillmentShipment[];
};

export const payload1Schema: Schema<Payload1> = s.object<Payload1>({
  fulfillmentShipments: s.optional(s.array(s.lazy(() => fulfillmentShipmentSchema))),
});
