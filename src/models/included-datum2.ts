import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludedDatum2 = {
  FeaturedBuyingOptions: "featuredBuyingOptions",
  ReferencePrices: "referencePrices",
  LowestPricedOffers: "lowestPricedOffers",
  SimilarItems: "similarItems",
} as const;
export type IncludedDatum2 = (typeof IncludedDatum2)[keyof typeof IncludedDatum2] | (string & {});

export const includedDatum2Schema: EnumSchema<IncludedDatum2> = s.enumOf<IncludedDatum2>(IncludedDatum2);
