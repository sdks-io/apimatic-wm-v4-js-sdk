import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { offerTypeSchema, type OfferType } from "./offer-type.js";
import { pointsSchema, type Points } from "./points.js";

export type ItemOfferByMarketplace = {
  marketplaceId?: string;
  offerType?: OfferType;
  price?: Money;
  points?: Points;
};

export const itemOfferByMarketplaceSchema: Schema<ItemOfferByMarketplace> = s.object<ItemOfferByMarketplace>({
  marketplaceId: s.optional(s.string()),
  offerType: s.optional(s.lazy(() => offerTypeSchema)),
  price: s.optional(s.lazy(() => moneySchema)),
  points: s.optional(s.lazy(() => pointsSchema)),
});
