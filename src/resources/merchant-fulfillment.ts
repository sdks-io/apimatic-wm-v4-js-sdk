import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelShipmentResponseSchema,
  type CancelShipmentResponse,
} from "../models/cancel-shipment-response.js";
import {
  createShipmentRequestSchema,
  type CreateShipmentRequest,
} from "../models/create-shipment-request.js";
import {
  createShipmentResponseSchema,
  type CreateShipmentResponse,
} from "../models/create-shipment-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { Format, formatSchema } from "../models/format.js";
import {
  getEligibleShippingServicesRequestSchema,
  type GetEligibleShippingServicesRequest,
} from "../models/get-eligible-shipping-services-request.js";
import {
  getEligibleShippingServicesResponseSchema,
  type GetEligibleShippingServicesResponse,
} from "../models/get-eligible-shipping-services-response.js";
import { getShipmentResponseSchema, type GetShipmentResponse } from "../models/get-shipment-response.js";
import { labelSchema, type Label } from "../models/label.js";
import type { Servers } from "../servers.js";

export class MerchantFulfillment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels a shipment and returns the pre-paid shipping label
   *
   * @returns Shipment cancelled
   *
   * @throws {@link MerchantFulfillment.CancelShipmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  cancelShipment(
    request: MerchantFulfillment.CancelShipmentRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelShipmentResponse, MerchantFulfillment.CancelShipmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/mfn/v4/shipments/{shipmentId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "shipmentId", value: request.shipmentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelShipmentResponseSchema },
        errorFactory: MerchantFulfillment.CancelShipmentError,
      },
      options,
    );
  }

  /**
   * Purchases shipping and returns a shipping label
   *
   * @remarks
   * Creates a shipment for an order, purchases a shipping label from the selected carrier, and
   * returns the label for printing.
   *
   * @returns Success
   *
   * @throws {@link MerchantFulfillment.CreateShipmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createShipment(
    request: MerchantFulfillment.CreateShipmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateShipmentResponse, MerchantFulfillment.CreateShipmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/mfn/v4/shipments"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createShipmentRequestSchema },
      },
      {
        success: { kind: "json", schema: createShipmentResponseSchema },
        errorFactory: MerchantFulfillment.CreateShipmentError,
      },
      options,
    );
  }

  /**
   * Returns a list of shipping service offers
   *
   * @remarks
   * Returns available carriers and rates for a shipment based on package dimensions, weight, and
   * destination address.
   *
   * @returns Success
   *
   * @throws {@link MerchantFulfillment.GetEligibleShippingServicesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getEligibleShippingServices(
    request: MerchantFulfillment.GetEligibleShippingServicesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetEligibleShippingServicesResponse, MerchantFulfillment.GetEligibleShippingServicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/mfn/v4/eligibleShippingServices"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getEligibleShippingServicesRequestSchema },
      },
      {
        success: { kind: "json", schema: getEligibleShippingServicesResponseSchema },
        errorFactory: MerchantFulfillment.GetEligibleShippingServicesError,
      },
      options,
    );
  }

  /**
   * Returns the shipping label for an existing shipment
   *
   * @remarks
   * Returns the purchased shipping label for a shipment in the requested file format for printing.
   *
   * @returns Label returned
   *
   * @throws {@link MerchantFulfillment.GetLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getLabel(
    request: MerchantFulfillment.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, MerchantFulfillment.GetLabelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/mfn/v4/shipments/{shipmentId}/label"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "shipmentId", value: request.shipmentId, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Pdf) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelSchema },
        errorFactory: MerchantFulfillment.GetLabelError,
      },
      options,
    );
  }

  /**
   * Returns the shipment information for an existing shipment
   *
   * @returns Success
   *
   * @throws {@link MerchantFulfillment.GetShipment2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getShipment2(
    request: MerchantFulfillment.GetShipment2Request,
    options?: RequestOptions,
  ): ApiPromise<GetShipmentResponse, MerchantFulfillment.GetShipment2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/mfn/v4/shipments/{shipmentId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "shipmentId", value: request.shipmentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getShipmentResponseSchema },
        errorFactory: MerchantFulfillment.GetShipment2Error,
      },
      options,
    );
  }
}

export namespace MerchantFulfillment {
  export type CancelShipmentRequest = {
    shipmentId: string;
  };

  export class CancelShipmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelShipmentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateShipmentRequestParams = {
    body: CreateShipmentRequest;
  };

  export class CreateShipmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateShipmentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetEligibleShippingServicesRequestParams = {
    body: GetEligibleShippingServicesRequest;
  };

  export class GetEligibleShippingServicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetEligibleShippingServicesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetLabelRequest = {
    shipmentId: string;
    /** @default Format.Pdf */
    format?: Format;
  };

  export class GetLabelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetLabelError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetShipment2Request = {
    shipmentId: string;
  };

  export class GetShipment2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetShipment2Error> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
