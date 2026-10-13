import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentSchema, type Shipment } from "./shipment.js";

export type CancelShipmentResponse = {
  shipment?: Shipment;
};

export const cancelShipmentResponseSchema: Schema<CancelShipmentResponse> = s.object<CancelShipmentResponse>({
  shipment: s.optional(s.lazy(() => shipmentSchema)),
});
