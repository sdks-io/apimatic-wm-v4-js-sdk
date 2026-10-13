import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of item identifier. */
export const IdType = {
  WalmartItemId: "WalmartItemId",
  SellerSku: "SellerSKU",
} as const;
export type IdType = (typeof IdType)[keyof typeof IdType] | (string & {});

export const idTypeSchema: EnumSchema<IdType> = s.enumOf<IdType>(IdType);
