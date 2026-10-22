import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponse3Schema, type ErrorResponse3 } from "../models/error-response3.js";
import { errorResponsesSchema, type ErrorResponses } from "../models/error-responses.js";
import { forbidden1Schema, type Forbidden1 } from "../models/forbidden1.js";
import { queryParamsMxSchema, type QueryParamsMx } from "../models/query-params-mx.js";
import { queryParamsSchema, type QueryParams } from "../models/query-params.js";
import { refundRequestSchema, type RefundRequest } from "../models/refund-request.js";
import { requestSchema, type Request } from "../models/request.js";
import { returnOrderResponseSchema, type ReturnOrderResponse } from "../models/return-order-response.js";
import {
  returnOrdersResponsesSchema,
  type ReturnOrdersResponses,
} from "../models/return-orders-responses.js";
import { tooManyRequests1Schema, type TooManyRequests1 } from "../models/too-many-requests1.js";
import { unauthorized1Schema, type Unauthorized1 } from "../models/unauthorized1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import { wmMarket21Schema, type WmMarket21 } from "../models/wm-market21.js";
import { wmMarket3Schema, type WmMarket3 } from "../models/wm-market3.js";
import type { Servers } from "../servers.js";

export class ReturnsRefund {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Returns
   *
   * @remarks
   * Retrieves the details of all return orders for the specified filter criteria.
   *
   * <br><b style='color:green;'>Market availability: Global</b>
   *
   * @returns success
   *
   * @throws {@link ReturnsRefund.GetReturnsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReturns(
    request: ReturnsRefund.GetReturnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ReturnOrderResponse, ReturnsRefund.GetReturnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/returns"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "Query Params", value: request.queryParams, schema: queryParamsSchema }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: returnOrderResponseSchema },
        errorFactory: ReturnsRefund.GetReturnsError,
      },
      options,
    );
  }

  /**
   * Refund Order Lines
   *
   * @remarks
   * Refunds one or more order lines that have been shipped. The response to a successful call
   * contains the order with the refunded line item.
   *
   * <br><b style='color:green;'>Market availability: US | MX</b>
   *
   * @returns success
   *
   * @throws {@link ReturnsRefund.RefundRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refundRequest(
    request: ReturnsRefund.RefundRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<Request, ReturnsRefund.RefundRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/returns/{returnOrderId}/refund"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "returnOrderId", value: request.returnOrderId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket3Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: refundRequestSchema },
      },
      {
        success: { kind: "json", schema: requestSchema },
        errorFactory: ReturnsRefund.RefundRequestError,
      },
      options,
    );
  }

  /**
   * Get all returns with cursor mark
   *
   * @remarks
   * This API retrieves the details of all return orders based on the specified filter criteria and
   * returns all orders in the response. It returns a nextCursorMark for the next 100 orders, and
   * continues in this manner until the last order. The same API can also be used to search for a
   * single order based on returnOrderId or customerOrderId.<br><b style='color:green;'>Market
   * availability: MX</b>
   *
   * @returns success
   *
   * @throws {@link ReturnsRefund.ReturnOrderCursorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  returnOrderCursor(
    request: ReturnsRefund.ReturnOrderCursorRequest,
    options?: RequestOptions,
  ): ApiPromise<ReturnOrdersResponses, ReturnsRefund.ReturnOrderCursorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/returns/cursor"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "Query Params", value: request.queryParams, schema: queryParamsMxSchema }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket21Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: returnOrdersResponsesSchema },
        errorFactory: ReturnsRefund.ReturnOrderCursorError,
      },
      options,
    );
  }
}

export namespace ReturnsRefund {
  export type GetReturnsRequest = {
    queryParams: QueryParams;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. Example: Walmart Marketplace<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export class GetReturnsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse3", ErrorResponse3>
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Declared<"errorResponses", ErrorResponses>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReturnsError> = [
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponse3Schema } },
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
      { on: 500, kind: "errorResponses", decode: { kind: "json", schema: errorResponsesSchema } },
    ];
  }

  export type RefundRequestRequest = {
    /**
     * Return order identifier of the return order object as part of array. This is the same as RMA
     * number.<br><b style='color:green;'>Market availability: US | MX</b>
     */
    returnOrderId: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b
     * style='color:green;'>Market availability: US | MX</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. Example: Walmart Marketplace<br><b
     * style='color:green;'>Market availability: US | MX</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: US | MX</b>
     */
    wmMarket: WmMarket3;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.<br><b
     * style='color:green;'>Market availability: US | MX</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: US | MX</b>
     */
    wmConsumerChannelType?: string;
    body: RefundRequest;
  };

  export class RefundRequestError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse3", ErrorResponse3>
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Declared<"errorResponses", ErrorResponses>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefundRequestError> = [
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponse3Schema } },
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
      { on: 500, kind: "errorResponses", decode: { kind: "json", schema: errorResponsesSchema } },
    ];
  }

  export type ReturnOrderCursorRequest = {
    queryParams: QueryParamsMx;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b
     * style='color:green;'>Market availability: MX</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. Example: Walmart Marketplace<br><b
     * style='color:green;'>Market availability: MX</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request.<br><b style='color:green;'>Market
     * availability: MX</b>
     */
    wmMarket: WmMarket21;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.<br><b
     * style='color:green;'>Market availability: MX</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: MX</b>
     */
    wmConsumerChannelType?: string;
  };

  export class ReturnOrderCursorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse3", ErrorResponse3>
      | Declared<"unauthorized1", Unauthorized1>
      | Declared<"forbidden1", Forbidden1>
      | Declared<"tooManyRequests1", TooManyRequests1>
      | Declared<"errorResponses", ErrorResponses>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReturnOrderCursorError> = [
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponse3Schema } },
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
      { on: 403, kind: "forbidden1", decode: { kind: "json", schema: forbidden1Schema } },
      { on: 429, kind: "tooManyRequests1", decode: { kind: "json", schema: tooManyRequests1Schema } },
      { on: 500, kind: "errorResponses", decode: { kind: "json", schema: errorResponsesSchema } },
    ];
  }
}
