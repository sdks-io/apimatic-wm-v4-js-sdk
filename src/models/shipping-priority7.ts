import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Shipping priority will help system decide the carrier service for fulfillment in case there are
 * multiple shipping options available for customers with different carrier services in terms of
 * shipping cost and speed. <br><b style='color:green;'>Market availability: US</span></b>
 */
export const ShippingPriority7 = {
  Slowest: "SLOWEST",
  Fastest: "FASTEST",
} as const;
export type ShippingPriority7 = (typeof ShippingPriority7)[keyof typeof ShippingPriority7] | (string & {});

export const shippingPriority7Schema: EnumSchema<ShippingPriority7> =
  s.enumOf<ShippingPriority7>(ShippingPriority7);
