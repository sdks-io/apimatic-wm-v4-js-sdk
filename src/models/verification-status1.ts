import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationStatus1 = {
  Approved: "APPROVED",
  Rejected: "REJECTED",
} as const;
export type VerificationStatus1 =
  | (typeof VerificationStatus1)[keyof typeof VerificationStatus1]
  | (string & {});

export const verificationStatus1Schema: EnumSchema<VerificationStatus1> =
  s.enumOf<VerificationStatus1>(VerificationStatus1);
