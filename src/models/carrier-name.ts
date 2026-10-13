import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CarrierName = {
  Ups: "UPS",
  Usps: "USPS",
  FedEx: "FedEx",
  OnTrac: "OnTrac",
  LaserShip: "LaserShip",
  WalmartGround: "WALMART_GROUND",
  Other: "OTHER",
} as const;
export type CarrierName = (typeof CarrierName)[keyof typeof CarrierName] | (string & {});

export const carrierNameSchema: EnumSchema<CarrierName> = s.enumOf<CarrierName>(CarrierName);
