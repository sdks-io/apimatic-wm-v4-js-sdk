import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  reportAvailabilityResponseSchema,
  type ReportAvailabilityResponse,
} from "../models/report-availability-response.js";
import type { Servers } from "../servers.js";

/**
 * Reconciliation report availability and download.
 */
export class Reconciliation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if a report is available for a given period
   *
   * @remarks
   * Checks which reconciliation report versions (legacy, v1/WFS) are available for a given partner
   * and date. Delegates to mp-payment-reporting GET /v3/report/reconreport/reconReportAvailability.
   * Note: the upstream date param is named `date` (not `reportDate`).
   *
   * @returns Success
   *
   * @throws {@link Reconciliation.CheckDownloadReportByPeriodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkDownloadReportByPeriod(
    request: Reconciliation.CheckDownloadReportByPeriodRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportAvailabilityResponse, Reconciliation.CheckDownloadReportByPeriodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/checkDownloadReportByPeriod"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "partnerId", value: request.partnerId, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportAvailabilityResponseSchema },
        errorFactory: Reconciliation.CheckDownloadReportByPeriodError,
      },
      options,
    );
  }

  /**
   * Download reconciliation report as ZIP
   *
   * @remarks
   * Downloads a reconciliation report ZIP for the given partner and date. Delegates to
   * mp-payment-reporting GET /v1/mt/report/reconreport/reconFile (Azure MT storage).
   *
   * @returns ZIP file stream
   *
   * @throws {@link Reconciliation.DownloadReconciliationReportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadReconciliationReport(
    request: Reconciliation.DownloadReconciliationReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Reconciliation.DownloadReconciliationReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/reconciliation/download"),
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
        errorFactory: Reconciliation.DownloadReconciliationReportError,
      },
      options,
    );
  }

  /**
   * List available reconciliation report dates
   *
   * @remarks
   * Returns the set of available reconciliation report dates for a partner. Delegates to
   * mp-payment-reporting GET /v3/report/reconreport/availableReconFiles.
   *
   * @returns Success
   *
   * @throws {@link Reconciliation.ListReconciliationDatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReconciliationDates(
    request: Reconciliation.ListReconciliationDatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportAvailabilityResponse, Reconciliation.ListReconciliationDatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/reconciliation/dateList"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [{ name: "partnerId", value: request.partnerId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportAvailabilityResponseSchema },
        errorFactory: Reconciliation.ListReconciliationDatesError,
      },
      options,
    );
  }
}

export namespace Reconciliation {
  export type CheckDownloadReportByPeriodRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
    /** Report date in yyyy-MM-dd format */
    date: string;
  };

  export class CheckDownloadReportByPeriodError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CheckDownloadReportByPeriodError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type DownloadReconciliationReportRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
    /** Report date in MMddyyyy format (e.g. 06172026) */
    reportDate: string;
  };

  export class DownloadReconciliationReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<DownloadReconciliationReportError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListReconciliationDatesRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
  };

  export class ListReconciliationDatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListReconciliationDatesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
