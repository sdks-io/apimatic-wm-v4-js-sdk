<!-- Generated file — do not edit; regenerated with the SDK. -->

# SemCatalog — operations

Accessor: `client.semCatalog` · Source: `src/resources/sem-catalog.ts` · 2 operations · Request and error types: namespace `SemCatalog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEligibleItems

- **Signature**: `getEligibleItems(request: SemCatalog.GetEligibleItemsRequest, options?: RequestOptions): ApiPromise<SemCatalogueResponse, SemCatalog.GetEligibleItemsError>`
- **Wire**: `POST /v3/advertising/sem/items/eligibility`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCatalogueResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCatalog.GetEligibleItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCatalog.GetEligibleItemsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemItemEligibilityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemItemEligibilityRequest` | `semItemEligibilityRequestSchema` | `src/models/sem-item-eligibility-request.ts` |
| `SemCatalogueResponse` | `semCatalogueResponseSchema` | `src/models/sem-catalogue-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### getItemRecommendations

- **Signature**: `getItemRecommendations(request: SemCatalog.GetItemRecommendationsRequest, options?: RequestOptions): ApiPromise<SemCatalogueResponse, SemCatalog.GetItemRecommendationsError>`
- **Wire**: `GET /v3/advertising/sem/items/recommendations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SemCatalogueResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCatalog.GetItemRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCatalog.GetItemRecommendationsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `100` |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCatalogueResponse` | `semCatalogueResponseSchema` | `src/models/sem-catalogue-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

