<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductFees — operations

Accessor: `client.productFees` · Source: `src/resources/product-fees.ts` · 3 operations · Request and error types: namespace `ProductFees`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMyFeesEstimateForItem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMyFeesEstimateForItem(request: ProductFees.GetMyFeesEstimateForItemRequest, options?: RequestOptions): ApiPromise<GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForItemError>`
- **Wire**: `POST /products/fees/v4/items/{WalmartItemId}/feesEstimate`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetMyFeesEstimateResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductFees.GetMyFeesEstimateForItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductFees.GetMyFeesEstimateForItemRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `walmartItemId` | `path` | `WalmartItemId` | `string` | yes |
| `body` | `body` | — | `GetMyFeesEstimateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMyFeesEstimateRequest` | `getMyFeesEstimateRequestSchema` | `src/models/get-my-fees-estimate-request.ts` |
| `GetMyFeesEstimateResponse` | `getMyFeesEstimateResponseSchema` | `src/models/get-my-fees-estimate-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getMyFeesEstimateForSku

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMyFeesEstimateForSku(request: ProductFees.GetMyFeesEstimateForSkuRequest, options?: RequestOptions): ApiPromise<GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForSkuError>`
- **Wire**: `POST /products/fees/v4/listings/{SellerSKU}/feesEstimate`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetMyFeesEstimateResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductFees.GetMyFeesEstimateForSkuError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductFees.GetMyFeesEstimateForSkuRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sellerSku` | `path` | `SellerSKU` | `string` | yes |
| `marketplaceId` | `query` | `MarketplaceId` | `string` | yes |
| `body` | `body` | — | `GetMyFeesEstimateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMyFeesEstimateRequest` | `getMyFeesEstimateRequestSchema` | `src/models/get-my-fees-estimate-request.ts` |
| `GetMyFeesEstimateResponse` | `getMyFeesEstimateResponseSchema` | `src/models/get-my-fees-estimate-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getMyFeesEstimates

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMyFeesEstimates(request: ProductFees.GetMyFeesEstimatesRequest, options?: RequestOptions): ApiPromise<FeesEstimateResult[], ProductFees.GetMyFeesEstimatesError>`
- **Wire**: `POST /products/fees/v4/feesEstimate`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeesEstimateResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductFees.GetMyFeesEstimatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductFees.GetMyFeesEstimatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FeesEstimateByIdRequest[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeesEstimateByIdRequest` | `feesEstimateByIdRequestSchema` | `src/models/fees-estimate-by-id-request.ts` |
| `FeesEstimateResult` | `feesEstimateResultSchema` | `src/models/fees-estimate-result.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

