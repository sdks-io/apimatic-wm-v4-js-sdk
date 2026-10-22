import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** shipping methods used to calculate these metrics */
export const ShippingMethod = {
  AllMethods: "ALL_METHODS",
  TwoDay: "TWO_DAY",
  OneDay: "ONE_DAY",
} as const;
export type ShippingMethod = (typeof ShippingMethod)[keyof typeof ShippingMethod] | (string & {});

export const shippingMethodSchema: EnumSchema<ShippingMethod> = s.enumOf<ShippingMethod>(ShippingMethod);
