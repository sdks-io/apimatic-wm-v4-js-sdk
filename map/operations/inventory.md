<!-- Generated file — do not edit; regenerated with the SDK. -->

# Inventory — operations

Accessor: `client.inventory` · Source: `src/resources/inventory.ts` · 4 operations · Request and error types: namespace `Inventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkUpdateInventory

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `bulkUpdateInventory(request: Inventory.BulkUpdateInventoryRequestParams, options?: RequestOptions): ApiPromise<BulkUpdateInventoryResponse, Inventory.BulkUpdateInventoryError>`
- **Wire**: `POST /inventory/v4/items/bulk`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkUpdateInventoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Inventory.BulkUpdateInventoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Inventory.BulkUpdateInventoryRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpdateInventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateInventoryRequest` | `bulkUpdateInventoryRequestSchema` | `src/models/bulk-update-inventory-request.ts` |
| `BulkUpdateInventoryResponse` | `bulkUpdateInventoryResponseSchema` | `src/models/bulk-update-inventory-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getInventoryForSku

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInventoryForSku(request: Inventory.GetInventoryForSkuRequest, options?: RequestOptions): ApiPromise<InventorySummary, Inventory.GetInventoryForSkuError>`
- **Wire**: `GET /inventory/v4/items/{sku}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InventorySummary`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Inventory.GetInventoryForSkuError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Inventory.GetInventoryForSkuRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sku` | `path` | `string` | yes |
| `shipNode` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InventorySummary` | `inventorySummarySchema` | `src/models/inventory-summary.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getInventorySummaries

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInventorySummaries(request: Inventory.GetInventorySummariesRequest, options?: RequestOptions): ApiPromise<GetInventorySummariesResponse, Inventory.GetInventorySummariesError>`
- **Wire**: `GET /inventory/v4/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetInventorySummariesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Inventory.GetInventorySummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Inventory.GetInventorySummariesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `skus` | `query` | `string` | no | — |
| `shipNode` | `query` | `string` | no | — |
| `pageSize` | `query` | `number` | no | `100` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetInventorySummariesResponse` | `getInventorySummariesResponseSchema` | `src/models/get-inventory-summaries-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### updateInventoryForSku

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInventoryForSku(request: Inventory.UpdateInventoryForSkuRequest, options?: RequestOptions): ApiPromise<UpdateInventoryResponse, Inventory.UpdateInventoryForSkuError>`
- **Wire**: `PUT /inventory/v4/items/{sku}`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateInventoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Inventory.UpdateInventoryForSkuError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Inventory.UpdateInventoryForSkuRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sku` | `path` | `string` | yes |
| `body` | `body` | `UpdateInventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInventoryRequest` | `updateInventoryRequestSchema` | `src/models/update-inventory-request.ts` |
| `UpdateInventoryResponse` | `updateInventoryResponseSchema` | `src/models/update-inventory-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

