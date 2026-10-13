import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipmentRequestDetailsSchema, type ShipmentRequestDetails } from "./shipment-request-details.js";

export type GetEligibleShippingServicesRequest = {
  shipmentRequestDetails: ShipmentRequestDetails;
};

export const getEligibleShippingServicesRequestSchema: Schema<GetEligibleShippingServicesRequest> =
  s.object<GetEligibleShippingServicesRequest>({
    shipmentRequestDetails: shipmentRequestDetailsSchema,
  });
