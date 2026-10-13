import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { channelListSchema, type ChannelList } from "../models/channel-list.js";
import { channelSchema, type Channel } from "../models/channel.js";
import type { Servers } from "../servers.js";

export class Notifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createDestination(
    request: Notifications.CreateDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, Notifications.CreateDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/notifications/v4/destinations"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: Notifications.CreateDestinationError,
      },
      options,
    );
  }

  createSubscription(
    request: Notifications.CreateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Notifications.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/notifications/v4/subscriptions/{notificationType}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "notificationType", value: request.notificationType, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Notifications.CreateSubscriptionError,
      },
      options,
    );
  }

  deleteDestination(
    request: Notifications.DeleteDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, Notifications.DeleteDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/notifications/v4/destinations/{destinationId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "destinationId", value: request.destinationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: Notifications.DeleteDestinationError,
      },
      options,
    );
  }

  deleteSubscriptionById(
    request: Notifications.DeleteSubscriptionByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Notifications.DeleteSubscriptionByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1(
          "/notifications/v4/subscriptions/{notificationType}/{subscriptionId}",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
          { name: "notificationType", value: request.notificationType, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Notifications.DeleteSubscriptionByIdError,
      },
      options,
    );
  }

  getDestination(
    request: Notifications.GetDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, Notifications.GetDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/notifications/v4/destinations/{destinationId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "destinationId", value: request.destinationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: Notifications.GetDestinationError,
      },
      options,
    );
  }

  getDestinations(options?: RequestOptions): ApiPromise<ChannelList, Notifications.GetDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/notifications/v4/destinations"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelListSchema },
        errorFactory: Notifications.GetDestinationsError,
      },
      options,
    );
  }

  getSubscription(
    request: Notifications.GetSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Notifications.GetSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/notifications/v4/subscriptions/{notificationType}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "notificationType", value: request.notificationType, schema: s.string() }],
        query: [{ name: "payloadVersion", value: request.payloadVersion, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Notifications.GetSubscriptionError,
      },
      options,
    );
  }

  getSubscriptionById(
    request: Notifications.GetSubscriptionByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Notifications.GetSubscriptionByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/notifications/v4/subscriptions/{notificationType}/{subscriptionId}",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
          { name: "notificationType", value: request.notificationType, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Notifications.GetSubscriptionByIdError,
      },
      options,
    );
  }

  sendTestNotification(
    request: Notifications.SendTestNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Notifications.SendTestNotificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/notifications/v4/subscriptions/{notificationType}/testNotification",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "notificationType", value: request.notificationType, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Notifications.SendTestNotificationError,
      },
      options,
    );
  }
}

export namespace Notifications {
  export type CreateDestinationRequest = {
    body: Record<string, unknown>;
  };

  export class CreateDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<CreateDestinationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateSubscriptionRequest = {
    /** The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. */
    notificationType: string;
    body: Record<string, unknown>;
  };

  export class CreateSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDestinationRequest = {
    /** The identifier for the destination that you want to delete. */
    destinationId: string;
  };

  export class DeleteDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<DeleteDestinationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSubscriptionByIdRequest = {
    /** The identifier for the subscription that you want to delete. */
    subscriptionId: string;
    /** The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. */
    notificationType: string;
  };

  export class DeleteSubscriptionByIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<DeleteSubscriptionByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetDestinationRequest = {
    /** The identifier generated when you created the destination. */
    destinationId: string;
  };

  export class GetDestinationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<GetDestinationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetDestinationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<GetDestinationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetSubscriptionRequest = {
    /** The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. */
    notificationType: string;
    /** The version of the payload object to be used in the notification. */
    payloadVersion?: string;
  };

  export class GetSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<GetSubscriptionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetSubscriptionByIdRequest = {
    /** The identifier for the subscription that you want to get. */
    subscriptionId: string;
    /** The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. */
    notificationType: string;
  };

  export class GetSubscriptionByIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<GetSubscriptionByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SendTestNotificationRequest = {
    /** The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. */
    notificationType: string;
    body: Record<string, unknown>;
  };

  export class SendTestNotificationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
    >;

    static readonly errors: ErrorDecoders<SendTestNotificationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
