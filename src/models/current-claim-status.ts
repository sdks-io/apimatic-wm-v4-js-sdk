import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CurrentClaimStatus = {
  Initiated: "INITIATED",
  InReview: "IN_REVIEW",
  NeedInfo: "NEED_INFO",
  Approved: "APPROVED",
  PaymentInitiated: "PAYMENT_INITIATED",
  PaidOut: "PAID_OUT",
  Rejected: "REJECTED",
} as const;
export type CurrentClaimStatus = (typeof CurrentClaimStatus)[keyof typeof CurrentClaimStatus] | (string & {});

export const currentClaimStatusSchema: EnumSchema<CurrentClaimStatus> =
  s.enumOf<CurrentClaimStatus>(CurrentClaimStatus);
