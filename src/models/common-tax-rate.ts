import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the type and rate of tax. */
export type CommonTaxRate = {
  /** Rate of cess tax. */
  cessRate?: number;
  /** Rate of gst tax. */
  gstRate?: number;
  /** Type of tax. Possible values: `CGST`, `SGST`, `IGST`, `TOTAL_TAX`. */
  taxType?: string;
};

export const commonTaxRateSchema: Schema<CommonTaxRate> = s.object<CommonTaxRate>({
  cessRate: s.optional(s.float64()),
  gstRate: s.optional(s.float64()),
  taxType: s.optional(s.string()),
});
