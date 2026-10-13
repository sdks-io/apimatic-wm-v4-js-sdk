import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CancellationReason = {
  CustomerRequested: "CUSTOMER_REQUESTED",
  OutOfStock: "OUT_OF_STOCK",
  PriceError: "PRICE_ERROR",
  SellerInitiated: "SELLER_INITIATED",
} as const;
export type CancellationReason = (typeof CancellationReason)[keyof typeof CancellationReason] | (string & {});

export const cancellationReasonSchema: EnumSchema<CancellationReason> =
  s.enumOf<CancellationReason>(CancellationReason);
