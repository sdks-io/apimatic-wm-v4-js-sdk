import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedType3Schema, type FeedType3 } from "../models/feed-type3.js";
import { requestTypeSchema, type RequestType } from "../models/request-type.js";
import {
  v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponseSchema,
  type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse,
} from "../models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff-response.js";
import {
  v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1Schema,
  type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1,
} from "../models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff400-error1.js";
import {
  v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1Schema,
  type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1,
} from "../models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff500-error1.js";
import { wmMarketSchema, type WmMarket } from "../models/wm-market.js";
import type { Servers } from "../servers.js";

export class WalmartSellerFulfilled {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Bulk Item Enrollment for Walmart+
   *
   * @remarks
   * This API endpoint allows you to efficiently manage item participation in the Walmart+ program.
   * Use it to enroll eligible items in Walmart+ or to unenroll items that are currently part of the
   * program.<br><b style='color:green;'>Market availability: US</b>
   *
   *
   *
   * <b>Download and review the <a
   * href="/file/mp/us/PROGRAM_ACTIONS_5.0.20250617-00_03_34_US_WalmartPlusEnrollment.xlsx">Excel
   * template sample </a> and the <a href="/file/mp/us/bulk-enroll-requestBody-template.json">JSON
   * body sample</a> to ensure proper formatting of the updated file before uploading it for
   * processing.</b>
   *
   * @returns Indicates successful operation. The response provides details on both successful and
   * failed item enrollments or unenrollments, allowing you to review which items were updated and
   * which encountered issues.
   *
   * @throws {@link WalmartSellerFulfilled.WalmartPlusEnrollmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walmartPlusEnrollment(
    request: WalmartSellerFulfilled.WalmartPlusEnrollmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse,
    WalmartSellerFulfilled.WalmartPlusEnrollmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds?feedType=PROGRAM_ACTIONS&requestType=WALMART_PLUS_SFF"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "feedType", value: request.feedType, schema: feedType3Schema },
          { name: "requestType", value: request.requestType, schema: requestTypeSchema },
        ],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarketSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "multipart", value: [{ kind: "file", name: "fileName", value: request.fileName }] },
      },
      {
        success: {
          kind: "json",
          schema: v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponseSchema,
        },
        errorFactory: WalmartSellerFulfilled.WalmartPlusEnrollmentError,
      },
      options,
    );
  }
}

export namespace WalmartSellerFulfilled {
  export type WalmartPlusEnrollmentRequest = {
    /**
     * The type of feed, which specifies the nature of the update.<br><b style='color:green;'>Market
     * availability: US</b>
     */
    feedType: FeedType3;
    /**
     * Specifies the type of request for the Walmart+ SFF (Seller-Fulfilled) program.<br><b
     * style='color:green;'>Market availability: US</b>
     */
    requestType: RequestType;
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
     * Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: WmMarket;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * Upload an Excel file or a JSON file containing the data for Walmart+ enrollment or
     * unenrollment.<br><b style='color:green;'>Market availability: US</b>
     */
    fileName: FileInput;
  };

  export class WalmartPlusEnrollmentError extends ApiError {
    declare readonly payload:
      | Declared<
          "v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1",
          V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1
        >
      | Declared<
          "v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1",
          V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<WalmartPlusEnrollmentError> = [
      {
        on: 400,
        kind: "v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1",
        decode: {
          kind: "json",
          schema: v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1Schema,
        },
      },
      {
        on: 500,
        kind: "v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1",
        decode: {
          kind: "json",
          schema: v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1Schema,
        },
      },
    ];
  }
}
