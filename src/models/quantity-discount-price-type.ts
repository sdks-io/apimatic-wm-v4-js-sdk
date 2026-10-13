import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";

/** Contains pricing information for bulk purchase discounts. */
export type QuantityDiscountPriceType = {
  /** Indicates at what quantity this price becomes active. */
  quantityTier: number;
  /** Indicates the type of quantity discount this price applies to. @default "QUANTITY_DISCOUNT" */
  quantityDiscountType?: "QUANTITY_DISCOUNT";
  /** Currency type and monetary value. */
  listingPrice: MoneyType;
};

export const quantityDiscountPriceTypeSchema: Schema<QuantityDiscountPriceType> =
  s.object<QuantityDiscountPriceType>({
    quantityTier: s.int(),
    quantityDiscountType: s.defaulted(s.literal("QUANTITY_DISCOUNT"), "QUANTITY_DISCOUNT"),
    listingPrice: moneyTypeSchema,
  });
