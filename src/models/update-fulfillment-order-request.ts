import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { shippingSpeedCategorySchema, type ShippingSpeedCategory } from "./shipping-speed-category.js";

export type UpdateFulfillmentOrderRequest = {
  displayableOrderComment?: string;
  shippingSpeedCategory?: ShippingSpeedCategory;
  destinationAddress?: Address;
  notificationEmails?: string[];
};

export const updateFulfillmentOrderRequestSchema: Schema<UpdateFulfillmentOrderRequest> =
  s.object<UpdateFulfillmentOrderRequest>({
    displayableOrderComment: s.optional(s.string()),
    shippingSpeedCategory: s.optional(s.lazy(() => shippingSpeedCategorySchema)),
    destinationAddress: s.optional(s.lazy(() => addressSchema)),
    notificationEmails: s.optional(s.array(s.string())),
  });
