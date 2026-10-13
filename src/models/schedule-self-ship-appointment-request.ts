import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonReasonCommentSchema, type CommonReasonComment } from "./common-reason-comment.js";

/** The `scheduleSelfShipAppointment` request. */
export type ScheduleSelfShipAppointmentRequest = {
  /** Reason for cancelling or rescheduling a self-ship appointment. */
  reasonComment?: CommonReasonComment;
};

export const scheduleSelfShipAppointmentRequestSchema: Schema<ScheduleSelfShipAppointmentRequest> =
  s.object<ScheduleSelfShipAppointmentRequest>({
    reasonComment: s.optional(s.lazy(() => commonReasonCommentSchema)),
  });
