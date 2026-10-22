import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOnsResponseSchema, type AddOnsResponse } from "./add-ons-response.js";
import { boxItemSchema, type BoxItem } from "./box-item.js";

/** Response payload containing the label tracking details for a single shipment. */
export type LabelGenerationResponse = {
  /** Purchase Order Id */
  purchaseOrderId?: string;
  /** Tracking Number */
  trackingNo?: string;
  /** Box Items */
  boxItems?: BoxItem[];
  /** Carrier Short Name */
  carrierName?: string;
  /** Carrier Full Name */
  carrierFullName?: string;
  /** Carrier Service Type */
  carrierServiceType?: string;
  /** Tracking URL */
  trackingUrl?: string;
  /** Add Ons Response */
  addOns?: AddOnsResponse[];
};

export const labelGenerationResponseSchema: Schema<LabelGenerationResponse> =
  s.object<LabelGenerationResponse>({
    purchaseOrderId: s.optional(s.string()),
    trackingNo: s.optional(s.string()),
    boxItems: s.optional(s.array(s.lazy(() => boxItemSchema))),
    carrierName: s.optional(s.string()),
    carrierFullName: s.optional(s.string()),
    carrierServiceType: s.optional(s.string()),
    trackingUrl: s.optional(s.string()),
    addOns: s.optional(s.array(s.lazy(() => addOnsResponseSchema))),
  });
