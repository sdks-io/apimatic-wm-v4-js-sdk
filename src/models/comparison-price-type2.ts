import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ComparisonPriceType2 = {
  Base: "BASE",
  Reduced: "REDUCED",
  SavingsAmt: "SAVINGS_AMT",
  SavingsPct: "SAVINGS_PCT",
  Rollback: "ROLLBACK",
  Clearance: "CLEARANCE",
  ListPrice: "LIST_PRICE",
} as const;
export type ComparisonPriceType2 =
  | (typeof ComparisonPriceType2)[keyof typeof ComparisonPriceType2]
  | (string & {});

export const comparisonPriceType2Schema: EnumSchema<ComparisonPriceType2> =
  s.enumOf<ComparisonPriceType2>(ComparisonPriceType2);
