import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnOrderShipment = {
  /**
   * The unique number for the shipment line in a given shipment.<br><b style='color:green;'>Market
   * availability: MX</b>
   */
  shipmentNo?: string;
  /** The unique number for tracking.<br><b style='color:green;'>Market availability: MX</b> */
  trackingNumber?: string;
};

export const returnOrderShipmentSchema: Schema<ReturnOrderShipment> = s.object<ReturnOrderShipment>({
  shipmentNo: s.optional(s.string()),
  trackingNumber: s.optional(s.string()),
});
