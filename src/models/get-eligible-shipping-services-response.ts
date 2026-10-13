import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rejectedShippingServiceSchema, type RejectedShippingService } from "./rejected-shipping-service.js";
import { shippingServiceSchema, type ShippingService } from "./shipping-service.js";

export type GetEligibleShippingServicesResponse = {
  shippingServiceList?: ShippingService[];
  rejectedShippingServiceList?: RejectedShippingService[];
};

export const getEligibleShippingServicesResponseSchema: Schema<GetEligibleShippingServicesResponse> =
  s.object<GetEligibleShippingServicesResponse>({
    shippingServiceList: s.optional(s.array(s.lazy(() => shippingServiceSchema))),
    rejectedShippingServiceList: s.optional(s.array(s.lazy(() => rejectedShippingServiceSchema))),
  });
