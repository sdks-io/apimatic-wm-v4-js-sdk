import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the item is fulfilled by the seller or by Walmart Fulfillment Services. */
export const FulfillmentChannelType = {
  Wfs: "WFS",
  Seller: "SELLER",
} as const;
export type FulfillmentChannelType =
  | (typeof FulfillmentChannelType)[keyof typeof FulfillmentChannelType]
  | (string & {});

export const fulfillmentChannelTypeSchema: EnumSchema<FulfillmentChannelType> =
  s.enumOf<FulfillmentChannelType>(FulfillmentChannelType);
