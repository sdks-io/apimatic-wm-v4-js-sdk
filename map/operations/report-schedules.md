<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReportSchedules — operations

Accessor: `client.reportSchedules` · Source: `src/resources/report-schedules.ts` · 4 operations · Request and error types: namespace `ReportSchedules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelReportSchedule

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelReportSchedule(request: ReportSchedules.CancelReportScheduleRequest, options?: RequestOptions): ApiPromise<CancelReportScheduleResponse, ReportSchedules.CancelReportScheduleError>`
- **Wire**: `DELETE /reports/v4/schedules/{reportScheduleId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelReportScheduleResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportSchedules.CancelReportScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportSchedules.CancelReportScheduleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportScheduleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelReportScheduleResponse` | `cancelReportScheduleResponseSchema` | `src/models/cancel-report-schedule-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createReportSchedule

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createReportSchedule(request: ReportSchedules.CreateReportScheduleRequest, options?: RequestOptions): ApiPromise<CreateReportScheduleResponse, ReportSchedules.CreateReportScheduleError>`
- **Wire**: `POST /reports/v4/schedules`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateReportScheduleResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportSchedules.CreateReportScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportSchedules.CreateReportScheduleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateReportScheduleSpecification` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateReportScheduleSpecification` | `createReportScheduleSpecificationSchema` | `src/models/create-report-schedule-specification.ts` |
| `CreateReportScheduleResponse` | `createReportScheduleResponseSchema` | `src/models/create-report-schedule-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getReportSchedule

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReportSchedule(request: ReportSchedules.GetReportScheduleRequest, options?: RequestOptions): ApiPromise<ReportSchedule, ReportSchedules.GetReportScheduleError>`
- **Wire**: `GET /reports/v4/schedules/{reportScheduleId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportSchedule`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportSchedules.GetReportScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportSchedules.GetReportScheduleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportScheduleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportSchedule` | `reportScheduleSchema` | `src/models/report-schedule.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getReportSchedules

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getReportSchedules(request: ReportSchedules.GetReportSchedulesRequest, options?: RequestOptions): ApiPromise<GetReportSchedulesResponse, ReportSchedules.GetReportSchedulesError>`
- **Wire**: `GET /reports/v4/schedules`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetReportSchedulesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReportSchedules.GetReportSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReportSchedules.GetReportSchedulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportTypes` | `query` | `ReportType1[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportType1` | `reportType1Schema` | `src/models/report-type1.ts` |
| `GetReportSchedulesResponse` | `getReportSchedulesResponseSchema` | `src/models/get-report-schedules-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

