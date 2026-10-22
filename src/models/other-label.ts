import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingDocumentsSchema, type ShippingDocuments } from "./shipping-documents.js";

/** Child labels for multi package label */
export type OtherLabel = {
  /** Tracking Number */
  trackingNo?: string;
  /** Tracking URL */
  trackingUrl?: string;
  /** Shipping Documents */
  shippingDocuments?: ShippingDocuments[];
};

export const otherLabelSchema: Schema<OtherLabel> = s.object<OtherLabel>({
  trackingNo: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
  shippingDocuments: s.optional(s.array(s.lazy(() => shippingDocumentsSchema))),
});
