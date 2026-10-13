import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentOrderStatus = {
  Received: "RECEIVED",
  Invalid: "INVALID",
  Planning: "PLANNING",
  Processing: "PROCESSING",
  Cancelled: "CANCELLED",
  Complete: "COMPLETE",
  CompletePartialled: "COMPLETE_PARTIALLED",
  Unfulfillable: "UNFULFILLABLE",
} as const;
export type FulfillmentOrderStatus =
  | (typeof FulfillmentOrderStatus)[keyof typeof FulfillmentOrderStatus]
  | (string & {});

export const fulfillmentOrderStatusSchema: EnumSchema<FulfillmentOrderStatus> =
  s.enumOf<FulfillmentOrderStatus>(FulfillmentOrderStatus);
