<!-- Generated file — do not edit; regenerated with the SDK. -->

# FulfillmentOutbound — operations

Accessor: `client.fulfillmentOutbound` · Source: `src/resources/fulfillment-outbound.ts` · 7 operations · Request and error types: namespace `FulfillmentOutbound`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelFulfillmentOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelFulfillmentOrder(request: FulfillmentOutbound.CancelFulfillmentOrderRequest, options?: RequestOptions): ApiPromise<CancelFulfillmentOrderResponse, FulfillmentOutbound.CancelFulfillmentOrderError>`
- **Wire**: `PUT /wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.CancelFulfillmentOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.CancelFulfillmentOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sellerFulfillmentOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelFulfillmentOrderResponse` | `cancelFulfillmentOrderResponseSchema` | `src/models/cancel-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createFulfillmentOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createFulfillmentOrder(request: FulfillmentOutbound.CreateFulfillmentOrderRequestParams, options?: RequestOptions): ApiPromise<CreateFulfillmentOrderResponse, FulfillmentOutbound.CreateFulfillmentOrderError>`
- **Wire**: `POST /wfs/outbound/v4/fulfillmentOrders`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.CreateFulfillmentOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.CreateFulfillmentOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateFulfillmentOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFulfillmentOrderRequest` | `createFulfillmentOrderRequestSchema` | `src/models/create-fulfillment-order-request.ts` |
| `CreateFulfillmentOrderResponse` | `createFulfillmentOrderResponseSchema` | `src/models/create-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getFulfillmentOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFulfillmentOrder(request: FulfillmentOutbound.GetFulfillmentOrderRequest, options?: RequestOptions): ApiPromise<GetFulfillmentOrderResponse, FulfillmentOutbound.GetFulfillmentOrderError>`
- **Wire**: `GET /wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.GetFulfillmentOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.GetFulfillmentOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sellerFulfillmentOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFulfillmentOrderResponse` | `getFulfillmentOrderResponseSchema` | `src/models/get-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getFulfillmentOrderShipments

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFulfillmentOrderShipments(request: FulfillmentOutbound.GetFulfillmentOrderShipmentsRequest, options?: RequestOptions): ApiPromise<GetFulfillmentOrderShipmentsResponse, FulfillmentOutbound.GetFulfillmentOrderShipmentsError>`
- **Wire**: `GET /wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}/shipments`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFulfillmentOrderShipmentsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.GetFulfillmentOrderShipmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.GetFulfillmentOrderShipmentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sellerFulfillmentOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFulfillmentOrderShipmentsResponse` | `getFulfillmentOrderShipmentsResponseSchema` | `src/models/get-fulfillment-order-shipments-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getFulfillmentPreview

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFulfillmentPreview(request: FulfillmentOutbound.GetFulfillmentPreviewRequestParams, options?: RequestOptions): ApiPromise<GetFulfillmentPreviewResponse, FulfillmentOutbound.GetFulfillmentPreviewError>`
- **Wire**: `POST /wfs/outbound/v4/fulfillmentOrders/preview`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetFulfillmentPreviewResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.GetFulfillmentPreviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.GetFulfillmentPreviewRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetFulfillmentPreviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFulfillmentPreviewRequest` | `getFulfillmentPreviewRequestSchema` | `src/models/get-fulfillment-preview-request.ts` |
| `GetFulfillmentPreviewResponse` | `getFulfillmentPreviewResponseSchema` | `src/models/get-fulfillment-preview-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listAllFulfillmentOrders

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAllFulfillmentOrders(request: FulfillmentOutbound.ListAllFulfillmentOrdersRequest, options?: RequestOptions): ApiPromise<ListAllFulfillmentOrdersResponse, FulfillmentOutbound.ListAllFulfillmentOrdersError>`
- **Wire**: `GET /wfs/outbound/v4/fulfillmentOrders`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAllFulfillmentOrdersResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.ListAllFulfillmentOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.ListAllFulfillmentOrdersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `queryStartDate` | `query` | `Date` (date-time) | no |
| `nextToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAllFulfillmentOrdersResponse` | `listAllFulfillmentOrdersResponseSchema` | `src/models/list-all-fulfillment-orders-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### updateFulfillmentOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFulfillmentOrder(request: FulfillmentOutbound.UpdateFulfillmentOrderRequestParams, options?: RequestOptions): ApiPromise<UpdateFulfillmentOrderResponse, FulfillmentOutbound.UpdateFulfillmentOrderError>`
- **Wire**: `PUT /wfs/outbound/v4/fulfillmentOrders/{sellerFulfillmentOrderId}`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FulfillmentOutbound.UpdateFulfillmentOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FulfillmentOutbound.UpdateFulfillmentOrderRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sellerFulfillmentOrderId` | `path` | `string` | yes |
| `body` | `body` | `UpdateFulfillmentOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFulfillmentOrderRequest` | `updateFulfillmentOrderRequestSchema` | `src/models/update-fulfillment-order-request.ts` |
| `UpdateFulfillmentOrderResponse` | `updateFulfillmentOrderResponseSchema` | `src/models/update-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

