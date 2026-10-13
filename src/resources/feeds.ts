import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cancelFeedResponseSchema, type CancelFeedResponse } from "../models/cancel-feed-response.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { createFeedResponseSchema, type CreateFeedResponse } from "../models/create-feed-response.js";
import { errorList1Schema, type ErrorList1 } from "../models/error-list1.js";
import { feedStatusSchema, type FeedStatus } from "../models/feed-status.js";
import { feedTypeSchema, type FeedType } from "../models/feed-type.js";
import { feedSchema, type Feed } from "../models/feed.js";
import { getFeedsResponseSchema, type GetFeedsResponse } from "../models/get-feeds-response.js";
import type { Servers } from "../servers.js";

export class Feeds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels a feed that has not yet finished processing
   *
   * @remarks
   * **Placeholder — not yet implemented.** Cancels the feed identified by feedId if it is still
   * queued or in progress. Mirrors Amazon SP-API `cancelFeed` (DELETE
   * /feeds/2021-06-30/feeds/{feedId}) so partners can generate a client against the final contract
   * now. A feed that has already reached DONE or ERROR cannot be cancelled.
   *
   * @returns Cancellation accepted
   *
   * @throws {@link Feeds.CancelFeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelFeed(
    request: Feeds.CancelFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelFeedResponse, Feeds.CancelFeedError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/feeds/v4/feeds/{feedId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "feedId", value: request.feedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelFeedResponseSchema },
        errorFactory: Feeds.CancelFeedError,
      },
      options,
    );
  }

  /**
   * Submit a feed file for asynchronous processing
   *
   * @remarks
   * Upload a feed file and submit it for asynchronous processing in a single call. The server
   * handles document storage internally. Use the returned feedId to poll processing status via GET
   * /feeds/v4/feeds/{feedId}.
   *
   * @returns Feed accepted for processing
   *
   * @throws {@link Feeds.CreateFeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFeed(
    request: Feeds.CreateFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateFeedResponse, Feeds.CreateFeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/feeds/v4/feeds"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "feedType", value: request.feedType, schema: feedTypeSchema },
          { name: "marketplaceId", value: request.marketplaceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "contentType",
              value: request.contentType,
              schema: s.optional(s.lazy(() => contentTypeSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: createFeedResponseSchema },
        errorFactory: Feeds.CreateFeedError,
      },
      options,
    );
  }

  /**
   * Returns feed details (including processing status) for the feed
   *
   * @returns Success
   *
   * @throws {@link Feeds.GetFeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeed(request: Feeds.GetFeedRequest, options?: RequestOptions): ApiPromise<Feed, Feeds.GetFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/feeds/v4/feeds/{feedId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "feedId", value: request.feedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: feedSchema },
        errorFactory: Feeds.GetFeedError,
      },
      options,
    );
  }

  /**
   * Downloads the feed document as a binary file from PDR
   *
   * @remarks
   * Downloads the raw feed document file. The response is a binary stream
   * (application/octet-stream). The Content-Disposition header contains the original filename when
   * available. Content-Length header is always set to enable download progress tracking.
   *
   * An IDOR check is performed before the download — the authenticated seller must own the feed
   * referenced by feedId.
   *
   * @returns Binary file stream
   *
   * @throws {@link Feeds.GetFeedDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeedDocument(
    request: Feeds.GetFeedDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Feeds.GetFeedDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/feeds/v4/feeds/{feedId}/document"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "feedId", value: request.feedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Feeds.GetFeedDocumentError,
      },
      options,
    );
  }

  /**
   * Returns feed details for the feeds that match the filters
   *
   * @returns Success
   *
   * @throws {@link Feeds.GetFeedsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeeds(
    request: Feeds.GetFeedsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFeedsResponse, Feeds.GetFeedsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/feeds/v4/feeds"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          {
            name: "feedTypes",
            value: request.feedTypes,
            schema: s.optional(s.array(s.lazy(() => feedTypeSchema))),
          },
          {
            name: "feedStatuses",
            value: request.feedStatuses,
            schema: s.optional(s.array(s.lazy(() => feedStatusSchema))),
          },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.dateTime()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.dateTime()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFeedsResponseSchema },
        errorFactory: Feeds.GetFeedsError,
      },
      options,
    );
  }
}

export namespace Feeds {
  export type CancelFeedRequest = {
    feedId: string;
  };

  export class CancelFeedError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList1", ErrorList1>
      | Declared<"errorList12", ErrorList1>
      | Declared<"errorList13", ErrorList1>
      | Declared<"errorList14", ErrorList1>
      | Declared<"errorList15", ErrorList1>
    >;

    static readonly errors: ErrorDecoders<CancelFeedError> = [
      { on: 400, kind: "errorList1", decode: { kind: "json", schema: errorList1Schema } },
      { on: 403, kind: "errorList12", decode: { kind: "json", schema: errorList1Schema } },
      { on: 404, kind: "errorList13", decode: { kind: "json", schema: errorList1Schema } },
      { on: 429, kind: "errorList14", decode: { kind: "json", schema: errorList1Schema } },
      { on: 500, kind: "errorList15", decode: { kind: "json", schema: errorList1Schema } },
    ];
  }

  export type CreateFeedRequest = {
    /** The type of feed being submitted */
    feedType: FeedType;
    /** Marketplace identifier (opaque token). If omitted, the service applies WALMART_US. */
    marketplaceId?: string;
    /** The feed content file to upload and process */
    file: FileInput;
    /**
     * MIME type of the uploaded feed content. If omitted, the server infers from the file's
     * Content-Type in the multipart header.
     */
    contentType?: ContentType;
  };

  export class CreateFeedError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList1", ErrorList1>
      | Declared<"errorList12", ErrorList1>
      | Declared<"errorList13", ErrorList1>
      | Declared<"errorList14", ErrorList1>
    >;

    static readonly errors: ErrorDecoders<CreateFeedError> = [
      { on: 400, kind: "errorList1", decode: { kind: "json", schema: errorList1Schema } },
      { on: 403, kind: "errorList12", decode: { kind: "json", schema: errorList1Schema } },
      { on: 429, kind: "errorList13", decode: { kind: "json", schema: errorList1Schema } },
      { on: 500, kind: "errorList14", decode: { kind: "json", schema: errorList1Schema } },
    ];
  }

  export type GetFeedRequest = {
    feedId: string;
  };

  export class GetFeedError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList1", ErrorList1>
      | Declared<"errorList12", ErrorList1>
      | Declared<"errorList13", ErrorList1>
      | Declared<"errorList14", ErrorList1>
      | Declared<"errorList15", ErrorList1>
    >;

    static readonly errors: ErrorDecoders<GetFeedError> = [
      { on: 400, kind: "errorList1", decode: { kind: "json", schema: errorList1Schema } },
      { on: 403, kind: "errorList12", decode: { kind: "json", schema: errorList1Schema } },
      { on: 404, kind: "errorList13", decode: { kind: "json", schema: errorList1Schema } },
      { on: 429, kind: "errorList14", decode: { kind: "json", schema: errorList1Schema } },
      { on: 500, kind: "errorList15", decode: { kind: "json", schema: errorList1Schema } },
    ];
  }

  export type GetFeedDocumentRequest = {
    feedId: string;
  };

  export class GetFeedDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList1", ErrorList1>
      | Declared<"errorList12", ErrorList1>
      | Declared<"errorList13", ErrorList1>
      | Declared<"errorList14", ErrorList1>
      | Declared<"errorList15", ErrorList1>
    >;

    static readonly errors: ErrorDecoders<GetFeedDocumentError> = [
      { on: 400, kind: "errorList1", decode: { kind: "json", schema: errorList1Schema } },
      { on: 403, kind: "errorList12", decode: { kind: "json", schema: errorList1Schema } },
      { on: 404, kind: "errorList13", decode: { kind: "json", schema: errorList1Schema } },
      { on: 429, kind: "errorList14", decode: { kind: "json", schema: errorList1Schema } },
      { on: 500, kind: "errorList15", decode: { kind: "json", schema: errorList1Schema } },
    ];
  }

  export type GetFeedsRequest = {
    /** Feed type filter */
    feedTypes?: FeedType[];
    feedStatuses?: FeedStatus[];
    createdSince?: Date;
    createdUntil?: Date;
    /** @default 10 */
    pageSize?: number;
    nextToken?: string;
  };

  export class GetFeedsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList1", ErrorList1>
      | Declared<"errorList12", ErrorList1>
      | Declared<"errorList13", ErrorList1>
      | Declared<"errorList14", ErrorList1>
    >;

    static readonly errors: ErrorDecoders<GetFeedsError> = [
      { on: 400, kind: "errorList1", decode: { kind: "json", schema: errorList1Schema } },
      { on: 403, kind: "errorList12", decode: { kind: "json", schema: errorList1Schema } },
      { on: 429, kind: "errorList13", decode: { kind: "json", schema: errorList1Schema } },
      { on: 500, kind: "errorList14", decode: { kind: "json", schema: errorList1Schema } },
    ];
  }
}
