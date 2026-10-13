<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.payouts` · Source: `src/resources/payouts.ts` · 5 operations · Request and error types: namespace `Payouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### configureAutoPayout

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `configureAutoPayout(request: Payouts.ConfigureAutoPayoutRequest, options?: RequestOptions): ApiPromise<PayoutStatusResponse, Payouts.ConfigureAutoPayoutError>`
- **Wire**: `PUT /disbursements/v4/payment/autoPayout`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PayoutStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Payouts.ConfigureAutoPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payouts.ConfigureAutoPayoutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisbursementsV4PaymentAutoPayoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisbursementsV4PaymentAutoPayoutRequest` | `disbursementsV4PaymentAutoPayoutRequestSchema` | `src/models/disbursements-v4-payment-auto-payout-request.ts` |
| `PayoutStatusResponse` | `payoutStatusResponseSchema` | `src/models/payout-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getAnnualStatementOpts

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAnnualStatementOpts(options?: RequestOptions): ApiPromise<AnnualStatementOptsResponse, Payouts.GetAnnualStatementOptsError>`
- **Wire**: `GET /disbursements/v4/payment/annualStatementOpts`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnnualStatementOptsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Payouts.GetAnnualStatementOptsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AnnualStatementOptsResponse` | `annualStatementOptsResponseSchema` | `src/models/annual-statement-opts-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getFasterPayoutEligibility

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFasterPayoutEligibility(options?: RequestOptions): ApiPromise<FasterPayoutEligibilityResponse, Payouts.GetFasterPayoutEligibilityError>`
- **Wire**: `GET /disbursements/v4/payment/fasterPayoutEligibility`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FasterPayoutEligibilityResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Payouts.GetFasterPayoutEligibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FasterPayoutEligibilityResponse` | `fasterPayoutEligibilityResponseSchema` | `src/models/faster-payout-eligibility-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getPaymentStatus

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentStatus(options?: RequestOptions): ApiPromise<PayoutStatusResponse, Payouts.GetPaymentStatusError>`
- **Wire**: `GET /disbursements/v4/payment/paymentstatus`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Payouts.GetPaymentStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutStatusResponse` | `payoutStatusResponseSchema` | `src/models/payout-status-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### initiateFasterPayout

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `initiateFasterPayout(options?: RequestOptions): ApiPromise<InitiatePayoutResponse, Payouts.InitiateFasterPayoutError>`
- **Wire**: `POST /disbursements/v4/payment/fasterPayout`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InitiatePayoutResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Payouts.InitiateFasterPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [409] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InitiatePayoutResponse` | `initiatePayoutResponseSchema` | `src/models/initiate-payout-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

