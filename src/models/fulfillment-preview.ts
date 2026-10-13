import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeSchema, type Fee } from "./fee.js";
import {
  fulfillmentPreviewShipmentSchema,
  type FulfillmentPreviewShipment,
} from "./fulfillment-preview-shipment.js";
import { shippingSpeedCategorySchema, type ShippingSpeedCategory } from "./shipping-speed-category.js";

export type FulfillmentPreview = {
  shippingSpeedCategory?: ShippingSpeedCategory;
  fulfillmentPreviewShipments?: FulfillmentPreviewShipment[];
  isFulfillable?: boolean;
  isCodCapable?: boolean;
  estimatedFees?: Fee[];
};

export const fulfillmentPreviewSchema: Schema<FulfillmentPreview> = s.object<FulfillmentPreview>({
  shippingSpeedCategory: s.optional(s.lazy(() => shippingSpeedCategorySchema)),
  fulfillmentPreviewShipments: s.optional(s.array(s.lazy(() => fulfillmentPreviewShipmentSchema))),
  isFulfillable: s.optional(s.boolean()),
  isCodCapable: s.optional(s.boolean()),
  estimatedFees: s.optional(s.array(s.lazy(() => feeSchema))),
  _keysMap: {
    isCodCapable: "isCODCapable",
  },
});
