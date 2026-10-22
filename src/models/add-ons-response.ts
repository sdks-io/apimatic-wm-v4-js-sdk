import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comparisonPriceSchema, type ComparisonPrice } from "./comparison-price.js";
import { nameSchema, type Name } from "./name.js";

/** List of add-ons returned for the estimate. */
export type AddOnsResponse = {
  /** Name of the AddOn type. */
  name: Name;
  /** Charge of add-on type. */
  charge: ComparisonPrice;
  /** Declared value of shipment. This value is applicable in case of INSURANCE add-on type only. */
  declaredValue?: ComparisonPrice;
  /** Reference link for the add-on type. */
  refLink?: string;
  /** Status of the add-on type. */
  status?: string;
};

export const addOnsResponseSchema: Schema<AddOnsResponse> = s.object<AddOnsResponse>({
  name: nameSchema,
  charge: comparisonPriceSchema,
  declaredValue: s.optional(s.lazy(() => comparisonPriceSchema)),
  refLink: s.optional(s.string()),
  status: s.optional(s.string()),
});
