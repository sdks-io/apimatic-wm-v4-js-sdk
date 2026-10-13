import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  feesEstimateByIdRequestSchema,
  type FeesEstimateByIdRequest,
} from "../models/fees-estimate-by-id-request.js";
import { feesEstimateResultSchema, type FeesEstimateResult } from "../models/fees-estimate-result.js";
import {
  getMyFeesEstimateRequestSchema,
  type GetMyFeesEstimateRequest,
} from "../models/get-my-fees-estimate-request.js";
import {
  getMyFeesEstimateResponseSchema,
  type GetMyFeesEstimateResponse,
} from "../models/get-my-fees-estimate-response.js";
import type { Servers } from "../servers.js";

/**
 * Fee estimate operations for seller items
 */
export class ProductFees {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns fee estimate for a single item by Walmart Item ID
   *
   * @remarks
   * Returns an estimated fee for a single item identified by Walmart Item ID. Walmart Item ID
   * replaces the SP-API ASIN path parameter.
   *
   * SP-API equivalent: `getMyFeesEstimateForASIN` (identifier changed from ASIN to Walmart Item ID;
   * request/response shape is otherwise 1:1).
   *
   * @returns Success
   *
   * @throws {@link ProductFees.GetMyFeesEstimateForItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMyFeesEstimateForItem(
    request: ProductFees.GetMyFeesEstimateForItemRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/products/fees/v4/items/{WalmartItemId}/feesEstimate"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "WalmartItemId", value: request.walmartItemId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getMyFeesEstimateRequestSchema },
      },
      {
        success: { kind: "json", schema: getMyFeesEstimateResponseSchema },
        errorFactory: ProductFees.GetMyFeesEstimateForItemError,
      },
      options,
    );
  }

  /**
   * Returns fee estimate for a single item by Seller SKU
   *
   * @remarks
   * Returns an estimated fee for a seller listing identified by Seller SKU.
   *
   * @returns Success
   *
   * @throws {@link ProductFees.GetMyFeesEstimateForSkuError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMyFeesEstimateForSku(
    request: ProductFees.GetMyFeesEstimateForSkuRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForSkuError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/products/fees/v4/listings/{SellerSKU}/feesEstimate"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "SellerSKU", value: request.sellerSku, schema: s.string() }],
        query: [{ name: "MarketplaceId", value: request.marketplaceId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getMyFeesEstimateRequestSchema },
      },
      {
        success: { kind: "json", schema: getMyFeesEstimateResponseSchema },
        errorFactory: ProductFees.GetMyFeesEstimateForSkuError,
      },
      options,
    );
  }

  /**
   * Returns fee estimates for a list of items
   *
   * @remarks
   * Returns estimated Walmart fees for a list of items identified by Walmart Item ID or Seller SKU.
   *
   * @returns Success
   *
   * @throws {@link ProductFees.GetMyFeesEstimatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMyFeesEstimates(
    request: ProductFees.GetMyFeesEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<FeesEstimateResult[], ProductFees.GetMyFeesEstimatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/products/fees/v4/feesEstimate"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => feesEstimateByIdRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => feesEstimateResultSchema)) },
        errorFactory: ProductFees.GetMyFeesEstimatesError,
      },
      options,
    );
  }
}

export namespace ProductFees {
  export type GetMyFeesEstimateForItemRequest = {
    /** The Walmart Item ID of the item. Replaces SP-API ASIN. */
    walmartItemId: string;
    body: GetMyFeesEstimateRequest;
  };

  export class GetMyFeesEstimateForItemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetMyFeesEstimateForItemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetMyFeesEstimateForSkuRequest = {
    /** The seller's SKU for the listing. Scoped to the authenticated seller. */
    sellerSku: string;
    /** Marketplace identifier. */
    marketplaceId: string;
    body: GetMyFeesEstimateRequest;
  };

  export class GetMyFeesEstimateForSkuError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetMyFeesEstimateForSkuError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetMyFeesEstimatesRequest = {
    body: FeesEstimateByIdRequest[];
  };

  export class GetMyFeesEstimatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetMyFeesEstimatesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
