import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Seller accountable drivers, which impacting the refunds rate */
export type SellerAccountableRefundsDrivers = {
  /** Refund rate of incorrect items delivered */
  incorrectItemsRate?: number;
  /** Refund rate of delivered late orders */
  arrivedLateRate?: number;
  /** Refund rate of defective orders */
  defectiveRate?: number;
  /** Refund rate of damaged orders */
  damagedRate?: number;
  /** Refund rate of lost orders */
  lostRate?: number;
};

export const sellerAccountableRefundsDriversSchema: Schema<SellerAccountableRefundsDrivers> =
  s.object<SellerAccountableRefundsDrivers>({
    incorrectItemsRate: s.optional(s.float64()),
    arrivedLateRate: s.optional(s.float64()),
    defectiveRate: s.optional(s.float64()),
    damagedRate: s.optional(s.float64()),
    lostRate: s.optional(s.float64()),
  });
