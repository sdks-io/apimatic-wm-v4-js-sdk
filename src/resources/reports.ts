import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cancelReportResponseSchema, type CancelReportResponse } from "../models/cancel-report-response.js";
import { createReportResponseSchema, type CreateReportResponse } from "../models/create-report-response.js";
import {
  createReportSpecificationSchema,
  type CreateReportSpecification,
} from "../models/create-report-specification.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { getReportsResponseSchema, type GetReportsResponse } from "../models/get-reports-response.js";
import { processingStatusSchema, type ProcessingStatus } from "../models/processing-status.js";
import { reportDocumentSchema, type ReportDocument } from "../models/report-document.js";
import { reportType1Schema, type ReportType1 } from "../models/report-type1.js";
import { reportSchema, type Report } from "../models/report.js";
import type { Servers } from "../servers.js";

/**
 * Settlement summary report download (new and legacy formats).
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels the report that you specify (only IN_QUEUE or IN_PROGRESS)
   *
   * @returns Report cancelled
   *
   * @throws {@link Reports.CancelReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelReport(
    request: Reports.CancelReportRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelReportResponse, Reports.CancelReportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/reports/v4/reports/{reportId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelReportResponseSchema },
        errorFactory: Reports.CancelReportError,
      },
      options,
    );
  }

  /**
   * Creates a report
   *
   * @remarks
   * Submits a report request. Poll `GET /reports/{reportId}` for status. Report type taxonomy TBD —
   * coordinate with Pod 5 for financial reports.
   *
   * @returns Report request accepted
   *
   * @throws {@link Reports.CreateReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReport(
    request: Reports.CreateReportRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateReportResponse, Reports.CreateReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/reports/v4/reports"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createReportSpecificationSchema },
      },
      {
        success: { kind: "json", schema: createReportResponseSchema },
        errorFactory: Reports.CreateReportError,
      },
      options,
    );
  }

  /**
   * Download current-format settlement summary report (Swift v1)
   *
   * @remarks
   * Downloads the current-format settlement summary report ZIP. Delegates to mp-payment-reporting
   * GET /v3/report/reconreport/v1/reconFile (Swift v1 storage).
   *
   * @returns ZIP file stream
   *
   * @throws {@link Reports.DownloadNewReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadNewReport(
    request: Reports.DownloadNewReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Reports.DownloadNewReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/summary/newReportDownload"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "partnerId", value: request.partnerId, schema: s.string() },
          { name: "reportDate", value: request.reportDate, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Reports.DownloadNewReportError,
      },
      options,
    );
  }

  /**
   * Download legacy-format settlement summary report
   *
   * @remarks
   * Downloads the legacy-format settlement summary report ZIP. Delegates to mp-payment-reporting
   * GET /v3/report/reconreport/reconFile (legacy Swift storage).
   *
   * @returns ZIP file stream
   *
   * @throws {@link Reports.DownloadOldReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadOldReport(
    request: Reports.DownloadOldReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Reports.DownloadOldReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/summary/oldReportDownload"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "partnerId", value: request.partnerId, schema: s.string() },
          { name: "reportDate", value: request.reportDate, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Reports.DownloadOldReportError,
      },
      options,
    );
  }

  /**
   * Returns report details (including processing status) for the report
   *
   * @returns Success
   *
   * @throws {@link Reports.GetReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReport(
    request: Reports.GetReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Report, Reports.GetReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/reports/v4/reports/{reportId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportSchema },
        errorFactory: Reports.GetReportError,
      },
      options,
    );
  }

  /**
   * Returns the information required for retrieving a report document
   *
   * @remarks
   * Returns a pre-signed URL for downloading the completed report. Do not log the pre-signed URL.
   *
   * @returns Success
   *
   * @throws {@link Reports.GetReportDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportDocument(
    request: Reports.GetReportDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportDocument, Reports.GetReportDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/reports/v4/documents/{reportDocumentId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "reportDocumentId", value: request.reportDocumentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportDocumentSchema },
        errorFactory: Reports.GetReportDocumentError,
      },
      options,
    );
  }

  /**
   * Returns report details for reports that match the filters
   *
   * @returns Success
   *
   * @throws {@link Reports.GetReportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReports(
    request: Reports.GetReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetReportsResponse, Reports.GetReportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/reports/v4/reports"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          {
            name: "reportTypes",
            value: request.reportTypes,
            schema: s.optional(s.array(s.lazy(() => reportType1Schema))),
          },
          {
            name: "processingStatuses",
            value: request.processingStatuses,
            schema: s.optional(s.array(s.lazy(() => processingStatusSchema))),
          },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.dateTime()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.dateTime()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getReportsResponseSchema },
        errorFactory: Reports.GetReportsError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type CancelReportRequest = {
    reportId: string;
  };

  export class CancelReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateReportRequest = {
    body: CreateReportSpecification;
  };

  export class CreateReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type DownloadNewReportRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
    /** Report date in MMddyyyy format (e.g. 06172026) */
    reportDate: string;
  };

  export class DownloadNewReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<DownloadNewReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type DownloadOldReportRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
    /** Report date in MMddyyyy format (e.g. 06172026) */
    reportDate: string;
  };

  export class DownloadOldReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<DownloadOldReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetReportRequest = {
    reportId: string;
  };

  export class GetReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetReportDocumentRequest = {
    reportDocumentId: string;
  };

  export class GetReportDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetReportDocumentError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetReportsRequest = {
    /**
     * Filter by report type. Values are Walmart Partner Reporting Platform enum names. Runtime
     * availability is CCM-controlled; consult PRP docs for current PROD-enabled types.
     */
    reportTypes?: ReportType1[];
    processingStatuses?: ProcessingStatus[];
    createdSince?: Date;
    createdUntil?: Date;
    /** @default 10 */
    pageSize?: number;
    nextToken?: string;
  };

  export class GetReportsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetReportsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
