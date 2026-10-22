<!-- Generated file — do not edit; regenerated with the SDK. -->

# SemItemDiagnostics — operations

Accessor: `client.semItemDiagnostics` · Source: `src/resources/sem-item-diagnostics.ts` · 2 operations · Request and error types: namespace `SemItemDiagnostics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getIssueTypes

- **Signature**: `getIssueTypes(request: SemItemDiagnostics.GetIssueTypesRequest, options?: RequestOptions): ApiPromise<Record<string, IssueMetadata>, SemItemDiagnostics.GetIssueTypesError>`
- **Wire**: `GET /v3/advertising/sem/item-issues/issue-types`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, IssueMetadata>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemItemDiagnostics.GetIssueTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse429"` [429] `ErrorResponse429` · `"errorResponse3"` [500] `ErrorResponse` · `"errorResponse4"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemItemDiagnostics.GetIssueTypesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `IssueMetadata` | `issueMetadataSchema` | `src/models/issue-metadata.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ErrorResponse429` | `errorResponse429Schema` | `src/models/error-response429.ts` |

### searchItemIssues

- **Signature**: `searchItemIssues(request: SemItemDiagnostics.SearchItemIssuesRequest, options?: RequestOptions): ApiPromise<ItemDiagnosticSearchResponse, SemItemDiagnostics.SearchItemIssuesError>`
- **Wire**: `POST /v3/advertising/sem/item-issues/search`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemDiagnosticSearchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemItemDiagnostics.SearchItemIssuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [422] `ErrorResponse` · `"errorResponse429"` [429] `ErrorResponse429` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemItemDiagnostics.SearchItemIssuesRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationJson` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `ItemDiagnosticSearchRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `ItemDiagnosticSearchRequest` | `itemDiagnosticSearchRequestSchema` | `src/models/item-diagnostic-search-request.ts` |
| `ItemDiagnosticSearchResponse` | `itemDiagnosticSearchResponseSchema` | `src/models/item-diagnostic-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ErrorResponse429` | `errorResponse429Schema` | `src/models/error-response429.ts` |

