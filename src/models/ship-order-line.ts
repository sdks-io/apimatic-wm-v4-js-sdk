import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";
import { trackingInfoSchema, type TrackingInfo } from "./tracking-info.js";

export type ShipOrderLine = {
  lineNumber: string;
  shipQuantity?: QuantityWithUnit;
  trackingInfo: TrackingInfo;
};

export const shipOrderLineSchema: Schema<ShipOrderLine> = s.object<ShipOrderLine>({
  lineNumber: s.string(),
  shipQuantity: s.optional(s.lazy(() => quantityWithUnitSchema)),
  trackingInfo: trackingInfoSchema,
});
