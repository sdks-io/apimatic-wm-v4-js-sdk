import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import type { Servers } from "../servers.js";

export class Messaging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWarranty(
    request: Messaging.CreateWarrantyRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateWarrantyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}/messages/warranty"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateWarrantyError,
      },
      options,
    );
  }

  getAttributes(
    request: Messaging.GetAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.GetAttributesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}/attributes"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.GetAttributesError,
      },
      options,
    );
  }

  confirmCustomizationDetails(
    request: Messaging.ConfirmCustomizationDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.ConfirmCustomizationDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/messaging/v4/orders/{sp-apiOrderId}/messages/confirmCustomizationDetails",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.ConfirmCustomizationDetailsError,
      },
      options,
    );
  }

  createConfirmDeliveryDetails(
    request: Messaging.CreateConfirmDeliveryDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmDeliveryDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/messaging/v4/orders/{sp-apiOrderId}/messages/confirmDeliveryDetails",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateConfirmDeliveryDetailsError,
      },
      options,
    );
  }

  createConfirmOrderDetails(
    request: Messaging.CreateConfirmOrderDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmOrderDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/messaging/v4/orders/{sp-apiOrderId}/messages/confirmOrderDetails",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateConfirmOrderDetailsError,
      },
      options,
    );
  }

  createConfirmServiceDetails(
    request: Messaging.CreateConfirmServiceDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmServiceDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/messaging/v4/orders/{sp-apiOrderId}/messages/confirmServiceDetails",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateConfirmServiceDetailsError,
      },
      options,
    );
  }

  createDigitalAccessKey(
    request: Messaging.CreateDigitalAccessKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateDigitalAccessKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}/messages/digitalAccessKey"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateDigitalAccessKeyError,
      },
      options,
    );
  }

  createLegalDisclosure(
    request: Messaging.CreateLegalDisclosureRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateLegalDisclosureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}/messages/legalDisclosure"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateLegalDisclosureError,
      },
      options,
    );
  }

  createUnexpectedProblem(
    request: Messaging.CreateUnexpectedProblemRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.CreateUnexpectedProblemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/messaging/v4/orders/{sp-apiOrderId}/messages/unexpectedProblem",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.CreateUnexpectedProblemError,
      },
      options,
    );
  }

  getMessagingActionsForOrder(
    request: Messaging.GetMessagingActionsForOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.GetMessagingActionsForOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.GetMessagingActionsForOrderError,
      },
      options,
    );
  }

  sendInvoice(
    request: Messaging.SendInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Messaging.SendInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/messaging/v4/orders/{sp-apiOrderId}/messages/invoice"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Messaging.SendInvoiceError,
      },
      options,
    );
  }
}

export namespace Messaging {
  export type CreateWarrantyRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateWarrantyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateWarrantyError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetAttributesRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
  };

  export class GetAttributesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetAttributesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ConfirmCustomizationDetailsRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class ConfirmCustomizationDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmCustomizationDetailsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateConfirmDeliveryDetailsRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateConfirmDeliveryDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateConfirmDeliveryDetailsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateConfirmOrderDetailsRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateConfirmOrderDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateConfirmOrderDetailsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateConfirmServiceDetailsRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateConfirmServiceDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateConfirmServiceDetailsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateDigitalAccessKeyRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateDigitalAccessKeyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateDigitalAccessKeyError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateLegalDisclosureRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateLegalDisclosureError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateLegalDisclosureError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateUnexpectedProblemRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class CreateUnexpectedProblemError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateUnexpectedProblemError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetMessagingActionsForOrderRequest = {
    /**
     * A marketplace order identifier. This specifies the order for which you want a list of
     * available message types.
     */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
  };

  export class GetMessagingActionsForOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetMessagingActionsForOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SendInvoiceRequest = {
    /** A marketplace order identifier. This identifies the order for which a message is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This identifies the marketplace in which the order was placed. You
     * can only specify one market
     */
    marketplaceIds: string[];
    body: Record<string, unknown>;
  };

  export class SendInvoiceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SendInvoiceError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
