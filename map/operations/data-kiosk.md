<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataKiosk — operations

Accessor: `client.dataKiosk` · Source: `src/resources/data-kiosk.ts` · 5 operations · Request and error types: namespace `DataKiosk`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelQuery

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelQuery(request: DataKiosk.CancelQueryRequest, options?: RequestOptions): ApiPromise<CancelQueryResponse, DataKiosk.CancelQueryError>`
- **Wire**: `DELETE /data-kiosk/v4/queries/{queryId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelQueryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `DataKiosk.CancelQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataKiosk.CancelQueryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `queryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelQueryResponse` | `cancelQueryResponseSchema` | `src/models/cancel-query-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createQuery

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createQuery(request: DataKiosk.CreateQueryRequest, options?: RequestOptions): ApiPromise<CreateQueryResponse, DataKiosk.CreateQueryError>`
- **Wire**: `POST /data-kiosk/v4/queries`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateQueryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `DataKiosk.CreateQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataKiosk.CreateQueryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateQuerySpecification` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateQuerySpecification` | `createQuerySpecificationSchema` | `src/models/create-query-specification.ts` |
| `CreateQueryResponse` | `createQueryResponseSchema` | `src/models/create-query-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getDocument

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocument(request: DataKiosk.GetDocumentRequest, options?: RequestOptions): ApiPromise<Document, DataKiosk.GetDocumentError>`
- **Wire**: `GET /data-kiosk/v4/documents/{documentId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Document`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `DataKiosk.GetDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataKiosk.GetDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getQueries

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getQueries(request: DataKiosk.GetQueriesRequest, options?: RequestOptions): ApiPromise<GetQueriesResponse, DataKiosk.GetQueriesError>`
- **Wire**: `GET /data-kiosk/v4/queries`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetQueriesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `DataKiosk.GetQueriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataKiosk.GetQueriesRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `processingStatuses` | `query` | `ProcessingStatus[]` | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `createdSince` | `query` | `Date` (date-time) | no | — |
| `createdUntil` | `query` | `Date` (date-time) | no | — |
| `paginationToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessingStatus` | `processingStatusSchema` | `src/models/processing-status.ts` |
| `GetQueriesResponse` | `getQueriesResponseSchema` | `src/models/get-queries-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getQuery

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getQuery(request: DataKiosk.GetQueryRequest, options?: RequestOptions): ApiPromise<Query, DataKiosk.GetQueryError>`
- **Wire**: `GET /data-kiosk/v4/queries/{queryId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Query`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `DataKiosk.GetQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataKiosk.GetQueryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `queryId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Query` | `querySchema` | `src/models/query.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

