import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_NAME | Product name | string |
 * | SKU | Specifies the item identified. This value is defined by the seller. | string |
 */
export const Field6 = {
  ItemName: "ITEM_NAME",
  Sku: "SKU",
} as const;
export type Field6 = (typeof Field6)[keyof typeof Field6] | (string & {});

export const field6Schema: EnumSchema<Field6> = s.enumOf<Field6>(Field6);
