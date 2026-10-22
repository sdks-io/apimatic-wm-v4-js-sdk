<!-- Generated file — do not edit; regenerated with the SDK. -->

# InventoryApi — operations

Accessor: `client.inventoryApi` · Source: `src/resources/inventory-api.ts` · 7 operations · Request and error types: namespace `InventoryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInventory

- **Signature**: `getInventory(request: InventoryApi.GetInventoryRequest, options?: RequestOptions): ApiPromise<Inventory1, InventoryApi.GetInventoryError>`
- **Wire**: `GET /v3/inventory`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Inventory1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.GetInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"inventory1"` [400] `Inventory1` · `"inventory12"` [404] `Inventory1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.GetInventoryRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `query` | — | `string` | yes |
| `shipNode` | `query` | — | `string` | no |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `Inventory1` | `inventory1Schema` | `src/models/inventory1.ts` |

### getMultiNodeInventoryForAllSkuAndAllShipNodes

- **Signature**: `getMultiNodeInventoryForAllSkuAndAllShipNodes(request: InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest, options?: RequestOptions): ApiPromise<MultiNodeInventoryFetchResponseDto, InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError>`
- **Wire**: `GET /v3/inventories`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MultiNodeInventoryFetchResponseDto`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Inventories403Error1"` [403] `V3Inventories403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `string` | no | `"10"` |
| `nextCursor` | `query` | — | `string` | no | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `MultiNodeInventoryFetchResponseDto` | `multiNodeInventoryFetchResponseDtoSchema` | `src/models/multi-node-inventory-fetch-response-dto.ts` |
| `V3Inventories403Error1` | `v3Inventories403Error1Schema` | `src/models/v3-inventories403-error1.ts` |

### getMultiNodeInventoryForSkuAndAllShipnodes

- **Signature**: `getMultiNodeInventoryForSkuAndAllShipnodes(request: InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesRequest, options?: RequestOptions): ApiPromise<InventoriesDto, InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError>`
- **Wire**: `GET /v3/inventories/{sku}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InventoriesDto`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"inventoriesDto"` [400] `InventoriesDto` · `"inventoriesDto2"` [404] `InventoriesDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `path` | — | `string` | yes |
| `shipNode` | `query` | — | `string` | no |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `InventoriesDto` | `inventoriesDtoSchema` | `src/models/inventories-dto.ts` |

### getWfsInventory

- **Signature**: `getWfsInventory(request: InventoryApi.GetWfsInventoryRequest, options?: RequestOptions): ApiPromise<V3FulfillmentInventoryResponse, InventoryApi.GetWfsInventoryError>`
- **Wire**: `GET /v3/fulfillment/inventory`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3FulfillmentInventoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.GetWfsInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3FulfillmentInventory403Error1"` [403] `V3FulfillmentInventory403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.GetWfsInventoryRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sku` | `query` | — | `string` | no | — |
| `fromModifiedDate` | `query` | — | `string` | no | — |
| `toModifiedDate` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `string` | no | `"10"` |
| `offset` | `query` | — | `string` | no | `"0"` |
| `shipNodeType` | `query` | — | `string` | no | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FulfillmentInventoryResponse` | `v3FulfillmentInventoryResponseSchema` | `src/models/v3-fulfillment-inventory-response.ts` |
| `V3FulfillmentInventory403Error1` | `v3FulfillmentInventory403Error1Schema` | `src/models/v3-fulfillment-inventory403-error1.ts` |

### updateBulkInventory

- **Signature**: `updateBulkInventory(request: InventoryApi.UpdateBulkInventoryRequest, options?: RequestOptions): ApiPromise<FeedId, ApiError>`
- **Wire**: `POST /v3/feeds`
- **Auth**: `accessToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InventoryApi.UpdateBulkInventoryRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType1` | yes |
| `shipNode` | `query` | — | `string` | no |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `file` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType1` | `feedType1Schema` | `src/models/feed-type1.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `FeedId` | `feedIdSchema` | `src/models/feed-id.ts` |

### updateInventoryForAnItem

- **Signature**: `updateInventoryForAnItem(request: InventoryApi.UpdateInventoryForAnItemRequest, options?: RequestOptions): ApiPromise<Inventory1, InventoryApi.UpdateInventoryForAnItemError>`
- **Wire**: `PUT /v3/inventory`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Inventory1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.UpdateInventoryForAnItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"inventory1"` [400] `Inventory1` · `"inventory12"` [404] `Inventory1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.UpdateInventoryForAnItemRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `query` | — | `string` | yes |
| `shipNode` | `query` | — | `string` | no |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3InventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3InventoryRequest` | `v3InventoryRequestSchema` | `src/models/v3-inventory-request.ts` |
| `Inventory1` | `inventory1Schema` | `src/models/inventory1.ts` |

### updateMultiNodeInventory

- **Signature**: `updateMultiNodeInventory(request: InventoryApi.UpdateMultiNodeInventoryRequest, options?: RequestOptions): ApiPromise<MultiNodeInventoryUpdateResponseDto, InventoryApi.UpdateMultiNodeInventoryError>`
- **Wire**: `PUT /v3/inventories/{sku}`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MultiNodeInventoryUpdateResponseDto`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InventoryApi.UpdateMultiNodeInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"multiNodeInventoryUpdateResponseDto"` [400] `MultiNodeInventoryUpdateResponseDto` · `"multiNodeInventoryUpdateResponseDto2"` [404] `MultiNodeInventoryUpdateResponseDto` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InventoryApi.UpdateMultiNodeInventoryRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3InventoriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3InventoriesRequest` | `v3InventoriesRequestSchema` | `src/models/v3-inventories-request.ts` |
| `MultiNodeInventoryUpdateResponseDto` | `multiNodeInventoryUpdateResponseDtoSchema` | `src/models/multi-node-inventory-update-response-dto.ts` |

