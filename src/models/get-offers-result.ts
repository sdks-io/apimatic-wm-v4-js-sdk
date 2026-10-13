import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionType2Schema, type ConditionType2 } from "./condition-type2.js";
import { itemIdentifier1Schema, type ItemIdentifier1 } from "./item-identifier1.js";
import { offerDetailSchema, type OfferDetail } from "./offer-detail.js";
import { summarySchema, type Summary } from "./summary.js";

/** The payload for the getListingOffers and getItemOffers operations. */
export type GetOffersResult = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The Walmart Item ID of the item. */
  walmartItemId?: string;
  /** The stock keeping unit (SKU) of the item. */
  sku?: string;
  /**
   * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished,
   * Club.
   */
  itemCondition: ConditionType2;
  /** The status of the operation. */
  status: string;
  /** Information that identifies an item. */
  identifier: ItemIdentifier1;
  /**
   * Contains price information about the product, including LowestPrices, BuyBoxPrices, and
   * NumberOfOffers.
   */
  summary: Summary;
  /**
   * A list of offer details. The list is the same length as TotalOfferCount in the Summary or 20,
   * whichever is less.
   */
  offers: OfferDetail[];
};

export const getOffersResultSchema: Schema<GetOffersResult> = s.object<GetOffersResult>({
  marketplaceId: s.string(),
  walmartItemId: s.optional(s.string()),
  sku: s.optional(s.string()),
  itemCondition: conditionType2Schema,
  status: s.string(),
  identifier: itemIdentifier1Schema,
  summary: summarySchema,
  offers: s.array(s.lazy(() => offerDetailSchema)),
  _keysMap: {
    sku: "SKU",
    itemCondition: "ItemCondition",
    identifier: "Identifier",
    summary: "Summary",
    offers: "Offers",
  },
});
