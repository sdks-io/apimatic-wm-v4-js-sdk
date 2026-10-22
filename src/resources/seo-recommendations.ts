import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { decisionSchema, type Decision } from "../models/decision.js";
import { status2Schema, type Status2 } from "../models/status2.js";
import {
  v3SeoRecommendationGetItemsRequestSchema,
  type V3SeoRecommendationGetItemsRequest,
} from "../models/v3-seo-recommendation-get-items-request.js";
import {
  v3SeoRecommendationGetItemsResponseSchema,
  type V3SeoRecommendationGetItemsResponse,
} from "../models/v3-seo-recommendation-get-items-response.js";
import {
  v3SeoRecommendationGetItems400Error1Schema,
  type V3SeoRecommendationGetItems400Error1,
} from "../models/v3-seo-recommendation-get-items400-error1.js";
import {
  v3SeoRecommendationGetItems500Error1Schema,
  type V3SeoRecommendationGetItems500Error1,
} from "../models/v3-seo-recommendation-get-items500-error1.js";
import {
  v3SeoRecommendationUpdateItemsRequestSchema,
  type V3SeoRecommendationUpdateItemsRequest,
} from "../models/v3-seo-recommendation-update-items-request.js";
import {
  v3SeoRecommendationUpdateItemsResponseSchema,
  type V3SeoRecommendationUpdateItemsResponse,
} from "../models/v3-seo-recommendation-update-items-response.js";
import {
  v3SeoRecommendationUpdateItems400Error1Schema,
  type V3SeoRecommendationUpdateItems400Error1,
} from "../models/v3-seo-recommendation-update-items400-error1.js";
import {
  v3SeoRecommendationUpdateItems404Error1Schema,
  type V3SeoRecommendationUpdateItems404Error1,
} from "../models/v3-seo-recommendation-update-items404-error1.js";
import {
  v3SeoRecommendationUpdateItems500Error1Schema,
  type V3SeoRecommendationUpdateItems500Error1,
} from "../models/v3-seo-recommendation-update-items500-error1.js";
import type { Servers } from "../servers.js";

export class SeoRecommendations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get SEO Recommendations
   *
   * @remarks
   * Get list of items with SEO recommendations. Sellers can filter items by status (all, new,
   * accepted, rejected), search for specific items using identifiers like (itemId, sku, or name)
   * and paginate results for large datasets..
   *
   * @returns OK. The request was successful. The server returned the requested data.
   *
   * @throws {@link SeoRecommendations.GetSeoRecommendationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSeoRecommendations(
    request: SeoRecommendations.GetSeoRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3SeoRecommendationGetItemsResponse, SeoRecommendations.GetSeoRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/seo/recommendation/getItems"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status2Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "previous_cursor", value: request.previousCursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
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
          schema: s.optional(s.lazy(() => v3SeoRecommendationGetItemsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: v3SeoRecommendationGetItemsResponseSchema },
        errorFactory: SeoRecommendations.GetSeoRecommendationsError,
      },
      options,
    );
  }

  /**
   * Update SEO recommendation decision
   *
   * @remarks
   * Sellers can accept or reject SEO recommendations with optimal feedback for rejected
   * recommendations
   *
   * @returns OK. The SEO recommendation update was successful
   *
   * @throws {@link SeoRecommendations.UpdateSeoRecommendationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSeoRecommendations(
    request: SeoRecommendations.UpdateSeoRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3SeoRecommendationUpdateItemsResponse, SeoRecommendations.UpdateSeoRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/seo/recommendation/updateItems/{itemId}/{decision}"),
        auth: this.#auth.accessToken,
        pathParams: [
          { name: "itemId", value: request.itemId, schema: s.string() },
          { name: "decision", value: request.decision, schema: decisionSchema },
        ],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "Accept", value: request.accept, schema: s.string() },
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
          schema: s.optional(s.lazy(() => v3SeoRecommendationUpdateItemsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: v3SeoRecommendationUpdateItemsResponseSchema },
        errorFactory: SeoRecommendations.UpdateSeoRecommendationsError,
      },
      options,
    );
  }
}

export namespace SeoRecommendations {
  export type GetSeoRecommendationsRequest = {
    /**
     * Specifies the type of items to retrieve. Default when type not provided it will return new
     * items.
     */
    status?: Status2;
    /**
     * Specify number of items to return. If no limit is specified, API returns 200 items by
     * default.
     */
    limit?: string;
    /** Link to go to the next page */
    nextCursor?: string;
    /** Link to go to the previous page */
    previousCursor?: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /** Only supported Media Type : application/json */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
    /** This will contain the wild card search related details */
    body?: V3SeoRecommendationGetItemsRequest;
  };

  export class GetSeoRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"v3SeoRecommendationGetItems400Error1", V3SeoRecommendationGetItems400Error1>
      | Declared<"v3SeoRecommendationGetItems500Error1", V3SeoRecommendationGetItems500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSeoRecommendationsError> = [
      {
        on: 400,
        kind: "v3SeoRecommendationGetItems400Error1",
        decode: { kind: "json", schema: v3SeoRecommendationGetItems400Error1Schema },
      },
      {
        on: 500,
        kind: "v3SeoRecommendationGetItems500Error1",
        decode: { kind: "json", schema: v3SeoRecommendationGetItems500Error1Schema },
      },
    ];
  }

  export type UpdateSeoRecommendationsRequest = {
    /** Unique Item Identifier */
    itemId: string;
    /** approve/reject a recommendation */
    decision: Decision;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /** Only supported Media Type : application/json */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
    /** Additional details required for submission */
    body?: V3SeoRecommendationUpdateItemsRequest;
  };

  export class UpdateSeoRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"v3SeoRecommendationUpdateItems400Error1", V3SeoRecommendationUpdateItems400Error1>
      | Declared<"v3SeoRecommendationUpdateItems404Error1", V3SeoRecommendationUpdateItems404Error1>
      | Declared<"v3SeoRecommendationUpdateItems500Error1", V3SeoRecommendationUpdateItems500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSeoRecommendationsError> = [
      {
        on: 400,
        kind: "v3SeoRecommendationUpdateItems400Error1",
        decode: { kind: "json", schema: v3SeoRecommendationUpdateItems400Error1Schema },
      },
      {
        on: 404,
        kind: "v3SeoRecommendationUpdateItems404Error1",
        decode: { kind: "json", schema: v3SeoRecommendationUpdateItems404Error1Schema },
      },
      {
        on: 500,
        kind: "v3SeoRecommendationUpdateItems500Error1",
        decode: { kind: "json", schema: v3SeoRecommendationUpdateItems500Error1Schema },
      },
    ];
  }
}
