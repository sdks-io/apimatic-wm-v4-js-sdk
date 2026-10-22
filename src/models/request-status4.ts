import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestStatus4 = {
  Received: "RECEIVED",
  Inprogress: "INPROGRESS",
  Ready: "READY",
  Error: "ERROR",
} as const;
export type RequestStatus4 = (typeof RequestStatus4)[keyof typeof RequestStatus4] | (string & {});

export const requestStatus4Schema: EnumSchema<RequestStatus4> = s.enumOf<RequestStatus4>(RequestStatus4);
