<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecommendationsApi — operations

Accessor: `client.recommendationsApi` · Source: `src/resources/recommendations-api.ts` · 4 operations · Request and error types: namespace `RecommendationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFulfillWithWfsRecommendations

- **Signature**: `getFulfillWithWfsRecommendations(request: RecommendationsApi.GetFulfillWithWfsRecommendationsRequest, options?: RequestOptions): ApiPromise<V3WfsRecommendationFulfilWithWfsResponse, RecommendationsApi.GetFulfillWithWfsRecommendationsError>`
- **Wire**: `GET /v3/wfs/recommendation/fulfil-with-wfs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3WfsRecommendationFulfilWithWfsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RecommendationsApi.GetFulfillWithWfsRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse2"` [400] `ErrorResponse2` · `"errorResponse22"` [500] `ErrorResponse2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecommendationsApi.GetFulfillWithWfsRecommendationsRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerFavorite` | `query` | — | `boolean` | no | — |
| `showInsights` | `query` | — | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | `30` |
| `offset` | `query` | — | `number` | no | `0` |
| `sortBy` | `query` | `sort_by` | `string` | no | `"estimatedSalesLift"` |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | `SortOrder.Desc` |
| `showHiddenRecordsOnly` | `query` | — | `boolean` | no | `false` |
| `contentType` | `header` | `Content-Type` | `string` | yes | — |
| `accept` | `header` | `Accept` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes | — |
| `wmAuditOriginSource` | `header` | `wm_audit.origin_source` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `V3WfsRecommendationFulfilWithWfsResponse` | `v3WfsRecommendationFulfilWithWfsResponseSchema` | `src/models/v3-wfs-recommendation-fulfil-with-wfs-response.ts` |
| `ErrorResponse2` | `errorResponse2Schema` | `src/models/error-response2.ts` |

### getRestockRecommendations

- **Signature**: `getRestockRecommendations(request: RecommendationsApi.GetRestockRecommendationsRequest, options?: RequestOptions): ApiPromise<V3WfsRecommendationRestockResponse, RecommendationsApi.GetRestockRecommendationsError>`
- **Wire**: `GET /v3/wfs/recommendation/restock`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3WfsRecommendationRestockResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RecommendationsApi.GetRestockRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse2"` [400] `ErrorResponse2` · `"errorResponse22"` [500] `ErrorResponse2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecommendationsApi.GetRestockRecommendationsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerFavorite` | `query` | — | `boolean` | no | — |
| `showInsights` | `query` | — | `boolean` | no | `true` |
| `limit` | `query` | — | `number` | no | `30` |
| `offset` | `query` | — | `number` | no | `0` |
| `sortBy` | `query` | `sort_by` | `string` | no | `"forecastedSalesLift"` |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | `SortOrder.Desc` |
| `showHiddenRecordsOnly` | `query` | — | `boolean` | no | `false` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |
| `contentType` | `header` | `Content-Type` | `string` | yes | — |
| `accept` | `header` | `Accept` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes | — |
| `wmAuditOriginSource` | `header` | `wm_audit.origin_source` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `V3WfsRecommendationRestockResponse` | `v3WfsRecommendationRestockResponseSchema` | `src/models/v3-wfs-recommendation-restock-response.ts` |
| `ErrorResponse2` | `errorResponse2Schema` | `src/models/error-response2.ts` |

### getShipmentQuantityRecommendations

- **Signature**: `getShipmentQuantityRecommendations(request: RecommendationsApi.GetShipmentQuantityRecommendationsRequest, options?: RequestOptions): ApiPromise<V3WfsRecommendationShipmentQuantityResponse, RecommendationsApi.GetShipmentQuantityRecommendationsError>`
- **Wire**: `POST /v3/wfs/recommendation/shipment-quantity`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3WfsRecommendationShipmentQuantityResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RecommendationsApi.GetShipmentQuantityRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse2"` [400] `ErrorResponse2` · `"notFoundResponse"` [404] `NotFoundResponse` · `"errorResponse22"` [500] `ErrorResponse2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecommendationsApi.GetShipmentQuantityRecommendationsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3WfsRecommendationShipmentQuantityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3WfsRecommendationShipmentQuantityRequest` | `v3WfsRecommendationShipmentQuantityRequestSchema` | `src/models/v3-wfs-recommendation-shipment-quantity-request.ts` |
| `V3WfsRecommendationShipmentQuantityResponse` | `v3WfsRecommendationShipmentQuantityResponseSchema` | `src/models/v3-wfs-recommendation-shipment-quantity-response.ts` |
| `ErrorResponse2` | `errorResponse2Schema` | `src/models/error-response2.ts` |
| `NotFoundResponse` | `notFoundResponseSchema` | `src/models/not-found-response.ts` |

### getUnpublishedRecommendations

- **Signature**: `getUnpublishedRecommendations(request: RecommendationsApi.GetUnpublishedRecommendationsRequest, options?: RequestOptions): ApiPromise<V3WfsRecommendationUnpublishedResponse, RecommendationsApi.GetUnpublishedRecommendationsError>`
- **Wire**: `GET /v3/wfs/recommendation/unpublished`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3WfsRecommendationUnpublishedResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RecommendationsApi.GetUnpublishedRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse2"` [400] `ErrorResponse2` · `"errorResponse22"` [500] `ErrorResponse2` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecommendationsApi.GetUnpublishedRecommendationsRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerFavorite` | `query` | — | `boolean` | no | — |
| `showInsights` | `query` | — | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | `30` |
| `offset` | `query` | — | `number` | no | `0` |
| `sortBy` | `query` | `sort_by` | `string` | no | `"estimatedSalesLift"` |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | `SortOrder.Desc` |
| `contentType` | `header` | `Content-Type` | `string` | yes | — |
| `accept` | `header` | `Accept` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes | — |
| `wmAuditOriginSource` | `header` | `wm_audit.origin_source` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `V3WfsRecommendationUnpublishedResponse` | `v3WfsRecommendationUnpublishedResponseSchema` | `src/models/v3-wfs-recommendation-unpublished-response.ts` |
| `ErrorResponse2` | `errorResponse2Schema` | `src/models/error-response2.ts` |

