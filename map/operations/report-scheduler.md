<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReportScheduler — operations

Accessor: `client.reportScheduler` · Source: `src/resources/report-scheduler.ts` · 4 operations · Request types: namespace `ReportScheduler`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteReportSchedule

- **Signature**: `deleteReportSchedule(request: ReportScheduler.DeleteReportScheduleRequest, options?: RequestOptions): ApiPromise<RejectRecommendationsResponsePayload, ApiError>`
- **Wire**: `DELETE /v3/reports/schedules/{scheduleId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RejectRecommendationsResponsePayload`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportScheduler.DeleteReportScheduleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | — | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RejectRecommendationsResponsePayload` | `rejectRecommendationsResponsePayloadSchema` | `src/models/reject-recommendations-response-payload.ts` |

### getAllReportSchedules

- **Signature**: `getAllReportSchedules(request: ReportScheduler.GetAllReportSchedulesRequest, options?: RequestOptions): ApiPromise<V3ReportsSchedulesResponse, ApiError>`
- **Wire**: `GET /v3/reports/schedules`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ReportsSchedulesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportScheduler.GetAllReportSchedulesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportType` | `query` | — | `ReportType10` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportType10` | `reportType10Schema` | `src/models/report-type10.ts` |
| `V3ReportsSchedulesResponse` | `v3ReportsSchedulesResponseSchema` | `src/models/v3-reports-schedules-response.ts` |

### getReportSchedule

- **Signature**: `getReportSchedule(request: ReportScheduler.GetReportScheduleRequest, options?: RequestOptions): ApiPromise<V3ReportsSchedulesResponse1, ApiError>`
- **Wire**: `GET /v3/reports/schedules/{scheduleId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ReportsSchedulesResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportScheduler.GetReportScheduleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | — | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ReportsSchedulesResponse1` | `v3ReportsSchedulesResponse1Schema` | `src/models/v3-reports-schedules-response1.ts` |

### updateReportSchedule

- **Signature**: `updateReportSchedule(request: ReportScheduler.UpdateReportScheduleRequest, options?: RequestOptions): ApiPromise<V3ReportsSchedulesResponse1, ApiError>`
- **Wire**: `PUT /v3/reports/schedules/{scheduleId}`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ReportsSchedulesResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ReportScheduler.UpdateReportScheduleRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `scheduleId` | `path` | — | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `body` | `body` | — | `V3ReportsSchedulesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ReportsSchedulesRequest` | `v3ReportsSchedulesRequestSchema` | `src/models/v3-reports-schedules-request.ts` |
| `V3ReportsSchedulesResponse1` | `v3ReportsSchedulesResponse1Schema` | `src/models/v3-reports-schedules-response1.ts` |

