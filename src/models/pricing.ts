import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comparisonPriceTypeSchema, type ComparisonPriceType } from "./comparison-price-type.js";
import { comparisonPriceSchema, type ComparisonPrice } from "./comparison-price.js";
import { currentPriceTypeSchema, type CurrentPriceType } from "./current-price-type.js";
import { currentPriceSchema, type CurrentPrice } from "./current-price.js";
import { priceDisplayCodes1Schema, type PriceDisplayCodes1 } from "./price-display-codes1.js";
import { processModeSchema, type ProcessMode } from "./process-mode.js";

export type Pricing = {
  /** This is applicable only for promotions */
  effectiveDate?: Date;
  /** This is applicable only for promotions */
  expirationDate?: Date;
  /** This is applicable only for promotions */
  promoId?: string;
  /** This is applicable only for promotions */
  processMode?: ProcessMode;
  currentPriceType: CurrentPriceType;
  currentPrice: CurrentPrice;
  /** This is applicable only for promotions */
  comparisonPriceType?: ComparisonPriceType;
  /** This is applicable only for promotions */
  comparisonPrice?: ComparisonPrice;
  /** This is applicable only for promotions */
  priceDisplayCodes?: PriceDisplayCodes1;
};

export const pricingSchema: Schema<Pricing> = s.object<Pricing>({
  effectiveDate: s.optional(s.dateTime()),
  expirationDate: s.optional(s.dateTime()),
  promoId: s.optional(s.string()),
  processMode: s.optional(s.lazy(() => processModeSchema)),
  currentPriceType: currentPriceTypeSchema,
  currentPrice: currentPriceSchema,
  comparisonPriceType: s.optional(s.lazy(() => comparisonPriceTypeSchema)),
  comparisonPrice: s.optional(s.lazy(() => comparisonPriceSchema)),
  priceDisplayCodes: s.optional(s.lazy(() => priceDisplayCodes1Schema)),
});
