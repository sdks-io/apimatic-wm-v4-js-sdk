import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason the verification was rejected. Required when `verificationStatus=REJECTED`; ignored
 * otherwise. Mirrors Amazon SP-API's enumerated rejection reasons.
 */
export const RejectionReason = {
  BuyerCanceled: "BUYER_CANCELED",
  BuyerRejected: "BUYER_REJECTED",
  IdExpired: "ID_EXPIRED",
  IdInvalid: "ID_INVALID",
  IdUnderage: "ID_UNDERAGE",
  IdMismatch: "ID_MISMATCH",
  Other: "OTHER",
} as const;
export type RejectionReason = (typeof RejectionReason)[keyof typeof RejectionReason] | (string & {});

export const rejectionReasonSchema: EnumSchema<RejectionReason> = s.enumOf<RejectionReason>(RejectionReason);
