import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelInboundPlanResponseSchema,
  type CancelInboundPlanResponse,
} from "../models/cancel-inbound-plan-response.js";
import {
  cancelSelfShipAppointmentRequestSchema,
  type CancelSelfShipAppointmentRequest,
} from "../models/cancel-self-ship-appointment-request.js";
import {
  commonContentUpdatePreviewSchema,
  type CommonContentUpdatePreview,
} from "../models/common-content-update-preview.js";
import { commonErrorListSchema, type CommonErrorList } from "../models/common-error-list.js";
import {
  commonInboundOperationStatusSchema,
  type CommonInboundOperationStatus,
} from "../models/common-inbound-operation-status.js";
import { commonShipmentSchema, type CommonShipment } from "../models/common-shipment.js";
import {
  confirmTransportationOptionsRequestSchema,
  type ConfirmTransportationOptionsRequest,
} from "../models/confirm-transportation-options-request.js";
import {
  createInboundPlanRequestSchema,
  type CreateInboundPlanRequest,
} from "../models/create-inbound-plan-request.js";
import {
  createInboundPlanResponseSchema,
  type CreateInboundPlanResponse,
} from "../models/create-inbound-plan-response.js";
import {
  createMarketplaceItemLabelsRequestSchema,
  type CreateMarketplaceItemLabelsRequest,
} from "../models/create-marketplace-item-labels-request.js";
import {
  createMarketplaceItemLabelsResponseSchema,
  type CreateMarketplaceItemLabelsResponse,
} from "../models/create-marketplace-item-labels-response.js";
import {
  generatePlacementOptionsRequestSchema,
  type GeneratePlacementOptionsRequest,
} from "../models/generate-placement-options-request.js";
import {
  generateSelfShipAppointmentSlotsRequestSchema,
  type GenerateSelfShipAppointmentSlotsRequest,
} from "../models/generate-self-ship-appointment-slots-request.js";
import {
  generateShipmentContentUpdatePreviewsRequestSchema,
  type GenerateShipmentContentUpdatePreviewsRequest,
} from "../models/generate-shipment-content-update-previews-request.js";
import {
  generateTransportationOptionsRequestSchema,
  type GenerateTransportationOptionsRequest,
} from "../models/generate-transportation-options-request.js";
import {
  getDeliveryChallanDocumentResponseSchema,
  type GetDeliveryChallanDocumentResponse,
} from "../models/get-delivery-challan-document-response.js";
import {
  getSelfShipAppointmentSlotsResponseSchema,
  type GetSelfShipAppointmentSlotsResponse,
} from "../models/get-self-ship-appointment-slots-response.js";
import { inboundPlanSchema, type InboundPlan } from "../models/inbound-plan.js";
import {
  listDeliveryWindowOptionsResponseSchema,
  type ListDeliveryWindowOptionsResponse,
} from "../models/list-delivery-window-options-response.js";
import {
  listInboundPlanBoxesResponseSchema,
  type ListInboundPlanBoxesResponse,
} from "../models/list-inbound-plan-boxes-response.js";
import {
  listInboundPlanItemsResponseSchema,
  type ListInboundPlanItemsResponse,
} from "../models/list-inbound-plan-items-response.js";
import {
  listInboundPlanPalletsResponseSchema,
  type ListInboundPlanPalletsResponse,
} from "../models/list-inbound-plan-pallets-response.js";
import {
  listInboundPlansResponseSchema,
  type ListInboundPlansResponse,
} from "../models/list-inbound-plans-response.js";
import {
  listItemComplianceDetailsResponseSchema,
  type ListItemComplianceDetailsResponse,
} from "../models/list-item-compliance-details-response.js";
import {
  listPackingOptionsResponseSchema,
  type ListPackingOptionsResponse,
} from "../models/list-packing-options-response.js";
import {
  listPlacementOptionsResponseSchema,
  type ListPlacementOptionsResponse,
} from "../models/list-placement-options-response.js";
import {
  listPrepDetailsResponseSchema,
  type ListPrepDetailsResponse,
} from "../models/list-prep-details-response.js";
import {
  listShipmentContentUpdatePreviewsResponseSchema,
  type ListShipmentContentUpdatePreviewsResponse,
} from "../models/list-shipment-content-update-previews-response.js";
import {
  listTransportationOptionsResponseSchema,
  type ListTransportationOptionsResponse,
} from "../models/list-transportation-options-response.js";
import {
  scheduleSelfShipAppointmentRequestSchema,
  type ScheduleSelfShipAppointmentRequest,
} from "../models/schedule-self-ship-appointment-request.js";
import {
  scheduleSelfShipAppointmentResponseSchema,
  type ScheduleSelfShipAppointmentResponse,
} from "../models/schedule-self-ship-appointment-response.js";
import {
  setPackingInformationRequestSchema,
  type SetPackingInformationRequest,
} from "../models/set-packing-information-request.js";
import {
  setPrepDetailsRequestSchema,
  type SetPrepDetailsRequest,
} from "../models/set-prep-details-request.js";
import {
  updateInboundPlanNameRequestSchema,
  type UpdateInboundPlanNameRequest,
} from "../models/update-inbound-plan-name-request.js";
import {
  updateItemComplianceDetailsRequestSchema,
  type UpdateItemComplianceDetailsRequest,
} from "../models/update-item-compliance-details-request.js";
import {
  updateShipmentNameRequestSchema,
  type UpdateShipmentNameRequest,
} from "../models/update-shipment-name-request.js";
import {
  updateShipmentSourceAddressRequestSchema,
  type UpdateShipmentSourceAddressRequest,
} from "../models/update-shipment-source-address-request.js";
import {
  updateShipmentTrackingDetailsRequestSchema,
  type UpdateShipmentTrackingDetailsRequest,
} from "../models/update-shipment-tracking-details-request.js";
import type { Servers } from "../servers.js";

export class WfsInbound {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancels an inbound plan. The inbound plan must be in a state that allows cancellation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.CancelInboundPlanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelInboundPlan(
    request: WfsInbound.CancelInboundPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.CancelInboundPlanError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/cancellation"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.CancelInboundPlanError,
      },
      options,
    );
  }

  /**
   * Cancels a self-ship appointment for a shipment.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.CancelSelfShipAppointmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSelfShipAppointment(
    request: WfsInbound.CancelSelfShipAppointmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.CancelSelfShipAppointmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentCancellation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelSelfShipAppointmentRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.CancelSelfShipAppointmentError,
      },
      options,
    );
  }

  /**
   * Confirms the delivery window option for a shipment.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.ConfirmDeliveryWindowOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  confirmDeliveryWindowOptions(
    request: WfsInbound.ConfirmDeliveryWindowOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmDeliveryWindowOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions/{deliveryWindowOptionId}/confirmation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
          { name: "deliveryWindowOptionId", value: request.deliveryWindowOptionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.ConfirmDeliveryWindowOptionsError,
      },
      options,
    );
  }

  /**
   * Confirms the packing option for an inbound plan.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.ConfirmPackingOptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  confirmPackingOption(
    request: WfsInbound.ConfirmPackingOptionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmPackingOptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions/{packingOptionId}/confirmation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "packingOptionId", value: request.packingOptionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.ConfirmPackingOptionError,
      },
      options,
    );
  }

  /**
   * Confirms a placement option for an inbound plan.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.ConfirmPlacementOptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  confirmPlacementOption(
    request: WfsInbound.ConfirmPlacementOptionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmPlacementOptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions/{placementOptionId}/confirmation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "placementOptionId", value: request.placementOptionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.ConfirmPlacementOptionError,
      },
      options,
    );
  }

  /**
   * Confirms a shipment content update preview and applies the changes to the shipment.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.ConfirmShipmentContentUpdatePreviewError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  confirmShipmentContentUpdatePreview(
    request: WfsInbound.ConfirmShipmentContentUpdatePreviewRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmShipmentContentUpdatePreviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}/confirmation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
          { name: "contentUpdatePreviewId", value: request.contentUpdatePreviewId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.ConfirmShipmentContentUpdatePreviewError,
      },
      options,
    );
  }

  /**
   * Confirms the transportation options for an inbound plan.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.ConfirmTransportationOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  confirmTransportationOptions(
    request: WfsInbound.ConfirmTransportationOptionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmTransportationOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions/confirmation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTransportationOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.ConfirmTransportationOptionsError,
      },
      options,
    );
  }

  /**
   * Creates an inbound plan. An inbound plan contains all the necessary information to send
   * shipments into Walmart's fulfillment network.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.CreateInboundPlanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInboundPlan(
    request: WfsInbound.CreateInboundPlanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateInboundPlanResponse, WfsInbound.CreateInboundPlanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createInboundPlanRequestSchema },
      },
      {
        success: { kind: "json", schema: createInboundPlanResponseSchema },
        errorFactory: WfsInbound.CreateInboundPlanError,
      },
      options,
    );
  }

  /**
   * Creates item labels for a given list of MSKUs.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.CreateMarketplaceItemLabelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMarketplaceItemLabels(
    request: WfsInbound.CreateMarketplaceItemLabelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateMarketplaceItemLabelsResponse, WfsInbound.CreateMarketplaceItemLabelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/items/labels"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMarketplaceItemLabelsRequestSchema },
      },
      {
        success: { kind: "json", schema: createMarketplaceItemLabelsResponseSchema },
        errorFactory: WfsInbound.CreateMarketplaceItemLabelsError,
      },
      options,
    );
  }

  /**
   * Generates delivery window options for a given shipment. This is an asynchronous operation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GenerateDeliveryWindowOptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateDeliveryWindowOptions(
    request: WfsInbound.GenerateDeliveryWindowOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateDeliveryWindowOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GenerateDeliveryWindowOptionsError,
      },
      options,
    );
  }

  /**
   * Generates packing options for an inbound plan. This is an asynchronous operation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GeneratePackingOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generatePackingOptions(
    request: WfsInbound.GeneratePackingOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GeneratePackingOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GeneratePackingOptionsError,
      },
      options,
    );
  }

  /**
   * Generates placement options for an inbound plan. This is an asynchronous operation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GeneratePlacementOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generatePlacementOptions(
    request: WfsInbound.GeneratePlacementOptionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GeneratePlacementOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generatePlacementOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GeneratePlacementOptionsError,
      },
      options,
    );
  }

  /**
   * Generates a list of self-ship appointment slots for a given shipment. This is an asynchronous
   * operation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GenerateSelfShipAppointmentSlotsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateSelfShipAppointmentSlots(
    request: WfsInbound.GenerateSelfShipAppointmentSlotsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateSelfShipAppointmentSlotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateSelfShipAppointmentSlotsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GenerateSelfShipAppointmentSlotsError,
      },
      options,
    );
  }

  /**
   * Generates content update previews for a given shipment and set of intended updates.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GenerateShipmentContentUpdatePreviewsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateShipmentContentUpdatePreviews(
    request: WfsInbound.GenerateShipmentContentUpdatePreviewsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateShipmentContentUpdatePreviewsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: generateShipmentContentUpdatePreviewsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GenerateShipmentContentUpdatePreviewsError,
      },
      options,
    );
  }

  /**
   * Generates transportation options for a placement option. This is an asynchronous operation.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.GenerateTransportationOptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateTransportationOptions(
    request: WfsInbound.GenerateTransportationOptionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateTransportationOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateTransportationOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.GenerateTransportationOptionsError,
      },
      options,
    );
  }

  /**
   * Returns the delivery challan document for a given shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetDeliveryChallanDocumentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeliveryChallanDocument(
    request: WfsInbound.GetDeliveryChallanDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDeliveryChallanDocumentResponse, WfsInbound.GetDeliveryChallanDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryChallanDocument",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDeliveryChallanDocumentResponseSchema },
        errorFactory: WfsInbound.GetDeliveryChallanDocumentError,
      },
      options,
    );
  }

  /**
   * Returns the status of an asynchronous WFS inbound operation.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetInboundOperationStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInboundOperationStatus(
    request: WfsInbound.GetInboundOperationStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<CommonInboundOperationStatus, WfsInbound.GetInboundOperationStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/operations/{operationId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commonInboundOperationStatusSchema },
        errorFactory: WfsInbound.GetInboundOperationStatusError,
      },
      options,
    );
  }

  /**
   * Fetches the details of an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetInboundPlanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInboundPlan(
    request: WfsInbound.GetInboundPlanRequest,
    options?: RequestOptions,
  ): ApiPromise<InboundPlan, WfsInbound.GetInboundPlanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inboundPlanSchema },
        errorFactory: WfsInbound.GetInboundPlanError,
      },
      options,
    );
  }

  /**
   * Retrieves a list of self-ship appointment slots for a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetSelfShipAppointmentSlotsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSelfShipAppointmentSlots(
    request: WfsInbound.GetSelfShipAppointmentSlotsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetSelfShipAppointmentSlotsResponse, WfsInbound.GetSelfShipAppointmentSlotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSelfShipAppointmentSlotsResponseSchema },
        errorFactory: WfsInbound.GetSelfShipAppointmentSlotsError,
      },
      options,
    );
  }

  /**
   * Provides the full details of a shipment within an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetShipmentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShipment(
    request: WfsInbound.GetShipmentRequest,
    options?: RequestOptions,
  ): ApiPromise<CommonShipment, WfsInbound.GetShipmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commonShipmentSchema },
        errorFactory: WfsInbound.GetShipmentError,
      },
      options,
    );
  }

  /**
   * Retrieves the full details of a specific content update preview.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.GetShipmentContentUpdatePreviewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShipmentContentUpdatePreview(
    request: WfsInbound.GetShipmentContentUpdatePreviewRequest,
    options?: RequestOptions,
  ): ApiPromise<CommonContentUpdatePreview, WfsInbound.GetShipmentContentUpdatePreviewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
          { name: "contentUpdatePreviewId", value: request.contentUpdatePreviewId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commonContentUpdatePreviewSchema },
        errorFactory: WfsInbound.GetShipmentContentUpdatePreviewError,
      },
      options,
    );
  }

  /**
   * Retrieves a paginated list of delivery window options for a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListDeliveryWindowOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDeliveryWindowOptions(
    request: WfsInbound.ListDeliveryWindowOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDeliveryWindowOptionsResponse, WfsInbound.ListDeliveryWindowOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDeliveryWindowOptionsResponseSchema },
        errorFactory: WfsInbound.ListDeliveryWindowOptionsError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of box packages in an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListInboundPlanBoxesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInboundPlanBoxes(
    request: WfsInbound.ListInboundPlanBoxesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListInboundPlanBoxesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/boxes"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanBoxesResponseSchema },
        errorFactory: WfsInbound.ListInboundPlanBoxesError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of item packages in an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListInboundPlanItemsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInboundPlanItems(
    request: WfsInbound.ListInboundPlanItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListInboundPlanItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/items"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanItemsResponseSchema },
        errorFactory: WfsInbound.ListInboundPlanItemsError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of pallet packages in an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListInboundPlanPalletsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInboundPlanPallets(
    request: WfsInbound.ListInboundPlanPalletsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanPalletsResponse, WfsInbound.ListInboundPlanPalletsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/pallets"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanPalletsResponseSchema },
        errorFactory: WfsInbound.ListInboundPlanPalletsError,
      },
      options,
    );
  }

  /**
   * Returns a list of inbound plans with minimal information.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListInboundPlansError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInboundPlans(
    request: WfsInbound.ListInboundPlansRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlansResponse, WfsInbound.ListInboundPlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlansResponseSchema },
        errorFactory: WfsInbound.ListInboundPlansError,
      },
      options,
    );
  }

  /**
   * List compliance details for a given list of MSKUs.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListItemComplianceDetailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listItemComplianceDetails(
    request: WfsInbound.ListItemComplianceDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListItemComplianceDetailsResponse, WfsInbound.ListItemComplianceDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/items/compliance"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "mskus", value: request.mskus, schema: s.array(s.string()) },
          { name: "marketplaceId", value: request.marketplaceId, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listItemComplianceDetailsResponseSchema },
        errorFactory: WfsInbound.ListItemComplianceDetailsError,
      },
      options,
    );
  }

  /**
   * Retrieves a page of boxes in a given packing group.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListPackingGroupBoxesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPackingGroupBoxes(
    request: WfsInbound.ListPackingGroupBoxesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListPackingGroupBoxesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/boxes",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "packingGroupId", value: request.packingGroupId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanBoxesResponseSchema },
        errorFactory: WfsInbound.ListPackingGroupBoxesError,
      },
      options,
    );
  }

  /**
   * Retrieves a page of items in a given packing group.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListPackingGroupItemsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPackingGroupItems(
    request: WfsInbound.ListPackingGroupItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListPackingGroupItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/items",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "packingGroupId", value: request.packingGroupId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanItemsResponseSchema },
        errorFactory: WfsInbound.ListPackingGroupItemsError,
      },
      options,
    );
  }

  /**
   * Retrieves a list of packing options for an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListPackingOptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPackingOptions(
    request: WfsInbound.ListPackingOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPackingOptionsResponse, WfsInbound.ListPackingOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPackingOptionsResponseSchema },
        errorFactory: WfsInbound.ListPackingOptionsError,
      },
      options,
    );
  }

  /**
   * Retrieves a list of placement options for an inbound plan.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListPlacementOptionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPlacementOptions(
    request: WfsInbound.ListPlacementOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPlacementOptionsResponse, WfsInbound.ListPlacementOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPlacementOptionsResponseSchema },
        errorFactory: WfsInbound.ListPlacementOptionsError,
      },
      options,
    );
  }

  /**
   * Returns prep details for a list of MSKUs.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListPrepDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPrepDetails(
    request: WfsInbound.ListPrepDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPrepDetailsResponse, WfsInbound.ListPrepDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/items/prepDetails"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "marketplaceId", value: request.marketplaceId, schema: s.string() },
          { name: "mskus", value: request.mskus, schema: s.array(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPrepDetailsResponseSchema },
        errorFactory: WfsInbound.ListPrepDetailsError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of box packages in a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListShipmentBoxesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShipmentBoxes(
    request: WfsInbound.ListShipmentBoxesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListShipmentBoxesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanBoxesResponseSchema },
        errorFactory: WfsInbound.ListShipmentBoxesError,
      },
      options,
    );
  }

  /**
   * Retrieves a paginated list of content update previews for a given shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListShipmentContentUpdatePreviewsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShipmentContentUpdatePreviews(
    request: WfsInbound.ListShipmentContentUpdatePreviewsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListShipmentContentUpdatePreviewsResponse,
    WfsInbound.ListShipmentContentUpdatePreviewsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listShipmentContentUpdatePreviewsResponseSchema },
        errorFactory: WfsInbound.ListShipmentContentUpdatePreviewsError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of item packages in a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListShipmentItemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShipmentItems(
    request: WfsInbound.ListShipmentItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListShipmentItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/items",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanItemsResponseSchema },
        errorFactory: WfsInbound.ListShipmentItemsError,
      },
      options,
    );
  }

  /**
   * Provides a paginated list of pallet packages in a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListShipmentPalletsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShipmentPallets(
    request: WfsInbound.ListShipmentPalletsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInboundPlanPalletsResponse, WfsInbound.ListShipmentPalletsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/pallets",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInboundPlanPalletsResponseSchema },
        errorFactory: WfsInbound.ListShipmentPalletsError,
      },
      options,
    );
  }

  /**
   * Retrieves a list of transportation options for a placement option.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ListTransportationOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransportationOptions(
    request: WfsInbound.ListTransportationOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTransportationOptionsResponse, WfsInbound.ListTransportationOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "paginationToken", value: request.paginationToken, schema: s.optional(s.string()) },
          { name: "placementOptionId", value: request.placementOptionId, schema: s.optional(s.string()) },
          { name: "shipmentId", value: request.shipmentId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTransportationOptionsResponseSchema },
        errorFactory: WfsInbound.ListTransportationOptionsError,
      },
      options,
    );
  }

  /**
   * Confirms and schedules a self-ship appointment slot for a shipment.
   *
   * @returns Success
   *
   * @throws {@link WfsInbound.ScheduleSelfShipAppointmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleSelfShipAppointment(
    request: WfsInbound.ScheduleSelfShipAppointmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ScheduleSelfShipAppointmentResponse, WfsInbound.ScheduleSelfShipAppointmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots/{slotId}/schedule",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
          { name: "slotId", value: request.slotId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scheduleSelfShipAppointmentRequestSchema },
      },
      {
        success: { kind: "json", schema: scheduleSelfShipAppointmentResponseSchema },
        errorFactory: WfsInbound.ScheduleSelfShipAppointmentError,
      },
      options,
    );
  }

  /**
   * Sets packing information for an inbound plan.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.SetPackingInformationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setPackingInformation(
    request: WfsInbound.SetPackingInformationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.SetPackingInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingInformation",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setPackingInformationRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.SetPackingInformationError,
      },
      options,
    );
  }

  /**
   * Sets prep details for a list of MSKUs.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.SetPrepDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setPrepDetails(
    request: WfsInbound.SetPrepDetailsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.SetPrepDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/items/prepDetails"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setPrepDetailsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.SetPrepDetailsError,
      },
      options,
    );
  }

  /**
   * Updates the name of an existing inbound plan.
   *
   * @returns No content — name updated successfully.
   *
   * @throws {@link WfsInbound.UpdateInboundPlanNameError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInboundPlanName(
    request: WfsInbound.UpdateInboundPlanNameRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WfsInbound.UpdateInboundPlanNameError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/inboundPlans/{inboundPlanId}/name"),
        auth: this.#auth.walletAuth,
        pathParams: [{ name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateInboundPlanNameRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: WfsInbound.UpdateInboundPlanNameError,
      },
      options,
    );
  }

  /**
   * Update compliance details for a given MSKU.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.UpdateItemComplianceDetailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateItemComplianceDetails(
    request: WfsInbound.UpdateItemComplianceDetailsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateItemComplianceDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1("/inbound/wfs/v4/items/compliance"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [{ name: "marketplaceId", value: request.marketplaceId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateItemComplianceDetailsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.UpdateItemComplianceDetailsError,
      },
      options,
    );
  }

  /**
   * Updates the name of an existing shipment.
   *
   * @returns No content — name updated successfully.
   *
   * @throws {@link WfsInbound.UpdateShipmentNameError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShipmentName(
    request: WfsInbound.UpdateShipmentNameRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WfsInbound.UpdateShipmentNameError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/name",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShipmentNameRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: WfsInbound.UpdateShipmentNameError,
      },
      options,
    );
  }

  /**
   * Updates the source address for a shipment.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.UpdateShipmentSourceAddressError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShipmentSourceAddress(
    request: WfsInbound.UpdateShipmentSourceAddressRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateShipmentSourceAddressError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/sourceAddress",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShipmentSourceAddressRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.UpdateShipmentSourceAddressError,
      },
      options,
    );
  }

  /**
   * Updates tracking details for a shipment.
   *
   * @returns Accepted — operation submitted asynchronously.
   *
   * @throws {@link WfsInbound.UpdateShipmentTrackingDetailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShipmentTrackingDetails(
    request: WfsInbound.UpdateShipmentTrackingDetailsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateShipmentTrackingDetailsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default1(
          "/inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/trackingDetails",
        ),
        auth: this.#auth.walletAuth,
        pathParams: [
          { name: "inboundPlanId", value: request.inboundPlanId, schema: s.string() },
          { name: "shipmentId", value: request.shipmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShipmentTrackingDetailsRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInboundPlanResponseSchema },
        errorFactory: WfsInbound.UpdateShipmentTrackingDetailsError,
      },
      options,
    );
  }
}

export namespace WfsInbound {
  export type CancelInboundPlanRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
  };

  export class CancelInboundPlanError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelInboundPlanError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type CancelSelfShipAppointmentRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: CancelSelfShipAppointmentRequest;
  };

  export class CancelSelfShipAppointmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<CancelSelfShipAppointmentError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ConfirmDeliveryWindowOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The shipment to confirm the delivery window option for. */
    shipmentId: string;
    /** The ID of the delivery window option to be confirmed. */
    deliveryWindowOptionId: string;
  };

  export class ConfirmDeliveryWindowOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmDeliveryWindowOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ConfirmPackingOptionRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a packing option. */
    packingOptionId: string;
  };

  export class ConfirmPackingOptionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmPackingOptionError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ConfirmPlacementOptionRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The identifier of a placement option. */
    placementOptionId: string;
  };

  export class ConfirmPlacementOptionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmPlacementOptionError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ConfirmShipmentContentUpdatePreviewRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /** Identifier of a content update preview. */
    contentUpdatePreviewId: string;
  };

  export class ConfirmShipmentContentUpdatePreviewError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmShipmentContentUpdatePreviewError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ConfirmTransportationOptionsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    body: ConfirmTransportationOptionsRequest;
  };

  export class ConfirmTransportationOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ConfirmTransportationOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type CreateInboundPlanRequestParams = {
    body: CreateInboundPlanRequest;
  };

  export class CreateInboundPlanError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateInboundPlanError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type CreateMarketplaceItemLabelsRequestParams = {
    body: CreateMarketplaceItemLabelsRequest;
  };

  export class CreateMarketplaceItemLabelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<CreateMarketplaceItemLabelsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GenerateDeliveryWindowOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The shipment to generate delivery window options for. */
    shipmentId: string;
  };

  export class GenerateDeliveryWindowOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GenerateDeliveryWindowOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GeneratePackingOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
  };

  export class GeneratePackingOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GeneratePackingOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GeneratePlacementOptionsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    body: GeneratePlacementOptionsRequest;
  };

  export class GeneratePlacementOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GeneratePlacementOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GenerateSelfShipAppointmentSlotsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: GenerateSelfShipAppointmentSlotsRequest;
  };

  export class GenerateSelfShipAppointmentSlotsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GenerateSelfShipAppointmentSlotsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GenerateShipmentContentUpdatePreviewsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: GenerateShipmentContentUpdatePreviewsRequest;
  };

  export class GenerateShipmentContentUpdatePreviewsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GenerateShipmentContentUpdatePreviewsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GenerateTransportationOptionsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    body: GenerateTransportationOptionsRequest;
  };

  export class GenerateTransportationOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GenerateTransportationOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetDeliveryChallanDocumentRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
  };

  export class GetDeliveryChallanDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetDeliveryChallanDocumentError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetInboundOperationStatusRequest = {
    /** Identifier of an asynchronous operation. */
    operationId: string;
  };

  export class GetInboundOperationStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetInboundOperationStatusError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetInboundPlanRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
  };

  export class GetInboundPlanError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetInboundPlanError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetSelfShipAppointmentSlotsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /**
     * The number of self ship appointment slots to return in the response matching the given query.
     */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class GetSelfShipAppointmentSlotsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetSelfShipAppointmentSlotsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetShipmentRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. A shipment contains the boxes and units being inbounded. */
    shipmentId: string;
  };

  export class GetShipmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetShipmentError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type GetShipmentContentUpdatePreviewRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /** Identifier of a content update preview. */
    contentUpdatePreviewId: string;
  };

  export class GetShipmentContentUpdatePreviewError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<GetShipmentContentUpdatePreviewError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListDeliveryWindowOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The shipment to get delivery window options for. */
    shipmentId: string;
    /** The number of delivery window options to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListDeliveryWindowOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListDeliveryWindowOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListInboundPlanBoxesRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of boxes to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListInboundPlanBoxesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListInboundPlanBoxesError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListInboundPlanItemsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of items to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListInboundPlanItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListInboundPlanItemsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListInboundPlanPalletsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of pallets to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListInboundPlanPalletsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListInboundPlanPalletsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListInboundPlansRequest = {
    /**
     * The number of inbound plans to return in the response matching the given query.
     *
     * @default 10
     */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
    /** The status of an inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`. */
    status?: string;
    /** Sort by field. */
    sortBy?: string;
    /** The sort order. Possible values: `ASC`, `DESC`. */
    sortOrder?: string;
  };

  export class ListInboundPlansError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListInboundPlansError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListItemComplianceDetailsRequest = {
    /** A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. */
    mskus: string[];
    /**
     * The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace
     * IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids).
     */
    marketplaceId: string;
  };

  export class ListItemComplianceDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListItemComplianceDetailsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListPackingGroupBoxesRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a packing group. */
    packingGroupId: string;
    /** The number of packing group boxes to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListPackingGroupBoxesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListPackingGroupBoxesError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListPackingGroupItemsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a packing group. */
    packingGroupId: string;
    /** The number of packing group items to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListPackingGroupItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListPackingGroupItemsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListPackingOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of packing options to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListPackingOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListPackingOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListPlacementOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of placement options to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListPlacementOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListPlacementOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListPrepDetailsRequest = {
    /**
     * The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace
     * IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids).
     */
    marketplaceId: string;
    /** A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. */
    mskus: string[];
  };

  export class ListPrepDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListPrepDetailsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListShipmentBoxesRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. A shipment contains the boxes and units being inbounded. */
    shipmentId: string;
    /** The number of boxes to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListShipmentBoxesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListShipmentBoxesError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListShipmentContentUpdatePreviewsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /** The number of content update previews to return. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListShipmentContentUpdatePreviewsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListShipmentContentUpdatePreviewsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListShipmentItemsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. A shipment contains the boxes and units being inbounded. */
    shipmentId: string;
    /** The number of items to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListShipmentItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListShipmentItemsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListShipmentPalletsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /** The number of pallets to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
  };

  export class ListShipmentPalletsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListShipmentPalletsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ListTransportationOptionsRequest = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** The number of transportation options to return in the response matching the given query. */
    pageSize?: number;
    /** A token to fetch a certain page when there are multiple pages worth of results. */
    paginationToken?: string;
    /**
     * The placement option to get transportation options for. Either `placementOptionId` or
     * `shipmentId` must be specified.
     */
    placementOptionId?: string;
    /**
     * The shipment to get transportation options for. Either `placementOptionId` or `shipmentId`
     * must be specified.
     */
    shipmentId?: string;
  };

  export class ListTransportationOptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ListTransportationOptionsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type ScheduleSelfShipAppointmentRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    /** An identifier to a self-ship appointment slot. */
    slotId: string;
    body: ScheduleSelfShipAppointmentRequest;
  };

  export class ScheduleSelfShipAppointmentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<ScheduleSelfShipAppointmentError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type SetPackingInformationRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    body: SetPackingInformationRequest;
  };

  export class SetPackingInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<SetPackingInformationError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type SetPrepDetailsRequestParams = {
    body: SetPrepDetailsRequest;
  };

  export class SetPrepDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<SetPrepDetailsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type UpdateInboundPlanNameRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    body: UpdateInboundPlanNameRequest;
  };

  export class UpdateInboundPlanNameError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateInboundPlanNameError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type UpdateItemComplianceDetailsRequestParams = {
    /**
     * The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace
     * IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids).
     */
    marketplaceId: string;
    body: UpdateItemComplianceDetailsRequest;
  };

  export class UpdateItemComplianceDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateItemComplianceDetailsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type UpdateShipmentNameRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: UpdateShipmentNameRequest;
  };

  export class UpdateShipmentNameError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateShipmentNameError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type UpdateShipmentSourceAddressRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: UpdateShipmentSourceAddressRequest;
  };

  export class UpdateShipmentSourceAddressError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateShipmentSourceAddressError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }

  export type UpdateShipmentTrackingDetailsRequestParams = {
    /** Identifier of an inbound plan. */
    inboundPlanId: string;
    /** Identifier of a shipment. */
    shipmentId: string;
    body: UpdateShipmentTrackingDetailsRequest;
  };

  export class UpdateShipmentTrackingDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"commonErrorList", CommonErrorList>
      | Declared<"commonErrorList2", CommonErrorList>
      | Declared<"commonErrorList3", CommonErrorList>
      | Declared<"commonErrorList4", CommonErrorList>
      | Declared<"commonErrorList5", CommonErrorList>
    >;

    static readonly errors: ErrorDecoders<UpdateShipmentTrackingDetailsError> = [
      { on: 400, kind: "commonErrorList", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 403, kind: "commonErrorList2", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 404, kind: "commonErrorList3", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 429, kind: "commonErrorList4", decode: { kind: "json", schema: commonErrorListSchema } },
      { on: 500, kind: "commonErrorList5", decode: { kind: "json", schema: commonErrorListSchema } },
    ];
  }
}
