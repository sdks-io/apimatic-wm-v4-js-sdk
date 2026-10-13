import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { offerIdentifierSchema, type OfferIdentifier } from "./offer-identifier.js";

/** A featured offer. */
export type FeaturedOffer = {
  /** Identifies an offer. */
  offerIdentifier?: OfferIdentifier;
  /** The item condition. */
  condition?: string;
  /** Currency type and monetary value. */
  price?: MoneyType;
};

export const featuredOfferSchema: Schema<FeaturedOffer> = s.object<FeaturedOffer>({
  offerIdentifier: s.optional(s.lazy(() => offerIdentifierSchema)),
  condition: s.optional(s.string()),
  price: s.optional(s.lazy(() => moneyTypeSchema)),
});
