import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  annualStatementOptsResponseSchema,
  type AnnualStatementOptsResponse,
} from "../models/annual-statement-opts-response.js";
import {
  disbursementsV4PaymentAutoPayoutRequestSchema,
  type DisbursementsV4PaymentAutoPayoutRequest,
} from "../models/disbursements-v4-payment-auto-payout-request.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  fasterPayoutEligibilityResponseSchema,
  type FasterPayoutEligibilityResponse,
} from "../models/faster-payout-eligibility-response.js";
import {
  initiatePayoutResponseSchema,
  type InitiatePayoutResponse,
} from "../models/initiate-payout-response.js";
import { payoutStatusResponseSchema, type PayoutStatusResponse } from "../models/payout-status-response.js";
import type { Servers } from "../servers.js";

/**
 * Payout status, eligibility, and initiation.
 */
export class Payouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Enable or disable automatic payout scheduling
   *
   * @remarks
   * Enables or disables automatic scheduled payouts for the authenticated seller. When enabled,
   * payouts are triggered automatically on the standard settlement cadence. Returns updated payout
   * status. Requires disbursements:write scope. Delegates to GMPPaymentsPlatform (Phase 5).
   *
   * @returns Success
   *
   * @throws {@link Payouts.ConfigureAutoPayoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  configureAutoPayout(
    request: Payouts.ConfigureAutoPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutStatusResponse, Payouts.ConfigureAutoPayoutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/autoPayout"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: disbursementsV4PaymentAutoPayoutRequestSchema },
      },
      {
        success: { kind: "json", schema: payoutStatusResponseSchema },
        errorFactory: Payouts.ConfigureAutoPayoutError,
      },
      options,
    );
  }

  /**
   * Get annual statement options and opt-in status
   *
   * @remarks
   * Returns whether the authenticated seller is opted in to annual statement generation and the
   * current statement year. Delegates to GMPPaymentsPlatform GET /annualStatementOpts/{partnerId}.
   *
   * @returns Success
   *
   * @throws {@link Payouts.GetAnnualStatementOptsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAnnualStatementOpts(
    options?: RequestOptions,
  ): ApiPromise<AnnualStatementOptsResponse, Payouts.GetAnnualStatementOptsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/annualStatementOpts"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: annualStatementOptsResponseSchema },
        errorFactory: Payouts.GetAnnualStatementOptsError,
      },
      options,
    );
  }

  /**
   * Check eligibility for on-demand accelerated payout
   *
   * @remarks
   * Returns whether the authenticated seller is eligible for an on-demand faster payout, along with
   * the approved amount and any ineligibility reason. Delegates to GMPPaymentsPlatform GET
   * /fasterPayout/eligibility/{partnerId}.
   *
   * @returns Success
   *
   * @throws {@link Payouts.GetFasterPayoutEligibilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFasterPayoutEligibility(
    options?: RequestOptions,
  ): ApiPromise<FasterPayoutEligibilityResponse, Payouts.GetFasterPayoutEligibilityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/fasterPayoutEligibility"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fasterPayoutEligibilityResponseSchema },
        errorFactory: Payouts.GetFasterPayoutEligibilityError,
      },
      options,
    );
  }

  /**
   * Get current payout status for the authenticated seller
   *
   * @remarks
   * Returns the current payout status for the authenticated seller, including scheduled payout
   * date, amount, and lifecycle state (Pending, Processing, Completed, Failed, OnHold). Delegates
   * to GMPPaymentsPlatform (Phase 5).
   *
   * @returns Success
   *
   * @throws {@link Payouts.GetPaymentStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentStatus(
    options?: RequestOptions,
  ): ApiPromise<PayoutStatusResponse, Payouts.GetPaymentStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/paymentstatus"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutStatusResponseSchema },
        errorFactory: Payouts.GetPaymentStatusError,
      },
      options,
    );
  }

  /**
   * Initiate an on-demand accelerated payout
   *
   * @remarks
   * Triggers an immediate on-demand payout for the authenticated seller, bypassing the standard
   * settlement schedule. Returns the payout ID and initial status. Requires disbursements:write
   * scope. Delegates to GMPPaymentsPlatform (Phase 5).
   *
   * @returns Payout initiated
   *
   * @throws {@link Payouts.InitiateFasterPayoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateFasterPayout(
    options?: RequestOptions,
  ): ApiPromise<InitiatePayoutResponse, Payouts.InitiateFasterPayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/fasterPayout"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: initiatePayoutResponseSchema },
        errorFactory: Payouts.InitiateFasterPayoutError,
      },
      options,
    );
  }
}

export namespace Payouts {
  export type ConfigureAutoPayoutRequest = {
    body: DisbursementsV4PaymentAutoPayoutRequest;
  };

  export class ConfigureAutoPayoutError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfigureAutoPayoutError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export class GetAnnualStatementOptsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetAnnualStatementOptsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export class GetFasterPayoutEligibilityError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetFasterPayoutEligibilityError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export class GetPaymentStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetPaymentStatusError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export class InitiateFasterPayoutError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<InitiateFasterPayoutError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 409, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
