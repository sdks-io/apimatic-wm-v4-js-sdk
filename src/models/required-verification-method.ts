import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the buyer must prove identity at delivery. NONE means no verification is required
 * (NOT_REGULATED orders always return NONE).
 */
export const RequiredVerificationMethod = {
  None: "NONE",
  DriversLicense: "DRIVERS_LICENSE",
  Passport: "PASSPORT",
  GovernmentId: "GOVERNMENT_ID",
} as const;
export type RequiredVerificationMethod =
  | (typeof RequiredVerificationMethod)[keyof typeof RequiredVerificationMethod]
  | (string & {});

export const requiredVerificationMethodSchema: EnumSchema<RequiredVerificationMethod> =
  s.enumOf<RequiredVerificationMethod>(RequiredVerificationMethod);
