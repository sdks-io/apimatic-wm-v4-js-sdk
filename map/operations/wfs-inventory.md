<!-- Generated file — do not edit; regenerated with the SDK. -->

# WfsInventory — operations

Accessor: `client.wfsInventory` · Source: `src/resources/wfs-inventory.ts` · 1 operation · Request and error types: namespace `WfsInventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWfsInventoryItems

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWfsInventoryItems(request: WfsInventory.GetWfsInventoryItemsRequest, options?: RequestOptions): ApiPromise<GetWfsInventoryResponse, WfsInventory.GetWfsInventoryItemsError>`
- **Wire**: `GET /inventory/v4/wfs/items`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetWfsInventoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WfsInventory.GetWfsInventoryItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WfsInventory.GetWfsInventoryItemsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `skus` | `query` | `string` | no | — |
| `pageSize` | `query` | `number` | no | `100` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetWfsInventoryResponse` | `getWfsInventoryResponseSchema` | `src/models/get-wfs-inventory-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

