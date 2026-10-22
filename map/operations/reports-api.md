<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReportsApi — operations

Accessor: `client.reportsApi` · Source: `src/resources/reports-api.ts` · 7 operations · Request and error types: namespace `ReportsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAvailableReconReportDates

- **Signature**: `getAvailableReconReportDates(request: ReportsApi.GetAvailableReconReportDatesRequest, options?: RequestOptions): ApiPromise<ReconReportDateResponse, ApiError>`
- **Wire**: `GET /v3/report/reconreport/availableReconFiles`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReconReportDateResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportsApi.GetAvailableReconReportDatesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReconReportDateResponse` | `reconReportDateResponseSchema` | `src/models/recon-report-date-response.ts` |

### getAvailableV1ReconReportAsJson

- **Signature**: `getAvailableV1ReconReportAsJson(request: ReportsApi.GetAvailableV1ReconReportAsJsonRequest, options?: RequestOptions): ApiPromise<ReconReportV1AsJsonResponse, ApiError>`
- **Wire**: `GET /v3/report/reconreport/reconFileJson`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReconReportV1AsJsonResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportsApi.GetAvailableV1ReconReportAsJsonRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportDate` | `query` | — | `string` | yes |
| `offset` | `query` | — | `number` | yes |
| `noOfRecords` | `query` | — | `number` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReconReportV1AsJsonResponse` | `reconReportV1AsJsonResponseSchema` | `src/models/recon-report-v1-as-json-response.ts` |

### getAvailableV1ReconReportDates

- **Signature**: `getAvailableV1ReconReportDates(request: ReportsApi.GetAvailableV1ReconReportDatesRequest, options?: RequestOptions): ApiPromise<ReconReportDateResponse, ApiError>`
- **Wire**: `GET /v3/report/reconreport/availableReconFiles?reportVersion=v1`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReconReportDateResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportsApi.GetAvailableV1ReconReportDatesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReconReportDateResponse` | `reconReportDateResponseSchema` | `src/models/recon-report-date-response.ts` |

### getPartnerPerformance

- **Signature**: `getPartnerPerformance(request: ReportsApi.GetPartnerPerformanceRequest, options?: RequestOptions): ApiPromise<PartnerProgramPerformanceRes, ApiError>`
- **Wire**: `GET /v3/report/payment/performance`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PartnerProgramPerformanceRes`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportsApi.GetPartnerPerformanceRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerProgramPerformanceRes` | `partnerProgramPerformanceResSchema` | `src/models/partner-program-performance-res.ts` |

### getPartnerStatement

- **Signature**: `getPartnerStatement(request: ReportsApi.GetPartnerStatementRequest, options?: RequestOptions): ApiPromise<PartnerProgramStatementRes, ApiError>`
- **Wire**: `GET /v3/report/payment/statement`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PartnerProgramStatementRes`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportsApi.GetPartnerStatementRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerProgramStatementRes` | `partnerProgramStatementResSchema` | `src/models/partner-program-statement-res.ts` |

### getReconReport

- **Signature**: `getReconReport(request: ReportsApi.GetReconReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, ReportsApi.GetReconReportError>`
- **Wire**: `GET /v3/report/reconreport/reconFile`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportsApi.GetReconReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsApi.GetReconReportRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportDate` | `query` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

### getReconReportV1

- **Signature**: `getReconReportV1(request: ReportsApi.GetReconReportV1Request, options?: RequestOptions): ApiPromise<BinaryContent, ReportsApi.GetReconReportV1Error>`
- **Wire**: `GET /v3/report/reconreport/reconFile?reportVersion=v1`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportsApi.GetReconReportV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportsApi.GetReconReportV1Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportDate` | `query` | — | `string` | yes |
| `reportVersion` | `query` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

