import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifiersSchema, type ItemIdentifiers } from "./item-identifiers.js";
import { itemImageSchema, type ItemImage } from "./item-image.js";
import { itemProductTypeSchema, type ItemProductType } from "./item-product-type.js";
import { itemRelationshipSchema, type ItemRelationship } from "./item-relationship.js";
import { salesRankSchema, type SalesRank } from "./sales-rank.js";

export type Item = {
  /** Walmart Product ID (WPID) — alphanumeric catalog identifier */
  walmartItemId: string;
  marketplaceId: string;
  /** Key product attributes (name, brand, description, etc.) */
  attributes?: Record<string, Record<string, unknown>>;
  identifiers?: ItemIdentifiers;
  images?: ItemImage[];
  productTypes?: ItemProductType[];
  salesRanks?: SalesRank[];
  /** Variant relationships (e.g. color/size variants) */
  relationships?: ItemRelationship[];
};

export const itemSchema: Schema<Item> = s.object<Item>({
  walmartItemId: s.string(),
  marketplaceId: s.string(),
  attributes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  identifiers: s.optional(s.lazy(() => itemIdentifiersSchema)),
  images: s.optional(s.array(s.lazy(() => itemImageSchema))),
  productTypes: s.optional(s.array(s.lazy(() => itemProductTypeSchema))),
  salesRanks: s.optional(s.array(s.lazy(() => salesRankSchema))),
  relationships: s.optional(s.array(s.lazy(() => itemRelationshipSchema))),
});
