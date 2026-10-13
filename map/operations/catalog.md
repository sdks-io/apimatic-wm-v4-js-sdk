<!-- Generated file — do not edit; regenerated with the SDK. -->

# Catalog — operations

Accessor: `client.catalog` · Source: `src/resources/catalog.ts` · 2 operations · Request and error types: namespace `Catalog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCatalogItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCatalogItem(request: Catalog.GetCatalogItemRequest, options?: RequestOptions): ApiPromise<Item, Catalog.GetCatalogItemError>`
- **Wire**: `GET /catalog/v4/items/{walmartItemId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Item`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Catalog.GetCatalogItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Catalog.GetCatalogItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `walmartItemId` | `path` | `string` | yes |
| `marketplaceIds` | `query` | `string[]` | yes |
| `includedData` | `query` | `IncludedDatum[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludedDatum` | `includedDatumSchema` | `src/models/included-datum.ts` |
| `Item` | `itemSchema` | `src/models/item.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### searchCatalogItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `searchCatalogItems(request: Catalog.SearchCatalogItemsRequest, options?: RequestOptions): ApiPromise<ItemSearchResults, Catalog.SearchCatalogItemsError>`
- **Wire**: `GET /catalog/v4/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemSearchResults`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Catalog.SearchCatalogItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Catalog.SearchCatalogItemsRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `keywords` | `query` | `string` | no | — |
| `walmartItemIds` | `query` | `string` | no | — |
| `sellerSku` | `query` | `string` | no | — |
| `gtin` | `query` | `string` | no | — |
| `upc` | `query` | `string` | no | — |
| `includedData` | `query` | `IncludedDatum[]` | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludedDatum` | `includedDatumSchema` | `src/models/included-datum.ts` |
| `ItemSearchResults` | `itemSearchResultsSchema` | `src/models/item-search-results.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

