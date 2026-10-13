import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  competitiveSummaryBatchRequestSchema,
  type CompetitiveSummaryBatchRequest,
} from "../models/competitive-summary-batch-request.js";
import {
  competitiveSummaryBatchResponseSchema,
  type CompetitiveSummaryBatchResponse,
} from "../models/competitive-summary-batch-response.js";
import { conditionType2Schema, type ConditionType2 } from "../models/condition-type2.js";
import { customerTypeSchema, type CustomerType } from "../models/customer-type.js";
import { error3Schema, type Error3 } from "../models/error3.js";
import {
  getFeaturedOfferExpectedPriceBatchRequestSchema,
  type GetFeaturedOfferExpectedPriceBatchRequest,
} from "../models/get-featured-offer-expected-price-batch-request.js";
import {
  getFeaturedOfferExpectedPriceBatchResponseSchema,
  type GetFeaturedOfferExpectedPriceBatchResponse,
} from "../models/get-featured-offer-expected-price-batch-response.js";
import {
  getItemOffersBatchRequestSchema,
  type GetItemOffersBatchRequest,
} from "../models/get-item-offers-batch-request.js";
import {
  getItemOffersBatchResponseSchema,
  type GetItemOffersBatchResponse,
} from "../models/get-item-offers-batch-response.js";
import {
  getListingOffersBatchRequestSchema,
  type GetListingOffersBatchRequest,
} from "../models/get-listing-offers-batch-request.js";
import {
  getListingOffersBatchResponseSchema,
  type GetListingOffersBatchResponse,
} from "../models/get-listing-offers-batch-response.js";
import { getOffersResponseSchema, type GetOffersResponse } from "../models/get-offers-response.js";
import { getPricingResponseSchema, type GetPricingResponse } from "../models/get-pricing-response.js";
import { ItemType, itemTypeSchema } from "../models/item-type.js";
import { offerTypeSchema, type OfferType } from "../models/offer-type.js";
import type { Servers } from "../servers.js";

/**
 * Product pricing and competitive pricing operations
 */
export class ProductPricing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns competitive pricing information for a seller's offer listings
   *
   * @remarks
   * Returns competitive pricing information for a seller's offer listings based on seller SKU or
   * Walmart Item ID .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetCompetitivePricingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompetitivePricing(
    request: ProductPricing.GetCompetitivePricingRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPricingResponse, ProductPricing.GetCompetitivePricingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/products/pricing/v4/competitivePrice"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "MarketplaceId", value: request.marketplaceId, schema: s.string() },
          { name: "ItemType", value: request.itemType, schema: s.defaulted(itemTypeSchema, ItemType.Sku) },
          { name: "Skus", value: request.skus, schema: s.optional(s.array(s.string())) },
          { name: "walmartItemIds", value: request.walmartItemIds, schema: s.optional(s.array(s.string())) },
          {
            name: "CustomerType",
            value: request.customerType,
            schema: s.optional(s.lazy(() => customerTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPricingResponseSchema },
        errorFactory: ProductPricing.GetCompetitivePricingError,
      },
      options,
    );
  }

  /**
   * Returns competitive summary data for a batch of Walmart Item IDs
   *
   * @remarks
   * **Planned — not yet available in production.** Returns competitive summary including featured
   * buying options and lowest priced offers for a batch of Walmart Item IDs .
   *
   * **Phase 1 stub** — no upstream data source identified. Returns HTTP 501 until an upstream is
   * confirmed. Track: .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetCompetitiveSummaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompetitiveSummary(
    request: ProductPricing.GetCompetitiveSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<CompetitiveSummaryBatchResponse, ProductPricing.GetCompetitiveSummaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/batches/products/pricing/v4/items/competitiveSummary"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: competitiveSummaryBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: competitiveSummaryBatchResponseSchema },
        errorFactory: ProductPricing.GetCompetitiveSummaryError,
      },
      options,
    );
  }

  /**
   * Returns the featured offer expected price for a batch of SKUs
   *
   * @remarks
   * **Planned — not yet available in production.** Returns the featured offer expected price (FOEP)
   * for a batch of seller SKUs.
   *
   * **Phase 1 stub** — no upstream data source identified. Returns HTTP 501 until an upstream is
   * confirmed. Track: .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetFeaturedOfferExpectedPriceBatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeaturedOfferExpectedPriceBatch(
    request: ProductPricing.GetFeaturedOfferExpectedPriceBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    GetFeaturedOfferExpectedPriceBatchResponse,
    ProductPricing.GetFeaturedOfferExpectedPriceBatchError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/batches/products/pricing/v4/offer/featuredOfferExpectedPrice"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getFeaturedOfferExpectedPriceBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: getFeaturedOfferExpectedPriceBatchResponseSchema },
        errorFactory: ProductPricing.GetFeaturedOfferExpectedPriceBatchError,
      },
      options,
    );
  }

  /**
   * Returns the lowest priced offers for a single item by Walmart Item ID
   *
   * @remarks
   * Returns the lowest priced offers for a single item based on Walmart Item ID and item condition.
   *
   * Uses Walmart Item ID as the primary identifier(ASIN not supported — no ASIN resolver exists in
   * the Walmart platform; IQS queries by product.item_id).
   *
   * Backed by IQS catalog_index cross-seller query (same as getListingOffers hop-2). Returns 404
   * when no offers are found for the given itemId.
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetItemOffersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemOffers(
    request: ProductPricing.GetItemOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOffersResponse, ProductPricing.GetItemOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/products/pricing/v4/items/{itemId}/offers"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "itemId", value: request.itemId, schema: s.string() }],
        query: [
          { name: "MarketplaceId", value: request.marketplaceId, schema: s.string() },
          { name: "ItemCondition", value: request.itemCondition, schema: conditionType2Schema },
          {
            name: "CustomerType",
            value: request.customerType,
            schema: s.optional(s.lazy(() => customerTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOffersResponseSchema },
        errorFactory: ProductPricing.GetItemOffersError,
      },
      options,
    );
  }

  /**
   * Returns the lowest priced offers for a batch of items by Walmart Item ID
   *
   * @remarks
   * Batch version of getItemOffers. Accepts up to 20 Walmart Item ID requests. Uses Walmart Item ID
   * as the primary identifier.
   *
   * Implemented as in-process fan-out over getItemOffers. Each item gets its own per-item HTTP
   * status code in the response body; the outer HTTP response is always 200. Implemented: .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetItemOffersBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemOffersBatch(
    request: ProductPricing.GetItemOffersBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetItemOffersBatchResponse, ProductPricing.GetItemOffersBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/batches/products/pricing/v4/itemOffers"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getItemOffersBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: getItemOffersBatchResponseSchema },
        errorFactory: ProductPricing.GetItemOffersBatchError,
      },
      options,
    );
  }

  /**
   * Returns the lowest priced offers for a single SKU listing
   *
   * @remarks
   * Returns the lowest priced offers for a single SKU listing, based on SKU and item condition.
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetListingOffersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingOffers(
    request: ProductPricing.GetListingOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOffersResponse, ProductPricing.GetListingOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/products/pricing/v4/listings/{SellerSKU}/offers"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "SellerSKU", value: request.sellerSku, schema: s.string() }],
        query: [
          { name: "MarketplaceId", value: request.marketplaceId, schema: s.string() },
          { name: "ItemCondition", value: request.itemCondition, schema: conditionType2Schema },
          {
            name: "CustomerType",
            value: request.customerType,
            schema: s.optional(s.lazy(() => customerTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOffersResponseSchema },
        errorFactory: ProductPricing.GetListingOffersError,
      },
      options,
    );
  }

  /**
   * Returns the lowest priced offers for a batch of SKU listings
   *
   * @remarks
   * Batch version of getListingOffers. Accepts up to 20 SKU requests.
   *
   * Implemented as in-process fan-out over getListingOffers (IQS-backed). Each SKU gets its own
   * per-item HTTP status code in the response body; the outer HTTP response is always 200.
   * Implemented: .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetListingOffersBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingOffersBatch(
    request: ProductPricing.GetListingOffersBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetListingOffersBatchResponse, ProductPricing.GetListingOffersBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/batches/products/pricing/v4/listingOffers"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getListingOffersBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: getListingOffersBatchResponseSchema },
        errorFactory: ProductPricing.GetListingOffersBatchError,
      },
      options,
    );
  }

  /**
   * Returns pricing information for a seller's offer listings
   *
   * @remarks
   * Returns pricing information for a seller's active offer listings based on seller SKU or Walmart
   * Item ID .
   *
   * @returns Success
   *
   * @throws {@link ProductPricing.GetPricingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPricing(
    request: ProductPricing.GetPricingRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPricingResponse, ProductPricing.GetPricingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/products/pricing/v4/price"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "MarketplaceId", value: request.marketplaceId, schema: s.string() },
          { name: "ItemType", value: request.itemType, schema: s.defaulted(itemTypeSchema, ItemType.Sku) },
          { name: "Skus", value: request.skus, schema: s.optional(s.array(s.string())) },
          { name: "walmartItemIds", value: request.walmartItemIds, schema: s.optional(s.array(s.string())) },
          {
            name: "ItemCondition",
            value: request.itemCondition,
            schema: s.optional(s.lazy(() => conditionType2Schema)),
          },
          { name: "OfferType", value: request.offerType, schema: s.optional(s.lazy(() => offerTypeSchema)) },
          {
            name: "CustomerType",
            value: request.customerType,
            schema: s.optional(s.lazy(() => customerTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPricingResponseSchema },
        errorFactory: ProductPricing.GetPricingError,
      },
      options,
    );
  }
}

export namespace ProductPricing {
  export type GetCompetitivePricingRequest = {
    /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
    marketplaceId: string;
    /**
     * Indicates whether Walmart Item ID values or seller SKU values are used to identify items.
     *
     * @default ItemType.Sku
     */
    itemType?: ItemType;
    /** A list of up to twenty seller SKU values used to identify items in the given marketplace. */
    skus?: string[];
    /**
     * A list of up to twenty Walmart Item ID values used to identify items in the given
     * marketplace.
     */
    walmartItemIds?: string[];
    /**
     * Indicates whether to request pricing information from the point of view of Consumer or
     * Business buyers. Default is Consumer.
     */
    customerType?: CustomerType;
  };

  export class GetCompetitivePricingError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetCompetitivePricingError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetCompetitiveSummaryRequest = {
    body: CompetitiveSummaryBatchRequest;
  };

  export class GetCompetitiveSummaryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetCompetitiveSummaryError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetFeaturedOfferExpectedPriceBatchRequestParams = {
    body: GetFeaturedOfferExpectedPriceBatchRequest;
  };

  export class GetFeaturedOfferExpectedPriceBatchError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetFeaturedOfferExpectedPriceBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetItemOffersRequest = {
    /** The Walmart Item ID of the item. */
    itemId: string;
    /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
    marketplaceId: string;
    /**
     * Filters the offer listings based on item condition. Possible values: New, Used, Collectible,
     * Refurbished, Club.
     */
    itemCondition: ConditionType2;
    /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
    customerType?: CustomerType;
  };

  export class GetItemOffersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetItemOffersError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetItemOffersBatchRequestParams = {
    body: GetItemOffersBatchRequest;
  };

  export class GetItemOffersBatchError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetItemOffersBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetListingOffersRequest = {
    /**
     * Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId.
     */
    sellerSku: string;
    /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
    marketplaceId: string;
    /**
     * Filters the offer listings based on item condition. Possible values: New, Used, Collectible,
     * Refurbished, Club.
     */
    itemCondition: ConditionType2;
    /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
    customerType?: CustomerType;
  };

  export class GetListingOffersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetListingOffersError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetListingOffersBatchRequestParams = {
    body: GetListingOffersBatchRequest;
  };

  export class GetListingOffersBatchError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetListingOffersBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }

  export type GetPricingRequest = {
    /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
    marketplaceId: string;
    /**
     * Indicates whether Walmart Item ID values or seller SKU values are used to identify items.
     *
     * @default ItemType.Sku
     */
    itemType?: ItemType;
    /** A list of up to twenty seller SKU values used to identify items in the given marketplace. */
    skus?: string[];
    /**
     * A list of up to twenty Walmart Item ID values used to identify items in the given
     * marketplace.
     */
    walmartItemIds?: string[];
    /**
     * Filters the offer listings based on item condition. Possible values: New, Used, Collectible,
     * Refurbished, Club.
     */
    itemCondition?: ConditionType2;
    /**
     * Indicates whether to request pricing information for the seller's B2C or B2B offers. Default
     * is B2C.
     */
    offerType?: OfferType;
    /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
    customerType?: CustomerType;
  };

  export class GetPricingError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", Error3[]>
      | Declared<"error403", Error3[]>
      | Declared<"error404", Error3[]>
      | Declared<"error429", Error3[]>
      | Declared<"error500", Error3[]>
    >;

    static readonly errors: ErrorDecoders<GetPricingError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.array(s.lazy(() => error3Schema)) } },
    ];
  }
}
