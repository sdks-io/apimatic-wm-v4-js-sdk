import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information related to Less-Than-Truckload (LTL) shipment tracking. */
export type CommonLtlTrackingDetail = {
  /** The number of the carrier shipment acknowledgement document. */
  billOfLadingNumber?: string;
  /** The number associated with the freight bill. */
  freightBillNumber?: string[];
};

export const commonLtlTrackingDetailSchema: Schema<CommonLtlTrackingDetail> =
  s.object<CommonLtlTrackingDetail>({
    billOfLadingNumber: s.optional(s.string()),
    freightBillNumber: s.optional(s.array(s.string())),
  });
