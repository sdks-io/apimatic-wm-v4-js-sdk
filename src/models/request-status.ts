import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of report request. Possible values are RECEIVED, INPROGRESS, READY, ERROR. */
export const RequestStatus = {
  Received: "RECEIVED",
  Inprogress: "INPROGRESS",
  Ready: "READY",
  Error: "ERROR",
} as const;
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus] | (string & {});

export const requestStatusSchema: EnumSchema<RequestStatus> = s.enumOf<RequestStatus>(RequestStatus);
