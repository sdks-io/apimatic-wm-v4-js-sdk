import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND <br><b style='color:green;'>Market availability: US, CA, MX</span></b> | To filter based on list of brands which are associated with the assortment recommendations | string |
 * | CATEGORY <br><b style='color:green;'>Market availability: US, CA, MX</span></b> | To filter based on list of categories which are associated with the assortment recommendations | string |
 * | PRODUCT_TYPE <br><b style='color:green;'>Market availability: US only</span></b> | To filter based on list of product types which are associated with the assortment recommendations | string |
 */
export const Parameter15 = {
  Brand: "BRAND",
  Category: "CATEGORY",
  ProductType: "PRODUCT_TYPE",
} as const;
export type Parameter15 = (typeof Parameter15)[keyof typeof Parameter15] | (string & {});

export const parameter15Schema: EnumSchema<Parameter15> = s.enumOf<Parameter15>(Parameter15);
