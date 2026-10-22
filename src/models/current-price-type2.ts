import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CurrentPriceType2 = {
  Base: "BASE",
  Reduced: "REDUCED",
  SavingsAmt: "SAVINGS_AMT",
  SavingsPct: "SAVINGS_PCT",
  Rollback: "ROLLBACK",
  Clearance: "CLEARANCE",
  ListPrice: "LIST_PRICE",
} as const;
export type CurrentPriceType2 = (typeof CurrentPriceType2)[keyof typeof CurrentPriceType2] | (string & {});

export const currentPriceType2Schema: EnumSchema<CurrentPriceType2> =
  s.enumOf<CurrentPriceType2>(CurrentPriceType2);
