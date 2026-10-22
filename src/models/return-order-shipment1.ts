import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnOrderShipment1 = {
  /** shipmentNo.<br><b style='color:green;'>Market availability: MX</b> */
  shipmentNo?: string;
  /** trackingNumber.<br><b style='color:green;'>Market availability: MX</b> */
  trackingNumber?: string;
};

export const returnOrderShipment1Schema: Schema<ReturnOrderShipment1> = s.object<ReturnOrderShipment1>({
  shipmentNo: s.optional(s.string()),
  trackingNumber: s.optional(s.string()),
});
