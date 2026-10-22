import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
 * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
 *
 * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
 */
export const CategorizationType3 = {
  Brand: "BRAND",
  Category: "CATEGORY",
} as const;
export type CategorizationType3 =
  | (typeof CategorizationType3)[keyof typeof CategorizationType3]
  | (string & {});

export const categorizationType3Schema: EnumSchema<CategorizationType3> =
  s.enumOf<CategorizationType3>(CategorizationType3);
