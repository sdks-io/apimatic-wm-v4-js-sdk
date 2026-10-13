import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionType2Schema, type ConditionType2 } from "./condition-type2.js";
import { customerTypeSchema, type CustomerType } from "./customer-type.js";
import { httpMethodEnumSchema, type HttpMethodEnum } from "./http-method-enum.js";

/** List of request parameters accepted by the getListingOffers operation. */
export type ListingOffersRequest = {
  /** The resource path of the operation being called in batch, without query parameters. */
  uri: string;
  /**
   * The HTTP method associated with the individual APIs being called as part of the batch request.
   */
  method: HttpMethodEnum;
  /** A mapping of additional HTTP headers to send for the individual batch request. */
  headers?: Record<string, unknown>;
  /** A marketplace identifier. */
  marketplaceId: string;
  /**
   * Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished,
   * Club.
   */
  itemCondition: ConditionType2;
  /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
  customerType?: CustomerType;
  /** The seller stock keeping unit (SKU) of the item. */
  sellerSku: string;
};

export const listingOffersRequestSchema: Schema<ListingOffersRequest> = s.object<ListingOffersRequest>({
  uri: s.string(),
  method: httpMethodEnumSchema,
  headers: s.optional(s.record(s.string(), s.unknown())),
  marketplaceId: s.string(),
  itemCondition: conditionType2Schema,
  customerType: s.optional(s.lazy(() => customerTypeSchema)),
  sellerSku: s.string(),
  _keysMap: {
    marketplaceId: "MarketplaceId",
    itemCondition: "ItemCondition",
    customerType: "CustomerType",
    sellerSku: "SellerSKU",
  },
});
