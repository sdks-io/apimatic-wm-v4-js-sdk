import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelShipmentResponse1Schema,
  type CancelShipmentResponse1,
} from "../models/cancel-shipment-response1.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { format1Schema, type Format1 } from "../models/format1.js";
import {
  getAccessPointsResponseSchema,
  type GetAccessPointsResponse,
} from "../models/get-access-points-response.js";
import {
  getAdditionalInputsResponseSchema,
  type GetAdditionalInputsResponse,
} from "../models/get-additional-inputs-response.js";
import {
  getFulfillmentOrderResponseSchema,
  type GetFulfillmentOrderResponse,
} from "../models/get-fulfillment-order-response.js";
import {
  getFulfillmentOrderShipmentsResponseSchema,
  type GetFulfillmentOrderShipmentsResponse,
} from "../models/get-fulfillment-order-shipments-response.js";
import { getRatesRequestSchema, type GetRatesRequest } from "../models/get-rates-request.js";
import {
  getShipmentDocumentsResponseSchema,
  type GetShipmentDocumentsResponse,
} from "../models/get-shipment-documents-response.js";
import { getTrackingResponseSchema, type GetTrackingResponse } from "../models/get-tracking-response.js";
import {
  oneClickShipmentRequestSchema,
  type OneClickShipmentRequest,
} from "../models/one-click-shipment-request.js";
import {
  purchaseShipmentRequestSchema,
  type PurchaseShipmentRequest,
} from "../models/purchase-shipment-request.js";
import {
  submitNdrFeedbackRequestSchema,
  type SubmitNdrFeedbackRequest,
} from "../models/submit-ndr-feedback-request.js";
import type { Servers } from "../servers.js";

/**
 * Rate quotes, label purchase, tracking, and delivery for seller shipments.
 */
export class Shipping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a previously-purchased shipment
   *
   * @remarks
   * Cancels a shipment that has not yet shipped. Cancellation eligibility is carrier-dependent;
   * refer to the response cancellation status to confirm.
   *
   * @returns Cancellation processed
   *
   * @throws {@link Shipping.CancelShipment2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelShipment2(
    request: Shipping.CancelShipment2Request,
    options?: RequestOptions,
  ): ApiPromise<CancelShipmentResponse1, Shipping.CancelShipment2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/shipping/v4/shipments/{shipmentId}/cancel"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "shipmentId", value: request.shipmentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelShipmentResponse1Schema },
        errorFactory: Shipping.CancelShipment2Error,
      },
      options,
    );
  }

  /**
   * List nearby pickup/dropoff access points
   *
   * @remarks
   * Returns access points (pickup and dropoff locations) near the supplied postal code and country,
   * optionally filtered by access point type.
   *
   * @returns Access points returned successfully
   *
   * @throws {@link Shipping.GetAccessPointsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccessPoints(
    request: Shipping.GetAccessPointsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccessPointsResponse, Shipping.GetAccessPointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/shipping/v4/accessPoints"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "accessPointTypes", value: request.accessPointTypes, schema: s.string() },
          { name: "countryCode", value: request.countryCode, schema: s.string() },
          { name: "postalCode", value: request.postalCode, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAccessPointsResponseSchema },
        errorFactory: Shipping.GetAccessPointsError,
      },
      options,
    );
  }

  /**
   * Get the JSON Schema for additional carrier/service inputs
   *
   * @remarks
   * Returns a JSON Schema document describing any carrier-and-service-specific inputs required to
   * purchase a shipment for the supplied requestToken + rateId. The schema is served verbatim and
   * the calling client should validate the seller's input against it before issuing
   * purchaseShipment.
   *
   * @returns JSON Schema for additional inputs returned successfully
   *
   * @throws {@link Shipping.GetAdditionalInputsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAdditionalInputs(
    request: Shipping.GetAdditionalInputsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAdditionalInputsResponse, Shipping.GetAdditionalInputsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/shipping/v4/shipments/additionalInputs/schema"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "rateId", value: request.rateId, schema: s.string() },
          { name: "requestToken", value: request.requestToken, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAdditionalInputsResponseSchema },
        errorFactory: Shipping.GetAdditionalInputsError,
      },
      options,
    );
  }

  /**
   * Get shipping rate quotes
   *
   * @remarks
   * Returns a list of shipping rate quotes for the given shipment request. The seller can then call
   * purchaseShipment with the selected rateId to commit to a label purchase.
   *
   * @returns Rate quotes returned successfully
   *
   * @throws {@link Shipping.GetRatesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRates(
    request: Shipping.GetRatesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderResponse, Shipping.GetRatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/shipping/v4/shipments/rates"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getRatesRequestSchema },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderResponseSchema },
        errorFactory: Shipping.GetRatesError,
      },
      options,
    );
  }

  /**
   * Retrieve printable documents for a purchased shipment
   *
   * @remarks
   * Returns the label, customs, and other printable documents associated with a
   * previously-purchased shipment.
   *
   * @returns Documents returned successfully
   *
   * @throws {@link Shipping.GetShipmentDocumentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShipmentDocuments(
    request: Shipping.GetShipmentDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetShipmentDocumentsResponse, Shipping.GetShipmentDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/shipping/v4/shipments/{shipmentId}/documents"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "shipmentId", value: request.shipmentId, schema: s.string() }],
        query: [
          {
            name: "packageClientReferenceId",
            value: request.packageClientReferenceId,
            schema: s.optional(s.string()),
          },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getShipmentDocumentsResponseSchema },
        errorFactory: Shipping.GetShipmentDocumentsError,
      },
      options,
    );
  }

  /**
   * Get tracking status for a tracked shipment
   *
   * @remarks
   * Returns the current tracking status, event history, and any proof-of-delivery details for the
   * given trackingId. TNT resolves carrier internally from the trackingId alone, so carrierId is
   * optional -- confirmed unnecessary by the TNT/ Vulcan team (STRIDE-TNT-CORE-PACKAGE-SERVICES)
   * 2026-08-19. When provided, it's used only as a defense-in-depth check against the resolved
   * carrier; a mismatch surfaces as 404.
   *
   * @returns Tracking details returned successfully
   *
   * @throws {@link Shipping.GetTrackingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTracking(
    request: Shipping.GetTrackingRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTrackingResponse, Shipping.GetTrackingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/shipping/v4/tracking"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "trackingId", value: request.trackingId, schema: s.string() },
          { name: "carrierId", value: request.carrierId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTrackingResponseSchema },
        errorFactory: Shipping.GetTrackingError,
      },
      options,
    );
  }

  /**
   * Quote and purchase a shipment in a single call
   *
   * @remarks
   * Convenience endpoint that combines rate quote and purchase into a single round trip when the
   * seller already knows the desired service level. Returns the purchased shipment record directly.
   *
   * @returns Shipment purchased successfully
   *
   * @throws {@link Shipping.OneClickShipmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oneClickShipment(
    request: Shipping.OneClickShipmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderShipmentsResponse, Shipping.OneClickShipmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/shipping/v4/oneClickShipment"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oneClickShipmentRequestSchema },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderShipmentsResponseSchema },
        errorFactory: Shipping.OneClickShipmentError,
      },
      options,
    );
  }

  /**
   * Purchase a shipping label for a previously-quoted rate
   *
   * @remarks
   * Purchases the shipping label for the rate selected from a prior getRates response. Returns the
   * shipment record with label document references.
   *
   * @returns Shipment purchased successfully
   *
   * @throws {@link Shipping.PurchaseShipmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchaseShipment(
    request: Shipping.PurchaseShipmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetFulfillmentOrderShipmentsResponse, Shipping.PurchaseShipmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/shipping/v4/shipments"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: purchaseShipmentRequestSchema },
      },
      {
        success: { kind: "json", schema: getFulfillmentOrderShipmentsResponseSchema },
        errorFactory: Shipping.PurchaseShipmentError,
      },
      options,
    );
  }

  /**
   * Submit non-delivery report feedback
   *
   * @remarks
   * Submits seller feedback on a non-delivery event for a shipment, instructing the carrier on how
   * to proceed (return, reattempt, redirect, etc).
   *
   * @returns Feedback recorded successfully (no body)
   *
   * @throws {@link Shipping.SubmitNdrFeedbackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitNdrFeedback(
    request: Shipping.SubmitNdrFeedbackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shipping.SubmitNdrFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/shipping/v4/ndrFeedback"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: submitNdrFeedbackRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shipping.SubmitNdrFeedbackError,
      },
      options,
    );
  }
}

export namespace Shipping {
  export type CancelShipment2Request = {
    /** Identifier of the shipment to cancel. */
    shipmentId: string;
  };

  export class CancelShipment2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelShipment2Error> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetAccessPointsRequest = {
    /** Comma-separated list of access point types to include. */
    accessPointTypes: string;
    /** ISO 3166-1 alpha-2 country code (e.g. US, CA, MX). */
    countryCode: string;
    /** Postal code to search around. */
    postalCode: string;
  };

  export class GetAccessPointsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetAccessPointsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetAdditionalInputsRequest = {
    /** rateId returned by a prior getRates response. */
    rateId: string;
    /** requestToken returned by a prior getRates response. */
    requestToken: string;
  };

  export class GetAdditionalInputsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetAdditionalInputsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetRatesRequestParams = {
    body: GetRatesRequest;
  };

  export class GetRatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetRatesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetShipmentDocumentsRequest = {
    /** Identifier of the shipment whose documents to retrieve. */
    shipmentId: string;
    /**
     * Optional package-level reference id to retrieve documents for a specific package within a
     * multi-package shipment.
     */
    packageClientReferenceId?: string;
    /** Requested document format (defaults to PDF). */
    format?: Format1;
  };

  export class GetShipmentDocumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetShipmentDocumentsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetTrackingRequest = {
    /** Tracking identifier returned by purchaseShipment. */
    trackingId: string;
    /**
     * Optional carrier identifier for defense-in-depth validation against TNT's resolved carrier.
     * Not required by TNT itself -- omit unless you specifically want mismatch protection.
     */
    carrierId?: string;
  };

  export class GetTrackingError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetTrackingError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type OneClickShipmentRequestParams = {
    body: OneClickShipmentRequest;
  };

  export class OneClickShipmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<OneClickShipmentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type PurchaseShipmentRequestParams = {
    body: PurchaseShipmentRequest;
  };

  export class PurchaseShipmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<PurchaseShipmentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SubmitNdrFeedbackRequestParams = {
    body: SubmitNdrFeedbackRequest;
  };

  export class SubmitNdrFeedbackError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SubmitNdrFeedbackError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
