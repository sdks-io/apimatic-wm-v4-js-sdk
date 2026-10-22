import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error5Schema, type Error5 } from "../models/error5.js";
import {
  v3ShippingLabelsCarriersPackageTypesResponseSchema,
  type V3ShippingLabelsCarriersPackageTypesResponse,
} from "../models/v3-shipping-labels-carriers-package-types-response.js";
import {
  v3ShippingLabelsCarriersResponseSchema,
  type V3ShippingLabelsCarriersResponse,
} from "../models/v3-shipping-labels-carriers-response.js";
import {
  v3ShippingLabelsCarriersTrackingsResponseSchema,
  type V3ShippingLabelsCarriersTrackingsResponse,
} from "../models/v3-shipping-labels-carriers-trackings-response.js";
import {
  v3ShippingLabelsCarriersTrackings400Error1Schema,
  type V3ShippingLabelsCarriersTrackings400Error1,
} from "../models/v3-shipping-labels-carriers-trackings400-error1.js";
import {
  v3ShippingLabelsPurchaseOrdersResponseSchema,
  type V3ShippingLabelsPurchaseOrdersResponse,
} from "../models/v3-shipping-labels-purchase-orders-response.js";
import {
  v3ShippingLabelsRequestSchema,
  type V3ShippingLabelsRequest,
} from "../models/v3-shipping-labels-request.js";
import {
  v3ShippingLabelsResponseSchema,
  type V3ShippingLabelsResponse,
} from "../models/v3-shipping-labels-response.js";
import {
  v3ShippingLabelsShippingEstimatesRequestSchema,
  type V3ShippingLabelsShippingEstimatesRequest,
} from "../models/v3-shipping-labels-shipping-estimates-request.js";
import {
  v3ShippingLabelsShippingEstimatesResponseSchema,
  type V3ShippingLabelsShippingEstimatesResponse,
} from "../models/v3-shipping-labels-shipping-estimates-response.js";
import {
  v3ShippingLabelsShippingEstimates400Error1Schema,
  type V3ShippingLabelsShippingEstimates400Error1,
} from "../models/v3-shipping-labels-shipping-estimates400-error1.js";
import {
  v3ShippingLabels500Error1Schema,
  type V3ShippingLabels500Error1,
} from "../models/v3-shipping-labels500-error1.js";
import {
  v3ShippingMultiPackageLabelsRequestSchema,
  type V3ShippingMultiPackageLabelsRequest,
} from "../models/v3-shipping-multi-package-labels-request.js";
import {
  v3ShippingMultiPackageLabelsResponseSchema,
  type V3ShippingMultiPackageLabelsResponse,
} from "../models/v3-shipping-multi-package-labels-response.js";
import {
  v3ShippingMultiPackageLabels500Error1Schema,
  type V3ShippingMultiPackageLabels500Error1,
} from "../models/v3-shipping-multi-package-labels500-error1.js";
import {
  v3ShippingScanFormRequestSchema,
  type V3ShippingScanFormRequest,
} from "../models/v3-shipping-scan-form-request.js";
import {
  v3ShippingScanFormResponseSchema,
  type V3ShippingScanFormResponse,
} from "../models/v3-shipping-scan-form-response.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarketSchema, type WmMarket } from "../models/wm-market.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import { wmMarket11Schema, type WmMarket11 } from "../models/wm-market11.js";
import { wmMarket6Schema, type WmMarket6 } from "../models/wm-market6.js";
import type { Servers } from "../servers.js";

export class ShipWithWalmart {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create label
   *
   * @remarks
   * Generates a shipping label using the provided shipment information. A successful response
   * includes a tracking number and a label file in the media type specified in the Accept
   * header.<br><br>This API is supported for <b>all shipping programs</b>, including <b>Walmart
   * Provided Shipping (WPS)</b> and <b>Ship with Walmart (SWW)</b>.<br><br><b>Media Type Options
   * (via Accept header):</b><br>• application/json, application/pdf → Returns label in PDF format.
   * • application/json, image/png → Returns label in PNG format. • application/json → Returns
   * tracking info only in JSON. <br><br> <b>Note:</b> The <b>Ship with Walmart service from China
   * to the U.S.</b> is <b>paused until further notice</b>.
   *
   * <b style="color: green;">Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ShipWithWalmart.CreateLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabel(
    request: ShipWithWalmart.CreateLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsResponse, ShipWithWalmart.CreateLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/shipping/labels"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3ShippingLabelsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsResponseSchema },
        errorFactory: ShipWithWalmart.CreateLabelError,
      },
      options,
    );
  }

  /**
   * Create label with Multi Package
   *
   * @remarks
   * Creates a shipping label for items, supporting multiple packages per request. A successful
   * response includes a tracking number and a label file in the media type specified by the Accept
   * header. This API supports <b>all shipping programs</b>, including <b>Walmart Provided Shipping
   * (WPS)</b> and <b>Ship with Walmart (SWW)</b>.<br><br><b>Media Type Options (via Accept
   * header):</b><br>•application/json, application/pdf → Returns the label in PDF
   * format.<br>•application/json → Returns tracking info only, in JSON format.
   *
   * <b style="color: green;">Market availability: CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ShipWithWalmart.CreateLabelMpsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabelMps(
    request: ShipWithWalmart.CreateLabelMpsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingMultiPackageLabelsResponse, ShipWithWalmart.CreateLabelMpsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/shipping/multi-package/labels"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3ShippingMultiPackageLabelsRequestSchema },
      },
      {
        success: { kind: "json", schema: v3ShippingMultiPackageLabelsResponseSchema },
        errorFactory: ShipWithWalmart.CreateLabelMpsError,
      },
      options,
    );
  }

  /**
   * Discard label
   *
   * @remarks
   * Marks a previously generated shipping label as discarded. This API is used when the label
   * should no longer be used for shipment processing. <br><br> <b>Applicable Shipping
   * Programs:</b><br>This API is supported for the following <b>shipping programs: Walmart Provided
   * Shipping (WPS) and Ship with Walmart (SWW).</b>
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ShipWithWalmart.DiscardLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discardLabel(
    request: ShipWithWalmart.DiscardLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsCarriersTrackingsResponse, ShipWithWalmart.DiscardLabelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/shipping/labels/carriers/{carrierShortName}/trackings/{trackingNo}",
        ),
        auth: this.#auth.accessToken,
        pathParams: [
          { name: "carrierShortName", value: request.carrierShortName, schema: s.string() },
          { name: "trackingNo", value: request.trackingNo, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket6Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsCarriersTrackingsResponseSchema },
        errorFactory: ShipWithWalmart.DiscardLabelError,
      },
      options,
    );
  }

  /**
   * Supported carrier package types
   *
   * @remarks
   * This API retrieves all supported package types for the selected carrier.
   *
   * <b style="color: green;">Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCarrierPackageTypes(
    request: ShipWithWalmart.GetCarrierPackageTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsCarriersPackageTypesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/shipping/labels/carriers/{carrierShortName}/package-types"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "carrierShortName", value: request.carrierShortName, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsCarriersPackageTypesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Supported carriers
   *
   * @remarks
   * This API retrieves all carriers supported by Ship With Walmart.
   *
   * <b style="color: green;">Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCarriers(
    request: ShipWithWalmart.GetCarriersRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsCarriersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/shipping/labels/carriers"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsCarriersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Label details by purchase order ID
   *
   * @remarks
   * This API retrieves all label details generated for a purchase order id.
   *
   * <b style="color: green;">Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabel(
    request: ShipWithWalmart.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsPurchaseOrdersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/shipping/labels/purchase-orders/{purchaseOrderId}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "purchaseOrderId", value: request.purchaseOrderId, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsPurchaseOrdersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download label
   *
   * @remarks
   * Retrieves the shipping label for a specific carrier and tracking number combination. The
   * response includes the tracking number and the label in the requested media type (PDF or PNG),
   * based on the Accept header provided. <br><br> <b>Media Type Options:</b><br>•Accept:
   * application/json,application/pdf → Returns label in PDF format.<br>•Accept:
   * application/json,image/png → Returns label in PNG format. <br><br><b>Market and Shipment
   * Program Applicability:</b><br>•<b>CL</b> : Applicable for <b>International</b> shipments
   * only.<br>•<b>US, MX, CA</b>: Applicable for <b>Domestic and International</b> shipments across
   * <b>all shipping programs</b> (including <b>Walmart Provided Shipping (WPS)</b> and <b>Ship with
   * Walmart (SWW)</b>).
   *
   * <b style="color: green;">Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabelByTrackingAndCarrier(
    request: ShipWithWalmart.GetLabelByTrackingAndCarrierRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/shipping/labels/carriers/{carrierShortName}/trackings/{trackingNo}",
        ),
        auth: this.#auth.accessToken,
        pathParams: [
          { name: "carrierShortName", value: request.carrierShortName, schema: s.string() },
          { name: "trackingNo", value: request.trackingNo, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "accept", value: request.accept, schema: s.string() },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download scan form
   *
   * @remarks
   * This API retrieves a scan form for a given manifest ID.
   *
   * **Rate Limits:** This endpoint allows 100 requests per minute. Exceeding this limit returns a
   * `429 Too Many Requests` response. See the [Rate Limiting
   * guide](https://developer.walmart.com/us-marketplace/docs/rate-limiting) for full details. The
   * response includes `x-current-token-count` (remaining requests in the current window) and
   * `X-Next-Replenishment-Time` (when the token count next increases).
   *
   * **Sandbox:** Use base URL `https://sandbox.walmartapis.com`. The sandbox returns a stub binary
   * document for any valid sandbox `manifestId`. The `documentFormat` selection (PDF/ZPL/PNG) is
   * honored in production; in sandbox, a PDF stub is always returned regardless of the format
   * requested during scan form creation.
   *
   * **Note:** This endpoint returns a binary document stream (application/octet-stream). Treat the
   * response body as bytes and save it to a file. The underlying document format aligns with the
   * scan form documentFormat selected during creation (for example, PDF, ZPL, PNG).
   *
   * @returns Successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScanFormByManifestId(
    request: ShipWithWalmart.GetScanFormByManifestIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/shipping/scan-form"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [{ name: "manifestId", value: request.manifestId, schema: s.string() }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarketSchema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Shipping estimates
   *
   * @remarks
   * This API retrieves shipping cost estimates for available shipping services based on address and
   * package (example, customer address, packaged weight.)
   *
   * <b style="color: green;">Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ShipWithWalmart.GetShippingEstimateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShippingEstimate(
    request: ShipWithWalmart.GetShippingEstimateRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingLabelsShippingEstimatesResponse, ShipWithWalmart.GetShippingEstimateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/shipping/labels/shipping-estimates"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Accept", value: request.accept, schema: s.string() },
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket11Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3ShippingLabelsShippingEstimatesRequestSchema },
      },
      {
        success: { kind: "json", schema: v3ShippingLabelsShippingEstimatesResponseSchema },
        errorFactory: ShipWithWalmart.GetShippingEstimateError,
      },
      options,
    );
  }

  /**
   * Create scan form for labels
   *
   * @remarks
   * This API generates a scan form using the provided tracking numbers. The scan form is a
   * consolidated document that contains all the tracking numbers and shipping details for the
   * packages being shipped out on a particular day. It is used by carriers to verify and process
   * the shipments during pickup and delivery. Currently, only USPS supports scan forms.
   *
   * **Idempotency:** `scanFormId` acts as a natural idempotency key — the client supplies it in the
   * request body before the call. Submitting a second POST with a `scanFormId` that was already
   * successfully processed returns `409 Conflict`; no duplicate scan form is created. On network
   * failure or timeout, clients may safely retry using the same `scanFormId`. This guarantee is
   * critical for EOD automation — a duplicate manifest can cause carrier processing errors and
   * shipment delays.
   *
   * **Rate Limits:** This endpoint allows 100 requests per minute. Exceeding this limit returns a
   * `429 Too Many Requests` response. See the [Rate Limiting
   * guide](https://developer.walmart.com/us-marketplace/docs/rate-limiting) for full details. The
   * response includes `x-current-token-count` (remaining requests in the current window) and
   * `X-Next-Replenishment-Time` (when the token count next increases).
   *
   * **Sandbox:** Use base URL `https://sandbox.walmartapis.com`. The sandbox accepts test tracking
   * numbers and returns a synthetic `manifestId` (e.g. `SANDBOX-12345`). Use that `manifestId` with
   * the GET endpoint to retrieve the stub scan form document.
   *
   * <b style="color: green;">Market availability: US only</b>
   *
   * @returns Successful operation
   *
   * @throws {@link ShipWithWalmart.ScanFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scanForm(
    request: ShipWithWalmart.ScanFormRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ShippingScanFormResponse, ShipWithWalmart.ScanFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/shipping/scan-form"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarketSchema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3ShippingScanFormRequestSchema },
      },
      {
        success: { kind: "json", schema: v3ShippingScanFormResponseSchema },
        errorFactory: ShipWithWalmart.ScanFormError,
      },
      options,
    );
  }
}

export namespace ShipWithWalmart {
  export type CreateLabelRequest = {
    /**
     * Specifies the desired response format. The order of media types determines the priority for
     * format selection.
     *
     * **Supported values:**
     * - `application/json` : Returns tracking information only (no label file).
     * - `application/json, application/pdf` : Returns the label in PDF format.
     * - `application/json, image/png` : Returns the label in PNG format.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    accept: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.<br>Example: Walmart Marketplace
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: MX, CA, CL, US
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket1;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Label fields */
    body: V3ShippingLabelsRequest;
  };

  export class CreateLabelError extends ApiError {
    declare readonly payload: Declared<"v3ShippingLabels500Error1", V3ShippingLabels500Error1> | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelError> = [
      {
        on: 500,
        kind: "v3ShippingLabels500Error1",
        decode: { kind: "json", schema: v3ShippingLabels500Error1Schema },
      },
    ];
  }

  export type CreateLabelMpsRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. Valid values: MX, CA, CL.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Response type. The order of media types in the Accept header determines the priority for
     * response format selection.
     *
     * <b style="color: green;">Market availability: CA</b>
     */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Label fields */
    body: V3ShippingMultiPackageLabelsRequest;
  };

  export class CreateLabelMpsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error5[]>
      | Declared<"v3ShippingMultiPackageLabels500Error1", V3ShippingMultiPackageLabels500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelMpsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.array(s.lazy(() => error5Schema)) } },
      {
        on: 500,
        kind: "v3ShippingMultiPackageLabels500Error1",
        decode: { kind: "json", schema: v3ShippingMultiPackageLabels500Error1Schema },
      },
    ];
  }

  export type DiscardLabelRequest = {
    /**
     * The short name of the shipping carrier.<br>Use the carrierShortName value returned from the
     * Supported Carriers API to ensure compatibility.
     *
     * <b style="color: green;">Market availability: US | CA | MX</b>
     */
    carrierShortName: string;
    /**
     * The shipment tracking number.
     *
     *
     *
     * <b style="color: green;">Market availability: US | CA | MX</b>
     */
    trackingNo: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.
     *
     * <b style="color: green;">Market availability: Global </b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br> Example: b3261d2d-028a-4ef7-8602-633c23200af6 <br>
     * <b style="color: green;">Market availability: Global </b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br> Example: Walmart Marketplace.
     *
     * <b style="color: green;">Market availability: Global </b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. Valid values: MX, US
     *
     * <b style="color: green;">Market availability: Global </b>
     */
    wmMarket: WmMarket6;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global </b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <b style="color: green;">Market availability: Global </b>
     */
    wmConsumerChannelType?: string;
  };

  export class DiscardLabelError extends ApiError {
    declare readonly payload: Declared<"error400", V3ShippingLabelsCarriersTrackings400Error1[]> | Undeclared;

    static readonly errors: ErrorDecoders<DiscardLabelError> = [
      {
        on: 400,
        kind: "error400",
        decode: {
          kind: "json",
          schema: s.array(s.lazy(() => v3ShippingLabelsCarriersTrackings400Error1Schema)),
        },
      },
    ];
  }

  export type GetCarrierPackageTypesRequest = {
    /**
     * carrierShortName fetched from carrier API response or pass 'ALL' to fetch all package types
     * of supported carriers
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    carrierShortName: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br> Example:
     * eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * random generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. Valid values: MX, CA, CL.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetCarriersRequest = {
    /**
     * The access token retrieved in the Token API call
     *
     * <b style="color: green;">Market availability:Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: MX, CA, CL
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetLabelRequest = {
    /**
     * purchaseOrderId
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    purchaseOrderId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs. <br> Example:
     * eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: MX, CA, CL
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetLabelByTrackingAndCarrierRequest = {
    /**
     * carrierShortName
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    carrierShortName: string;
    /**
     * trackingNo
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    trackingNo: string;
    /**
     * Supported media types for US, CA, MX are:\napplication/pdf, image/png. For CL, the supported
     * media type is\napplication/pdf, image/png, application/zpl.\n\n<b style=\"color:
     * green;\">Market availability: Global</b>
     */
    accept: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br> Example:
     * eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Walmart Service Name
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: MX, CA, CL
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetScanFormByManifestIdRequest = {
    /**
     * Manifest ID returned by the create scan form API. Use this value to download the scan form
     * document.
     */
    manifestId: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: US
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Requested response media type. This endpoint returns a binary document stream
     * (application/octet-stream). Treat the response body as bytes.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    accept: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
  };

  export type GetShippingEstimateRequest = {
    /**
     * Response type. The order of media types in the Accept header determines the priority for
     * response format selection.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    accept: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br>Example:
     * eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID which identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br> Example: Walmart Marketplace
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: MX, CA, CL
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket11;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /** Shipping fields */
    body: V3ShippingLabelsShippingEstimatesRequest;
  };

  export class GetShippingEstimateError extends ApiError {
    declare readonly payload: Declared<"error400", V3ShippingLabelsShippingEstimates400Error1[]> | Undeclared;

    static readonly errors: ErrorDecoders<GetShippingEstimateError> = [
      {
        on: 400,
        kind: "error400",
        decode: {
          kind: "json",
          schema: s.array(s.lazy(() => v3ShippingLabelsShippingEstimates400Error1Schema)),
        },
      },
    ];
  }

  export type ScanFormRequest = {
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmSvcName: string;
    /**
     * Case-sensitive market identifier. Valid values: US
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmMarket: WmMarket;
    /**
     * Indicates the global version of the API. The value must be set to 3.1.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Response media type. Only supported media type: application/json.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    accept: string;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     *
     * <b style="color: green;">Market availability: Global</b>
     */
    wmConsumerChannelType?: string;
    /**
     * Scan form request payload, including carrier, ship date, origin address, and tracking numbers
     * to include in the manifest.
     */
    body: V3ShippingScanFormRequest;
  };

  export class ScanFormError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ScanFormError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
