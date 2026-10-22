import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { claimsGroupSchema, type ClaimsGroup } from "../models/claims-group.js";
import { documentTypeSchema, type DocumentType } from "../models/document-type.js";
import { documentType1Schema, type DocumentType1 } from "../models/document-type1.js";
import { orderSchema, type Order } from "../models/order.js";
import { payloadSchema, type Payload } from "../models/payload.js";
import { sortBySchema, type SortBy } from "../models/sort-by.js";
import {
  v3ClaimsShipmentProtectionClaimDocumentsRequestSchema,
  type V3ClaimsShipmentProtectionClaimDocumentsRequest,
} from "../models/v3-claims-shipment-protection-claim-documents-request.js";
import {
  v3ClaimsShipmentProtectionClaimDocuments400Error1Schema,
  type V3ClaimsShipmentProtectionClaimDocuments400Error1,
} from "../models/v3-claims-shipment-protection-claim-documents400-error1.js";
import {
  v3ClaimsShipmentProtectionClaimDocuments404Error1Schema,
  type V3ClaimsShipmentProtectionClaimDocuments404Error1,
} from "../models/v3-claims-shipment-protection-claim-documents404-error1.js";
import {
  v3ClaimsShipmentProtectionClaimDocuments500Error1Schema,
  type V3ClaimsShipmentProtectionClaimDocuments500Error1,
} from "../models/v3-claims-shipment-protection-claim-documents500-error1.js";
import {
  v3ClaimsShipmentProtectionClaimHistoryResponseSchema,
  type V3ClaimsShipmentProtectionClaimHistoryResponse,
} from "../models/v3-claims-shipment-protection-claim-history-response.js";
import {
  v3ClaimsShipmentProtectionClaimHistory400Error1Schema,
  type V3ClaimsShipmentProtectionClaimHistory400Error1,
} from "../models/v3-claims-shipment-protection-claim-history400-error1.js";
import {
  v3ClaimsShipmentProtectionClaimHistory404Error1Schema,
  type V3ClaimsShipmentProtectionClaimHistory404Error1,
} from "../models/v3-claims-shipment-protection-claim-history404-error1.js";
import {
  v3ClaimsShipmentProtectionClaimHistory500Error1Schema,
  type V3ClaimsShipmentProtectionClaimHistory500Error1,
} from "../models/v3-claims-shipment-protection-claim-history500-error1.js";
import {
  v3ClaimsShipmentProtectionClaim400Error1Schema,
  type V3ClaimsShipmentProtectionClaim400Error1,
} from "../models/v3-claims-shipment-protection-claim400-error1.js";
import {
  v3ClaimsShipmentProtectionClaim401Error1Schema,
  type V3ClaimsShipmentProtectionClaim401Error1,
} from "../models/v3-claims-shipment-protection-claim401-error1.js";
import {
  v3ClaimsShipmentProtectionClaim404Error1Schema,
  type V3ClaimsShipmentProtectionClaim404Error1,
} from "../models/v3-claims-shipment-protection-claim404-error1.js";
import {
  v3ClaimsShipmentProtectionClaim500Error1Schema,
  type V3ClaimsShipmentProtectionClaim500Error1,
} from "../models/v3-claims-shipment-protection-claim500-error1.js";
import {
  v3ClaimsShipmentProtection400Error1Schema,
  type V3ClaimsShipmentProtection400Error1,
} from "../models/v3-claims-shipment-protection400-error1.js";
import {
  v3ClaimsShipmentProtection401Error1Schema,
  type V3ClaimsShipmentProtection401Error1,
} from "../models/v3-claims-shipment-protection401-error1.js";
import {
  v3ClaimsShipmentProtection500Error1Schema,
  type V3ClaimsShipmentProtection500Error1,
} from "../models/v3-claims-shipment-protection500-error1.js";
import type { Servers } from "../servers.js";

export class ShipmentProtection {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Download claim documents
   *
   * @remarks
   * Returns a ZIP file containing one or more uploaded claim documents.<br><b
   * style='color:green;'>Market availability: US Only</b>
   *
   * @returns ZIP file of documents
   *
   * @throws {@link ShipmentProtection.DownloadClaimDocumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadClaimDocuments(
    request: ShipmentProtection.DownloadClaimDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ShipmentProtection.DownloadClaimDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection/claim/{claimNumber}/documents"),
        auth: noneAuth,
        pathParams: [{ name: "claimNumber", value: request.claimNumber, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: v3ClaimsShipmentProtectionClaimDocumentsRequestSchema,
        },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ShipmentProtection.DownloadClaimDocumentsError,
      },
      options,
    );
  }

  /**
   * Get claim details
   *
   * @remarks
   * Retrieves detailed information for a single claim.<br><b style='color:green;'>Market
   * availability: US Only</b>
   *
   * @returns Details retrieved successfully.
   *
   * @throws {@link ShipmentProtection.GetClaimDetailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClaimDetails(
    request: ShipmentProtection.GetClaimDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ShipmentProtection.GetClaimDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection/claim/{claimNumber}"),
        auth: noneAuth,
        pathParams: [{ name: "claimNumber", value: request.claimNumber, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ShipmentProtection.GetClaimDetailsError,
      },
      options,
    );
  }

  /**
   * Get claim history
   *
   * @remarks
   * Returns a chronological log of status changes, notes, and uploaded documents.<br><b
   * style='color:green;'>Market availability: US Only</b>
   *
   * @returns History retrieved successfully.
   *
   * @throws {@link ShipmentProtection.GetClaimHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClaimHistory(
    request: ShipmentProtection.GetClaimHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ClaimsShipmentProtectionClaimHistoryResponse, ShipmentProtection.GetClaimHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection/claim/{claimNumber}/history"),
        auth: noneAuth,
        pathParams: [{ name: "claimNumber", value: request.claimNumber, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ClaimsShipmentProtectionClaimHistoryResponseSchema },
        errorFactory: ShipmentProtection.GetClaimHistoryError,
      },
      options,
    );
  }

  /**
   * Get all claims
   *
   * @remarks
   * Returns a paginated list of claims, with optional filters.<br><b style='color:green;'>Market
   * availability: US Only</b>
   *
   * @returns Claims retrieved successfully.
   *
   * @throws {@link ShipmentProtection.ListClaimsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClaims(
    request: ShipmentProtection.ListClaimsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ShipmentProtection.ListClaimsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "claimsGroup",
            value: request.claimsGroup,
            schema: s.optional(s.lazy(() => claimsGroupSchema)),
          },
          { name: "claimNumber", value: request.claimNumber, schema: s.optional(s.string()) },
          { name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.optional(s.string()) },
          { name: "trackingNo", value: request.trackingNo, schema: s.optional(s.string()) },
          { name: "claimTypes", value: request.claimTypes, schema: s.optional(s.string()) },
          { name: "claimStatuses", value: request.claimStatuses, schema: s.optional(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBySchema)) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => orderSchema)) },
        ],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ShipmentProtection.ListClaimsError,
      },
      options,
    );
  }

  /**
   * Submit additional information
   *
   * @remarks
   * Adds documents or notes to an existing claim when Walmart requests more details.<br><b
   * style='color:green;'>Market availability: US Only</b>
   *
   * @returns Additional information submitted successfully.
   *
   * @throws {@link ShipmentProtection.SubmitAdditionalInfoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitAdditionalInfo(
    request: ShipmentProtection.SubmitAdditionalInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ShipmentProtection.SubmitAdditionalInfoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection/claim/{claimNumber}"),
        auth: noneAuth,
        pathParams: [{ name: "claimNumber", value: request.claimNumber, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "documentTypes",
              value: request.documentTypes,
              schema: s.array(s.lazy(() => documentType1Schema)),
            },
            { kind: "text", name: "notes", value: request.notes, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ShipmentProtection.SubmitAdditionalInfoError,
      },
      options,
    );
  }

  /**
   * Submit a claim
   *
   * @remarks
   * Creates a shipment-protection claim. Send multipart/form-data with files, documentTypes, and
   * payload.<br><b style='color:green;'>Market availability: US Only</b>
   *
   * @returns Claim submitted successfully
   *
   * @throws {@link ShipmentProtection.SubmitClaimError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitClaim(
    request: ShipmentProtection.SubmitClaimRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ShipmentProtection.SubmitClaimError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/claims/shipment-protection/claim"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "documentTypes",
              value: request.documentTypes,
              schema: s.array(s.lazy(() => documentTypeSchema)),
            },
            { kind: "text", name: "payload", value: request.payload, schema: payloadSchema },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ShipmentProtection.SubmitClaimError,
      },
      options,
    );
  }
}

export namespace ShipmentProtection {
  export type DownloadClaimDocumentsRequest = {
    /** Exact claim number for filtering (query) or identifying a specific claim (path). */
    claimNumber: string;
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
    body: V3ClaimsShipmentProtectionClaimDocumentsRequest;
  };

  export class DownloadClaimDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<
          "v3ClaimsShipmentProtectionClaimDocuments400Error1",
          V3ClaimsShipmentProtectionClaimDocuments400Error1
        >
      | Declared<
          "v3ClaimsShipmentProtectionClaimDocuments404Error1",
          V3ClaimsShipmentProtectionClaimDocuments404Error1
        >
      | Declared<
          "v3ClaimsShipmentProtectionClaimDocuments500Error1",
          V3ClaimsShipmentProtectionClaimDocuments500Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadClaimDocumentsError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtectionClaimDocuments400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimDocuments400Error1Schema },
      },
      {
        on: 404,
        kind: "v3ClaimsShipmentProtectionClaimDocuments404Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimDocuments404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtectionClaimDocuments500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimDocuments500Error1Schema },
      },
    ];
  }

  export type GetClaimDetailsRequest = {
    /** Exact claim number for filtering (query) or identifying a specific claim (path). */
    claimNumber: string;
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class GetClaimDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"v3ClaimsShipmentProtectionClaim400Error1", V3ClaimsShipmentProtectionClaim400Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim404Error1", V3ClaimsShipmentProtectionClaim404Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim500Error1", V3ClaimsShipmentProtectionClaim500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClaimDetailsError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtectionClaim400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim400Error1Schema },
      },
      {
        on: 404,
        kind: "v3ClaimsShipmentProtectionClaim404Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtectionClaim500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim500Error1Schema },
      },
    ];
  }

  export type GetClaimHistoryRequest = {
    /** Exact claim number for filtering (query) or identifying a specific claim (path). */
    claimNumber: string;
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class GetClaimHistoryError extends ApiError {
    declare readonly payload:
      | Declared<
          "v3ClaimsShipmentProtectionClaimHistory400Error1",
          V3ClaimsShipmentProtectionClaimHistory400Error1
        >
      | Declared<
          "v3ClaimsShipmentProtectionClaimHistory404Error1",
          V3ClaimsShipmentProtectionClaimHistory404Error1
        >
      | Declared<
          "v3ClaimsShipmentProtectionClaimHistory500Error1",
          V3ClaimsShipmentProtectionClaimHistory500Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClaimHistoryError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtectionClaimHistory400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimHistory400Error1Schema },
      },
      {
        on: 404,
        kind: "v3ClaimsShipmentProtectionClaimHistory404Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimHistory404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtectionClaimHistory500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaimHistory500Error1Schema },
      },
    ];
  }

  export type ListClaimsRequest = {
    /**
     * Maximum number of results to return in the response page (default 25, maximum 300).
     *
     * @default 25
     */
    limit?: number;
    /**
     * Zero‑based index of the first result to return (default 0). Use together with `limit` for
     * pagination.
     *
     * @default 0
     */
    offset?: number;
    /** Filter claims by broad status group: OPEN, ACTION_NEEDED, or CLOSED. */
    claimsGroup?: ClaimsGroup;
    /** Exact claim number for filtering (query) or identifying a specific claim (path). */
    claimNumber?: string;
    /** Filter by the Walmart purchase order ID associated with the claim. */
    purchaseOrderId?: string;
    /** Filter by the package tracking number associated with the claim. */
    trackingNo?: string;
    /** Comma‑separated list of claim types to include (LIT, LAD, DAMAGED). */
    claimTypes?: string;
    /**
     * Comma‑separated list of claim status codes to include (INITIATED, IN_REVIEW, NEED_INFO,
     * etc.).
     */
    claimStatuses?: string;
    /** Field to sort by; currently supports `claimDate`. */
    sortBy?: SortBy;
    /** Sort direction: `ASC` for ascending or `DESC` for descending (default DESC). */
    sortOrder?: Order;
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class ListClaimsError extends ApiError {
    declare readonly payload:
      | Declared<"v3ClaimsShipmentProtection400Error1", V3ClaimsShipmentProtection400Error1>
      | Declared<"v3ClaimsShipmentProtection401Error1", V3ClaimsShipmentProtection401Error1>
      | Declared<"v3ClaimsShipmentProtection500Error1", V3ClaimsShipmentProtection500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClaimsError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtection400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtection400Error1Schema },
      },
      {
        on: 401,
        kind: "v3ClaimsShipmentProtection401Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtection401Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtection500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtection500Error1Schema },
      },
    ];
  }

  export type SubmitAdditionalInfoRequest = {
    /** Exact claim number for filtering (query) or identifying a specific claim (path). */
    claimNumber: string;
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Additional supporting file. */
    files: FileInput;
    /** Mapping for each uploaded file. */
    documentTypes: DocumentType1[];
    /** Additional information requested by Walmart */
    notes?: string;
  };

  export class SubmitAdditionalInfoError extends ApiError {
    declare readonly payload:
      | Declared<"v3ClaimsShipmentProtectionClaim400Error1", V3ClaimsShipmentProtectionClaim400Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim404Error1", V3ClaimsShipmentProtectionClaim404Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim500Error1", V3ClaimsShipmentProtectionClaim500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitAdditionalInfoError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtectionClaim400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim400Error1Schema },
      },
      {
        on: 404,
        kind: "v3ClaimsShipmentProtectionClaim404Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim404Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtectionClaim500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim500Error1Schema },
      },
    ];
  }

  export type SubmitClaimRequest = {
    /** The access token retrieved in the Token API call. */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues; use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /**
     * Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service
     * identifier provided by Walmart.
     */
    wmSvcName: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     */
    wmConsumerChannelType?: string;
    /** Supporting file (image, PDF, etc.). */
    files: FileInput;
    /** Maps each uploaded file to its document category. */
    documentTypes: DocumentType[];
    /** Claim details. */
    payload: Payload;
  };

  export class SubmitClaimError extends ApiError {
    declare readonly payload:
      | Declared<"v3ClaimsShipmentProtectionClaim400Error1", V3ClaimsShipmentProtectionClaim400Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim401Error1", V3ClaimsShipmentProtectionClaim401Error1>
      | Declared<"v3ClaimsShipmentProtectionClaim500Error1", V3ClaimsShipmentProtectionClaim500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitClaimError> = [
      {
        on: 400,
        kind: "v3ClaimsShipmentProtectionClaim400Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim400Error1Schema },
      },
      {
        on: 401,
        kind: "v3ClaimsShipmentProtectionClaim401Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim401Error1Schema },
      },
      {
        on: 500,
        kind: "v3ClaimsShipmentProtectionClaim500Error1",
        decode: { kind: "json", schema: v3ClaimsShipmentProtectionClaim500Error1Schema },
      },
    ];
  }
}
