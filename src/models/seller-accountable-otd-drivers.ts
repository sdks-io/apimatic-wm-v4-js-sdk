import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Seller accountable drivers, which impacting the on time delivery rate */
export type SellerAccountableOtdDrivers = {
  /** Rate of orders impacted due to late shipment */
  lateShipmentRate?: number;
  /** Rate of orders delivered later than estimated delivery date */
  carrierEddLaterThanEddRate?: number;
  /** Rate of orders impacted due to late handover to carrier */
  lateHandoverToCarrierRate?: number;
  /** Rate of orders impacted due to no carrier scan */
  noCarrierScanRate?: number;
  /** Rate of orders impacted due to shipping method mismatch */
  carrierMethodMismatchRate?: number;
  /** Rate of orders impacted due to ship location mismatch */
  shipLocationMismatchRate?: number;
};

export const sellerAccountableOtdDriversSchema: Schema<SellerAccountableOtdDrivers> =
  s.object<SellerAccountableOtdDrivers>({
    lateShipmentRate: s.optional(s.float64()),
    carrierEddLaterThanEddRate: s.optional(s.float64()),
    lateHandoverToCarrierRate: s.optional(s.float64()),
    noCarrierScanRate: s.optional(s.float64()),
    carrierMethodMismatchRate: s.optional(s.float64()),
    shipLocationMismatchRate: s.optional(s.float64()),
    _keysMap: {
      carrierEddLaterThanEddRate: "carrierEDDLaterThanEDDRate",
    },
  });
