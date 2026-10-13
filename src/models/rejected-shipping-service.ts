import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RejectedShippingService = {
  carrierName?: string;
  shippingServiceId?: string;
  rejectionReasonCode?: string;
  rejectionReasonMessage?: string;
};

export const rejectedShippingServiceSchema: Schema<RejectedShippingService> =
  s.object<RejectedShippingService>({
    carrierName: s.optional(s.string()),
    shippingServiceId: s.optional(s.string()),
    rejectionReasonCode: s.optional(s.string()),
    rejectionReasonMessage: s.optional(s.string()),
  });
