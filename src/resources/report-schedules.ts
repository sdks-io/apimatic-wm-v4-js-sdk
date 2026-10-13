import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelReportScheduleResponseSchema,
  type CancelReportScheduleResponse,
} from "../models/cancel-report-schedule-response.js";
import {
  createReportScheduleResponseSchema,
  type CreateReportScheduleResponse,
} from "../models/create-report-schedule-response.js";
import {
  createReportScheduleSpecificationSchema,
  type CreateReportScheduleSpecification,
} from "../models/create-report-schedule-specification.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  getReportSchedulesResponseSchema,
  type GetReportSchedulesResponse,
} from "../models/get-report-schedules-response.js";
import { reportScheduleSchema, type ReportSchedule } from "../models/report-schedule.js";
import { reportType1Schema, type ReportType1 } from "../models/report-type1.js";
import type { Servers } from "../servers.js";

export class ReportSchedules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels the report schedule that you specify
   *
   * @returns Schedule cancelled
   *
   * @throws {@link ReportSchedules.CancelReportScheduleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelReportSchedule(
    request: ReportSchedules.CancelReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelReportScheduleResponse, ReportSchedules.CancelReportScheduleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/reports/v4/schedules/{reportScheduleId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "reportScheduleId", value: request.reportScheduleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelReportScheduleResponseSchema },
        errorFactory: ReportSchedules.CancelReportScheduleError,
      },
      options,
    );
  }

  /**
   * Creates a report schedule
   *
   * @returns Schedule created
   *
   * @throws {@link ReportSchedules.CreateReportScheduleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReportSchedule(
    request: ReportSchedules.CreateReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateReportScheduleResponse, ReportSchedules.CreateReportScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/reports/v4/schedules"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createReportScheduleSpecificationSchema },
      },
      {
        success: { kind: "json", schema: createReportScheduleResponseSchema },
        errorFactory: ReportSchedules.CreateReportScheduleError,
      },
      options,
    );
  }

  /**
   * Returns report schedule details for the given schedule ID
   *
   * @returns Success
   *
   * @throws {@link ReportSchedules.GetReportScheduleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportSchedule(
    request: ReportSchedules.GetReportScheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportSchedule, ReportSchedules.GetReportScheduleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/reports/v4/schedules/{reportScheduleId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "reportScheduleId", value: request.reportScheduleId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportScheduleSchema },
        errorFactory: ReportSchedules.GetReportScheduleError,
      },
      options,
    );
  }

  /**
   * Returns report schedule details that match the filters
   *
   * @returns Success
   *
   * @throws {@link ReportSchedules.GetReportSchedulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportSchedules(
    request: ReportSchedules.GetReportSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetReportSchedulesResponse, ReportSchedules.GetReportSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/reports/v4/schedules"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          {
            name: "reportTypes",
            value: request.reportTypes,
            schema: s.optional(s.array(s.lazy(() => reportType1Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getReportSchedulesResponseSchema },
        errorFactory: ReportSchedules.GetReportSchedulesError,
      },
      options,
    );
  }
}

export namespace ReportSchedules {
  export type CancelReportScheduleRequest = {
    reportScheduleId: string;
  };

  export class CancelReportScheduleError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelReportScheduleError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type CreateReportScheduleRequest = {
    body: CreateReportScheduleSpecification;
  };

  export class CreateReportScheduleError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateReportScheduleError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetReportScheduleRequest = {
    reportScheduleId: string;
  };

  export class GetReportScheduleError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetReportScheduleError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetReportSchedulesRequest = {
    /**
     * Filter by report type. Values are Walmart Partner Reporting Platform enum names. Runtime
     * availability is CCM-controlled; consult PRP docs for current PROD-enabled types.
     */
    reportTypes?: ReportType1[];
  };

  export class GetReportSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetReportSchedulesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
