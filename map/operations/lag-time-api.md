<!-- Generated file — do not edit; regenerated with the SDK. -->

# LagTimeApi — operations

Accessor: `client.lagTimeApi` · Source: `src/resources/lag-time-api.ts` · 2 operations · Request and error types: namespace `LagTimeApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLagTime

- **Signature**: `getLagTime(request: LagTimeApi.GetLagTimeRequest, options?: RequestOptions): ApiPromise<LagTimeResponse, LagTimeApi.GetLagTimeError>`
- **Wire**: `GET /v3/lagtime`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LagTimeResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `LagTimeApi.GetLagTimeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Lagtime400Error1"` [400] `V3Lagtime400Error1` · `"v3Lagtime404Error1"` [404] `V3Lagtime404Error1` · `"v3Lagtime500Error1"` [500] `V3Lagtime500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LagTimeApi.GetLagTimeRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sku` | `query` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `LagTimeResponse` | `lagTimeResponseSchema` | `src/models/lag-time-response.ts` |
| `V3Lagtime400Error1` | `v3Lagtime400Error1Schema` | `src/models/v3-lagtime400-error1.ts` |
| `V3Lagtime404Error1` | `v3Lagtime404Error1Schema` | `src/models/v3-lagtime404-error1.ts` |
| `V3Lagtime500Error1` | `v3Lagtime500Error1Schema` | `src/models/v3-lagtime500-error1.ts` |

### updateLagTimeBulk

- **Signature**: `updateLagTimeBulk(request: LagTimeApi.UpdateLagTimeBulkRequest, options?: RequestOptions): ApiPromise<FeedId1, ApiError>`
- **Wire**: `POST /v3/feeds`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId1`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LagTimeApi.UpdateLagTimeBulkRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3FeedsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsRequest` | `v3FeedsRequestSchema` | `src/models/v3-feeds-request.ts` |
| `FeedId1` | `feedId1Schema` | `src/models/feed-id1.ts` |

