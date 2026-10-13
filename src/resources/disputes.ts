import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import {
  disputeEligibilityResponseSchema,
  type DisputeEligibilityResponse,
} from "../models/dispute-eligibility-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import type { Servers } from "../servers.js";

/**
 * Dispute eligibility for payment issues.
 */
export class Disputes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check if a seller is eligible to raise a payment dispute
   *
   * @remarks
   * Returns whether the authenticated seller is eligible to raise a payment dispute and, if not,
   * the reason for ineligibility. Delegates to GMPPaymentsPlatform (Phase 5).
   *
   * @returns Success
   *
   * @throws {@link Disputes.CheckDisputeEligibilityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkDisputeEligibility(
    options?: RequestOptions,
  ): ApiPromise<DisputeEligibilityResponse, Disputes.CheckDisputeEligibilityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/disbursements/v4/payment/disputeEligibilityCheck"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeEligibilityResponseSchema },
        errorFactory: Disputes.CheckDisputeEligibilityError,
      },
      options,
    );
  }
}

export namespace Disputes {
  export class CheckDisputeEligibilityError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorList", ErrorList> | Declared<"errorList2", ErrorList> | Declared<"errorList3", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CheckDisputeEligibilityError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 401, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
