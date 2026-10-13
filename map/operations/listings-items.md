<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListingsItems — operations

Accessor: `client.listingsItems` · Source: `src/resources/listings-items.ts` · 5 operations · Request and error types: namespace `ListingsItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteListingsItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteListingsItem(request: ListingsItems.DeleteListingsItemRequest, options?: RequestOptions): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.DeleteListingsItemError>`
- **Wire**: `DELETE /listings/v4/items/{sellerId}/{sku}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListingsItemSubmissionResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsItems.DeleteListingsItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsItems.DeleteListingsItemRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sellerId` | `path` | `string` | yes | — |
| `sku` | `path` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `issueLocale` | `query` | `string` | no | `"en_US"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListingsItemSubmissionResponse` | `listingsItemSubmissionResponseSchema` | `src/models/listings-item-submission-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getListingsItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getListingsItem(request: ListingsItems.GetListingsItemRequest, options?: RequestOptions): ApiPromise<Item1, ListingsItems.GetListingsItemError>`
- **Wire**: `GET /listings/v4/items/{sellerId}/{sku}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Item1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsItems.GetListingsItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsItems.GetListingsItemRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sellerId` | `path` | `string` | yes | — |
| `sku` | `path` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `issueLocale` | `query` | `string` | no | `"en_US"` |
| `includedData` | `query` | `IncludedDatum1[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludedDatum1` | `includedDatum1Schema` | `src/models/included-datum1.ts` |
| `Item1` | `item1Schema` | `src/models/item1.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### patchListingsItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchListingsItem(request: ListingsItems.PatchListingsItemRequest, options?: RequestOptions): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.PatchListingsItemError>`
- **Wire**: `PATCH /listings/v4/items/{sellerId}/{sku}`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListingsItemSubmissionResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsItems.PatchListingsItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsItems.PatchListingsItemRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sellerId` | `path` | `string` | yes | — |
| `sku` | `path` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `issueLocale` | `query` | `string` | no | `"en_US"` |
| `body` | `body` | `ListingsItemPatchRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListingsItemPatchRequest` | `listingsItemPatchRequestSchema` | `src/models/listings-item-patch-request.ts` |
| `ListingsItemSubmissionResponse` | `listingsItemSubmissionResponseSchema` | `src/models/listings-item-submission-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### putListingsItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putListingsItem(request: ListingsItems.PutListingsItemRequest, options?: RequestOptions): ApiPromise<ListingsItemSubmissionResponse, ListingsItems.PutListingsItemError>`
- **Wire**: `PUT /listings/v4/items/{sellerId}/{sku}`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListingsItemSubmissionResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsItems.PutListingsItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsItems.PutListingsItemRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sellerId` | `path` | `string` | yes | — |
| `sku` | `path` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `issueLocale` | `query` | `string` | no | `"en_US"` |
| `body` | `body` | `ListingsItemPutRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListingsItemPutRequest` | `listingsItemPutRequestSchema` | `src/models/listings-item-put-request.ts` |
| `ListingsItemSubmissionResponse` | `listingsItemSubmissionResponseSchema` | `src/models/listings-item-submission-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### searchListingsItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `searchListingsItems(request: ListingsItems.SearchListingsItemsRequest, options?: RequestOptions): ApiPromise<ItemSearchResults1, ListingsItems.SearchListingsItemsError>`
- **Wire**: `GET /listings/v4/items/{sellerId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemSearchResults1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsItems.SearchListingsItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsItems.SearchListingsItemsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sellerId` | `path` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `includedData` | `query` | `IncludedDatum1[]` | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludedDatum1` | `includedDatum1Schema` | `src/models/included-datum1.ts` |
| `ItemSearchResults1` | `itemSearchResults1Schema` | `src/models/item-search-results1.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

