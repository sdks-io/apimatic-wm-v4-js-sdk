import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShippingSpeedCategory = {
  Standard: "Standard",
  Expedited: "Expedited",
  Priority: "Priority",
  ScheduledDelivery: "ScheduledDelivery",
} as const;
export type ShippingSpeedCategory =
  | (typeof ShippingSpeedCategory)[keyof typeof ShippingSpeedCategory]
  | (string & {});

export const shippingSpeedCategorySchema: EnumSchema<ShippingSpeedCategory> =
  s.enumOf<ShippingSpeedCategory>(ShippingSpeedCategory);
