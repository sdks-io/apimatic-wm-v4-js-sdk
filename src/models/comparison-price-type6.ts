import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export const ComparisonPriceType6 = {
  Base: "BASE",
  Reduced: "REDUCED",
  SavingsAmt: "SAVINGS_AMT",
  SavingsPct: "SAVINGS_PCT",
  Rollback: "ROLLBACK",
  Clearance: "CLEARANCE",
  ListPrice: "LIST_PRICE",
} as const;
export type ComparisonPriceType6 =
  | (typeof ComparisonPriceType6)[keyof typeof ComparisonPriceType6]
  | (string & {});

export const comparisonPriceType6Schema: EnumSchema<ComparisonPriceType6> =
  s.enumOf<ComparisonPriceType6>(ComparisonPriceType6);
