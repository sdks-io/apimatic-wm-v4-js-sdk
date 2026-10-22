<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeedsApi — operations

Accessor: `client.feedsApi` · Source: `src/resources/feeds-api.ts` · 3 operations · Request and error types: namespace `FeedsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllFeedStatuses

- **Signature**: `getAllFeedStatuses(request: FeedsApi.GetAllFeedStatusesRequest, options?: RequestOptions): ApiPromise<FeedRecordResponse, FeedsApi.GetAllFeedStatusesError>`
- **Wire**: `GET /v3/feeds`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeedRecordResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FeedsApi.GetAllFeedStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"feedRecordResponse"` [404] `FeedRecordResponse` · `"feedRecordResponse2"` [500] `FeedRecordResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeedsApi.GetAllFeedStatusesRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `feedId` | `query` | — | `string` | no | — |
| `feedType` | `query` | — | `string` | no | — |
| `feedStatus` | `query` | — | `FeedStatus1` | no | — |
| `offset` | `query` | — | `string` | no | `"0"` |
| `limit` | `query` | — | `string` | no | `"50"` |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedStatus1` | `feedStatus1Schema` | `src/models/feed-status1.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `FeedRecordResponse` | `feedRecordResponseSchema` | `src/models/feed-record-response.ts` |

### getFeedErrorReport

- **Signature**: `getFeedErrorReport(request: FeedsApi.GetFeedErrorReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3/feeds/{feedId}/errorReport`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FeedsApi.GetFeedErrorReportRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedId` | `path` | — | `string` | yes |
| `feedType` | `query` | — | `FeedType` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType` | `feedTypeSchema` | `src/models/feed-type.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |

### getFeedItemStatus

- **Signature**: `getFeedItemStatus(request: FeedsApi.GetFeedItemStatusRequest, options?: RequestOptions): ApiPromise<V3FeedsResponse1, FeedsApi.GetFeedItemStatusError>`
- **Wire**: `GET /v3/feeds/{feedId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3FeedsResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FeedsApi.GetFeedItemStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Feeds404Error21"` [404] `V3Feeds404Error21` · `"v3Feeds500Error21"` [500] `V3Feeds500Error21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeedsApi.GetFeedItemStatusRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `feedId` | `path` | — | `string` | yes | — |
| `includeDetails` | `query` | — | `string` | no | `"false"` |
| `offset` | `query` | — | `string` | no | `"0"` |
| `limit` | `query` | — | `string` | no | `"50"` |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsResponse1` | `v3FeedsResponse1Schema` | `src/models/v3-feeds-response1.ts` |
| `V3Feeds404Error21` | `v3Feeds404Error21Schema` | `src/models/v3-feeds404-error21.ts` |
| `V3Feeds500Error21` | `v3Feeds500Error21Schema` | `src/models/v3-feeds500-error21.ts` |

