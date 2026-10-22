import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Gross Merchandise Value of the total result set */
export type TotalGmvAmount = {
  /** The numerical value of the price */
  amount?: string;
  /** The currency type */
  currency?: string;
};

export const totalGmvAmountSchema: Schema<TotalGmvAmount> = s.object<TotalGmvAmount>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
