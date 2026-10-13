import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import {
  createFulfillmentOrderItemSchema,
  type CreateFulfillmentOrderItem,
} from "./create-fulfillment-order-item.js";
import { shippingSpeedCategorySchema, type ShippingSpeedCategory } from "./shipping-speed-category.js";

export type CreateFulfillmentOrderRequest = {
  marketplaceId?: string;
  sellerFulfillmentOrderId: string;
  displayableOrderId: string;
  displayableOrderDate: Date;
  displayableOrderComment?: string;
  shippingSpeedCategory: ShippingSpeedCategory;
  destinationAddress: Address;
  items: CreateFulfillmentOrderItem[];
  notificationEmails?: string[];
};

export const createFulfillmentOrderRequestSchema: Schema<CreateFulfillmentOrderRequest> =
  s.object<CreateFulfillmentOrderRequest>({
    marketplaceId: s.optional(s.string()),
    sellerFulfillmentOrderId: s.string(),
    displayableOrderId: s.string(),
    displayableOrderDate: s.dateTime(),
    displayableOrderComment: s.optional(s.string()),
    shippingSpeedCategory: shippingSpeedCategorySchema,
    destinationAddress: addressSchema,
    items: s.array(s.lazy(() => createFulfillmentOrderItemSchema)),
    notificationEmails: s.optional(s.array(s.string())),
  });
