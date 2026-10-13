import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonSpdTrackingItemSchema, type CommonSpdTrackingItem } from "./common-spd-tracking-item.js";

/** Contains information related to Small Parcel Delivery (SPD) shipment tracking. */
export type CommonSpdTrackingDetail = {
  /** List of Small Parcel Delivery (SPD) tracking items. */
  spdTrackingItems?: CommonSpdTrackingItem[];
};

export const commonSpdTrackingDetailSchema: Schema<CommonSpdTrackingDetail> =
  s.object<CommonSpdTrackingDetail>({
    spdTrackingItems: s.optional(s.array(s.lazy(() => commonSpdTrackingItemSchema))),
  });
