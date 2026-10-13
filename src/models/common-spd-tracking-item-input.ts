import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Small Parcel Delivery (SPD) tracking items input information. */
export type CommonSpdTrackingItemInput = {
  /** The ID provided by Walmart that identifies a given box. */
  boxId: string;
  /** The tracking ID associated with each box in a non-partnered SPD shipment. */
  trackingId: string;
};

export const commonSpdTrackingItemInputSchema: Schema<CommonSpdTrackingItemInput> =
  s.object<CommonSpdTrackingItemInput>({
    boxId: s.string(),
    trackingId: s.string(),
  });
