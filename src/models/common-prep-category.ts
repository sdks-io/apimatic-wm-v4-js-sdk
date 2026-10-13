import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The preparation category for shipping an item to Walmart's fulfillment network. */
export const CommonPrepCategory = {
  Adult: "ADULT",
  Baby: "BABY",
  FcProvided: "FC_PROVIDED",
  Fragile: "FRAGILE",
  Granular: "GRANULAR",
  Hanger: "HANGER",
  Liquid: "LIQUID",
  Perforated: "PERFORATED",
  Set: "SET",
  Sharp: "SHARP",
  Small: "SMALL",
  Textile: "TEXTILE",
  Unknown: "UNKNOWN",
  None: "NONE",
} as const;
export type CommonPrepCategory = (typeof CommonPrepCategory)[keyof typeof CommonPrepCategory] | (string & {});

export const commonPrepCategorySchema: EnumSchema<CommonPrepCategory> =
  s.enumOf<CommonPrepCategory>(CommonPrepCategory);
