import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field7 = {
  Sku: "sku",
  ItemId: "itemId",
  ProductName: "productName",
} as const;
export type Field7 = (typeof Field7)[keyof typeof Field7] | (string & {});

export const field7Schema: EnumSchema<Field7> = s.enumOf<Field7>(Field7);
