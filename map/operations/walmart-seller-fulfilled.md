<!-- Generated file — do not edit; regenerated with the SDK. -->

# WalmartSellerFulfilled — operations

Accessor: `client.walmartSellerFulfilled` · Source: `src/resources/walmart-seller-fulfilled.ts` · 1 operation · Request and error types: namespace `WalmartSellerFulfilled`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### walmartPlusEnrollment

- **Signature**: `walmartPlusEnrollment(request: WalmartSellerFulfilled.WalmartPlusEnrollmentRequest, options?: RequestOptions): ApiPromise<V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse, WalmartSellerFulfilled.WalmartPlusEnrollmentError>`
- **Wire**: `POST /v3/feeds?feedType=PROGRAM_ACTIONS&requestType=WALMART_PLUS_SFF`
- **Auth**: none — public; no credential is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `fileName` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WalmartSellerFulfilled.WalmartPlusEnrollmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1"` [400] `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1` · `"v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1"` [500] `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WalmartSellerFulfilled.WalmartPlusEnrollmentRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `FeedType3` | yes |
| `requestType` | `query` | — | `RequestType` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `fileName` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType3` | `feedType3Schema` | `src/models/feed-type3.ts` |
| `RequestType` | `requestTypeSchema` | `src/models/request-type.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse` | `v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponseSchema` | `src/models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff-response.ts` |
| `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1` | `v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff400Error1Schema` | `src/models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff400-error1.ts` |
| `V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1` | `v3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSff500Error1Schema` | `src/models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff500-error1.ts` |

