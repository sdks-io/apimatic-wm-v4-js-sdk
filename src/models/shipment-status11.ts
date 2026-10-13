import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShipmentStatus11 = {
  ReadyForPickup: "READY_FOR_PICKUP",
  PickedUp: "PICKED_UP",
  InTransit: "IN_TRANSIT",
  OutForDelivery: "OUT_FOR_DELIVERY",
} as const;
export type ShipmentStatus11 = (typeof ShipmentStatus11)[keyof typeof ShipmentStatus11] | (string & {});

export const shipmentStatus11Schema: EnumSchema<ShipmentStatus11> =
  s.enumOf<ShipmentStatus11>(ShipmentStatus11);
