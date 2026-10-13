import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentType1Schema, type ContentType1 } from "../models/content-type1.js";
import {
  createUploadDestinationResponseSchema,
  type CreateUploadDestinationResponse,
} from "../models/create-upload-destination-response.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { resourceSchema, type Resource } from "../models/resource.js";
import type { Servers } from "../servers.js";

export class Uploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Creates an upload destination for the resource given
   *
   * @remarks
   * Returns a pre-signed URL and upload destination ID for uploading a document for the given
   * resource (e.g. feeds, reports). **Do not log the pre-signed URL — it contains temporary
   * credentials.**
   *
   * @returns Upload destination created
   *
   * @throws {@link Uploads.CreateUploadDestinationForResourceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUploadDestinationForResource(
    request: Uploads.CreateUploadDestinationForResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateUploadDestinationResponse, Uploads.CreateUploadDestinationForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/uploads/v4/uploadDestinations/{resource}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "resource", value: request.resource, schema: resourceSchema }],
        query: [
          { name: "contentType", value: request.contentType, schema: contentType1Schema },
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
        ],
        headers: [
          { name: "contentMD5", value: request.contentMd5, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createUploadDestinationResponseSchema },
        errorFactory: Uploads.CreateUploadDestinationForResourceError,
      },
      options,
    );
  }
}

export namespace Uploads {
  export type CreateUploadDestinationForResourceRequest = {
    /** The resource type for the upload destination (e.g. feeds) */
    resource: Resource;
    /** MIME type of the content to be uploaded */
    contentType: ContentType1;
    marketplaceIds: string[];
    /** MD5 hash of the content to be uploaded, encoded as base64 */
    contentMd5: string;
  };

  export class CreateUploadDestinationForResourceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateUploadDestinationForResourceError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
