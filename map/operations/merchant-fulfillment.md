<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantFulfillment — operations

Accessor: `client.merchantFulfillment` · Source: `src/resources/merchant-fulfillment.ts` · 5 operations · Request and error types: namespace `MerchantFulfillment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelShipment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelShipment(request: MerchantFulfillment.CancelShipmentRequest, options?: RequestOptions): ApiPromise<CancelShipmentResponse, MerchantFulfillment.CancelShipmentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /mfn/v4/shipments/{shipmentId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelShipmentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `MerchantFulfillment.CancelShipmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantFulfillment.CancelShipmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelShipmentResponse` | `cancelShipmentResponseSchema` | `src/models/cancel-shipment-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createShipment

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createShipment(request: MerchantFulfillment.CreateShipmentRequestParams, options?: RequestOptions): ApiPromise<CreateShipmentResponse, MerchantFulfillment.CreateShipmentError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /mfn/v4/shipments`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateShipmentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `MerchantFulfillment.CreateShipmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantFulfillment.CreateShipmentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateShipmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateShipmentRequest` | `createShipmentRequestSchema` | `src/models/create-shipment-request.ts` |
| `CreateShipmentResponse` | `createShipmentResponseSchema` | `src/models/create-shipment-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getEligibleShippingServices

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEligibleShippingServices(request: MerchantFulfillment.GetEligibleShippingServicesRequestParams, options?: RequestOptions): ApiPromise<GetEligibleShippingServicesResponse, MerchantFulfillment.GetEligibleShippingServicesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /mfn/v4/eligibleShippingServices`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetEligibleShippingServicesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `MerchantFulfillment.GetEligibleShippingServicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantFulfillment.GetEligibleShippingServicesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetEligibleShippingServicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetEligibleShippingServicesRequest` | `getEligibleShippingServicesRequestSchema` | `src/models/get-eligible-shipping-services-request.ts` |
| `GetEligibleShippingServicesResponse` | `getEligibleShippingServicesResponseSchema` | `src/models/get-eligible-shipping-services-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getLabel

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLabel(request: MerchantFulfillment.GetLabelRequest, options?: RequestOptions): ApiPromise<Label, MerchantFulfillment.GetLabelError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /mfn/v4/shipments/{shipmentId}/label`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Label`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `MerchantFulfillment.GetLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantFulfillment.GetLabelRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `shipmentId` | `path` | `string` | yes | — |
| `format` | `query` | `Format` | no | `Format.Pdf` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Label` | `labelSchema` | `src/models/label.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getShipment2

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getShipment2(request: MerchantFulfillment.GetShipment2Request, options?: RequestOptions): ApiPromise<GetShipmentResponse, MerchantFulfillment.GetShipment2Error>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /mfn/v4/shipments/{shipmentId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetShipmentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `MerchantFulfillment.GetShipment2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantFulfillment.GetShipment2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shipmentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetShipmentResponse` | `getShipmentResponseSchema` | `src/models/get-shipment-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

