import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comparisonPriceType2Schema, type ComparisonPriceType2 } from "./comparison-price-type2.js";
import { currentPriceType2Schema, type CurrentPriceType2 } from "./current-price-type2.js";
import { pickupDiscountSchema, type PickupDiscount } from "./pickup-discount.js";
import { priceDisplayCodesSchema, type PriceDisplayCodes } from "./price-display-codes.js";
import { processMode2Schema, type ProcessMode2 } from "./process-mode2.js";
import { promotionsPriceSchema, type PromotionsPrice } from "./promotions-price.js";

export type PricingType = {
  currentPrice: PromotionsPrice;
  currentPriceType: CurrentPriceType2;
  comparisonPrice?: PromotionsPrice;
  comparisonPriceType?: ComparisonPriceType2;
  savingsAmount?: number;
  savingsPercent?: number;
  priceDisplayCodes?: PriceDisplayCodes;
  pickupDiscount?: PickupDiscount;
  effectiveDate?: number;
  expirationDate?: number;
  processMode?: ProcessMode2;
  pid?: string;
};

export const pricingTypeSchema: Schema<PricingType> = s.object<PricingType>({
  currentPrice: promotionsPriceSchema,
  currentPriceType: currentPriceType2Schema,
  comparisonPrice: s.optional(s.lazy(() => promotionsPriceSchema)),
  comparisonPriceType: s.optional(s.lazy(() => comparisonPriceType2Schema)),
  savingsAmount: s.optional(s.float64()),
  savingsPercent: s.optional(s.float64()),
  priceDisplayCodes: s.optional(s.lazy(() => priceDisplayCodesSchema)),
  pickupDiscount: s.optional(s.lazy(() => pickupDiscountSchema)),
  effectiveDate: s.optional(s.int()),
  expirationDate: s.optional(s.int()),
  processMode: s.optional(s.lazy(() => processMode2Schema)),
  pid: s.optional(s.string()),
});
