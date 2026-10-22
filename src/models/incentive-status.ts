import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncentiveStatus = {
  Eligible: "ELIGIBLE",
  Enrolled: "ENROLLED",
} as const;
export type IncentiveStatus = (typeof IncentiveStatus)[keyof typeof IncentiveStatus] | (string & {});

export const incentiveStatusSchema: EnumSchema<IncentiveStatus> = s.enumOf<IncentiveStatus>(IncentiveStatus);
