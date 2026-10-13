import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  acknowledgeOrderRequestSchema,
  type AcknowledgeOrderRequest,
} from "../models/acknowledge-order-request.js";
import {
  acknowledgeOrderResponseSchema,
  type AcknowledgeOrderResponse,
} from "../models/acknowledge-order-response.js";
import {
  cancelOrderLinesRequestSchema,
  type CancelOrderLinesRequest,
} from "../models/cancel-order-lines-request.js";
import {
  cancelOrderLinesResponseSchema,
  type CancelOrderLinesResponse,
} from "../models/cancel-order-lines-response.js";
import {
  deliverOrderLinesRequestSchema,
  type DeliverOrderLinesRequest,
} from "../models/deliver-order-lines-request.js";
import {
  deliverOrderLinesResponseSchema,
  type DeliverOrderLinesResponse,
} from "../models/deliver-order-lines-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "../models/fulfillment-type.js";
import {
  getFulfillmentOrderResponseSchema,
  type GetFulfillmentOrderResponse,
} from "../models/get-fulfillment-order-response.js";
import {
  getFulfillmentOrderShipmentsResponseSchema,
  type GetFulfillmentOrderShipmentsResponse,
} from "../models/get-fulfillment-order-shipments-response.js";
import {
  getOrderAddressResponseSchema,
  type GetOrderAddressResponse,
} from "../models/get-order-address-response.js";
import {
  getOrderBuyerInfoResponseSchema,
  type GetOrderBuyerInfoResponse,
} from "../models/get-order-buyer-info-response.js";
import {
  getOrderRegulatedInfoResponseSchema,
  type GetOrderRegulatedInfoResponse,
} from "../models/get-order-regulated-info-response.js";
import { getOrderResponseSchema, type GetOrderResponse } from "../models/get-order-response.js";
import {
  multiPackageShipRequestSchema,
  type MultiPackageShipRequest,
} from "../models/multi-package-ship-request.js";
import {
  multiPackageShipResponseSchema,
  type MultiPackageShipResponse,
} from "../models/multi-package-ship-response.js";
import { orderStatusSchema, type OrderStatus } from "../models/order-status.js";
import {
  refundOrderLinesRequestSchema,
  type RefundOrderLinesRequest,
} from "../models/refund-order-lines-request.js";
import {
  refundOrderLinesResponseSchema,
  type RefundOrderLinesResponse,
} from "../models/refund-order-lines-response.js";
import {
  shipOrderLinesRequestSchema,
  type ShipOrderLinesRequest,
} from "../models/ship-order-lines-request.js";
import {
  shipOrderLinesResponseSchema,
  type ShipOrderLinesResponse,
} from "../models/ship-order-lines-response.js";
import {
  updateShipmentStatusRequestSchema,
  type UpdateShipmentStatusRequest,
} from "../models/update-shipment-status-request.js";
import {
  updateShipmentStatusResponseSchema,
  type UpdateShipmentStatusResponse,
} from "../models/update-shipment-status-response.js";
import {
  updateVerificationStatusRequestSchema,
  type UpdateVerificationStatusRequest,
} from "../models/update-verification-status-request.js";
import {
  updateVerificationStatusResponseSchema,
  type UpdateVerificationStatusResponse,
} from "../models/update-verification-status-response.js";
import type { Servers } from "../servers.js";

export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acknowledge receipt of an order
   *
   * @returns Success
   *
   * @throws {@link Orders.AcknowledgeOrderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acknowledgeOrder(
    request: Orders.AcknowledgeOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AcknowledgeOrderResponse, Orders.AcknowledgeOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/acknowledge"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: acknowledgeOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: acknowledgeOrderResponseSchema },
        errorFactory: Orders.AcknowledgeOrderError,
      },
      options,
    );
  }

  /**
   * Cancel order line items
   *
   * @returns Success
   *
   * @throws {@link Orders.CancelOrderLinesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOrderLines(
    request: Orders.CancelOrderLinesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelOrderLinesResponse, Orders.CancelOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/cancel"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelOrderLinesRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelOrderLinesResponseSchema },
        errorFactory: Orders.CancelOrderLinesError,
      },
      options,
    );
  }

  /**
   * Mark order line items as delivered
   *
   * @remarks
   * Records the terminal `Delivered` event for one or more order lines, optionally with
   * package-level proof-of-delivery (tracking number, package number, delivery timestamp). This is
   * separated from `/shipment-status` because delivery is a terminal state and carries different
   * downstream semantics (invoicing windows open, return windows start).
   *
   * Walmart parity from gmp-orders-mono `deliverOrder`.
   *
   * @returns Success
   *
   * @throws {@link Orders.DeliverOrderLinesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deliverOrderLines(
    request: Orders.DeliverOrderLinesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeliverOrderLinesResponse, Orders.DeliverOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/deliver"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deliverOrderLinesRequestSchema },
      },
      {
        success: { kind: "json", schema: deliverOrderLinesResponseSchema },
        errorFactory: Orders.DeliverOrderLinesError,
      },
      options,
    );
  }

  /**
   * Returns the order that you specify
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrder(
    request: Orders.GetOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOrderResponse, Orders.GetOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderResponseSchema },
        errorFactory: Orders.GetOrderError,
      },
      options,
    );
  }

  /**
   * Returns the shipping address for the order you specify
   *
   * @remarks
   * Returns the ship-to postal address for a single purchase order. Mirrors Amazon SP-API
   * `getOrderAddress`. PII-restricted endpoint: handlers are marked `@RestrictedData` server-side
   * and the response body must NOT be logged.
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrderAddressError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderAddress(
    request: Orders.GetOrderAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOrderAddressResponse, Orders.GetOrderAddressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/address"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderAddressResponseSchema },
        errorFactory: Orders.GetOrderAddressError,
      },
      options,
    );
  }

  /**
   * Returns buyer contact info for the order you specify
   *
   * @remarks
   * Returns the buyer's display name, email address, and an anonymized phone (last 4 digits only).
   * Mirrors Amazon SP-API `getOrderBuyerInfo`. PII-restricted endpoint: handlers are marked
   * `@RestrictedData` server-side and request/response bodies must NOT be logged.
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrderBuyerInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderBuyerInfo(
    request: Orders.GetOrderBuyerInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOrderBuyerInfoResponse, Orders.GetOrderBuyerInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/buyerInfo"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderBuyerInfoResponseSchema },
        errorFactory: Orders.GetOrderBuyerInfoError,
      },
      options,
    );
  }

  /**
   * Returns the line items of the order you specify
   *
   * @remarks
   * Returns the SKU / quantity / item-price projection of a single purchase order. Mirrors Amazon
   * SP-API `getOrderItems`. Not PII-restricted: only product, quantity, and price are returned.
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrderItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderItems(
    request: Orders.GetOrderItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderShipmentsResponse, Orders.GetOrderItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/items"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderShipmentsResponseSchema },
        errorFactory: Orders.GetOrderItemsError,
      },
      options,
    );
  }

  /**
   * Returns regulated-information for an age-restricted order
   *
   * @remarks
   * Parity with Amazon SP-API Orders v0 `getOrderRegulatedInfo`. Returns the verification
   * requirements that apply to an order containing regulated items (alcohol, tobacco,
   * age-restricted goods): the required ID-verification method, the minimum buyer age, the
   * regulated category, and any value-added services the order ships with.
   *
   * **Walmart OMS coverage gap .** The the underlying service Order Lookup response does not
   * currently surface regulated-item metadata. Until upstream support lands (tracked separately as
   * a follow-up to this PR), every order returns the safe default `regulatedCategory=NOT_REGULATED`
   * with `requiredVerificationMethod=NONE`. The endpoint shape and contract are stable; only the
   * projected values will become richer once OMS exposes the fields.
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrderRegulatedInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderRegulatedInfo(
    request: Orders.GetOrderRegulatedInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOrderRegulatedInfoResponse, Orders.GetOrderRegulatedInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/regulatedInfo"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderRegulatedInfoResponseSchema },
        errorFactory: Orders.GetOrderRegulatedInfoError,
      },
      options,
    );
  }

  /**
   * Returns orders created or updated during the specified time period
   *
   * @remarks
   * Returns orders matching the given filters. Orders are fulfilled by sellers (WFS or
   * seller-fulfilled). Maps to Walmart OMS order queries.
   *
   * ### Current limitations (roadmap)
   *
   * The underlying the Orders service backend does not yet support every filter declared below.
   * Calls using any of the following will return `400 Bad Request` with `code=FILTER_NOT_SUPPORTED`
   * and a human-readable `message` explaining the specific rejection. Phase 2 will lift these
   * one-by-one as the underlying service adds capability.
   *
   * | Filter | Status today | Reason |
   * |---|---|---|
   * | `createdAfter`, `createdBefore` | Rejected (400) | the Orders service does not accept date-range filters at the order level. |
   * | `lastUpdatedAfter` | Rejected (400) | the underlying service has no order-level update-date index. |
   * | `orderStatuses` with >1 value | Rejected (400) | the underlying service accepts one status per call; pass a single value or omit to match all. |
   * | `fulfillmentTypes` | Rejected (400) | the underlying service accepts one shipNodeType per call; multi-type fan-out is Phase 2. |
   *
   * These parameters remain in the contract (rather than being removed) so that SDKs generated
   * today stay forward-compatible with the the roadmap surface — your code keeps compiling, only
   * the runtime behaviour changes when Phase 2 ships. Until then, omit them or handle the
   * documented 400 gracefully. The `tools/loadgen-orders.sh --contract` smoke sweep exercises the
   * rejection contract on every run.
   *
   * @returns Success
   *
   * @throws {@link Orders.GetOrdersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrders(
    request: Orders.GetOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderResponse, Orders.GetOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/orders/v4/orders"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "lastUpdatedAfter", value: request.lastUpdatedAfter, schema: s.optional(s.dateTime()) },
          {
            name: "orderStatuses",
            value: request.orderStatuses,
            schema: s.optional(s.array(s.lazy(() => orderStatusSchema))),
          },
          {
            name: "fulfillmentTypes",
            value: request.fulfillmentTypes,
            schema: s.optional(s.array(s.lazy(() => fulfillmentTypeSchema))),
          },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderResponseSchema },
        errorFactory: Orders.GetOrdersError,
      },
      options,
    );
  }

  /**
   * Issue a seller-initiated refund for one or more order lines
   *
   * @remarks
   * Walmart-specific write — no Amazon SP-API Orders v0 equivalent (Amazon refunds live in the
   * Finance API). Mirrors gmp-orders-mono's legacy `/partner-api/{market}/v3/orders/{po}/refund`
   * contract, simplified for the v4 surface: a flat `orderLines[]` with per-line refund amount +
   * reason instead of the legacy three-level nesting (`orderLines → refunds → refundCharges`).
   *
   * @returns Success
   *
   * @throws {@link Orders.RefundOrderLinesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refundOrderLines(
    request: Orders.RefundOrderLinesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RefundOrderLinesResponse, Orders.RefundOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/refund"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: refundOrderLinesRequestSchema },
      },
      {
        success: { kind: "json", schema: refundOrderLinesResponseSchema },
        errorFactory: Orders.RefundOrderLinesError,
      },
      options,
    );
  }

  /**
   * Ship order line items and confirm shipment with tracking info
   *
   * @returns Success
   *
   * @throws {@link Orders.ShipOrderLinesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  shipOrderLines(
    request: Orders.ShipOrderLinesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ShipOrderLinesResponse, Orders.ShipOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/shipping"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: shipOrderLinesRequestSchema },
      },
      {
        success: { kind: "json", schema: shipOrderLinesResponseSchema },
        errorFactory: Orders.ShipOrderLinesError,
      },
      options,
    );
  }

  /**
   * Ship an order across multiple packages
   *
   * @remarks
   * Walmart-specific extension of `/shipping`. Each package carries its own tracking number,
   * carrier, dimensions, and the order lines it covers. Maps onto FMS's existing `shipments[]`
   * envelope (one FMS shipment per v4 package). Inspired by gmp-orders-mono's `shipOrderV2`
   * (multiPackageShipping) operation; we hoist `packages[]` to the top level rather than nesting it
   * under each line so the request stays self-evidently package-oriented.
   *
   * @returns Success
   *
   * @throws {@link Orders.ShipOrderMultiPackageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  shipOrderMultiPackage(
    request: Orders.ShipOrderMultiPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiPackageShipResponse, Orders.ShipOrderMultiPackageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/multi-package-shipping"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: multiPackageShipRequestSchema },
      },
      {
        success: { kind: "json", schema: multiPackageShipResponseSchema },
        errorFactory: Orders.ShipOrderMultiPackageError,
      },
      options,
    );
  }

  /**
   * Update the in-transit shipment status of an order
   *
   * @remarks
   * Records a non-terminal shipment-lifecycle event for an order (ready for pickup, picked up, in
   * transit, out for delivery). Use the dedicated `/deliver` endpoint for terminal delivery — it
   * carries proof-of-delivery semantics this endpoint does not.
   *
   * Amazon SP-API Orders v0 `updateShipmentStatus` parity.
   *
   * @returns Success
   *
   * @throws {@link Orders.UpdateShipmentStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShipmentStatus(
    request: Orders.UpdateShipmentStatusRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateShipmentStatusResponse, Orders.UpdateShipmentStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/shipment-status"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShipmentStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: updateShipmentStatusResponseSchema },
        errorFactory: Orders.UpdateShipmentStatusError,
      },
      options,
    );
  }

  /**
   * Seller confirms that buyer identity was verified at delivery
   *
   * @remarks
   * Parity with Amazon SP-API Orders v0 `updateVerificationStatus`. The seller calls this after
   * delivering a regulated-item order to record whether the buyer's identity / age was verified at
   * the doorstep. An APPROVED status releases the order for settlement; REJECTED requires a
   * `rejectionReason` and triggers downstream return-processing.
   *
   * Gated by the CCM-managed `orders.features.regulatedInfoEnabled` kill-switch (live-refreshable,
   * parity with the cancel kill-switch).
   *
   * @returns Success
   *
   * @throws {@link Orders.UpdateVerificationStatusError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVerificationStatus(
    request: Orders.UpdateVerificationStatusRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateVerificationStatusResponse, Orders.UpdateVerificationStatusError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default1("/orders/v4/orders/{purchaseOrderId}/regulatedInfo"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateVerificationStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: updateVerificationStatusResponseSchema },
        errorFactory: Orders.UpdateVerificationStatusError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type AcknowledgeOrderRequestParams = {
    purchaseOrderId: string;
    body: AcknowledgeOrderRequest;
  };

  export class AcknowledgeOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<AcknowledgeOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CancelOrderLinesRequestParams = {
    purchaseOrderId: string;
    body: CancelOrderLinesRequest;
  };

  export class CancelOrderLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelOrderLinesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type DeliverOrderLinesRequestParams = {
    purchaseOrderId: string;
    body: DeliverOrderLinesRequest;
  };

  export class DeliverOrderLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<DeliverOrderLinesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrderRequest = {
    /** Walmart Purchase Order ID */
    purchaseOrderId: string;
  };

  export class GetOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrderAddressRequest = {
    purchaseOrderId: string;
  };

  export class GetOrderAddressError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderAddressError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrderBuyerInfoRequest = {
    purchaseOrderId: string;
  };

  export class GetOrderBuyerInfoError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderBuyerInfoError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrderItemsRequest = {
    purchaseOrderId: string;
  };

  export class GetOrderItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderItemsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrderRegulatedInfoRequest = {
    /** Walmart Purchase Order ID */
    purchaseOrderId: string;
  };

  export class GetOrderRegulatedInfoError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderRegulatedInfoError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetOrdersRequest = {
    /**
     * Filter orders created after this date-time (ISO 8601).
     *
     * **the roadmap — not yet supported.** Sending this parameter today returns `400
     * FILTER_NOT_SUPPORTED`; the Orders service does not accept date-range filters at the order
     * level. Tracked by . Retained in the contract so SDKs generated today stay forward-compatible.
     */
    createdAfter?: Date;
    /**
     * Filter orders created before this date-time (ISO 8601).
     *
     * **the roadmap — not yet supported.** See `createdAfter` for the rationale and the tracking
     * ticket.
     */
    createdBefore?: Date;
    /**
     * Filter orders updated after this date-time (ISO 8601).
     *
     * **the roadmap — not yet supported.** Sending this parameter today returns `400
     * FILTER_NOT_SUPPORTED`; the Orders service has no order-level update-date index. Tracked by .
     */
    lastUpdatedAfter?: Date;
    /**
     * Filter by order status.
     *
     * **the roadmap limitation:** the Orders service accepts AT MOST ONE status per call. Passing
     * multiple values today returns `400 FILTER_NOT_SUPPORTED`; pass a single value or omit to
     * match all. Multi-status fan-out tracked by .
     */
    orderStatuses?: OrderStatus[];
    /**
     * Filter by fulfillment type.
     *
     * **the roadmap — not yet supported.** Sending this parameter today returns `400
     * FILTER_NOT_SUPPORTED`; the underlying service accepts one shipNodeType per call and
     * multi-type fan-out is Phase 2. Tracked by .
     */
    fulfillmentTypes?: FulfillmentType[];
    /** @default 100 */
    pageSize?: number;
    nextToken?: string;
  };

  export class GetOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrdersError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type RefundOrderLinesRequestParams = {
    purchaseOrderId: string;
    body: RefundOrderLinesRequest;
  };

  export class RefundOrderLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<RefundOrderLinesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ShipOrderLinesRequestParams = {
    purchaseOrderId: string;
    body: ShipOrderLinesRequest;
  };

  export class ShipOrderLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ShipOrderLinesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ShipOrderMultiPackageRequest = {
    purchaseOrderId: string;
    body: MultiPackageShipRequest;
  };

  export class ShipOrderMultiPackageError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ShipOrderMultiPackageError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type UpdateShipmentStatusRequestParams = {
    purchaseOrderId: string;
    body: UpdateShipmentStatusRequest;
  };

  export class UpdateShipmentStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateShipmentStatusError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type UpdateVerificationStatusRequestParams = {
    /** Walmart Purchase Order ID */
    purchaseOrderId: string;
    body: UpdateVerificationStatusRequest;
  };

  export class UpdateVerificationStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
      | Declared<"errorList6", ErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateVerificationStatusError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
      { on: 503, kind: "errorList6", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
