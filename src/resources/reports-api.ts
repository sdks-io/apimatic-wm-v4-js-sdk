import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  partnerProgramPerformanceResSchema,
  type PartnerProgramPerformanceRes,
} from "../models/partner-program-performance-res.js";
import {
  partnerProgramStatementResSchema,
  type PartnerProgramStatementRes,
} from "../models/partner-program-statement-res.js";
import {
  reconReportDateResponseSchema,
  type ReconReportDateResponse,
} from "../models/recon-report-date-response.js";
import {
  reconReportV1AsJsonResponseSchema,
  type ReconReportV1AsJsonResponse,
} from "../models/recon-report-v1-as-json-response.js";
import type { Servers } from "../servers.js";

export class ReportsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Available recon report dates(Legacy)
   *
   * @remarks
   * This API will list all the available Marketplace reconciliation report dates for the Seller.
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableReconReportDates(
    request: ReportsApi.GetAvailableReconReportDatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReconReportDateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/reconreport/availableReconFiles"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reconReportDateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Recon Report JSON
   *
   * @remarks
   * This API will get a partner’s transaction details in JSON format for a specific date range
   * (available only for v1 reports). Dates for accessing the report can be found by using the ‘GET
   * Available recon report dates’ API.
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableV1ReconReportAsJson(
    request: ReportsApi.GetAvailableV1ReconReportAsJsonRequest,
    options?: RequestOptions,
  ): ApiPromise<ReconReportV1AsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/reconreport/reconFileJson"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "reportDate", value: request.reportDate, schema: s.string() },
          { name: "offset", value: request.offset, schema: s.int() },
          { name: "noOfRecords", value: request.noOfRecords, schema: s.int() },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reconReportV1AsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Available recon report dates
   *
   * @remarks
   * This API will list all the available Marketplace reconciliation report dates for the Seller.
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableV1ReconReportDates(
    request: ReportsApi.GetAvailableV1ReconReportDatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReconReportDateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/reconreport/availableReconFiles?reportVersion=v1"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reconReportDateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Performance Report
   *
   * @remarks
   * This API will get a partner's current cycle performance
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPartnerPerformance(
    request: ReportsApi.GetPartnerPerformanceRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerProgramPerformanceRes, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/payment/performance"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: partnerProgramPerformanceResSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Payment Statement Report
   *
   * @remarks
   * This API will get a partner's current cycle statement
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPartnerStatement(
    request: ReportsApi.GetPartnerStatementRequest,
    options?: RequestOptions,
  ): ApiPromise<PartnerProgramStatementRes, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/payment/statement"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: partnerProgramStatementResSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Recon report(Legacy)
   *
   * @remarks
   * Seller can download the reconciliation report for a specific date using this API. Dates
   * available to be downloaded can be found by using the Get available reconciliation report dates
   * API.
   *
   * @returns Successful Operation
   *
   * @throws {@link ReportsApi.GetReconReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReconReport(
    request: ReportsApi.GetReconReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ReportsApi.GetReconReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/reconreport/reconFile"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "reportDate", value: request.reportDate, schema: s.string() }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ReportsApi.GetReconReportError,
      },
      options,
    );
  }

  /**
   * Recon report
   *
   * @remarks
   * Seller can download the reconciliation report for a specific date using this API. Dates
   * available to be downloaded can be found by using the Get available reconciliation report dates
   * API.
   *
   * @returns Successful Operation
   *
   * @throws {@link ReportsApi.GetReconReportV1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReconReportV1(
    request: ReportsApi.GetReconReportV1Request,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ReportsApi.GetReconReportV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/report/reconreport/reconFile?reportVersion=v1"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "reportDate", value: request.reportDate, schema: s.string() },
          { name: "reportVersion", value: request.reportVersion, schema: s.string() },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ReportsApi.GetReconReportV1Error,
      },
      options,
    );
  }
}

export namespace ReportsApi {
  export type GetAvailableReconReportDatesRequest = {
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export type GetAvailableV1ReconReportAsJsonRequest = {
    /** Date of the settlement report */
    reportDate: string;
    /** starting number of the bytes, initial value for the offset is zero */
    offset: number;
    /** number of records in the report (max limit 1000) */
    noOfRecords: number;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export type GetAvailableV1ReconReportDatesRequest = {
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export type GetPartnerPerformanceRequest = {
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export type GetPartnerStatementRequest = {
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export type GetReconReportRequest = {
    /** The date for which the reconcilation file is available */
    reportDate: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export class GetReconReportError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetReconReportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetReconReportV1Request = {
    /** The date for which the reconcilation file is available */
    reportDate: string;
    /** Report Version */
    reportVersion: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    /** Walmart Service Name */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     */
    wmConsumerChannelType?: string;
  };

  export class GetReconReportV1Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetReconReportV1Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
