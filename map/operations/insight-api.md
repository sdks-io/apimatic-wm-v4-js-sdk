<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightApi — operations

Accessor: `client.insightApi` · Source: `src/resources/insight-api.ts` · 7 operations · Request and error types: namespace `InsightApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCategoriesList

- **Signature**: `getCategoriesList(request: InsightApi.GetCategoriesListRequest, options?: RequestOptions): ApiPromise<V3InsightsItemsListingQualityCountResponse, InsightApi.GetCategoriesListError>`
- **Wire**: `GET /v3/insights/items/listingQuality/count`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsItemsListingQualityCountResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetCategoriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsItemsListingQualityCount400Error1"` [400] `V3InsightsItemsListingQualityCount400Error1` · `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsItemsListingQualityCount500Error1"` [500] `V3InsightsItemsListingQualityCount500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetCategoriesListRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `viewTrendingItems` | `query` | — | `boolean` | no | `true` |
| `wfsFlag` | `query` | — | `boolean` | no | — |
| `hasIssue` | `query` | — | `number` | no | `0` |
| `type` | `query` | — | `Type3` | no | — |
| `inDemandIndicator` | `query` | — | `boolean` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `number` | no | `0` |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3InsightsItemsListingQualityCountResponse` | `v3InsightsItemsListingQualityCountResponseSchema` | `src/models/v3-insights-items-listing-quality-count-response.ts` |
| `V3InsightsItemsListingQualityCount400Error1` | `v3InsightsItemsListingQualityCount400Error1Schema` | `src/models/v3-insights-items-listing-quality-count400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsItemsListingQualityCount500Error1` | `v3InsightsItemsListingQualityCount500Error1Schema` | `src/models/v3-insights-items-listing-quality-count500-error1.ts` |

### getListingQualityScore

- **Signature**: `getListingQualityScore(request: InsightApi.GetListingQualityScoreRequest, options?: RequestOptions): ApiPromise<V3InsightsItemsListingQualityScoreResponse, InsightApi.GetListingQualityScoreError>`
- **Wire**: `GET /v3/insights/items/listingQuality/score`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsItemsListingQualityScoreResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetListingQualityScoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsItemsListingQualityScore400Error1"` [400] `V3InsightsItemsListingQualityScore400Error1` · `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsItemsListingQualityScore500Error1"` [500] `V3InsightsItemsListingQualityScore500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetListingQualityScoreRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `viewTrendingItems` | `query` | — | `boolean` | no |
| `wfsFlag` | `query` | — | `string` | no |
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
| `V3InsightsItemsListingQualityScoreResponse` | `v3InsightsItemsListingQualityScoreResponseSchema` | `src/models/v3-insights-items-listing-quality-score-response.ts` |
| `V3InsightsItemsListingQualityScore400Error1` | `v3InsightsItemsListingQualityScore400Error1Schema` | `src/models/v3-insights-items-listing-quality-score400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsItemsListingQualityScore500Error1` | `v3InsightsItemsListingQualityScore500Error1Schema` | `src/models/v3-insights-items-listing-quality-score500-error1.ts` |

### getProSellerBadgeInfo

- **Signature**: `getProSellerBadgeInfo(request: InsightApi.GetProSellerBadgeInfoRequest, options?: RequestOptions): ApiPromise<V3InsightsProsellerbadgeResponse, InsightApi.GetProSellerBadgeInfoError>`
- **Wire**: `GET /v3/insights/prosellerbadge`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsProsellerbadgeResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetProSellerBadgeInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsProsellerbadge400Error1"` [400] `V3InsightsProsellerbadge400Error1` · `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsProsellerbadge500Error1"` [500] `V3InsightsProsellerbadge500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetProSellerBadgeInfoRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
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
| `V3InsightsProsellerbadgeResponse` | `v3InsightsProsellerbadgeResponseSchema` | `src/models/v3-insights-prosellerbadge-response.ts` |
| `V3InsightsProsellerbadge400Error1` | `v3InsightsProsellerbadge400Error1Schema` | `src/models/v3-insights-prosellerbadge400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsProsellerbadge500Error1` | `v3InsightsProsellerbadge500Error1Schema` | `src/models/v3-insights-prosellerbadge500-error1.ts` |

### getSellerIncentivesInfo

- **Signature**: `getSellerIncentivesInfo(request: InsightApi.GetSellerIncentivesInfoRequest, options?: RequestOptions): ApiPromise<V3InsightsSellerIncentivesResponse, InsightApi.GetSellerIncentivesInfoError>`
- **Wire**: `GET /v3/insights/sellerIncentives`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsSellerIncentivesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetSellerIncentivesInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsSellerIncentives500Error1"` [500] `V3InsightsSellerIncentives500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetSellerIncentivesInfoRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
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
| `V3InsightsSellerIncentivesResponse` | `v3InsightsSellerIncentivesResponseSchema` | `src/models/v3-insights-seller-incentives-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsSellerIncentives500Error1` | `v3InsightsSellerIncentives500Error1Schema` | `src/models/v3-insights-seller-incentives500-error1.ts` |

### getUnpublishedItemCount

- **Signature**: `getUnpublishedItemCount(request: InsightApi.GetUnpublishedItemCountRequest, options?: RequestOptions): ApiPromise<V3InsightsItemsUnpublishedCountsResponse, InsightApi.GetUnpublishedItemCountError>`
- **Wire**: `GET /v3/insights/items/unpublished/counts`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsItemsUnpublishedCountsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetUnpublishedItemCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsItemsUnpublishedCounts500Error1"` [500] `V3InsightsItemsUnpublishedCounts500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetUnpublishedItemCountRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fromDate` | `query` | — | `string` | yes |
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
| `V3InsightsItemsUnpublishedCountsResponse` | `v3InsightsItemsUnpublishedCountsResponseSchema` | `src/models/v3-insights-items-unpublished-counts-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsItemsUnpublishedCounts500Error1` | `v3InsightsItemsUnpublishedCounts500Error1Schema` | `src/models/v3-insights-items-unpublished-counts500-error1.ts` |

### getUnpublishedItems

- **Signature**: `getUnpublishedItems(request: InsightApi.GetUnpublishedItemsRequest, options?: RequestOptions): ApiPromise<V3InsightsItemsUnpublishedItemsResponse, InsightApi.GetUnpublishedItemsError>`
- **Wire**: `GET /v3/insights/items/unpublished/items`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3InsightsItemsUnpublishedItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.GetUnpublishedItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsItemsUnpublishedItems500Error1"` [500] `V3InsightsItemsUnpublishedItems500Error1` · `"v3Token400Error13"` [400] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.GetUnpublishedItemsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `fromDate` | `query` | — | `string` | yes | — |
| `unpublishedReasonCode` | `query` | — | `string` | no | `"all"` |
| `limit` | `query` | — | `string` | no | `"20"` |
| `offerLifecycleStatus` | `query` | — | `string` | no | `"all"` |
| `marketTrending` | `query` | — | `string` | no | `"true"` |
| `itemsWithInventory` | `query` | — | `string` | no | `"true"` |
| `isCustomerFavorite` | `query` | — | `boolean` | no | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3InsightsItemsUnpublishedItemsResponse` | `v3InsightsItemsUnpublishedItemsResponseSchema` | `src/models/v3-insights-items-unpublished-items-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsItemsUnpublishedItems500Error1` | `v3InsightsItemsUnpublishedItems500Error1Schema` | `src/models/v3-insights-items-unpublished-items500-error1.ts` |

### itemsDetailsForListing

- **Signature**: `itemsDetailsForListing(request: InsightApi.ItemsDetailsForListingRequest, options?: RequestOptions): ApiPromise<V3InsightsItemsListingQualityItemsResponse, InsightApi.ItemsDetailsForListingError>`
- **Wire**: `POST /v3/insights/items/listingQuality/items`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3InsightsItemsListingQualityItemsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `InsightApi.ItemsDetailsForListingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [401] `V3Token400Error1` · `"v3Token400Error12"` [403] `V3Token400Error1` · `"v3InsightsItemsListingQualityItems500Error1"` [500] `V3InsightsItemsListingQualityItems500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightApi.ItemsDetailsForListingRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `string` | no | `"200"` |
| `nextCursor` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `V3InsightsItemsListingQualityItemsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `V3InsightsItemsListingQualityItemsRequest` | `v3InsightsItemsListingQualityItemsRequestSchema` | `src/models/v3-insights-items-listing-quality-items-request.ts` |
| `V3InsightsItemsListingQualityItemsResponse` | `v3InsightsItemsListingQualityItemsResponseSchema` | `src/models/v3-insights-items-listing-quality-items-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3InsightsItemsListingQualityItems500Error1` | `v3InsightsItemsListingQualityItems500Error1Schema` | `src/models/v3-insights-items-listing-quality-items500-error1.ts` |

