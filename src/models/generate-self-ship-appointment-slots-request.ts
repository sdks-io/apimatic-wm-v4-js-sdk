import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The `generateSelfShipAppointmentSlots` request. */
export type GenerateSelfShipAppointmentSlotsRequest = {
  /** The desired end date. In ISO 8601 datetime format. */
  desiredEndDate?: Date;
  /** The desired start date. In ISO 8601 datetime format. */
  desiredStartDate?: Date;
};

export const generateSelfShipAppointmentSlotsRequestSchema: Schema<GenerateSelfShipAppointmentSlotsRequest> =
  s.object<GenerateSelfShipAppointmentSlotsRequest>({
    desiredEndDate: s.optional(s.dateTime()),
    desiredStartDate: s.optional(s.dateTime()),
  });
