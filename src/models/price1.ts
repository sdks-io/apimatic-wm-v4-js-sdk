import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Competitor's item shipping price details of the item recommendation. */
export type Price1 = {
  /** The numerical amount of the price. Example: 9.99 */
  amount?: number;
  /** Currency associated with the price of the item recommendation. */
  currency?: string;
};

export const price1Schema: Schema<Price1> = s.object<Price1>({
  amount: s.optional(s.float64()),
  currency: s.optional(s.string()),
});
