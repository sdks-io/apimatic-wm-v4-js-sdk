<!-- Generated file — do not edit; regenerated with the SDK. -->

# WfsInbound — operations

Accessor: `client.wfsInbound` · Source: `src/resources/wfs-inbound.ts` · 45 operations · Request and error types: namespace `WfsInbound`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelInboundPlan

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelInboundPlan(request: WfsInbound.CancelInboundPlanRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.CancelInboundPlanError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/cancellation`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.CancelInboundPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.CancelInboundPlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### cancelSelfShipAppointment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelSelfShipAppointment(request: WfsInbound.CancelSelfShipAppointmentRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.CancelSelfShipAppointmentError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentCancellation`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.CancelSelfShipAppointmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.CancelSelfShipAppointmentRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `CancelSelfShipAppointmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelSelfShipAppointmentRequest` | `cancelSelfShipAppointmentRequestSchema` | `src/models/cancel-self-ship-appointment-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### confirmDeliveryWindowOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmDeliveryWindowOptions(request: WfsInbound.ConfirmDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmDeliveryWindowOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions/{deliveryWindowOptionId}/confirmation`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ConfirmDeliveryWindowOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ConfirmDeliveryWindowOptionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `deliveryWindowOptionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### confirmPackingOption

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmPackingOption(request: WfsInbound.ConfirmPackingOptionRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmPackingOptionError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions/{packingOptionId}/confirmation`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ConfirmPackingOptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ConfirmPackingOptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `packingOptionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### confirmPlacementOption

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmPlacementOption(request: WfsInbound.ConfirmPlacementOptionRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmPlacementOptionError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions/{placementOptionId}/confirmation`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ConfirmPlacementOptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ConfirmPlacementOptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `placementOptionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### confirmShipmentContentUpdatePreview

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmShipmentContentUpdatePreview(request: WfsInbound.ConfirmShipmentContentUpdatePreviewRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmShipmentContentUpdatePreviewError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}/confirmation`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ConfirmShipmentContentUpdatePreviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ConfirmShipmentContentUpdatePreviewRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `contentUpdatePreviewId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### confirmTransportationOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmTransportationOptions(request: WfsInbound.ConfirmTransportationOptionsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.ConfirmTransportationOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions/confirmation`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ConfirmTransportationOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ConfirmTransportationOptionsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTransportationOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTransportationOptionsRequest` | `confirmTransportationOptionsRequestSchema` | `src/models/confirm-transportation-options-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### createInboundPlan

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInboundPlan(request: WfsInbound.CreateInboundPlanRequestParams, options?: RequestOptions): ApiPromise<CreateInboundPlanResponse, WfsInbound.CreateInboundPlanError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.CreateInboundPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.CreateInboundPlanRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateInboundPlanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInboundPlanRequest` | `createInboundPlanRequestSchema` | `src/models/create-inbound-plan-request.ts` |
| `CreateInboundPlanResponse` | `createInboundPlanResponseSchema` | `src/models/create-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### createMarketplaceItemLabels

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createMarketplaceItemLabels(request: WfsInbound.CreateMarketplaceItemLabelsRequestParams, options?: RequestOptions): ApiPromise<CreateMarketplaceItemLabelsResponse, WfsInbound.CreateMarketplaceItemLabelsError>`
- **Wire**: `POST /inbound/wfs/v4/items/labels`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateMarketplaceItemLabelsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.CreateMarketplaceItemLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.CreateMarketplaceItemLabelsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMarketplaceItemLabelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMarketplaceItemLabelsRequest` | `createMarketplaceItemLabelsRequestSchema` | `src/models/create-marketplace-item-labels-request.ts` |
| `CreateMarketplaceItemLabelsResponse` | `createMarketplaceItemLabelsResponseSchema` | `src/models/create-marketplace-item-labels-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generateDeliveryWindowOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generateDeliveryWindowOptions(request: WfsInbound.GenerateDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateDeliveryWindowOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GenerateDeliveryWindowOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GenerateDeliveryWindowOptionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generatePackingOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generatePackingOptions(request: WfsInbound.GeneratePackingOptionsRequest, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GeneratePackingOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GeneratePackingOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GeneratePackingOptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generatePlacementOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generatePlacementOptions(request: WfsInbound.GeneratePlacementOptionsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GeneratePlacementOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GeneratePlacementOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GeneratePlacementOptionsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `body` | `body` | `GeneratePlacementOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeneratePlacementOptionsRequest` | `generatePlacementOptionsRequestSchema` | `src/models/generate-placement-options-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generateSelfShipAppointmentSlots

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generateSelfShipAppointmentSlots(request: WfsInbound.GenerateSelfShipAppointmentSlotsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateSelfShipAppointmentSlotsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GenerateSelfShipAppointmentSlotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GenerateSelfShipAppointmentSlotsRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `GenerateSelfShipAppointmentSlotsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateSelfShipAppointmentSlotsRequest` | `generateSelfShipAppointmentSlotsRequestSchema` | `src/models/generate-self-ship-appointment-slots-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generateShipmentContentUpdatePreviews

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generateShipmentContentUpdatePreviews(request: WfsInbound.GenerateShipmentContentUpdatePreviewsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateShipmentContentUpdatePreviewsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GenerateShipmentContentUpdatePreviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GenerateShipmentContentUpdatePreviewsRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `GenerateShipmentContentUpdatePreviewsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateShipmentContentUpdatePreviewsRequest` | `generateShipmentContentUpdatePreviewsRequestSchema` | `src/models/generate-shipment-content-update-previews-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### generateTransportationOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `generateTransportationOptions(request: WfsInbound.GenerateTransportationOptionsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.GenerateTransportationOptionsError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GenerateTransportationOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GenerateTransportationOptionsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `body` | `body` | `GenerateTransportationOptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateTransportationOptionsRequest` | `generateTransportationOptionsRequestSchema` | `src/models/generate-transportation-options-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getDeliveryChallanDocument

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeliveryChallanDocument(request: WfsInbound.GetDeliveryChallanDocumentRequest, options?: RequestOptions): ApiPromise<GetDeliveryChallanDocumentResponse, WfsInbound.GetDeliveryChallanDocumentError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryChallanDocument`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDeliveryChallanDocumentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetDeliveryChallanDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetDeliveryChallanDocumentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeliveryChallanDocumentResponse` | `getDeliveryChallanDocumentResponseSchema` | `src/models/get-delivery-challan-document-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getInboundOperationStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInboundOperationStatus(request: WfsInbound.GetInboundOperationStatusRequest, options?: RequestOptions): ApiPromise<CommonInboundOperationStatus, WfsInbound.GetInboundOperationStatusError>`
- **Wire**: `GET /inbound/wfs/v4/operations/{operationId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommonInboundOperationStatus`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetInboundOperationStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetInboundOperationStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommonInboundOperationStatus` | `commonInboundOperationStatusSchema` | `src/models/common-inbound-operation-status.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getInboundPlan

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInboundPlan(request: WfsInbound.GetInboundPlanRequest, options?: RequestOptions): ApiPromise<InboundPlan, WfsInbound.GetInboundPlanError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InboundPlan`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetInboundPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetInboundPlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InboundPlan` | `inboundPlanSchema` | `src/models/inbound-plan.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getSelfShipAppointmentSlots

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSelfShipAppointmentSlots(request: WfsInbound.GetSelfShipAppointmentSlotsRequest, options?: RequestOptions): ApiPromise<GetSelfShipAppointmentSlotsResponse, WfsInbound.GetSelfShipAppointmentSlotsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetSelfShipAppointmentSlotsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetSelfShipAppointmentSlotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetSelfShipAppointmentSlotsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetSelfShipAppointmentSlotsResponse` | `getSelfShipAppointmentSlotsResponseSchema` | `src/models/get-self-ship-appointment-slots-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getShipment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getShipment(request: WfsInbound.GetShipmentRequest, options?: RequestOptions): ApiPromise<CommonShipment, WfsInbound.GetShipmentError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommonShipment`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetShipmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetShipmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommonShipment` | `commonShipmentSchema` | `src/models/common-shipment.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### getShipmentContentUpdatePreview

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getShipmentContentUpdatePreview(request: WfsInbound.GetShipmentContentUpdatePreviewRequest, options?: RequestOptions): ApiPromise<CommonContentUpdatePreview, WfsInbound.GetShipmentContentUpdatePreviewError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews/{contentUpdatePreviewId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommonContentUpdatePreview`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.GetShipmentContentUpdatePreviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.GetShipmentContentUpdatePreviewRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `contentUpdatePreviewId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommonContentUpdatePreview` | `commonContentUpdatePreviewSchema` | `src/models/common-content-update-preview.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listDeliveryWindowOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listDeliveryWindowOptions(request: WfsInbound.ListDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise<ListDeliveryWindowOptionsResponse, WfsInbound.ListDeliveryWindowOptionsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/deliveryWindowOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDeliveryWindowOptionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListDeliveryWindowOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListDeliveryWindowOptionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDeliveryWindowOptionsResponse` | `listDeliveryWindowOptionsResponseSchema` | `src/models/list-delivery-window-options-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listInboundPlanBoxes

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInboundPlanBoxes(request: WfsInbound.ListInboundPlanBoxesRequest, options?: RequestOptions): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListInboundPlanBoxesError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/boxes`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanBoxesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListInboundPlanBoxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListInboundPlanBoxesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanBoxesResponse` | `listInboundPlanBoxesResponseSchema` | `src/models/list-inbound-plan-boxes-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listInboundPlanItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInboundPlanItems(request: WfsInbound.ListInboundPlanItemsRequest, options?: RequestOptions): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListInboundPlanItemsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListInboundPlanItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListInboundPlanItemsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanItemsResponse` | `listInboundPlanItemsResponseSchema` | `src/models/list-inbound-plan-items-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listInboundPlanPallets

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInboundPlanPallets(request: WfsInbound.ListInboundPlanPalletsRequest, options?: RequestOptions): ApiPromise<ListInboundPlanPalletsResponse, WfsInbound.ListInboundPlanPalletsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/pallets`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanPalletsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListInboundPlanPalletsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListInboundPlanPalletsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanPalletsResponse` | `listInboundPlanPalletsResponseSchema` | `src/models/list-inbound-plan-pallets-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listInboundPlans

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInboundPlans(request: WfsInbound.ListInboundPlansRequest, options?: RequestOptions): ApiPromise<ListInboundPlansResponse, WfsInbound.ListInboundPlansError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlansResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListInboundPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListInboundPlansRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `10` |
| `paginationToken` | `query` | `string` | no | — |
| `status` | `query` | `string` | no | — |
| `sortBy` | `query` | `string` | no | — |
| `sortOrder` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlansResponse` | `listInboundPlansResponseSchema` | `src/models/list-inbound-plans-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listItemComplianceDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listItemComplianceDetails(request: WfsInbound.ListItemComplianceDetailsRequest, options?: RequestOptions): ApiPromise<ListItemComplianceDetailsResponse, WfsInbound.ListItemComplianceDetailsError>`
- **Wire**: `GET /inbound/wfs/v4/items/compliance`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListItemComplianceDetailsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListItemComplianceDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListItemComplianceDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mskus` | `query` | `string[]` | yes |
| `marketplaceId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListItemComplianceDetailsResponse` | `listItemComplianceDetailsResponseSchema` | `src/models/list-item-compliance-details-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listPackingGroupBoxes

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPackingGroupBoxes(request: WfsInbound.ListPackingGroupBoxesRequest, options?: RequestOptions): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListPackingGroupBoxesError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/boxes`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanBoxesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListPackingGroupBoxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListPackingGroupBoxesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `packingGroupId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanBoxesResponse` | `listInboundPlanBoxesResponseSchema` | `src/models/list-inbound-plan-boxes-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listPackingGroupItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPackingGroupItems(request: WfsInbound.ListPackingGroupItemsRequest, options?: RequestOptions): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListPackingGroupItemsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingGroups/{packingGroupId}/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListPackingGroupItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListPackingGroupItemsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `packingGroupId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanItemsResponse` | `listInboundPlanItemsResponseSchema` | `src/models/list-inbound-plan-items-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listPackingOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPackingOptions(request: WfsInbound.ListPackingOptionsRequest, options?: RequestOptions): ApiPromise<ListPackingOptionsResponse, WfsInbound.ListPackingOptionsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPackingOptionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListPackingOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListPackingOptionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPackingOptionsResponse` | `listPackingOptionsResponseSchema` | `src/models/list-packing-options-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listPlacementOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPlacementOptions(request: WfsInbound.ListPlacementOptionsRequest, options?: RequestOptions): ApiPromise<ListPlacementOptionsResponse, WfsInbound.ListPlacementOptionsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/placementOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPlacementOptionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListPlacementOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListPlacementOptionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPlacementOptionsResponse` | `listPlacementOptionsResponseSchema` | `src/models/list-placement-options-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listPrepDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPrepDetails(request: WfsInbound.ListPrepDetailsRequest, options?: RequestOptions): ApiPromise<ListPrepDetailsResponse, WfsInbound.ListPrepDetailsError>`
- **Wire**: `GET /inbound/wfs/v4/items/prepDetails`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPrepDetailsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListPrepDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListPrepDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `marketplaceId` | `query` | `string` | yes |
| `mskus` | `query` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPrepDetailsResponse` | `listPrepDetailsResponseSchema` | `src/models/list-prep-details-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listShipmentBoxes

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShipmentBoxes(request: WfsInbound.ListShipmentBoxesRequest, options?: RequestOptions): ApiPromise<ListInboundPlanBoxesResponse, WfsInbound.ListShipmentBoxesError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/boxes`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanBoxesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListShipmentBoxesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListShipmentBoxesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanBoxesResponse` | `listInboundPlanBoxesResponseSchema` | `src/models/list-inbound-plan-boxes-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listShipmentContentUpdatePreviews

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShipmentContentUpdatePreviews(request: WfsInbound.ListShipmentContentUpdatePreviewsRequest, options?: RequestOptions): ApiPromise<ListShipmentContentUpdatePreviewsResponse, WfsInbound.ListShipmentContentUpdatePreviewsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/contentUpdatePreviews`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListShipmentContentUpdatePreviewsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListShipmentContentUpdatePreviewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListShipmentContentUpdatePreviewsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListShipmentContentUpdatePreviewsResponse` | `listShipmentContentUpdatePreviewsResponseSchema` | `src/models/list-shipment-content-update-previews-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listShipmentItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShipmentItems(request: WfsInbound.ListShipmentItemsRequest, options?: RequestOptions): ApiPromise<ListInboundPlanItemsResponse, WfsInbound.ListShipmentItemsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListShipmentItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListShipmentItemsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanItemsResponse` | `listInboundPlanItemsResponseSchema` | `src/models/list-inbound-plan-items-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listShipmentPallets

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShipmentPallets(request: WfsInbound.ListShipmentPalletsRequest, options?: RequestOptions): ApiPromise<ListInboundPlanPalletsResponse, WfsInbound.ListShipmentPalletsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/pallets`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPlanPalletsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListShipmentPalletsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListShipmentPalletsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPlanPalletsResponse` | `listInboundPlanPalletsResponseSchema` | `src/models/list-inbound-plan-pallets-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### listTransportationOptions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTransportationOptions(request: WfsInbound.ListTransportationOptionsRequest, options?: RequestOptions): ApiPromise<ListTransportationOptionsResponse, WfsInbound.ListTransportationOptionsError>`
- **Wire**: `GET /inbound/wfs/v4/inboundPlans/{inboundPlanId}/transportationOptions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTransportationOptionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ListTransportationOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ListTransportationOptionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `paginationToken` | `query` | `string` | no |
| `placementOptionId` | `query` | `string` | no |
| `shipmentId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTransportationOptionsResponse` | `listTransportationOptionsResponseSchema` | `src/models/list-transportation-options-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### scheduleSelfShipAppointment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleSelfShipAppointment(request: WfsInbound.ScheduleSelfShipAppointmentRequestParams, options?: RequestOptions): ApiPromise<ScheduleSelfShipAppointmentResponse, WfsInbound.ScheduleSelfShipAppointmentError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/selfShipAppointmentSlots/{slotId}/schedule`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScheduleSelfShipAppointmentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.ScheduleSelfShipAppointmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.ScheduleSelfShipAppointmentRequestParams` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `slotId` | `path` | `string` | yes |
| `body` | `body` | `ScheduleSelfShipAppointmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScheduleSelfShipAppointmentRequest` | `scheduleSelfShipAppointmentRequestSchema` | `src/models/schedule-self-ship-appointment-request.ts` |
| `ScheduleSelfShipAppointmentResponse` | `scheduleSelfShipAppointmentResponseSchema` | `src/models/schedule-self-ship-appointment-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### setPackingInformation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `setPackingInformation(request: WfsInbound.SetPackingInformationRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.SetPackingInformationError>`
- **Wire**: `POST /inbound/wfs/v4/inboundPlans/{inboundPlanId}/packingInformation`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.SetPackingInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.SetPackingInformationRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `body` | `body` | `SetPackingInformationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetPackingInformationRequest` | `setPackingInformationRequestSchema` | `src/models/set-packing-information-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### setPrepDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `setPrepDetails(request: WfsInbound.SetPrepDetailsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.SetPrepDetailsError>`
- **Wire**: `POST /inbound/wfs/v4/items/prepDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.SetPrepDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.SetPrepDetailsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SetPrepDetailsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetPrepDetailsRequest` | `setPrepDetailsRequestSchema` | `src/models/set-prep-details-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### updateInboundPlanName

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInboundPlanName(request: WfsInbound.UpdateInboundPlanNameRequestParams, options?: RequestOptions): ApiPromise<undefined, WfsInbound.UpdateInboundPlanNameError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/name`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.UpdateInboundPlanNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.UpdateInboundPlanNameRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `body` | `body` | `UpdateInboundPlanNameRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInboundPlanNameRequest` | `updateInboundPlanNameRequestSchema` | `src/models/update-inbound-plan-name-request.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### updateItemComplianceDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateItemComplianceDetails(request: WfsInbound.UpdateItemComplianceDetailsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateItemComplianceDetailsError>`
- **Wire**: `PUT /inbound/wfs/v4/items/compliance`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.UpdateItemComplianceDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.UpdateItemComplianceDetailsRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `marketplaceId` | `query` | `string` | yes |
| `body` | `body` | `UpdateItemComplianceDetailsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateItemComplianceDetailsRequest` | `updateItemComplianceDetailsRequestSchema` | `src/models/update-item-compliance-details-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### updateShipmentName

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateShipmentName(request: WfsInbound.UpdateShipmentNameRequestParams, options?: RequestOptions): ApiPromise<undefined, WfsInbound.UpdateShipmentNameError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/name`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.UpdateShipmentNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.UpdateShipmentNameRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `UpdateShipmentNameRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShipmentNameRequest` | `updateShipmentNameRequestSchema` | `src/models/update-shipment-name-request.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### updateShipmentSourceAddress

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateShipmentSourceAddress(request: WfsInbound.UpdateShipmentSourceAddressRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateShipmentSourceAddressError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/sourceAddress`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.UpdateShipmentSourceAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.UpdateShipmentSourceAddressRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `UpdateShipmentSourceAddressRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShipmentSourceAddressRequest` | `updateShipmentSourceAddressRequestSchema` | `src/models/update-shipment-source-address-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

### updateShipmentTrackingDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateShipmentTrackingDetails(request: WfsInbound.UpdateShipmentTrackingDetailsRequestParams, options?: RequestOptions): ApiPromise<CancelInboundPlanResponse, WfsInbound.UpdateShipmentTrackingDetailsError>`
- **Wire**: `PUT /inbound/wfs/v4/inboundPlans/{inboundPlanId}/shipments/{shipmentId}/trackingDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInboundPlanResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInbound.UpdateShipmentTrackingDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"commonErrorList"` [400] `CommonErrorList` · `"commonErrorList2"` [403] `CommonErrorList` · `"commonErrorList3"` [404] `CommonErrorList` · `"commonErrorList4"` [429] `CommonErrorList` · `"commonErrorList5"` [500] `CommonErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInbound.UpdateShipmentTrackingDetailsRequestParams` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `inboundPlanId` | `path` | `string` | yes |
| `shipmentId` | `path` | `string` | yes |
| `body` | `body` | `UpdateShipmentTrackingDetailsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShipmentTrackingDetailsRequest` | `updateShipmentTrackingDetailsRequestSchema` | `src/models/update-shipment-tracking-details-request.ts` |
| `CancelInboundPlanResponse` | `cancelInboundPlanResponseSchema` | `src/models/cancel-inbound-plan-response.ts` |
| `CommonErrorList` | `commonErrorListSchema` | `src/models/common-error-list.ts` |

