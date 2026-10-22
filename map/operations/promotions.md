<!-- Generated file — do not edit; regenerated with the SDK. -->

# Promotions — operations

Accessor: `client.promotions` · Source: `src/resources/promotions.ts` · 3 operations · Request and error types: namespace `Promotions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPromotionalPrices

- **Signature**: `getPromotionalPrices(request: Promotions.GetPromotionalPricesRequest, options?: RequestOptions): ApiPromise<V3PromoSkuResponse, Promotions.GetPromotionalPricesError>`
- **Wire**: `GET /v3/promo/sku/{sku}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3PromoSkuResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Promotions.GetPromotionalPricesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token500Error1"` [401] `V3Token500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Promotions.GetPromotionalPricesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3PromoSkuResponse` | `v3PromoSkuResponseSchema` | `src/models/v3-promo-sku-response.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### priceBulkUploads

- **Signature**: `priceBulkUploads(request: Promotions.PriceBulkUploadsRequest, options?: RequestOptions): ApiPromise<FeedId1, Promotions.PriceBulkUploadsError>`
- **Wire**: `POST /v3/feeds?feedType=PRICE_AND_PROMOTION`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Promotions.PriceBulkUploadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token500Error1"` [401] `V3Token500Error1` · `"v3Token500Error12"` [500] `V3Token500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Promotions.PriceBulkUploadsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType21` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3FeedsFeedTypePriceAndPromotionRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType21` | `feedType21Schema` | `src/models/feed-type21.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsFeedTypePriceAndPromotionRequest1` | `v3FeedsFeedTypePriceAndPromotionRequest1Schema` | `src/models/v3-feeds-feed-type-price-and-promotion-request1.ts` |
| `FeedId1` | `feedId1Schema` | `src/models/feed-id1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

### updatePromotionalPrices

- **Signature**: `updatePromotionalPrices(request: Promotions.UpdatePromotionalPricesRequest, options?: RequestOptions): ApiPromise<V3PriceResponse, Promotions.UpdatePromotionalPricesError>`
- **Wire**: `POST /v3/price`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3PriceResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Promotions.UpdatePromotionalPricesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token500Error1"` [403] `V3Token500Error1` · `"v3Token500Error12"` [500] `V3Token500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Promotions.UpdatePromotionalPricesRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
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
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

