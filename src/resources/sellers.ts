import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  getMarketplaceParticipationsResponseSchema,
  type GetMarketplaceParticipationsResponse,
} from "../models/get-marketplace-participations-response.js";
import { sellerAccountSchema, type SellerAccount } from "../models/seller-account.js";
import type { Servers } from "../servers.js";

/**
 * Seller account and marketplace participation information
 */
export class Sellers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns the seller's account details and status
   *
   * @remarks
   * Returns the authenticated seller's account information including business name, email, account
   * status, and seller type.
   *
   * @returns Success
   *
   * @throws {@link Sellers.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(options?: RequestOptions): ApiPromise<SellerAccount, Sellers.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/sellers/v4/account"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sellerAccountSchema },
        errorFactory: Sellers.GetAccountError,
      },
      options,
    );
  }

  /**
   * Returns marketplaces where the seller is registered and active
   *
   * @remarks
   * Returns the list of marketplaces the authenticated seller participates in (e.g. Walmart US,
   * Walmart Canada, Walmart Mexico).
   *
   * @returns Success
   *
   * @throws {@link Sellers.GetMarketplaceParticipationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketplaceParticipations(
    options?: RequestOptions,
  ): ApiPromise<GetMarketplaceParticipationsResponse, Sellers.GetMarketplaceParticipationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/sellers/v4/marketplaceParticipations"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketplaceParticipationsResponseSchema },
        errorFactory: Sellers.GetMarketplaceParticipationsError,
      },
      options,
    );
  }
}

export namespace Sellers {
  export class GetAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export class GetMarketplaceParticipationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetMarketplaceParticipationsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
