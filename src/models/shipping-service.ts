import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierNameSchema, type CarrierName } from "./carrier-name.js";
import { moneySchema, type Money } from "./money.js";
import { shippingServiceOptionsSchema, type ShippingServiceOptions } from "./shipping-service-options.js";

export type ShippingService = {
  shippingServiceId: string;
  carrierName: CarrierName;
  shippingServiceName?: string;
  shippingServiceOfferId: string;
  shipDate?: Date;
  earliestEstimatedDeliveryDate?: Date;
  latestEstimatedDeliveryDate?: Date;
  rate?: Money;
  shippingServiceOptions?: ShippingServiceOptions;
};

export const shippingServiceSchema: Schema<ShippingService> = s.object<ShippingService>({
  shippingServiceId: s.string(),
  carrierName: carrierNameSchema,
  shippingServiceName: s.optional(s.string()),
  shippingServiceOfferId: s.string(),
  shipDate: s.optional(s.dateTime()),
  earliestEstimatedDeliveryDate: s.optional(s.dateTime()),
  latestEstimatedDeliveryDate: s.optional(s.dateTime()),
  rate: s.optional(s.lazy(() => moneySchema)),
  shippingServiceOptions: s.optional(s.lazy(() => shippingServiceOptionsSchema)),
});
