import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedIdSchema, type FeedId } from "../models/feed-id.js";
import { feedId1Schema, type FeedId1 } from "../models/feed-id1.js";
import { feedType11Schema, type FeedType11 } from "../models/feed-type11.js";
import { feedType2Schema, type FeedType2 } from "../models/feed-type2.js";
import { feedType21Schema, type FeedType21 } from "../models/feed-type21.js";
import { IncentiveStatus, incentiveStatusSchema } from "../models/incentive-status.js";
import { incentiveTypeSchema, type IncentiveType } from "../models/incentive-type.js";
import { Order, orderSchema } from "../models/order.js";
import {
  rejectRecommendationsResponsePayloadSchema,
  type RejectRecommendationsResponsePayload,
} from "../models/reject-recommendations-response-payload.js";
import { SortBy1, sortBy1Schema } from "../models/sort-by1.js";
import {
  v3FeedsFeedTypeIncentiveEnrollmentRequestSchema,
  type V3FeedsFeedTypeIncentiveEnrollmentRequest,
} from "../models/v3-feeds-feed-type-incentive-enrollment-request.js";
import {
  v3FeedsFeedTypeIncentiveEnrollmentResponseSchema,
  type V3FeedsFeedTypeIncentiveEnrollmentResponse,
} from "../models/v3-feeds-feed-type-incentive-enrollment-response.js";
import {
  v3FeedsFeedTypePriceAndPromotionRequestSchema,
  type V3FeedsFeedTypePriceAndPromotionRequest,
} from "../models/v3-feeds-feed-type-price-and-promotion-request.js";
import {
  v3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequestSchema,
  type V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest,
} from "../models/v3-feeds-feed-type-walmart-funded-incentives-enrollment-request.js";
import {
  v3PriceIncentivesResponseSchema,
  type V3PriceIncentivesResponse,
} from "../models/v3-price-incentives-response.js";
import {
  v3PriceIncentivesWfpreferenceResponseSchema,
  type V3PriceIncentivesWfpreferenceResponse,
} from "../models/v3-price-incentives-wfpreference-response.js";
import {
  v3PriceIncentives400Error1Schema,
  type V3PriceIncentives400Error1,
} from "../models/v3-price-incentives400-error1.js";
import { v3PriceRequestSchema, type V3PriceRequest } from "../models/v3-price-request.js";
import { v3PriceResponseSchema, type V3PriceResponse } from "../models/v3-price-response.js";
import {
  v3RepricerFeedsRequestSchema,
  type V3RepricerFeedsRequest,
} from "../models/v3-repricer-feeds-request.js";
import {
  v3RepricerStrategiesResponseSchema,
  type V3RepricerStrategiesResponse,
} from "../models/v3-repricer-strategies-response.js";
import {
  v3RepricerStrategyRequestSchema,
  type V3RepricerStrategyRequest,
} from "../models/v3-repricer-strategy-request.js";
import {
  v3RepricerStrategyRequest1Schema,
  type V3RepricerStrategyRequest1,
} from "../models/v3-repricer-strategy-request1.js";
import {
  v3RepricerStrategyResponseSchema,
  type V3RepricerStrategyResponse,
} from "../models/v3-repricer-strategy-response.js";
import {
  v3RepricerStrategyResponse2Schema,
  type V3RepricerStrategyResponse2,
} from "../models/v3-repricer-strategy-response2.js";
import {
  v3RepricerStrategy400Error1Schema,
  type V3RepricerStrategy400Error1,
} from "../models/v3-repricer-strategy400-error1.js";
import { v3Token400Error1Schema, type V3Token400Error1 } from "../models/v3-token400-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class Prices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Repricer Strategy
   *
   * @remarks
   * Creates a new strategy for the seller.<br><b style='color:green;'>Market availability: US | CA
   * | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.CreateStrategyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStrategy(
    request: Prices.CreateStrategyRequest,
    options?: RequestOptions,
  ): ApiPromise<V3RepricerStrategyResponse2, Prices.CreateStrategyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/repricer/strategy"),
        auth: this.#auth.accessToken,
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
        body: { kind: "json", value: request.body, schema: v3RepricerStrategyRequest1Schema },
      },
      {
        success: { kind: "json", schema: v3RepricerStrategyResponse2Schema },
        errorFactory: Prices.CreateStrategyError,
      },
      options,
    );
  }

  /**
   * Delete Repricer Strategy
   *
   * @remarks
   * Deletes the strategy.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @throws {@link Prices.DeleteStrategyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStrategy(
    request: Prices.DeleteStrategyRequest,
    options?: RequestOptions,
  ): ApiPromise<RejectRecommendationsResponsePayload, Prices.DeleteStrategyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/repricer/strategy/{strategyCollectionId}"),
        auth: this.#auth.accessToken,
        pathParams: [
          { name: "strategyCollectionId", value: request.strategyCollectionId, schema: s.string() },
        ],
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rejectRecommendationsResponsePayloadSchema },
        errorFactory: Prices.DeleteStrategyError,
      },
      options,
    );
  }

  /**
   * List of Price Incentive Items
   *
   * @remarks
   * Get Incentives API endpoint gives you the list of all price incentives for items in your
   * catalog.
   *
   * The details include Item Id, Product Name, Product Url, SKU Id, Target Price, current Price,
   * Incentive Type, Incentive Status, Base referral fee, Reduced Referral Fee, Enrollment Type,
   * Inventory count, Enrollment Date (epoch Timestamp), Start date (epoch Timestamp), Expiration
   * date (epoch Timestamp), and Incentive Id.
   *
   * Target Price, Expiration date, Start date, Incentive Id, and Reduced Ref fee and Enrollment
   * Type for WF items would not be shown (null values).
   *
   * Enrollment Type and Date for Eligible Reduced Referral Fee incentives will not show up.<br><b
   * style='color:green;'>Market availability: US</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.GetAllIncentivesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllIncentives(
    request: Prices.GetAllIncentivesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3PriceIncentivesResponse, Prices.GetAllIncentivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/price/incentives"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          {
            name: "incentiveStatus",
            value: request.incentiveStatus,
            schema: s.defaulted(incentiveStatusSchema, IncentiveStatus.Eligible),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortBy1Schema, SortBy1.ExpirationDate),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.defaulted(orderSchema, Order.Desc) },
          {
            name: "incentiveType",
            value: request.incentiveType,
            schema: s.optional(s.lazy(() => incentiveTypeSchema)),
          },
        ],
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
        success: { kind: "json", schema: v3PriceIncentivesResponseSchema },
        errorFactory: Prices.GetAllIncentivesError,
      },
      options,
    );
  }

  /**
   * Assign or Unassign Items to or from Repricer Strategy
   *
   * @remarks
   * Add/Remove one or more items from a strategy.<br><b style='color:green;'>Market availability:
   * US | CA | MX</b>
   *
   * @returns <br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @throws {@link Prices.GetRepricerFeedError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRepricerFeed(
    request: Prices.GetRepricerFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId1, Prices.GetRepricerFeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/repricerFeeds"),
        auth: this.#auth.accessToken,
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
        body: { kind: "json", value: request.body, schema: v3RepricerFeedsRequestSchema },
      },
      {
        success: { kind: "json", schema: feedId1Schema },
        errorFactory: Prices.GetRepricerFeedError,
      },
      options,
    );
  }

  /**
   * List of Repricer Strategies
   *
   * @remarks
   * Get the list of strategies.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.GetStrategiesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStrategies(
    request: Prices.GetStrategiesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3RepricerStrategiesResponse, Prices.GetStrategiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/repricer/strategies"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.defaulted(s.string(), "0") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "10") },
        ],
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
        success: { kind: "json", schema: v3RepricerStrategiesResponseSchema },
        errorFactory: Prices.GetStrategiesError,
      },
      options,
    );
  }

  /**
   * Update pricing for multiple items in bulk
   *
   * @remarks
   * Updates prices and promotions in bulk for multiple items. You can modify the prices of multiple
   * items in bulk using a price feed. This is useful for implementing pricing strategies across
   * your catalog, such as seasonal discounts, competitive pricing adjustments, or clearance sales.
   *
   * Each price feed can contain up to 10,000 items. To ensure optimal performance (feed processing
   * time), we recommend limiting feeds to 1,000 items and keeping the payload under 10 MB.
   *
   * Use this API instead of the single price update API when updating prices for multiple items.
   * For newly created items, ensure that the Walmart Part ID (WPID) has been assigned and that at
   * least 24 hours have passed since item creation before submitting a bulk price update feed. The
   * bulk price update Service Level Agreement (SLA) is 15 minutes.
   *
   * The price sequence guarantee is observed by the bulk price update functionality, subject to the
   * following rules:
   *
   * <ul><li>You may include the same Stock Keeping Unit (SKU) multiple times in a single feed.
   * However, if a SKU is repeated in a feed, only one price will be applied.</li><li>The price
   * sequence guarantee ensures that the latest price update, based on its creation timestamp, is
   * the one that changes the item's price, overwriting the previous version.</li><li>Price updates
   * received with an earlier timestamp are ignored. We recommend using UTC timestamps for the value
   * of <code>feedDate</code> in all feed-based bulk updates.</li></ul>
   *
   * After submitting the price feed, wait at least 5 minutes before checking whether the bulk price
   * update was successful. If a price update fails, for example, due to duplicate SKU entries, an
   * error response will be returned.
   *
   * For more information and usage examples, refer to the <a
   * href="https://developer.walmart.com/global-marketplace/docs/update-pricing-for-multiple-items-bulk">Pricing
   * API Guide</a>.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.PriceAndPromotionBulkUploadsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  priceAndPromotionBulkUploads(
    request: Prices.PriceAndPromotionBulkUploadsRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId, Prices.PriceAndPromotionBulkUploadsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=PRICE_AND_PROMOTION"),
        auth: this.#auth.accessToken,
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
        body: { kind: "json", value: request.body, schema: v3FeedsFeedTypePriceAndPromotionRequestSchema },
      },
      {
        success: { kind: "json", schema: feedIdSchema },
        errorFactory: Prices.PriceAndPromotionBulkUploadsError,
      },
      options,
    );
  }

  /**
   * Update reduced referral fee incentives enrollment
   *
   * @remarks
   * You can use this API endpoint to enroll any eligible reduced referral fee incentive and
   * unenroll any active reduced referral fee incentives.<br><b style='color:green;'>Market
   * availability: US</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.ReducedReferralFeeIncentivesEnrollmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reducedReferralFeeIncentivesEnrollment(
    request: Prices.ReducedReferralFeeIncentivesEnrollmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3FeedsFeedTypeIncentiveEnrollmentResponse,
    Prices.ReducedReferralFeeIncentivesEnrollmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=INCENTIVE_ENROLLMENT"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "feedType", value: request.feedType, schema: feedType11Schema }],
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
        body: { kind: "json", value: request.body, schema: v3FeedsFeedTypeIncentiveEnrollmentRequestSchema },
      },
      {
        success: { kind: "json", schema: v3FeedsFeedTypeIncentiveEnrollmentResponseSchema },
        errorFactory: Prices.ReducedReferralFeeIncentivesEnrollmentError,
      },
      options,
    );
  }

  /**
   * Update pricing for a single item
   *
   * @remarks
   * Updates the price of an item listed on Walmart Marketplace. Use this API to change the price of
   * a single item. If you want to update pricing for multiple items, we recommend using the <a
   * href="https://developer.walmart.com/global-marketplace/reference/priceandpromotionbulkuploads">Update
   * pricing for multiple items in bulk</a> API.
   *
   * For more information and usage examples, refer to the <a
   * href="https://developer.walmart.com/us-marketplace/docs/update-pricing-for-a-single-item">Pricing
   * API Guide</a>.<br><b style='color:green;'>Market availability: CA | MX | CL</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.UpdatePriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePrice(
    request: Prices.UpdatePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<V3PriceResponse, Prices.UpdatePriceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/price"),
        auth: this.#auth.accessToken,
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
        errorFactory: Prices.UpdatePriceError,
      },
      options,
    );
  }

  /**
   * Update Repricer Strategy
   *
   * @remarks
   * Updates the existing strategy.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.UpdateStrategyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStrategy(
    request: Prices.UpdateStrategyRequest,
    options?: RequestOptions,
  ): ApiPromise<V3RepricerStrategyResponse, Prices.UpdateStrategyError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/repricer/strategy/{strategyCollectionId}"),
        auth: this.#auth.accessToken,
        pathParams: [
          { name: "strategyCollectionId", value: request.strategyCollectionId, schema: s.string() },
        ],
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
        body: { kind: "json", value: request.body, schema: v3RepricerStrategyRequestSchema },
      },
      {
        success: { kind: "json", schema: v3RepricerStrategyResponseSchema },
        errorFactory: Prices.UpdateStrategyError,
      },
      options,
    );
  }

  /**
   * Update the enrollment status of Walmart-funded incentive items
   *
   * @remarks
   * If you wish to permanently disable Walmart-funded incentives for all items of your catalog, you
   * can use this API to set the Walmart-funded incentives program as OFF.
   *
   * The default value of this variable is ON.
   *
   * Any changes to preferences will lock in (disable) the preference option for a period of 4 hours
   * as indicated by isDisabled response field of the API.<br><b style='color:green;'>Market
   * availability: US</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWalmartFundedIncentivesEnrollmentStatus(
    request: Prices.UpdateWalmartFundedIncentivesEnrollmentStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3PriceIncentivesWfpreferenceResponse,
    Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/price/incentives/wfpreference"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          {
            name: "autoEnrollEnabled",
            value: request.autoEnrollEnabled,
            schema: s.defaulted(s.boolean(), true),
          },
        ],
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3PriceIncentivesWfpreferenceResponseSchema },
        errorFactory: Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError,
      },
      options,
    );
  }

  /**
   * Update walmart funded incentives enrollment
   *
   * @remarks
   * While all Walmart-funded incentives are auto-enrolled by default, you can use this API endpoint
   * to 'Opt-out' specific Walmart-funded items whose price you don't wish to lower.
   *
   * You can also 'Opt-in' items which were previously Opted-out by you at any time using this
   * API.<br><b style='color:green;'>Market availability: US</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Prices.WalmartFundedIncentivesEnrollmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walmartFundedIncentivesEnrollment(
    request: Prices.WalmartFundedIncentivesEnrollmentRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId, Prices.WalmartFundedIncentivesEnrollmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=WALMART_FUNDED_INCENTIVES_ENROLLMENT"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "feedType", value: request.feedType, schema: feedType2Schema }],
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
          schema: v3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: feedIdSchema },
        errorFactory: Prices.WalmartFundedIncentivesEnrollmentError,
      },
      options,
    );
  }
}

export namespace Prices {
  export type CreateStrategyRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body will have the strategy related information.<br><b
     * style='color:green;'>Market availability: US | CA | MX</b>
     */
    body: V3RepricerStrategyRequest1;
  };

  export class CreateStrategyError extends ApiError {
    declare readonly payload:
      | Declared<"v3RepricerStrategy400Error1", V3RepricerStrategy400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStrategyError> = [
      {
        on: 400,
        kind: "v3RepricerStrategy400Error1",
        decode: { kind: "json", schema: v3RepricerStrategy400Error1Schema },
      },
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type DeleteStrategyRequest = {
    /**
     * Unique identifier used to group and manage repricing strategies across different
     * resources.<br><b style='color:green;'>Market availability: US | CA | MX</b>
     */
    strategyCollectionId: string;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class DeleteStrategyError extends ApiError {
    declare readonly payload:
      | Declared<"v3RepricerStrategy400Error1", V3RepricerStrategy400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStrategyError> = [
      {
        on: 400,
        kind: "v3RepricerStrategy400Error1",
        decode: { kind: "json", schema: v3RepricerStrategy400Error1Schema },
      },
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type GetAllIncentivesRequest = {
    /**
     * Specify the incentive status to retrieve items with ELIGIBLE or ENROLLED incentives. Allowed
     * values include ENROLLED and ELIGIBLE.<br><b style='color:green;'>Market availability: US</b>
     *
     * @default IncentiveStatus.Eligible
     */
    incentiveStatus?: IncentiveStatus;
    /**
     * Specify number of items to return. Max limit value is 200 and min is 1.<br><b
     * style='color:green;'>Market availability: US</b>
     *
     * @default 25
     */
    limit?: number;
    /**
     * Specify the offset of item list to be returned. Min offset value is 0.<br><b
     * style='color:green;'>Market availability: US</b>
     *
     * @default 0
     */
    offset?: number;
    /**
     * Specify the sort criteria for items. Examples of the allowed values are ITEM_ID,
     * PRODUCT_NAME, CURRENT_PRICE, EXPIRATION_DATE, ENROLLMENT_DATE.<br><b
     * style='color:green;'>Market availability: US</b>
     *
     * @default SortBy1.ExpirationDate
     */
    sortBy?: SortBy1;
    /**
     * Specify the sort order for given sort criteria. Examples of the allowed values are ASC or
     * DESC.<br><b style='color:green;'>Market availability: US</b>
     *
     * @default Order.Desc
     */
    sortOrder?: Order;
    /**
     * Specify the incentive type to filter the incentive items. Allowed values include
     * REDUCED_REFERRAL, WALMART_FUNDED.<br><b style='color:green;'>Market availability: US</b>
     */
    incentiveType?: IncentiveType;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetAllIncentivesError extends ApiError {
    declare readonly payload:
      | Declared<"v3PriceIncentives400Error1", V3PriceIncentives400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllIncentivesError> = [
      {
        on: 400,
        kind: "v3PriceIncentives400Error1",
        decode: { kind: "json", schema: v3PriceIncentives400Error1Schema },
      },
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type GetRepricerFeedRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    body: V3RepricerFeedsRequest;
  };

  export class GetRepricerFeedError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepricerFeedError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type GetStrategiesRequest = {
    /**
     * The response object starts at 0, representing the first entity that can be retrieved.<br><b
     * style='color:green;'>Market availability: CA | MX</b>
     *
     * @default "0"
     */
    offset?: string;
    /**
     * The number of entities to return, with a maximum limit of 25.<br><b
     * style='color:green;'>Market availability: CA | MX</b>
     *
     * @default "10"
     */
    limit?: string;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetStrategiesError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStrategiesError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type PriceAndPromotionBulkUploadsRequest = {
    /** The feed Type.<br><b style='color:green;'>Market availability: Global</b> */
    feedType: FeedType21;
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists of a Feed file attached to the request based on the feedType
     * selected .<br><b style='color:green;'>Market availability: Global</b>
     */
    body: V3FeedsFeedTypePriceAndPromotionRequest;
  };

  export class PriceAndPromotionBulkUploadsError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PriceAndPromotionBulkUploadsError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type ReducedReferralFeeIncentivesEnrollmentRequest = {
    /** The feed Type.<br><b style='color:green;'>Market availability: US</b> */
    feedType: FeedType11;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists referralFeeIncentiveEnrollment through which sku opt-in using Y and
     * opt-out using N.<br><b style='color:green;'>Market availability: US</b>
     */
    body: V3FeedsFeedTypeIncentiveEnrollmentRequest;
  };

  export class ReducedReferralFeeIncentivesEnrollmentError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReducedReferralFeeIncentivesEnrollmentError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type UpdatePriceRequest = {
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists of a Feed file attached to the request based on the feedType
     * selected .<br><b style='color:green;'>Market availability: Global</b>
     */
    body: V3PriceRequest;
  };

  export class UpdatePriceError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePriceError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type UpdateStrategyRequest = {
    /**
     * Unique identifier used to group and manage repricing strategies across different
     * resources.<br><b style='color:green;'>Market availability: US | CA | MX</span></b>
     */
    strategyCollectionId: string;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmConsumerChannelType?: string;
    /** The request body will have the strategy related information */
    body: V3RepricerStrategyRequest;
  };

  export class UpdateStrategyError extends ApiError {
    declare readonly payload:
      | Declared<"v3RepricerStrategy400Error1", V3RepricerStrategy400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStrategyError> = [
      {
        on: 400,
        kind: "v3RepricerStrategy400Error1",
        decode: { kind: "json", schema: v3RepricerStrategy400Error1Schema },
      },
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type UpdateWalmartFundedIncentivesEnrollmentStatusRequest = {
    /**
     * Specify the boolean for enabling auto enrollment. Examples of the allowed values are true or
     * false.<br><b style='color:green;'>Market availability: US</b>
     *
     * @default true
     */
    autoEnrollEnabled?: boolean;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class UpdateWalmartFundedIncentivesEnrollmentStatusError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWalmartFundedIncentivesEnrollmentStatusError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type WalmartFundedIncentivesEnrollmentRequest = {
    /** The feed Type.<br><b style='color:green;'>Market availability: US</b> */
    feedType: FeedType2;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
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
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * The request body consists walmartFundedIncentivesEnrollment through which Opt-in / Opt-out
     * has to be updated
     */
    body: V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest;
  };

  export class WalmartFundedIncentivesEnrollmentError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<WalmartFundedIncentivesEnrollmentError> = [
      { on: 403, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 500, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }
}
