import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancellationStatus = {
  Cancelled: "CANCELLED",
  Pending: "PENDING",
  Rejected: "REJECTED",
} as const;
export type CancellationStatus = (typeof CancellationStatus)[keyof typeof CancellationStatus] | (string & {});

export const cancellationStatusSchema: EnumSchema<CancellationStatus> =
  s.enumOf<CancellationStatus>(CancellationStatus);
