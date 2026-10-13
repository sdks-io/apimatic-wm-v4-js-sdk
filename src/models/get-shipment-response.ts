import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentSchema, type Shipment } from "./shipment.js";

export type GetShipmentResponse = {
  shipment?: Shipment;
};

export const getShipmentResponseSchema: Schema<GetShipmentResponse> = s.object<GetShipmentResponse>({
  shipment: s.optional(s.lazy(() => shipmentSchema)),
});
