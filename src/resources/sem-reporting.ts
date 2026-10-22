import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  semBillingHistoryRequestSchema,
  type SemBillingHistoryRequest,
} from "../models/sem-billing-history-request.js";
import {
  semBillingHistoryResponseSchema,
  type SemBillingHistoryResponse,
} from "../models/sem-billing-history-response.js";
import {
  semCampaignLevelReportResponseSchema,
  type SemCampaignLevelReportResponse,
} from "../models/sem-campaign-level-report-response.js";
import { semErrorResponse400Schema, type SemErrorResponse400 } from "../models/sem-error-response400.js";
import {
  semItemLevelReportResponseSchema,
  type SemItemLevelReportResponse,
} from "../models/sem-item-level-report-response.js";
import { semReportRequestSchema, type SemReportRequest } from "../models/sem-report-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving SEM campaign performance reports
 */
export class SemReporting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get billing history
   *
   * @remarks
   * This API allows you to fetch your billing history.<br><b style='color:green;'>Market
   * availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemReporting.GetBillingHistoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingHistory(
    request: SemReporting.GetBillingHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SemBillingHistoryResponse, SemReporting.GetBillingHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/billing-history"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => semBillingHistoryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: semBillingHistoryResponseSchema },
        errorFactory: SemReporting.GetBillingHistoryError,
      },
      options,
    );
  }

  /**
   * Get campaign-level performance data
   *
   * @remarks
   * This API allows you to fetch comprehensive performance metrics for all campaigns, allowing you
   * to analyze key performance indicators based on specified filtering and sorting criteria.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemReporting.GetCampaignLevelSummaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignLevelSummary(
    request: SemReporting.GetCampaignLevelSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCampaignLevelReportResponse, SemReporting.GetCampaignLevelSummaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/performance-summary"),
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
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => semReportRequestSchema)) },
      },
      {
        success: { kind: "json", schema: semCampaignLevelReportResponseSchema },
        errorFactory: SemReporting.GetCampaignLevelSummaryError,
      },
      options,
    );
  }

  /**
   * Get item-level performance data
   *
   * @remarks
   * This API allows you to fetch comprehensive performance metrics for all the items in a specific
   * campaign, allowing you to analyze key performance indicators based on specified filtering and
   * sorting criteria.<br><b style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemReporting.GetItemLevelSummaryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemLevelSummary(
    request: SemReporting.GetItemLevelSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<SemItemLevelReportResponse, SemReporting.GetItemLevelSummaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/campaigns/{campaignId}/item-level-summary"),
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
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => semReportRequestSchema)) },
      },
      {
        success: { kind: "json", schema: semItemLevelReportResponseSchema },
        errorFactory: SemReporting.GetItemLevelSummaryError,
      },
      options,
    );
  }
}

export namespace SemReporting {
  export type GetBillingHistoryRequest = {
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
    body?: SemBillingHistoryRequest;
  };

  export class GetBillingHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingHistoryError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type GetCampaignLevelSummaryRequest = {
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
    body?: SemReportRequest;
  };

  export class GetCampaignLevelSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignLevelSummaryError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type GetItemLevelSummaryRequest = {
    /** Campaign ID of the campaign whose item-level performance report is to be retrieved. */
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
    body?: SemReportRequest;
  };

  export class GetItemLevelSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Declared<"semErrorResponse4003", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemLevelSummaryError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 404, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4003", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }
}
