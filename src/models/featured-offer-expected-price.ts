import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";

/** The featured offer expected price for a given SKU. */
export type FeaturedOfferExpectedPrice = {
  /** Currency type and monetary value. */
  listingPrice?: MoneyType;
};

export const featuredOfferExpectedPriceSchema: Schema<FeaturedOfferExpectedPrice> =
  s.object<FeaturedOfferExpectedPrice>({
    listingPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  });
