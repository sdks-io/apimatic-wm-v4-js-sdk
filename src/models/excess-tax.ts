import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Amount of excess tax in the order line.<br><b style='color:green;'>Market availability: US </b>
 */
export type ExcessTax = {
  /** Amount to be refunded.<br><b style='color:green;'>Market availability: US</b> */
  currencyAmount?: number;
  /** Currency information.<br><b style='color:green;'>Market availability: US</b> */
  currencyUnit?: string;
};

export const excessTaxSchema: Schema<ExcessTax> = s.object<ExcessTax>({
  currencyAmount: s.optional(s.float64()),
  currencyUnit: s.optional(s.string()),
});
