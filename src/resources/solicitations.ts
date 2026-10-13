import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import type { Servers } from "../servers.js";

export class Solicitations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createProductReviewAndSellerFeedbackSolicitation(
    request: Solicitations.CreateProductReviewAndSellerFeedbackSolicitationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/solicitations/v4/orders/{sp-apiOrderId}/solicitations/productReviewAndSellerFeedback",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError,
      },
      options,
    );
  }

  getSolicitationActionsForOrder(
    request: Solicitations.GetSolicitationActionsForOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Solicitations.GetSolicitationActionsForOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/solicitations/v4/orders/{sp-apiOrderId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "sp-apiOrderId", value: request.spApiOrderId, schema: s.string() }],
        query: [{ name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Solicitations.GetSolicitationActionsForOrderError,
      },
      options,
    );
  }
}

export namespace Solicitations {
  export type CreateProductReviewAndSellerFeedbackSolicitationRequest = {
    /** An SP-API order identifier. This specifies the order for which a solicitation is sent. */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This specifies the marketplace in which the order was placed. Only
     * one marketplace can be spec
     */
    marketplaceIds: string[];
  };

  export class CreateProductReviewAndSellerFeedbackSolicitationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateProductReviewAndSellerFeedbackSolicitationError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type GetSolicitationActionsForOrderRequest = {
    /**
     * An SP-API order identifier. This specifies the order for which you want a list of available
     * solicitation types.
     */
    spApiOrderId: string;
    /**
     * A marketplace identifier. This specifies the marketplace in which the order was placed. Only
     * one marketplace can be spec
     */
    marketplaceIds: string[];
  };

  export class GetSolicitationActionsForOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetSolicitationActionsForOrderError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
