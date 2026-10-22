import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  downloadReportResponseSchema,
  type DownloadReportResponse,
} from "../models/download-report-response.js";
import { reportType4Schema, type ReportType4 } from "../models/report-type4.js";
import {
  requestStatusResponseSchema,
  type RequestStatusResponse,
} from "../models/request-status-response.js";
import { requestStatus4Schema, type RequestStatus4 } from "../models/request-status4.js";
import {
  requestsStatusResponseSchema,
  type RequestsStatusResponse,
} from "../models/requests-status-response.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class OnRequestReportApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download Report URL
   *
   * @remarks
   * Fetches URL to download a generated report. <br><b style='color:green;'>Market availability:
   * Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadReport(
    request: OnRequestReportApi.DownloadReportRequest,
    options?: RequestOptions,
  ): ApiPromise<DownloadReportResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/downloadReport"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "requestId", value: request.requestId, schema: s.string() }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: downloadReportResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get All Report Requests
   *
   * @remarks
   * Fetches a list of all report requests for specified search criteria by using query parameters.
   *
   * You can fetch details of report requests created in the last 30 days only. <br><b
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
  getRequestsStatus(
    request: OnRequestReportApi.GetRequestsStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestsStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/reportRequests"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "reportType", value: request.reportType, schema: reportType4Schema },
          { name: "reportVersion", value: request.reportVersion, schema: s.optional(s.string()) },
          {
            name: "requestStatus",
            value: request.requestStatus,
            schema: s.optional(s.lazy(() => requestStatus4Schema)),
          },
          {
            name: "requestSubmissionStartDate",
            value: request.requestSubmissionStartDate,
            schema: s.optional(s.string()),
          },
          {
            name: "requestSubmissionEndDate",
            value: request.requestSubmissionEndDate,
            schema: s.optional(s.string()),
          },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestsStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Report Request Status
   *
   * @remarks
   * Fetches status and other details of a report request by providing a requestID.
   *
   * You can fetch details of report request created in the last 30 days only. <br><b
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
  getSingleRequestStatus(
    request: OnRequestReportApi.GetSingleRequestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/reportRequests/{requestId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "requestId", value: request.requestId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace OnRequestReportApi {
  export type DownloadReportRequest = {
    /**
     * Automated ID generated by system that uniquely identifies the report request.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    requestId: string;
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
     * Only supported Media Type : application/json
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export type GetRequestsStatusRequest = {
    /**
     * Type of report for which the request is created. Example, ITEM for Item Report.
     *
     * <strong style="color: green;">Market availability:
     *
     * ITEM: Global INVENTORY: Global LAGTIME: US|CA|MX Other Reports: US only</strong>
     */
    reportType: ReportType4;
    /**
     * Version of report for which the request is created. Example, v1.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    reportVersion?: string;
    /**
     * Status of report request. Possible values are RECEIVED, INPROGRESS, READY, ERROR.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    requestStatus?: RequestStatus4;
    /**
     * Report request submittal start date for range of reports requested, in format:
     * YYYY-MM-DDTHH:mm:ssZ
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    requestSubmissionStartDate?: string;
    /**
     * Report request submittal end date for range of reports requested, in format
     * YYYY-MM-DDTHH:mm:ssZ
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    requestSubmissionEndDate?: string;
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
     * Only supported Media Type : application/json
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export type GetSingleRequestStatusRequest = {
    /**
     * Automated ID generated by system that uniquely identifies the report request.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    requestId: string;
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
     * Only supported Media Type : application/json
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };
}
