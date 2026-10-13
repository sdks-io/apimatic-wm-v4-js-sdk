import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Non-terminal shipment-lifecycle state. Mirrors Amazon SP-API Orders v0 `shipmentStatus`. For
 * terminal `Delivered` use the dedicated `/deliver` endpoint.
 */
export const ShipmentStatus1 = {
  ReadyForPickup: "READY_FOR_PICKUP",
  PickedUp: "PICKED_UP",
  InTransit: "IN_TRANSIT",
  OutForDelivery: "OUT_FOR_DELIVERY",
} as const;
export type ShipmentStatus1 = (typeof ShipmentStatus1)[keyof typeof ShipmentStatus1] | (string & {});

export const shipmentStatus1Schema: EnumSchema<ShipmentStatus1> = s.enumOf<ShipmentStatus1>(ShipmentStatus1);
