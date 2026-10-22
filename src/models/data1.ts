import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOnsResponseSchema, type AddOnsResponse } from "./add-ons-response.js";
import { boxItemSchema, type BoxItem } from "./box-item.js";

/** Response payload containing the generated label tracking details. */
export type Data1 = {
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

export const data1Schema: Schema<Data1> = s.object<Data1>({
  purchaseOrderId: s.optional(s.string()),
  trackingNo: s.optional(s.string()),
  boxItems: s.optional(s.array(s.lazy(() => boxItemSchema))),
  carrierName: s.optional(s.string()),
  carrierFullName: s.optional(s.string()),
  carrierServiceType: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
  addOns: s.optional(s.array(s.lazy(() => addOnsResponseSchema))),
});
