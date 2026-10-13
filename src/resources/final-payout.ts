import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  disbursementsV4FinalPayoutCaseUpdateStatusRequestSchema,
  type DisbursementsV4FinalPayoutCaseUpdateStatusRequest,
} from "../models/disbursements-v4-final-payout-case-update-status-request.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  finalPayoutCaseStatusResponseSchema,
  type FinalPayoutCaseStatusResponse,
} from "../models/final-payout-case-status-response.js";
import type { Servers } from "../servers.js";

/**
 * Final payout case management.
 */
export class FinalPayout {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the status of a final payout case
   *
   * @remarks
   * Returns the current state, case ID, and payable amount for the authenticated seller's final
   * payout case (used when a seller account is being offboarded). Delegates to GMPPaymentsPlatform
   * (Phase 5).
   *
   * @returns Success
   *
   * @throws {@link FinalPayout.GetFinalPayoutCaseStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFinalPayoutCaseStatus(
    options?: RequestOptions,
  ): ApiPromise<FinalPayoutCaseStatusResponse, FinalPayout.GetFinalPayoutCaseStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/finalPayout/case/status"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: finalPayoutCaseStatusResponseSchema },
        errorFactory: FinalPayout.GetFinalPayoutCaseStatusError,
      },
      options,
    );
  }

  /**
   * Update the status of a final payout case
   *
   * @remarks
   * Transitions the authenticated seller's final payout case to Resolved or Closed, optionally
   * including resolution notes. Requires disbursements:write scope. Delegates to
   * GMPPaymentsPlatform (Phase 5).
   *
   * @returns Success
   *
   * @throws {@link FinalPayout.UpdateFinalPayoutCaseStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFinalPayoutCaseStatus(
    request: FinalPayout.UpdateFinalPayoutCaseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<FinalPayoutCaseStatusResponse, FinalPayout.UpdateFinalPayoutCaseStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/disbursements/v4/finalPayout/case/updateStatus"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: disbursementsV4FinalPayoutCaseUpdateStatusRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: finalPayoutCaseStatusResponseSchema },
        errorFactory: FinalPayout.UpdateFinalPayoutCaseStatusError,
      },
      options,
    );
  }
}

export namespace FinalPayout {
  export class GetFinalPayoutCaseStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetFinalPayoutCaseStatusError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type UpdateFinalPayoutCaseStatusRequest = {
    body: DisbursementsV4FinalPayoutCaseUpdateStatusRequest;
  };

  export class UpdateFinalPayoutCaseStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateFinalPayoutCaseStatusError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
