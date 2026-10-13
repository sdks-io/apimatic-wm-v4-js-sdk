import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Marketplace-side shipment context. Renamed from the industry SP-API "vendor-shipment-details"
 * block to be vendor-neutral.
 */
export type MarketplaceShipmentDetails = {
  sellerOrderId?: string;
  purchaseOrderId?: string;
  sellerTrackingId?: string;
};

export const marketplaceShipmentDetailsSchema: Schema<MarketplaceShipmentDetails> =
  s.object<MarketplaceShipmentDetails>({
    sellerOrderId: s.optional(s.string()),
    purchaseOrderId: s.optional(s.string()),
    sellerTrackingId: s.optional(s.string()),
  });
