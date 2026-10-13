import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An appointment slot time with start and end., Contains details for a transportation carrier
 * appointment., An appointment slot time with start and end., Contains details for a transportation
 * carrier appointment.
 */
export type CommonAppointmentSlotTime = {
  /** The end timestamp of the appointment in UTC. */
  endTime: Date;
  /** The start timestamp of the appointment in UTC. */
  startTime: Date;
};

export const commonAppointmentSlotTimeSchema: Schema<CommonAppointmentSlotTime> =
  s.object<CommonAppointmentSlotTime>({
    endTime: s.dateTime(),
    startTime: s.dateTime(),
  });
