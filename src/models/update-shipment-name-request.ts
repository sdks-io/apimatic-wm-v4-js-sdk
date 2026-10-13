import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The `updateShipmentName` request. */
export type UpdateShipmentNameRequest = {
  /** A human-readable name to update the shipment name to. */
  name: string;
};

export const updateShipmentNameRequestSchema: Schema<UpdateShipmentNameRequest> =
  s.object<UpdateShipmentNameRequest>({
    name: s.string(),
  });
