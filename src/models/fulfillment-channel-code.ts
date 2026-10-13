import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentChannelCode = {
  Default: "DEFAULT",
  Wfs: "WFS",
} as const;
export type FulfillmentChannelCode =
  | (typeof FulfillmentChannelCode)[keyof typeof FulfillmentChannelCode]
  | (string & {});

export const fulfillmentChannelCodeSchema: EnumSchema<FulfillmentChannelCode> =
  s.enumOf<FulfillmentChannelCode>(FulfillmentChannelCode);
