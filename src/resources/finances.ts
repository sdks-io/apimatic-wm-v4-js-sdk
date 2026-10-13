import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import type { Servers } from "../servers.js";

/**
 * Financial event groups, financial events, and order-level financial events (consolidated from Pod
 * 5).
 */
export class Finances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns financial event groups for the seller.
   *
   * **Status: stub** — no upstream endpoint found that models the SP-API FinancialEventGroup
   * (requires eventGroupId keying, date-range filter, and cursor pagination). Returns empty
   * response pending Phase 5.
   *
   * @returns Success
   *
   * @throws {@link Finances.ListFinancialEventGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFinancialEventGroups(
    request: Finances.ListFinancialEventGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/finances/v4/financialEventGroups"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "MaxResultsPerPage", value: request.maxResultsPerPage, schema: s.optional(s.int()) },
          {
            name: "FinancialEventGroupStartedBefore",
            value: request.financialEventGroupStartedBefore,
            schema: s.optional(s.dateTime()),
          },
          {
            name: "FinancialEventGroupStartedAfter",
            value: request.financialEventGroupStartedAfter,
            schema: s.optional(s.dateTime()),
          },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Finances.ListFinancialEventGroupsError,
      },
      options,
    );
  }

  /**
   * Returns financial events for the authenticated seller via GMP partnerTxnSearch.
   *
   * **Best-effort implementation** — backed by GMP partnerTxnSearch. Returns transaction records
   * for the seller keyed by partnerId.
   *
   * **Unsupported parameters:** PostedAfter, PostedBefore, and NextToken are not supported by the
   * upstream. Supplying any of these parameters returns 400 Bad Request.
   *
   * @returns Success
   *
   * @throws {@link Finances.ListFinancialEventsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFinancialEvents(
    request: Finances.ListFinancialEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/finances/v4/financialEvents"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "MaxResultsPerPage", value: request.maxResultsPerPage, schema: s.optional(s.int()) },
          { name: "PostedAfter", value: request.postedAfter, schema: s.optional(s.dateTime()) },
          { name: "PostedBefore", value: request.postedBefore, schema: s.optional(s.dateTime()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Finances.ListFinancialEventsError,
      },
      options,
    );
  }

  /**
   * Returns financial events for a specific financial event group.
   *
   * **Status: stub** — no upstream maps eventGroupId to a financial event set. Returns empty
   * response pending Phase 5.
   *
   * @returns Success
   *
   * @throws {@link Finances.ListFinancialEventsByGroupIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFinancialEventsByGroupId(
    request: Finances.ListFinancialEventsByGroupIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsByGroupIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/finances/v4/financialEventGroups/{eventGroupId}/financialEvents",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "eventGroupId", value: request.eventGroupId, schema: s.string() }],
        query: [
          { name: "MaxResultsPerPage", value: request.maxResultsPerPage, schema: s.optional(s.int()) },
          { name: "PostedAfter", value: request.postedAfter, schema: s.optional(s.dateTime()) },
          { name: "PostedBefore", value: request.postedBefore, schema: s.optional(s.dateTime()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Finances.ListFinancialEventsByGroupIdError,
      },
      options,
    );
  }

  /**
   * Returns financial events for a specific order via GMP commission endpoint.
   *
   * **Best-effort implementation** — returns commission charges only; refunds, fees, and
   * adjustments are absent. IDOR ownership gate enforced.
   *
   * @returns Success
   *
   * @throws {@link Finances.ListFinancialEventsByOrderIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFinancialEventsByOrderId(
    request: Finances.ListFinancialEventsByOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsByOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/finances/v4/orders/{orderId}/financialEvents"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "orderId", value: request.orderId, schema: s.string() }],
        query: [
          { name: "MaxResultsPerPage", value: request.maxResultsPerPage, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Finances.ListFinancialEventsByOrderIdError,
      },
      options,
    );
  }
}

export namespace Finances {
  export type ListFinancialEventGroupsRequest = {
    /** The maximum number of results per page. */
    maxResultsPerPage?: number;
    /** Financial event groups that opened before this date/time (ISO 8601). */
    financialEventGroupStartedBefore?: Date;
    /** Financial event groups that opened after this date/time (ISO 8601). */
    financialEventGroupStartedAfter?: Date;
    /** Cursor token for the next page of results. */
    nextToken?: string;
  };

  export class ListFinancialEventGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListFinancialEventGroupsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListFinancialEventsRequest = {
    /** Ignored — GMP returns all results in a single page. */
    maxResultsPerPage?: number;
    /** Not supported — returns 400 Bad Request if supplied. */
    postedAfter?: Date;
    /** Not supported — returns 400 Bad Request if supplied. */
    postedBefore?: Date;
    /** Not supported — returns 400 Bad Request if supplied. */
    nextToken?: string;
  };

  export class ListFinancialEventsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListFinancialEventsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListFinancialEventsByGroupIdRequest = {
    /** The identifier of the financial event group. */
    eventGroupId: string;
    /** The maximum number of results to return per page. */
    maxResultsPerPage?: number;
    /** Financial events posted after (or on) this date (ISO 8601). */
    postedAfter?: Date;
    /** Financial events posted before (but not on) this date (ISO 8601). */
    postedBefore?: Date;
    /** Cursor token for the next page of results. */
    nextToken?: string;
  };

  export class ListFinancialEventsByGroupIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListFinancialEventsByGroupIdError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListFinancialEventsByOrderIdRequest = {
    /** Walmart order number — must be numeric (1–50 digits). */
    orderId: string;
    /** Ignored — GMP returns all commission entries in one page. */
    maxResultsPerPage?: number;
    /** Not supported — returns 400 Bad Request if supplied. */
    nextToken?: string;
  };

  export class ListFinancialEventsByOrderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListFinancialEventsByOrderIdError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
