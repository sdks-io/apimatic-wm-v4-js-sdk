import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponse1Schema, type ErrorResponse1 } from "../models/error-response1.js";
import {
  v3GrowthAssortmentRecommendationsCategorizationCountsRequestSchema,
  type V3GrowthAssortmentRecommendationsCategorizationCountsRequest,
} from "../models/v3-growth-assortment-recommendations-categorization-counts-request.js";
import {
  v3GrowthAssortmentRecommendationsCategorizationCountsResponseSchema,
  type V3GrowthAssortmentRecommendationsCategorizationCountsResponse,
} from "../models/v3-growth-assortment-recommendations-categorization-counts-response.js";
import {
  v3GrowthAssortmentRecommendationsRejectionsRequestSchema,
  type V3GrowthAssortmentRecommendationsRejectionsRequest,
} from "../models/v3-growth-assortment-recommendations-rejections-request.js";
import {
  v3GrowthAssortmentRecommendationsRejectionsResponseSchema,
  type V3GrowthAssortmentRecommendationsRejectionsResponse,
} from "../models/v3-growth-assortment-recommendations-rejections-response.js";
import {
  v3GrowthAssortmentRecommendationsRequestSchema,
  type V3GrowthAssortmentRecommendationsRequest,
} from "../models/v3-growth-assortment-recommendations-request.js";
import {
  v3GrowthAssortmentRecommendationsResponseSchema,
  type V3GrowthAssortmentRecommendationsResponse,
} from "../models/v3-growth-assortment-recommendations-response.js";
import {
  v3GrowthAssortmentRecommendationsTrendsResponseSchema,
  type V3GrowthAssortmentRecommendationsTrendsResponse,
} from "../models/v3-growth-assortment-recommendations-trends-response.js";
import {
  v3GrowthAssortmentRecommendationsVariantsResponseSchema,
  type V3GrowthAssortmentRecommendationsVariantsResponse,
} from "../models/v3-growth-assortment-recommendations-variants-response.js";
import { v3Token500Error1Schema, type V3Token500Error1 } from "../models/v3-token500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class AssortmentRecommendations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Recommendation Trends
   *
   * @remarks
   * You can fetch the monthly and weekly trends for both demand and price, for the assortment
   * recommendations that are recommended for you. <br><b style='color:green;'>Market availability:
   * US only</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link AssortmentRecommendations.GetAssortmentRecommendationTrendsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAssortmentRecommendationTrends(
    request: AssortmentRecommendations.GetAssortmentRecommendationTrendsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3GrowthAssortmentRecommendationsTrendsResponse,
    AssortmentRecommendations.GetAssortmentRecommendationTrendsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/growth/assortment/recommendations/trends"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "recommendationUniqueId", value: request.recommendationUniqueId, schema: s.string() },
          { name: "trendTypes", value: request.trendTypes, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: v3GrowthAssortmentRecommendationsTrendsResponseSchema },
        errorFactory: AssortmentRecommendations.GetAssortmentRecommendationTrendsError,
      },
      options,
    );
  }

  /**
   * Get Variants
   *
   * @remarks
   * You can fetch variant items corresponding to a recommended primary variant item. <br><b
   * style='color:green;'>Market availability: US only</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link AssortmentRecommendations.GetAssortmentRecommendationVariantsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAssortmentRecommendationVariants(
    request: AssortmentRecommendations.GetAssortmentRecommendationVariantsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3GrowthAssortmentRecommendationsVariantsResponse,
    AssortmentRecommendations.GetAssortmentRecommendationVariantsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/growth/assortment/recommendations/variants"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "primaryVariantItemId", value: request.primaryVariantItemId, schema: s.string() },
          { name: "nextCursor", value: request.nextCursor, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: v3GrowthAssortmentRecommendationsVariantsResponseSchema },
        errorFactory: AssortmentRecommendations.GetAssortmentRecommendationVariantsError,
      },
      options,
    );
  }

  /**
   * Get Recommendations
   *
   * @remarks
   * You can fetch the list of recommendations that are recommended for you.
   *
   * Using ITEM as a recommendationType,
   * * You can get the list of ITEM recommendations. You can apply filters to fetch selective item
   *   recommendations. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link AssortmentRecommendations.GetAssortmentRecommendationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAssortmentRecommendations(
    request: AssortmentRecommendations.GetAssortmentRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3GrowthAssortmentRecommendationsResponse,
    AssortmentRecommendations.GetAssortmentRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/growth/assortment/recommendations"),
        auth: noneAuth,
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
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3GrowthAssortmentRecommendationsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3GrowthAssortmentRecommendationsResponseSchema },
        errorFactory: AssortmentRecommendations.GetAssortmentRecommendationsError,
      },
      options,
    );
  }

  /**
   * Get Categorization
   *
   * @remarks
   * You can get the list of brands or categories associated with the items recommendations that are
   * recommended for you.
   *
   * Using BRAND as a categorizationType
   * * You can get the list of brands sorted by the number of item recommendations associated with
   *   it. This is then sorted in lexicographic order of brand name.
   *
   * Using CATEGORY as a categorizationType
   * * You can get the list of categories sorted by the number of item recommendations associated
   *   with it. This is then sorted in lexicographic order of category name. <br><b
   *   style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link
   * AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategorizationDetailsOfAssortmentRecommendations(
    request: AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3GrowthAssortmentRecommendationsCategorizationCountsResponse,
    AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/growth/assortment/recommendations/categorization/counts"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: v3GrowthAssortmentRecommendationsCategorizationCountsRequestSchema,
        },
      },
      {
        success: {
          kind: "json",
          schema: v3GrowthAssortmentRecommendationsCategorizationCountsResponseSchema,
        },
        errorFactory: AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError,
      },
      options,
    );
  }

  /**
   * Reject Recommendations
   *
   * @remarks
   * You can reject a list of recommendations that are recommended for you.
   *
   * Using ITEM as a recommendationType,
   * * You can reject specific item recommendations using the filterCriteria or by providing the
   *   list of itemRecommendationUniqueIds.
   * * You will need to provide valid rejection code(s) while submitting the reject request. You are
   *   required to send the custom rejection message if the rejection code is OTHER_REASON <br><b
   *   style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link AssortmentRecommendations.RejectAssortmentRecommendationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rejectAssortmentRecommendations(
    request: AssortmentRecommendations.RejectAssortmentRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3GrowthAssortmentRecommendationsRejectionsResponse,
    AssortmentRecommendations.RejectAssortmentRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/growth/assortment/recommendations/rejections"),
        auth: noneAuth,
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
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: v3GrowthAssortmentRecommendationsRejectionsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: v3GrowthAssortmentRecommendationsRejectionsResponseSchema },
        errorFactory: AssortmentRecommendations.RejectAssortmentRecommendationsError,
      },
      options,
    );
  }
}

export namespace AssortmentRecommendations {
  export type GetAssortmentRecommendationTrendsRequest = {
    /**
     * Unique ID that is returned in the response of the get recommendations API or in the
     * on-request bulk CSV file. <br><b style='color:green;'>Market availability: US only</span></b>
     */
    recommendationUniqueId: string;
    /**
     * Comma separated list of trends.<br><b style='color:green;'>Market availability: US
     * only</span></b>
     *
     *  | Attribute | Description | Data Type |
     * | --- | ----------- | ------- |
     * | PRICE_TRENDS | Indicates the price trends for the recommended item in the marketplace currency for rolling 52-weeks/12-months. The data may not be available for all weeks/months. | string |
     * | DEMAND_TRENDS | Indicates the demand trends for the recommended item for 52-weeks/12-months. | string |
     */
    trendTypes?: string;
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

  export class GetAssortmentRecommendationTrendsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"errorResponse12", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssortmentRecommendationTrendsError> = [
      { on: 400, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "errorResponse12", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }

  export type GetAssortmentRecommendationVariantsRequest = {
    /**
     * Primary variant item ID that is returned in the response of get recommendations API or in the
     * on-request bulk CSV file. <br><b style='color:green;'>Market availability: US only</span></b>
     */
    primaryVariantItemId: string;
    /**
     * Used for pagination when more than 200 records are retrieved. The nextCursor value of the
     * response includes a marker which needs to be passed in next call which retrieves the next
     * page of results. <br><b style='color:green;'>Market availability: US only</span></b>
     */
    nextCursor?: string;
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

  export class GetAssortmentRecommendationVariantsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"errorResponse12", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssortmentRecommendationVariantsError> = [
      { on: 400, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "errorResponse12", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }

  export type GetAssortmentRecommendationsRequest = {
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
    /** Request payload */
    body: V3GrowthAssortmentRecommendationsRequest;
  };

  export class GetAssortmentRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"errorResponse12", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssortmentRecommendationsError> = [
      { on: 400, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "errorResponse12", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }

  export type GetCategorizationDetailsOfAssortmentRecommendationsRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID <br><b style='color:green;'>Market availability: US | CA
     * | MX</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called <br><b style='color:green;'>Market
     * availability: US | CA | MX</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The default is set to 3.1<br><b
     * style='color:green;'>Market availability: US | CA | MX</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel <br><b style='color:green;'>Market
     * availability: US | CA | MX</span></b>
     */
    wmConsumerChannelType?: string;
    /** Request payload */
    body: V3GrowthAssortmentRecommendationsCategorizationCountsRequest;
  };

  export class GetCategorizationDetailsOfAssortmentRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"errorResponse12", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategorizationDetailsOfAssortmentRecommendationsError> = [
      { on: 400, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "errorResponse12", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }

  export type RejectAssortmentRecommendationsRequest = {
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
    /** Request payload */
    body: V3GrowthAssortmentRecommendationsRejectionsRequest;
  };

  export class RejectAssortmentRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"v3Token500Error1", V3Token500Error1>
      | Declared<"errorResponse12", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RejectAssortmentRecommendationsError> = [
      { on: 400, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 403, kind: "v3Token500Error1", decode: { kind: "json", schema: v3Token500Error1Schema } },
      { on: 500, kind: "errorResponse12", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }
}
