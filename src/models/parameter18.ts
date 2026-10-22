import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND <br><b style='color:green;'>Market availability: US | CA | MX</span></b>| To filter based on list of brands which are associated with the assortment recommendations. This is allowed when the categorization type is CATEGORY | string |
 * | CATEGORY <br><b style='color:green;'>Market availability: US | CA | MX</span></b> | To filter based on list of categories which are associated with the assortment recommendations. This is allowed when the categorization type is BRAND | string |
 */
export const Parameter18 = {
  Category: "CATEGORY",
  Brand: "BRAND",
} as const;
export type Parameter18 = (typeof Parameter18)[keyof typeof Parameter18] | (string & {});

export const parameter18Schema: EnumSchema<Parameter18> = s.enumOf<Parameter18>(Parameter18);
