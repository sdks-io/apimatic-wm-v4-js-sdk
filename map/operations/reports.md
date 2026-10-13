<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 7 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelReport(request: Reports.CancelReportRequest, options?: RequestOptions): ApiPromise<CancelReportResponse, Reports.CancelReportError>`
- **Wire**: `DELETE /reports/v4/reports/{reportId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.CancelReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.CancelReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelReportResponse` | `cancelReportResponseSchema` | `src/models/cancel-report-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createReport(request: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise<CreateReportResponse, Reports.CreateReportError>`
- **Wire**: `POST /reports/v4/reports`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.CreateReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.CreateReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateReportSpecification` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateReportSpecification` | `createReportSpecificationSchema` | `src/models/create-report-specification.ts` |
| `CreateReportResponse` | `createReportResponseSchema` | `src/models/create-report-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### downloadNewReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `downloadNewReport(request: Reports.DownloadNewReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, Reports.DownloadNewReportError>`
- **Wire**: `GET /disbursements/v4/payment/summary/newReportDownload`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.DownloadNewReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [404] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.DownloadNewReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes |
| `reportDate` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### downloadOldReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `downloadOldReport(request: Reports.DownloadOldReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, Reports.DownloadOldReportError>`
- **Wire**: `GET /disbursements/v4/payment/summary/oldReportDownload`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.DownloadOldReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [404] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.DownloadOldReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes |
| `reportDate` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getReport

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise<Report, Reports.GetReportError>`
- **Wire**: `GET /reports/v4/reports/{reportId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Report`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.GetReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Report` | `reportSchema` | `src/models/report.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getReportDocument

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReportDocument(request: Reports.GetReportDocumentRequest, options?: RequestOptions): ApiPromise<ReportDocument, Reports.GetReportDocumentError>`
- **Wire**: `GET /reports/v4/documents/{reportDocumentId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportDocument`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.GetReportDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportDocumentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportDocument` | `reportDocumentSchema` | `src/models/report-document.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getReports

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReports(request: Reports.GetReportsRequest, options?: RequestOptions): ApiPromise<GetReportsResponse, Reports.GetReportsError>`
- **Wire**: `GET /reports/v4/reports`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetReportsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Reports.GetReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetReportsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `reportTypes` | `query` | `ReportType1[]` | no | — |
| `processingStatuses` | `query` | `ProcessingStatus[]` | no | — |
| `createdSince` | `query` | `Date` (date-time) | no | — |
| `createdUntil` | `query` | `Date` (date-time) | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportType1` | `reportType1Schema` | `src/models/report-type1.ts` |
| `ProcessingStatus` | `processingStatusSchema` | `src/models/processing-status.ts` |
| `GetReportsResponse` | `getReportsResponseSchema` | `src/models/get-reports-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

