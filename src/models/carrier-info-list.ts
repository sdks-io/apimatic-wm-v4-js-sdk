import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CarrierInfoList = {
  /**
   * ID of the carrier used for the return.<br><b style='color:green;'>Market availability: US</b>
   */
  carrierId?: string;
  /** Name of the carrier used.<br><b style='color:green;'>Market availability: US</b> */
  carrierName?: string;
  /** The type of service used.<br><b style='color:green;'>Market availability: US</b> */
  serviceType?: string;
  /** Tracking number of the order.<br><b style='color:green;'>Market availability: US</b> */
  trackingNo?: string;
};

export const carrierInfoListSchema: Schema<CarrierInfoList> = s.object<CarrierInfoList>({
  carrierId: s.optional(s.string()),
  carrierName: s.optional(s.string()),
  serviceType: s.optional(s.string()),
  trackingNo: s.optional(s.string()),
});
