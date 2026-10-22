import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import {
  campaignRecommendationsSearchRequestSchema,
  type CampaignRecommendationsSearchRequest,
} from "../models/campaign-recommendations-search-request.js";
import {
  campaignRecommendationsSearchResponseSchema,
  type CampaignRecommendationsSearchResponse,
} from "../models/campaign-recommendations-search-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { errorResponse429Schema, type ErrorResponse429 } from "../models/error-response429.js";
import {
  semCampaignCreateRequestSchema,
  type SemCampaignCreateRequest,
} from "../models/sem-campaign-create-request.js";
import { semCampaignResponseSchema, type SemCampaignResponse } from "../models/sem-campaign-response.js";
import {
  semCampaignUpdateRequestSchema,
  type SemCampaignUpdateRequest,
} from "../models/sem-campaign-update-request.js";
import { semCampaignSchema, type SemCampaign } from "../models/sem-campaign.js";
import { semErrorResponse400Schema, type SemErrorResponse400 } from "../models/sem-error-response400.js";
import { WmGlobalVersion, wmGlobalVersionSchema } from "../models/wm-global-version.js";
import { WmMarket, wmMarketSchema } from "../models/wm-market.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing Search Engine Marketing campaigns
 */
export class SemCampaignManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new campaign
   *
   * @remarks
   * This API allows you to create a new campaign by providing the required details in the request.
   * Upon successful creation, a unique campaign ID will be assigned to the newly created campaign
   * for identification and management purposes.<br><b style='color:green;'>Market availability: US
   * only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCampaignManagement.CreateCampaignError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCampaign(
    request: SemCampaignManagement.CreateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaignResponse, SemCampaignManagement.CreateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: semCampaignCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: semCampaignResponseSchema },
        errorFactory: SemCampaignManagement.CreateCampaignError,
      },
      options,
    );
  }

  /**
   * Delete an existing campaign
   *
   * @remarks
   * This API allows you to permanently remove an existing campaign from the system. Once deleted,
   * the campaign and its unique ID will no longer be retrievable. The campaign's unique ID must be
   * included in the request.<br><b style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCampaignManagement.DeleteCampaignError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCampaign(
    request: SemCampaignManagement.DeleteCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaignResponse, SemCampaignManagement.DeleteCampaignError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/{campaignId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
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
        success: { kind: "json", schema: semCampaignResponseSchema },
        errorFactory: SemCampaignManagement.DeleteCampaignError,
      },
      options,
    );
  }

  /**
   * Get campaign details
   *
   * @remarks
   * This API allows you to retrieve detailed information about a specific campaign. Provide the
   * campaign's unique ID in the request to fetch its attributes.<br><b style='color:green;'>Market
   * availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCampaignManagement.GetCampaignDetailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignDetails(
    request: SemCampaignManagement.GetCampaignDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaign, SemCampaignManagement.GetCampaignDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/{campaignId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: semCampaignSchema },
        errorFactory: SemCampaignManagement.GetCampaignDetailsError,
      },
      options,
    );
  }

  /**
   * Search campaign recommendations
   *
   * @remarks
   * Search for campaign-level recommendations to improve SEM campaign performance. Returns a
   * paginated list of active campaigns for the authenticated seller, each enriched with actionable
   * recommendations — including budget adjustments and bidding strategy optimizations — along with
   * projected performance impact metrics (clicks, impressions, ad spend).<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * ### Why this API matters
   * SEM campaigns require continuous optimization to stay competitive. Budget constraints and
   * suboptimal bidding strategies are the two most common reasons campaigns underperform. Without
   * data-driven guidance, sellers either overspend without results or miss revenue opportunities by
   * underspending.
   *
   * This API bridges that gap by surfacing **machine-generated recommendations** for each active
   * campaign, complete with projected impact on clicks, impressions, and ad spend. Partners can
   * integrate these recommendations into their dashboards and automation pipelines to:
   * - **Increase ROAS**: Apply budget and bidding strategy recommendations to maximize return on ad
   *   spend
   * - **Reduce wasted spend**: Identify campaigns where budget is being underutilized or
   *   misallocated
   * - **Automate campaign tuning**: Build automated workflows that periodically fetch
   *   recommendations and apply them programmatically, reducing manual effort and reaction time
   * - **Enable data-driven decisions**: Each recommendation includes three impact scenarios
   *   (recommended, conservative, aggressive) so sellers can choose the option that fits their risk
   *   tolerance
   *
   * ### Key use cases
   * 1. **Campaign Health Dashboard**: Display campaigns with pending recommendations, color-coded
   *    by type (`BUDGET` vs `BIDDING_STRATEGY`), with projected impact metrics
   * 2. **Automated Budget Optimizer**: Periodically poll this API and auto-apply budget
   *    recommendations that meet a minimum projected ROAS threshold
   * 3. **Bidding Strategy Advisor**: Surface bidding strategy change suggestions to sellers with
   *    before/after performance projections
   * 4. **Bulk Campaign Management**: Retrieve all recommendations across campaigns in a single
   *    paginated call, enabling batch review and bulk application of changes
   *
   * ### How it works
   * The API returns only active campaigns that are eligible for recommendations. You can filter
   * results using `campaignIds` or `recommendationType` (`BUDGET` or `BIDDING_STRATEGY`).
   *
   * ### Default behavior
   * - When no request body is provided, the API defaults to `offset=0`, `limit=10`.
   * - By default, the API returns recommendations for both `BUDGET` and `BIDDING_STRATEGY`.
   * - Results are not sorted by default; use the sort object to order by adspend.
   * - Returns only **active campaigns** that have at least one pending recommendation
   * - Results are not sorted by default; use the `sort` object to order by `adspend`
   *
   * ### Supported filters
   * Filters are combined with AND logic. Multiple values within a single filter act as OR.
   *
   * | Filter Field              | Supported Values              | Description                                              |
   * |---------------------------|-------------------------------|----------------------------------------------------------|
   * | `campaignIds`             | Numeric string campaign IDs   | Filter by specific campaign identifiers                  |
   * | `recommendationType`  | `BUDGET`, `BIDDING_STRATEGY`  | Filter by recommendation type                            |
   *
   * ### Sorting
   * Results can be sorted using the `sort` object:
   *
   * | Sort Field | Supported Orders | Description                              |
   * |------------|------------------|------------------------------------------|
   * | `adspend`  | `ASC`, `DESC`    | Sort campaigns by ad spend               |
   *
   * ### Recommendation types
   * | Type               | Description                                                              |
   * |--------------------|--------------------------------------------------------------------------|
   * | `BUDGET`           | Recommended total or daily budget adjustment to improve campaign reach    |
   * | `BIDDING_STRATEGY` | Recommended change to bidding strategy for better performance            |
   *
   * ### Response structure
   * Each response contains two top-level fields:
   * - `pagination`: Standard pagination metadata (`pageNo`, `pageSize`, `totalCount`, `totalPages`,
   *   `hasNextPage`, `hasPreviousPage`)
   * - `data`: Array of campaign-level suggestions. Each campaign includes current settings (bidding
   *   strategy, target ROAS, daily budget) and an array of `campaignRecommendations` with projected
   *   performance impact at three levels: recommended, minimum, and maximum.
   *
   * ### Performance impact projections
   * Each recommendation includes a `recommendedValueImpact` object with up to three scenarios:
   * - **recommended**: The optimal suggested value (marked `isRecommended: true`)
   * - **minRecommendation**: A conservative lower-bound option (may be `null` if not applicable)
   * - **maxRecommendation**: An aggressive upper-bound option
   *
   * @returns Campaign recommendations retrieved successfully
   *
   * @throws {@link SemCampaignManagement.SearchCampaignRecommendationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCampaignRecommendations(
    request: SemCampaignManagement.SearchCampaignRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CampaignRecommendationsSearchResponse,
    SemCampaignManagement.SearchCampaignRecommendationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/recommendations/search"),
        auth: this.#auth.accessToken,
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
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationJson),
          },
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
          schema: s.optional(s.lazy(() => campaignRecommendationsSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: campaignRecommendationsSearchResponseSchema },
        errorFactory: SemCampaignManagement.SearchCampaignRecommendationsError,
      },
      options,
    );
  }

  /**
   * Stop a running campaign
   *
   * @remarks
   * This API allows you to stop an active campaign. Stopping a campaign does not delete it but
   * prevents further actions. The campaign's unique ID must be included in the request.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCampaignManagement.StopCampaignError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopCampaign(
    request: SemCampaignManagement.StopCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaignResponse, SemCampaignManagement.StopCampaignError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/{campaignId}/stop"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
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
        success: { kind: "json", schema: semCampaignResponseSchema },
        errorFactory: SemCampaignManagement.StopCampaignError,
      },
      options,
    );
  }

  /**
   * Update an existing campaign
   *
   * @remarks
   * This API allows you to modify an existing campaign's details and manage its associated items.
   * You must provide the campaign's unique ID along with the necessary changes in the request. The
   * specified updates will be applied while preserving the campaign's unique identifier.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCampaignManagement.UpdateCampaignError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaign(
    request: SemCampaignManagement.UpdateCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaignResponse, SemCampaignManagement.UpdateCampaignError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/{campaignId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaignId", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: semCampaignUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: semCampaignResponseSchema },
        errorFactory: SemCampaignManagement.UpdateCampaignError,
      },
      options,
    );
  }
}

export namespace SemCampaignManagement {
  export type CreateCampaignRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Request Payload */
    body: SemCampaignCreateRequest;
  };

  export class CreateCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCampaignError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type DeleteCampaignRequest = {
    /** Campaign ID of the campaign to be deleted. */
    campaignId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class DeleteCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Declared<"semErrorResponse4003", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCampaignError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 404, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4003", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type GetCampaignDetailsRequest = {
    /** Campaign ID of the campaign whose details are to be retrieved. */
    campaignId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class GetCampaignDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Declared<"semErrorResponse4003", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignDetailsError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 404, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4003", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type SearchCampaignRecommendationsRequest = {
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
    /** The expected response content type. @default Accept.ApplicationJson */
    accept?: Accept;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /**
     * Optional search request with pagination, sorting, and filters. Defaults to `offset=0`,
     * `limit=10` with no filters and no sorting if body is absent.
     */
    body?: CampaignRecommendationsSearchRequest;
  };

  export class SearchCampaignRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse429", ErrorResponse429>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCampaignRecommendationsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse429", decode: { kind: "json", schema: errorResponse429Schema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type StopCampaignRequest = {
    /** Campaign ID of the campaign to be stopped. */
    campaignId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class StopCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Declared<"semErrorResponse4003", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopCampaignError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 404, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4003", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type UpdateCampaignRequest = {
    /** Campaign ID of the campaign to be updated. */
    campaignId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Request Payload */
    body: SemCampaignUpdateRequest;
  };

  export class UpdateCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Declared<"semErrorResponse4003", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCampaignError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 404, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4003", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }
}
