import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShipmentStatus = {
  Purchased: "PURCHASED",
  Refunded: "REFUNDED",
  Shipped: "SHIPPED",
} as const;
export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus] | (string & {});

export const shipmentStatusSchema: EnumSchema<ShipmentStatus> = s.enumOf<ShipmentStatus>(ShipmentStatus);
