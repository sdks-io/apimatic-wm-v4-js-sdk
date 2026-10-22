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
import { reportType10Schema, type ReportType10 } from "../models/report-type10.js";
import {
  v3ReportsSchedulesRequestSchema,
  type V3ReportsSchedulesRequest,
} from "../models/v3-reports-schedules-request.js";
import {
  v3ReportsSchedulesResponseSchema,
  type V3ReportsSchedulesResponse,
} from "../models/v3-reports-schedules-response.js";
import {
  v3ReportsSchedulesResponse1Schema,
  type V3ReportsSchedulesResponse1,
} from "../models/v3-reports-schedules-response1.js";
import type { Servers } from "../servers.js";

export class ReportScheduler {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Report Schedule
   *
   * @remarks
   * This API allows you to remove an existing report schedule.
   *
   * <strong style="color: green;">Market availability: US only</strong>
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReportSchedule(
    request: ReportScheduler.DeleteReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<RejectRecommendationsResponsePayload, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/reports/schedules/{scheduleId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "scheduleId", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rejectRecommendationsResponsePayloadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get All Report Schedules
   *
   * @remarks
   * The Get All Report Schedules API retrieves a list of all existing report schedules. This helps
   * you to easily view and manage all scheduled reports in one place.
   *
   * <strong style="color: green;">Market availability: US only</strong>
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllReportSchedules(
    request: ReportScheduler.GetAllReportSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ReportsSchedulesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/schedules"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "reportType", value: request.reportType, schema: reportType10Schema }],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ReportsSchedulesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Single Report Schedules
   *
   * @remarks
   * This API retrieves the details of a single report schedule based on the specified scheduleId.
   *
   * <strong style="color: green;">Market availability: US only</strong>
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportSchedule(
    request: ReportScheduler.GetReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ReportsSchedulesResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/schedules/{scheduleId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "scheduleId", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ReportsSchedulesResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Report Schedule
   *
   * @remarks
   * This API allows you to modify an existing report schedule. You can change the parameters to
   * better suit your needs, ensuring that reports are generated and delivered according to the most
   * current requirements.
   *
   * <strong style="color: green;">Market availability: US only</strong>
   *
   * @returns Successful response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReportSchedule(
    request: ReportScheduler.UpdateReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ReportsSchedulesResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/reports/schedules/{scheduleId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "scheduleId", value: request.scheduleId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v3ReportsSchedulesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: v3ReportsSchedulesResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ReportScheduler {
  export type DeleteReportScheduleRequest = {
    /** A unique identifier assigned to the report schedule. */
    scheduleId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
  };

  export type GetAllReportSchedulesRequest = {
    /** Specifies the type of report to be generated. Example: ITEM for Item Report. */
    reportType: ReportType10;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
  };

  export type GetReportScheduleRequest = {
    scheduleId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
  };

  export type UpdateReportScheduleRequest = {
    /** A unique identifier assigned to the report schedule. */
    scheduleId: string;
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID
     */
    wmQosCorrelationId: string;
    body?: V3ReportsSchedulesRequest;
  };
}
