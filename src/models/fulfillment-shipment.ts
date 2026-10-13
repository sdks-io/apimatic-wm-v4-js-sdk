import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fulfillmentShipmentStatusSchema,
  type FulfillmentShipmentStatus,
} from "./fulfillment-shipment-status.js";

export type FulfillmentShipment = {
  walmartShipmentId?: string;
  /** Walmart Ship Node ID */
  fulfillmentCenterId?: string;
  fulfillmentShipmentStatus?: FulfillmentShipmentStatus;
  shippingDate?: Date;
  estimatedArrivalDate?: Date;
  trackingNumber?: string;
  carrier?: string;
};

export const fulfillmentShipmentSchema: Schema<FulfillmentShipment> = s.object<FulfillmentShipment>({
  walmartShipmentId: s.optional(s.string()),
  fulfillmentCenterId: s.optional(s.string()),
  fulfillmentShipmentStatus: s.optional(s.lazy(() => fulfillmentShipmentStatusSchema)),
  shippingDate: s.optional(s.dateTime()),
  estimatedArrivalDate: s.optional(s.dateTime()),
  trackingNumber: s.optional(s.string()),
  carrier: s.optional(s.string()),
});
