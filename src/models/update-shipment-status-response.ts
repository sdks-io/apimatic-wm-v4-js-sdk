import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentStatus11Schema, type ShipmentStatus11 } from "./shipment-status11.js";

export type UpdateShipmentStatusResponse = {
  purchaseOrderId?: string;
  shipmentStatus?: ShipmentStatus11;
  updatedAt?: Date;
};

export const updateShipmentStatusResponseSchema: Schema<UpdateShipmentStatusResponse> =
  s.object<UpdateShipmentStatusResponse>({
    purchaseOrderId: s.optional(s.string()),
    shipmentStatus: s.optional(s.lazy(() => shipmentStatus11Schema)),
    updatedAt: s.optional(s.dateTime()),
  });
