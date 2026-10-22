import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponse2Schema, type ErrorResponse2 } from "../models/error-response2.js";
import { notFoundResponseSchema, type NotFoundResponse } from "../models/not-found-response.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import {
  v3WfsRecommendationFulfilWithWfsResponseSchema,
  type V3WfsRecommendationFulfilWithWfsResponse,
} from "../models/v3-wfs-recommendation-fulfil-with-wfs-response.js";
import {
  v3WfsRecommendationRestockResponseSchema,
  type V3WfsRecommendationRestockResponse,
} from "../models/v3-wfs-recommendation-restock-response.js";
import {
  v3WfsRecommendationShipmentQuantityRequestSchema,
  type V3WfsRecommendationShipmentQuantityRequest,
} from "../models/v3-wfs-recommendation-shipment-quantity-request.js";
import {
  v3WfsRecommendationShipmentQuantityResponseSchema,
  type V3WfsRecommendationShipmentQuantityResponse,
} from "../models/v3-wfs-recommendation-shipment-quantity-response.js";
import {
  v3WfsRecommendationUnpublishedResponseSchema,
  type V3WfsRecommendationUnpublishedResponse,
} from "../models/v3-wfs-recommendation-unpublished-response.js";
import type { Servers } from "../servers.js";

/**
 * APIs for providing recommendations to sellers.
 */
export class RecommendationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Fulfill with WFS Recommendations
   *
   * @remarks
   * Use **Fulfill With WFS Recommendations** to identify which seller-fulfilled items in your
   * catalog Walmart suggests could potentially perform best when fulfilled by WFS. These
   * suggestions are available on demand, and suggestions are refreshed the 1st and 15th of each
   * month.
   *
   * Key attributes include:
   *
   * - **estimatedSalesLift**: The estimated increase in sales you could see if you converted the
   *   suggested items from seller-fulfilled to WFS.
   *
   * - **sellerFulfilledPast30DaysSales**: A historical view of your seller-fulfilled sales for the
   *   past 30 days.
   * - **walmartFulfilledEstimatedSales**: An estimated view of your potential sales if the
   *   suggested items were fulfilled by WFS.
   *
   * You can use these suggestions to determine which items to convert to WFS.
   *
   * @returns Successful Operation
   *
   * @throws {@link RecommendationsApi.GetFulfillWithWfsRecommendationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFulfillWithWfsRecommendations(
    request: RecommendationsApi.GetFulfillWithWfsRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3WfsRecommendationFulfilWithWfsResponse,
    RecommendationsApi.GetFulfillWithWfsRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wfs/recommendation/fulfil-with-wfs"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "customerFavorite", value: request.customerFavorite, schema: s.optional(s.boolean()) },
          { name: "showInsights", value: request.showInsights, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(s.string(), "estimatedSalesLift") },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          {
            name: "showHiddenRecordsOnly",
            value: request.showHiddenRecordsOnly,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "wm_audit.origin_source", value: request.wmAuditOriginSource, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3WfsRecommendationFulfilWithWfsResponseSchema },
        errorFactory: RecommendationsApi.GetFulfillWithWfsRecommendationsError,
      },
      options,
    );
  }

  /**
   * Restock Recommendations
   *
   * @remarks
   * Use **Restock Recommendations** to get Walmart-generated suggestions for the items you should
   * restock with WFS based on your current inventory and forecasted sales demand. These suggestions
   * are available on demand. Key attributes include:
   *
   * - **suggestedUnits**: The number of units we suggest you send of this item to WFS
   * - **forecastedSalesLift**: The estimated increase in sales you may see if your items are
   *   restocked according to our suggestions
   * - **totalForecastedSalesLost**: How much money you're estimated to lose out on if you don't
   *   restock your inventory
   *
   * Once you determine which suggested items to restock, you can use the Create inbound shipment
   * API to create a shipping plan to send inventory to WFS.
   *
   * @returns Successful Operation
   *
   * @throws {@link RecommendationsApi.GetRestockRecommendationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRestockRecommendations(
    request: RecommendationsApi.GetRestockRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3WfsRecommendationRestockResponse, RecommendationsApi.GetRestockRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wfs/recommendation/restock"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "customerFavorite", value: request.customerFavorite, schema: s.optional(s.boolean()) },
          { name: "showInsights", value: request.showInsights, schema: s.defaulted(s.boolean(), true) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(s.string(), "forecastedSalesLift") },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          {
            name: "showHiddenRecordsOnly",
            value: request.showHiddenRecordsOnly,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "wm_audit.origin_source", value: request.wmAuditOriginSource, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3WfsRecommendationRestockResponseSchema },
        errorFactory: RecommendationsApi.GetRestockRecommendationsError,
      },
      options,
    );
  }

  /**
   * Get WFS Recommended Shipment Quantity
   *
   * @remarks
   * Use this API to get recommended shipment quantities for the items that you plan to send to
   * Walmart Fulfillment Services (WFS) in order to achieve optimal inventory levels.
   *
   * @returns Successful Operation
   *
   * @throws {@link RecommendationsApi.GetShipmentQuantityRecommendationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShipmentQuantityRecommendations(
    request: RecommendationsApi.GetShipmentQuantityRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3WfsRecommendationShipmentQuantityResponse,
    RecommendationsApi.GetShipmentQuantityRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/wfs/recommendation/shipment-quantity"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3WfsRecommendationShipmentQuantityRequestSchema },
      },
      {
        success: { kind: "json", schema: v3WfsRecommendationShipmentQuantityResponseSchema },
        errorFactory: RecommendationsApi.GetShipmentQuantityRecommendationsError,
      },
      options,
    );
  }

  /**
   * Unpublished Recommendations
   *
   * @remarks
   * This call helps you identify the estimated storage fees with Walmart for your unpublished WFS
   * items.
   *
   * Use **Unpublish Recommendations** to fetch a current list of your unpublished WFS items. This
   * is available on demand.
   *
   * Key data attributes include:
   *
   * - **unpublishedIssue**: The reason your item is currently unpublished with Walmart.
   * - **estimatedStorageFee**: The estimated storage costs associated with your unpublished WFS
   *   inventory.
   * - **totalunpublishedunitsstored**: The total quantity of units in WFS fulfillment centers for
   *   unpublished items.
   *
   * Use this data to identify the reason these items are unpublished and the estimated costs
   * associated with these unpublished items. By default, these suggestions will only include items
   * that are active with an Available to Sell (ATS) quantity of 0.
   *
   * @returns Successful Operation
   *
   * @throws {@link RecommendationsApi.GetUnpublishedRecommendationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnpublishedRecommendations(
    request: RecommendationsApi.GetUnpublishedRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3WfsRecommendationUnpublishedResponse,
    RecommendationsApi.GetUnpublishedRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wfs/recommendation/unpublished"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "customerFavorite", value: request.customerFavorite, schema: s.optional(s.boolean()) },
          { name: "showInsights", value: request.showInsights, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(s.string(), "estimatedSalesLift") },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
        ],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "wm_audit.origin_source", value: request.wmAuditOriginSource, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3WfsRecommendationUnpublishedResponseSchema },
        errorFactory: RecommendationsApi.GetUnpublishedRecommendationsError,
      },
      options,
    );
  }
}

export namespace RecommendationsApi {
  export type GetFulfillWithWfsRecommendationsRequest = {
    /**
     * Filters items by customer favorite status. When set to `true`, only customer favorites are
     * returned. When set to `false`, only non-favorites are returned. If omitted, all items are
     * returned.
     */
    customerFavorite?: boolean;
    /**
     * Shows aggregate recommendation values for all items.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default false
     */
    showInsights?: boolean;
    /**
     * The maximum number of SKUs to include in the response (1–300). If you omit this parameter,
     * Walmart returns up to 30 SKUs.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 30
     */
    limit?: number;
    /**
     * The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the
     * first SKU.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 0
     */
    offset?: number;
    /**
     * The attribute to be used in sorting the response.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default "estimatedSalesLift"
     */
    sortBy?: string;
    /**
     * The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order
     * of value. Default is "DESC.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default SortOrder.Desc
     */
    sortOrder?: SortOrder;
    /**
     * Shows insights you have hidden.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default false
     */
    showHiddenRecordsOnly?: boolean;
    /**
     * Specifies the literal **application/json**. This value identifies the content type of the
     * request body.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    contentType: string;
    /**
     * Only supported Media Type : application/json.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    accept: string;
    /**
     * Global version for API compatibility.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmGlobalVersion: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmMarket: string;
    /**
     * Seller identifier.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmAuditOriginSource: string;
  };

  export class GetFulfillWithWfsRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse2", ErrorResponse2>
      | Declared<"errorResponse22", ErrorResponse2>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFulfillWithWfsRecommendationsError> = [
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponse2Schema } },
      { on: 500, kind: "errorResponse22", decode: { kind: "json", schema: errorResponse2Schema } },
    ];
  }

  export type GetRestockRecommendationsRequest = {
    /**
     * Filters items by customer favorite status. When set to `true`, only customer favorites are
     * returned. When set to `false`, only non-favorites are returned. If omitted, all items are
     * returned.
     */
    customerFavorite?: boolean;
    /**
     * Shows aggregate recommendation values for all items.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default true
     */
    showInsights?: boolean;
    /**
     * The maximum number of SKUs to include in the response (1–300). If you omit this parameter,
     * Walmart returns up to 30 SKUs.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 30
     */
    limit?: number;
    /**
     * The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the
     * first SKU.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 0
     */
    offset?: number;
    /**
     * The attribute to be used in sorting the response.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default "forecastedSalesLift"
     */
    sortBy?: string;
    /**
     * The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order
     * of value. Default is "DESC.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default SortOrder.Desc
     */
    sortOrder?: SortOrder;
    /**
     * Shows insights you have hidden.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default false
     */
    showHiddenRecordsOnly?: boolean;
    /**
     * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step
     * two of the integration steps.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    authorization: string;
    /**
     * Specifies the literal **application/json**. This value identifies the content type of the
     * request body.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    contentType: string;
    /**
     * Only supported Media Type : application/json.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    accept: string;
    /**
     * Global version for API compatibility.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmGlobalVersion: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmMarket: string;
    /**
     * Seller identifier.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmAuditOriginSource: string;
  };

  export class GetRestockRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse2", ErrorResponse2>
      | Declared<"errorResponse22", ErrorResponse2>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRestockRecommendationsError> = [
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponse2Schema } },
      { on: 500, kind: "errorResponse22", decode: { kind: "json", schema: errorResponse2Schema } },
    ];
  }

  export type GetShipmentQuantityRecommendationsRequest = {
    /**
     * Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step
     * two of the integration steps.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    authorization: string;
    /**
     * The access token retrieved in the Token API call
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmSvcName: string;
    /**
     * Only supported Media Type : application/json.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    accept: string;
    /**
     * Global version for API compatibility.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmGlobalVersion: string;
    /**
     * Market identifier.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmMarket: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmConsumerChannelType?: string;
    /**
     * Request body containing GTINs or SKUs to retrieve the quantity limit.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    body: V3WfsRecommendationShipmentQuantityRequest;
  };

  export class GetShipmentQuantityRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse2", ErrorResponse2>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"errorResponse22", ErrorResponse2>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetShipmentQuantityRecommendationsError> = [
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponse2Schema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      { on: 500, kind: "errorResponse22", decode: { kind: "json", schema: errorResponse2Schema } },
    ];
  }

  export type GetUnpublishedRecommendationsRequest = {
    /**
     * Filters items by customer favorite status. When set to `true`, only customer favorites are
     * returned. When set to `false`, only non-favorites are returned. If omitted, all items are
     * returned.
     */
    customerFavorite?: boolean;
    /**
     * Shows aggregate recommendation values for all items.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default false
     */
    showInsights?: boolean;
    /**
     * The maximum number of SKUs to include in the response (1–300). If you omit this parameter,
     * Walmart returns up to 30 SKUs.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 30
     */
    limit?: number;
    /**
     * The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the
     * first SKU.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default 0
     */
    offset?: number;
    /**
     * The attribute to be used in sorting the response.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default "estimatedSalesLift"
     */
    sortBy?: string;
    /**
     * The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order
     * of value. Default is "DESC.
     *
     * <b style='color: green;'>Market availability: US only</b>
     *
     * @default SortOrder.Desc
     */
    sortOrder?: SortOrder;
    /**
     * Specifies the literal **application/json**. This value identifies the content type of the
     * request body.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    contentType: string;
    /**
     * Only supported Media Type : application/json.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    accept: string;
    /**
     * Global version for API compatibility.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmGlobalVersion: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmMarket: string;
    /**
     * Seller identifier.
     *
     * <b style='color: green;'>Market availability: US only</b>
     */
    wmAuditOriginSource: string;
  };

  export class GetUnpublishedRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse2", ErrorResponse2>
      | Declared<"errorResponse22", ErrorResponse2>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUnpublishedRecommendationsError> = [
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponse2Schema } },
      { on: 500, kind: "errorResponse22", decode: { kind: "json", schema: errorResponse2Schema } },
    ];
  }
}
