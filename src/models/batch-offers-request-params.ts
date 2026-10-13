import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionType2Schema, type ConditionType2 } from "./condition-type2.js";
import { customerTypeSchema, type CustomerType } from "./customer-type.js";

/** Common request parameters for ItemOffersRequest and ListingOffersRequest. */
export type BatchOffersRequestParams = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /**
   * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished,
   * Club.
   */
  itemCondition: ConditionType2;
  /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
  customerType?: CustomerType;
};

export const batchOffersRequestParamsSchema: Schema<BatchOffersRequestParams> =
  s.object<BatchOffersRequestParams>({
    marketplaceId: s.string(),
    itemCondition: conditionType2Schema,
    customerType: s.optional(s.lazy(() => customerTypeSchema)),
    _keysMap: {
      marketplaceId: "MarketplaceId",
      itemCondition: "ItemCondition",
      customerType: "CustomerType",
    },
  });
