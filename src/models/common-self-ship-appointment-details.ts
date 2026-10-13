import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonAppointmentSlotTimeSchema,
  type CommonAppointmentSlotTime,
} from "./common-appointment-slot-time.js";

/** Appointment details for carrier pickup or Ship Node appointments. */
export type CommonSelfShipAppointmentDetails = {
  /** Identifier for appointment. */
  appointmentId?: number;
  /** An appointment slot time with start and end. */
  appointmentSlotTime?: CommonAppointmentSlotTime;
  /** Status of the appointment. */
  appointmentStatus?: string;
};

export const commonSelfShipAppointmentDetailsSchema: Schema<CommonSelfShipAppointmentDetails> =
  s.object<CommonSelfShipAppointmentDetails>({
    appointmentId: s.optional(s.float64()),
    appointmentSlotTime: s.optional(s.lazy(() => commonAppointmentSlotTimeSchema)),
    appointmentStatus: s.optional(s.string()),
  });
