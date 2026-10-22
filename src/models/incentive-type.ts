import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncentiveType = {
  ReducedReferral: "REDUCED_REFERRAL",
  WalmartFunded: "WALMART_FUNDED",
} as const;
export type IncentiveType = (typeof IncentiveType)[keyof typeof IncentiveType] | (string & {});

export const incentiveTypeSchema: EnumSchema<IncentiveType> = s.enumOf<IncentiveType>(IncentiveType);
