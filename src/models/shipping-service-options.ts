import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  carrierWillPickUpOptionSchema,
  type CarrierWillPickUpOption,
} from "./carrier-will-pick-up-option.js";
import { deliveryExperienceSchema, type DeliveryExperience } from "./delivery-experience.js";
import { moneySchema, type Money } from "./money.js";

export type ShippingServiceOptions = {
  deliveryExperience?: DeliveryExperience;
  carrierWillPickUp?: boolean;
  carrierWillPickUpOption?: CarrierWillPickUpOption;
  declaredValue?: Money;
};

export const shippingServiceOptionsSchema: Schema<ShippingServiceOptions> = s.object<ShippingServiceOptions>({
  deliveryExperience: s.optional(s.lazy(() => deliveryExperienceSchema)),
  carrierWillPickUp: s.optional(s.boolean()),
  carrierWillPickUpOption: s.optional(s.lazy(() => carrierWillPickUpOptionSchema)),
  declaredValue: s.optional(s.lazy(() => moneySchema)),
});
