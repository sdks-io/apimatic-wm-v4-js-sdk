import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type DeliverOrderLine = {
  lineNumber: string;
  deliveredQuantity?: QuantityWithUnit;
  /**
   * Optional proof-of-delivery breadcrumb — the tracking number the carrier scanned at delivery.
   * Not validated against the tracking number the seller posted at ship time; both are preserved
   * verbatim for downstream audit.
   */
  trackingNumber?: string;
  /**
   * Optional package identifier within a multi-package shipment. Maps to gmp-orders-mono's
   * per-package delivery event.
   */
  packageNumber?: string;
  /**
   * ISO-8601 timestamp at which the carrier reported delivery. Optional — if omitted, FMS defaults
   * to server time.
   */
  deliveredDate?: Date;
};

export const deliverOrderLineSchema: Schema<DeliverOrderLine> = s.object<DeliverOrderLine>({
  lineNumber: s.string(),
  deliveredQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
  trackingNumber: s.optional(s.string()),
  packageNumber: s.optional(s.string()),
  deliveredDate: s.optional(s.dateTime()),
});
