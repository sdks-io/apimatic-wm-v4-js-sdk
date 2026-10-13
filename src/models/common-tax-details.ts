import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonCurrencySchema, type CommonCurrency } from "./common-currency.js";
import { commonTaxRateSchema, type CommonTaxRate } from "./common-tax-rate.js";

/** Information used to determine the tax compliance. */
export type CommonTaxDetails = {
  /** The type and amount of currency. */
  declaredValue?: CommonCurrency;
  /** Harmonized System of Nomenclature code. */
  hsnCode?: string;
  /** List of tax rates. */
  taxRates?: CommonTaxRate[];
};

export const commonTaxDetailsSchema: Schema<CommonTaxDetails> = s.object<CommonTaxDetails>({
  declaredValue: s.optional(s.lazy(() => commonCurrencySchema)),
  hsnCode: s.optional(s.string()),
  taxRates: s.optional(s.array(s.lazy(() => commonTaxRateSchema))),
});
