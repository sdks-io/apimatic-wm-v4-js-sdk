import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  rejectRecommendationsResponsePayloadSchema,
  type RejectRecommendationsResponsePayload,
} from "../models/reject-recommendations-response-payload.js";
import {
  v3WebhooksEventTypesResponseSchema,
  type V3WebhooksEventTypesResponse,
} from "../models/v3-webhooks-event-types-response.js";
import {
  v3WebhooksSubscriptionsRequestSchema,
  type V3WebhooksSubscriptionsRequest,
} from "../models/v3-webhooks-subscriptions-request.js";
import {
  v3WebhooksSubscriptionsRequest1Schema,
  type V3WebhooksSubscriptionsRequest1,
} from "../models/v3-webhooks-subscriptions-request1.js";
import {
  v3WebhooksSubscriptionsResponseSchema,
  type V3WebhooksSubscriptionsResponse,
} from "../models/v3-webhooks-subscriptions-response.js";
import {
  v3WebhooksSubscriptionsResponse1Schema,
  type V3WebhooksSubscriptionsResponse1,
} from "../models/v3-webhooks-subscriptions-response1.js";
import {
  v3WebhooksSubscriptionsResponse2Schema,
  type V3WebhooksSubscriptionsResponse2,
} from "../models/v3-webhooks-subscriptions-response2.js";
import {
  v3WebhooksSubscriptionsResponse3Schema,
  type V3WebhooksSubscriptionsResponse3,
} from "../models/v3-webhooks-subscriptions-response3.js";
import {
  v3WebhooksTestRequestSchema,
  type V3WebhooksTestRequest,
} from "../models/v3-webhooks-test-request.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket2Schema, type WmMarket2 } from "../models/wm-market2.js";
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

  /**
   * Create subscription
   *
   * @remarks
   * Create one or more webhook subscriptions for event notifications by selecting an event type,
   * event version, resource name, and providing a destination event URL.
   *
   * Use the Get Event Types API to retrieve available event types, versions, and resource names.
   * Configure the eventUrl to receive notifications.
   *
   * URL authentication options
   * - If authMethod is BASIC_AUTH, Walmart passes an authentication header to the eventUrl using
   *   authHeaderName as the header key and the Base64-encoded userName:password as the value.
   * - If authMethod is HMAC, Walmart passes an authentication header to the eventUrl using
   *   authHeaderName as the header key and HMACSHA256 of the complete response as the value, with
   *   clientSecret as the key.
   * - If authMethod is OAUTH, Walmart makes a POST call to authUrl to generate a token with request
   *   body "grant_type=client_credentials" and headers: (1) Authorization header using
   *   authHeaderName as the key and Base64-encoded clientId:clientSecret as the value, (2) Accept:
   *   "application/json; charset=UTF-8", (3) Content-Type: "application/x-www-form-urlencoded;
   *   charset=ISO-8859-1", and (4) any custom headers provided in headers. The authUrl must return
   *   HTTP 200 with access_token and expires_in fields. When sending notifications to eventUrl,
   *   Walmart includes the access_token in headers using authHeaderName as the key and value
   *   "Bearer <access_token>", along with any custom headers provided in headers.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: Notifications.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3WebhooksSubscriptionsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/webhooks/subscriptions"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3WebhooksSubscriptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3WebhooksSubscriptionsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete Subscription
   *
   * @remarks
   * Delete an existing webhook subscription by ID. After deletion, the subscription cannot be
   * retrieved.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscription(
    request: Notifications.DeleteSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<V3WebhooksSubscriptionsResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/webhooks/subscriptions/{subscriptionId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3WebhooksSubscriptionsResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * All subscriptions
   *
   * @remarks
   * Retrieve details of all webhook subscriptions created using the Create Subscription API. Use
   * query parameters to filter by subscription ID, event type, resource, or status.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllSubscriptions(
    request: Notifications.GetAllSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3WebhooksSubscriptionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/webhooks/subscriptions"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "subscriptionId", value: request.subscriptionId, schema: s.optional(s.string()) },
          { name: "eventType", value: request.eventType, schema: s.optional(s.string()) },
          { name: "resourceName", value: request.resourceName, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
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
        success: { kind: "json", schema: v3WebhooksSubscriptionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Event Types
   *
   * @remarks
   * Retrieve the list of event types and resource names available for subscription. Notifications
   * are triggered only for event types that you subscribe to using the Create Subscription API.
   *
   * Event types are workflow events fired when statuses or conditions change (for example, an offer
   * moving from published to unpublished, an order auto-cancellation, or a buy box change).
   *
   * Resource names are functional API categories (for example, ITEM, PRICE, ORDER, INVENTORY).
   * Permissions to subscribe to an event type are governed by the resource's delegated access
   * permissions.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful operation. Returns the list of event types and resource names available for
   * subscription.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventTypes(
    request: Notifications.GetEventTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3WebhooksEventTypesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/webhooks/eventTypes"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
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
        success: { kind: "json", schema: v3WebhooksEventTypesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Test Notification
   *
   * @remarks
   * Send a test notification to a destination URL using a sample payload.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testNotification(
    request: Notifications.TestNotificationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RejectRecommendationsResponsePayload, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/webhooks/test"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3WebhooksTestRequestSchema },
      },
      {
        success: { kind: "json", schema: rejectRecommendationsResponsePayloadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Subscription
   *
   * @remarks
   * Update the details of a subscription. You can update the event version, destination URL,
   * headers, and authentication details. You can also enable or disable the subscription by
   * changing the status to ACTIVE or INACTIVE.
   *
   * <b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation. Returns the updated subscription(s).
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: Notifications.UpdateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3WebhooksSubscriptionsResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/webhooks/subscriptions/{subscriptionId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "subscriptionId", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket2Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3WebhooksSubscriptionsRequest1Schema },
      },
      {
        success: { kind: "json", schema: v3WebhooksSubscriptionsResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Notifications {
  export type CreateSubscriptionRequestParams = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request body parameters for creating one or more subscriptions. */
    body: V3WebhooksSubscriptionsRequest;
  };

  export type DeleteSubscriptionRequest = {
    /**
     * Unique identifier of the subscription to delete.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    subscriptionId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetAllSubscriptionsRequest = {
    /**
     * Filter results to a specific subscription by its unique identifier.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    subscriptionId?: string;
    /**
     * Filter results to a specific event type. Refer to the Event Payload section for the list of
     * available event types.<br><b style='color:green;'>Market availability: Global</b>
     */
    eventType?: string;
    /**
     * Filter results to a specific resource (functional category). Refer to the Event Payload
     * section for the list of available resource names.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    resourceName?: string;
    /**
     * Filter results by subscription status. Allowed values: ACTIVE, INACTIVE.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    status?: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetEventTypesRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type TestNotificationRequestParams = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3WebhooksTestRequest;
  };

  export type UpdateSubscriptionRequestParams = {
    /**
     * Unique identifier of the subscription to update.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    subscriptionId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Name of the Walmart service being called.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket2;
    /**
     * Indicates the global version of the API.<br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request body parameters for updating a subscription. */
    body: V3WebhooksSubscriptionsRequest1;
  };
}
