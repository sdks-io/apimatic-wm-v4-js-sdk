<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 14 operations · Request and error types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acknowledgeOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `acknowledgeOrder(request: Orders.AcknowledgeOrderRequestParams, options?: RequestOptions): ApiPromise<AcknowledgeOrderResponse, Orders.AcknowledgeOrderError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/acknowledge`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AcknowledgeOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.AcknowledgeOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.AcknowledgeOrderRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `AcknowledgeOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcknowledgeOrderRequest` | `acknowledgeOrderRequestSchema` | `src/models/acknowledge-order-request.ts` |
| `AcknowledgeOrderResponse` | `acknowledgeOrderResponseSchema` | `src/models/acknowledge-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### cancelOrderLines

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelOrderLines(request: Orders.CancelOrderLinesRequestParams, options?: RequestOptions): ApiPromise<CancelOrderLinesResponse, Orders.CancelOrderLinesError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/cancel`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelOrderLinesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.CancelOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.CancelOrderLinesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `CancelOrderLinesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrderLinesRequest` | `cancelOrderLinesRequestSchema` | `src/models/cancel-order-lines-request.ts` |
| `CancelOrderLinesResponse` | `cancelOrderLinesResponseSchema` | `src/models/cancel-order-lines-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### deliverOrderLines

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deliverOrderLines(request: Orders.DeliverOrderLinesRequestParams, options?: RequestOptions): ApiPromise<DeliverOrderLinesResponse, Orders.DeliverOrderLinesError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/deliver`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeliverOrderLinesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.DeliverOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.DeliverOrderLinesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `DeliverOrderLinesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeliverOrderLinesRequest` | `deliverOrderLinesRequestSchema` | `src/models/deliver-order-lines-request.ts` |
| `DeliverOrderLinesResponse` | `deliverOrderLinesResponseSchema` | `src/models/deliver-order-lines-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrder(request: Orders.GetOrderRequest, options?: RequestOptions): ApiPromise<GetOrderResponse, Orders.GetOrderError>`
- **Wire**: `GET /orders/v4/orders/{purchaseOrderId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderResponse` | `getOrderResponseSchema` | `src/models/get-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrderAddress

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrderAddress(request: Orders.GetOrderAddressRequest, options?: RequestOptions): ApiPromise<GetOrderAddressResponse, Orders.GetOrderAddressError>`
- **Wire**: `GET /orders/v4/orders/{purchaseOrderId}/address`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderAddressResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrderAddressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderAddressRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderAddressResponse` | `getOrderAddressResponseSchema` | `src/models/get-order-address-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrderBuyerInfo

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrderBuyerInfo(request: Orders.GetOrderBuyerInfoRequest, options?: RequestOptions): ApiPromise<GetOrderBuyerInfoResponse, Orders.GetOrderBuyerInfoError>`
- **Wire**: `GET /orders/v4/orders/{purchaseOrderId}/buyerInfo`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderBuyerInfoResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrderBuyerInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderBuyerInfoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderBuyerInfoResponse` | `getOrderBuyerInfoResponseSchema` | `src/models/get-order-buyer-info-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrderItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrderItems(request: Orders.GetOrderItemsRequest, options?: RequestOptions): ApiPromise<GetFulfillmentOrderShipmentsResponse, Orders.GetOrderItemsError>`
- **Wire**: `GET /orders/v4/orders/{purchaseOrderId}/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFulfillmentOrderShipmentsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrderItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderItemsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFulfillmentOrderShipmentsResponse` | `getFulfillmentOrderShipmentsResponseSchema` | `src/models/get-fulfillment-order-shipments-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrderRegulatedInfo

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrderRegulatedInfo(request: Orders.GetOrderRegulatedInfoRequest, options?: RequestOptions): ApiPromise<GetOrderRegulatedInfoResponse, Orders.GetOrderRegulatedInfoError>`
- **Wire**: `GET /orders/v4/orders/{purchaseOrderId}/regulatedInfo`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOrderRegulatedInfoResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrderRegulatedInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrderRegulatedInfoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOrderRegulatedInfoResponse` | `getOrderRegulatedInfoResponseSchema` | `src/models/get-order-regulated-info-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getOrders

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrders(request: Orders.GetOrdersRequest, options?: RequestOptions): ApiPromise<GetFulfillmentOrderResponse, Orders.GetOrdersError>`
- **Wire**: `GET /orders/v4/orders`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFulfillmentOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.GetOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.GetOrdersRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `createdAfter` | `query` | `Date` (date-time) | no | — |
| `createdBefore` | `query` | `Date` (date-time) | no | — |
| `lastUpdatedAfter` | `query` | `Date` (date-time) | no | — |
| `orderStatuses` | `query` | `OrderStatus[]` | no | — |
| `fulfillmentTypes` | `query` | `FulfillmentType[]` | no | — |
| `pageSize` | `query` | `number` | no | `100` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderStatus` | `orderStatusSchema` | `src/models/order-status.ts` |
| `FulfillmentType` | `fulfillmentTypeSchema` | `src/models/fulfillment-type.ts` |
| `GetFulfillmentOrderResponse` | `getFulfillmentOrderResponseSchema` | `src/models/get-fulfillment-order-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### refundOrderLines

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `refundOrderLines(request: Orders.RefundOrderLinesRequestParams, options?: RequestOptions): ApiPromise<RefundOrderLinesResponse, Orders.RefundOrderLinesError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/refund`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RefundOrderLinesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.RefundOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.RefundOrderLinesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `RefundOrderLinesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundOrderLinesRequest` | `refundOrderLinesRequestSchema` | `src/models/refund-order-lines-request.ts` |
| `RefundOrderLinesResponse` | `refundOrderLinesResponseSchema` | `src/models/refund-order-lines-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### shipOrderLines

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `shipOrderLines(request: Orders.ShipOrderLinesRequestParams, options?: RequestOptions): ApiPromise<ShipOrderLinesResponse, Orders.ShipOrderLinesError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/shipping`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ShipOrderLinesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.ShipOrderLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ShipOrderLinesRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `ShipOrderLinesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShipOrderLinesRequest` | `shipOrderLinesRequestSchema` | `src/models/ship-order-lines-request.ts` |
| `ShipOrderLinesResponse` | `shipOrderLinesResponseSchema` | `src/models/ship-order-lines-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### shipOrderMultiPackage

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `shipOrderMultiPackage(request: Orders.ShipOrderMultiPackageRequest, options?: RequestOptions): ApiPromise<MultiPackageShipResponse, Orders.ShipOrderMultiPackageError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/multi-package-shipping`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MultiPackageShipResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.ShipOrderMultiPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.ShipOrderMultiPackageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `MultiPackageShipRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MultiPackageShipRequest` | `multiPackageShipRequestSchema` | `src/models/multi-package-ship-request.ts` |
| `MultiPackageShipResponse` | `multiPackageShipResponseSchema` | `src/models/multi-package-ship-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### updateShipmentStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateShipmentStatus(request: Orders.UpdateShipmentStatusRequestParams, options?: RequestOptions): ApiPromise<UpdateShipmentStatusResponse, Orders.UpdateShipmentStatusError>`
- **Wire**: `POST /orders/v4/orders/{purchaseOrderId}/shipment-status`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateShipmentStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.UpdateShipmentStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.UpdateShipmentStatusRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `UpdateShipmentStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShipmentStatusRequest` | `updateShipmentStatusRequestSchema` | `src/models/update-shipment-status-request.ts` |
| `UpdateShipmentStatusResponse` | `updateShipmentStatusResponseSchema` | `src/models/update-shipment-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### updateVerificationStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateVerificationStatus(request: Orders.UpdateVerificationStatusRequestParams, options?: RequestOptions): ApiPromise<UpdateVerificationStatusResponse, Orders.UpdateVerificationStatusError>`
- **Wire**: `PATCH /orders/v4/orders/{purchaseOrderId}/regulatedInfo`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateVerificationStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Orders.UpdateVerificationStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"errorList6"` [503] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.UpdateVerificationStatusRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purchaseOrderId` | `path` | `string` | yes |
| `body` | `body` | `UpdateVerificationStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVerificationStatusRequest` | `updateVerificationStatusRequestSchema` | `src/models/update-verification-status-request.ts` |
| `UpdateVerificationStatusResponse` | `updateVerificationStatusResponseSchema` | `src/models/update-verification-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

