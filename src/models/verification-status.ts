import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of the doorstep / pickup identity verification. */
export const VerificationStatus = {
  Approved: "APPROVED",
  Rejected: "REJECTED",
} as const;
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus] | (string & {});

export const verificationStatusSchema: EnumSchema<VerificationStatus> =
  s.enumOf<VerificationStatus>(VerificationStatus);
