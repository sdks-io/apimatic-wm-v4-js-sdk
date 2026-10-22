import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { semCatalogueResponseSchema, type SemCatalogueResponse } from "../models/sem-catalogue-response.js";
import { semErrorResponse400Schema, type SemErrorResponse400 } from "../models/sem-error-response400.js";
import {
  semItemEligibilityRequestSchema,
  type SemItemEligibilityRequest,
} from "../models/sem-item-eligibility-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing catalog items for SEM campaigns
 */
export class SemCatalog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check eligibility of items
   *
   * @remarks
   * This API allows you to check whether an item from your catalog meets the required conditions
   * for Search Engine Marketing ads.<br><b style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCatalog.GetEligibleItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEligibleItems(
    request: SemCatalog.GetEligibleItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCatalogueResponse, SemCatalog.GetEligibleItemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/items/eligibility"),
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
        body: { kind: "json", value: request.body, schema: semItemEligibilityRequestSchema },
      },
      {
        success: { kind: "json", schema: semCatalogueResponseSchema },
        errorFactory: SemCatalog.GetEligibleItemsError,
      },
      options,
    );
  }

  /**
   * Get top recommended items from your catalog
   *
   * @remarks
   * This API allows you to fetch a list of top recommended items from your catalog. You can
   * customize the number of recommendations to be returned by adjusting the request
   * parameter.<br><b style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link SemCatalog.GetItemRecommendationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemRecommendations(
    request: SemCatalog.GetItemRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<SemCatalogueResponse, SemCatalog.GetItemRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/advertising/sem/items/recommendations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) }],
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
        success: { kind: "json", schema: semCatalogueResponseSchema },
        errorFactory: SemCatalog.GetItemRecommendationsError,
      },
      options,
    );
  }
}

export namespace SemCatalog {
  export type GetEligibleItemsRequest = {
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
    body: SemItemEligibilityRequest;
  };

  export class GetEligibleItemsError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEligibleItemsError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }

  export type GetItemRecommendationsRequest = {
    /**
     * Specifies the maximum number of recommended items to be returned. This value cannot exceed
     * 200.
     *
     * @default 100
     */
    limit?: number;
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

  export class GetItemRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"semErrorResponse400", SemErrorResponse400>
      | Declared<"semErrorResponse4002", SemErrorResponse400>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemRecommendationsError> = [
      { on: 400, kind: "semErrorResponse400", decode: { kind: "json", schema: semErrorResponse400Schema } },
      { on: 500, kind: "semErrorResponse4002", decode: { kind: "json", schema: semErrorResponse400Schema } },
    ];
  }
}
