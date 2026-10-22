import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter1Schema, type Parameter1 } from "./parameter1.js";

/**
 * Filters based on multiple values associated with a specific parameter. No parameter should be
 * repeated.
 */
export type MultiValueFilter = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To filter based on list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY | To filter based on list of categories which are associated with the assortment recommendations | string |
   * | PRODUCT_TYPE | To filter based on list of product types which are associated with the assortment recommendations | string |
   */
  parameter: Parameter1;
  /**
   * A list of values corresponds to the parameter in the filter. The values in the list should not
   * be null or blank. Maximum size of the list should be 7.
   */
  values?: string[];
};

export const multiValueFilterSchema: Schema<MultiValueFilter> = s.object<MultiValueFilter>({
  parameter: parameter1Schema,
  values: s.optional(s.array(s.string())),
});
