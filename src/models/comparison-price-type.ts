import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is applicable only for promotions */
export const ComparisonPriceType = {
  Base: "BASE",
} as const;
export type ComparisonPriceType =
  | (typeof ComparisonPriceType)[keyof typeof ComparisonPriceType]
  | (string & {});

export const comparisonPriceTypeSchema: EnumSchema<ComparisonPriceType> =
  s.enumOf<ComparisonPriceType>(ComparisonPriceType);
