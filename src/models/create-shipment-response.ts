import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentSchema, type Shipment } from "./shipment.js";

export type CreateShipmentResponse = {
  shipment?: Shipment;
};

export const createShipmentResponseSchema: Schema<CreateShipmentResponse> = s.object<CreateShipmentResponse>({
  shipment: s.optional(s.lazy(() => shipmentSchema)),
});
