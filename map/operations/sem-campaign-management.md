<!-- Generated file — do not edit; regenerated with the SDK. -->

# SemCampaignManagement — operations

Accessor: `client.semCampaignManagement` · Source: `src/resources/sem-campaign-management.ts` · 6 operations · Request and error types: namespace `SemCampaignManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCampaign

- **Signature**: `createCampaign(request: SemCampaignManagement.CreateCampaignRequest, options?: RequestOptions): ApiPromise<SemCampaignResponse, SemCampaignManagement.CreateCampaignError>`
- **Wire**: `POST /v3/advertising/sem/campaigns`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCampaignResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.CreateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.CreateCampaignRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemCampaignCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCampaignCreateRequest` | `semCampaignCreateRequestSchema` | `src/models/sem-campaign-create-request.ts` |
| `SemCampaignResponse` | `semCampaignResponseSchema` | `src/models/sem-campaign-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### deleteCampaign

- **Signature**: `deleteCampaign(request: SemCampaignManagement.DeleteCampaignRequest, options?: RequestOptions): ApiPromise<SemCampaignResponse, SemCampaignManagement.DeleteCampaignError>`
- **Wire**: `DELETE /v3/advertising/sem/campaigns/{campaignId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCampaignResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.DeleteCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [404] `SemErrorResponse400` · `"semErrorResponse4003"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.DeleteCampaignRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCampaignResponse` | `semCampaignResponseSchema` | `src/models/sem-campaign-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### getCampaignDetails

- **Signature**: `getCampaignDetails(request: SemCampaignManagement.GetCampaignDetailsRequest, options?: RequestOptions): ApiPromise<SemCampaign, SemCampaignManagement.GetCampaignDetailsError>`
- **Wire**: `GET /v3/advertising/sem/campaigns/{campaignId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SemCampaign`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.GetCampaignDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [404] `SemErrorResponse400` · `"semErrorResponse4003"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.GetCampaignDetailsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCampaign` | `semCampaignSchema` | `src/models/sem-campaign.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### searchCampaignRecommendations

- **Signature**: `searchCampaignRecommendations(request: SemCampaignManagement.SearchCampaignRecommendationsRequest, options?: RequestOptions): ApiPromise<CampaignRecommendationsSearchResponse, SemCampaignManagement.SearchCampaignRecommendationsError>`
- **Wire**: `POST /v3/advertising/sem/campaigns/recommendations/search`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignRecommendationsSearchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.SearchCampaignRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [422] `ErrorResponse` · `"errorResponse429"` [429] `ErrorResponse429` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.SearchCampaignRecommendationsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | no | `WmGlobalVersion._31` |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | no | `WmMarket.Us` |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationJson` |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `CampaignRecommendationsSearchRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CampaignRecommendationsSearchRequest` | `campaignRecommendationsSearchRequestSchema` | `src/models/campaign-recommendations-search-request.ts` |
| `CampaignRecommendationsSearchResponse` | `campaignRecommendationsSearchResponseSchema` | `src/models/campaign-recommendations-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ErrorResponse429` | `errorResponse429Schema` | `src/models/error-response429.ts` |

### stopCampaign

- **Signature**: `stopCampaign(request: SemCampaignManagement.StopCampaignRequest, options?: RequestOptions): ApiPromise<SemCampaignResponse, SemCampaignManagement.StopCampaignError>`
- **Wire**: `PUT /v3/advertising/sem/campaigns/{campaignId}/stop`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCampaignResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.StopCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [404] `SemErrorResponse400` · `"semErrorResponse4003"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.StopCampaignRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCampaignResponse` | `semCampaignResponseSchema` | `src/models/sem-campaign-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

### updateCampaign

- **Signature**: `updateCampaign(request: SemCampaignManagement.UpdateCampaignRequest, options?: RequestOptions): ApiPromise<SemCampaignResponse, SemCampaignManagement.UpdateCampaignError>`
- **Wire**: `PUT /v3/advertising/sem/campaigns/{campaignId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemCampaignResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `SemCampaignManagement.UpdateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"semErrorResponse400"` [400] `SemErrorResponse400` · `"semErrorResponse4002"` [404] `SemErrorResponse400` · `"semErrorResponse4003"` [500] `SemErrorResponse400` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemCampaignManagement.UpdateCampaignRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `SemCampaignUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemCampaignUpdateRequest` | `semCampaignUpdateRequestSchema` | `src/models/sem-campaign-update-request.ts` |
| `SemCampaignResponse` | `semCampaignResponseSchema` | `src/models/sem-campaign-response.ts` |
| `SemErrorResponse400` | `semErrorResponse400Schema` | `src/models/sem-error-response400.ts` |

