import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason for cancelling or rescheduling a self-ship appointment. */
export const CommonReasonComment = {
  AppointmentRequestedByMistake: "APPOINTMENT_REQUESTED_BY_MISTAKE",
  VehicleDelay: "VEHICLE_DELAY",
  SlotNotSuitable: "SLOT_NOT_SUITABLE",
  OutsideCarrierBusinessHours: "OUTSIDE_CARRIER_BUSINESS_HOURS",
  UnfavourableExternalConditions: "UNFAVOURABLE_EXTERNAL_CONDITIONS",
  ProcurementDelay: "PROCUREMENT_DELAY",
  ShippingPlanChanged: "SHIPPING_PLAN_CHANGED",
  IncreasedQuantity: "INCREASED_QUANTITY",
  Other: "OTHER",
} as const;
export type CommonReasonComment =
  | (typeof CommonReasonComment)[keyof typeof CommonReasonComment]
  | (string & {});

export const commonReasonCommentSchema: EnumSchema<CommonReasonComment> =
  s.enumOf<CommonReasonComment>(CommonReasonComment);
