import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_PRIORITY | Recommended priority of the item by Walmart. | integer |
 * | PRICE | Item price | integer |
 * <br><b style='color:green;'>Market availability: US only</b>
 */
export const Field51 = {
  ItemPriority: "ITEM_PRIORITY",
  Price: "PRICE",
} as const;
export type Field51 = (typeof Field51)[keyof typeof Field51] | (string & {});

export const field51Schema: EnumSchema<Field51> = s.enumOf<Field51>(Field51);
