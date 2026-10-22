import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GmvAmount = {
  /** The numerical value of the price */
  amount?: number;
  /** The currency type */
  currency?: string;
};

export const gmvAmountSchema: Schema<GmvAmount> = s.object<GmvAmount>({
  amount: s.optional(s.int()),
  currency: s.optional(s.string()),
});
