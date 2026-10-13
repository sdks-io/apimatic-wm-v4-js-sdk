import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cancelQueryResponseSchema, type CancelQueryResponse } from "../models/cancel-query-response.js";
import { createQueryResponseSchema, type CreateQueryResponse } from "../models/create-query-response.js";
import {
  createQuerySpecificationSchema,
  type CreateQuerySpecification,
} from "../models/create-query-specification.js";
import { documentSchema, type Document } from "../models/document.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { getQueriesResponseSchema, type GetQueriesResponse } from "../models/get-queries-response.js";
import { processingStatusSchema, type ProcessingStatus } from "../models/processing-status.js";
import { querySchema, type Query } from "../models/query.js";
import type { Servers } from "../servers.js";

export class DataKiosk {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels the query indicated by the queryId (only IN_QUEUE or IN_PROGRESS)
   *
   * @returns Query cancellation accepted
   *
   * @throws {@link DataKiosk.CancelQueryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelQuery(
    request: DataKiosk.CancelQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelQueryResponse, DataKiosk.CancelQueryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/data-kiosk/v4/queries/{queryId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "queryId", value: request.queryId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelQueryResponseSchema },
        errorFactory: DataKiosk.CancelQueryError,
      },
      options,
    );
  }

  /**
   * Creates a Data Kiosk query request
   *
   * @remarks
   * Submits a structured query for async processing. Query language TBD pending ADR (GraphQL vs
   * REST hybrid — Pod 4).
   *
   * @returns Query request accepted for processing
   *
   * @throws {@link DataKiosk.CreateQueryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQuery(
    request: DataKiosk.CreateQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateQueryResponse, DataKiosk.CreateQueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/data-kiosk/v4/queries"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createQuerySpecificationSchema },
      },
      {
        success: { kind: "json", schema: createQueryResponseSchema },
        errorFactory: DataKiosk.CreateQueryError,
      },
      options,
    );
  }

  /**
   * Returns information required for retrieving a Data Kiosk document
   *
   * @remarks
   * Returns a pre-signed URL for downloading query result data. Do not log the pre-signed URL.
   *
   * @returns Success
   *
   * @throws {@link DataKiosk.GetDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocument(
    request: DataKiosk.GetDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, DataKiosk.GetDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/data-kiosk/v4/documents/{documentId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "documentId", value: request.documentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: DataKiosk.GetDocumentError,
      },
      options,
    );
  }

  /**
   * Returns details for the Data Kiosk queries that match the specified filters
   *
   * @remarks
   * Returns a paginated list of Data Kiosk queries submitted by the seller, optionally filtered by
   * processing status and creation date range.
   *
   * @returns Success
   *
   * @throws {@link DataKiosk.GetQueriesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQueries(
    request: DataKiosk.GetQueriesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetQueriesResponse, DataKiosk.GetQueriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/data-kiosk/v4/queries"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          {
            name: "processingStatuses",
            value: request.processingStatuses,
            schema: s.optional(s.array(s.lazy(() => processingStatusSchema))),
          },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.dateTime()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.dateTime()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getQueriesResponseSchema },
        errorFactory: DataKiosk.GetQueriesError,
      },
      options,
    );
  }

  /**
   * Returns details for the Data Kiosk query indicated by the queryId
   *
   * @returns Success
   *
   * @throws {@link DataKiosk.GetQueryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQuery(
    request: DataKiosk.GetQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<Query, DataKiosk.GetQueryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/data-kiosk/v4/queries/{queryId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "queryId", value: request.queryId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: querySchema },
        errorFactory: DataKiosk.GetQueryError,
      },
      options,
    );
  }
}

export namespace DataKiosk {
  export type CancelQueryRequest = {
    queryId: string;
  };

  export class CancelQueryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelQueryError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateQueryRequest = {
    body: CreateQuerySpecification;
  };

  export class CreateQueryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateQueryError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetDocumentRequest = {
    documentId: string;
  };

  export class GetDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetDocumentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetQueriesRequest = {
    processingStatuses?: ProcessingStatus[];
    /** @default 10 */
    pageSize?: number;
    createdSince?: Date;
    createdUntil?: Date;
    paginationToken?: string;
  };

  export class GetQueriesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetQueriesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetQueryRequest = {
    queryId: string;
  };

  export class GetQueryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetQueryError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
