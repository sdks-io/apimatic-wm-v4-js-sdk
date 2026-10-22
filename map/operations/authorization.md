<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `src/resources/authorization.ts` · 2 operations · Request and error types: namespace `Authorization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTokenDetail

- **Signature**: `getTokenDetail(request: Authorization.GetTokenDetailRequest, options?: RequestOptions): ApiPromise<TokenDetailResponse, ApiError>`
- **Wire**: `GET /v3/token/detail`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TokenDetailResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Authorization.GetTokenDetailRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes |
| `contentType` | `header` | `Content-Type` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TokenDetailResponse` | `tokenDetailResponseSchema` | `src/models/token-detail-response.ts` |

### tokenApi

- **Signature**: `tokenApi(request: Authorization.TokenApiRequest, options?: RequestOptions): ApiPromise<OAuthTokenModel, Authorization.TokenApiError>`
- **Wire**: `POST /v3/token`
- **Auth**: `basicAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthTokenModel`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Authorization.TokenApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3Token400Error1"` [400] `V3Token400Error1` · `"v3Token401Error1"` [401] `V3Token401Error1` · `"v3Token500Error1"` [500] `V3Token500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.TokenApiRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `wmMarket` | `header` | `WM_MARKET` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmPartnerId` | `header` | `WM_PARTNER.ID` | `string` | no | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |
| `grantType` | `form` | `grant_type` | `GrantType1` | no | `GrantType1.ClientCredentials` |
| `code` | `form` | — | `string` | no | — |
| `redirectUri` | `form` | `redirect_uri` | `string` | no | — |
| `refreshToken` | `form` | `refresh_token` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantType1` | `grantType1Schema` | `src/models/grant-type1.ts` |
| `OAuthTokenModel` | `oAuthTokenModelSchema` | `src/models/oauth-token-model.ts` |
| `V3Token400Error1` | `v3Token400Error1Schema` | `src/models/v3-token400-error1.ts` |
| `V3Token401Error1` | `v3Token401Error1Schema` | `src/models/v3-token401-error1.ts` |
| `V3Token500Error1` | `v3Token500Error1Schema` | `src/models/v3-token500-error1.ts` |

