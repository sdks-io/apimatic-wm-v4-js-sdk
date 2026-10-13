<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reconciliation — operations

Accessor: `client.reconciliation` · Source: `src/resources/reconciliation.ts` · 3 operations · Request and error types: namespace `Reconciliation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkDownloadReportByPeriod

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `checkDownloadReportByPeriod(request: Reconciliation.CheckDownloadReportByPeriodRequest, options?: RequestOptions): ApiPromise<ReportAvailabilityResponse, Reconciliation.CheckDownloadReportByPeriodError>`
- **Wire**: `GET /disbursements/v4/payment/checkDownloadReportByPeriod`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportAvailabilityResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reconciliation.CheckDownloadReportByPeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reconciliation.CheckDownloadReportByPeriodRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes |
| `date` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportAvailabilityResponse` | `reportAvailabilityResponseSchema` | `src/models/report-availability-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### downloadReconciliationReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `downloadReconciliationReport(request: Reconciliation.DownloadReconciliationReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, Reconciliation.DownloadReconciliationReportError>`
- **Wire**: `GET /disbursements/v4/payment/reconciliation/download`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reconciliation.DownloadReconciliationReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reconciliation.DownloadReconciliationReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes |
| `reportDate` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listReconciliationDates

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listReconciliationDates(request: Reconciliation.ListReconciliationDatesRequest, options?: RequestOptions): ApiPromise<ReportAvailabilityResponse, Reconciliation.ListReconciliationDatesError>`
- **Wire**: `GET /disbursements/v4/payment/reconciliation/dateList`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportAvailabilityResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reconciliation.ListReconciliationDatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reconciliation.ListReconciliationDatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportAvailabilityResponse` | `reportAvailabilityResponseSchema` | `src/models/report-availability-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

