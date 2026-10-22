import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shipping priority will help system decide the carrier service for fulfillment in case there are
 * multiple shipping options available for customers with different carrier services in terms of
 * shipping cost and speed.
 */
export const ShippingPriority = {
  Slowest: "SLOWEST",
  Fastest: "FASTEST",
} as const;
export type ShippingPriority = (typeof ShippingPriority)[keyof typeof ShippingPriority] | (string & {});

export const shippingPrioritySchema: EnumSchema<ShippingPriority> =
  s.enumOf<ShippingPriority>(ShippingPriority);
