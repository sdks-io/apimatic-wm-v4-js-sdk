import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Marketplace-side order context for orders originating on the Walmart Marketplace surface.
 * Equivalent in shape to industry SP-API's order-details block; renamed to be vendor-neutral.
 */
export type MarketplaceOrderDetails = {
  orderId?: string;
  orderDate?: Date;
  sellerId?: string;
  /** Walmart Purchase Order ID */
  purchaseOrderId?: string;
};

export const marketplaceOrderDetailsSchema: Schema<MarketplaceOrderDetails> =
  s.object<MarketplaceOrderDetails>({
    orderId: s.optional(s.string()),
    orderDate: s.optional(s.dateTime()),
    sellerId: s.optional(s.string()),
    purchaseOrderId: s.optional(s.string()),
  });
