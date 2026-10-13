import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionType2Schema, type ConditionType2 } from "./condition-type2.js";

/** Information that identifies an item. */
export type ItemIdentifier1 = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The Walmart Item ID of the item. */
  walmartItemId?: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sellerSku?: string;
  /**
   * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished,
   * Club.
   */
  itemCondition: ConditionType2;
};

export const itemIdentifier1Schema: Schema<ItemIdentifier1> = s.object<ItemIdentifier1>({
  marketplaceId: s.string(),
  walmartItemId: s.optional(s.string()),
  sellerSku: s.optional(s.string()),
  itemCondition: conditionType2Schema,
  _keysMap: {
    marketplaceId: "MarketplaceId",
    sellerSku: "SellerSKU",
    itemCondition: "ItemCondition",
  },
});
