import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { supplierItemFeedHeaderSchema, type SupplierItemFeedHeader } from "./supplier-item-feed-header.js";
import { supplierItemPayloadSchema, type SupplierItemPayload } from "./supplier-item-payload.js";

/** Request body for creating, updating, or delinking rich media assets. */
export type RichMediaFeedRequest = {
  /** Metadata header for the rich media feed. */
  supplierItemFeedHeader: SupplierItemFeedHeader;
  /** One or multiple rich media asset details and associated items. */
  supplierItem: SupplierItemPayload[];
};

export const richMediaFeedRequestSchema: Schema<RichMediaFeedRequest> = s.object<RichMediaFeedRequest>({
  supplierItemFeedHeader: supplierItemFeedHeaderSchema,
  supplierItem: s.array(s.lazy(() => supplierItemPayloadSchema)),
  _keysMap: {
    supplierItemFeedHeader: "SupplierItemFeedHeader",
    supplierItem: "SupplierItem",
  },
});
