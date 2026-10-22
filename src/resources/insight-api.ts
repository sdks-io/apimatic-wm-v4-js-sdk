import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { type3Schema, type Type3 } from "../models/type3.js";
import {
  v3InsightsItemsListingQualityCountResponseSchema,
  type V3InsightsItemsListingQualityCountResponse,
} from "../models/v3-insights-items-listing-quality-count-response.js";
import {
  v3InsightsItemsListingQualityCount400Error1Schema,
  type V3InsightsItemsListingQualityCount400Error1,
} from "../models/v3-insights-items-listing-quality-count400-error1.js";
import {
  v3InsightsItemsListingQualityCount500Error1Schema,
  type V3InsightsItemsListingQualityCount500Error1,
} from "../models/v3-insights-items-listing-quality-count500-error1.js";
import {
  v3InsightsItemsListingQualityItemsRequestSchema,
  type V3InsightsItemsListingQualityItemsRequest,
} from "../models/v3-insights-items-listing-quality-items-request.js";
import {
  v3InsightsItemsListingQualityItemsResponseSchema,
  type V3InsightsItemsListingQualityItemsResponse,
} from "../models/v3-insights-items-listing-quality-items-response.js";
import {
  v3InsightsItemsListingQualityItems500Error1Schema,
  type V3InsightsItemsListingQualityItems500Error1,
} from "../models/v3-insights-items-listing-quality-items500-error1.js";
import {
  v3InsightsItemsListingQualityScoreResponseSchema,
  type V3InsightsItemsListingQualityScoreResponse,
} from "../models/v3-insights-items-listing-quality-score-response.js";
import {
  v3InsightsItemsListingQualityScore400Error1Schema,
  type V3InsightsItemsListingQualityScore400Error1,
} from "../models/v3-insights-items-listing-quality-score400-error1.js";
import {
  v3InsightsItemsListingQualityScore500Error1Schema,
  type V3InsightsItemsListingQualityScore500Error1,
} from "../models/v3-insights-items-listing-quality-score500-error1.js";
import {
  v3InsightsItemsUnpublishedCountsResponseSchema,
  type V3InsightsItemsUnpublishedCountsResponse,
} from "../models/v3-insights-items-unpublished-counts-response.js";
import {
  v3InsightsItemsUnpublishedCounts500Error1Schema,
  type V3InsightsItemsUnpublishedCounts500Error1,
} from "../models/v3-insights-items-unpublished-counts500-error1.js";
import {
  v3InsightsItemsUnpublishedItemsResponseSchema,
  type V3InsightsItemsUnpublishedItemsResponse,
} from "../models/v3-insights-items-unpublished-items-response.js";
import {
  v3InsightsItemsUnpublishedItems500Error1Schema,
  type V3InsightsItemsUnpublishedItems500Error1,
} from "../models/v3-insights-items-unpublished-items500-error1.js";
import {
  v3InsightsProsellerbadgeResponseSchema,
  type V3InsightsProsellerbadgeResponse,
} from "../models/v3-insights-prosellerbadge-response.js";
import {
  v3InsightsProsellerbadge400Error1Schema,
  type V3InsightsProsellerbadge400Error1,
} from "../models/v3-insights-prosellerbadge400-error1.js";
import {
  v3InsightsProsellerbadge500Error1Schema,
  type V3InsightsProsellerbadge500Error1,
} from "../models/v3-insights-prosellerbadge500-error1.js";
import {
  v3InsightsSellerIncentivesResponseSchema,
  type V3InsightsSellerIncentivesResponse,
} from "../models/v3-insights-seller-incentives-response.js";
import {
  v3InsightsSellerIncentives500Error1Schema,
  type V3InsightsSellerIncentives500Error1,
} from "../models/v3-insights-seller-incentives500-error1.js";
import { v3Token400Error1Schema, type V3Token400Error1 } from "../models/v3-token400-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class InsightApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Item count with listing quality issues
   *
   * @remarks
   * Get a list of all item categories that have items with listing quality issues or brands for a
   * seller.<br><b style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation<br><b style='color:green;'>Market availability: US only</b>
   *
   * @throws {@link InsightApi.GetCategoriesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategoriesList(
    request: InsightApi.GetCategoriesListRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsItemsListingQualityCountResponse, InsightApi.GetCategoriesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/items/listingQuality/count"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          {
            name: "viewTrendingItems",
            value: request.viewTrendingItems,
            schema: s.defaulted(s.boolean(), true),
          },
          { name: "wfsFlag", value: request.wfsFlag, schema: s.optional(s.boolean()) },
          { name: "hasIssue", value: request.hasIssue, schema: s.defaulted(s.int(), 0) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          { name: "inDemandIndicator", value: request.inDemandIndicator, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsItemsListingQualityCountResponseSchema },
        errorFactory: InsightApi.GetCategoriesListError,
      },
      options,
    );
  }

  /**
   * Seller Listing Quality Score
   *
   * @remarks
   * Get the total Listing Quality Score for a seller's entire item catalog.<br><b
   * style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InsightApi.GetListingQualityScoreError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingQualityScore(
    request: InsightApi.GetListingQualityScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsItemsListingQualityScoreResponse, InsightApi.GetListingQualityScoreError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/items/listingQuality/score"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "viewTrendingItems", value: request.viewTrendingItems, schema: s.optional(s.boolean()) },
          { name: "wfsFlag", value: request.wfsFlag, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsItemsListingQualityScoreResponseSchema },
        errorFactory: InsightApi.GetListingQualityScoreError,
      },
      options,
    );
  }

  /**
   * Pro Seller Badge Status
   *
   * @remarks
   * The Pro Seller badge status will provide you with information regarding your current badge
   * status as well as the progress you've made in meeting the criteria.<br><b
   * style='color:green;'>Market availability: MX only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InsightApi.GetProSellerBadgeInfoError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProSellerBadgeInfo(
    request: InsightApi.GetProSellerBadgeInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsProsellerbadgeResponse, InsightApi.GetProSellerBadgeInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/prosellerbadge"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsProsellerbadgeResponseSchema },
        errorFactory: InsightApi.GetProSellerBadgeInfoError,
      },
      options,
    );
  }

  /**
   * Pro Seller Tier and Rewards Status
   *
   * @remarks
   * The Pro Seller Tier and Rewards Status API allows you to check your seller’s current tier
   * status within the Pro Seller program, a three-tier incentive structure consisting of Rising,
   * Advanced, and Pro Seller levels in US and a single-tier i.e Pro Seller in CA.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InsightApi.GetSellerIncentivesInfoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSellerIncentivesInfo(
    request: InsightApi.GetSellerIncentivesInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsSellerIncentivesResponse, InsightApi.GetSellerIncentivesInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/sellerIncentives"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsSellerIncentivesResponseSchema },
        errorFactory: InsightApi.GetSellerIncentivesInfoError,
      },
      options,
    );
  }

  /**
   * Unpublished Item Counts
   *
   * @remarks
   * This API allows you to get the count of unpublished items.<br><b style='color:green;'>Market
   * availability: US | CA | MX</b>
   *
   * @returns Successful Operation<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @throws {@link InsightApi.GetUnpublishedItemCountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnpublishedItemCount(
    request: InsightApi.GetUnpublishedItemCountRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsItemsUnpublishedCountsResponse, InsightApi.GetUnpublishedItemCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/items/unpublished/counts"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "fromDate", value: request.fromDate, schema: s.string() }],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsItemsUnpublishedCountsResponseSchema },
        errorFactory: InsightApi.GetUnpublishedItemCountError,
      },
      options,
    );
  }

  /**
   * Unpublished Items
   *
   * @remarks
   * Get Unpublished Items<br><b style='color:green;'>Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InsightApi.GetUnpublishedItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnpublishedItems(
    request: InsightApi.GetUnpublishedItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsItemsUnpublishedItemsResponse, InsightApi.GetUnpublishedItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/insights/items/unpublished/items"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "fromDate", value: request.fromDate, schema: s.string() },
          {
            name: "unpublishedReasonCode",
            value: request.unpublishedReasonCode,
            schema: s.defaulted(s.string(), "all"),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "20") },
          {
            name: "offerLifecycleStatus",
            value: request.offerLifecycleStatus,
            schema: s.defaulted(s.string(), "all"),
          },
          { name: "marketTrending", value: request.marketTrending, schema: s.defaulted(s.string(), "true") },
          {
            name: "itemsWithInventory",
            value: request.itemsWithInventory,
            schema: s.defaulted(s.string(), "true"),
          },
          { name: "isCustomerFavorite", value: request.isCustomerFavorite, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3InsightsItemsUnpublishedItemsResponseSchema },
        errorFactory: InsightApi.GetUnpublishedItemsError,
      },
      options,
    );
  }

  /**
   * Item Listing Quality Details
   *
   * @remarks
   * Get each item's listing quality details including: item quality score, offer score, content
   * score and issues, and item performance.<br><b style='color:green;'>Market availability: US | CA
   * | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InsightApi.ItemsDetailsForListingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemsDetailsForListing(
    request: InsightApi.ItemsDetailsForListingRequest,
    options?: RequestOptions,
  ): ApiPromise<V3InsightsItemsListingQualityItemsResponse, InsightApi.ItemsDetailsForListingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/insights/items/listingQuality/items"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "200") },
          { name: "nextCursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3InsightsItemsListingQualityItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3InsightsItemsListingQualityItemsResponseSchema },
        errorFactory: InsightApi.ItemsDetailsForListingError,
      },
      options,
    );
  }
}

export namespace InsightApi {
  export type GetCategoriesListRequest = {
    /**
     * Specify whether or not to include seller's items that are trending in the Listing Quality
     * Score.<br><b style='color:green;'>Market availability: US only</b>
     *
     * @default true
     */
    viewTrendingItems?: boolean;
    /**
     * Specify whether or not to include WFS-eligible items in the overall Listing Quality
     * Score.<br><b style='color:green;'>Market availability: US only</b>
     */
    wfsFlag?: boolean;
    /**
     * Specify whether or not to include items that have issues in the Listing Quality Score.<br><b
     * style='color:green;'>Market availability: US only</b>
     *
     * @default 0
     */
    hasIssue?: number;
    /**
     * Specify whether to get item count by brand or category.If not specified, category is the
     * default value.<br><b style='color:green;'>Market availability: US only</b>
     */
    type?: Type3;
    /**
     * Specify whether to get item count by customer favorite.<br><b style='color:green;'>Market
     * availability: US only</b>
     */
    inDemandIndicator?: boolean;
    /**
     * Specify the number of items to return. The default is 100, with a maximum value of
     * 1000..<br><b style='color:green;'>Market availability: US only</b>
     */
    limit?: number;
    /**
     * Specify the offset of item list to be returned.<br><b style='color:green;'>Market
     * availability: US only</b>
     *
     * @default 0
     */
    offset?: number;
    /** GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> */
    wmGlobalVersion: WmGlobalVersion;
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
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetCategoriesListError extends ApiError {
    declare readonly payload:
      | Declared<"v3InsightsItemsListingQualityCount400Error1", V3InsightsItemsListingQualityCount400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsItemsListingQualityCount500Error1", V3InsightsItemsListingQualityCount500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategoriesListError> = [
      {
        on: 400,
        kind: "v3InsightsItemsListingQualityCount400Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityCount400Error1Schema },
      },
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsItemsListingQualityCount500Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityCount500Error1Schema },
      },
    ];
  }

  export type GetListingQualityScoreRequest = {
    /**
     * Specify whether or not to include seller's items that are trending in the Listing Quality
     * Score.<br><b style='color:green;'>Market availability: US | CA | MX</b>
     */
    viewTrendingItems?: boolean;
    /**
     * Specify whether or not to include WFS-eligible items in the overall Listing Quality
     * Score.<br><b style='color:green;'>Market availability: US | CA | MX</b>
     */
    wfsFlag?: string;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetListingQualityScoreError extends ApiError {
    declare readonly payload:
      | Declared<"v3InsightsItemsListingQualityScore400Error1", V3InsightsItemsListingQualityScore400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsItemsListingQualityScore500Error1", V3InsightsItemsListingQualityScore500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListingQualityScoreError> = [
      {
        on: 400,
        kind: "v3InsightsItemsListingQualityScore400Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityScore400Error1Schema },
      },
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsItemsListingQualityScore500Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityScore500Error1Schema },
      },
    ];
  }

  export type GetProSellerBadgeInfoRequest = {
    /** GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetProSellerBadgeInfoError extends ApiError {
    declare readonly payload:
      | Declared<"v3InsightsProsellerbadge400Error1", V3InsightsProsellerbadge400Error1>
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsProsellerbadge500Error1", V3InsightsProsellerbadge500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProSellerBadgeInfoError> = [
      {
        on: 400,
        kind: "v3InsightsProsellerbadge400Error1",
        decode: { kind: "json", schema: v3InsightsProsellerbadge400Error1Schema },
      },
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsProsellerbadge500Error1",
        decode: { kind: "json", schema: v3InsightsProsellerbadge500Error1Schema },
      },
    ];
  }

  export type GetSellerIncentivesInfoRequest = {
    /** GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetSellerIncentivesInfoError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsSellerIncentives500Error1", V3InsightsSellerIncentives500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSellerIncentivesInfoError> = [
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsSellerIncentives500Error1",
        decode: { kind: "json", schema: v3InsightsSellerIncentives500Error1Schema },
      },
    ];
  }

  export type GetUnpublishedItemCountRequest = {
    /**
     * Returns all unpublished items count with reason codes since the given date period<br><b
     * style='color:green;'>Market availability: US | CA | MX</b>
     */
    fromDate: string;
    /** GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetUnpublishedItemCountError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsItemsUnpublishedCounts500Error1", V3InsightsItemsUnpublishedCounts500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUnpublishedItemCountError> = [
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsItemsUnpublishedCounts500Error1",
        decode: { kind: "json", schema: v3InsightsItemsUnpublishedCounts500Error1Schema },
      },
    ];
  }

  export type GetUnpublishedItemsRequest = {
    /**
     * Returns all unpublished items since the given date<br><b style='color:green;'>Market
     * availability: US | CA | MX</b>
     */
    fromDate: string;
    /**
     * Unpublished reason code<br><b style='color:green;'>Market availability: US | CA | MX</b>
     *
     * @default "all"
     */
    unpublishedReasonCode?: string;
    /**
     * The number of items to be returned.<br><b style='color:green;'>Market availability: US | CA |
     * MX</b>
     *
     * @default "20"
     */
    limit?: string;
    /**
     * The lifecycle status of an item describes where the item listing is in the overall lifecycle.
     * Examples of allowed values are ACTIVE , ARCHIVED, RETIRED.<br><b style='color:green;'>Market
     * availability: US | CA | MX</b>
     *
     * @default "all"
     */
    offerLifecycleStatus?: string;
    /**
     * Filter the item list to return only items that are trending on Walmart.com<br><b
     * style='color:green;'>Market availability: US | CA | MX</b>
     *
     * @default "true"
     */
    marketTrending?: string;
    /**
     * Filter the item list to return only items that have inventory<br><b
     * style='color:green;'>Market availability: US | CA | MX</b>
     *
     * @default "true"
     */
    itemsWithInventory?: string;
    /**
     * Filters items by customer favorite status. When set to `true`, only customer favorites are
     * returned. When set to `false`, only non-favorites are returned. If omitted, all items are
     * returned.<br><b style='color:green;'>Market availability: US only</b>
     */
    isCustomerFavorite?: boolean;
    /** GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetUnpublishedItemsError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsItemsUnpublishedItems500Error1", V3InsightsItemsUnpublishedItems500Error1>
      | Declared<"v3Token400Error13", V3Token400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUnpublishedItemsError> = [
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsItemsUnpublishedItems500Error1",
        decode: { kind: "json", schema: v3InsightsItemsUnpublishedItems500Error1Schema },
      },
      { on: 400, kind: "v3Token400Error13", decode: { kind: "json", schema: v3Token400Error1Schema } },
    ];
  }

  export type ItemsDetailsForListingRequest = {
    /**
     * Specify number of items to return. If no limit is specified, API returns 200 items by
     * default.<br><b style='color:green;'>Market availability: US | CA | MX</b>
     *
     * @default "200"
     */
    limit?: string;
    /**
     * Specify pagination for long list of items.<br><b style='color:green;'>Market availability: US
     * only</b>
     */
    nextCursor?: string;
    /**
     * Specify pagination for long list of items.<br><b style='color:green;'>Market availability: CA
     * | MX</b>
     */
    offset?: string;
    /**
     * GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
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
    /** Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request payload */
    body: V3InsightsItemsListingQualityItemsRequest;
  };

  export class ItemsDetailsForListingError extends ApiError {
    declare readonly payload:
      | Declared<"v3Token400Error1", V3Token400Error1>
      | Declared<"v3Token400Error12", V3Token400Error1>
      | Declared<"v3InsightsItemsListingQualityItems500Error1", V3InsightsItemsListingQualityItems500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ItemsDetailsForListingError> = [
      { on: 401, kind: "v3Token400Error1", decode: { kind: "json", schema: v3Token400Error1Schema } },
      { on: 403, kind: "v3Token400Error12", decode: { kind: "json", schema: v3Token400Error1Schema } },
      {
        on: 500,
        kind: "v3InsightsItemsListingQualityItems500Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityItems500Error1Schema },
      },
    ];
  }
}
