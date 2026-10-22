<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnRequestReportApi — operations

Accessor: `client.onRequestReportApi` · Source: `src/resources/on-request-report-api.ts` · 3 operations · Request types: namespace `OnRequestReportApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadReport

- **Signature**: `downloadReport(request: OnRequestReportApi.DownloadReportRequest, options?: RequestOptions): ApiPromise<DownloadReportResponse, ApiError>`
- **Wire**: `GET /v3/reports/downloadReport`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DownloadReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnRequestReportApi.DownloadReportRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `query` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `DownloadReportResponse` | `downloadReportResponseSchema` | `src/models/download-report-response.ts` |

### getRequestsStatus

- **Signature**: `getRequestsStatus(request: OnRequestReportApi.GetRequestsStatusRequest, options?: RequestOptions): ApiPromise<RequestsStatusResponse, ApiError>`
- **Wire**: `GET /v3/reports/reportRequests`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequestsStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnRequestReportApi.GetRequestsStatusRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportType` | `query` | — | `ReportType4` | yes |
| `reportVersion` | `query` | — | `string` | no |
| `requestStatus` | `query` | — | `RequestStatus4` | no |
| `requestSubmissionStartDate` | `query` | — | `string` | no |
| `requestSubmissionEndDate` | `query` | — | `string` | no |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportType4` | `reportType4Schema` | `src/models/report-type4.ts` |
| `RequestStatus4` | `requestStatus4Schema` | `src/models/request-status4.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `RequestsStatusResponse` | `requestsStatusResponseSchema` | `src/models/requests-status-response.ts` |

### getSingleRequestStatus

- **Signature**: `getSingleRequestStatus(request: OnRequestReportApi.GetSingleRequestStatusRequest, options?: RequestOptions): ApiPromise<RequestStatusResponse, ApiError>`
- **Wire**: `GET /v3/reports/reportRequests/{requestId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequestStatusResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OnRequestReportApi.GetSingleRequestStatusRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `RequestStatusResponse` | `requestStatusResponseSchema` | `src/models/request-status-response.ts` |

