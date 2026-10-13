import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema to identify an item by MarketPlaceId and Walmart Item ID . */
export type WalmartItemIdentifier = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The Walmart Item ID of the item. */
  walmartItemId: string;
};

export const walmartItemIdentifierSchema: Schema<WalmartItemIdentifier> = s.object<WalmartItemIdentifier>({
  marketplaceId: s.string(),
  walmartItemId: s.string(),
  _keysMap: {
    marketplaceId: "MarketplaceId",
  },
});
