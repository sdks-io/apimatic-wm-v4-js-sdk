<!-- Generated file — do not edit; regenerated with the SDK. -->

# SemReporting — operations

Accessor: `client.semReporting` · Source: `src/resources/sem-reporting.ts` · 3 operations · Request and error types: namespace `SemReporting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBillingHistory

- **Signature**: `getBillingHistory(request: SemReporting.GetBillingHistoryRequest, options?: RequestOptions): ApiPromise<SemBillingHistoryResponse, SemReporting.GetBillingHistoryError>`
- **Wire**: `POST /v3/advertising/sem/billing-history`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemBillingHistoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemReporting.GetBillingHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemReporting.GetBillingHistoryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemBillingHistoryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemBillingHistoryRequest` | `semBillingHistoryRequestSchema` | `src/models/sem-billing-history-request.ts` |
| `SemBillingHistoryResponse` | `semBillingHistoryResponseSchema` | `src/models/sem-billing-history-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### getCampaignLevelSummary

- **Signature**: `getCampaignLevelSummary(request: SemReporting.GetCampaignLevelSummaryRequest, options?: RequestOptions): ApiPromise<SemCampaignLevelReportResponse, SemReporting.GetCampaignLevelSummaryError>`
- **Wire**: `POST /v3/advertising/sem/campaigns/performance-summary`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCampaignLevelReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemReporting.GetCampaignLevelSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemReporting.GetCampaignLevelSummaryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemReportRequest` | `semReportRequestSchema` | `src/models/sem-report-request.ts` |
| `SemCampaignLevelReportResponse` | `semCampaignLevelReportResponseSchema` | `src/models/sem-campaign-level-report-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### getItemLevelSummary

- **Signature**: `getItemLevelSummary(request: SemReporting.GetItemLevelSummaryRequest, options?: RequestOptions): ApiPromise<SemItemLevelReportResponse, SemReporting.GetItemLevelSummaryError>`
- **Wire**: `POST /v3/advertising/sem/campaigns/{campaignId}/item-level-summary`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemItemLevelReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemReporting.GetItemLevelSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [404] `SemErrorResponse400` · `"semErrorResponse4003"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemReporting.GetItemLevelSummaryRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemReportRequest` | `semReportRequestSchema` | `src/models/sem-report-request.ts` |
| `SemItemLevelReportResponse` | `semItemLevelReportResponseSchema` | `src/models/sem-item-level-report-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

