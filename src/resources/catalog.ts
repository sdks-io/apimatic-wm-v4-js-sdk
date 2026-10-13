import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { includedDatumSchema, type IncludedDatum } from "../models/included-datum.js";
import { itemSearchResultsSchema, type ItemSearchResults } from "../models/item-search-results.js";
import { itemSchema, type Item } from "../models/item.js";
import type { Servers } from "../servers.js";

export class Catalog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve details for an item in the Walmart Marketplace catalog
   *
   * @returns Success
   *
   * @throws {@link Catalog.GetCatalogItemError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCatalogItem(
    request: Catalog.GetCatalogItemRequest,
    options?: RequestOptions,
  ): ApiPromise<Item, Catalog.GetCatalogItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/catalog/v4/items/{walmartItemId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "walmartItemId", value: request.walmartItemId, schema: s.string() }],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          {
            name: "includedData",
            value: request.includedData,
            schema: s.optional(s.array(s.lazy(() => includedDatumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemSchema },
        errorFactory: Catalog.GetCatalogItemError,
      },
      options,
    );
  }

  /**
   * Search for items in the Walmart Marketplace catalog
   *
   * @remarks
   * Search the Walmart Marketplace catalog using keywords, WalmartItemId, GTIN, UPC, or seller SKU.
   * Returns matching catalog items.
   *
   * @returns Success
   *
   * @throws {@link Catalog.SearchCatalogItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCatalogItems(
    request: Catalog.SearchCatalogItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemSearchResults, Catalog.SearchCatalogItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/catalog/v4/items"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "keywords", value: request.keywords, schema: s.optional(s.string()) },
          { name: "walmartItemIds", value: request.walmartItemIds, schema: s.optional(s.string()) },
          { name: "sellerSku", value: request.sellerSku, schema: s.optional(s.string()) },
          { name: "gtin", value: request.gtin, schema: s.optional(s.string()) },
          { name: "upc", value: request.upc, schema: s.optional(s.string()) },
          {
            name: "includedData",
            value: request.includedData,
            schema: s.optional(s.array(s.lazy(() => includedDatumSchema))),
          },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemSearchResultsSchema },
        errorFactory: Catalog.SearchCatalogItemsError,
      },
      options,
    );
  }
}

export namespace Catalog {
  export type GetCatalogItemRequest = {
    /** Walmart Item ID (14-digit numeric identifier) */
    walmartItemId: string;
    /** Walmart marketplace identifiers. Use WALMART_US for the US marketplace. */
    marketplaceIds: string[];
    /** Data sections to include in the response */
    includedData?: IncludedDatum[];
  };

  export class GetCatalogItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetCatalogItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SearchCatalogItemsRequest = {
    /** Walmart marketplace identifiers. Use WALMART_US for the US marketplace. */
    marketplaceIds: string[];
    /** Keyword search terms */
    keywords?: string;
    /** Comma-separated Walmart Item IDs (14-digit). Max 20. */
    walmartItemIds?: string;
    /** Seller-defined SKU */
    sellerSku?: string;
    /** Global Trade Item Number (14-digit) */
    gtin?: string;
    /** Universal Product Code (12-digit) */
    upc?: string;
    /** Data sections to include in the response */
    includedData?: IncludedDatum[];
    /**
     * Number of results per page (1–20). **Known limitation:** The PIQS keyword search backend
     * hard-caps results at 40 items per call regardless of this value.
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * Token for the next page of results, obtained from `pagination.nextToken` in a previous
     * response. **Known limitation:** Cursor-based pagination is not currently supported for
     * keyword search. The PIQS search backend (`/v3/items/walmart/search`) does not return a
     * `nextCursor` and does not honour this parameter. Results are capped at 40 items per call.
     * Reserved for future use once PIQS exposes pagination support.
     */
    pageToken?: string;
  };

  export class SearchCatalogItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SearchCatalogItemsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
