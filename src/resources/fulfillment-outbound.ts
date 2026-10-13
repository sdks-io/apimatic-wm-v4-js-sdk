import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelFulfillmentOrderResponseSchema,
  type CancelFulfillmentOrderResponse,
} from "../models/cancel-fulfillment-order-response.js";
import {
  createFulfillmentOrderRequestSchema,
  type CreateFulfillmentOrderRequest,
} from "../models/create-fulfillment-order-request.js";
import {
  createFulfillmentOrderResponseSchema,
  type CreateFulfillmentOrderResponse,
} from "../models/create-fulfillment-order-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  getFulfillmentOrderResponseSchema,
  type GetFulfillmentOrderResponse,
} from "../models/get-fulfillment-order-response.js";
import {
  getFulfillmentOrderShipmentsResponseSchema,
  type GetFulfillmentOrderShipmentsResponse,
} from "../models/get-fulfillment-order-shipments-response.js";
import {
  getFulfillmentPreviewRequestSchema,
  type GetFulfillmentPreviewRequest,
} from "../models/get-fulfillment-preview-request.js";
import {
  getFulfillmentPreviewResponseSchema,
  type GetFulfillmentPreviewResponse,
} from "../models/get-fulfillment-preview-response.js";
import {
  listAllFulfillmentOrdersResponseSchema,
  type ListAllFulfillmentOrdersResponse,
} from "../models/list-all-fulfillment-orders-response.js";
import {
  updateFulfillmentOrderRequestSchema,
  type UpdateFulfillmentOrderRequest,
} from "../models/update-fulfillment-order-request.js";
import {
  updateFulfillmentOrderResponseSchema,
  type UpdateFulfillmentOrderResponse,
} from "../models/update-fulfillment-order-response.js";
import type { Servers } from "../servers.js";

export class FulfillmentOutbound {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Requests that Walmart stop attempting to fulfil the fulfillment order
   *
   * @returns Cancellation request submitted
   *
   * @throws {@link FulfillmentOutbound.CancelFulfillmentOrderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelFulfillmentOrder(
    request: FulfillmentOutbound.CancelFulfillmentOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelFulfillmentOrderResponse, FulfillmentOutbound.CancelFulfillmentOrderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1(
          "/wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerFulfillmentOrderId", value: request.sellerFulfillmentOrderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelFulfillmentOrderResponseSchema },
        errorFactory: FulfillmentOutbound.CancelFulfillmentOrderError,
      },
      options,
    );
  }

  /**
   * Requests that Walmart ship items from the seller's inventory in WFS
   *
   * @returns Fulfillment order created
   *
   * @throws {@link FulfillmentOutbound.CreateFulfillmentOrderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFulfillmentOrder(
    request: FulfillmentOutbound.CreateFulfillmentOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateFulfillmentOrderResponse, FulfillmentOutbound.CreateFulfillmentOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/wfs/outbound/v4/fulfillmentOrders"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFulfillmentOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: createFulfillmentOrderResponseSchema },
        errorFactory: FulfillmentOutbound.CreateFulfillmentOrderError,
      },
      options,
    );
  }

  /**
   * Returns the fulfillment order indicated by the sellerFulfillmentOrderId
   *
   * @returns Success
   *
   * @throws {@link FulfillmentOutbound.GetFulfillmentOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFulfillmentOrder(
    request: FulfillmentOutbound.GetFulfillmentOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderResponse, FulfillmentOutbound.GetFulfillmentOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerFulfillmentOrderId", value: request.sellerFulfillmentOrderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderResponseSchema },
        errorFactory: FulfillmentOutbound.GetFulfillmentOrderError,
      },
      options,
    );
  }

  /**
   * Returns shipment information for a fulfillment order
   *
   * @returns Success
   *
   * @throws {@link FulfillmentOutbound.GetFulfillmentOrderShipmentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFulfillmentOrderShipments(
    request: FulfillmentOutbound.GetFulfillmentOrderShipmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderShipmentsResponse, FulfillmentOutbound.GetFulfillmentOrderShipmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}/shipments",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerFulfillmentOrderId", value: request.sellerFulfillmentOrderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderShipmentsResponseSchema },
        errorFactory: FulfillmentOutbound.GetFulfillmentOrderShipmentsError,
      },
      options,
    );
  }

  /**
   * Returns a list of fulfillment order previews based on shipping criteria
   *
   * @remarks
   * Returns estimated delivery dates, shipping costs, and available ship nodes for a prospective
   * fulfillment order. Use before creating the order.
   *
   * @returns Success
   *
   * @throws {@link FulfillmentOutbound.GetFulfillmentPreviewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFulfillmentPreview(
    request: FulfillmentOutbound.GetFulfillmentPreviewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentPreviewResponse, FulfillmentOutbound.GetFulfillmentPreviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/wfs/outbound/v4/fulfillmentOrders/preview"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getFulfillmentPreviewRequestSchema },
      },
      {
        success: { kind: "json", schema: getFulfillmentPreviewResponseSchema },
        errorFactory: FulfillmentOutbound.GetFulfillmentPreviewError,
      },
      options,
    );
  }

  /**
   * Returns a list of fulfillment orders fulfilled after (or at) a specified date
   *
   * @returns Success
   *
   * @throws {@link FulfillmentOutbound.ListAllFulfillmentOrdersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllFulfillmentOrders(
    request: FulfillmentOutbound.ListAllFulfillmentOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAllFulfillmentOrdersResponse, FulfillmentOutbound.ListAllFulfillmentOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/wfs/outbound/v4/fulfillmentOrders"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "queryStartDate", value: request.queryStartDate, schema: s.optional(s.dateTime()) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAllFulfillmentOrdersResponseSchema },
        errorFactory: FulfillmentOutbound.ListAllFulfillmentOrdersError,
      },
      options,
    );
  }

  /**
   * Updates and/or requests shipment for a fulfillment order with an INCOMPLETE status
   *
   * @returns Order updated
   *
   * @throws {@link FulfillmentOutbound.UpdateFulfillmentOrderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFulfillmentOrder(
    request: FulfillmentOutbound.UpdateFulfillmentOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateFulfillmentOrderResponse, FulfillmentOutbound.UpdateFulfillmentOrderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}"),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "sellerFulfillmentOrderId", value: request.sellerFulfillmentOrderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFulfillmentOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: updateFulfillmentOrderResponseSchema },
        errorFactory: FulfillmentOutbound.UpdateFulfillmentOrderError,
      },
      options,
    );
  }
}

export namespace FulfillmentOutbound {
  export type CancelFulfillmentOrderRequest = {
    sellerFulfillmentOrderId: string;
  };

  export class CancelFulfillmentOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelFulfillmentOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateFulfillmentOrderRequestParams = {
    body: CreateFulfillmentOrderRequest;
  };

  export class CreateFulfillmentOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateFulfillmentOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetFulfillmentOrderRequest = {
    sellerFulfillmentOrderId: string;
  };

  export class GetFulfillmentOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetFulfillmentOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetFulfillmentOrderShipmentsRequest = {
    sellerFulfillmentOrderId: string;
  };

  export class GetFulfillmentOrderShipmentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetFulfillmentOrderShipmentsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetFulfillmentPreviewRequestParams = {
    body: GetFulfillmentPreviewRequest;
  };

  export class GetFulfillmentPreviewError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetFulfillmentPreviewError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListAllFulfillmentOrdersRequest = {
    queryStartDate?: Date;
    nextToken?: string;
  };

  export class ListAllFulfillmentOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListAllFulfillmentOrdersError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type UpdateFulfillmentOrderRequestParams = {
    sellerFulfillmentOrderId: string;
    body: UpdateFulfillmentOrderRequest;
  };

  export class UpdateFulfillmentOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateFulfillmentOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
