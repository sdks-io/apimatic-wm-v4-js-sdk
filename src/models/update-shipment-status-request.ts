import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentStatus1Schema, type ShipmentStatus1 } from "./shipment-status1.js";
import {
  updateShipmentStatusLineSchema,
  type UpdateShipmentStatusLine,
} from "./update-shipment-status-line.js";

export type UpdateShipmentStatusRequest = {
  /**
   * Non-terminal shipment-lifecycle state. Mirrors Amazon SP-API Orders v0 `shipmentStatus`. For
   * terminal `Delivered` use the dedicated `/deliver` endpoint.
   */
  shipmentStatus: ShipmentStatus1;
  /**
   * ISO-8601 timestamp at which the seller observed the status change. Optional — if omitted, FMS
   * defaults to server time.
   */
  statusDate?: Date;
  orderLines: UpdateShipmentStatusLine[];
};

export const updateShipmentStatusRequestSchema: Schema<UpdateShipmentStatusRequest> =
  s.object<UpdateShipmentStatusRequest>({
    shipmentStatus: shipmentStatus1Schema,
    statusDate: s.optional(s.dateTime()),
    orderLines: s.array(s.lazy(() => updateShipmentStatusLineSchema)),
  });
