import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonReasonCommentSchema, type CommonReasonComment } from "./common-reason-comment.js";

/** The `cancelSelfShipAppointment` request. */
export type CancelSelfShipAppointmentRequest = {
  /** Reason for cancelling or rescheduling a self-ship appointment. */
  reasonComment?: CommonReasonComment;
};

export const cancelSelfShipAppointmentRequestSchema: Schema<CancelSelfShipAppointmentRequest> =
  s.object<CancelSelfShipAppointmentRequest>({
    reasonComment: s.optional(s.lazy(() => commonReasonCommentSchema)),
  });
