import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the item is fulfilled by WFS or the seller. */
export const FulfillmentChannel1 = {
  Wfs: "WFS",
  Seller: "SELLER",
} as const;
export type FulfillmentChannel1 =
  | (typeof FulfillmentChannel1)[keyof typeof FulfillmentChannel1]
  | (string & {});

export const fulfillmentChannel1Schema: EnumSchema<FulfillmentChannel1> =
  s.enumOf<FulfillmentChannel1>(FulfillmentChannel1);
