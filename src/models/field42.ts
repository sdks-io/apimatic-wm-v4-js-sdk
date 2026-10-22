import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_NAME | Product name | string |
 * | SKU | Specifies the item identified. This value is defined by the seller. | string |
 * <br><b style='color:green;'>Market availability: US only</b>
 */
export const Field42 = {
  ItemName: "ITEM_NAME",
  Sku: "SKU",
} as const;
export type Field42 = (typeof Field42)[keyof typeof Field42] | (string & {});

export const field42Schema: EnumSchema<Field42> = s.enumOf<Field42>(Field42);
