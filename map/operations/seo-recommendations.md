<!-- Generated file — do not edit; regenerated with the SDK. -->

# SeoRecommendations — operations

Accessor: `client.seoRecommendations` · Source: `src/resources/seo-recommendations.ts` · 2 operations · Request and error types: namespace `SeoRecommendations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSeoRecommendations

- **Signature**: `getSeoRecommendations(request: SeoRecommendations.GetSeoRecommendationsRequest, options?: RequestOptions): ApiPromise<V3SeoRecommendationGetItemsResponse, SeoRecommendations.GetSeoRecommendationsError>`
- **Wire**: `POST /v3/seo/recommendation/getItems`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SeoRecommendationGetItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SeoRecommendations.GetSeoRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3SeoRecommendationGetItems400Error1"` [400] `V3SeoRecommendationGetItems400Error1` · `"v3SeoRecommendationGetItems500Error1"` [500] `V3SeoRecommendationGetItems500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SeoRecommendations.GetSeoRecommendationsRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | — | `Status2` | no |
| `limit` | `query` | — | `string` | no |
| `nextCursor` | `query` | `next_cursor` | `string` | no |
| `previousCursor` | `query` | `previous_cursor` | `string` | no |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3SeoRecommendationGetItemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2` | `status2Schema` | `src/models/status2.ts` |
| `V3SeoRecommendationGetItemsRequest` | `v3SeoRecommendationGetItemsRequestSchema` | `src/models/v3-seo-recommendation-get-items-request.ts` |
| `V3SeoRecommendationGetItemsResponse` | `v3SeoRecommendationGetItemsResponseSchema` | `src/models/v3-seo-recommendation-get-items-response.ts` |
| `V3SeoRecommendationGetItems400Error1` | `v3SeoRecommendationGetItems400Error1Schema` | `src/models/v3-seo-recommendation-get-items400-error1.ts` |
| `V3SeoRecommendationGetItems500Error1` | `v3SeoRecommendationGetItems500Error1Schema` | `src/models/v3-seo-recommendation-get-items500-error1.ts` |

### updateSeoRecommendations

- **Signature**: `updateSeoRecommendations(request: SeoRecommendations.UpdateSeoRecommendationsRequest, options?: RequestOptions): ApiPromise<V3SeoRecommendationUpdateItemsResponse, SeoRecommendations.UpdateSeoRecommendationsError>`
- **Wire**: `POST /v3/seo/recommendation/updateItems/{itemId}/{decision}`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SeoRecommendationUpdateItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SeoRecommendations.UpdateSeoRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3SeoRecommendationUpdateItems400Error1"` [400] `V3SeoRecommendationUpdateItems400Error1` · `"v3SeoRecommendationUpdateItems404Error1"` [404] `V3SeoRecommendationUpdateItems404Error1` · `"v3SeoRecommendationUpdateItems500Error1"` [500] `V3SeoRecommendationUpdateItems500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SeoRecommendations.UpdateSeoRecommendationsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `itemId` | `path` | — | `string` | yes |
| `decision` | `path` | — | `Decision` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3SeoRecommendationUpdateItemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Decision` | `decisionSchema` | `src/models/decision.ts` |
| `V3SeoRecommendationUpdateItemsRequest` | `v3SeoRecommendationUpdateItemsRequestSchema` | `src/models/v3-seo-recommendation-update-items-request.ts` |
| `V3SeoRecommendationUpdateItemsResponse` | `v3SeoRecommendationUpdateItemsResponseSchema` | `src/models/v3-seo-recommendation-update-items-response.ts` |
| `V3SeoRecommendationUpdateItems400Error1` | `v3SeoRecommendationUpdateItems400Error1Schema` | `src/models/v3-seo-recommendation-update-items400-error1.ts` |
| `V3SeoRecommendationUpdateItems404Error1` | `v3SeoRecommendationUpdateItems404Error1Schema` | `src/models/v3-seo-recommendation-update-items404-error1.ts` |
| `V3SeoRecommendationUpdateItems500Error1` | `v3SeoRecommendationUpdateItems500Error1Schema` | `src/models/v3-seo-recommendation-update-items500-error1.ts` |

