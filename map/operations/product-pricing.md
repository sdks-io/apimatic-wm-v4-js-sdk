<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductPricing — operations

Accessor: `client.productPricing` · Source: `src/resources/product-pricing.ts` · 8 operations · Request and error types: namespace `ProductPricing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompetitivePricing

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompetitivePricing(request: ProductPricing.GetCompetitivePricingRequest, options?: RequestOptions): ApiPromise<GetPricingResponse, ProductPricing.GetCompetitivePricingError>`
- **Wire**: `GET /products/pricing/v4/competitivePrice`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPricingResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetCompetitivePricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetCompetitivePricingRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `marketplaceId` | `query` | `MarketplaceId` | `string` | yes | — |
| `itemType` | `query` | `ItemType` | `ItemType` | no | `ItemType.Sku` |
| `skus` | `query` | `Skus` | `string[]` | no | — |
| `walmartItemIds` | `query` | — | `string[]` | no | — |
| `customerType` | `query` | `CustomerType` | `CustomerType` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType` | `itemTypeSchema` | `src/models/item-type.ts` |
| `CustomerType` | `customerTypeSchema` | `src/models/customer-type.ts` |
| `GetPricingResponse` | `getPricingResponseSchema` | `src/models/get-pricing-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getCompetitiveSummary

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompetitiveSummary(request: ProductPricing.GetCompetitiveSummaryRequest, options?: RequestOptions): ApiPromise<CompetitiveSummaryBatchResponse, ProductPricing.GetCompetitiveSummaryError>`
- **Wire**: `POST /batches/products/pricing/v4/items/competitiveSummary`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompetitiveSummaryBatchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetCompetitiveSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetCompetitiveSummaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompetitiveSummaryBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompetitiveSummaryBatchRequest` | `competitiveSummaryBatchRequestSchema` | `src/models/competitive-summary-batch-request.ts` |
| `CompetitiveSummaryBatchResponse` | `competitiveSummaryBatchResponseSchema` | `src/models/competitive-summary-batch-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getFeaturedOfferExpectedPriceBatch

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFeaturedOfferExpectedPriceBatch(request: ProductPricing.GetFeaturedOfferExpectedPriceBatchRequestParams, options?: RequestOptions): ApiPromise<GetFeaturedOfferExpectedPriceBatchResponse, ProductPricing.GetFeaturedOfferExpectedPriceBatchError>`
- **Wire**: `POST /batches/products/pricing/v4/offer/featuredOfferExpectedPrice`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetFeaturedOfferExpectedPriceBatchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetFeaturedOfferExpectedPriceBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetFeaturedOfferExpectedPriceBatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetFeaturedOfferExpectedPriceBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetFeaturedOfferExpectedPriceBatchRequest` | `getFeaturedOfferExpectedPriceBatchRequestSchema` | `src/models/get-featured-offer-expected-price-batch-request.ts` |
| `GetFeaturedOfferExpectedPriceBatchResponse` | `getFeaturedOfferExpectedPriceBatchResponseSchema` | `src/models/get-featured-offer-expected-price-batch-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getItemOffers

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getItemOffers(request: ProductPricing.GetItemOffersRequest, options?: RequestOptions): ApiPromise<GetOffersResponse, ProductPricing.GetItemOffersError>`
- **Wire**: `GET /products/pricing/v4/items/{itemId}/offers`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOffersResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetItemOffersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetItemOffersRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `itemId` | `path` | — | `string` | yes |
| `marketplaceId` | `query` | `MarketplaceId` | `string` | yes |
| `itemCondition` | `query` | `ItemCondition` | `ConditionType2` | yes |
| `customerType` | `query` | `CustomerType` | `CustomerType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConditionType2` | `conditionType2Schema` | `src/models/condition-type2.ts` |
| `CustomerType` | `customerTypeSchema` | `src/models/customer-type.ts` |
| `GetOffersResponse` | `getOffersResponseSchema` | `src/models/get-offers-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getItemOffersBatch

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getItemOffersBatch(request: ProductPricing.GetItemOffersBatchRequestParams, options?: RequestOptions): ApiPromise<GetItemOffersBatchResponse, ProductPricing.GetItemOffersBatchError>`
- **Wire**: `POST /batches/products/pricing/v4/itemOffers`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetItemOffersBatchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetItemOffersBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetItemOffersBatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetItemOffersBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetItemOffersBatchRequest` | `getItemOffersBatchRequestSchema` | `src/models/get-item-offers-batch-request.ts` |
| `GetItemOffersBatchResponse` | `getItemOffersBatchResponseSchema` | `src/models/get-item-offers-batch-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getListingOffers

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getListingOffers(request: ProductPricing.GetListingOffersRequest, options?: RequestOptions): ApiPromise<GetOffersResponse, ProductPricing.GetListingOffersError>`
- **Wire**: `GET /products/pricing/v4/listings/{SellerSKU}/offers`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOffersResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetListingOffersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetListingOffersRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sellerSku` | `path` | `SellerSKU` | `string` | yes |
| `marketplaceId` | `query` | `MarketplaceId` | `string` | yes |
| `itemCondition` | `query` | `ItemCondition` | `ConditionType2` | yes |
| `customerType` | `query` | `CustomerType` | `CustomerType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConditionType2` | `conditionType2Schema` | `src/models/condition-type2.ts` |
| `CustomerType` | `customerTypeSchema` | `src/models/customer-type.ts` |
| `GetOffersResponse` | `getOffersResponseSchema` | `src/models/get-offers-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getListingOffersBatch

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getListingOffersBatch(request: ProductPricing.GetListingOffersBatchRequestParams, options?: RequestOptions): ApiPromise<GetListingOffersBatchResponse, ProductPricing.GetListingOffersBatchError>`
- **Wire**: `POST /batches/products/pricing/v4/listingOffers`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetListingOffersBatchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetListingOffersBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetListingOffersBatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetListingOffersBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetListingOffersBatchRequest` | `getListingOffersBatchRequestSchema` | `src/models/get-listing-offers-batch-request.ts` |
| `GetListingOffersBatchResponse` | `getListingOffersBatchResponseSchema` | `src/models/get-listing-offers-batch-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

### getPricing

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPricing(request: ProductPricing.GetPricingRequest, options?: RequestOptions): ApiPromise<GetPricingResponse, ProductPricing.GetPricingError>`
- **Wire**: `GET /products/pricing/v4/price`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPricingResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductPricing.GetPricingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error3[]` · `"error403"` [403] `Error3[]` · `"error404"` [404] `Error3[]` · `"error429"` [429] `Error3[]` · `"error500"` [500] `Error3[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductPricing.GetPricingRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `marketplaceId` | `query` | `MarketplaceId` | `string` | yes | — |
| `itemType` | `query` | `ItemType` | `ItemType` | no | `ItemType.Sku` |
| `skus` | `query` | `Skus` | `string[]` | no | — |
| `walmartItemIds` | `query` | — | `string[]` | no | — |
| `itemCondition` | `query` | `ItemCondition` | `ConditionType2` | no | — |
| `offerType` | `query` | `OfferType` | `OfferType` | no | — |
| `customerType` | `query` | `CustomerType` | `CustomerType` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType` | `itemTypeSchema` | `src/models/item-type.ts` |
| `ConditionType2` | `conditionType2Schema` | `src/models/condition-type2.ts` |
| `OfferType` | `offerTypeSchema` | `src/models/offer-type.ts` |
| `CustomerType` | `customerTypeSchema` | `src/models/customer-type.ts` |
| `GetPricingResponse` | `getPricingResponseSchema` | `src/models/get-pricing-response.ts` |
| `Error3` | `error3Schema` | `src/models/error3.ts` |

