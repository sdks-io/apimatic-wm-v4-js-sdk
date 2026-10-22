<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnRequestReport — operations

Accessor: `client.onRequestReport` · Source: `src/resources/on-request-report.ts` · 1 operation · Request and error types: namespace `OnRequestReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### generateReport

- **Signature**: `generateReport(request: OnRequestReport.GenerateReportRequest, options?: RequestOptions): ApiPromise<V3ReportsReportRequestsResponse1, OnRequestReport.GenerateReportError>`
- **Wire**: `POST /v3/reports/reportRequests`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ReportsReportRequestsResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `OnRequestReport.GenerateReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OnRequestReport.GenerateReportRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportType` | `query` | — | `ReportType4` | yes |
| `reportVersion` | `query` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ReportsReportRequestsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportType4` | `reportType4Schema` | `src/models/report-type4.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ReportsReportRequestsRequest` | `v3ReportsReportRequestsRequestSchema` | `src/models/v3-reports-report-requests-request.ts` |
| `V3ReportsReportRequestsResponse1` | `v3ReportsReportRequestsResponse1Schema` | `src/models/v3-reports-report-requests-response1.ts` |

