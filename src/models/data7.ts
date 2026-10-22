import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOnsResponseSchema, type AddOnsResponse } from "./add-ons-response.js";
import { boxItem11Schema, type BoxItem11 } from "./box-item11.js";

/** Label and tracking details for shipment in the purchase order. */
export type Data7 = {
  /**
   * Purchase Order Id
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
  boxItems?: BoxItem11[];
  /**
   * Carrier Short Name
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierName?: string;
  /**
   * Carrier Full Name
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierFullName?: string;
  /**
   * Carrier Service Type
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  carrierServiceType?: string;
  /**
   * Tracking URL
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  trackingUrl?: string;
  /**
   * Add Ons Response
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  addOns?: AddOnsResponse[];
};

export const data7Schema: Schema<Data7> = s.object<Data7>({
  purchaseOrderId: s.optional(s.string()),
  trackingNo: s.optional(s.string()),
  boxItems: s.optional(s.array(s.lazy(() => boxItem11Schema))),
  carrierName: s.optional(s.string()),
  carrierFullName: s.optional(s.string()),
  carrierServiceType: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
  addOns: s.optional(s.array(s.lazy(() => addOnsResponseSchema))),
});
