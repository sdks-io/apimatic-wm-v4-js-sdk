import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CarrierWillPickUpOption = {
  CarrierContact: "CarrierContact",
  SellerContact: "SellerContact",
  NoPreference: "NoPreference",
} as const;
export type CarrierWillPickUpOption =
  | (typeof CarrierWillPickUpOption)[keyof typeof CarrierWillPickUpOption]
  | (string & {});

export const carrierWillPickUpOptionSchema: EnumSchema<CarrierWillPickUpOption> =
  s.enumOf<CarrierWillPickUpOption>(CarrierWillPickUpOption);
