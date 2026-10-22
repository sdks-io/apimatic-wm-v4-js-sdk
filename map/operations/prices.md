<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prices — operations

Accessor: `client.prices` · Source: `src/resources/prices.ts` · 11 operations · Request and error types: namespace `Prices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStrategy

- **Signature**: `createStrategy(request: Prices.CreateStrategyRequest, options?: RequestOptions): ApiPromise<V3RepricerStrategyResponse2, Prices.CreateStrategyError>`
- **Wire**: `POST /v3/repricer/strategy`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3RepricerStrategyResponse2`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.CreateStrategyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3RepricerStrategy400Error1"` [400] `V3RepricerStrategy400Error1` · `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.CreateStrategyRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3RepricerStrategyRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3RepricerStrategyRequest1` | `v3RepricerStrategyRequest1Schema` | `src/models/v3-repricer-strategy-request1.ts` |
| `V3RepricerStrategyResponse2` | `v3RepricerStrategyResponse2Schema` | `src/models/v3-repricer-strategy-response2.ts` |
| `V3RepricerStrategy400Error1` | `v3RepricerStrategy400Error1Schema` | `src/models/v3-repricer-strategy400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### deleteStrategy

- **Signature**: `deleteStrategy(request: Prices.DeleteStrategyRequest, options?: RequestOptions): ApiPromise<RejectRecommendationsResponsePayload, Prices.DeleteStrategyError>`
- **Wire**: `DELETE /v3/repricer/strategy/{strategyCollectionId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RejectRecommendationsResponsePayload`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.DeleteStrategyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3RepricerStrategy400Error1"` [400] `V3RepricerStrategy400Error1` · `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.DeleteStrategyRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `strategyCollectionId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `RejectRecommendationsResponsePayload` | `rejectRecommendationsResponsePayloadSchema` | `src/models/reject-recommendations-response-payload.ts` |
| `V3RepricerStrategy400Error1` | `v3RepricerStrategy400Error1Schema` | `src/models/v3-repricer-strategy400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### getAllIncentives

- **Signature**: `getAllIncentives(request: Prices.GetAllIncentivesRequest, options?: RequestOptions): ApiPromise<V3PriceIncentivesResponse, Prices.GetAllIncentivesError>`
- **Wire**: `GET /v3/price/incentives`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3PriceIncentivesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.GetAllIncentivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3PriceIncentives400Error1"` [400] `V3PriceIncentives400Error1` · `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.GetAllIncentivesRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `incentiveStatus` | `query` | — | `IncentiveStatus` | no | `IncentiveStatus.Eligible` |
| `limit` | `query` | — | `number` | no | `25` |
| `offset` | `query` | — | `number` | no | `0` |
| `sortBy` | `query` | — | `SortBy1` | no | `SortBy1.ExpirationDate` |
| `sortOrder` | `query` | — | `Order` | no | `Order.Desc` |
| `incentiveType` | `query` | — | `IncentiveType` | no | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncentiveStatus` | `incentiveStatusSchema` | `src/models/incentive-status.ts` |
| `SortBy1` | `sortBy1Schema` | `src/models/sort-by1.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `IncentiveType` | `incentiveTypeSchema` | `src/models/incentive-type.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3PriceIncentivesResponse` | `v3PriceIncentivesResponseSchema` | `src/models/v3-price-incentives-response.ts` |
| `V3PriceIncentives400Error1` | `v3PriceIncentives400Error1Schema` | `src/models/v3-price-incentives400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### getRepricerFeed

- **Signature**: `getRepricerFeed(request: Prices.GetRepricerFeedRequest, options?: RequestOptions): ApiPromise<FeedId1, Prices.GetRepricerFeedError>`
- **Wire**: `POST /v3/repricerFeeds`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.GetRepricerFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.GetRepricerFeedRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3RepricerFeedsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3RepricerFeedsRequest` | `v3RepricerFeedsRequestSchema` | `src/models/v3-repricer-feeds-request.ts` |
| `FeedId1` | `feedId1Schema` | `src/models/feed-id1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### getStrategies

- **Signature**: `getStrategies(request: Prices.GetStrategiesRequest, options?: RequestOptions): ApiPromise<V3RepricerStrategiesResponse, Prices.GetStrategiesError>`
- **Wire**: `GET /v3/repricer/strategies`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3RepricerStrategiesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.GetStrategiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.GetStrategiesRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `offset` | `query` | — | `string` | no | `"0"` |
| `limit` | `query` | — | `string` | no | `"10"` |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3RepricerStrategiesResponse` | `v3RepricerStrategiesResponseSchema` | `src/models/v3-repricer-strategies-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### priceAndPromotionBulkUploads

- **Signature**: `priceAndPromotionBulkUploads(request: Prices.PriceAndPromotionBulkUploadsRequest, options?: RequestOptions): ApiPromise<FeedId, Prices.PriceAndPromotionBulkUploadsError>`
- **Wire**: `POST /v3/feeds?feedType=PRICE_AND_PROMOTION`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.PriceAndPromotionBulkUploadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.PriceAndPromotionBulkUploadsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType21` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3FeedsFeedTypePriceAndPromotionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType21` | `feedType21Schema` | `src/models/feed-type21.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsFeedTypePriceAndPromotionRequest` | `v3FeedsFeedTypePriceAndPromotionRequestSchema` | `src/models/v3-feeds-feed-type-price-and-promotion-request.ts` |
| `FeedId` | `feedIdSchema` | `src/models/feed-id.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### reducedReferralFeeIncentivesEnrollment

- **Signature**: `reducedReferralFeeIncentivesEnrollment(request: Prices.ReducedReferralFeeIncentivesEnrollmentRequest, options?: RequestOptions): ApiPromise<V3FeedsFeedTypeIncentiveEnrollmentResponse, Prices.ReducedReferralFeeIncentivesEnrollmentError>`
- **Wire**: `POST /v3/feeds?feedType=INCENTIVE_ENROLLMENT`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3FeedsFeedTypeIncentiveEnrollmentResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.ReducedReferralFeeIncentivesEnrollmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.ReducedReferralFeeIncentivesEnrollmentRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType11` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3FeedsFeedTypeIncentiveEnrollmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType11` | `feedType11Schema` | `src/models/feed-type11.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsFeedTypeIncentiveEnrollmentRequest` | `v3FeedsFeedTypeIncentiveEnrollmentRequestSchema` | `src/models/v3-feeds-feed-type-incentive-enrollment-request.ts` |
| `V3FeedsFeedTypeIncentiveEnrollmentResponse` | `v3FeedsFeedTypeIncentiveEnrollmentResponseSchema` | `src/models/v3-feeds-feed-type-incentive-enrollment-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### updatePrice

- **Signature**: `updatePrice(request: Prices.UpdatePriceRequest, options?: RequestOptions): ApiPromise<V3PriceResponse, Prices.UpdatePriceError>`
- **Wire**: `POST /v3/price`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3PriceResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.UpdatePriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.UpdatePriceRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3PriceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3PriceRequest` | `v3PriceRequestSchema` | `src/models/v3-price-request.ts` |
| `V3PriceResponse` | `v3PriceResponseSchema` | `src/models/v3-price-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### updateStrategy

- **Signature**: `updateStrategy(request: Prices.UpdateStrategyRequest, options?: RequestOptions): ApiPromise<V3RepricerStrategyResponse, Prices.UpdateStrategyError>`
- **Wire**: `PUT /v3/repricer/strategy/{strategyCollectionId}`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3RepricerStrategyResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.UpdateStrategyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3RepricerStrategy400Error1"` [400] `V3RepricerStrategy400Error1` · `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.UpdateStrategyRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `strategyCollectionId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3RepricerStrategyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3RepricerStrategyRequest` | `v3RepricerStrategyRequestSchema` | `src/models/v3-repricer-strategy-request.ts` |
| `V3RepricerStrategyResponse` | `v3RepricerStrategyResponseSchema` | `src/models/v3-repricer-strategy-response.ts` |
| `V3RepricerStrategy400Error1` | `v3RepricerStrategy400Error1Schema` | `src/models/v3-repricer-strategy400-error1.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### updateWalmartFundedIncentivesEnrollmentStatus

- **Signature**: `updateWalmartFundedIncentivesEnrollmentStatus(request: Prices.UpdateWalmartFundedIncentivesEnrollmentStatusRequest, options?: RequestOptions): ApiPromise<V3PriceIncentivesWfpreferenceResponse, Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError>`
- **Wire**: `PUT /v3/price/incentives/wfpreference`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3PriceIncentivesWfpreferenceResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.UpdateWalmartFundedIncentivesEnrollmentStatusRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `autoEnrollEnabled` | `query` | — | `boolean` | no | `true` |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3PriceIncentivesWfpreferenceResponse` | `v3PriceIncentivesWfpreferenceResponseSchema` | `src/models/v3-price-incentives-wfpreference-response.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

### walmartFundedIncentivesEnrollment

- **Signature**: `walmartFundedIncentivesEnrollment(request: Prices.WalmartFundedIncentivesEnrollmentRequest, options?: RequestOptions): ApiPromise<FeedId, Prices.WalmartFundedIncentivesEnrollmentError>`
- **Wire**: `POST /v3/feeds?feedType=WALMART_FUNDED_INCENTIVES_ENROLLMENT`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Prices.WalmartFundedIncentivesEnrollmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [403] `V3Token400Error1` · `"v3Token400Error12"` [500] `V3Token400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Prices.WalmartFundedIncentivesEnrollmentRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType2` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType2` | `feedType2Schema` | `src/models/feed-type2.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest` | `v3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequestSchema` | `src/models/v3-feeds-feed-type-walmart-funded-incentives-enrollment-request.ts` |
| `FeedId` | `feedIdSchema` | `src/models/feed-id.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |

