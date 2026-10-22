<!-- Generated file — do not edit; regenerated with the SDK. -->

# WsrAttributionReports — operations

Accessor: `client.wsrAttributionReports` · Source: `src/resources/wsr-attribution-reports.ts` · 3 operations · Request and error types: namespace `WsrAttributionReports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTagTemplates

- **Signature**: `getTagTemplates(request: WsrAttributionReports.GetTagTemplatesRequest, options?: RequestOptions): ApiPromise<WsrTagTemplatesResponse, WsrAttributionReports.GetTagTemplatesError>`
- **Wire**: `GET /v3/advertising/wsr/attribution/tag-templates/{templateType}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WsrTagTemplatesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WsrAttributionReports.GetTagTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wsrErrorResponse"` [400] `WsrErrorResponse` · `"wsrErrorResponse2"` [500] `WsrErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WsrAttributionReports.GetTagTemplatesRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateType` | `path` | — | `TemplateType` | no | `TemplateType.NonMacro` |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateType` | `templateTypeSchema` | `src/models/template-type.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `WsrTagTemplatesResponse` | `wsrTagTemplatesResponseSchema` | `src/models/wsr-tag-templates-response.ts` |
| `WsrErrorResponse` | `wsrErrorResponseSchema` | `src/models/wsr-error-response.ts` |

### getWsrItemReport

- **Signature**: `getWsrItemReport(request: WsrAttributionReports.GetWsrItemReportRequest, options?: RequestOptions): ApiPromise<WsrItemReportResponse, WsrAttributionReports.GetWsrItemReportError>`
- **Wire**: `POST /v3/advertising/wsr/attribution/item-report`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WsrItemReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WsrAttributionReports.GetWsrItemReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wsrErrorResponse"` [400] `WsrErrorResponse` · `"wsrErrorResponse2"` [500] `WsrErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WsrAttributionReports.GetWsrItemReportRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `WsrReportRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `WsrReportRequest` | `wsrReportRequestSchema` | `src/models/wsr-report-request.ts` |
| `WsrItemReportResponse` | `wsrItemReportResponseSchema` | `src/models/wsr-item-report-response.ts` |
| `WsrErrorResponse` | `wsrErrorResponseSchema` | `src/models/wsr-error-response.ts` |

### getWsrPerformanceReport

- **Signature**: `getWsrPerformanceReport(request: WsrAttributionReports.GetWsrPerformanceReportRequest, options?: RequestOptions): ApiPromise<WsrPerformanceReportResponse, WsrAttributionReports.GetWsrPerformanceReportError>`
- **Wire**: `POST /v3/advertising/wsr/attribution/performance-report`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WsrPerformanceReportResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `WsrAttributionReports.GetWsrPerformanceReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wsrErrorResponse"` [400] `WsrErrorResponse` · `"wsrErrorResponse2"` [500] `WsrErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WsrAttributionReports.GetWsrPerformanceReportRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `WsrReportRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `WsrReportRequest` | `wsrReportRequestSchema` | `src/models/wsr-report-request.ts` |
| `WsrPerformanceReportResponse` | `wsrPerformanceReportResponseSchema` | `src/models/wsr-performance-report-response.ts` |
| `WsrErrorResponse` | `wsrErrorResponseSchema` | `src/models/wsr-error-response.ts` |

