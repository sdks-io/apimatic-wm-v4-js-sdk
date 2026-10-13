import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentOption = {
  S2H: "S2H",
  S2S: "S2S",
  PickupToday: "PICKUP_TODAY",
} as const;
export type FulfillmentOption = (typeof FulfillmentOption)[keyof typeof FulfillmentOption] | (string & {});

export const fulfillmentOptionSchema: EnumSchema<FulfillmentOption> =
  s.enumOf<FulfillmentOption>(FulfillmentOption);
