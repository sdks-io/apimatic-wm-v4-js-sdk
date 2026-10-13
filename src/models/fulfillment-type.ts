import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FulfillmentType = {
  SellerFulfilled: "SellerFulfilled",
  Wfs: "WFS",
} as const;
export type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType] | (string & {});

export const fulfillmentTypeSchema: EnumSchema<FulfillmentType> = s.enumOf<FulfillmentType>(FulfillmentType);
