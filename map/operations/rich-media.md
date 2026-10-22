<!-- Generated file — do not edit; regenerated with the SDK. -->

# RichMedia — operations

Accessor: `client.richMedia` · Source: `src/resources/rich-media.ts` · 2 operations · Request and error types: namespace `RichMedia`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllAssets

- **Signature**: `getAllAssets(request: RichMedia.GetAllAssetsRequest, options?: RequestOptions): ApiPromise<AssetsResponse, RichMedia.GetAllAssetsError>`
- **Wire**: `GET /v3/items/assets`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AssetsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RichMedia.GetAllAssetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RichMedia.GetAllAssetsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `limit` | `query` | — | `number` | no | `25` |
| `linkedGtins` | `query` | — | `string[]` | no | — |
| `richMediaTitle` | `query` | — | `string` | no | — |
| `richMediaType` | `query` | — | `RichMediaType` | no | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RichMediaType` | `richMediaTypeSchema` | `src/models/rich-media-type.ts` |
| `AssetsResponse` | `assetsResponseSchema` | `src/models/assets-response.ts` |

### richMediaOperation

- **Signature**: `richMediaOperation(request: RichMedia.RichMediaOperationRequest, options?: RequestOptions): ApiPromise<FeedId1, RichMedia.RichMediaOperationError>`
- **Wire**: `POST /v3/feeds?feedType=OMNI_RICH_MEDIA`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `RichMedia.RichMediaOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RichMedia.RichMediaOperationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `RichMediaFeedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RichMediaFeedRequest` | `richMediaFeedRequestSchema` | `src/models/rich-media-feed-request.ts` |
| `FeedId1` | `feedId1Schema` | `src/models/feed-id1.ts` |

