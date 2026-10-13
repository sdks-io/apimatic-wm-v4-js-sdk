import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonTrackingDetailsInputSchema,
  type CommonTrackingDetailsInput,
} from "./common-tracking-details-input.js";

/** The `updateShipmentTrackingDetails` request. */
export type UpdateShipmentTrackingDetailsRequest = {
  /** Tracking information input for LTL and SPD shipments. */
  trackingDetails: CommonTrackingDetailsInput;
};

export const updateShipmentTrackingDetailsRequestSchema: Schema<UpdateShipmentTrackingDetailsRequest> =
  s.object<UpdateShipmentTrackingDetailsRequest>({
    trackingDetails: commonTrackingDetailsInputSchema,
  });
