import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comparisonPriceSchema, type ComparisonPrice } from "./comparison-price.js";
import { name7Schema, type Name7 } from "./name7.js";

/** List of add-ons returned for the estimate. */
export type AddOn8 = {
  /** Name of the add-on type. */
  name: Name7;
  /** Charge of add-on type. */
  charge: ComparisonPrice;
  /** Declared value of shipment. This value is applicable in case of INSURANCE add-on type only. */
  declaredValue?: ComparisonPrice;
  /** Reference link for the add-on type. */
  refLink?: string;
  /** Status of the add-on type. */
  status?: string;
};

export const addOn8Schema: Schema<AddOn8> = s.object<AddOn8>({
  name: name7Schema,
  charge: comparisonPriceSchema,
  declaredValue: s.optional(s.lazy(() => comparisonPriceSchema)),
  refLink: s.optional(s.string()),
  status: s.optional(s.string()),
});
