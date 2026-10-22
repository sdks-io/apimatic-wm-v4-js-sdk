import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export const CurrentPriceType6 = {
  Base: "BASE",
  Reduced: "REDUCED",
  SavingsAmt: "SAVINGS_AMT",
  SavingsPct: "SAVINGS_PCT",
  Rollback: "ROLLBACK",
  Clearance: "CLEARANCE",
  ListPrice: "LIST_PRICE",
} as const;
export type CurrentPriceType6 = (typeof CurrentPriceType6)[keyof typeof CurrentPriceType6] | (string & {});

export const currentPriceType6Schema: EnumSchema<CurrentPriceType6> =
  s.enumOf<CurrentPriceType6>(CurrentPriceType6);
