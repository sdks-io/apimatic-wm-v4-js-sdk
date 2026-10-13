import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema to identify an item by MarketPlaceId, SellerId, and SellerSKU. */
export type SellerSkuIdentifier = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The seller identifier submitted for the operation. */
  sellerId: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sellerSku: string;
};

export const sellerSkuIdentifierSchema: Schema<SellerSkuIdentifier> = s.object<SellerSkuIdentifier>({
  marketplaceId: s.string(),
  sellerId: s.string(),
  sellerSku: s.string(),
  _keysMap: {
    marketplaceId: "MarketplaceId",
    sellerId: "SellerId",
    sellerSku: "SellerSKU",
  },
});
