import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { fulfillmentOrderStatusSchema, type FulfillmentOrderStatus } from "./fulfillment-order-status.js";
import { shippingSpeedCategorySchema, type ShippingSpeedCategory } from "./shipping-speed-category.js";

export type FulfillmentOrder = {
  /** Seller-defined order ID */
  sellerFulfillmentOrderId: string;
  marketplaceId?: string;
  /** Order ID shown to the recipient */
  displayableOrderId: string;
  displayableOrderDate?: Date;
  displayableOrderComment?: string;
  shippingSpeedCategory?: ShippingSpeedCategory;
  destinationAddress?: Address;
  fulfillmentOrderStatus: FulfillmentOrderStatus;
  statusUpdatedAt?: Date;
  notificationEmails?: string[];
};

export const fulfillmentOrderSchema: Schema<FulfillmentOrder> = s.object<FulfillmentOrder>({
  sellerFulfillmentOrderId: s.string(),
  marketplaceId: s.optional(s.string()),
  displayableOrderId: s.string(),
  displayableOrderDate: s.optional(s.dateTime()),
  displayableOrderComment: s.optional(s.string()),
  shippingSpeedCategory: s.optional(s.lazy(() => shippingSpeedCategorySchema)),
  destinationAddress: s.optional(s.lazy(() => addressSchema)),
  fulfillmentOrderStatus: fulfillmentOrderStatusSchema,
  statusUpdatedAt: s.optional(s.dateTime()),
  notificationEmails: s.optional(s.array(s.string())),
});
