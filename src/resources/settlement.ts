import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  settlementDetailsResponseSchema,
  type SettlementDetailsResponse,
} from "../models/settlement-details-response.js";
import {
  settlementPeriodsResponseSchema,
  type SettlementPeriodsResponse,
} from "../models/settlement-periods-response.js";
import {
  transactionSearchResponseSchema,
  type TransactionSearchResponse,
} from "../models/transaction-search-response.js";
import type { Servers } from "../servers.js";

/**
 * Settlement periods and detailed transaction records.
 */
export class Settlement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Paginated settlement transaction detail for a period
   *
   * @remarks
   * Returns paginated settlement transaction detail for the given partner and report date. Contains
   * PII (purchase order IDs). Delegates to mp-payment-reporting GET
   * /v3/report/reconreport/v1/getJson with offset-based pagination. nextToken is a Base64-encoded
   * offset into the report file.
   *
   * @returns Success
   *
   * @throws {@link Settlement.ListSettlementDetailsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementDetails(
    request: Settlement.ListSettlementDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettlementDetailsResponse, Settlement.ListSettlementDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/settlementDetails"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "partnerId", value: request.partnerId, schema: s.string() },
          { name: "reportDate", value: request.reportDate, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementDetailsResponseSchema },
        errorFactory: Settlement.ListSettlementDetailsError,
      },
      options,
    );
  }

  /**
   * List settlement periods for the authenticated seller
   *
   * @remarks
   * Returns available settlement period dates for the authenticated seller. Delegates to
   * mp-payment-reporting GET /v3/report/reconreport/v1/availableReconFiles.
   *
   * @returns Success
   *
   * @throws {@link Settlement.ListSettlementPeriodsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementPeriods(
    request: Settlement.ListSettlementPeriodsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettlementPeriodsResponse, Settlement.ListSettlementPeriodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/settlementPeriods"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementPeriodsResponseSchema },
        errorFactory: Settlement.ListSettlementPeriodsError,
      },
      options,
    );
  }

  /**
   * Search payment transactions across settlement periods
   *
   * @remarks
   * Returns a paginated list of payment transactions for the authenticated seller filtered by
   * optional date range. Contains PII (purchase order IDs). Delegates to GMPPaymentsPlatform (Phase
   * 5).
   *
   * @returns Success
   *
   * @throws {@link Settlement.SearchTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTransactions(
    request: Settlement.SearchTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionSearchResponse, Settlement.SearchTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/search/transactions"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "postedAfter", value: request.postedAfter, schema: s.optional(s.dateTime()) },
          { name: "postedBefore", value: request.postedBefore, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSearchResponseSchema },
        errorFactory: Settlement.SearchTransactionsError,
      },
      options,
    );
  }
}

export namespace Settlement {
  export type ListSettlementDetailsRequest = {
    /** Numeric partner/seller ID */
    partnerId: string;
    /** Report date in MMddyyyy format (e.g. 06172026) */
    reportDate: string;
    /** @default 10 */
    pageSize?: number;
    /** Opaque cursor from a prior response; omit for first page */
    nextToken?: string;
  };

  export class ListSettlementDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListSettlementDetailsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type ListSettlementPeriodsRequest = {
    /** @default 10 */
    pageSize?: number;
    /** Opaque cursor from a prior response; omit for first page */
    nextToken?: string;
  };

  export class ListSettlementPeriodsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ListSettlementPeriodsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SearchTransactionsRequest = {
    /** @default 10 */
    pageSize?: number;
    /** Opaque cursor from a prior response; omit for first page */
    nextToken?: string;
    postedAfter?: Date;
    postedBefore?: Date;
  };

  export class SearchTransactionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SearchTransactionsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
