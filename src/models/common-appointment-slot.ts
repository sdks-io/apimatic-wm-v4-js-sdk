import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonAppointmentSlotTimeSchema,
  type CommonAppointmentSlotTime,
} from "./common-appointment-slot-time.js";

/** The Ship Node appointment slot for the transportation option. */
export type CommonAppointmentSlot = {
  /** An identifier to a self-ship appointment slot. */
  slotId: string;
  /** An appointment slot time with start and end. */
  slotTime: CommonAppointmentSlotTime;
};

export const commonAppointmentSlotSchema: Schema<CommonAppointmentSlot> = s.object<CommonAppointmentSlot>({
  slotId: s.string(),
  slotTime: commonAppointmentSlotTimeSchema,
});
