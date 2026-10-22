import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { assetsResponseSchema, type AssetsResponse } from "../models/assets-response.js";
import { feedId1Schema, type FeedId1 } from "../models/feed-id1.js";
import { richMediaFeedRequestSchema, type RichMediaFeedRequest } from "../models/rich-media-feed-request.js";
import { richMediaTypeSchema, type RichMediaType } from "../models/rich-media-type.js";
import type { Servers } from "../servers.js";

export class RichMedia {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all assets
   *
   * @remarks
   * Use this API to retrieve rich media assets, including 360-spin images and videos, from the
   * seller catalog. Assets can be created in seller center media library or programmatically
   * through the API. Use this endpoint to retrieve the asset hash, which uniquely identifies each
   * media asset for future management.
   *
   * <b style="color: green;">Market availability: US only</b>
   *
   * @returns Successful operation. Returns matching rich media assets. When no items match the
   * query, the response contains an empty payload and total records as 0.
   *
   * @throws {@link RichMedia.GetAllAssetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAssets(
    request: RichMedia.GetAllAssetsRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetsResponse, RichMedia.GetAllAssetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/items/assets"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "linkedGtins", value: request.linkedGtins, schema: s.optional(s.array(s.string())) },
          { name: "richMediaTitle", value: request.richMediaTitle, schema: s.optional(s.string()) },
          {
            name: "richMediaType",
            value: request.richMediaType,
            schema: s.optional(s.lazy(() => richMediaTypeSchema)),
          },
        ],
        headers: [
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
        success: { kind: "json", schema: assetsResponseSchema },
        errorFactory: RichMedia.GetAllAssetsError,
      },
      options,
    );
  }

  /**
   * Manage rich media assets (Add, Edit, Delete)
   *
   * @remarks
   * Use this API to create, update, or delink rich media assets for items in the seller catalog.
   * Supported asset types are `IMAGES360` and `VIDEO`. Use this API to 1) add new rich media, 2)
   * update associations for existing rich media, or 3) delink item association on existing rich
   * media. Provide accessible media URLs and related metadata in the request body. Video assets
   * require one video URL. 360-spin image assets require 24 image URLs.
   *
   * <b style="color: green;">Market availability: US only</b>
   *
   * @returns Successful — The feed accepted and queued for processing
   *
   * @throws {@link RichMedia.RichMediaOperationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  richMediaOperation(
    request: RichMedia.RichMediaOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId1, RichMedia.RichMediaOperationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=OMNI_RICH_MEDIA"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: richMediaFeedRequestSchema },
      },
      {
        success: { kind: "json", schema: feedId1Schema },
        errorFactory: RichMedia.RichMediaOperationError,
      },
      options,
    );
  }
}

export namespace RichMedia {
  export type GetAllAssetsRequest = {
    /**
     * Indicates the page number to return in the paginated result set. Use this parameter to
     * navigate through multiple pages of results. The value should be a positive integer. For
     * example, 1 for the first page, 2 for the second, and so on.
     *
     * <b style="color: green;">Market availability: US only</b>
     *
     * @default 1
     */
    page?: number;
    /**
     * Defines the maximum number of items to return per page when retrieving paginated data. Use
     * this parameter to control the number of results included in a single page. The value should
     * be a positive integer.
     *
     * <b style="color: green;">Market availability: US only</b>
     *
     * @default 25
     */
    limit?: number;
    /**
     * Filters assets by linked GTIN. Provide multiple GTINs as a list. If omitted, all assets are
     * returned.
     *
     * <b style="color: green;">Market availability: US only</b>
     */
    linkedGtins?: string[];
    /**
     * Filters assets by rich media title or asset title. If omitted, all assets are returned.
     *
     * <b style="color: green;">Market availability: US only</b>
     */
    richMediaTitle?: string;
    /**
     * Filters assets by rich media type. Allowed values: `IMAGES360`, `VIDEO`.
     *
     * <b style="color: green;">Market availability: US only</b>
     */
    richMediaType?: RichMediaType;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the consumer channel type
     * received during onboarding.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetAllAssetsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAssetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RichMediaOperationRequest = {
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the consumer channel type
     * received during onboarding.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Rich media feed payload containing asset metadata, item associations, and media URLs. */
    body: RichMediaFeedRequest;
  };

  export class RichMediaOperationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RichMediaOperationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
