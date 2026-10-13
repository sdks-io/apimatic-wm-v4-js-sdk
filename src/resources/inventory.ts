import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkUpdateInventoryRequestSchema,
  type BulkUpdateInventoryRequest,
} from "../models/bulk-update-inventory-request.js";
import {
  bulkUpdateInventoryResponseSchema,
  type BulkUpdateInventoryResponse,
} from "../models/bulk-update-inventory-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  getInventorySummariesResponseSchema,
  type GetInventorySummariesResponse,
} from "../models/get-inventory-summaries-response.js";
import { inventorySummarySchema, type InventorySummary } from "../models/inventory-summary.js";
import {
  updateInventoryRequestSchema,
  type UpdateInventoryRequest,
} from "../models/update-inventory-request.js";
import {
  updateInventoryResponseSchema,
  type UpdateInventoryResponse,
} from "../models/update-inventory-response.js";
import type { Servers } from "../servers.js";

export class Inventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update inventory for multiple SKUs in a single request
   *
   * @remarks
   * Bulk inventory update. Max 500 items per request.
   *
   * @returns Bulk update accepted
   *
   * @throws {@link Inventory.BulkUpdateInventoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateInventory(
    request: Inventory.BulkUpdateInventoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateInventoryResponse, Inventory.BulkUpdateInventoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inventory/v4/items/bulk"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpdateInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateInventoryResponseSchema },
        errorFactory: Inventory.BulkUpdateInventoryError,
      },
      options,
    );
  }

  /**
   * Returns inventory summary for a single SKU
   *
   * @returns Success
   *
   * @throws {@link Inventory.GetInventoryForSkuError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInventoryForSku(
    request: Inventory.GetInventoryForSkuRequest,
    options?: RequestOptions,
  ): ApiPromise<InventorySummary, Inventory.GetInventoryForSkuError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inventory/v4/items/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sku", value: request.sku, schema: s.string() }],
        query: [{ name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inventorySummarySchema },
        errorFactory: Inventory.GetInventoryForSkuError,
      },
      options,
    );
  }

  /**
   * Returns a list of inventory summaries for seller items
   *
   * @returns Success
   *
   * @throws {@link Inventory.GetInventorySummariesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInventorySummaries(
    request: Inventory.GetInventorySummariesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetInventorySummariesResponse, Inventory.GetInventorySummariesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inventory/v4/items"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "skus", value: request.skus, schema: s.optional(s.string()) },
          { name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getInventorySummariesResponseSchema },
        errorFactory: Inventory.GetInventorySummariesError,
      },
      options,
    );
  }

  /**
   * Update inventory quantity for a single SKU
   *
   * @returns Inventory updated successfully
   *
   * @throws {@link Inventory.UpdateInventoryForSkuError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInventoryForSku(
    request: Inventory.UpdateInventoryForSkuRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateInventoryResponse, Inventory.UpdateInventoryForSkuError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/inventory/v4/items/{sku}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sku", value: request.sku, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInventoryResponseSchema },
        errorFactory: Inventory.UpdateInventoryForSkuError,
      },
      options,
    );
  }
}

export namespace Inventory {
  export type BulkUpdateInventoryRequestParams = {
    body: BulkUpdateInventoryRequest;
  };

  export class BulkUpdateInventoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<BulkUpdateInventoryError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetInventoryForSkuRequest = {
    sku: string;
    /** Walmart Ship Node ID (for multi-node sellers) */
    shipNode?: string;
  };

  export class GetInventoryForSkuError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetInventoryForSkuError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetInventorySummariesRequest = {
    /** Comma-separated seller SKUs (max 50) */
    skus?: string;
    /** Walmart Ship Node ID (for multi-node sellers) */
    shipNode?: string;
    /** @default 100 */
    pageSize?: number;
    nextToken?: string;
  };

  export class GetInventorySummariesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetInventorySummariesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type UpdateInventoryForSkuRequest = {
    sku: string;
    body: UpdateInventoryRequest;
  };

  export class UpdateInventoryForSkuError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateInventoryForSkuError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
