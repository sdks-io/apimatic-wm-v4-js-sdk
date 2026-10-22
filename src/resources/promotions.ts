import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedId1Schema, type FeedId1 } from "../models/feed-id1.js";
import { feedType21Schema, type FeedType21 } from "../models/feed-type21.js";
import {
  v3FeedsFeedTypePriceAndPromotionRequest1Schema,
  type V3FeedsFeedTypePriceAndPromotionRequest1,
} from "../models/v3-feeds-feed-type-price-and-promotion-request1.js";
import { v3PriceRequestSchema, type V3PriceRequest } from "../models/v3-price-request.js";
import { v3PriceResponseSchema, type V3PriceResponse } from "../models/v3-price-response.js";
import { v3PromoSkuResponseSchema, type V3PromoSkuResponse } from "../models/v3-promo-sku-response.js";
import { v3Token500Error1Schema, type V3Token500Error1 } from "../models/v3-token500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class Promotions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Promotional prices
   *
   * @remarks
   * Retrieves a list of promotional prices for a single SKU.<br><b style='color:green;'>Market
   * availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Promotions.GetPromotionalPricesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPromotionalPrices(
    request: Promotions.GetPromotionalPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3PromoSkuResponse, Promotions.GetPromotionalPricesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/promo/sku/{sku}"),
        auth: noneAuth,
        pathParams: [{ name: "sku", value: request.sku, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3PromoSkuResponseSchema },
        errorFactory: Promotions.GetPromotionalPricesError,
      },
      options,
    );
  }

  /**
   * Update bulk promotional price
   *
   * @remarks
   * The price and promotional price API allows you to creates, updates, or deletes promotional
   * prices for multiple SKUs
   *
   * To set a new promotional price, set the "promotionSettingAction" attribute to "Create". To
   * update an existing one, set the "promotionSettingAction" attribute to "Create" with promoId. To
   * delete a promotional price, set the "promotionSettingAction" attribute to "Delete". To delete
   * all promotions for a SKU, set the "promotionSettingAction" attribute to "Replace All"
   *
   * Please Note:
   * - The effective start date for a given promotion should be within 365 days from the current
   *   date and time.
   * - The end date of a given promotion should be within 180 days from the start date and time. Any
   *   promotions beyond 180 days will result in an error <br><b style='color:green;'>Market
   *   availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Promotions.PriceBulkUploadsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  priceBulkUploads(
    request: Promotions.PriceBulkUploadsRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId1, Promotions.PriceBulkUploadsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=PRICE_AND_PROMOTION"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "feedType", value: request.feedType, schema: feedType21Schema }],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v3FeedsFeedTypePriceAndPromotionRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: feedId1Schema },
        errorFactory: Promotions.PriceBulkUploadsError,
      },
      options,
    );
  }

  /**
   * Update a promotional price
   *
   * @remarks
   * The update a promotional price API allows you to creates, updates, or deletes promotional
   * prices for single SKUs
   *
   * To set a new promotional price, set the "promotionSettingAction" attribute to "Create". To
   * update an existing one, set the "promotionSettingAction" attribute to "Create" with promoId. To
   * delete a promotional price, set the "promotionSettingAction" attribute to "Delete". To delete
   * all promotions for a SKU, set the "promotionSettingAction" attribute to "Replace All"
   *
   * Please Note:
   * - The effective start date for a given promotion should be within 365 days from the current
   *   date and time.
   * - The end date of a given promotion should be within 180 days from the start date and time. Any
   *   promotions beyond 180 days will result in an error <br><b style='color:green;'>Market
   *   availability: CA | MX | CL</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Promotions.UpdatePromotionalPricesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePromotionalPrices(
    request: Promotions.UpdatePromotionalPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3PriceResponse, Promotions.UpdatePromotionalPricesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/price"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3PriceRequestSchema },
      },
      {
        success: { kind: "json", schema: v3PriceResponseSchema },
        errorFactory: Promotions.UpdatePromotionalPricesError,
      },
      options,
    );
  }
}

export namespace Promotions {
  export type GetPromotionalPricesRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')',
     * '*', '+', ',', ';', '=', as well as '%' itself. Other characters don't need to be
     * encoded.<br><b style='color:green;'>Market availability: Global</b>
     */
    sku: string;
    /**
     * The access token retrieved in the Token API call. <br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name. <br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetPromotionalPricesError extends ApiError {
    declare readonly payload: Declared<"v3Token500Error1", V3Token500Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetPromotionalPricesError> = [
      { on: 401, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
    ];
  }

  export type PriceBulkUploadsRequest = {
    /** The feed Type. <br><b style='color:green;'>Market availability: Global</b> */
    feedType: FeedType21;
    /**
     * The access token retrieved in the Token API call. <br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name. <br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists of a Feed file attached to the request based on the feedType
     * selected
     */
    body?: V3FeedsFeedTypePriceAndPromotionRequest1;
  };

  export class PriceBulkUploadsError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"v3Token500Error12", V3Token500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PriceBulkUploadsError> = [
      { on: 401, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "v3Token500Error12", decode: { kind: "json", schema: v3Token500Error1Schema } },
    ];
  }

  export type UpdatePromotionalPricesRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists of a Feed file attached to the request.<br><b
     * style='color:green;'>Market availability: CA | MX | CL</b>
     */
    body: V3PriceRequest;
  };

  export class UpdatePromotionalPricesError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"v3Token500Error12", V3Token500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePromotionalPricesError> = [
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "v3Token500Error12", decode: { kind: "json", schema: v3Token500Error1Schema } },
    ];
  }
}
