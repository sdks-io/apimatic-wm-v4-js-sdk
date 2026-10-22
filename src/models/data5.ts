import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxItem9Schema, type BoxItem9 } from "./box-item9.js";
import { otherLabelSchema, type OtherLabel } from "./other-label.js";
import { shippingDocumentsSchema, type ShippingDocuments } from "./shipping-documents.js";

/** data */
export type Data5 = {
  /** Purchase Order Id */
  purchaseOrderId?: string;
  /** shipmentId */
  id?: string;
  /** Tracking Number */
  trackingNo?: string;
  /** Box Items */
  boxItems?: BoxItem9[];
  /** Carrier Short Name */
  carrierName?: string;
  /** Carrier Full Name */
  carrierFullName?: string;
  /** Carrier Service Type. It wont be present for Purolator. */
  carrierServiceType?: string;
  /** Tracking URL */
  trackingUrl?: string;
  /** Shipping Documents */
  shippingDocuments?: ShippingDocuments;
  /** Child labels for multi package label */
  otherLabels?: OtherLabel[];
};

export const data5Schema: Schema<Data5> = s.object<Data5>({
  purchaseOrderId: s.optional(s.string()),
  id: s.optional(s.string()),
  trackingNo: s.optional(s.string()),
  boxItems: s.optional(s.array(s.lazy(() => boxItem9Schema))),
  carrierName: s.optional(s.string()),
  carrierFullName: s.optional(s.string()),
  carrierServiceType: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
  shippingDocuments: s.optional(s.lazy(() => shippingDocumentsSchema)),
  otherLabels: s.optional(s.array(s.lazy(() => otherLabelSchema))),
});
