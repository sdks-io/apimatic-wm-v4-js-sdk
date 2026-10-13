import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import {
  getFulfillmentPreviewItemSchema,
  type GetFulfillmentPreviewItem,
} from "./get-fulfillment-preview-item.js";
import { shippingSpeedCategorySchema, type ShippingSpeedCategory } from "./shipping-speed-category.js";

export type GetFulfillmentPreviewRequest = {
  marketplaceId?: string;
  address: Address;
  items: GetFulfillmentPreviewItem[];
  shippingSpeedCategories?: ShippingSpeedCategory[];
  /** @default false */
  includeCodFulfillmentPreview?: boolean;
};

export const getFulfillmentPreviewRequestSchema: Schema<GetFulfillmentPreviewRequest> =
  s.object<GetFulfillmentPreviewRequest>({
    marketplaceId: s.optional(s.string()),
    address: addressSchema,
    items: s.array(s.lazy(() => getFulfillmentPreviewItemSchema)),
    shippingSpeedCategories: s.optional(s.array(s.lazy(() => shippingSpeedCategorySchema))),
    includeCodFulfillmentPreview: s.defaulted(s.boolean(), false),
    _keysMap: {
      includeCodFulfillmentPreview: "includeCODFulfillmentPreview",
    },
  });
