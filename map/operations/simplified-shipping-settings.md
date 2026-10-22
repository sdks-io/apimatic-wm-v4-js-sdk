<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimplifiedShippingSettings — operations

Accessor: `client.simplifiedShippingSettings` · Source: `src/resources/simplified-shipping-settings.ts` · 5 operations · Request types: namespace `SimplifiedShippingSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkMigrateOffersForSimplifiedShippingSettings

- **Signature**: `bulkMigrateOffersForSimplifiedShippingSettings(request: SimplifiedShippingSettings.BulkMigrateOffersForSimplifiedShippingSettingsRequest, options?: RequestOptions): ApiPromise<FeedId1, ApiError>`
- **Wire**: `POST /v3/feeds`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedId1`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SimplifiedShippingSettings.BulkMigrateOffersForSimplifiedShippingSettingsRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `feedType` | `query` | — | `string` | no | `"PROGRAM_ACTIONS"` |
| `requestType` | `query` | — | `string` | no | `"SHIPPING_CONFIG"` |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes | — |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `body` | `body` | — | `V3FeedsRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3FeedsRequest1` | `v3FeedsRequest1Schema` | `src/models/v3-feeds-request1.ts` |
| `FeedId1` | `feedId1Schema` | `src/models/feed-id1.ts` |

### createSimplifiedShippingSettings

- **Signature**: `createSimplifiedShippingSettings(request: SimplifiedShippingSettings.CreateSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[], ApiError>`
- **Wire**: `POST /v3/settings/shipping/simplifiedshippingsettings/account`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SimplifiedShippingSettings.CreateSimplifiedShippingSettingsRequestParams` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3SettingsShippingSimplifiedshippingsettingsAccountRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsAccountRequest1` | `v3SettingsShippingSimplifiedshippingsettingsAccountRequest1Schema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-account-request1.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsAccountResponse1` | `v3SettingsShippingSimplifiedshippingsettingsAccountResponse1Schema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-account-response1.ts` |

### getSimplifiedShippingSettings

- **Signature**: `getSimplifiedShippingSettings(request: SimplifiedShippingSettings.GetSimplifiedShippingSettingsRequest, options?: RequestOptions): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsResponse[], ApiError>`
- **Wire**: `GET /v3/settings/shipping/simplifiedshippingsettings`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3SettingsShippingSimplifiedshippingsettingsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SimplifiedShippingSettings.GetSimplifiedShippingSettingsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
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
| `V3SettingsShippingSimplifiedshippingsettingsResponse` | `v3SettingsShippingSimplifiedshippingsettingsResponseSchema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-response.ts` |

### updateFcLevelSimplifiedShippingSettings

- **Signature**: `updateFcLevelSimplifiedShippingSettings(request: SimplifiedShippingSettings.UpdateFcLevelSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[], ApiError>`
- **Wire**: `PUT /v3/settings/shipping/simplifiedshippingsettings/fulfillmentcenter`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SimplifiedShippingSettings.UpdateFcLevelSimplifiedShippingSettingsRequestParams` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest` | `v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequestSchema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-request.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse` | `v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponseSchema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-response.ts` |

### updateSimplifiedShippingSettings

- **Signature**: `updateSimplifiedShippingSettings(request: SimplifiedShippingSettings.UpdateSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise<V3SettingsShippingSimplifiedshippingsettingsAccountResponse[], ApiError>`
- **Wire**: `PUT /v3/settings/shipping/simplifiedshippingsettings/account`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3SettingsShippingSimplifiedshippingsettingsAccountResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SimplifiedShippingSettings.UpdateSimplifiedShippingSettingsRequestParams` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3SettingsShippingSimplifiedshippingsettingsAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsAccountRequest` | `v3SettingsShippingSimplifiedshippingsettingsAccountRequestSchema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-account-request.ts` |
| `V3SettingsShippingSimplifiedshippingsettingsAccountResponse` | `v3SettingsShippingSimplifiedshippingsettingsAccountResponseSchema` | `src/models/v3-settings-shipping-simplifiedshippingsettings-account-response.ts` |

