import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";

export type PickupDiscount = {
  isPickUpDiscountEligible?: boolean;
  pickupDiscountAmt?: MoneyType;
};

export const pickupDiscountSchema: Schema<PickupDiscount> = s.object<PickupDiscount>({
  isPickUpDiscountEligible: s.optional(s.boolean()),
  pickupDiscountAmt: s.optional(s.lazy(() => moneyTypeSchema)),
});
