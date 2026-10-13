import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdType1 = {
  WalmartItemId: "WalmartItemId",
  SellerSku: "SellerSKU",
} as const;
export type IdType1 = (typeof IdType1)[keyof typeof IdType1] | (string & {});

export const idType1Schema: EnumSchema<IdType1> = s.enumOf<IdType1>(IdType1);
