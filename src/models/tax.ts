import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excessTaxSchema, type ExcessTax } from "./excess-tax.js";
import { taxPerUnitSchema, type TaxPerUnit } from "./tax-per-unit.js";

export type Tax = {
  /** Name of the tax.<br><b style='color:green;'>Market availability: US,MX</b> */
  taxName?: string;
  /**
   * Amount of excess tax in the order line.<br><b style='color:green;'>Market availability: US </b>
   */
  excessTax?: ExcessTax;
  /**
   * Price of One unit of item, in this order line.<br><b style='color:green;'>Market availability:
   * US</b>
   */
  taxPerUnit?: TaxPerUnit;
};

export const taxSchema: Schema<Tax> = s.object<Tax>({
  taxName: s.optional(s.string()),
  excessTax: s.optional(s.lazy(() => excessTaxSchema)),
  taxPerUnit: s.optional(s.lazy(() => taxPerUnitSchema)),
});
