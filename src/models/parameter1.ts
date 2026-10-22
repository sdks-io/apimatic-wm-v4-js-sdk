import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND | To filter based on list of brands which are associated with the assortment recommendations | string |
 * | CATEGORY | To filter based on list of categories which are associated with the assortment recommendations | string |
 * | PRODUCT_TYPE | To filter based on list of product types which are associated with the assortment recommendations | string |
 */
export const Parameter1 = {
  Brand: "BRAND",
  Category: "CATEGORY",
  ProductType: "PRODUCT_TYPE",
} as const;
export type Parameter1 = (typeof Parameter1)[keyof typeof Parameter1] | (string & {});

export const parameter1Schema: EnumSchema<Parameter1> = s.enumOf<Parameter1>(Parameter1);
