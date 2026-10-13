import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idType1Schema, type IdType1 } from "./id-type1.js";
import { priceToEstimateFeesSchema, type PriceToEstimateFees } from "./price-to-estimate-fees.js";

/**
 * Echoes back the item identifier and request parameters that produced this result. Mirrors SP-API
 * FeesEstimateIdentifier.
 */
export type FeesEstimateIdentifier = {
  marketplaceId?: string;
  idType?: IdType1;
  idValue?: string;
  isWalmartFulfilled?: boolean;
  /** Price information used to estimate fees. */
  priceToEstimateFees?: PriceToEstimateFees;
  sellerId?: string;
  /** Echoed from the request Identifier field. */
  sellerInputIdentifier?: string;
  optionalFulfillmentProgram?: string;
};

export const feesEstimateIdentifierSchema: Schema<FeesEstimateIdentifier> = s.object<FeesEstimateIdentifier>({
  marketplaceId: s.optional(s.string()),
  idType: s.optional(s.lazy(() => idType1Schema)),
  idValue: s.optional(s.string()),
  isWalmartFulfilled: s.optional(s.boolean()),
  priceToEstimateFees: s.optional(s.lazy(() => priceToEstimateFeesSchema)),
  sellerId: s.optional(s.string()),
  sellerInputIdentifier: s.optional(s.string()),
  optionalFulfillmentProgram: s.optional(s.string()),
  _keysMap: {
    marketplaceId: "MarketplaceId",
    idType: "IdType",
    idValue: "IdValue",
    isWalmartFulfilled: "IsWalmartFulfilled",
    priceToEstimateFees: "PriceToEstimateFees",
    sellerId: "SellerId",
    sellerInputIdentifier: "SellerInputIdentifier",
    optionalFulfillmentProgram: "OptionalFulfillmentProgram",
  },
});
