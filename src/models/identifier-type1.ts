import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sellerSkuIdentifierSchema, type SellerSkuIdentifier } from "./seller-sku-identifier.js";
import { walmartItemIdentifierSchema, type WalmartItemIdentifier } from "./walmart-item-identifier.js";

/** Specifies the identifiers used to uniquely identify an item. */
export type IdentifierType1 = {
  /** Schema to identify an item by MarketPlaceId and Walmart Item ID . */
  marketplaceItem: WalmartItemIdentifier;
  /** Schema to identify an item by MarketPlaceId, SellerId, and SellerSKU. */
  skuIdentifier?: SellerSkuIdentifier;
};

export const identifierType1Schema: Schema<IdentifierType1> = s.object<IdentifierType1>({
  marketplaceItem: walmartItemIdentifierSchema,
  skuIdentifier: s.optional(s.lazy(() => sellerSkuIdentifierSchema)),
  _keysMap: {
    marketplaceItem: "MarketplaceItem",
    skuIdentifier: "SKUIdentifier",
  },
});
