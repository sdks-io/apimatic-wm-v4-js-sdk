import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitivePricingTypeSchema, type CompetitivePricingType } from "./competitive-pricing-type.js";
import { identifierType1Schema, type IdentifierType1 } from "./identifier-type1.js";
import { offerType1Schema, type OfferType1 } from "./offer-type1.js";
import { salesRankTypeSchema, type SalesRankType } from "./sales-rank-type.js";

/** An item. */
export type Product = {
  /** Specifies the identifiers used to uniquely identify an item. */
  identifiers: IdentifierType1;
  /** A list of product attributes if applicable. */
  attributeSets?: Record<string, unknown>[];
  /** A list that contains product variation information, if applicable. */
  relationships?: Record<string, unknown>[];
  /** Competitive pricing information for the item. */
  competitivePricing?: CompetitivePricingType;
  /** A list of sales rank information for the item, by category. */
  salesRankings?: SalesRankType[];
  /** A list of offers. */
  offers?: OfferType1[];
};

export const productSchema: Schema<Product> = s.object<Product>({
  identifiers: identifierType1Schema,
  attributeSets: s.optional(s.array(s.record(s.string(), s.unknown()))),
  relationships: s.optional(s.array(s.record(s.string(), s.unknown()))),
  competitivePricing: s.optional(s.lazy(() => competitivePricingTypeSchema)),
  salesRankings: s.optional(s.array(s.lazy(() => salesRankTypeSchema))),
  offers: s.optional(s.array(s.lazy(() => offerType1Schema))),
  _keysMap: {
    identifiers: "Identifiers",
    attributeSets: "AttributeSets",
    relationships: "Relationships",
    competitivePricing: "CompetitivePricing",
    salesRankings: "SalesRankings",
    offers: "Offers",
  },
});
