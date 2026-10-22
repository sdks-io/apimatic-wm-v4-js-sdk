import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter18Schema, type Parameter18 } from "./parameter18.js";

/**
 * Filters based on multiple values associated with a specific parameter. No parameter should be
 * repeated.
 */
export type MultiValueFilter7 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND <br><b style='color:green;'>Market availability: US | CA | MX</span></b>| To filter based on list of brands which are associated with the assortment recommendations. This is allowed when the categorization type is CATEGORY | string |
   * | CATEGORY <br><b style='color:green;'>Market availability: US | CA | MX</span></b> | To filter based on list of categories which are associated with the assortment recommendations. This is allowed when the categorization type is BRAND | string |
   */
  parameter: Parameter18;
  /**
   * A list of values corresponds to the parameter in the filter. The values in the list should not
   * be null or blank. Maximum 7 values are allowed in the list.
   */
  values?: string[];
};

export const multiValueFilter7Schema: Schema<MultiValueFilter7> = s.object<MultiValueFilter7>({
  parameter: parameter18Schema,
  values: s.optional(s.array(s.string())),
});
