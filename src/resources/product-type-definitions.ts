import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import {
  productTypeDefinitionSchema,
  type ProductTypeDefinition,
} from "../models/product-type-definition.js";
import { productTypeListSchema, type ProductTypeList } from "../models/product-type-list.js";
import type { Servers } from "../servers.js";

export class ProductTypeDefinitions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns the schema for a specific product type
   *
   * @remarks
   * **Placeholder — not yet implemented.**
   *
   * @returns Product type definition schema
   *
   * @throws {@link ProductTypeDefinitions.GetDefinitionsProductTypeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDefinitionsProductType(
    request: ProductTypeDefinitions.GetDefinitionsProductTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductTypeDefinition, ProductTypeDefinitions.GetDefinitionsProductTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/definitions/v4/productTypes/{productType}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "productType", value: request.productType, schema: s.string() }],
        query: [
          { name: "sellerId", value: request.sellerId, schema: s.optional(s.string()) },
          { name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productTypeDefinitionSchema },
        errorFactory: ProductTypeDefinitions.GetDefinitionsProductTypeError,
      },
      options,
    );
  }

  /**
   * Returns a list of product type definitions
   *
   * @remarks
   * **Placeholder — not yet implemented.**
   *
   * @returns Product type list
   *
   * @throws {@link ProductTypeDefinitions.SearchDefinitionsProductTypesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDefinitionsProductTypes(
    request: ProductTypeDefinitions.SearchDefinitionsProductTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductTypeList, ProductTypeDefinitions.SearchDefinitionsProductTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/definitions/v4/productTypes"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "keywords", value: request.keywords, schema: s.optional(s.string()) },
          { name: "itemName", value: request.itemName, schema: s.optional(s.string()) },
          { name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en_US") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productTypeListSchema },
        errorFactory: ProductTypeDefinitions.SearchDefinitionsProductTypesError,
      },
      options,
    );
  }
}

export namespace ProductTypeDefinitions {
  export type GetDefinitionsProductTypeRequest = {
    productType: string;
    sellerId?: string;
    /** @default "en_US" */
    locale?: string;
  };

  export class GetDefinitionsProductTypeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetDefinitionsProductTypeError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }

  export type SearchDefinitionsProductTypesRequest = {
    keywords?: string;
    itemName?: string;
    /** @default "en_US" */
    locale?: string;
  };

  export class SearchDefinitionsProductTypesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<SearchDefinitionsProductTypesError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
