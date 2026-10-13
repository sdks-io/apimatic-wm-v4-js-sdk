import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentShipmentStatus = {
  Pending: "PENDING",
  Shipped: "SHIPPED",
  CancelledByFulfiller: "CANCELLED_BY_FULFILLER",
  CancelledBySeller: "CANCELLED_BY_SELLER",
} as const;
export type FulfillmentShipmentStatus =
  | (typeof FulfillmentShipmentStatus)[keyof typeof FulfillmentShipmentStatus]
  | (string & {});

export const fulfillmentShipmentStatusSchema: EnumSchema<FulfillmentShipmentStatus> =
  s.enumOf<FulfillmentShipmentStatus>(FulfillmentShipmentStatus);
