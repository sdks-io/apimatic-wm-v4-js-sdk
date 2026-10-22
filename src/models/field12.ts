import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_PRIORITY | Recommended priority of the item by Walmart. | integer |
 * | PRICE | Item price | integer |
 */
export const Field12 = {
  ItemPriority: "ITEM_PRIORITY",
  Price: "PRICE",
} as const;
export type Field12 = (typeof Field12)[keyof typeof Field12] | (string & {});

export const field12Schema: EnumSchema<Field12> = s.enumOf<Field12>(Field12);
