import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  disputeContestResponsesSchema,
  type DisputeContestResponses,
} from "../models/dispute-contest-responses.js";
import {
  v3ItemsDisputeDuplicatesContestRequestSchema,
  type V3ItemsDisputeDuplicatesContestRequest,
} from "../models/v3-items-dispute-duplicates-contest-request.js";
import {
  v3ItemsDisputeDuplicatesContest403Error1Schema,
  type V3ItemsDisputeDuplicatesContest403Error1,
} from "../models/v3-items-dispute-duplicates-contest403-error1.js";
import {
  v3ItemsDisputeDuplicatesContest404Error1Schema,
  type V3ItemsDisputeDuplicatesContest404Error1,
} from "../models/v3-items-dispute-duplicates-contest404-error1.js";
import {
  v3ItemsDisputeDuplicatesContest500Error1Schema,
  type V3ItemsDisputeDuplicatesContest500Error1,
} from "../models/v3-items-dispute-duplicates-contest500-error1.js";
import {
  v3ItemsDisputeDuplicatesStatusRequestSchema,
  type V3ItemsDisputeDuplicatesStatusRequest,
} from "../models/v3-items-dispute-duplicates-status-request.js";
import {
  v3ItemsDisputeDuplicatesStatusResponseSchema,
  type V3ItemsDisputeDuplicatesStatusResponse,
} from "../models/v3-items-dispute-duplicates-status-response.js";
import {
  v3ItemsDisputeDuplicatesStatus403Error1Schema,
  type V3ItemsDisputeDuplicatesStatus403Error1,
} from "../models/v3-items-dispute-duplicates-status403-error1.js";
import {
  v3ItemsDisputeDuplicatesStatus404Error1Schema,
  type V3ItemsDisputeDuplicatesStatus404Error1,
} from "../models/v3-items-dispute-duplicates-status404-error1.js";
import {
  v3ItemsDisputeDuplicatesStatus500Error1Schema,
  type V3ItemsDisputeDuplicatesStatus500Error1,
} from "../models/v3-items-dispute-duplicates-status500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class Disputes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Dispute submission
   *
   * @remarks
   * Use this API to submit dispute for up to 100 items at a time.
   *
   * We need to pass `productId`, and `productIdType` in the body for creating a dispute.
   *
   * * POST {{url}}/v3/items/dispute/duplicates/contest <br><b style='color:green;'>Market
   *   availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link Disputes.PostContestError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postContest(
    request: Disputes.PostContestRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeContestResponses, Disputes.PostContestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/items/dispute/duplicates/contest"),
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
        body: { kind: "json", value: request.body, schema: v3ItemsDisputeDuplicatesContestRequestSchema },
      },
      {
        success: { kind: "json", schema: disputeContestResponsesSchema },
        errorFactory: Disputes.PostContestError,
      },
      options,
    );
  }

  /**
   * Dispute status
   *
   * @remarks
   * Use this API to retrieve the status of up to 100 disputed items at a time.
   *
   * We need to pass `productId`, and `productIdType` in the body for creating a dispute.
   *
   * * POST {{url}}/v3/items/dispute/duplicates/status
   *
   * Responses will be based on the item status:
   *
   * * 404: No item Response
   *
   * * 200: Response received for all items
   *
   * * 206: Partial response received
   *
   * An Item can be in 4 different stages:
   * * `IN_REVIEW`, `IS_DUPLICATE`, `ERROR`, `NOT_DUPLICATE` <br><b style='color:green;'>Market
   *   availability: US only</b>
   *
   * @returns Response received for all the items.
   *
   * @throws {@link Disputes.PostStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postStatus(
    request: Disputes.PostStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ItemsDisputeDuplicatesStatusResponse, Disputes.PostStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/items/dispute/duplicates/status"),
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
        body: { kind: "json", value: request.body, schema: v3ItemsDisputeDuplicatesStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: v3ItemsDisputeDuplicatesStatusResponseSchema },
        errorFactory: Disputes.PostStatusError,
      },
      options,
    );
  }
}

export namespace Disputes {
  export type PostContestRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
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
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.
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
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** Required fields for the dispute. */
    body: V3ItemsDisputeDuplicatesContestRequest;
  };

  export class PostContestError extends ApiError {
    declare readonly payload:
      | Declared<"v3ItemsDisputeDuplicatesContest403Error1", V3ItemsDisputeDuplicatesContest403Error1>
      | Declared<"v3ItemsDisputeDuplicatesContest404Error1", V3ItemsDisputeDuplicatesContest404Error1>
      | Declared<"v3ItemsDisputeDuplicatesContest500Error1", V3ItemsDisputeDuplicatesContest500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostContestError> = [
      {
        on: 403,
        kind: "v3ItemsDisputeDuplicatesContest403Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesContest403Error1Schema },
      },
      {
        on: 404,
        kind: "v3ItemsDisputeDuplicatesContest404Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesContest404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ItemsDisputeDuplicatesContest500Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesContest500Error1Schema },
      },
    ];
  }

  export type PostStatusRequest = {
    /**
     * Access token obtained from the Token API. Required for authenticating requests to Walmart
     * Marketplace APIs.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
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
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.
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
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** Required fields for the dispute. */
    body: V3ItemsDisputeDuplicatesStatusRequest;
  };

  export class PostStatusError extends ApiError {
    declare readonly payload:
      | Declared<"v3ItemsDisputeDuplicatesStatus403Error1", V3ItemsDisputeDuplicatesStatus403Error1>
      | Declared<"v3ItemsDisputeDuplicatesStatus404Error1", V3ItemsDisputeDuplicatesStatus404Error1>
      | Declared<"v3ItemsDisputeDuplicatesStatus500Error1", V3ItemsDisputeDuplicatesStatus500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostStatusError> = [
      {
        on: 403,
        kind: "v3ItemsDisputeDuplicatesStatus403Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesStatus403Error1Schema },
      },
      {
        on: 404,
        kind: "v3ItemsDisputeDuplicatesStatus404Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesStatus404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ItemsDisputeDuplicatesStatus500Error1",
        decode: { kind: "json", schema: v3ItemsDisputeDuplicatesStatus500Error1Schema },
      },
    ];
  }
}
