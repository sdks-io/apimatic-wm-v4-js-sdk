import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information used to track and identify a Small Parcel Delivery (SPD) item. */
export type CommonSpdTrackingItem = {
  /** The ID provided by Walmart that identifies a given box. */
  boxId?: string;
  /** The tracking ID associated with each box in a non-partnered SPD shipment. */
  trackingId?: string;
  /**
   * Indicates whether Walmart has validated the tracking number. Possible values: `VALIDATED`,
   * `NOT_VALIDATED`, `NOT_SUPPORTED`.
   */
  trackingNumberValidationStatus?: string;
};

export const commonSpdTrackingItemSchema: Schema<CommonSpdTrackingItem> = s.object<CommonSpdTrackingItem>({
  boxId: s.optional(s.string()),
  trackingId: s.optional(s.string()),
  trackingNumberValidationStatus: s.optional(s.string()),
});
