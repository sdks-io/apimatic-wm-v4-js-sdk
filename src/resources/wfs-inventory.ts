import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  getWfsInventoryResponseSchema,
  type GetWfsInventoryResponse,
} from "../models/get-wfs-inventory-response.js";
import type { Servers } from "../servers.js";

export class WfsInventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns WFS-managed inventory with fulfillment insights
   *
   * @remarks
   * Returns inventory for items managed by Walmart Fulfillment Services (WFS). Includes stock
   * health, age buckets, and demand-intelligence fields not available on seller-fulfilled
   * inventory.
   *
   * **Rate limit:** 300 items per page maximum. Requests retrieving more than 100 items per page
   * will receive `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.
   *
   * @returns Success
   *
   * @throws {@link WfsInventory.GetWfsInventoryItemsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWfsInventoryItems(
    request: WfsInventory.GetWfsInventoryItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetWfsInventoryResponse, WfsInventory.GetWfsInventoryItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inventory/v4/wfs/items"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "skus", value: request.skus, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getWfsInventoryResponseSchema },
        errorFactory: WfsInventory.GetWfsInventoryItemsError,
      },
      options,
    );
  }
}

export namespace WfsInventory {
  export type GetWfsInventoryItemsRequest = {
    /** Comma-separated seller SKUs to filter (max 50). Omit to return all WFS items. */
    skus?: string;
    /** @default 100 */
    pageSize?: number;
    nextToken?: string;
  };

  export class GetWfsInventoryItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetWfsInventoryItemsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
