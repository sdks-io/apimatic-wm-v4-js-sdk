<!-- Generated file — do not edit; regenerated with the SDK. -->

# FinalPayout — operations

Accessor: `client.finalPayout` · Source: `src/resources/final-payout.ts` · 2 operations · Request and error types: namespace `FinalPayout`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFinalPayoutCaseStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFinalPayoutCaseStatus(options?: RequestOptions): ApiPromise<FinalPayoutCaseStatusResponse, FinalPayout.GetFinalPayoutCaseStatusError>`
- **Wire**: `GET /disbursements/v4/finalPayout/case/status`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FinalPayoutCaseStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FinalPayout.GetFinalPayoutCaseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FinalPayoutCaseStatusResponse` | `finalPayoutCaseStatusResponseSchema` | `src/models/final-payout-case-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### updateFinalPayoutCaseStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFinalPayoutCaseStatus(request: FinalPayout.UpdateFinalPayoutCaseStatusRequest, options?: RequestOptions): ApiPromise<FinalPayoutCaseStatusResponse, FinalPayout.UpdateFinalPayoutCaseStatusError>`
- **Wire**: `PUT /disbursements/v4/finalPayout/case/updateStatus`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FinalPayoutCaseStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `FinalPayout.UpdateFinalPayoutCaseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [404] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FinalPayout.UpdateFinalPayoutCaseStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisbursementsV4FinalPayoutCaseUpdateStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisbursementsV4FinalPayoutCaseUpdateStatusRequest` | `disbursementsV4FinalPayoutCaseUpdateStatusRequestSchema` | `src/models/disbursements-v4-final-payout-case-update-status-request.ts` |
| `FinalPayoutCaseStatusResponse` | `finalPayoutCaseStatusResponseSchema` | `src/models/final-payout-case-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

