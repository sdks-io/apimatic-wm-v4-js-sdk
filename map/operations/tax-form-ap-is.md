<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxFormApIs — operations

Accessor: `client.taxFormApIs` · Source: `src/resources/tax-form-ap-is.ts` · 2 operations · Request and error types: namespace `TaxFormApIs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadTaxForm

- **Signature**: `downloadTaxForm(request: TaxFormApIs.DownloadTaxFormRequest, options?: RequestOptions): ApiPromise<undefined, TaxFormApIs.DownloadTaxFormError>`
- **Wire**: `GET /v1/settings/downloadtaxformprofile`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `TaxFormApIs.DownloadTaxFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1SettingsDownloadtaxformprofile502Error1"` [502] `V1SettingsDownloadtaxformprofile502Error1` · `"v1SettingsDownloadtaxformprofile404Error1"` [404] `V1SettingsDownloadtaxformprofile404Error1` · `"v1SettingsDownloadtaxformprofile400Error1"` [400] `V1SettingsDownloadtaxformprofile400Error1` · `"v1SettingsDownloadtaxformprofile500Error1"` [500] `V1SettingsDownloadtaxformprofile500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxFormApIs.DownloadTaxFormRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutYear` | `query` | — | `string` | yes |
| `taxFormType` | `query` | — | `string` | yes |
| `formId` | `query` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes |
| `wmPartnerId` | `header` | `WM_PARTNER_ID` | `string` | yes |
| `wmTenantId` | `header` | `WM.TENANT_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V1SettingsDownloadtaxformprofile502Error1` | `v1SettingsDownloadtaxformprofile502Error1Schema` | `src/models/v1-settings-downloadtaxformprofile502-error1.ts` |
| `V1SettingsDownloadtaxformprofile404Error1` | `v1SettingsDownloadtaxformprofile404Error1Schema` | `src/models/v1-settings-downloadtaxformprofile404-error1.ts` |
| `V1SettingsDownloadtaxformprofile400Error1` | `v1SettingsDownloadtaxformprofile400Error1Schema` | `src/models/v1-settings-downloadtaxformprofile400-error1.ts` |
| `V1SettingsDownloadtaxformprofile500Error1` | `v1SettingsDownloadtaxformprofile500Error1Schema` | `src/models/v1-settings-downloadtaxformprofile500-error1.ts` |

### getTaxForms

- **Signature**: `getTaxForms(request: TaxFormApIs.GetTaxFormsRequest, options?: RequestOptions): ApiPromise<V1SettingsGettaxformprofileResponse, TaxFormApIs.GetTaxFormsError>`
- **Wire**: `GET /v1/settings/gettaxformprofile`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SettingsGettaxformprofileResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `TaxFormApIs.GetTaxFormsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v1SettingsGettaxformprofile404Error1"` [404] `V1SettingsGettaxformprofile404Error1` · `"v1SettingsGettaxformprofile400Error1"` [400] `V1SettingsGettaxformprofile400Error1` · `"v1SettingsGettaxformprofile500Error1"` [500] `V1SettingsGettaxformprofile500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxFormApIs.GetTaxFormsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes |
| `wmPartnerId` | `header` | `WM_PARTNER_ID` | `string` | yes |
| `wmTenantId` | `header` | `WM.TENANT_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V1SettingsGettaxformprofileResponse` | `v1SettingsGettaxformprofileResponseSchema` | `src/models/v1-settings-gettaxformprofile-response.ts` |
| `V1SettingsGettaxformprofile404Error1` | `v1SettingsGettaxformprofile404Error1Schema` | `src/models/v1-settings-gettaxformprofile404-error1.ts` |
| `V1SettingsGettaxformprofile400Error1` | `v1SettingsGettaxformprofile400Error1Schema` | `src/models/v1-settings-gettaxformprofile400-error1.ts` |
| `V1SettingsGettaxformprofile500Error1` | `v1SettingsGettaxformprofile500Error1Schema` | `src/models/v1-settings-gettaxformprofile500-error1.ts` |

