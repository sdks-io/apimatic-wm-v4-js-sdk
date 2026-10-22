import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND | To filter based on list of brands which are associated with the assortment recommendations. This is allowed when the categorization type is CATEGORY | string |
 * | CATEGORY | To filter based on list of categories which are associated with the assortment recommendations. This is allowed when the categorization type is BRAND | string |
 */
export const Parameter12 = {
  Category: "CATEGORY",
  Brand: "BRAND",
} as const;
export type Parameter12 = (typeof Parameter12)[keyof typeof Parameter12] | (string & {});

export const parameter12Schema: EnumSchema<Parameter12> = s.enumOf<Parameter12>(Parameter12);
