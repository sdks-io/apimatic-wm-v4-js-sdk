import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";

export type PromotionsPrice = {
  value?: MoneyType;
  uomType?: string;
  minValue?: MoneyType;
  maxValue?: MoneyType;
  perUnitValue?: MoneyType;
  minUnitValue?: MoneyType;
  maxUnitValue?: MoneyType;
};

export const promotionsPriceSchema: Schema<PromotionsPrice> = s.object<PromotionsPrice>({
  value: s.optional(s.lazy(() => moneyTypeSchema)),
  uomType: s.optional(s.string()),
  minValue: s.optional(s.lazy(() => moneyTypeSchema)),
  maxValue: s.optional(s.lazy(() => moneyTypeSchema)),
  perUnitValue: s.optional(s.lazy(() => moneyTypeSchema)),
  minUnitValue: s.optional(s.lazy(() => moneyTypeSchema)),
  maxUnitValue: s.optional(s.lazy(() => moneyTypeSchema)),
});
