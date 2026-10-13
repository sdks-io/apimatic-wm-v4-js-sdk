<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feeds — operations

Accessor: `client.feeds` · Source: `src/resources/feeds.ts` · 5 operations · Request and error types: namespace `Feeds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelFeed

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelFeed(request: Feeds.CancelFeedRequest, options?: RequestOptions): ApiPromise<CancelFeedResponse, Feeds.CancelFeedError>`
- **Wire**: `DELETE /feeds/v4/feeds/{feedId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelFeedResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Feeds.CancelFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList1"` [400] `ErrorList1` · `"errorList12"` [403] `ErrorList1` · `"errorList13"` [404] `ErrorList1` · `"errorList14"` [429] `ErrorList1` · `"errorList15"` [500] `ErrorList1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.CancelFeedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelFeedResponse` | `cancelFeedResponseSchema` | `src/models/cancel-feed-response.ts` |
| `ErrorList1` | `errorList1Schema` | `src/models/error-list1.ts` |

### createFeed

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createFeed(request: Feeds.CreateFeedRequest, options?: RequestOptions): ApiPromise<CreateFeedResponse, Feeds.CreateFeedError>`
- **Wire**: `POST /feeds/v4/feeds`
- **Auth**: `walletAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateFeedResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Feeds.CreateFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList1"` [400] `ErrorList1` · `"errorList12"` [403] `ErrorList1` · `"errorList13"` [429] `ErrorList1` · `"errorList14"` [500] `ErrorList1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.CreateFeedRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feedType` | `query` | `FeedType` | yes |
| `marketplaceId` | `query` | `string` | no |
| `file` | `form` | `FileInput` | yes |
| `contentType` | `form` | `ContentType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType` | `feedTypeSchema` | `src/models/feed-type.ts` |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `CreateFeedResponse` | `createFeedResponseSchema` | `src/models/create-feed-response.ts` |
| `ErrorList1` | `errorList1Schema` | `src/models/error-list1.ts` |

### getFeed

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFeed(request: Feeds.GetFeedRequest, options?: RequestOptions): ApiPromise<Feed, Feeds.GetFeedError>`
- **Wire**: `GET /feeds/v4/feeds/{feedId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Feed`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Feeds.GetFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList1"` [400] `ErrorList1` · `"errorList12"` [403] `ErrorList1` · `"errorList13"` [404] `ErrorList1` · `"errorList14"` [429] `ErrorList1` · `"errorList15"` [500] `ErrorList1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Feed` | `feedSchema` | `src/models/feed.ts` |
| `ErrorList1` | `errorList1Schema` | `src/models/error-list1.ts` |

### getFeedDocument

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFeedDocument(request: Feeds.GetFeedDocumentRequest, options?: RequestOptions): ApiPromise<BinaryContent, Feeds.GetFeedDocumentError>`
- **Wire**: `GET /feeds/v4/feeds/{feedId}/document`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Feeds.GetFeedDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList1"` [400] `ErrorList1` · `"errorList12"` [403] `ErrorList1` · `"errorList13"` [404] `ErrorList1` · `"errorList14"` [429] `ErrorList1` · `"errorList15"` [500] `ErrorList1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feedId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList1` | `errorList1Schema` | `src/models/error-list1.ts` |

### getFeeds

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFeeds(request: Feeds.GetFeedsRequest, options?: RequestOptions): ApiPromise<GetFeedsResponse, Feeds.GetFeedsError>`
- **Wire**: `GET /feeds/v4/feeds`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetFeedsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Feeds.GetFeedsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList1"` [400] `ErrorList1` · `"errorList12"` [403] `ErrorList1` · `"errorList13"` [429] `ErrorList1` · `"errorList14"` [500] `ErrorList1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `feedTypes` | `query` | `FeedType[]` | no | — |
| `feedStatuses` | `query` | `FeedStatus[]` | no | — |
| `createdSince` | `query` | `Date` (date-time) | no | — |
| `createdUntil` | `query` | `Date` (date-time) | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedType` | `feedTypeSchema` | `src/models/feed-type.ts` |
| `FeedStatus` | `feedStatusSchema` | `src/models/feed-status.ts` |
| `GetFeedsResponse` | `getFeedsResponseSchema` | `src/models/get-feeds-response.ts` |
| `ErrorList1` | `errorList1Schema` | `src/models/error-list1.ts` |

