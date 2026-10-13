import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LineStatus = {
  Created: "Created",
  Acknowledged: "Acknowledged",
  Shipped: "Shipped",
  Delivered: "Delivered",
  Cancelled: "Cancelled",
  Refunded: "Refunded",
} as const;
export type LineStatus = (typeof LineStatus)[keyof typeof LineStatus] | (string & {});

export const lineStatusSchema: EnumSchema<LineStatus> = s.enumOf<LineStatus>(LineStatus);
