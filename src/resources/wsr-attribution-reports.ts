import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { TemplateType, templateTypeSchema } from "../models/template-type.js";
import { WmGlobalVersion, wmGlobalVersionSchema } from "../models/wm-global-version.js";
import { WmMarket, wmMarketSchema } from "../models/wm-market.js";
import { wsrErrorResponseSchema, type WsrErrorResponse } from "../models/wsr-error-response.js";
import {
  wsrItemReportResponseSchema,
  type WsrItemReportResponse,
} from "../models/wsr-item-report-response.js";
import {
  wsrPerformanceReportResponseSchema,
  type WsrPerformanceReportResponse,
} from "../models/wsr-performance-report-response.js";
import { wsrReportRequestSchema, type WsrReportRequest } from "../models/wsr-report-request.js";
import {
  wsrTagTemplatesResponseSchema,
  type WsrTagTemplatesResponse,
} from "../models/wsr-tag-templates-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving affiliate campaign performance reports
 */
export class WsrAttributionReports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Tag Templates
   *
   * @remarks
   * Fetch referral link tag templates for different page types (ITEM, BRANDSHOP). Tag templates
   * contain URL patterns with placeholders that can be used to construct final referral URLs/tags
   * for affiliate tracking.
   *
   * <span style="color:green">**Market availability: US**</span>
   *
   * @returns Tag templates retrieved successfully
   *
   * @throws {@link WsrAttributionReports.GetTagTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTagTemplates(
    request: WsrAttributionReports.GetTagTemplatesRequest,
    options?: RequestOptions,
  ): ApiPromise<WsrTagTemplatesResponse, WsrAttributionReports.GetTagTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/advertising/wsr/attribution/tag-templates/{templateType}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          {
            name: "templateType",
            value: request.templateType,
            schema: s.defaulted(templateTypeSchema, TemplateType.NonMacro),
          },
        ],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          {
            name: "WM_GLOBAL_VERSION",
            value: request.wmGlobalVersion,
            schema: s.defaulted(wmGlobalVersionSchema, WmGlobalVersion._31),
          },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.defaulted(wmMarketSchema, WmMarket.Us) },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: wsrTagTemplatesResponseSchema },
        errorFactory: WsrAttributionReports.GetTagTemplatesError,
      },
      options,
    );
  }

  /**
   * Get Item Report
   *
   * @remarks
   * Retrieve detailed item-level performance reports for affiliate campaigns.
   *
   * <span style="color:green">**Market availability: US only**</span>
   *
   * This endpoint returns performance data at the individual item/product level, including product
   * details such as item name, category, and product type along with performance metrics. This is
   * useful for understanding which products are driving the most revenue through affiliate
   * channels.
   *
   * ### Aggregation Levels and Field Availability
   * The `performanceBy` parameter determines which identifier fields are populated in the response:
   *
   * | performanceBy | campaignId | adGroupId | creativeId |
   * |---------------|------------|-----------|------------|
   * | CAMPAIGN      | ✓          | null      | null       |
   * | ADGROUP       | ✓          | ✓         | null       |
   * | CREATIVE      | ✓          | ✓         | ✓          |
   *
   * ### Supported filters
   * - `startDate`: Report start date (required)
   * - `endDate`: Report end date (required)
   * - `campaignId`: Filter by specific campaign IDs
   * - `adGroupId`: Filter by specific ad group IDs
   * - `creativeId`: Filter by specific creative IDs
   *
   * ### Date Validation Rules
   * - End date must be strictly after start date
   * - Maximum date range: less than 1 year
   * - Dates must be in ISO format (YYYY-MM-DD)
   *
   * @returns Item report retrieved successfully
   *
   * @throws {@link WsrAttributionReports.GetWsrItemReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWsrItemReport(
    request: WsrAttributionReports.GetWsrItemReportRequest,
    options?: RequestOptions,
  ): ApiPromise<WsrItemReportResponse, WsrAttributionReports.GetWsrItemReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/wsr/attribution/item-report"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          {
            name: "WM_GLOBAL_VERSION",
            value: request.wmGlobalVersion,
            schema: s.defaulted(wmGlobalVersionSchema, WmGlobalVersion._31),
          },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.defaulted(wmMarketSchema, WmMarket.Us) },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: wsrReportRequestSchema },
      },
      {
        success: { kind: "json", schema: wsrItemReportResponseSchema },
        errorFactory: WsrAttributionReports.GetWsrItemReportError,
      },
      options,
    );
  }

  /**
   * Get Performance Report
   *
   * @remarks
   * Retrieve performance analytics and metrics for affiliate campaigns.
   *
   * <span style="color:green">**Market availability: US only**</span>
   *
   * This endpoint returns aggregated performance data including clicks, orders, GMV, and commission
   * metrics within a specified date range. Data can be aggregated at different levels based on the
   * `performanceBy` parameter.
   *
   * ### Aggregation Levels and Field Availability
   * The `performanceBy` parameter determines which identifier fields are populated in the response:
   *
   * | performanceBy | campaignId | adGroupId | creativeId |
   * |---------------|------------|-----------|------------|
   * | CAMPAIGN      | ✓          | null      | null       |
   * | ADGROUP       | ✓          | ✓         | null       |
   * | CREATIVE      | ✓          | ✓         | ✓          |
   *
   * ### Supported filters
   * - `startDate`: Report start date (required)
   * - `endDate`: Report end date (required)
   * - `campaignId`: Filter by specific campaign IDs
   * - `adGroupId`: Filter by specific ad group IDs
   * - `creativeId`: Filter by specific creative IDs
   *
   * ### Date Validation Rules
   * - End date must be strictly after start date
   * - Maximum date range: less than 1 year
   * - Dates must be in ISO format (YYYY-MM-DD)
   *
   * @returns Performance report retrieved successfully
   *
   * @throws {@link WsrAttributionReports.GetWsrPerformanceReportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWsrPerformanceReport(
    request: WsrAttributionReports.GetWsrPerformanceReportRequest,
    options?: RequestOptions,
  ): ApiPromise<WsrPerformanceReportResponse, WsrAttributionReports.GetWsrPerformanceReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/wsr/attribution/performance-report"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          {
            name: "WM_GLOBAL_VERSION",
            value: request.wmGlobalVersion,
            schema: s.defaulted(wmGlobalVersionSchema, WmGlobalVersion._31),
          },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.defaulted(wmMarketSchema, WmMarket.Us) },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: wsrReportRequestSchema },
      },
      {
        success: { kind: "json", schema: wsrPerformanceReportResponseSchema },
        errorFactory: WsrAttributionReports.GetWsrPerformanceReportError,
      },
      options,
    );
  }
}

export namespace WsrAttributionReports {
  export type GetTagTemplatesRequest = {
    /**
     * The type of tag template to fetch. Currently supports NON_MACRO.
     *
     * <span style="color:green">**Market availability: Global**</span>
     *
     * @default TemplateType.NonMacro
     */
    templateType?: TemplateType;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** The version of the global API used. @default WmGlobalVersion._31 */
    wmGlobalVersion?: WmGlobalVersion;
    /** The target market of the API call. @default WmMarket.Us */
    wmMarket?: WmMarket;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class GetTagTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"wsrErrorResponse", WsrErrorResponse>
      | Declared<"wsrErrorResponse2", WsrErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTagTemplatesError> = [
      { on: 400, kind: "wsrErrorResponse", decode: { kind: "json", schema: wsrErrorResponseSchema } },
      { on: 500, kind: "wsrErrorResponse2", decode: { kind: "json", schema: wsrErrorResponseSchema } },
    ];
  }

  export type GetWsrItemReportRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** The version of the global API used. @default WmGlobalVersion._31 */
    wmGlobalVersion?: WmGlobalVersion;
    /** Identifies the Walmart Marketplace region for the request. @default WmMarket.Us */
    wmMarket?: WmMarket;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Item report request with filters and parameters */
    body: WsrReportRequest;
  };

  export class GetWsrItemReportError extends ApiError {
    declare readonly payload:
      | Declared<"wsrErrorResponse", WsrErrorResponse>
      | Declared<"wsrErrorResponse2", WsrErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWsrItemReportError> = [
      { on: 400, kind: "wsrErrorResponse", decode: { kind: "json", schema: wsrErrorResponseSchema } },
      { on: 500, kind: "wsrErrorResponse2", decode: { kind: "json", schema: wsrErrorResponseSchema } },
    ];
  }

  export type GetWsrPerformanceReportRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** The version of the global API used. @default WmGlobalVersion._31 */
    wmGlobalVersion?: WmGlobalVersion;
    /** Identifies the Walmart Marketplace region for the request. @default WmMarket.Us */
    wmMarket?: WmMarket;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Performance report request with date range and optional filters */
    body: WsrReportRequest;
  };

  export class GetWsrPerformanceReportError extends ApiError {
    declare readonly payload:
      | Declared<"wsrErrorResponse", WsrErrorResponse>
      | Declared<"wsrErrorResponse2", WsrErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWsrPerformanceReportError> = [
      { on: 400, kind: "wsrErrorResponse", decode: { kind: "json", schema: wsrErrorResponseSchema } },
      { on: 500, kind: "wsrErrorResponse2", decode: { kind: "json", schema: wsrErrorResponseSchema } },
    ];
  }
}
