import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v3GrowthReviewsAcceleratorCategoriesRequestSchema,
  type V3GrowthReviewsAcceleratorCategoriesRequest,
} from "../models/v3-growth-reviews-accelerator-categories-request.js";
import {
  v3GrowthReviewsAcceleratorCategoriesResponseSchema,
  type V3GrowthReviewsAcceleratorCategoriesResponse,
} from "../models/v3-growth-reviews-accelerator-categories-response.js";
import {
  v3GrowthReviewsAcceleratorCategories400Error1Schema,
  type V3GrowthReviewsAcceleratorCategories400Error1,
} from "../models/v3-growth-reviews-accelerator-categories400-error1.js";
import {
  v3GrowthReviewsAcceleratorCategories401Error1Schema,
  type V3GrowthReviewsAcceleratorCategories401Error1,
} from "../models/v3-growth-reviews-accelerator-categories401-error1.js";
import {
  v3GrowthReviewsAcceleratorCategories403Error1Schema,
  type V3GrowthReviewsAcceleratorCategories403Error1,
} from "../models/v3-growth-reviews-accelerator-categories403-error1.js";
import {
  v3GrowthReviewsAcceleratorItemsRequestSchema,
  type V3GrowthReviewsAcceleratorItemsRequest,
} from "../models/v3-growth-reviews-accelerator-items-request.js";
import {
  v3GrowthReviewsAcceleratorItemsResponseSchema,
  type V3GrowthReviewsAcceleratorItemsResponse,
} from "../models/v3-growth-reviews-accelerator-items-response.js";
import {
  v3GrowthReviewsAcceleratorItemsStatusRequestSchema,
  type V3GrowthReviewsAcceleratorItemsStatusRequest,
} from "../models/v3-growth-reviews-accelerator-items-status-request.js";
import {
  v3GrowthReviewsAcceleratorItemsStatusResponseSchema,
  type V3GrowthReviewsAcceleratorItemsStatusResponse,
} from "../models/v3-growth-reviews-accelerator-items-status-response.js";
import {
  v3GrowthReviewsAcceleratorItemsStatus400Error1Schema,
  type V3GrowthReviewsAcceleratorItemsStatus400Error1,
} from "../models/v3-growth-reviews-accelerator-items-status400-error1.js";
import {
  v3GrowthReviewsAcceleratorItemsStatus401Error1Schema,
  type V3GrowthReviewsAcceleratorItemsStatus401Error1,
} from "../models/v3-growth-reviews-accelerator-items-status401-error1.js";
import {
  v3GrowthReviewsAcceleratorItemsStatus403Error1Schema,
  type V3GrowthReviewsAcceleratorItemsStatus403Error1,
} from "../models/v3-growth-reviews-accelerator-items-status403-error1.js";
import {
  v3GrowthReviewsAcceleratorItemsStatus500Error1Schema,
  type V3GrowthReviewsAcceleratorItemsStatus500Error1,
} from "../models/v3-growth-reviews-accelerator-items-status500-error1.js";
import {
  v3GrowthReviewsAcceleratorItems400Error1Schema,
  type V3GrowthReviewsAcceleratorItems400Error1,
} from "../models/v3-growth-reviews-accelerator-items400-error1.js";
import {
  v3GrowthReviewsAcceleratorItems401Error1Schema,
  type V3GrowthReviewsAcceleratorItems401Error1,
} from "../models/v3-growth-reviews-accelerator-items401-error1.js";
import {
  v3GrowthReviewsAcceleratorItems403Error1Schema,
  type V3GrowthReviewsAcceleratorItems403Error1,
} from "../models/v3-growth-reviews-accelerator-items403-error1.js";
import {
  v3InsightsItemsListingQualityItems500Error1Schema,
  type V3InsightsItemsListingQualityItems500Error1,
} from "../models/v3-insights-items-listing-quality-items500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class Reviews {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk update item status
   *
   * @remarks
   * Use this API to enroll or disenroll items in the Review Accelerator Program (RAP).<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Reviews.BulkUpdateItemStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateItemStatus(
    request: Reviews.BulkUpdateItemStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V3GrowthReviewsAcceleratorItemsStatusResponse, Reviews.BulkUpdateItemStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/growth/reviews-accelerator/items/status"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
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
          schema: v3GrowthReviewsAcceleratorItemsStatusRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsStatusResponseSchema },
        errorFactory: Reviews.BulkUpdateItemStatusError,
      },
      options,
    );
  }

  /**
   * Get categories
   *
   * @remarks
   * Use this API to get the set of categories the RAP post-purchase items belong to.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Reviews.GetIrpCategoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIrpCategories(
    request: Reviews.GetIrpCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3GrowthReviewsAcceleratorCategoriesResponse, Reviews.GetIrpCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/growth/reviews-accelerator/categories"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
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
          schema: v3GrowthReviewsAcceleratorCategoriesRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: v3GrowthReviewsAcceleratorCategoriesResponseSchema },
        errorFactory: Reviews.GetIrpCategoriesError,
      },
      options,
    );
  }

  /**
   * Get RAP post-purchase items
   *
   * @remarks
   * To get all eligible products that can be enrolled in the Reviews Accelerator post-purchase
   * program, as well as to retrieve all products currently enrolled in the program, and all
   * products that have attained target reviews after enrollment, you can use the following
   * criteria: <li>Filter products by category and price. <li>Sort products by Walmart-recommended
   * item priorities. <li>Search using wildcards to match the product name and SKU.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Reviews.GetIrpItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIrpItems(
    request: Reviews.GetIrpItemsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V3GrowthReviewsAcceleratorItemsResponse, Reviews.GetIrpItemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/growth/reviews-accelerator/items"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "scrollId", value: request.scrollId, schema: s.defaulted(s.string(), "*") }],
        headers: [
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3GrowthReviewsAcceleratorItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsResponseSchema },
        errorFactory: Reviews.GetIrpItemsError,
      },
      options,
    );
  }
}

export namespace Reviews {
  export type BulkUpdateItemStatusRequest = {
    /**
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3GrowthReviewsAcceleratorItemsStatusRequest;
  };

  export class BulkUpdateItemStatusError extends ApiError {
    declare readonly payload:
      | Declared<
          "v3GrowthReviewsAcceleratorItemsStatus400Error1",
          V3GrowthReviewsAcceleratorItemsStatus400Error1
        >
      | Declared<
          "v3GrowthReviewsAcceleratorItemsStatus401Error1",
          V3GrowthReviewsAcceleratorItemsStatus401Error1
        >
      | Declared<
          "v3GrowthReviewsAcceleratorItemsStatus403Error1",
          V3GrowthReviewsAcceleratorItemsStatus403Error1
        >
      | Declared<
          "v3GrowthReviewsAcceleratorItemsStatus500Error1",
          V3GrowthReviewsAcceleratorItemsStatus500Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateItemStatusError> = [
      {
        on: 400,
        kind: "v3GrowthReviewsAcceleratorItemsStatus400Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsStatus400Error1Schema },
      },
      {
        on: 401,
        kind: "v3GrowthReviewsAcceleratorItemsStatus401Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsStatus401Error1Schema },
      },
      {
        on: 403,
        kind: "v3GrowthReviewsAcceleratorItemsStatus403Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsStatus403Error1Schema },
      },
      {
        on: 500,
        kind: "v3GrowthReviewsAcceleratorItemsStatus500Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItemsStatus500Error1Schema },
      },
    ];
  }

  export type GetIrpCategoriesRequest = {
    /**
     * Indicates the global version of the API. The default is set to 3.1.<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request payload */
    body: V3GrowthReviewsAcceleratorCategoriesRequest;
  };

  export class GetIrpCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<
          "v3GrowthReviewsAcceleratorCategories400Error1",
          V3GrowthReviewsAcceleratorCategories400Error1
        >
      | Declared<
          "v3GrowthReviewsAcceleratorCategories401Error1",
          V3GrowthReviewsAcceleratorCategories401Error1
        >
      | Declared<
          "v3GrowthReviewsAcceleratorCategories403Error1",
          V3GrowthReviewsAcceleratorCategories403Error1
        >
      | Declared<"v3InsightsItemsListingQualityItems500Error1", V3InsightsItemsListingQualityItems500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIrpCategoriesError> = [
      {
        on: 400,
        kind: "v3GrowthReviewsAcceleratorCategories400Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorCategories400Error1Schema },
      },
      {
        on: 401,
        kind: "v3GrowthReviewsAcceleratorCategories401Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorCategories401Error1Schema },
      },
      {
        on: 403,
        kind: "v3GrowthReviewsAcceleratorCategories403Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorCategories403Error1Schema },
      },
      {
        on: 500,
        kind: "v3InsightsItemsListingQualityItems500Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityItems500Error1Schema },
      },
    ];
  }

  export type GetIrpItemsRequestParams = {
    /**
     * Optional parameter specifying the scrollId to return the next set of results.<br><b
     * style='color:green;'>Market availability: US only</b>
     *
     * @default "*"
     */
    scrollId?: string;
    /**
     * Indicates the global version of the API. The default is set to 3.1.1<br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.<br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Request payload */
    body: V3GrowthReviewsAcceleratorItemsRequest;
  };

  export class GetIrpItemsError extends ApiError {
    declare readonly payload:
      | Declared<"v3GrowthReviewsAcceleratorItems400Error1", V3GrowthReviewsAcceleratorItems400Error1>
      | Declared<"v3GrowthReviewsAcceleratorItems401Error1", V3GrowthReviewsAcceleratorItems401Error1>
      | Declared<"v3GrowthReviewsAcceleratorItems403Error1", V3GrowthReviewsAcceleratorItems403Error1>
      | Declared<"v3InsightsItemsListingQualityItems500Error1", V3InsightsItemsListingQualityItems500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIrpItemsError> = [
      {
        on: 400,
        kind: "v3GrowthReviewsAcceleratorItems400Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItems400Error1Schema },
      },
      {
        on: 401,
        kind: "v3GrowthReviewsAcceleratorItems401Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItems401Error1Schema },
      },
      {
        on: 403,
        kind: "v3GrowthReviewsAcceleratorItems403Error1",
        decode: { kind: "json", schema: v3GrowthReviewsAcceleratorItems403Error1Schema },
      },
      {
        on: 500,
        kind: "v3InsightsItemsListingQualityItems500Error1",
        decode: { kind: "json", schema: v3InsightsItemsListingQualityItems500Error1Schema },
      },
    ];
  }
}
