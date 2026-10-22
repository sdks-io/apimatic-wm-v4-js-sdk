import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedId1Schema, type FeedId1 } from "../models/feed-id1.js";
import { lagTimeResponseSchema, type LagTimeResponse } from "../models/lag-time-response.js";
import { v3FeedsRequestSchema, type V3FeedsRequest } from "../models/v3-feeds-request.js";
import { v3Lagtime400Error1Schema, type V3Lagtime400Error1 } from "../models/v3-lagtime400-error1.js";
import { v3Lagtime404Error1Schema, type V3Lagtime404Error1 } from "../models/v3-lagtime404-error1.js";
import { v3Lagtime500Error1Schema, type V3Lagtime500Error1 } from "../models/v3-lagtime500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class LagTimeApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Lag Time
   *
   * @remarks
   * Use this API to retrieve the lag time for a specific item using its SKU.
   *
   * Lag Time represents the number of days between when an item is ordered and when it is shipped.
   * Approval thresholds and exemption processes for higher lag times vary by market. For more
   * details, refer to the relevant market-specific knowledge article. <br><b
   * style='color:green;'>Market availability: Global</strong>
   *
   * @returns Successful Operation
   *
   * @throws {@link LagTimeApi.GetLagTimeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLagTime(
    request: LagTimeApi.GetLagTimeRequest,
    options?: RequestOptions,
  ): ApiPromise<LagTimeResponse, LagTimeApi.GetLagTimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/lagtime"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "sku", value: request.sku, schema: s.string() }],
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
        success: { kind: "json", schema: lagTimeResponseSchema },
        errorFactory: LagTimeApi.GetLagTimeError,
      },
      options,
    );
  }

  /**
   * Update lag time
   *
   * @remarks
   * Use this API to update lag time for multiple items at once.
   *
   * Lag Time represents the number of days between when an item is ordered and when it is shipped.
   * Approval thresholds and exemption processes for higher lag times vary by market. For more
   * details, refer to the relevant market-specific knowledge article. <br><b
   * style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLagTimeBulk(
    request: LagTimeApi.UpdateLagTimeBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "feedType", value: request.feedType, schema: s.string() }],
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
        body: { kind: "json", value: request.body, schema: v3FeedsRequestSchema },
      },
      {
        success: { kind: "json", schema: feedId1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LagTimeApi {
  export type GetLagTimeRequest = {
    /**
     * A unique alphanumeric ID assigned by the seller to identify each item. The seller uses this
     * ID in the XSD file to reference specific items. If the SKU contains any of the following
     * special characters — :, /, ?, #, [, ], \@, !, $, &, ', (, ), *, +, ,, ;, =, space, {, }, or %
     * — they must be URL-encoded. For example, encode spaces as %20. No encoding is required for
     * other characters.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku: string;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetLagTimeError extends ApiError {
    declare readonly payload:
      | Declared<"v3Lagtime400Error1", V3Lagtime400Error1>
      | Declared<"v3Lagtime404Error1", V3Lagtime404Error1>
      | Declared<"v3Lagtime500Error1", V3Lagtime500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLagTimeError> = [
      { on: 400, kind: "v3Lagtime400Error1", decode: { kind: "json", schema: v3Lagtime400Error1Schema } },
      { on: 404, kind: "v3Lagtime404Error1", decode: { kind: "json", schema: v3Lagtime404Error1Schema } },
      { on: 500, kind: "v3Lagtime500Error1", decode: { kind: "json", schema: v3Lagtime500Error1Schema } },
    ];
  }

  export type UpdateLagTimeBulkRequest = {
    /**
     * Indicates the feed type. Use 'lagtime'.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    feedType: string;
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** File fields */
    body: V3FeedsRequest;
  };
}
