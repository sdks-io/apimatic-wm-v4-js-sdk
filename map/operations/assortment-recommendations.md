<!-- Generated file — do not edit; regenerated with the SDK. -->

# AssortmentRecommendations — operations

Accessor: `client.assortmentRecommendations` · Source: `src/resources/assortment-recommendations.ts` · 5 operations · Request and error types: namespace `AssortmentRecommendations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAssortmentRecommendationTrends

- **Signature**: `getAssortmentRecommendationTrends(request: AssortmentRecommendations.GetAssortmentRecommendationTrendsRequest, options?: RequestOptions): ApiPromise<V3GrowthAssortmentRecommendationsTrendsResponse, AssortmentRecommendations.GetAssortmentRecommendationTrendsError>`
- **Wire**: `GET /v3/growth/assortment/recommendations/trends`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3GrowthAssortmentRecommendationsTrendsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `AssortmentRecommendations.GetAssortmentRecommendationTrendsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse1"` [400] `ErrorResponse1` · `"v3Token500Error1"` [403] `V3Token500Error1` · `"errorResponse12"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssortmentRecommendations.GetAssortmentRecommendationTrendsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `recommendationUniqueId` | `query` | — | `string` | yes |
| `trendTypes` | `query` | — | `string` | no |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthAssortmentRecommendationsTrendsResponse` | `v3GrowthAssortmentRecommendationsTrendsResponseSchema` | `src/models/v3-growth-assortment-recommendations-trends-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### getAssortmentRecommendationVariants

- **Signature**: `getAssortmentRecommendationVariants(request: AssortmentRecommendations.GetAssortmentRecommendationVariantsRequest, options?: RequestOptions): ApiPromise<V3GrowthAssortmentRecommendationsVariantsResponse, AssortmentRecommendations.GetAssortmentRecommendationVariantsError>`
- **Wire**: `GET /v3/growth/assortment/recommendations/variants`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3GrowthAssortmentRecommendationsVariantsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `AssortmentRecommendations.GetAssortmentRecommendationVariantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse1"` [400] `ErrorResponse1` · `"v3Token500Error1"` [403] `V3Token500Error1` · `"errorResponse12"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssortmentRecommendations.GetAssortmentRecommendationVariantsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `primaryVariantItemId` | `query` | — | `string` | yes |
| `nextCursor` | `query` | — | `string` | no |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthAssortmentRecommendationsVariantsResponse` | `v3GrowthAssortmentRecommendationsVariantsResponseSchema` | `src/models/v3-growth-assortment-recommendations-variants-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### getAssortmentRecommendations

- **Signature**: `getAssortmentRecommendations(request: AssortmentRecommendations.GetAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise<V3GrowthAssortmentRecommendationsResponse, AssortmentRecommendations.GetAssortmentRecommendationsError>`
- **Wire**: `POST /v3/growth/assortment/recommendations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthAssortmentRecommendationsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `AssortmentRecommendations.GetAssortmentRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse1"` [400] `ErrorResponse1` · `"v3Token500Error1"` [403] `V3Token500Error1` · `"errorResponse12"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssortmentRecommendations.GetAssortmentRecommendationsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3GrowthAssortmentRecommendationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthAssortmentRecommendationsRequest` | `v3GrowthAssortmentRecommendationsRequestSchema` | `src/models/v3-growth-assortment-recommendations-request.ts` |
| `V3GrowthAssortmentRecommendationsResponse` | `v3GrowthAssortmentRecommendationsResponseSchema` | `src/models/v3-growth-assortment-recommendations-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### getCategorizationDetailsOfAssortmentRecommendations

- **Signature**: `getCategorizationDetailsOfAssortmentRecommendations(request: AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise<V3GrowthAssortmentRecommendationsCategorizationCountsResponse, AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError>`
- **Wire**: `POST /v3/growth/assortment/recommendations/categorization/counts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthAssortmentRecommendationsCategorizationCountsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse1"` [400] `ErrorResponse1` · `"v3Token500Error1"` [403] `V3Token500Error1` · `"errorResponse12"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3GrowthAssortmentRecommendationsCategorizationCountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3GrowthAssortmentRecommendationsCategorizationCountsRequest` | `v3GrowthAssortmentRecommendationsCategorizationCountsRequestSchema` | `src/models/v3-growth-assortment-recommendations-categorization-counts-request.ts` |
| `V3GrowthAssortmentRecommendationsCategorizationCountsResponse` | `v3GrowthAssortmentRecommendationsCategorizationCountsResponseSchema` | `src/models/v3-growth-assortment-recommendations-categorization-counts-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### rejectAssortmentRecommendations

- **Signature**: `rejectAssortmentRecommendations(request: AssortmentRecommendations.RejectAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise<V3GrowthAssortmentRecommendationsRejectionsResponse, AssortmentRecommendations.RejectAssortmentRecommendationsError>`
- **Wire**: `PUT /v3/growth/assortment/recommendations/rejections`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthAssortmentRecommendationsRejectionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `AssortmentRecommendations.RejectAssortmentRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse1"` [400] `ErrorResponse1` · `"v3Token500Error1"` [403] `V3Token500Error1` · `"errorResponse12"` [500] `ErrorResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AssortmentRecommendations.RejectAssortmentRecommendationsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3GrowthAssortmentRecommendationsRejectionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthAssortmentRecommendationsRejectionsRequest` | `v3GrowthAssortmentRecommendationsRejectionsRequestSchema` | `src/models/v3-growth-assortment-recommendations-rejections-request.ts` |
| `V3GrowthAssortmentRecommendationsRejectionsResponse` | `v3GrowthAssortmentRecommendationsRejectionsResponseSchema` | `src/models/v3-growth-assortment-recommendations-rejections-response.ts` |
| `ErrorResponse1` | `errorResponse1Schema` | `src/models/error-response1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

