<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.authorization` · Source: `src/resources/authorization.ts` · 3 operations · Request and error types: namespace `Authorization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authorize

- **Signature**: `authorize(request: Authorization.AuthorizeRequest, options?: RequestOptions): ApiPromise<undefined, Authorization.AuthorizeApiError>`
- **Wire**: `GET /auth/v4/authorize`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Authorization.AuthorizeApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error302"` [302] no body · `"authorizeError"` [400] `AuthorizeError` · `"oAuthError"` [429] `OAuthError` · `"oAuthError2"` [500] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.AuthorizeRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `responseType` | `query` | `response_type` | `ResponseType1` | yes |
| `clientId` | `query` | `client_id` | `string` | yes |
| `redirectUri` | `query` | `redirect_uri` | `string` | yes |
| `scope` | `query` | — | `string` | yes |
| `state` | `query` | — | `string` | yes |
| `codeChallenge` | `query` | `code_challenge` | `string` | yes |
| `codeChallengeMethod` | `query` | `code_challenge_method` | `CodeChallengeMethod` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseType1` | `responseType1Schema` | `src/models/response-type1.ts` |
| `CodeChallengeMethod` | `codeChallengeMethodSchema` | `src/models/code-challenge-method.ts` |
| `AuthorizeError` | `authorizeErrorSchema` | `src/models/authorize-error.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

### createToken

- **Signature**: `createToken(request: Authorization.CreateTokenRequest, options?: RequestOptions): ApiPromise<TokenResponse, Authorization.CreateTokenError>`
- **Wire**: `POST /auth/v4/token`
- **Auth**: `basicClientAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Authorization.CreateTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthError"` [400] `OAuthError` · `"oAuthError2"` [401] `OAuthError` · `"oAuthError3"` [429] `OAuthError` · `"oAuthError4"` [500] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.CreateTokenRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `grantType` | `form` | `grant_type` | `GrantType` | yes |
| `clientId` | `form` | `client_id` | `string` | no |
| `clientSecret` | `form` | `client_secret` | `string` | no |
| `code` | `form` | — | `string` | no |
| `codeVerifier` | `form` | `code_verifier` | `string` | no |
| `refreshToken` | `form` | `refresh_token` | `string` | no |
| `redirectUri` | `form` | `redirect_uri` | `string` | no |
| `scope` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantType` | `grantTypeSchema` | `src/models/grant-type.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

### registerClient

- **Signature**: `registerClient(request: Authorization.RegisterClientRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, Authorization.RegisterClientError>`
- **Wire**: `POST /auth/v4/register`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientRegistrationResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Authorization.RegisterClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"registrationError"` [400] `RegistrationError` · `"registrationError2"` [401] `RegistrationError` · `"oAuthError"` [429] `OAuthError` · `"oAuthError2"` [500] `OAuthError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Authorization.RegisterClientRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ClientRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientRegistrationRequest` | `clientRegistrationRequestSchema` | `src/models/client-registration-request.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `RegistrationError` | `registrationErrorSchema` | `src/models/registration-error.ts` |
| `OAuthError` | `oAuthErrorSchema` | `src/models/oauth-error.ts` |

