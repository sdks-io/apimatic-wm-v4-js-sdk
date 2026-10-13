import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of quantity discount this price applies to. */
export const QuantityDiscountType = {
  QuantityDiscount: "QUANTITY_DISCOUNT",
} as const;
export type QuantityDiscountType =
  | (typeof QuantityDiscountType)[keyof typeof QuantityDiscountType]
  | (string & {});

export const quantityDiscountTypeSchema: EnumSchema<QuantityDiscountType> =
  s.enumOf<QuantityDiscountType>(QuantityDiscountType);
