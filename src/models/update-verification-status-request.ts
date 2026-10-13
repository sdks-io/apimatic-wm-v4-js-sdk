import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rejectionReasonSchema, type RejectionReason } from "./rejection-reason.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/**
 * Records the seller's verification decision for a regulated order. REJECTED requires a
 * `rejectionReason`; APPROVED leaves `rejectionReason` unset.
 */
export type UpdateVerificationStatusRequest = {
  /** Outcome of the doorstep / pickup identity verification. */
  verificationStatus: VerificationStatus;
  /**
   * Reason the verification was rejected. Required when `verificationStatus=REJECTED`; ignored
   * otherwise. Mirrors Amazon SP-API's enumerated rejection reasons.
   */
  rejectionReason?: RejectionReason;
};

export const updateVerificationStatusRequestSchema: Schema<UpdateVerificationStatusRequest> =
  s.object<UpdateVerificationStatusRequest>({
    verificationStatus: verificationStatusSchema,
    rejectionReason: s.optional(s.lazy(() => rejectionReasonSchema)),
  });
