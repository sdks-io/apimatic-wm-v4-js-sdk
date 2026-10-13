<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.disputes` · Source: `src/resources/disputes.ts` · 1 operation · Request and error types: namespace `Disputes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkDisputeEligibility

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `checkDisputeEligibility(options?: RequestOptions): ApiPromise<DisputeEligibilityResponse, Disputes.CheckDisputeEligibilityError>`
- **Wire**: `GET /disbursements/v4/payment/disputeEligibilityCheck`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputeEligibilityResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Disputes.CheckDisputeEligibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeEligibilityResponse` | `disputeEligibilityResponseSchema` | `src/models/dispute-eligibility-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

