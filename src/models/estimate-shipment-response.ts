import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addOnsResponseSchema, type AddOnsResponse } from "./add-ons-response.js";
import { estimatedRateSchema, type EstimatedRate } from "./estimated-rate.js";

/** List of estimates */
export type EstimateShipmentResponse = {
  /** Service Type Group Name */
  serviceTypeGroupName?: string;
  /** Service Type Group Display Name */
  serviceTypeGroupDisplayName?: string;
  /** Carrier Service Type */
  name?: string;
  /** Carrier Service Type Display Name */
  displayName?: string;
  /** Estimated Rate */
  estimatedRate?: EstimatedRate;
  /** Delivery Date */
  deliveryDate?: string;
  /** Carrier Short Name */
  carrierName?: string;
  /** Carrier Display Name */
  carrierDisplayName?: string;
  /** Delivery Promise Fulfilled */
  isDeliveryPromiseFulfilled?: boolean;
  /** Add Ons Response */
  addOns?: AddOnsResponse[];
};

export const estimateShipmentResponseSchema: Schema<EstimateShipmentResponse> =
  s.object<EstimateShipmentResponse>({
    serviceTypeGroupName: s.optional(s.string()),
    serviceTypeGroupDisplayName: s.optional(s.string()),
    name: s.optional(s.string()),
    displayName: s.optional(s.string()),
    estimatedRate: s.optional(s.lazy(() => estimatedRateSchema)),
    deliveryDate: s.optional(s.string()),
    carrierName: s.optional(s.string()),
    carrierDisplayName: s.optional(s.string()),
    isDeliveryPromiseFulfilled: s.optional(s.boolean()),
    addOns: s.optional(s.array(s.lazy(() => addOnsResponseSchema))),
  });
