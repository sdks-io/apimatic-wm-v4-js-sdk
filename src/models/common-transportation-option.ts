import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonAppointmentSlotTimeSchema,
  type CommonAppointmentSlotTime,
} from "./common-appointment-slot-time.js";
import { commonCarrierSchema, type CommonCarrier } from "./common-carrier.js";
import { commonQuoteSchema, type CommonQuote } from "./common-quote.js";

/** Contains information pertaining to a transportation option and the related carrier. */
export type CommonTransportationOption = {
  /** The carrier for the inbound shipment. */
  carrier: CommonCarrier;
  /** Contains details for a transportation carrier appointment. */
  carrierAppointment?: CommonAppointmentSlotTime;
  /** Identifies a list of preconditions for confirming the transportation option. */
  preconditions: string[];
  /** The estimated shipping cost associated with the transportation option. */
  quote?: CommonQuote;
  /** Identifier of a shipment. */
  shipmentId: string;
  /**
   * Mode of shipment transportation. Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`,
   * `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`,
   * `AIR_SMALL_PARCEL_EXPRESS`.
   */
  shippingMode: string;
  /**
   * Shipping program for the option. Possible values: `WALMART_PARTNERED_CARRIER`,
   * `USE_YOUR_OWN_CARRIER`.
   */
  shippingSolution: string;
  /** Identifier of a transportation option. */
  transportationOptionId: string;
};

export const commonTransportationOptionSchema: Schema<CommonTransportationOption> =
  s.object<CommonTransportationOption>({
    carrier: commonCarrierSchema,
    carrierAppointment: s.optional(s.lazy(() => commonAppointmentSlotTimeSchema)),
    preconditions: s.array(s.string()),
    quote: s.optional(s.lazy(() => commonQuoteSchema)),
    shipmentId: s.string(),
    shippingMode: s.string(),
    shippingSolution: s.string(),
    transportationOptionId: s.string(),
  });
