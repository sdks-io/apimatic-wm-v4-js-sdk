<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.disputes` · Source: `src/resources/disputes.ts` · 2 operations · Request and error types: namespace `Disputes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postContest

- **Signature**: `postContest(request: Disputes.PostContestRequest, options?: RequestOptions): ApiPromise<DisputeContestResponses, Disputes.PostContestError>`
- **Wire**: `POST /v3/items/dispute/duplicates/contest`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputeContestResponses`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Disputes.PostContestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ItemsDisputeDuplicatesContest403Error1"` [403] `V3ItemsDisputeDuplicatesContest403Error1` · `"v3ItemsDisputeDuplicatesContest404Error1"` [404] `V3ItemsDisputeDuplicatesContest404Error1` · `"v3ItemsDisputeDuplicatesContest500Error1"` [500] `V3ItemsDisputeDuplicatesContest500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.PostContestRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ItemsDisputeDuplicatesContestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ItemsDisputeDuplicatesContestRequest` | `v3ItemsDisputeDuplicatesContestRequestSchema` | `src/models/v3-items-dispute-duplicates-contest-request.ts` |
| `DisputeContestResponses` | `disputeContestResponsesSchema` | `src/models/dispute-contest-responses.ts` |
| `V3ItemsDisputeDuplicatesContest403Error1` | `v3ItemsDisputeDuplicatesContest403Error1Schema` | `src/models/v3-items-dispute-duplicates-contest403-error1.ts` |
| `V3ItemsDisputeDuplicatesContest404Error1` | `v3ItemsDisputeDuplicatesContest404Error1Schema` | `src/models/v3-items-dispute-duplicates-contest404-error1.ts` |
| `V3ItemsDisputeDuplicatesContest500Error1` | `v3ItemsDisputeDuplicatesContest500Error1Schema` | `src/models/v3-items-dispute-duplicates-contest500-error1.ts` |

### postStatus

- **Signature**: `postStatus(request: Disputes.PostStatusRequest, options?: RequestOptions): ApiPromise<V3ItemsDisputeDuplicatesStatusResponse, Disputes.PostStatusError>`
- **Wire**: `POST /v3/items/dispute/duplicates/status`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ItemsDisputeDuplicatesStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Disputes.PostStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ItemsDisputeDuplicatesStatus403Error1"` [403] `V3ItemsDisputeDuplicatesStatus403Error1` · `"v3ItemsDisputeDuplicatesStatus404Error1"` [404] `V3ItemsDisputeDuplicatesStatus404Error1` · `"v3ItemsDisputeDuplicatesStatus500Error1"` [500] `V3ItemsDisputeDuplicatesStatus500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Disputes.PostStatusRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ItemsDisputeDuplicatesStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ItemsDisputeDuplicatesStatusRequest` | `v3ItemsDisputeDuplicatesStatusRequestSchema` | `src/models/v3-items-dispute-duplicates-status-request.ts` |
| `V3ItemsDisputeDuplicatesStatusResponse` | `v3ItemsDisputeDuplicatesStatusResponseSchema` | `src/models/v3-items-dispute-duplicates-status-response.ts` |
| `V3ItemsDisputeDuplicatesStatus403Error1` | `v3ItemsDisputeDuplicatesStatus403Error1Schema` | `src/models/v3-items-dispute-duplicates-status403-error1.ts` |
| `V3ItemsDisputeDuplicatesStatus404Error1` | `v3ItemsDisputeDuplicatesStatus404Error1Schema` | `src/models/v3-items-dispute-duplicates-status404-error1.ts` |
| `V3ItemsDisputeDuplicatesStatus500Error1` | `v3ItemsDisputeDuplicatesStatus500Error1Schema` | `src/models/v3-items-dispute-duplicates-status500-error1.ts` |

