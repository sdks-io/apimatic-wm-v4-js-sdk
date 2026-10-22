import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Seller accountable drivers, which impacting the valid tracking rate */
export type SellerAccountableVtrDrivers = {
  /** Total rate of orders with misleading tracking information */
  misleadingTrackingRate?: number;
  /** Total rate of orders with non Integrated Carriers */
  nonIntegratedCarrierRate?: number;
  /** Total rate of orders with invalid tracking Id */
  invalidTrackingIdRate?: number;
  /** Total rate of orders with invalid tracking url */
  invalidTrackingUrlRate?: number;
  /** Total rate of orders with no Carrier Scan */
  noCarrierScanRate?: number;
};

export const sellerAccountableVtrDriversSchema: Schema<SellerAccountableVtrDrivers> =
  s.object<SellerAccountableVtrDrivers>({
    misleadingTrackingRate: s.optional(s.float64()),
    nonIntegratedCarrierRate: s.optional(s.float64()),
    invalidTrackingIdRate: s.optional(s.float64()),
    invalidTrackingUrlRate: s.optional(s.float64()),
    noCarrierScanRate: s.optional(s.float64()),
  });
