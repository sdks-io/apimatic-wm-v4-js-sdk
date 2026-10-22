import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter12Schema, type Parameter12 } from "./parameter12.js";

/**
 * Filters based on multiple values associated with a specific parameter. No parameter should be
 * repeated.
 */
export type MultiValueFilterCriteriaForCategorization = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To filter based on list of brands which are associated with the assortment recommendations. This is allowed when the categorization type is CATEGORY | string |
   * | CATEGORY | To filter based on list of categories which are associated with the assortment recommendations. This is allowed when the categorization type is BRAND | string |
   */
  parameter: Parameter12;
  /**
   * A list of values corresponds to the parameter in the filter. The values in the list should not
   * be null or blank. Maximum 7 values are allowed in the list.
   */
  values?: string[];
};

export const multiValueFilterCriteriaForCategorizationSchema: Schema<MultiValueFilterCriteriaForCategorization> =
  s.object<MultiValueFilterCriteriaForCategorization>({
    parameter: parameter12Schema,
    values: s.optional(s.array(s.string())),
  });
