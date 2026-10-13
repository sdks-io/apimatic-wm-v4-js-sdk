import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonSelfShipAppointmentDetailsSchema,
  type CommonSelfShipAppointmentDetails,
} from "./common-self-ship-appointment-details.js";

/** The `scheduleSelfShipAppointment` response. */
export type ScheduleSelfShipAppointmentResponse = {
  /** Appointment details for carrier pickup or Ship Node appointments. */
  selfShipAppointmentDetails: CommonSelfShipAppointmentDetails;
};

export const scheduleSelfShipAppointmentResponseSchema: Schema<ScheduleSelfShipAppointmentResponse> =
  s.object<ScheduleSelfShipAppointmentResponse>({
    selfShipAppointmentDetails: commonSelfShipAppointmentDetailsSchema,
  });
