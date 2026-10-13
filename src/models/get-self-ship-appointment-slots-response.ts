import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";
import {
  commonSelfShipAppointmentSlotsAvailabilitySchema,
  type CommonSelfShipAppointmentSlotsAvailability,
} from "./common-self-ship-appointment-slots-availability.js";

/** The `getSelfShipAppointmentSlots` response. */
export type GetSelfShipAppointmentSlotsResponse = {
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
  /**
   * The self ship appointment time slots availability and an expiration date for which the slots
   * can be scheduled.
   */
  selfShipAppointmentSlotsAvailability: CommonSelfShipAppointmentSlotsAvailability;
};

export const getSelfShipAppointmentSlotsResponseSchema: Schema<GetSelfShipAppointmentSlotsResponse> =
  s.object<GetSelfShipAppointmentSlotsResponse>({
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
    selfShipAppointmentSlotsAvailability: commonSelfShipAppointmentSlotsAvailabilitySchema,
  });
