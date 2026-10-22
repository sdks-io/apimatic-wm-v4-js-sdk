import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { feedRecordResponseSchema, type FeedRecordResponse } from "../models/feed-record-response.js";
import { feedStatus1Schema, type FeedStatus1 } from "../models/feed-status1.js";
import { feedTypeSchema, type FeedType } from "../models/feed-type.js";
import { v3FeedsResponse1Schema, type V3FeedsResponse1 } from "../models/v3-feeds-response1.js";
import { v3Feeds404Error21Schema, type V3Feeds404Error21 } from "../models/v3-feeds404-error21.js";
import { v3Feeds500Error21Schema, type V3Feeds500Error21 } from "../models/v3-feeds500-error21.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class FeedsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * All feed statuses
   *
   * @remarks
   * This API returns the feed statuses for all the specified feed IDs. Use the specified feedTypes
   * to query the status of each feed and identify whether it was processed successfully, failed, or
   * is still in progress.
   *
   *  | FeedTypes | Availability |
   * |--------|----------|
   * | MP_MAINTENANCE, MP_ITEM_MATCH, LAGTIME | Global |
   * | MP_INVENTORY, SKU_TEMPLATE_MAP | US, CA, MX |
   * | MP_ITEM_INTL | CA, MX, CL |
   * | MP_ITEM, MP_WFS_ITEM, WALMART_FUNDED_INCENTIVES_ENROLLMENT, INCENTIVE_ENROLLMENT,PRICE_AND_PROMOTION | US Only |
   * | OMNI_WFS, RETIRE_ITEM, SHIPPING_OVERRIDES, FITMENT_ACES, FITMENT_PIES, SPLIT_AND_MERGE | US Only |
   * | OMNI_WFSSETUP, OMNI_WFSCONVERT | CA, MX |
   *
   * <br><b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link FeedsApi.GetAllFeedStatusesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllFeedStatuses(
    request: FeedsApi.GetAllFeedStatusesRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedRecordResponse, FeedsApi.GetAllFeedStatusesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/feeds"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "feedId", value: request.feedId, schema: s.optional(s.string()) },
          { name: "feedType", value: request.feedType, schema: s.optional(s.string()) },
          {
            name: "feedStatus",
            value: request.feedStatus,
            schema: s.optional(s.lazy(() => feedStatus1Schema)),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.string(), "0") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "50") },
        ],
        headers: [
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
        success: { kind: "json", schema: feedRecordResponseSchema },
        errorFactory: FeedsApi.GetAllFeedStatusesError,
      },
      options,
    );
  }

  /**
   * Get Feed Error Report
   *
   * @remarks
   * Get Feed Error Report API allows you to download a detailed error report for a submitted feed.
   *
   * Currently the API supports error report download for the following feeds:
   * * FITMENT_ACES
   * * FITMENT_PIES
   *
   * This API returns a zipped .csv file, which contains line item level detailed error messages.
   * For details and a sample, please refer to the guide section link below. <br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeedErrorReport(
    request: FeedsApi.GetFeedErrorReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/feeds/{feedId}/errorReport"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "feedId", value: request.feedId, schema: s.string() }],
        query: [{ name: "feedType", value: request.feedType, schema: feedTypeSchema }],
        headers: [
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
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Feed item status
   *
   * @remarks
   * Returns the feed and item status for a specified Feed ID. <br><b style='color:green;'>Market
   * availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link FeedsApi.GetFeedItemStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeedItemStatus(
    request: FeedsApi.GetFeedItemStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V3FeedsResponse1, FeedsApi.GetFeedItemStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/feeds/{feedId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "feedId", value: request.feedId, schema: s.string() }],
        query: [
          { name: "includeDetails", value: request.includeDetails, schema: s.defaulted(s.string(), "false") },
          { name: "offset", value: request.offset, schema: s.defaulted(s.string(), "0") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "50") },
        ],
        headers: [
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
        success: { kind: "json", schema: v3FeedsResponse1Schema },
        errorFactory: FeedsApi.GetFeedItemStatusError,
      },
      options,
    );
  }
}

export namespace FeedsApi {
  export type GetAllFeedStatusesRequest = {
    /**
     * A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special
     * characters must be escaped. (e.g., feedId: '...3456@789...' must be entered in the URL as
     * '...3456%40789).
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    feedId?: string;
    /**
     * The feedType parameter defines the type of feed whose status you are querying. Feed types are
     * specific to each market, so be sure to provide a value that is supported for your target
     * market.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    feedType?: string;
    /**
     * Status of the feed.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     */
    feedStatus?: FeedStatus1;
    /**
     * The object response to start with, where 0 is the first entity that can be requested.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default "0"
     */
    offset?: string;
    /**
     * The number of entities to be returned. It cannot be more than 50 entities. <strong
     * style="color: green;">**Market availability: Global**</strong>
     *
     * @default "50"
     */
    limit?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetAllFeedStatusesError extends ApiError {
    declare readonly payload:
      | Declared<"feedRecordResponse", FeedRecordResponse>
      | Declared<"feedRecordResponse2", FeedRecordResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllFeedStatusesError> = [
      { on: 404, kind: "feedRecordResponse", decode: { kind: "json", schema: feedRecordResponseSchema } },
      { on: 500, kind: "feedRecordResponse2", decode: { kind: "json", schema: feedRecordResponseSchema } },
    ];
  }

  export type GetFeedErrorReportRequest = {
    /**
     * Feed Id of the feed.
     *
     * <strong style="color: green;">**Market availability: US only**</strong>
     */
    feedId: string;
    /**
     * Feed type for which Error Report needs to be downloaded.
     *
     * <strong style="color: green;">**Market availability: US only**</strong>
     */
    feedType: FeedType;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export type GetFeedItemStatusRequest = {
    /**
     * A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special
     * characters must be escaped. (e.g., feedId: '...3456@789...' must be entered in the URL as
     * '...3456%40789).
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    feedId: string;
    /**
     * Includes details for each entity in the feed. When set to true, returns detailed information
     * about each item in the feed, including individual success or failure statuses and any
     * specific error messages. Defaults to false, which returns only high-level feed status.
     *
     * <strong style="color: green;">**Market availability: Global**</strong>
     *
     * @default "false"
     */
    includeDetails?: string;
    /**
     * The object response to start with, where 0 is the first entity that can be requested. Use
     * only when `includeDetails` is set to true.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     *
     * @default "0"
     */
    offset?: string;
    /**
     * The number of entities to be returned. It cannot be more than 50 entities. Use only when
     * `includeDetails` is set to true.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     *
     * @default "50"
     */
    limit?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetFeedItemStatusError extends ApiError {
    declare readonly payload:
      | Declared<"v3Feeds404Error21", V3Feeds404Error21>
      | Declared<"v3Feeds500Error21", V3Feeds500Error21>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeedItemStatusError> = [
      { on: 404, kind: "v3Feeds404Error21", decode: { kind: "json", schema: v3Feeds404Error21Schema } },
      { on: 500, kind: "v3Feeds500Error21", decode: { kind: "json", schema: v3Feeds500Error21Schema } },
    ];
  }
}
