import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Seller accountable drivers, which impacting the cancellations rate */
export type SellerAccountableCancellationsDrivers = {
  /** Rate of orders cancelled due to out of stock */
  outOfStockRate?: number;
  /** Rate of orders cancelled due to pricing errors */
  pricingErrorRate?: number;
  /** Rate of orders cancelled due of incorrectly marked as address not serviceable */
  incMrkdAddNotSvcbleRate?: number;
  /** Rate of orders cancelled due to ship window expired */
  shipWindowExpRate?: number;
};

export const sellerAccountableCancellationsDriversSchema: Schema<SellerAccountableCancellationsDrivers> =
  s.object<SellerAccountableCancellationsDrivers>({
    outOfStockRate: s.optional(s.float64()),
    pricingErrorRate: s.optional(s.float64()),
    incMrkdAddNotSvcbleRate: s.optional(s.float64()),
    shipWindowExpRate: s.optional(s.float64()),
  });
