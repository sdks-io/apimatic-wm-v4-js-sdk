import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { includedDatum1Schema, type IncludedDatum1 } from "../models/included-datum1.js";
import { itemSearchResults1Schema, type ItemSearchResults1 } from "../models/item-search-results1.js";
import { item1Schema, type Item1 } from "../models/item1.js";
import {
  listingsItemPatchRequestSchema,
  type ListingsItemPatchRequest,
} from "../models/listings-item-patch-request.js";
import {
  listingsItemPutRequestSchema,
  type ListingsItemPutRequest,
} from "../models/listings-item-put-request.js";
import {
  listingsItemSubmissionResponseSchema,
  type ListingsItemSubmissionResponse,
} from "../models/listings-item-submission-response.js";
import type { Servers } from "../servers.js";

export class ListingsItems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Deletes a listings item for a seller
   *
   * @returns Successfully submitted
   *
   * @throws {@link ListingsItems.DeleteListingsItemError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteListingsItem(
    request: ListingsItems.DeleteListingsItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.DeleteListingsItemError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/listings/v4/items/{sellerId}/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerId", value: request.sellerId, schema: s.string() },
          { name: "sku", value: request.sku, schema: s.string() },
        ],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "issueLocale", value: request.issueLocale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listingsItemSubmissionResponseSchema },
        errorFactory: ListingsItems.DeleteListingsItemError,
      },
      options,
    );
  }

  /**
   * Returns details about a listings item for a seller
   *
   * @returns Success
   *
   * @throws {@link ListingsItems.GetListingsItemError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingsItem(
    request: ListingsItems.GetListingsItemRequest,
    options?: RequestOptions,
  ): ApiPromise<Item1, ListingsItems.GetListingsItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/listings/v4/items/{sellerId}/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerId", value: request.sellerId, schema: s.string() },
          { name: "sku", value: request.sku, schema: s.string() },
        ],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "issueLocale", value: request.issueLocale, schema: s.defaulted(s.string(), "en_US") },
          {
            name: "includedData",
            value: request.includedData,
            schema: s.optional(s.array(s.lazy(() => includedDatum1Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: item1Schema },
        errorFactory: ListingsItems.GetListingsItemError,
      },
      options,
    );
  }

  /**
   * Partially updates (patches) a listings item for a seller
   *
   * @returns Successfully submitted
   *
   * @throws {@link ListingsItems.PatchListingsItemError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchListingsItem(
    request: ListingsItems.PatchListingsItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.PatchListingsItemError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default1("/listings/v4/items/{sellerId}/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerId", value: request.sellerId, schema: s.string() },
          { name: "sku", value: request.sku, schema: s.string() },
        ],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "issueLocale", value: request.issueLocale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: listingsItemPatchRequestSchema },
      },
      {
        success: { kind: "json", schema: listingsItemSubmissionResponseSchema },
        errorFactory: ListingsItems.PatchListingsItemError,
      },
      options,
    );
  }

  /**
   * Creates or fully updates an existing listings item for a seller
   *
   * @returns Successfully submitted
   *
   * @throws {@link ListingsItems.PutListingsItemError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putListingsItem(
    request: ListingsItems.PutListingsItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.PutListingsItemError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/listings/v4/items/{sellerId}/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerId", value: request.sellerId, schema: s.string() },
          { name: "sku", value: request.sku, schema: s.string() },
        ],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "issueLocale", value: request.issueLocale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: listingsItemPutRequestSchema },
      },
      {
        success: { kind: "json", schema: listingsItemSubmissionResponseSchema },
        errorFactory: ListingsItems.PutListingsItemError,
      },
      options,
    );
  }

  /**
   * Search a seller's listings items
   *
   * @remarks
   * Returns a paginated list of the seller's listings items. Mirrors Amazon SP-API
   * `searchListingsItems` so an existing SP-API client can call the seller-level collection
   * endpoint (no SKU in the path) against v4.
   *
   * @returns Success
   *
   * @throws {@link ListingsItems.SearchListingsItemsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchListingsItems(
    request: ListingsItems.SearchListingsItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSearchResults1, ListingsItems.SearchListingsItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/listings/v4/items/{sellerId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sellerId", value: request.sellerId, schema: s.string() }],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          {
            name: "includedData",
            value: request.includedData,
            schema: s.optional(s.array(s.lazy(() => includedDatum1Schema))),
          },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemSearchResults1Schema },
        errorFactory: ListingsItems.SearchListingsItemsError,
      },
      options,
    );
  }
}

export namespace ListingsItems {
  export type DeleteListingsItemRequest = {
    /** Seller identifier */
    sellerId: string;
    /** Seller SKU identifying the listing */
    sku: string;
    marketplaceIds: string[];
    /** @default "en_US" */
    issueLocale?: string;
  };

  export class DeleteListingsItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<DeleteListingsItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetListingsItemRequest = {
    /** Seller identifier */
    sellerId: string;
    /** Seller SKU identifying the listing */
    sku: string;
    marketplaceIds: string[];
    /** Locale for issue messages (e.g. en_US) @default "en_US" */
    issueLocale?: string;
    includedData?: IncludedDatum1[];
  };

  export class GetListingsItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetListingsItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type PatchListingsItemRequest = {
    /** Seller identifier */
    sellerId: string;
    /** Seller SKU identifying the listing */
    sku: string;
    marketplaceIds: string[];
    /** @default "en_US" */
    issueLocale?: string;
    body: ListingsItemPatchRequest;
  };

  export class PatchListingsItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<PatchListingsItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type PutListingsItemRequest = {
    /** Seller identifier */
    sellerId: string;
    /** Seller SKU identifying the listing */
    sku: string;
    marketplaceIds: string[];
    /** @default "en_US" */
    issueLocale?: string;
    body: ListingsItemPutRequest;
  };

  export class PutListingsItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<PutListingsItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SearchListingsItemsRequest = {
    /** Seller identifier */
    sellerId: string;
    marketplaceIds: string[];
    includedData?: IncludedDatum1[];
    /** Maximum number of results per page @default 10 */
    pageSize?: number;
    /** Opaque cursor returned by a previous call for the next page */
    pageToken?: string;
  };

  export class SearchListingsItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SearchListingsItemsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
