import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonLtlTrackingDetailSchema, type CommonLtlTrackingDetail } from "./common-ltl-tracking-detail.js";
import { commonSpdTrackingDetailSchema, type CommonSpdTrackingDetail } from "./common-spd-tracking-detail.js";

/** Tracking information for LTL and SPD shipments. */
export type CommonTrackingDetails = {
  /** Contains information related to Less-Than-Truckload (LTL) shipment tracking. */
  ltlTrackingDetail?: CommonLtlTrackingDetail;
  /** Contains information related to Small Parcel Delivery (SPD) shipment tracking. */
  spdTrackingDetail?: CommonSpdTrackingDetail;
};

export const commonTrackingDetailsSchema: Schema<CommonTrackingDetails> = s.object<CommonTrackingDetails>({
  ltlTrackingDetail: s.optional(s.lazy(() => commonLtlTrackingDetailSchema)),
  spdTrackingDetail: s.optional(s.lazy(() => commonSpdTrackingDetailSchema)),
});
