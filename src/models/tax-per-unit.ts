import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Price of One unit of item, in this order line.<br><b style='color:green;'>Market availability:
 * US</b>
 */
export type TaxPerUnit = {
  /** Amount to be refunded.<br><b style='color:green;'>Market availability: US</b> */
  currencyAmount?: number;
  /** Currency information.<br><b style='color:green;'>Market availability: US</b> */
  currencyUnit?: string;
};

export const taxPerUnitSchema: Schema<TaxPerUnit> = s.object<TaxPerUnit>({
  currencyAmount: s.optional(s.float64()),
  currencyUnit: s.optional(s.string()),
});
