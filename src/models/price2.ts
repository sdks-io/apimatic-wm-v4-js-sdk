import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price2 = {
  /** The numerical value of the price */
  amount?: string;
  /** The currency type */
  currency?: string;
};

export const price2Schema: Schema<Price2> = s.object<Price2>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
