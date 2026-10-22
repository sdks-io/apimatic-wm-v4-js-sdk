import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is applicable only for promotions */
export const PriceDisplayCodes1 = {
  Cart: "CART",
  Checkout: "CHECKOUT",
} as const;
export type PriceDisplayCodes1 = (typeof PriceDisplayCodes1)[keyof typeof PriceDisplayCodes1] | (string & {});

export const priceDisplayCodes1Schema: EnumSchema<PriceDisplayCodes1> =
  s.enumOf<PriceDisplayCodes1>(PriceDisplayCodes1);
