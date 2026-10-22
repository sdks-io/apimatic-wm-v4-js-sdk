import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
 * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
 */
export const CategorizationType = {
  Brand: "BRAND",
  Category: "CATEGORY",
} as const;
export type CategorizationType = (typeof CategorizationType)[keyof typeof CategorizationType] | (string & {});

export const categorizationTypeSchema: EnumSchema<CategorizationType> =
  s.enumOf<CategorizationType>(CategorizationType);
