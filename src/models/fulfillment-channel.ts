import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The fulfillment channel for the offer listing. Possible values: WFS, SELLER. */
export const FulfillmentChannel = {
  Wfs: "WFS",
  Seller: "SELLER",
} as const;
export type FulfillmentChannel = (typeof FulfillmentChannel)[keyof typeof FulfillmentChannel] | (string & {});

export const fulfillmentChannelSchema: EnumSchema<FulfillmentChannel> =
  s.enumOf<FulfillmentChannel>(FulfillmentChannel);
