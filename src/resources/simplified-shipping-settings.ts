import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedId1Schema, type FeedId1 } from "../models/feed-id1.js";
import { v3FeedsRequest1Schema, type V3FeedsRequest1 } from "../models/v3-feeds-request1.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsAccountRequestSchema,
  type V3SettingsShippingSimplifiedshippingsettingsAccountRequest,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-account-request.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsAccountRequest1Schema,
  type V3SettingsShippingSimplifiedshippingsettingsAccountRequest1,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-account-request1.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsAccountResponseSchema,
  type V3SettingsShippingSimplifiedshippingsettingsAccountResponse,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-account-response.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsAccountResponse1Schema,
  type V3SettingsShippingSimplifiedshippingsettingsAccountResponse1,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-account-response1.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequestSchema,
  type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-request.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponseSchema,
  type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-response.js";
import {
  v3SettingsShippingSimplifiedshippingsettingsResponseSchema,
  type V3SettingsShippingSimplifiedshippingsettingsResponse,
} from "../models/v3-settings-shipping-simplifiedshippingsettings-response.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class SimplifiedShippingSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Bulk Item Migration for Simplified Shipping Configuration
   *
   * @remarks
   * This API is used to bulk migrate offers from manual templates to Simplified Shipping Settings
   * and vice-versa. Make sure to create account level settings before proceeding with item
   * migration to Simplified Shipping Settings. <br><b style='color:green;'>Market availability:
   * US</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkMigrateOffersForSimplifiedShippingSettings(
    request: SimplifiedShippingSettings.BulkMigrateOffersForSimplifiedShippingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "feedType", value: request.feedType, schema: s.defaulted(s.string(), "PROGRAM_ACTIONS") },
          {
            name: "requestType",
            value: request.requestType,
            schema: s.defaulted(s.string(), "SHIPPING_CONFIG"),
          },
        ],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3FeedsRequest1Schema },
      },
      {
        success: { kind: "json", schema: feedId1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create Simplified Shipping Settings
   *
   * @remarks
   * This API is used to update the account-level configuration. The carrier configurations created
   * using this API will be applied across all Fulfillment Centers (FCs) unless they are overridden
   * using the FC Configuration API.. <br><b style='color:green;'>Market availability: US</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSimplifiedShippingSettings(
    request: SimplifiedShippingSettings.CreateSimplifiedShippingSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/settings/shipping/simplifiedshippingsettings/account"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: v3SettingsShippingSimplifiedshippingsettingsAccountRequest1Schema,
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => v3SettingsShippingSimplifiedshippingsettingsAccountResponse1Schema)),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Simplified Shipping Settings
   *
   * @remarks
   * This API helps seller to fetch the Simplified Shipping Settings for a seller account and
   * FC-level configurations. <br><b style='color:green;'>Market availability: Global</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimplifiedShippingSettings(
    request: SimplifiedShippingSettings.GetSimplifiedShippingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/settings/shipping/simplifiedshippingsettings"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
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
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => v3SettingsShippingSimplifiedshippingsettingsResponseSchema)),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update FC Level Simplified Shipping Settings
   *
   * @remarks
   * This API can be used for overriding the configurations at one or more Fulfillment Centers.
   * <br><b style='color:green;'>Market availability: US</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFcLevelSimplifiedShippingSettings(
    request: SimplifiedShippingSettings.UpdateFcLevelSimplifiedShippingSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/v3/settings/shipping/simplifiedshippingsettings/fulfillmentcenter",
        ),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequestSchema,
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(
            s.lazy(() => v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponseSchema),
          ),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Simplified Shipping Settings
   *
   * @remarks
   * This API is used to update the account-level configuration. The carrier configurations updated
   * using this API will be applied across all Fulfillment Centers (FCs) unless they are overridden
   * using the FC Configuration API.
   *
   * <br><b style='color:green;'>Market availability: US</span></b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSimplifiedShippingSettings(
    request: SimplifiedShippingSettings.UpdateSimplifiedShippingSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsAccountResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/settings/shipping/simplifiedshippingsettings/account"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: v3SettingsShippingSimplifiedshippingsettingsAccountRequestSchema,
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => v3SettingsShippingSimplifiedshippingsettingsAccountResponseSchema)),
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SimplifiedShippingSettings {
  export type BulkMigrateOffersForSimplifiedShippingSettingsRequest = {
    /**
     * The type of feed, which specifies the nature of the update. <br><b
     * style='color:green;'>Market availability: US</span></b>
     *
     * @default "PROGRAM_ACTIONS"
     */
    feedType?: string;
    /**
     * Specifies the type of request being made. <br><b style='color:green;'>Market availability:
     * US</span></b>
     *
     * @default "SHIPPING_CONFIG"
     */
    requestType?: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1. <br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3FeedsRequest1;
  };

  export type CreateSimplifiedShippingSettingsRequestParams = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1. <br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3SettingsShippingSimplifiedshippingsettingsAccountRequest1;
  };

  export type GetSimplifiedShippingSettingsRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1. <br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmConsumerChannelType?: string;
  };

  export type UpdateFcLevelSimplifiedShippingSettingsRequestParams = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1. <br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest;
  };

  export type UpdateSimplifiedShippingSettingsRequestParams = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</span></b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</span></b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1. <br><b
     * style='color:green;'>Market availability: Global</span></b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.. <br><b style='color:green;'>Market availability:
     * Global</span></b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3SettingsShippingSimplifiedshippingsettingsAccountRequest;
  };
}
