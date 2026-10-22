import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter15Schema, type Parameter15 } from "./parameter15.js";

/**
 * Filters based on multiple values associated with a specific parameter. No parameter should be
 * repeated.
 */
export type MultiValueFilter6 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND <br><b style='color:green;'>Market availability: US, CA, MX</span></b> | To filter based on list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY <br><b style='color:green;'>Market availability: US, CA, MX</span></b> | To filter based on list of categories which are associated with the assortment recommendations | string |
   * | PRODUCT_TYPE <br><b style='color:green;'>Market availability: US only</span></b> | To filter based on list of product types which are associated with the assortment recommendations | string |
   */
  parameter: Parameter15;
  /**
   * A list of values corresponds to the parameter in the filter. The values in the list should not
   * be null or blank. Maximum size of the list should be 7.
   */
  values?: string[];
};

export const multiValueFilter6Schema: Schema<MultiValueFilter6> = s.object<MultiValueFilter6>({
  parameter: parameter15Schema,
  values: s.optional(s.array(s.string())),
});
