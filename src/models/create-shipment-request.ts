import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelFormatSchema, type LabelFormat } from "./label-format.js";
import { shipmentRequestDetailsSchema, type ShipmentRequestDetails } from "./shipment-request-details.js";

export type CreateShipmentRequest = {
  shipmentRequestDetails: ShipmentRequestDetails;
  shippingServiceId: string;
  shippingServiceOfferId?: string;
  labelFormat?: LabelFormat;
};

export const createShipmentRequestSchema: Schema<CreateShipmentRequest> = s.object<CreateShipmentRequest>({
  shipmentRequestDetails: shipmentRequestDetailsSchema,
  shippingServiceId: s.string(),
  shippingServiceOfferId: s.optional(s.string()),
  labelFormat: s.optional(s.lazy(() => labelFormatSchema)),
});
