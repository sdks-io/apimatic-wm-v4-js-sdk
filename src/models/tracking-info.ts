import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierNameSchema, type CarrierName } from "./carrier-name.js";
import { methodCodeSchema, type MethodCode } from "./method-code.js";

export type TrackingInfo = {
  carrier: CarrierName;
  trackingNumber: string;
  shippedDate: Date;
  methodCode?: MethodCode;
};

export const trackingInfoSchema: Schema<TrackingInfo> = s.object<TrackingInfo>({
  carrier: carrierNameSchema,
  trackingNumber: s.string(),
  shippedDate: s.dateTime(),
  methodCode: s.optional(s.lazy(() => methodCodeSchema)),
});
