import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Summary information about a shipment. */
export type CommonShipmentSummary = {
  /** Identifier of a shipment. A shipment contains the boxes and units being inbounded. */
  shipmentId: string;
  /**
   * The status of a shipment. Possible values: `ABANDONED`, `CANCELLED`, `CHECKED_IN`, `CLOSED`,
   * `DELETED`, `DELIVERED`, `IN_TRANSIT`, `MIXED`, `READY_TO_SHIP`, `RECEIVING`, `SHIPPED`,
   * `UNCONFIRMED`, `WORKING`.
   */
  status: string;
};

export const commonShipmentSummarySchema: Schema<CommonShipmentSummary> = s.object<CommonShipmentSummary>({
  shipmentId: s.string(),
  status: s.string(),
});
