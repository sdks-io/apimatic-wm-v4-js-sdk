import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAppointmentSlotSchema, type CommonAppointmentSlot } from "./common-appointment-slot.js";

/**
 * The self ship appointment time slots availability and an expiration date for which the slots can
 * be scheduled.
 */
export type CommonSelfShipAppointmentSlotsAvailability = {
  /** The time at which the self ship appointment slot expires. In ISO 8601 datetime format. */
  expiresAt?: Date;
  /** A list of appointment slots. */
  slots?: CommonAppointmentSlot[];
};

export const commonSelfShipAppointmentSlotsAvailabilitySchema: Schema<CommonSelfShipAppointmentSlotsAvailability> =
  s.object<CommonSelfShipAppointmentSlotsAvailability>({
    expiresAt: s.optional(s.dateTime()),
    slots: s.optional(s.array(s.lazy(() => commonAppointmentSlotSchema))),
  });
