import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonContactInformationSchema,
  type CommonContactInformation,
} from "./common-contact-information.js";
import { commonDatesSchema, type CommonDates } from "./common-dates.js";
import {
  commonFreightInformationSchema,
  type CommonFreightInformation,
} from "./common-freight-information.js";
import {
  commonSelectedDeliveryWindowSchema,
  type CommonSelectedDeliveryWindow,
} from "./common-selected-delivery-window.js";
import {
  commonSelfShipAppointmentDetailsSchema,
  type CommonSelfShipAppointmentDetails,
} from "./common-self-ship-appointment-details.js";
import {
  commonShipmentDestinationSchema,
  type CommonShipmentDestination,
} from "./common-shipment-destination.js";
import { commonShipmentSourceSchema, type CommonShipmentSource } from "./common-shipment-source.js";
import { commonTrackingDetailsSchema, type CommonTrackingDetails } from "./common-tracking-details.js";

/** Contains information pertaining to a shipment in an inbound plan. */
export type CommonShipment = {
  /** The seller's contact information. */
  contactInformation?: CommonContactInformation;
  /** Specifies the date that the seller expects their shipment will be shipped. */
  dates?: CommonDates;
  /** The Walmart Ship Node address and warehouse ID. */
  destination: CommonShipmentDestination;
  /** Freight information describes the SKUs that are in transit. */
  freightInformation?: CommonFreightInformation;
  /** The name of the shipment. */
  name?: string;
  /** The identifier of a placement option. */
  placementOptionId: string;
  /** Selected delivery window attributes. */
  selectedDeliveryWindow?: CommonSelectedDeliveryWindow;
  /** Identifier of a transportation option. */
  selectedTransportationOptionId?: string;
  /** List of self ship appointment details. */
  selfShipAppointmentDetails?: CommonSelfShipAppointmentDetails[];
  /** The confirmed shipment ID which shows up on labels. */
  shipmentConfirmationId?: string;
  /** Identifier of a shipment. */
  shipmentId: string;
  /** Specifies the 'ship from' address for the shipment. */
  source: CommonShipmentSource;
  /**
   * The status of a shipment. Possible values: `ABANDONED`, `CANCELLED`, `CHECKED_IN`, `CLOSED`,
   * `DELETED`, `DELIVERED`, `IN_TRANSIT`, `MIXED`, `READY_TO_SHIP`, `RECEIVING`, `SHIPPED`,
   * `UNCONFIRMED`, `WORKING`.
   */
  status?: string;
  /** Tracking information for LTL and SPD shipments. */
  trackingDetails?: CommonTrackingDetails;
};

export const commonShipmentSchema: Schema<CommonShipment> = s.object<CommonShipment>({
  contactInformation: s.optional(s.lazy(() => commonContactInformationSchema)),
  dates: s.optional(s.lazy(() => commonDatesSchema)),
  destination: commonShipmentDestinationSchema,
  freightInformation: s.optional(s.lazy(() => commonFreightInformationSchema)),
  name: s.optional(s.string()),
  placementOptionId: s.string(),
  selectedDeliveryWindow: s.optional(s.lazy(() => commonSelectedDeliveryWindowSchema)),
  selectedTransportationOptionId: s.optional(s.string()),
  selfShipAppointmentDetails: s.optional(s.array(s.lazy(() => commonSelfShipAppointmentDetailsSchema))),
  shipmentConfirmationId: s.optional(s.string()),
  shipmentId: s.string(),
  source: commonShipmentSourceSchema,
  status: s.optional(s.string()),
  trackingDetails: s.optional(s.lazy(() => commonTrackingDetailsSchema)),
});
