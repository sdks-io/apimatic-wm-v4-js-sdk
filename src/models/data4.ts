import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOn8Schema, type AddOn8 } from "./add-on8.js";
import { boxItem7Schema, type BoxItem7 } from "./box-item7.js";

/**
 * Response payload containing the generated label tracking details and, when requested, the label
 * file.
 */
export type Data4 = {
  /**
   * The purchase order ID.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  purchaseOrderId?: string;
  /**
   * Tracking Number
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  trackingNo?: string;
  /**
   * Box Items
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  boxItems?: BoxItem7[];
  /**
   * Carrier short name.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierName?: string;
  /**
   * Carrier full name.
   *
   * <b style="color: green;">Market availability: Global </b>
   */
  carrierFullName?: string;
  /**
   * Carrier service type.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierServiceType?: string;
  /**
   * Tracking URL.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  trackingUrl?: string;
  /**
   * Add-on response items.
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  addOns?: AddOn8[];
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  purchaseOrderId: s.optional(s.string()),
  trackingNo: s.optional(s.string()),
  boxItems: s.optional(s.array(s.lazy(() => boxItem7Schema))),
  carrierName: s.optional(s.string()),
  carrierFullName: s.optional(s.string()),
  carrierServiceType: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
  addOns: s.optional(s.array(s.lazy(() => addOn8Schema))),
});
