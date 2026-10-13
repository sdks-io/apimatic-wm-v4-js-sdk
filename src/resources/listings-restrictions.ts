import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { conditionType1Schema, type ConditionType1 } from "../models/condition-type1.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { restrictionListSchema, type RestrictionList } from "../models/restriction-list.js";
import type { Servers } from "../servers.js";

export class ListingsRestrictions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns listing restrictions for an item in the indicated marketplace
   *
   * @remarks
   * Returns restrictions on listing an item for a given ASIN and seller. A successful response does
   * not guarantee the seller can list — check the restrictions array.
   *
   * @returns Success
   *
   * @throws {@link ListingsRestrictions.GetListingsRestrictionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingsRestrictions(
    request: ListingsRestrictions.GetListingsRestrictionsRequest,
    options?: RequestOptions,
  ): ApiPromise<RestrictionList, ListingsRestrictions.GetListingsRestrictionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/listings/v4/restrictions"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "asin", value: request.asin, schema: s.string() },
          { name: "conditionType", value: request.conditionType, schema: conditionType1Schema },
          { name: "sellerId", value: request.sellerId, schema: s.string() },
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "reasonLocale", value: request.reasonLocale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: restrictionListSchema },
        errorFactory: ListingsRestrictions.GetListingsRestrictionsError,
      },
      options,
    );
  }
}

export namespace ListingsRestrictions {
  export type GetListingsRestrictionsRequest = {
    /** Walmart Item ID (maps to ASIN in Walmart Seller API) */
    asin: string;
    conditionType: ConditionType1;
    sellerId: string;
    marketplaceIds: string[];
    /** Locale for localized restriction reason messages @default "en_US" */
    reasonLocale?: string;
  };

  export class GetListingsRestrictionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetListingsRestrictionsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
