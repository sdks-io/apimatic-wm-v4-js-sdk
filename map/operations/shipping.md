<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shipping — operations

Accessor: `client.shipping` · Source: `src/resources/shipping.ts` · 9 operations · Request and error types: namespace `Shipping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelShipment2

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelShipment2(request: Shipping.CancelShipment2Request, options?: RequestOptions): ApiPromise<CancelShipmentResponse1, Shipping.CancelShipment2Error>`
- **Wire**: `PUT /shipping/v4/shipments/{shipmentId}/cancel`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelShipmentResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.CancelShipment2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.CancelShipment2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelShipmentResponse1` | `cancelShipmentResponse1Schema` | `src/models/cancel-shipment-response1.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getAccessPoints

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccessPoints(request: Shipping.GetAccessPointsRequest, options?: RequestOptions): ApiPromise<GetAccessPointsResponse, Shipping.GetAccessPointsError>`
- **Wire**: `GET /shipping/v4/accessPoints`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAccessPointsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.GetAccessPointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetAccessPointsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accessPointTypes` | `query` | `string` | yes |
| `countryCode` | `query` | `string` | yes |
| `postalCode` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAccessPointsResponse` | `getAccessPointsResponseSchema` | `src/models/get-access-points-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getAdditionalInputs

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAdditionalInputs(request: Shipping.GetAdditionalInputsRequest, options?: RequestOptions): ApiPromise<GetAdditionalInputsResponse, Shipping.GetAdditionalInputsError>`
- **Wire**: `GET /shipping/v4/shipments/additionalInputs/schema`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAdditionalInputsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.GetAdditionalInputsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetAdditionalInputsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `rateId` | `query` | `string` | yes |
| `requestToken` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAdditionalInputsResponse` | `getAdditionalInputsResponseSchema` | `src/models/get-additional-inputs-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getRates

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRates(request: Shipping.GetRatesRequestParams, options?: RequestOptions): ApiPromise<GetFulfillmentOrderResponse, Shipping.GetRatesError>`
- **Wire**: `POST /shipping/v4/shipments/rates`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.GetRatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetRatesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetRatesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetRatesRequest` | `getRatesRequestSchema` | `src/models/get-rates-request.ts` |
| `GetFulfillmentOrderResponse` | `getFulfillmentOrderResponseSchema` | `src/models/get-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getShipmentDocuments

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getShipmentDocuments(request: Shipping.GetShipmentDocumentsRequest, options?: RequestOptions): ApiPromise<GetShipmentDocumentsResponse, Shipping.GetShipmentDocumentsError>`
- **Wire**: `GET /shipping/v4/shipments/{shipmentId}/documents`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetShipmentDocumentsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.GetShipmentDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetShipmentDocumentsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shipmentId` | `path` | `string` | yes |
| `packageClientReferenceId` | `query` | `string` | no |
| `format` | `query` | `Format1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/format1.ts` |
| `GetShipmentDocumentsResponse` | `getShipmentDocumentsResponseSchema` | `src/models/get-shipment-documents-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getTracking

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTracking(request: Shipping.GetTrackingRequest, options?: RequestOptions): ApiPromise<GetTrackingResponse, Shipping.GetTrackingError>`
- **Wire**: `GET /shipping/v4/tracking`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTrackingResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.GetTrackingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetTrackingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `trackingId` | `query` | `string` | yes |
| `carrierId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTrackingResponse` | `getTrackingResponseSchema` | `src/models/get-tracking-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### oneClickShipment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `oneClickShipment(request: Shipping.OneClickShipmentRequestParams, options?: RequestOptions): ApiPromise<GetFulfillmentOrderShipmentsResponse, Shipping.OneClickShipmentError>`
- **Wire**: `POST /shipping/v4/oneClickShipment`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetFulfillmentOrderShipmentsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.OneClickShipmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.OneClickShipmentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OneClickShipmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OneClickShipmentRequest` | `oneClickShipmentRequestSchema` | `src/models/one-click-shipment-request.ts` |
| `GetFulfillmentOrderShipmentsResponse` | `getFulfillmentOrderShipmentsResponseSchema` | `src/models/get-fulfillment-order-shipments-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### purchaseShipment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `purchaseShipment(request: Shipping.PurchaseShipmentRequestParams, options?: RequestOptions): ApiPromise<GetFulfillmentOrderShipmentsResponse, Shipping.PurchaseShipmentError>`
- **Wire**: `POST /shipping/v4/shipments`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetFulfillmentOrderShipmentsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.PurchaseShipmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.PurchaseShipmentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PurchaseShipmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseShipmentRequest` | `purchaseShipmentRequestSchema` | `src/models/purchase-shipment-request.ts` |
| `GetFulfillmentOrderShipmentsResponse` | `getFulfillmentOrderShipmentsResponseSchema` | `src/models/get-fulfillment-order-shipments-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### submitNdrFeedback

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `submitNdrFeedback(request: Shipping.SubmitNdrFeedbackRequestParams, options?: RequestOptions): ApiPromise<undefined, Shipping.SubmitNdrFeedbackError>`
- **Wire**: `POST /shipping/v4/ndrFeedback`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Shipping.SubmitNdrFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.SubmitNdrFeedbackRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubmitNdrFeedbackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitNdrFeedbackRequest` | `submitNdrFeedbackRequestSchema` | `src/models/submit-ndr-feedback-request.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

