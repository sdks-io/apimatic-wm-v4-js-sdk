import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The fulfillment type for the offer. Possible values: WFS, SELLER. */
export const FulfillmentType1 = {
  Wfs: "WFS",
  Seller: "SELLER",
} as const;
export type FulfillmentType1 = (typeof FulfillmentType1)[keyof typeof FulfillmentType1] | (string & {});

export const fulfillmentType1Schema: EnumSchema<FulfillmentType1> =
  s.enumOf<FulfillmentType1>(FulfillmentType1);
