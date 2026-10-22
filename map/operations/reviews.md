<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviews — operations

Accessor: `client.reviews` · Source: `src/resources/reviews.ts` · 3 operations · Request and error types: namespace `Reviews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkUpdateItemStatus

- **Signature**: `bulkUpdateItemStatus(request: Reviews.BulkUpdateItemStatusRequest, options?: RequestOptions): ApiPromise<V3GrowthReviewsAcceleratorItemsStatusResponse, Reviews.BulkUpdateItemStatusError>`
- **Wire**: `PUT /v3/growth/reviews-accelerator/items/status`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthReviewsAcceleratorItemsStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reviews.BulkUpdateItemStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3GrowthReviewsAcceleratorItemsStatus400Error1"` [400] `V3GrowthReviewsAcceleratorItemsStatus400Error1` · `"v3GrowthReviewsAcceleratorItemsStatus401Error1"` [401] `V3GrowthReviewsAcceleratorItemsStatus401Error1` · `"v3GrowthReviewsAcceleratorItemsStatus403Error1"` [403] `V3GrowthReviewsAcceleratorItemsStatus403Error1` · `"v3GrowthReviewsAcceleratorItemsStatus500Error1"` [500] `V3GrowthReviewsAcceleratorItemsStatus500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.BulkUpdateItemStatusRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3GrowthReviewsAcceleratorItemsStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthReviewsAcceleratorItemsStatusRequest` | `v3GrowthReviewsAcceleratorItemsStatusRequestSchema` | `src/models/v3-growth-reviews-accelerator-items-status-request.ts` |
| `V3GrowthReviewsAcceleratorItemsStatusResponse` | `v3GrowthReviewsAcceleratorItemsStatusResponseSchema` | `src/models/v3-growth-reviews-accelerator-items-status-response.ts` |
| `V3GrowthReviewsAcceleratorItemsStatus400Error1` | `v3GrowthReviewsAcceleratorItemsStatus400Error1Schema` | `src/models/v3-growth-reviews-accelerator-items-status400-error1.ts` |
| `V3GrowthReviewsAcceleratorItemsStatus401Error1` | `v3GrowthReviewsAcceleratorItemsStatus401Error1Schema` | `src/models/v3-growth-reviews-accelerator-items-status401-error1.ts` |
| `V3GrowthReviewsAcceleratorItemsStatus403Error1` | `v3GrowthReviewsAcceleratorItemsStatus403Error1Schema` | `src/models/v3-growth-reviews-accelerator-items-status403-error1.ts` |
| `V3GrowthReviewsAcceleratorItemsStatus500Error1` | `v3GrowthReviewsAcceleratorItemsStatus500Error1Schema` | `src/models/v3-growth-reviews-accelerator-items-status500-error1.ts` |

### getIrpCategories

- **Signature**: `getIrpCategories(request: Reviews.GetIrpCategoriesRequest, options?: RequestOptions): ApiPromise<V3GrowthReviewsAcceleratorCategoriesResponse, Reviews.GetIrpCategoriesError>`
- **Wire**: `POST /v3/growth/reviews-accelerator/categories`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthReviewsAcceleratorCategoriesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reviews.GetIrpCategoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3GrowthReviewsAcceleratorCategories400Error1"` [400] `V3GrowthReviewsAcceleratorCategories400Error1` · `"v3GrowthReviewsAcceleratorCategories401Error1"` [401] `V3GrowthReviewsAcceleratorCategories401Error1` · `"v3GrowthReviewsAcceleratorCategories403Error1"` [403] `V3GrowthReviewsAcceleratorCategories403Error1` · `"v3InsightsItemsListingQualityItems500Error1"` [500] `V3InsightsItemsListingQualityItems500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.GetIrpCategoriesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3GrowthReviewsAcceleratorCategoriesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthReviewsAcceleratorCategoriesRequest` | `v3GrowthReviewsAcceleratorCategoriesRequestSchema` | `src/models/v3-growth-reviews-accelerator-categories-request.ts` |
| `V3GrowthReviewsAcceleratorCategoriesResponse` | `v3GrowthReviewsAcceleratorCategoriesResponseSchema` | `src/models/v3-growth-reviews-accelerator-categories-response.ts` |
| `V3GrowthReviewsAcceleratorCategories400Error1` | `v3GrowthReviewsAcceleratorCategories400Error1Schema` | `src/models/v3-growth-reviews-accelerator-categories400-error1.ts` |
| `V3GrowthReviewsAcceleratorCategories401Error1` | `v3GrowthReviewsAcceleratorCategories401Error1Schema` | `src/models/v3-growth-reviews-accelerator-categories401-error1.ts` |
| `V3GrowthReviewsAcceleratorCategories403Error1` | `v3GrowthReviewsAcceleratorCategories403Error1Schema` | `src/models/v3-growth-reviews-accelerator-categories403-error1.ts` |
| `V3InsightsItemsListingQualityItems500Error1` | `v3InsightsItemsListingQualityItems500Error1Schema` | `src/models/v3-insights-items-listing-quality-items500-error1.ts` |

### getIrpItems

- **Signature**: `getIrpItems(request: Reviews.GetIrpItemsRequestParams, options?: RequestOptions): ApiPromise<V3GrowthReviewsAcceleratorItemsResponse, Reviews.GetIrpItemsError>`
- **Wire**: `POST /v3/growth/reviews-accelerator/items`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3GrowthReviewsAcceleratorItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reviews.GetIrpItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3GrowthReviewsAcceleratorItems400Error1"` [400] `V3GrowthReviewsAcceleratorItems400Error1` · `"v3GrowthReviewsAcceleratorItems401Error1"` [401] `V3GrowthReviewsAcceleratorItems401Error1` · `"v3GrowthReviewsAcceleratorItems403Error1"` [403] `V3GrowthReviewsAcceleratorItems403Error1` · `"v3InsightsItemsListingQualityItems500Error1"` [500] `V3InsightsItemsListingQualityItems500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviews.GetIrpItemsRequestParams` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `scrollId` | `query` | — | `string` | no | `"*"` |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `V3GrowthReviewsAcceleratorItemsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3GrowthReviewsAcceleratorItemsRequest` | `v3GrowthReviewsAcceleratorItemsRequestSchema` | `src/models/v3-growth-reviews-accelerator-items-request.ts` |
| `V3GrowthReviewsAcceleratorItemsResponse` | `v3GrowthReviewsAcceleratorItemsResponseSchema` | `src/models/v3-growth-reviews-accelerator-items-response.ts` |
| `V3GrowthReviewsAcceleratorItems400Error1` | `v3GrowthReviewsAcceleratorItems400Error1Schema` | `src/models/v3-growth-reviews-accelerator-items400-error1.ts` |
| `V3GrowthReviewsAcceleratorItems401Error1` | `v3GrowthReviewsAcceleratorItems401Error1Schema` | `src/models/v3-growth-reviews-accelerator-items401-error1.ts` |
| `V3GrowthReviewsAcceleratorItems403Error1` | `v3GrowthReviewsAcceleratorItems403Error1Schema` | `src/models/v3-growth-reviews-accelerator-items403-error1.ts` |
| `V3InsightsItemsListingQualityItems500Error1` | `v3InsightsItemsListingQualityItems500Error1Schema` | `src/models/v3-insights-items-listing-quality-items500-error1.ts` |

