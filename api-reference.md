# Reference

> Source: [WalmartApIsClient](src/client.ts)

## Authorization

> Source: [Authorization](src/resources/authorization.ts)

<details>
<summary><code>authorize(request: Authorization.AuthorizeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Authorization.AuthorizeApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browser endpoint for the authorization-code grant (RFC 6749 §3.1). The
Solution Provider redirects the seller here; the seller authenticates and
consents at Walmart IAM, and the response redirects to `redirect_uri` with a
single-use `code`.

- **PKCE required** — `code_challenge` + `code_challenge_method=S256`
  (RFC 7636). `plain` is not accepted.
- **Exact** `redirect_uri` match against a value registered for the client.
- `state` required; echoed back verbatim (CSRF).
- The success and error redirects (performed by IAM) carry `iss` (RFC 9207);
  clients MUST validate it.

**Error handling.** For a valid request, this endpoint `302`-redirects to the
Walmart IAM consent URL; IAM then drives consent and performs the RFC 6749
§4.1.2.1 redirect back to the client's `redirect_uri` (success or error),
because IAM is the party that can verify the `redirect_uri` is registered.
For request-level errors that `the Authorization API` itself detects
(missing/invalid `client_id`/`redirect_uri`, `response_type` != `code`,
`code_challenge_method` != `S256`), it returns a JSON `400` (`AuthorizeError`).
It deliberately does **not** redirect these errors to the supplied
`redirect_uri`: the proxy has no client registry, so self-redirecting to an
unverified URI would be an open redirect.

> **Upstream status (, pending):** `iss` emission, exact-redirect
> enforcement, and server-side rejection of `code_challenge_method=plain` are
> IAM / app-store responsibilities not yet fully in place. the Authorization API
> enforces the request-side invariants it can and redirects valid requests to
> IAM; the full guarantee lands when those upstream changes ship.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authorization.authorize({
    responseType: ResponseType1.Code,
    clientId: "some example string",
    redirectUri: "https://example.com",
    scope: "some example string",
    state: "some example string",
    codeChallenge: "some example string",
    codeChallengeMethod: CodeChallengeMethod.S256,
  });
} catch (err) {
  // TODO: Handle 'err' of type Authorization.AuthorizeApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization.authorize({
  responseType: ResponseType1.Code,
  clientId: "some example string",
  redirectUri: "https://example.com",
  scope: "some example string",
  state: "some example string",
  codeChallenge: "some example string",
  codeChallengeMethod: CodeChallengeMethod.S256,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>responseType</code> | <code>[ResponseType1](src/models/response-type1.ts)</code> | Must be `code`. |
| <code>clientId</code> | <code>string</code> | The registered client identifier. |
| <code>redirectUri</code> | <code>string</code> | Callback URI; must exactly match a registered value. |
| <code>scope</code> | <code>string</code> | Space-delimited scopes. Include `offline_access` to receive a refresh token. |
| <code>state</code> | <code>string</code> | Opaque CSRF token; echoed back unchanged. |
| <code>codeChallenge</code> | <code>string</code> | PKCE challenge — base64url(SHA-256(code_verifier)). |
| <code>codeChallengeMethod</code> | <code>[CodeChallengeMethod](src/models/code-challenge-method.ts)</code> | Must be `S256`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.authorize(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Authorization.AuthorizeApiError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.authorize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Authorization.AuthorizeApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createToken(request: Authorization.CreateTokenRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Authorization.CreateTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a grant for an OAuth access token. Supported `grant_type` values:

| grant_type | Flow | Required (besides grant_type) |
|----------------------|------------------|---------------------------------|
| `client_credentials` | seller-direct | client auth (see below) |
| `authorization_code` | delegated | `code`, `code_verifier` (PKCE) |
| `refresh_token` | delegated | `refresh_token` |

**Client authentication:** credentials in the form body (`client_secret_post`)
— `client_id` + `client_secret`. HTTP Basic is also accepted. **Public
clients** (Solution-Provider apps registered `token_endpoint_auth_method: none`)
send no secret on the delegated grants; PKCE protects the code.

**`client_credentials`:** issues **no** refresh token (re-mint on expiry).
**`scope` is decorative here** — accepted for compatibility but **not honored**;
access is governed by the scopes provisioned per client in IAM ; there
is no down-scoping and the response does not echo `scope`. (Verified: `/v3/token`
ignores any `scope=` value.)

**`authorization_code`:** `redirect_uri` is accepted for OAuth 2.0 back-compat
but not required in 2.1 (PKCE covers injection).

**`refresh_token`:** the response includes a **rotated** `refresh_token` — the
presented token is invalidated (OAuth 2.1 §4.3.1; IAM rotates today, ~1-year
TTL). A requested `scope` MUST NOT exceed the originally granted scope.

**Token:** `Bearer` (RFC 6750), sent downstream as `Authorization: Bearer
<token>` — **not** `WM_SEC.ACCESS_TOKEN`.

**Implemented by `the Authorization API` as a stateless proxy to Walmart IAM .**


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.createToken({ grantType: GrantType.ClientCredentials });
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.CreateTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization.createToken({
  grantType: GrantType.ClientCredentials,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>grantType</code> | <code>[GrantType](src/models/grant-type.ts)</code> | The OAuth grant type. |
| <code>clientId?</code> | <code>string</code> | Client identifier (client_secret_post / public clients). Omit if using HTTP Basic. |
| <code>clientSecret?</code> | <code>string</code> | Client secret (client_secret_post). Omit for public clients or HTTP Basic. |
| <code>code?</code> | <code>string</code> | Authorization code from `/auth/v4/authorize` (authorization_code grant). |
| <code>codeVerifier?</code> | <code>string</code> | PKCE verifier whose S256 hash equals the earlier `code_challenge` (authorization_code grant). |
| <code>refreshToken?</code> | <code>string</code> | A previously issued refresh token (refresh_token grant). Rotated on use. |
| <code>redirectUri?</code> | <code>string</code> | Accepted for OAuth 2.0 back-compat on authorization_code; not required in 2.1 (PKCE covers injection). |
| <code>scope?</code> | <code>string</code> | **client_credentials:** accepted for compatibility but **not honored**<br> — no down-scoping; not echoed. **refresh_token:** optional;<br>MUST NOT exceed the originally granted scope. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.createToken(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Authorization.CreateTokenError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.createToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Authorization.CreateTokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerClient(request: Authorization.RegisterClientRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, Authorization.RegisterClientError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a Solution Provider client and returns its `client_id` (RFC
7591). Lets Solution Providers onboard without manual registration.

Public clients set `token_endpoint_auth_method: none` (no secret; PKCE
required). Confidential clients receive a `client_secret`. `redirect_uris`
are validated and later enforced by exact match at `/auth/v4/authorize`.

Proxied to Walmart IAM's registration endpoint (/). RFC 7592
registration management (read/update/delete via a
`registration_access_token`) is not offered in this version.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.registerClient({
    body: { redirectUris: ["https://example.com"] },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.RegisterClientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization.registerClient({
  body: { redirectUris: ["https://example.com"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ClientRegistrationRequest](src/models/client-registration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.registerClient(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[Authorization.RegisterClientError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.registerClient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, Authorization.RegisterClientError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Catalog

> Source: [Catalog](src/resources/catalog.ts)

<details>
<summary><code>getCatalogItem(request: Catalog.GetCatalogItemRequest, options?: RequestOptions): ApiPromise&lt;Item, Catalog.GetCatalogItemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.getCatalogItem({
    walmartItemId: "00000000000000",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Item
} catch (err) {
  // TODO: Handle 'err' of type Catalog.GetCatalogItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.getCatalogItem({
  walmartItemId: "00000000000000",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>walmartItemId</code> | <code>string</code> | Walmart Item ID (14-digit numeric identifier) |
| <code>marketplaceIds</code> | <code>string[]</code> | Walmart marketplace identifiers. Use WALMART_US for the US marketplace. |
| <code>includedData?</code> | <code>[IncludedDatum](src/models/included-datum.ts)[]</code> | Data sections to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.getCatalogItem(request)`

- **OnSuccess**: <code>[Item](src/models/item.ts)</code>
- **OnError**: throws <code>[Catalog.GetCatalogItemError](src/resources/catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.catalog.getCatalogItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item, Catalog.GetCatalogItemError&gt;</code>, with `result.value` of type <code>[Item](src/models/item.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCatalogItems(request: Catalog.SearchCatalogItemsRequest, options?: RequestOptions): ApiPromise&lt;ItemSearchResults, Catalog.SearchCatalogItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the Walmart Marketplace catalog using keywords, WalmartItemId,
GTIN, UPC, or seller SKU. Returns matching catalog items.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.searchCatalogItems({ marketplaceIds: ["some example string"] });
  // TODO: Handle 'response' of type ItemSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Catalog.SearchCatalogItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.searchCatalogItems({
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceIds</code> | <code>string[]</code> | Walmart marketplace identifiers. Use WALMART_US for the US marketplace. |
| <code>keywords?</code> | <code>string</code> | Keyword search terms |
| <code>walmartItemIds?</code> | <code>string</code> | Comma-separated Walmart Item IDs (14-digit). Max 20. |
| <code>sellerSku?</code> | <code>string</code> | Seller-defined SKU |
| <code>gtin?</code> | <code>string</code> | Global Trade Item Number (14-digit) |
| <code>upc?</code> | <code>string</code> | Universal Product Code (12-digit) |
| <code>includedData?</code> | <code>[IncludedDatum](src/models/included-datum.ts)[]</code> | Data sections to include in the response |
| <code>pageSize?</code> | <code>number</code> | Number of results per page (1–20).<br>**Known limitation:** The PIQS keyword search backend hard-caps results at 40 items per call regardless of this value.<br>**Default**: 10 |
| <code>pageToken?</code> | <code>string</code> | Token for the next page of results, obtained from `pagination.nextToken` in a previous response.<br>**Known limitation:** Cursor-based pagination is not currently supported for keyword search. The PIQS search backend (`/v3/items/walmart/search`) does not return a `nextCursor` and does not honour this parameter. Results are capped at 40 items per call. Reserved for future use once PIQS exposes pagination support. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.searchCatalogItems(request)`

- **OnSuccess**: <code>[ItemSearchResults](src/models/item-search-results.ts)</code>
- **OnError**: throws <code>[Catalog.SearchCatalogItemsError](src/resources/catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.catalog.searchCatalogItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSearchResults, Catalog.SearchCatalogItemsError&gt;</code>, with `result.value` of type <code>[ItemSearchResults](src/models/item-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataKiosk

> Source: [DataKiosk](src/resources/data-kiosk.ts)

<details>
<summary><code>cancelQuery(request: DataKiosk.CancelQueryRequest, options?: RequestOptions): ApiPromise&lt;CancelQueryResponse, DataKiosk.CancelQueryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataKiosk.cancelQuery({ queryId: "some example string" });
  // TODO: Handle 'response' of type CancelQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type DataKiosk.CancelQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataKiosk.cancelQuery({ queryId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelQueryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>queryId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataKiosk.cancelQuery(request)`

- **OnSuccess**: <code>[CancelQueryResponse](src/models/cancel-query-response.ts)</code>
- **OnError**: throws <code>[DataKiosk.CancelQueryError](src/resources/data-kiosk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataKiosk.cancelQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelQueryResponse, DataKiosk.CancelQueryError&gt;</code>, with `result.value` of type <code>[CancelQueryResponse](src/models/cancel-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createQuery(request: DataKiosk.CreateQueryRequest, options?: RequestOptions): ApiPromise&lt;CreateQueryResponse, DataKiosk.CreateQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a structured query for async processing.
Query language TBD pending ADR (GraphQL vs REST hybrid — Pod 4).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataKiosk.createQuery({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type CreateQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type DataKiosk.CreateQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataKiosk.createQuery({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateQueryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateQuerySpecification](src/models/create-query-specification.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataKiosk.createQuery(request)`

- **OnSuccess**: <code>[CreateQueryResponse](src/models/create-query-response.ts)</code>
- **OnError**: throws <code>[DataKiosk.CreateQueryError](src/resources/data-kiosk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataKiosk.createQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateQueryResponse, DataKiosk.CreateQueryError&gt;</code>, with `result.value` of type <code>[CreateQueryResponse](src/models/create-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDocument(request: DataKiosk.GetDocumentRequest, options?: RequestOptions): ApiPromise&lt;Document, DataKiosk.GetDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pre-signed URL for downloading query result data.
Do not log the pre-signed URL.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataKiosk.getDocument({ documentId: "some example string" });
  // TODO: Handle 'response' of type Document
} catch (err) {
  // TODO: Handle 'err' of type DataKiosk.GetDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataKiosk.getDocument({ documentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Document
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>documentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataKiosk.getDocument(request)`

- **OnSuccess**: <code>[Document](src/models/document.ts)</code>
- **OnError**: throws <code>[DataKiosk.GetDocumentError](src/resources/data-kiosk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataKiosk.getDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Document, DataKiosk.GetDocumentError&gt;</code>, with `result.value` of type <code>[Document](src/models/document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQueries(request: DataKiosk.GetQueriesRequest, options?: RequestOptions): ApiPromise&lt;GetQueriesResponse, DataKiosk.GetQueriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Data Kiosk queries submitted by the seller,
optionally filtered by processing status and creation date range.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataKiosk.getQueries();
  // TODO: Handle 'response' of type GetQueriesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataKiosk.GetQueriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataKiosk.getQueries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetQueriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>processingStatuses?</code> | <code>[ProcessingStatus](src/models/processing-status.ts)[]</code> | - |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>createdSince?</code> | <code>Date</code> (date-time) | - |
| <code>createdUntil?</code> | <code>Date</code> (date-time) | - |
| <code>paginationToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataKiosk.getQueries(request)`

- **OnSuccess**: <code>[GetQueriesResponse](src/models/get-queries-response.ts)</code>
- **OnError**: throws <code>[DataKiosk.GetQueriesError](src/resources/data-kiosk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataKiosk.getQueries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetQueriesResponse, DataKiosk.GetQueriesError&gt;</code>, with `result.value` of type <code>[GetQueriesResponse](src/models/get-queries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQuery(request: DataKiosk.GetQueryRequest, options?: RequestOptions): ApiPromise&lt;Query, DataKiosk.GetQueryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataKiosk.getQuery({ queryId: "some example string" });
  // TODO: Handle 'response' of type Query
} catch (err) {
  // TODO: Handle 'err' of type DataKiosk.GetQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataKiosk.getQuery({ queryId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Query
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>queryId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataKiosk.getQuery(request)`

- **OnSuccess**: <code>[Query](src/models/query.ts)</code>
- **OnError**: throws <code>[DataKiosk.GetQueryError](src/resources/data-kiosk.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataKiosk.getQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Query, DataKiosk.GetQueryError&gt;</code>, with `result.value` of type <code>[Query](src/models/query.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Feeds

> Source: [Feeds](src/resources/feeds.ts)

<details>
<summary><code>cancelFeed(request: Feeds.CancelFeedRequest, options?: RequestOptions): ApiPromise&lt;CancelFeedResponse, Feeds.CancelFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Placeholder — not yet implemented.** Cancels the feed identified by
feedId if it is still queued or in progress. Mirrors Amazon SP-API
`cancelFeed` (DELETE /feeds/2021-06-30/feeds/{feedId}) so partners can
generate a client against the final contract now. A feed that has
already reached DONE or ERROR cannot be cancelled.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.cancelFeed({ feedId: "some example string" });
  // TODO: Handle 'response' of type CancelFeedResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.CancelFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.cancelFeed({ feedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelFeedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.cancelFeed(request)`

- **OnSuccess**: <code>[CancelFeedResponse](src/models/cancel-feed-response.ts)</code>
- **OnError**: throws <code>[Feeds.CancelFeedError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.cancelFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelFeedResponse, Feeds.CancelFeedError&gt;</code>, with `result.value` of type <code>[CancelFeedResponse](src/models/cancel-feed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFeed(request: Feeds.CreateFeedRequest, options?: RequestOptions): ApiPromise&lt;CreateFeedResponse, Feeds.CreateFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a feed file and submit it for asynchronous processing in a single call.
The server handles document storage internally. Use the returned feedId to poll
processing status via GET /feeds/v4/feeds/{feedId}.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.createFeed({ feedType: FeedType.ListingsFeed, file: new Uint8Array() });
  // TODO: Handle 'response' of type CreateFeedResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.CreateFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.createFeed({
  feedType: FeedType.ListingsFeed,
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateFeedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedType</code> | <code>[FeedType](src/models/feed-type.ts)</code> | The type of feed being submitted |
| <code>marketplaceId?</code> | <code>string</code> | Marketplace identifier (opaque token). If omitted, the service applies WALMART_US. |
| <code>file</code> | <code>FileInput</code> | The feed content file to upload and process |
| <code>contentType?</code> | <code>[ContentType](src/models/content-type.ts)</code> | MIME type of the uploaded feed content.<br>If omitted, the server infers from the file's Content-Type in the multipart header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.createFeed(request)`

- **OnSuccess**: <code>[CreateFeedResponse](src/models/create-feed-response.ts)</code>
- **OnError**: throws <code>[Feeds.CreateFeedError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.createFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateFeedResponse, Feeds.CreateFeedError&gt;</code>, with `result.value` of type <code>[CreateFeedResponse](src/models/create-feed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeed(request: Feeds.GetFeedRequest, options?: RequestOptions): ApiPromise&lt;Feed, Feeds.GetFeedError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeed({ feedId: "some example string" });
  // TODO: Handle 'response' of type Feed
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeed({ feedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Feed
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeed(request)`

- **OnSuccess**: <code>[Feed](src/models/feed.ts)</code>
- **OnError**: throws <code>[Feeds.GetFeedError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Feed, Feeds.GetFeedError&gt;</code>, with `result.value` of type <code>[Feed](src/models/feed.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedDocument(request: Feeds.GetFeedDocumentRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Feeds.GetFeedDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the raw feed document file. The response is a binary stream
(application/octet-stream). The Content-Disposition header contains the
original filename when available. Content-Length header is always set
to enable download progress tracking.

An IDOR check is performed before the download — the authenticated
seller must own the feed referenced by feedId.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeedDocument({ feedId: "some example string" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeedDocument({ feedId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeedDocument(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Feeds.GetFeedDocumentError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeedDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Feeds.GetFeedDocumentError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeeds(request: Feeds.GetFeedsRequest, options?: RequestOptions): ApiPromise&lt;GetFeedsResponse, Feeds.GetFeedsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feeds.getFeeds();
  // TODO: Handle 'response' of type GetFeedsResponse
} catch (err) {
  // TODO: Handle 'err' of type Feeds.GetFeedsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feeds.getFeeds().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFeedsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedTypes?</code> | <code>[FeedType](src/models/feed-type.ts)[]</code> | Feed type filter |
| <code>feedStatuses?</code> | <code>[FeedStatus](src/models/feed-status.ts)[]</code> | - |
| <code>createdSince?</code> | <code>Date</code> (date-time) | - |
| <code>createdUntil?</code> | <code>Date</code> (date-time) | - |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feeds.getFeeds(request)`

- **OnSuccess**: <code>[GetFeedsResponse](src/models/get-feeds-response.ts)</code>
- **OnError**: throws <code>[Feeds.GetFeedsError](src/resources/feeds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feeds.getFeeds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFeedsResponse, Feeds.GetFeedsError&gt;</code>, with `result.value` of type <code>[GetFeedsResponse](src/models/get-feeds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WfsInbound

> Source: [WfsInbound](src/resources/wfs-inbound.ts)

<details>
<summary><code>cancelInboundPlan(request: WfsInbound.CancelInboundPlanRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.CancelInboundPlanError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.cancelInboundPlan({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.CancelInboundPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.cancelInboundPlan({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.cancelInboundPlan(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.CancelInboundPlanError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.cancelInboundPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.CancelInboundPlanError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSelfShipAppointment(request: WfsInbound.CancelSelfShipAppointmentRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.CancelSelfShipAppointmentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.cancelSelfShipAppointment({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.CancelSelfShipAppointmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.cancelSelfShipAppointment({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[CancelSelfShipAppointmentRequest](src/models/cancel-self-ship-appointment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.cancelSelfShipAppointment(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.CancelSelfShipAppointmentError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.cancelSelfShipAppointment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.CancelSelfShipAppointmentError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmDeliveryWindowOptions(request: WfsInbound.ConfirmDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.ConfirmDeliveryWindowOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.confirmDeliveryWindowOptions({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    deliveryWindowOptionId: "some example string",
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ConfirmDeliveryWindowOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.confirmDeliveryWindowOptions({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  deliveryWindowOptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | The shipment to confirm the delivery window option for. |
| <code>deliveryWindowOptionId</code> | <code>string</code> | The ID of the delivery window option to be confirmed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.confirmDeliveryWindowOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ConfirmDeliveryWindowOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.confirmDeliveryWindowOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.ConfirmDeliveryWindowOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPackingOption(request: WfsInbound.ConfirmPackingOptionRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.ConfirmPackingOptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.confirmPackingOption({
    inboundPlanId: "some example string",
    packingOptionId: "some example string",
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ConfirmPackingOptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.confirmPackingOption({
  inboundPlanId: "some example string",
  packingOptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>packingOptionId</code> | <code>string</code> | Identifier of a packing option. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.confirmPackingOption(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ConfirmPackingOptionError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.confirmPackingOption(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.ConfirmPackingOptionError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmPlacementOption(request: WfsInbound.ConfirmPlacementOptionRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.ConfirmPlacementOptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.confirmPlacementOption({
    inboundPlanId: "some example string",
    placementOptionId: "some example string",
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ConfirmPlacementOptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.confirmPlacementOption({
  inboundPlanId: "some example string",
  placementOptionId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>placementOptionId</code> | <code>string</code> | The identifier of a placement option. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.confirmPlacementOption(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ConfirmPlacementOptionError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.confirmPlacementOption(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.ConfirmPlacementOptionError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmShipmentContentUpdatePreview(request: WfsInbound.ConfirmShipmentContentUpdatePreviewRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.ConfirmShipmentContentUpdatePreviewError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.confirmShipmentContentUpdatePreview({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    contentUpdatePreviewId: "some example string",
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ConfirmShipmentContentUpdatePreviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.confirmShipmentContentUpdatePreview({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  contentUpdatePreviewId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>contentUpdatePreviewId</code> | <code>string</code> | Identifier of a content update preview. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.confirmShipmentContentUpdatePreview(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ConfirmShipmentContentUpdatePreviewError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.confirmShipmentContentUpdatePreview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.ConfirmShipmentContentUpdatePreviewError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmTransportationOptions(request: WfsInbound.ConfirmTransportationOptionsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.ConfirmTransportationOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.confirmTransportationOptions({
    inboundPlanId: "some example string",
    body: {
      transportationSelections: [
        { shipmentId: "some example string", transportationOptionId: "some example string" },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ConfirmTransportationOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.confirmTransportationOptions({
  inboundPlanId: "some example string",
  body: {
    transportationSelections: [
      { shipmentId: "some example string", transportationOptionId: "some example string" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>body</code> | <code>[ConfirmTransportationOptionsRequest](src/models/confirm-transportation-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.confirmTransportationOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ConfirmTransportationOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.confirmTransportationOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.ConfirmTransportationOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInboundPlan(request: WfsInbound.CreateInboundPlanRequestParams, options?: RequestOptions): ApiPromise&lt;CreateInboundPlanResponse, WfsInbound.CreateInboundPlanError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.createInboundPlan({
    body: {
      destinationMarketplaces: ["some example string"],
      items: [
        {
          labelOwner: CommonLabelOwner.Seller,
          msku: "some example string",
          prepOwner: CommonPrepOwner.Seller,
          quantity: 1,
        },
      ],
      sourceAddress: {
        addressLine1: "some example string",
        city: "some example string",
        countryCode: "some example string",
        name: "some example string",
        phoneNumber: "some example string",
        postalCode: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type CreateInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.CreateInboundPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.createInboundPlan({
  body: {
    destinationMarketplaces: ["some example string"],
    items: [
      {
        labelOwner: CommonLabelOwner.Seller,
        msku: "some example string",
        prepOwner: CommonPrepOwner.Seller,
        quantity: 1,
      },
    ],
    sourceAddress: {
      addressLine1: "some example string",
      city: "some example string",
      countryCode: "some example string",
      name: "some example string",
      phoneNumber: "some example string",
      postalCode: "some example string",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateInboundPlanRequest](src/models/create-inbound-plan-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.createInboundPlan(request)`

- **OnSuccess**: <code>[CreateInboundPlanResponse](src/models/create-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.CreateInboundPlanError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.createInboundPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateInboundPlanResponse, WfsInbound.CreateInboundPlanError&gt;</code>, with `result.value` of type <code>[CreateInboundPlanResponse](src/models/create-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMarketplaceItemLabels(request: WfsInbound.CreateMarketplaceItemLabelsRequestParams, options?: RequestOptions): ApiPromise&lt;CreateMarketplaceItemLabelsResponse, WfsInbound.CreateMarketplaceItemLabelsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.createMarketplaceItemLabels({
    body: {
      labelType: CommonLabelPrintType.StandardFormat,
      marketplaceId: "some example string",
      mskuQuantities: [{ msku: "some example string", quantity: 1 }],
    },
  });
  // TODO: Handle 'response' of type CreateMarketplaceItemLabelsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.CreateMarketplaceItemLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.createMarketplaceItemLabels({
  body: {
    labelType: CommonLabelPrintType.StandardFormat,
    marketplaceId: "some example string",
    mskuQuantities: [{ msku: "some example string", quantity: 1 }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateMarketplaceItemLabelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateMarketplaceItemLabelsRequest](src/models/create-marketplace-item-labels-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.createMarketplaceItemLabels(request)`

- **OnSuccess**: <code>[CreateMarketplaceItemLabelsResponse](src/models/create-marketplace-item-labels-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.CreateMarketplaceItemLabelsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.createMarketplaceItemLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateMarketplaceItemLabelsResponse, WfsInbound.CreateMarketplaceItemLabelsError&gt;</code>, with `result.value` of type <code>[CreateMarketplaceItemLabelsResponse](src/models/create-marketplace-item-labels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateDeliveryWindowOptions(request: WfsInbound.GenerateDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GenerateDeliveryWindowOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generateDeliveryWindowOptions({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GenerateDeliveryWindowOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generateDeliveryWindowOptions({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | The shipment to generate delivery window options for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generateDeliveryWindowOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GenerateDeliveryWindowOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generateDeliveryWindowOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GenerateDeliveryWindowOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generatePackingOptions(request: WfsInbound.GeneratePackingOptionsRequest, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GeneratePackingOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generatePackingOptions({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GeneratePackingOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generatePackingOptions({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generatePackingOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GeneratePackingOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generatePackingOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GeneratePackingOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generatePlacementOptions(request: WfsInbound.GeneratePlacementOptionsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GeneratePlacementOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generatePlacementOptions({
    inboundPlanId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GeneratePlacementOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generatePlacementOptions({
  inboundPlanId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>body</code> | <code>[GeneratePlacementOptionsRequest](src/models/generate-placement-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generatePlacementOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GeneratePlacementOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generatePlacementOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GeneratePlacementOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateSelfShipAppointmentSlots(request: WfsInbound.GenerateSelfShipAppointmentSlotsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GenerateSelfShipAppointmentSlotsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generateSelfShipAppointmentSlots({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GenerateSelfShipAppointmentSlotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generateSelfShipAppointmentSlots({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[GenerateSelfShipAppointmentSlotsRequest](src/models/generate-self-ship-appointment-slots-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generateSelfShipAppointmentSlots(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GenerateSelfShipAppointmentSlotsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generateSelfShipAppointmentSlots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GenerateSelfShipAppointmentSlotsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateShipmentContentUpdatePreviews(request: WfsInbound.GenerateShipmentContentUpdatePreviewsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GenerateShipmentContentUpdatePreviewsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generateShipmentContentUpdatePreviews({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: {
      boxes: [
        {
          contentInformationSource: CommonBoxContentInformationSource.BoxContentProvided,
          dimensions: { height: 1.5, length: 1.5, width: 1.5, unitOfMeasurement: CommonUnitOfMeasurement.In },
          quantity: 1,
          weight: { unit: CommonUnitOfWeight.Lb, value: 1.5 },
        },
      ],
      items: [
        {
          labelOwner: CommonLabelOwner.Seller,
          msku: "some example string",
          prepOwner: CommonPrepOwner.Seller,
          quantity: 1,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GenerateShipmentContentUpdatePreviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generateShipmentContentUpdatePreviews({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: {
    boxes: [
      {
        contentInformationSource: CommonBoxContentInformationSource.BoxContentProvided,
        dimensions: { height: 1.5, length: 1.5, width: 1.5, unitOfMeasurement: CommonUnitOfMeasurement.In },
        quantity: 1,
        weight: { unit: CommonUnitOfWeight.Lb, value: 1.5 },
      },
    ],
    items: [
      {
        labelOwner: CommonLabelOwner.Seller,
        msku: "some example string",
        prepOwner: CommonPrepOwner.Seller,
        quantity: 1,
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[GenerateShipmentContentUpdatePreviewsRequest](src/models/generate-shipment-content-update-previews-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generateShipmentContentUpdatePreviews(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GenerateShipmentContentUpdatePreviewsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generateShipmentContentUpdatePreviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GenerateShipmentContentUpdatePreviewsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateTransportationOptions(request: WfsInbound.GenerateTransportationOptionsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.GenerateTransportationOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.generateTransportationOptions({
    inboundPlanId: "some example string",
    body: {
      placementOptionId: "some example string",
      shipmentTransportationConfigurations: [
        {
          readyToShipWindow: { start: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
          shipmentId: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GenerateTransportationOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.generateTransportationOptions({
  inboundPlanId: "some example string",
  body: {
    placementOptionId: "some example string",
    shipmentTransportationConfigurations: [
      {
        readyToShipWindow: { start: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
        shipmentId: "some example string",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>body</code> | <code>[GenerateTransportationOptionsRequest](src/models/generate-transportation-options-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.generateTransportationOptions(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GenerateTransportationOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.generateTransportationOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.GenerateTransportationOptionsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeliveryChallanDocument(request: WfsInbound.GetDeliveryChallanDocumentRequest, options?: RequestOptions): ApiPromise&lt;GetDeliveryChallanDocumentResponse, WfsInbound.GetDeliveryChallanDocumentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getDeliveryChallanDocument({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type GetDeliveryChallanDocumentResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetDeliveryChallanDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getDeliveryChallanDocument({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDeliveryChallanDocumentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getDeliveryChallanDocument(request)`

- **OnSuccess**: <code>[GetDeliveryChallanDocumentResponse](src/models/get-delivery-challan-document-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetDeliveryChallanDocumentError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getDeliveryChallanDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDeliveryChallanDocumentResponse, WfsInbound.GetDeliveryChallanDocumentError&gt;</code>, with `result.value` of type <code>[GetDeliveryChallanDocumentResponse](src/models/get-delivery-challan-document-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInboundOperationStatus(request: WfsInbound.GetInboundOperationStatusRequest, options?: RequestOptions): ApiPromise&lt;CommonInboundOperationStatus, WfsInbound.GetInboundOperationStatusError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getInboundOperationStatus({ operationId: "some example string" });
  // TODO: Handle 'response' of type CommonInboundOperationStatus
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetInboundOperationStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getInboundOperationStatus({
  operationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommonInboundOperationStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operationId</code> | <code>string</code> | Identifier of an asynchronous operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getInboundOperationStatus(request)`

- **OnSuccess**: <code>[CommonInboundOperationStatus](src/models/common-inbound-operation-status.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetInboundOperationStatusError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getInboundOperationStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommonInboundOperationStatus, WfsInbound.GetInboundOperationStatusError&gt;</code>, with `result.value` of type <code>[CommonInboundOperationStatus](src/models/common-inbound-operation-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInboundPlan(request: WfsInbound.GetInboundPlanRequest, options?: RequestOptions): ApiPromise&lt;InboundPlan, WfsInbound.GetInboundPlanError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getInboundPlan({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type InboundPlan
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetInboundPlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getInboundPlan({ inboundPlanId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InboundPlan
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getInboundPlan(request)`

- **OnSuccess**: <code>[InboundPlan](src/models/inbound-plan.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetInboundPlanError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getInboundPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InboundPlan, WfsInbound.GetInboundPlanError&gt;</code>, with `result.value` of type <code>[InboundPlan](src/models/inbound-plan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSelfShipAppointmentSlots(request: WfsInbound.GetSelfShipAppointmentSlotsRequest, options?: RequestOptions): ApiPromise&lt;GetSelfShipAppointmentSlotsResponse, WfsInbound.GetSelfShipAppointmentSlotsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getSelfShipAppointmentSlots({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type GetSelfShipAppointmentSlotsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetSelfShipAppointmentSlotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getSelfShipAppointmentSlots({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSelfShipAppointmentSlotsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>pageSize?</code> | <code>number</code> | The number of self ship appointment slots to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getSelfShipAppointmentSlots(request)`

- **OnSuccess**: <code>[GetSelfShipAppointmentSlotsResponse](src/models/get-self-ship-appointment-slots-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetSelfShipAppointmentSlotsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getSelfShipAppointmentSlots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSelfShipAppointmentSlotsResponse, WfsInbound.GetSelfShipAppointmentSlotsError&gt;</code>, with `result.value` of type <code>[GetSelfShipAppointmentSlotsResponse](src/models/get-self-ship-appointment-slots-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShipment(request: WfsInbound.GetShipmentRequest, options?: RequestOptions): ApiPromise&lt;CommonShipment, WfsInbound.GetShipmentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getShipment({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type CommonShipment
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetShipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getShipment({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommonShipment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. A shipment contains the boxes and units being inbounded. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getShipment(request)`

- **OnSuccess**: <code>[CommonShipment](src/models/common-shipment.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetShipmentError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getShipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommonShipment, WfsInbound.GetShipmentError&gt;</code>, with `result.value` of type <code>[CommonShipment](src/models/common-shipment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShipmentContentUpdatePreview(request: WfsInbound.GetShipmentContentUpdatePreviewRequest, options?: RequestOptions): ApiPromise&lt;CommonContentUpdatePreview, WfsInbound.GetShipmentContentUpdatePreviewError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.getShipmentContentUpdatePreview({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    contentUpdatePreviewId: "some example string",
  });
  // TODO: Handle 'response' of type CommonContentUpdatePreview
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.GetShipmentContentUpdatePreviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.getShipmentContentUpdatePreview({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  contentUpdatePreviewId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommonContentUpdatePreview
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>contentUpdatePreviewId</code> | <code>string</code> | Identifier of a content update preview. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.getShipmentContentUpdatePreview(request)`

- **OnSuccess**: <code>[CommonContentUpdatePreview](src/models/common-content-update-preview.ts)</code>
- **OnError**: throws <code>[WfsInbound.GetShipmentContentUpdatePreviewError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.getShipmentContentUpdatePreview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommonContentUpdatePreview, WfsInbound.GetShipmentContentUpdatePreviewError&gt;</code>, with `result.value` of type <code>[CommonContentUpdatePreview](src/models/common-content-update-preview.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDeliveryWindowOptions(request: WfsInbound.ListDeliveryWindowOptionsRequest, options?: RequestOptions): ApiPromise&lt;ListDeliveryWindowOptionsResponse, WfsInbound.ListDeliveryWindowOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listDeliveryWindowOptions({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type ListDeliveryWindowOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListDeliveryWindowOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listDeliveryWindowOptions({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDeliveryWindowOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | The shipment to get delivery window options for. |
| <code>pageSize?</code> | <code>number</code> | The number of delivery window options to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listDeliveryWindowOptions(request)`

- **OnSuccess**: <code>[ListDeliveryWindowOptionsResponse](src/models/list-delivery-window-options-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListDeliveryWindowOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listDeliveryWindowOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDeliveryWindowOptionsResponse, WfsInbound.ListDeliveryWindowOptionsError&gt;</code>, with `result.value` of type <code>[ListDeliveryWindowOptionsResponse](src/models/list-delivery-window-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInboundPlanBoxes(request: WfsInbound.ListInboundPlanBoxesRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanBoxesResponse, WfsInbound.ListInboundPlanBoxesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listInboundPlanBoxes({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type ListInboundPlanBoxesResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListInboundPlanBoxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listInboundPlanBoxes({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanBoxesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of boxes to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listInboundPlanBoxes(request)`

- **OnSuccess**: <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListInboundPlanBoxesError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listInboundPlanBoxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanBoxesResponse, WfsInbound.ListInboundPlanBoxesError&gt;</code>, with `result.value` of type <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInboundPlanItems(request: WfsInbound.ListInboundPlanItemsRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanItemsResponse, WfsInbound.ListInboundPlanItemsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listInboundPlanItems({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type ListInboundPlanItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListInboundPlanItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listInboundPlanItems({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of items to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listInboundPlanItems(request)`

- **OnSuccess**: <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListInboundPlanItemsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listInboundPlanItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanItemsResponse, WfsInbound.ListInboundPlanItemsError&gt;</code>, with `result.value` of type <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInboundPlanPallets(request: WfsInbound.ListInboundPlanPalletsRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanPalletsResponse, WfsInbound.ListInboundPlanPalletsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listInboundPlanPallets({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type ListInboundPlanPalletsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListInboundPlanPalletsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listInboundPlanPallets({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanPalletsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of pallets to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listInboundPlanPallets(request)`

- **OnSuccess**: <code>[ListInboundPlanPalletsResponse](src/models/list-inbound-plan-pallets-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListInboundPlanPalletsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listInboundPlanPallets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanPalletsResponse, WfsInbound.ListInboundPlanPalletsError&gt;</code>, with `result.value` of type <code>[ListInboundPlanPalletsResponse](src/models/list-inbound-plan-pallets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInboundPlans(request: WfsInbound.ListInboundPlansRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlansResponse, WfsInbound.ListInboundPlansError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listInboundPlans();
  // TODO: Handle 'response' of type ListInboundPlansResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListInboundPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listInboundPlans().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlansResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | The number of inbound plans to return in the response matching the given query.<br>**Default**: 10 |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |
| <code>status?</code> | <code>string</code> | The status of an inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`. |
| <code>sortBy?</code> | <code>string</code> | Sort by field. |
| <code>sortOrder?</code> | <code>string</code> | The sort order. Possible values: `ASC`, `DESC`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listInboundPlans(request)`

- **OnSuccess**: <code>[ListInboundPlansResponse](src/models/list-inbound-plans-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListInboundPlansError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listInboundPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlansResponse, WfsInbound.ListInboundPlansError&gt;</code>, with `result.value` of type <code>[ListInboundPlansResponse](src/models/list-inbound-plans-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listItemComplianceDetails(request: WfsInbound.ListItemComplianceDetailsRequest, options?: RequestOptions): ApiPromise&lt;ListItemComplianceDetailsResponse, WfsInbound.ListItemComplianceDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listItemComplianceDetails({
    mskus: ["some example string"],
    marketplaceId: "some example string",
  });
  // TODO: Handle 'response' of type ListItemComplianceDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListItemComplianceDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listItemComplianceDetails({
  mskus: ["some example string"],
  marketplaceId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListItemComplianceDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mskus</code> | <code>string[]</code> | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. |
| <code>marketplaceId</code> | <code>string</code> | The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listItemComplianceDetails(request)`

- **OnSuccess**: <code>[ListItemComplianceDetailsResponse](src/models/list-item-compliance-details-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListItemComplianceDetailsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listItemComplianceDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListItemComplianceDetailsResponse, WfsInbound.ListItemComplianceDetailsError&gt;</code>, with `result.value` of type <code>[ListItemComplianceDetailsResponse](src/models/list-item-compliance-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPackingGroupBoxes(request: WfsInbound.ListPackingGroupBoxesRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanBoxesResponse, WfsInbound.ListPackingGroupBoxesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listPackingGroupBoxes({
    inboundPlanId: "some example string",
    packingGroupId: "some example string",
  });
  // TODO: Handle 'response' of type ListInboundPlanBoxesResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListPackingGroupBoxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listPackingGroupBoxes({
  inboundPlanId: "some example string",
  packingGroupId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanBoxesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>packingGroupId</code> | <code>string</code> | Identifier of a packing group. |
| <code>pageSize?</code> | <code>number</code> | The number of packing group boxes to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listPackingGroupBoxes(request)`

- **OnSuccess**: <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListPackingGroupBoxesError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listPackingGroupBoxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanBoxesResponse, WfsInbound.ListPackingGroupBoxesError&gt;</code>, with `result.value` of type <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPackingGroupItems(request: WfsInbound.ListPackingGroupItemsRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanItemsResponse, WfsInbound.ListPackingGroupItemsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listPackingGroupItems({
    inboundPlanId: "some example string",
    packingGroupId: "some example string",
  });
  // TODO: Handle 'response' of type ListInboundPlanItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListPackingGroupItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listPackingGroupItems({
  inboundPlanId: "some example string",
  packingGroupId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>packingGroupId</code> | <code>string</code> | Identifier of a packing group. |
| <code>pageSize?</code> | <code>number</code> | The number of packing group items to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listPackingGroupItems(request)`

- **OnSuccess**: <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListPackingGroupItemsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listPackingGroupItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanItemsResponse, WfsInbound.ListPackingGroupItemsError&gt;</code>, with `result.value` of type <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPackingOptions(request: WfsInbound.ListPackingOptionsRequest, options?: RequestOptions): ApiPromise&lt;ListPackingOptionsResponse, WfsInbound.ListPackingOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listPackingOptions({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type ListPackingOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListPackingOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listPackingOptions({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPackingOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of packing options to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listPackingOptions(request)`

- **OnSuccess**: <code>[ListPackingOptionsResponse](src/models/list-packing-options-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListPackingOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listPackingOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPackingOptionsResponse, WfsInbound.ListPackingOptionsError&gt;</code>, with `result.value` of type <code>[ListPackingOptionsResponse](src/models/list-packing-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlacementOptions(request: WfsInbound.ListPlacementOptionsRequest, options?: RequestOptions): ApiPromise&lt;ListPlacementOptionsResponse, WfsInbound.ListPlacementOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listPlacementOptions({ inboundPlanId: "some example string" });
  // TODO: Handle 'response' of type ListPlacementOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListPlacementOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listPlacementOptions({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPlacementOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of placement options to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listPlacementOptions(request)`

- **OnSuccess**: <code>[ListPlacementOptionsResponse](src/models/list-placement-options-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListPlacementOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listPlacementOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPlacementOptionsResponse, WfsInbound.ListPlacementOptionsError&gt;</code>, with `result.value` of type <code>[ListPlacementOptionsResponse](src/models/list-placement-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPrepDetails(request: WfsInbound.ListPrepDetailsRequest, options?: RequestOptions): ApiPromise&lt;ListPrepDetailsResponse, WfsInbound.ListPrepDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listPrepDetails({
    marketplaceId: "some example string",
    mskus: ["some example string"],
  });
  // TODO: Handle 'response' of type ListPrepDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListPrepDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listPrepDetails({
  marketplaceId: "some example string",
  mskus: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPrepDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceId</code> | <code>string</code> | The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids). |
| <code>mskus</code> | <code>string[]</code> | A list of merchant SKUs, a merchant-supplied identifier of a specific SKU. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listPrepDetails(request)`

- **OnSuccess**: <code>[ListPrepDetailsResponse](src/models/list-prep-details-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListPrepDetailsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listPrepDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPrepDetailsResponse, WfsInbound.ListPrepDetailsError&gt;</code>, with `result.value` of type <code>[ListPrepDetailsResponse](src/models/list-prep-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listShipmentBoxes(request: WfsInbound.ListShipmentBoxesRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanBoxesResponse, WfsInbound.ListShipmentBoxesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listShipmentBoxes({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type ListInboundPlanBoxesResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListShipmentBoxesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listShipmentBoxes({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanBoxesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
| <code>pageSize?</code> | <code>number</code> | The number of boxes to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listShipmentBoxes(request)`

- **OnSuccess**: <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListShipmentBoxesError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listShipmentBoxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanBoxesResponse, WfsInbound.ListShipmentBoxesError&gt;</code>, with `result.value` of type <code>[ListInboundPlanBoxesResponse](src/models/list-inbound-plan-boxes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listShipmentContentUpdatePreviews(request: WfsInbound.ListShipmentContentUpdatePreviewsRequest, options?: RequestOptions): ApiPromise&lt;ListShipmentContentUpdatePreviewsResponse, WfsInbound.ListShipmentContentUpdatePreviewsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listShipmentContentUpdatePreviews({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type ListShipmentContentUpdatePreviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListShipmentContentUpdatePreviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listShipmentContentUpdatePreviews({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListShipmentContentUpdatePreviewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>pageSize?</code> | <code>number</code> | The number of content update previews to return. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listShipmentContentUpdatePreviews(request)`

- **OnSuccess**: <code>[ListShipmentContentUpdatePreviewsResponse](src/models/list-shipment-content-update-previews-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListShipmentContentUpdatePreviewsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listShipmentContentUpdatePreviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListShipmentContentUpdatePreviewsResponse, WfsInbound.ListShipmentContentUpdatePreviewsError&gt;</code>, with `result.value` of type <code>[ListShipmentContentUpdatePreviewsResponse](src/models/list-shipment-content-update-previews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listShipmentItems(request: WfsInbound.ListShipmentItemsRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanItemsResponse, WfsInbound.ListShipmentItemsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listShipmentItems({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type ListInboundPlanItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListShipmentItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listShipmentItems({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanItemsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
| <code>pageSize?</code> | <code>number</code> | The number of items to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listShipmentItems(request)`

- **OnSuccess**: <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListShipmentItemsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listShipmentItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanItemsResponse, WfsInbound.ListShipmentItemsError&gt;</code>, with `result.value` of type <code>[ListInboundPlanItemsResponse](src/models/list-inbound-plan-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listShipmentPallets(request: WfsInbound.ListShipmentPalletsRequest, options?: RequestOptions): ApiPromise&lt;ListInboundPlanPalletsResponse, WfsInbound.ListShipmentPalletsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listShipmentPallets({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
  });
  // TODO: Handle 'response' of type ListInboundPlanPalletsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListShipmentPalletsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listShipmentPallets({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInboundPlanPalletsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>pageSize?</code> | <code>number</code> | The number of pallets to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listShipmentPallets(request)`

- **OnSuccess**: <code>[ListInboundPlanPalletsResponse](src/models/list-inbound-plan-pallets-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListShipmentPalletsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listShipmentPallets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInboundPlanPalletsResponse, WfsInbound.ListShipmentPalletsError&gt;</code>, with `result.value` of type <code>[ListInboundPlanPalletsResponse](src/models/list-inbound-plan-pallets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransportationOptions(request: WfsInbound.ListTransportationOptionsRequest, options?: RequestOptions): ApiPromise&lt;ListTransportationOptionsResponse, WfsInbound.ListTransportationOptionsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.listTransportationOptions({
    inboundPlanId: "some example string",
  });
  // TODO: Handle 'response' of type ListTransportationOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ListTransportationOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.listTransportationOptions({
  inboundPlanId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTransportationOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>pageSize?</code> | <code>number</code> | The number of transportation options to return in the response matching the given query. |
| <code>paginationToken?</code> | <code>string</code> | A token to fetch a certain page when there are multiple pages worth of results. |
| <code>placementOptionId?</code> | <code>string</code> | The placement option to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified. |
| <code>shipmentId?</code> | <code>string</code> | The shipment to get transportation options for. Either `placementOptionId` or `shipmentId` must be specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.listTransportationOptions(request)`

- **OnSuccess**: <code>[ListTransportationOptionsResponse](src/models/list-transportation-options-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ListTransportationOptionsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.listTransportationOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTransportationOptionsResponse, WfsInbound.ListTransportationOptionsError&gt;</code>, with `result.value` of type <code>[ListTransportationOptionsResponse](src/models/list-transportation-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleSelfShipAppointment(request: WfsInbound.ScheduleSelfShipAppointmentRequestParams, options?: RequestOptions): ApiPromise&lt;ScheduleSelfShipAppointmentResponse, WfsInbound.ScheduleSelfShipAppointmentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.scheduleSelfShipAppointment({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    slotId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScheduleSelfShipAppointmentResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.ScheduleSelfShipAppointmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.scheduleSelfShipAppointment({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  slotId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScheduleSelfShipAppointmentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>slotId</code> | <code>string</code> | An identifier to a self-ship appointment slot. |
| <code>body</code> | <code>[ScheduleSelfShipAppointmentRequest](src/models/schedule-self-ship-appointment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.scheduleSelfShipAppointment(request)`

- **OnSuccess**: <code>[ScheduleSelfShipAppointmentResponse](src/models/schedule-self-ship-appointment-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.ScheduleSelfShipAppointmentError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.scheduleSelfShipAppointment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScheduleSelfShipAppointmentResponse, WfsInbound.ScheduleSelfShipAppointmentError&gt;</code>, with `result.value` of type <code>[ScheduleSelfShipAppointmentResponse](src/models/schedule-self-ship-appointment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setPackingInformation(request: WfsInbound.SetPackingInformationRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.SetPackingInformationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.setPackingInformation({
    inboundPlanId: "some example string",
    body: {
      packageGroupings: [
        {
          boxes: [
            {
              contentInformationSource: CommonBoxContentInformationSource.BoxContentProvided,
              dimensions: {},
              quantity: 1,
              weight: {},
            },
          ],
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.SetPackingInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.setPackingInformation({
  inboundPlanId: "some example string",
  body: {
    packageGroupings: [
      {
        boxes: [
          {
            contentInformationSource: CommonBoxContentInformationSource.BoxContentProvided,
            dimensions: {},
            quantity: 1,
            weight: {},
          },
        ],
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>body</code> | <code>[SetPackingInformationRequest](src/models/set-packing-information-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.setPackingInformation(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.SetPackingInformationError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.setPackingInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.SetPackingInformationError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setPrepDetails(request: WfsInbound.SetPrepDetailsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.SetPrepDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.setPrepDetails({
    body: {
      marketplaceId: "some example string",
      mskuPrepDetails: [
        {
          msku: "some example string",
          prepCategory: CommonPrepCategory.Adult,
          prepTypes: [CommonPrepType.ItemBlackShrinkwrap],
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.SetPrepDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.setPrepDetails({
  body: {
    marketplaceId: "some example string",
    mskuPrepDetails: [
      {
        msku: "some example string",
        prepCategory: CommonPrepCategory.Adult,
        prepTypes: [CommonPrepType.ItemBlackShrinkwrap],
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SetPrepDetailsRequest](src/models/set-prep-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.setPrepDetails(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.SetPrepDetailsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.setPrepDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.SetPrepDetailsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInboundPlanName(request: WfsInbound.UpdateInboundPlanNameRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WfsInbound.UpdateInboundPlanNameError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.wfsInbound.updateInboundPlanName({
    inboundPlanId: "some example string",
    body: { name: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.UpdateInboundPlanNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.updateInboundPlanName({
  inboundPlanId: "some example string",
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>body</code> | <code>[UpdateInboundPlanNameRequest](src/models/update-inbound-plan-name-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.updateInboundPlanName(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WfsInbound.UpdateInboundPlanNameError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.updateInboundPlanName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WfsInbound.UpdateInboundPlanNameError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateItemComplianceDetails(request: WfsInbound.UpdateItemComplianceDetailsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.UpdateItemComplianceDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.updateItemComplianceDetails({
    marketplaceId: "some example string",
    body: { msku: "some example string", taxDetails: {} },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.UpdateItemComplianceDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.updateItemComplianceDetails({
  marketplaceId: "some example string",
  body: { msku: "some example string", taxDetails: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceId</code> | <code>string</code> | The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids). |
| <code>body</code> | <code>[UpdateItemComplianceDetailsRequest](src/models/update-item-compliance-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.updateItemComplianceDetails(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.UpdateItemComplianceDetailsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.updateItemComplianceDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.UpdateItemComplianceDetailsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShipmentName(request: WfsInbound.UpdateShipmentNameRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WfsInbound.UpdateShipmentNameError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.wfsInbound.updateShipmentName({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: { name: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.UpdateShipmentNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.updateShipmentName({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[UpdateShipmentNameRequest](src/models/update-shipment-name-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.updateShipmentName(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WfsInbound.UpdateShipmentNameError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.updateShipmentName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WfsInbound.UpdateShipmentNameError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShipmentSourceAddress(request: WfsInbound.UpdateShipmentSourceAddressRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.UpdateShipmentSourceAddressError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.updateShipmentSourceAddress({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: {
      address: {
        addressLine1: "some example string",
        city: "some example string",
        countryCode: "some example string",
        name: "some example string",
        phoneNumber: "some example string",
        postalCode: "some example string",
      },
    },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.UpdateShipmentSourceAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.updateShipmentSourceAddress({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: {
    address: {
      addressLine1: "some example string",
      city: "some example string",
      countryCode: "some example string",
      name: "some example string",
      phoneNumber: "some example string",
      postalCode: "some example string",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[UpdateShipmentSourceAddressRequest](src/models/update-shipment-source-address-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.updateShipmentSourceAddress(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.UpdateShipmentSourceAddressError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.updateShipmentSourceAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.UpdateShipmentSourceAddressError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShipmentTrackingDetails(request: WfsInbound.UpdateShipmentTrackingDetailsRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInboundPlanResponse, WfsInbound.UpdateShipmentTrackingDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInbound.updateShipmentTrackingDetails({
    inboundPlanId: "some example string",
    shipmentId: "some example string",
    body: { trackingDetails: {} },
  });
  // TODO: Handle 'response' of type CancelInboundPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInbound.UpdateShipmentTrackingDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInbound.updateShipmentTrackingDetails({
  inboundPlanId: "some example string",
  shipmentId: "some example string",
  body: { trackingDetails: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInboundPlanResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>inboundPlanId</code> | <code>string</code> | Identifier of an inbound plan. |
| <code>shipmentId</code> | <code>string</code> | Identifier of a shipment. |
| <code>body</code> | <code>[UpdateShipmentTrackingDetailsRequest](src/models/update-shipment-tracking-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInbound.updateShipmentTrackingDetails(request)`

- **OnSuccess**: <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: throws <code>[WfsInbound.UpdateShipmentTrackingDetailsError](src/resources/wfs-inbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInbound.updateShipmentTrackingDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInboundPlanResponse, WfsInbound.UpdateShipmentTrackingDetailsError&gt;</code>, with `result.value` of type <code>[CancelInboundPlanResponse](src/models/cancel-inbound-plan-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FulfillmentOutbound

> Source: [FulfillmentOutbound](src/resources/fulfillment-outbound.ts)

<details>
<summary><code>cancelFulfillmentOrder(request: FulfillmentOutbound.CancelFulfillmentOrderRequest, options?: RequestOptions): ApiPromise&lt;CancelFulfillmentOrderResponse, FulfillmentOutbound.CancelFulfillmentOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.cancelFulfillmentOrder({
    sellerFulfillmentOrderId: "some example string",
  });
  // TODO: Handle 'response' of type CancelFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.CancelFulfillmentOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.cancelFulfillmentOrder({
  sellerFulfillmentOrderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerFulfillmentOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.cancelFulfillmentOrder(request)`

- **OnSuccess**: <code>[CancelFulfillmentOrderResponse](src/models/cancel-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.CancelFulfillmentOrderError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.cancelFulfillmentOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelFulfillmentOrderResponse, FulfillmentOutbound.CancelFulfillmentOrderError&gt;</code>, with `result.value` of type <code>[CancelFulfillmentOrderResponse](src/models/cancel-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFulfillmentOrder(request: FulfillmentOutbound.CreateFulfillmentOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CreateFulfillmentOrderResponse, FulfillmentOutbound.CreateFulfillmentOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.createFulfillmentOrder({
    body: {
      sellerFulfillmentOrderId: "some example string",
      displayableOrderId: "some example string",
      displayableOrderDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      shippingSpeedCategory: ShippingSpeedCategory.Standard,
      destinationAddress: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      items: [
        {
          sellerSku: "some example string",
          sellerFulfillmentOrderItemId: "some example string",
          quantity: 1,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CreateFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.CreateFulfillmentOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.createFulfillmentOrder({
  body: {
    sellerFulfillmentOrderId: "some example string",
    displayableOrderId: "some example string",
    displayableOrderDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    shippingSpeedCategory: ShippingSpeedCategory.Standard,
    destinationAddress: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    items: [
      { sellerSku: "some example string", sellerFulfillmentOrderItemId: "some example string", quantity: 1 },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateFulfillmentOrderRequest](src/models/create-fulfillment-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.createFulfillmentOrder(request)`

- **OnSuccess**: <code>[CreateFulfillmentOrderResponse](src/models/create-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.CreateFulfillmentOrderError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.createFulfillmentOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateFulfillmentOrderResponse, FulfillmentOutbound.CreateFulfillmentOrderError&gt;</code>, with `result.value` of type <code>[CreateFulfillmentOrderResponse](src/models/create-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFulfillmentOrder(request: FulfillmentOutbound.GetFulfillmentOrderRequest, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderResponse, FulfillmentOutbound.GetFulfillmentOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.getFulfillmentOrder({
    sellerFulfillmentOrderId: "some example string",
  });
  // TODO: Handle 'response' of type GetFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.GetFulfillmentOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.getFulfillmentOrder({
  sellerFulfillmentOrderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerFulfillmentOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.getFulfillmentOrder(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.GetFulfillmentOrderError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.getFulfillmentOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderResponse, FulfillmentOutbound.GetFulfillmentOrderError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFulfillmentOrderShipments(request: FulfillmentOutbound.GetFulfillmentOrderShipmentsRequest, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderShipmentsResponse, FulfillmentOutbound.GetFulfillmentOrderShipmentsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.getFulfillmentOrderShipments({
    sellerFulfillmentOrderId: "some example string",
  });
  // TODO: Handle 'response' of type GetFulfillmentOrderShipmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.GetFulfillmentOrderShipmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.getFulfillmentOrderShipments({
  sellerFulfillmentOrderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderShipmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerFulfillmentOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.getFulfillmentOrderShipments(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.GetFulfillmentOrderShipmentsError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.getFulfillmentOrderShipments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderShipmentsResponse, FulfillmentOutbound.GetFulfillmentOrderShipmentsError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFulfillmentPreview(request: FulfillmentOutbound.GetFulfillmentPreviewRequestParams, options?: RequestOptions): ApiPromise&lt;GetFulfillmentPreviewResponse, FulfillmentOutbound.GetFulfillmentPreviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns estimated delivery dates, shipping costs, and available ship nodes
for a prospective fulfillment order. Use before creating the order.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.getFulfillmentPreview({
    body: {
      address: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      items: [
        {
          sellerSku: "some example string",
          quantity: 1,
          sellerFulfillmentOrderItemId: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type GetFulfillmentPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.GetFulfillmentPreviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.getFulfillmentPreview({
  body: {
    address: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    items: [
      { sellerSku: "some example string", quantity: 1, sellerFulfillmentOrderItemId: "some example string" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentPreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetFulfillmentPreviewRequest](src/models/get-fulfillment-preview-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.getFulfillmentPreview(request)`

- **OnSuccess**: <code>[GetFulfillmentPreviewResponse](src/models/get-fulfillment-preview-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.GetFulfillmentPreviewError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.getFulfillmentPreview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentPreviewResponse, FulfillmentOutbound.GetFulfillmentPreviewError&gt;</code>, with `result.value` of type <code>[GetFulfillmentPreviewResponse](src/models/get-fulfillment-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAllFulfillmentOrders(request: FulfillmentOutbound.ListAllFulfillmentOrdersRequest, options?: RequestOptions): ApiPromise&lt;ListAllFulfillmentOrdersResponse, FulfillmentOutbound.ListAllFulfillmentOrdersError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.listAllFulfillmentOrders();
  // TODO: Handle 'response' of type ListAllFulfillmentOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.ListAllFulfillmentOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.listAllFulfillmentOrders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAllFulfillmentOrdersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>queryStartDate?</code> | <code>Date</code> (date-time) | - |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.listAllFulfillmentOrders(request)`

- **OnSuccess**: <code>[ListAllFulfillmentOrdersResponse](src/models/list-all-fulfillment-orders-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.ListAllFulfillmentOrdersError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.listAllFulfillmentOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAllFulfillmentOrdersResponse, FulfillmentOutbound.ListAllFulfillmentOrdersError&gt;</code>, with `result.value` of type <code>[ListAllFulfillmentOrdersResponse](src/models/list-all-fulfillment-orders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFulfillmentOrder(request: FulfillmentOutbound.UpdateFulfillmentOrderRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateFulfillmentOrderResponse, FulfillmentOutbound.UpdateFulfillmentOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fulfillmentOutbound.updateFulfillmentOrder({
    sellerFulfillmentOrderId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type UpdateFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type FulfillmentOutbound.UpdateFulfillmentOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fulfillmentOutbound.updateFulfillmentOrder({
  sellerFulfillmentOrderId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerFulfillmentOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateFulfillmentOrderRequest](src/models/update-fulfillment-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fulfillmentOutbound.updateFulfillmentOrder(request)`

- **OnSuccess**: <code>[UpdateFulfillmentOrderResponse](src/models/update-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[FulfillmentOutbound.UpdateFulfillmentOrderError](src/resources/fulfillment-outbound.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fulfillmentOutbound.updateFulfillmentOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateFulfillmentOrderResponse, FulfillmentOutbound.UpdateFulfillmentOrderError&gt;</code>, with `result.value` of type <code>[UpdateFulfillmentOrderResponse](src/models/update-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Inventory

> Source: [Inventory](src/resources/inventory.ts)

<details>
<summary><code>bulkUpdateInventory(request: Inventory.BulkUpdateInventoryRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpdateInventoryResponse, Inventory.BulkUpdateInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk inventory update. Max 500 items per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.bulkUpdateInventory({
    body: { items: [{ sellerSku: "some example string", quantity: 1 }] },
  });
  // TODO: Handle 'response' of type BulkUpdateInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Inventory.BulkUpdateInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.bulkUpdateInventory({
  body: { items: [{ sellerSku: "some example string", quantity: 1 }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpdateInventoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpdateInventoryRequest](src/models/bulk-update-inventory-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.bulkUpdateInventory(request)`

- **OnSuccess**: <code>[BulkUpdateInventoryResponse](src/models/bulk-update-inventory-response.ts)</code>
- **OnError**: throws <code>[Inventory.BulkUpdateInventoryError](src/resources/inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventory.bulkUpdateInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpdateInventoryResponse, Inventory.BulkUpdateInventoryError&gt;</code>, with `result.value` of type <code>[BulkUpdateInventoryResponse](src/models/bulk-update-inventory-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInventoryForSku(request: Inventory.GetInventoryForSkuRequest, options?: RequestOptions): ApiPromise&lt;InventorySummary, Inventory.GetInventoryForSkuError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.getInventoryForSku({ sku: "some example string" });
  // TODO: Handle 'response' of type InventorySummary
} catch (err) {
  // TODO: Handle 'err' of type Inventory.GetInventoryForSkuError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.getInventoryForSku({ sku: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InventorySummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sku</code> | <code>string</code> | - |
| <code>shipNode?</code> | <code>string</code> | Walmart Ship Node ID (for multi-node sellers) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.getInventoryForSku(request)`

- **OnSuccess**: <code>[InventorySummary](src/models/inventory-summary.ts)</code>
- **OnError**: throws <code>[Inventory.GetInventoryForSkuError](src/resources/inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventory.getInventoryForSku(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InventorySummary, Inventory.GetInventoryForSkuError&gt;</code>, with `result.value` of type <code>[InventorySummary](src/models/inventory-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInventorySummaries(request: Inventory.GetInventorySummariesRequest, options?: RequestOptions): ApiPromise&lt;GetInventorySummariesResponse, Inventory.GetInventorySummariesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.getInventorySummaries();
  // TODO: Handle 'response' of type GetInventorySummariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Inventory.GetInventorySummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.getInventorySummaries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInventorySummariesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>skus?</code> | <code>string</code> | Comma-separated seller SKUs (max 50) |
| <code>shipNode?</code> | <code>string</code> | Walmart Ship Node ID (for multi-node sellers) |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.getInventorySummaries(request)`

- **OnSuccess**: <code>[GetInventorySummariesResponse](src/models/get-inventory-summaries-response.ts)</code>
- **OnError**: throws <code>[Inventory.GetInventorySummariesError](src/resources/inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventory.getInventorySummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInventorySummariesResponse, Inventory.GetInventorySummariesError&gt;</code>, with `result.value` of type <code>[GetInventorySummariesResponse](src/models/get-inventory-summaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInventoryForSku(request: Inventory.UpdateInventoryForSkuRequest, options?: RequestOptions): ApiPromise&lt;UpdateInventoryResponse, Inventory.UpdateInventoryForSkuError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.updateInventoryForSku({
    sku: "some example string",
    body: { quantity: 1 },
  });
  // TODO: Handle 'response' of type UpdateInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type Inventory.UpdateInventoryForSkuError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.updateInventoryForSku({
  sku: "some example string",
  body: { quantity: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateInventoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sku</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateInventoryRequest](src/models/update-inventory-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.updateInventoryForSku(request)`

- **OnSuccess**: <code>[UpdateInventoryResponse](src/models/update-inventory-response.ts)</code>
- **OnError**: throws <code>[Inventory.UpdateInventoryForSkuError](src/resources/inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventory.updateInventoryForSku(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateInventoryResponse, Inventory.UpdateInventoryForSkuError&gt;</code>, with `result.value` of type <code>[UpdateInventoryResponse](src/models/update-inventory-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WfsInventory

> Source: [WfsInventory](src/resources/wfs-inventory.ts)

<details>
<summary><code>getWfsInventoryItems(request: WfsInventory.GetWfsInventoryItemsRequest, options?: RequestOptions): ApiPromise&lt;GetWfsInventoryResponse, WfsInventory.GetWfsInventoryItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns inventory for items managed by Walmart Fulfillment Services (WFS).
Includes stock health, age buckets, and demand-intelligence fields
not available on seller-fulfilled inventory.

**Rate limit:** 300 items per page maximum.
Requests retrieving more than 100 items per page will receive
`X-RateLimit-Limit` and `X-RateLimit-Remaining` headers in the response.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wfsInventory.getWfsInventoryItems();
  // TODO: Handle 'response' of type GetWfsInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type WfsInventory.GetWfsInventoryItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wfsInventory.getWfsInventoryItems().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetWfsInventoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>skus?</code> | <code>string</code> | Comma-separated seller SKUs to filter (max 50). Omit to return all WFS items. |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wfsInventory.getWfsInventoryItems(request)`

- **OnSuccess**: <code>[GetWfsInventoryResponse](src/models/get-wfs-inventory-response.ts)</code>
- **OnError**: throws <code>[WfsInventory.GetWfsInventoryItemsError](src/resources/wfs-inventory.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wfsInventory.getWfsInventoryItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetWfsInventoryResponse, WfsInventory.GetWfsInventoryItemsError&gt;</code>, with `result.value` of type <code>[GetWfsInventoryResponse](src/models/get-wfs-inventory-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ListingsItems

> Source: [ListingsItems](src/resources/listings-items.ts)

<details>
<summary><code>deleteListingsItem(request: ListingsItems.DeleteListingsItemRequest, options?: RequestOptions): ApiPromise&lt;ListingsItemSubmissionResponse, ListingsItems.DeleteListingsItemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsItems.deleteListingsItem({
    sellerId: "some example string",
    sku: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type ListingsItemSubmissionResponse
} catch (err) {
  // TODO: Handle 'err' of type ListingsItems.DeleteListingsItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsItems.deleteListingsItem({
  sellerId: "some example string",
  sku: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListingsItemSubmissionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | Seller identifier |
| <code>sku</code> | <code>string</code> | Seller SKU identifying the listing |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>issueLocale?</code> | <code>string</code> | -<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsItems.deleteListingsItem(request)`

- **OnSuccess**: <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: throws <code>[ListingsItems.DeleteListingsItemError](src/resources/listings-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsItems.deleteListingsItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListingsItemSubmissionResponse, ListingsItems.DeleteListingsItemError&gt;</code>, with `result.value` of type <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListingsItem(request: ListingsItems.GetListingsItemRequest, options?: RequestOptions): ApiPromise&lt;Item1, ListingsItems.GetListingsItemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsItems.getListingsItem({
    sellerId: "some example string",
    sku: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Item1
} catch (err) {
  // TODO: Handle 'err' of type ListingsItems.GetListingsItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsItems.getListingsItem({
  sellerId: "some example string",
  sku: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Item1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | Seller identifier |
| <code>sku</code> | <code>string</code> | Seller SKU identifying the listing |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>issueLocale?</code> | <code>string</code> | Locale for issue messages (e.g. en_US)<br>**Default**: "en_US" |
| <code>includedData?</code> | <code>[IncludedDatum1](src/models/included-datum1.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsItems.getListingsItem(request)`

- **OnSuccess**: <code>[Item1](src/models/item1.ts)</code>
- **OnError**: throws <code>[ListingsItems.GetListingsItemError](src/resources/listings-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsItems.getListingsItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Item1, ListingsItems.GetListingsItemError&gt;</code>, with `result.value` of type <code>[Item1](src/models/item1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchListingsItem(request: ListingsItems.PatchListingsItemRequest, options?: RequestOptions): ApiPromise&lt;ListingsItemSubmissionResponse, ListingsItems.PatchListingsItemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsItems.patchListingsItem({
    sellerId: "some example string",
    sku: "some example string",
    marketplaceIds: ["some example string"],
    body: { productType: "some example string", patches: [{ op: Op.Add, path: "some example string" }] },
  });
  // TODO: Handle 'response' of type ListingsItemSubmissionResponse
} catch (err) {
  // TODO: Handle 'err' of type ListingsItems.PatchListingsItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsItems.patchListingsItem({
  sellerId: "some example string",
  sku: "some example string",
  marketplaceIds: ["some example string"],
  body: { productType: "some example string", patches: [{ op: Op.Add, path: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListingsItemSubmissionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | Seller identifier |
| <code>sku</code> | <code>string</code> | Seller SKU identifying the listing |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>issueLocale?</code> | <code>string</code> | -<br>**Default**: "en_US" |
| <code>body</code> | <code>[ListingsItemPatchRequest](src/models/listings-item-patch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsItems.patchListingsItem(request)`

- **OnSuccess**: <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: throws <code>[ListingsItems.PatchListingsItemError](src/resources/listings-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsItems.patchListingsItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListingsItemSubmissionResponse, ListingsItems.PatchListingsItemError&gt;</code>, with `result.value` of type <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putListingsItem(request: ListingsItems.PutListingsItemRequest, options?: RequestOptions): ApiPromise&lt;ListingsItemSubmissionResponse, ListingsItems.PutListingsItemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsItems.putListingsItem({
    sellerId: "some example string",
    sku: "some example string",
    marketplaceIds: ["some example string"],
    body: { productType: "some example string", attributes: {} },
  });
  // TODO: Handle 'response' of type ListingsItemSubmissionResponse
} catch (err) {
  // TODO: Handle 'err' of type ListingsItems.PutListingsItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsItems.putListingsItem({
  sellerId: "some example string",
  sku: "some example string",
  marketplaceIds: ["some example string"],
  body: { productType: "some example string", attributes: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListingsItemSubmissionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | Seller identifier |
| <code>sku</code> | <code>string</code> | Seller SKU identifying the listing |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>issueLocale?</code> | <code>string</code> | -<br>**Default**: "en_US" |
| <code>body</code> | <code>[ListingsItemPutRequest](src/models/listings-item-put-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsItems.putListingsItem(request)`

- **OnSuccess**: <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: throws <code>[ListingsItems.PutListingsItemError](src/resources/listings-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsItems.putListingsItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListingsItemSubmissionResponse, ListingsItems.PutListingsItemError&gt;</code>, with `result.value` of type <code>[ListingsItemSubmissionResponse](src/models/listings-item-submission-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchListingsItems(request: ListingsItems.SearchListingsItemsRequest, options?: RequestOptions): ApiPromise&lt;ItemSearchResults1, ListingsItems.SearchListingsItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the seller's listings items. Mirrors Amazon
SP-API `searchListingsItems` so an existing SP-API client can call the
seller-level collection endpoint (no SKU in the path) against v4.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsItems.searchListingsItems({
    sellerId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type ItemSearchResults1
} catch (err) {
  // TODO: Handle 'err' of type ListingsItems.SearchListingsItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsItems.searchListingsItems({
  sellerId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemSearchResults1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerId</code> | <code>string</code> | Seller identifier |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>includedData?</code> | <code>[IncludedDatum1](src/models/included-datum1.ts)[]</code> | - |
| <code>pageSize?</code> | <code>number</code> | Maximum number of results per page<br>**Default**: 10 |
| <code>pageToken?</code> | <code>string</code> | Opaque cursor returned by a previous call for the next page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsItems.searchListingsItems(request)`

- **OnSuccess**: <code>[ItemSearchResults1](src/models/item-search-results1.ts)</code>
- **OnError**: throws <code>[ListingsItems.SearchListingsItemsError](src/resources/listings-items.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsItems.searchListingsItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemSearchResults1, ListingsItems.SearchListingsItemsError&gt;</code>, with `result.value` of type <code>[ItemSearchResults1](src/models/item-search-results1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ListingsRestrictions

> Source: [ListingsRestrictions](src/resources/listings-restrictions.ts)

<details>
<summary><code>getListingsRestrictions(request: ListingsRestrictions.GetListingsRestrictionsRequest, options?: RequestOptions): ApiPromise&lt;RestrictionList, ListingsRestrictions.GetListingsRestrictionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns restrictions on listing an item for a given ASIN and seller.
A successful response does not guarantee the seller can list — check
the restrictions array.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listingsRestrictions.getListingsRestrictions({
    asin: "some example string",
    conditionType: ConditionType1.NewNew,
    sellerId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type RestrictionList
} catch (err) {
  // TODO: Handle 'err' of type ListingsRestrictions.GetListingsRestrictionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listingsRestrictions.getListingsRestrictions({
  asin: "some example string",
  conditionType: ConditionType1.NewNew,
  sellerId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RestrictionList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asin</code> | <code>string</code> | Walmart Item ID (maps to ASIN in Walmart Seller API) |
| <code>conditionType</code> | <code>[ConditionType1](src/models/condition-type1.ts)</code> | - |
| <code>sellerId</code> | <code>string</code> | - |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>reasonLocale?</code> | <code>string</code> | Locale for localized restriction reason messages<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listingsRestrictions.getListingsRestrictions(request)`

- **OnSuccess**: <code>[RestrictionList](src/models/restriction-list.ts)</code>
- **OnError**: throws <code>[ListingsRestrictions.GetListingsRestrictionsError](src/resources/listings-restrictions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listingsRestrictions.getListingsRestrictions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RestrictionList, ListingsRestrictions.GetListingsRestrictionsError&gt;</code>, with `result.value` of type <code>[RestrictionList](src/models/restriction-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MerchantFulfillment

> Source: [MerchantFulfillment](src/resources/merchant-fulfillment.ts)

<details>
<summary><code>cancelShipment(request: MerchantFulfillment.CancelShipmentRequest, options?: RequestOptions): ApiPromise&lt;CancelShipmentResponse, MerchantFulfillment.CancelShipmentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantFulfillment.cancelShipment({ shipmentId: "some example string" });
  // TODO: Handle 'response' of type CancelShipmentResponse
} catch (err) {
  // TODO: Handle 'err' of type MerchantFulfillment.CancelShipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantFulfillment.cancelShipment({
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelShipmentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shipmentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantFulfillment.cancelShipment(request)`

- **OnSuccess**: <code>[CancelShipmentResponse](src/models/cancel-shipment-response.ts)</code>
- **OnError**: throws <code>[MerchantFulfillment.CancelShipmentError](src/resources/merchant-fulfillment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantFulfillment.cancelShipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelShipmentResponse, MerchantFulfillment.CancelShipmentError&gt;</code>, with `result.value` of type <code>[CancelShipmentResponse](src/models/cancel-shipment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createShipment(request: MerchantFulfillment.CreateShipmentRequestParams, options?: RequestOptions): ApiPromise&lt;CreateShipmentResponse, MerchantFulfillment.CreateShipmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shipment for an order, purchases a shipping label from the
selected carrier, and returns the label for printing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantFulfillment.createShipment({
    body: {
      shipmentRequestDetails: {
        purchaseOrderId: "some example string",
        shipFromAddress: {
          name: "some example string",
          addressLine1: "some example string",
          city: "some example string",
          stateOrRegion: "some example string",
          postalCode: "some example string",
          countryCode: "some example string",
        },
        shipToAddress: {
          name: "some example string",
          addressLine1: "some example string",
          city: "some example string",
          stateOrRegion: "some example string",
          postalCode: "some example string",
          countryCode: "some example string",
        },
        packageDimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
        weight: { value: 1.5, unit: Unit1.Oz },
        shipDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        shippingServiceOptions: {},
      },
      shippingServiceId: "some example string",
    },
  });
  // TODO: Handle 'response' of type CreateShipmentResponse
} catch (err) {
  // TODO: Handle 'err' of type MerchantFulfillment.CreateShipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantFulfillment.createShipment({
  body: {
    shipmentRequestDetails: {
      purchaseOrderId: "some example string",
      shipFromAddress: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      shipToAddress: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      packageDimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
      weight: { value: 1.5, unit: Unit1.Oz },
      shipDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      shippingServiceOptions: {},
    },
    shippingServiceId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateShipmentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateShipmentRequest](src/models/create-shipment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantFulfillment.createShipment(request)`

- **OnSuccess**: <code>[CreateShipmentResponse](src/models/create-shipment-response.ts)</code>
- **OnError**: throws <code>[MerchantFulfillment.CreateShipmentError](src/resources/merchant-fulfillment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantFulfillment.createShipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateShipmentResponse, MerchantFulfillment.CreateShipmentError&gt;</code>, with `result.value` of type <code>[CreateShipmentResponse](src/models/create-shipment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEligibleShippingServices(request: MerchantFulfillment.GetEligibleShippingServicesRequestParams, options?: RequestOptions): ApiPromise&lt;GetEligibleShippingServicesResponse, MerchantFulfillment.GetEligibleShippingServicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns available carriers and rates for a shipment based on package
dimensions, weight, and destination address.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantFulfillment.getEligibleShippingServices({
    body: {
      shipmentRequestDetails: {
        purchaseOrderId: "some example string",
        shipFromAddress: {
          name: "some example string",
          addressLine1: "some example string",
          city: "some example string",
          stateOrRegion: "some example string",
          postalCode: "some example string",
          countryCode: "some example string",
        },
        shipToAddress: {
          name: "some example string",
          addressLine1: "some example string",
          city: "some example string",
          stateOrRegion: "some example string",
          postalCode: "some example string",
          countryCode: "some example string",
        },
        packageDimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
        weight: { value: 1.5, unit: Unit1.Oz },
        shipDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        shippingServiceOptions: {},
      },
    },
  });
  // TODO: Handle 'response' of type GetEligibleShippingServicesResponse
} catch (err) {
  // TODO: Handle 'err' of type MerchantFulfillment.GetEligibleShippingServicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantFulfillment.getEligibleShippingServices({
  body: {
    shipmentRequestDetails: {
      purchaseOrderId: "some example string",
      shipFromAddress: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      shipToAddress: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      packageDimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
      weight: { value: 1.5, unit: Unit1.Oz },
      shipDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      shippingServiceOptions: {},
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetEligibleShippingServicesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetEligibleShippingServicesRequest](src/models/get-eligible-shipping-services-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantFulfillment.getEligibleShippingServices(request)`

- **OnSuccess**: <code>[GetEligibleShippingServicesResponse](src/models/get-eligible-shipping-services-response.ts)</code>
- **OnError**: throws <code>[MerchantFulfillment.GetEligibleShippingServicesError](src/resources/merchant-fulfillment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantFulfillment.getEligibleShippingServices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetEligibleShippingServicesResponse, MerchantFulfillment.GetEligibleShippingServicesError&gt;</code>, with `result.value` of type <code>[GetEligibleShippingServicesResponse](src/models/get-eligible-shipping-services-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: MerchantFulfillment.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, MerchantFulfillment.GetLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the purchased shipping label for a shipment in the requested
file format for printing.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantFulfillment.getLabel({ shipmentId: "some example string" });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type MerchantFulfillment.GetLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantFulfillment.getLabel({ shipmentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shipmentId</code> | <code>string</code> | - |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | -<br>**Default**: "PDF" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantFulfillment.getLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[MerchantFulfillment.GetLabelError](src/resources/merchant-fulfillment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantFulfillment.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, MerchantFulfillment.GetLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShipment2(request: MerchantFulfillment.GetShipment2Request, options?: RequestOptions): ApiPromise&lt;GetShipmentResponse, MerchantFulfillment.GetShipment2Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantFulfillment.getShipment2({ shipmentId: "some example string" });
  // TODO: Handle 'response' of type GetShipmentResponse
} catch (err) {
  // TODO: Handle 'err' of type MerchantFulfillment.GetShipment2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantFulfillment.getShipment2({
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetShipmentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shipmentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantFulfillment.getShipment2(request)`

- **OnSuccess**: <code>[GetShipmentResponse](src/models/get-shipment-response.ts)</code>
- **OnError**: throws <code>[MerchantFulfillment.GetShipment2Error](src/resources/merchant-fulfillment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchantFulfillment.getShipment2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetShipmentResponse, MerchantFulfillment.GetShipment2Error&gt;</code>, with `result.value` of type <code>[GetShipmentResponse](src/models/get-shipment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>acknowledgeOrder(request: Orders.AcknowledgeOrderRequestParams, options?: RequestOptions): ApiPromise&lt;AcknowledgeOrderResponse, Orders.AcknowledgeOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.acknowledgeOrder({
    purchaseOrderId: "some example string",
    body: { orderLines: [{ lineNumber: "some example string" }] },
  });
  // TODO: Handle 'response' of type AcknowledgeOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.AcknowledgeOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.acknowledgeOrder({
  purchaseOrderId: "some example string",
  body: { orderLines: [{ lineNumber: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AcknowledgeOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AcknowledgeOrderRequest](src/models/acknowledge-order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.acknowledgeOrder(request)`

- **OnSuccess**: <code>[AcknowledgeOrderResponse](src/models/acknowledge-order-response.ts)</code>
- **OnError**: throws <code>[Orders.AcknowledgeOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.acknowledgeOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AcknowledgeOrderResponse, Orders.AcknowledgeOrderError&gt;</code>, with `result.value` of type <code>[AcknowledgeOrderResponse](src/models/acknowledge-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelOrderLines(request: Orders.CancelOrderLinesRequestParams, options?: RequestOptions): ApiPromise&lt;CancelOrderLinesResponse, Orders.CancelOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.cancelOrderLines({
    purchaseOrderId: "some example string",
    body: {
      orderLines: [
        { lineNumber: "some example string", cancellationReason: CancellationReason.CustomerRequested },
      ],
    },
  });
  // TODO: Handle 'response' of type CancelOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.CancelOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.cancelOrderLines({
  purchaseOrderId: "some example string",
  body: {
    orderLines: [
      { lineNumber: "some example string", cancellationReason: CancellationReason.CustomerRequested },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelOrderLinesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CancelOrderLinesRequest](src/models/cancel-order-lines-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.cancelOrderLines(request)`

- **OnSuccess**: <code>[CancelOrderLinesResponse](src/models/cancel-order-lines-response.ts)</code>
- **OnError**: throws <code>[Orders.CancelOrderLinesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.cancelOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelOrderLinesResponse, Orders.CancelOrderLinesError&gt;</code>, with `result.value` of type <code>[CancelOrderLinesResponse](src/models/cancel-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deliverOrderLines(request: Orders.DeliverOrderLinesRequestParams, options?: RequestOptions): ApiPromise&lt;DeliverOrderLinesResponse, Orders.DeliverOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records the terminal `Delivered` event for one or more order
lines, optionally with package-level proof-of-delivery
(tracking number, package number, delivery timestamp). This is
separated from `/shipment-status` because delivery is a
terminal state and carries different downstream semantics
(invoicing windows open, return windows start).

Walmart parity from gmp-orders-mono `deliverOrder`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.deliverOrderLines({
    purchaseOrderId: "some example string",
    body: { orderLines: [{ lineNumber: "some example string" }] },
  });
  // TODO: Handle 'response' of type DeliverOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.DeliverOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.deliverOrderLines({
  purchaseOrderId: "some example string",
  body: { orderLines: [{ lineNumber: "some example string" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeliverOrderLinesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[DeliverOrderLinesRequest](src/models/deliver-order-lines-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.deliverOrderLines(request)`

- **OnSuccess**: <code>[DeliverOrderLinesResponse](src/models/deliver-order-lines-response.ts)</code>
- **OnError**: throws <code>[Orders.DeliverOrderLinesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.deliverOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeliverOrderLinesResponse, Orders.DeliverOrderLinesError&gt;</code>, with `result.value` of type <code>[DeliverOrderLinesResponse](src/models/deliver-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrder(request: Orders.GetOrderRequest, options?: RequestOptions): ApiPromise&lt;GetOrderResponse, Orders.GetOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrder({ purchaseOrderId: "some example string" });
  // TODO: Handle 'response' of type GetOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrder({ purchaseOrderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | Walmart Purchase Order ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrder(request)`

- **OnSuccess**: <code>[GetOrderResponse](src/models/get-order-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderResponse, Orders.GetOrderError&gt;</code>, with `result.value` of type <code>[GetOrderResponse](src/models/get-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderAddress(request: Orders.GetOrderAddressRequest, options?: RequestOptions): ApiPromise&lt;GetOrderAddressResponse, Orders.GetOrderAddressError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ship-to postal address for a single purchase order.
Mirrors Amazon SP-API `getOrderAddress`. PII-restricted endpoint:
handlers are marked `@RestrictedData` server-side and the
response body must NOT be logged.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderAddress({ purchaseOrderId: "some example string" });
  // TODO: Handle 'response' of type GetOrderAddressResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderAddressError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderAddress({ purchaseOrderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderAddressResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderAddress(request)`

- **OnSuccess**: <code>[GetOrderAddressResponse](src/models/get-order-address-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderAddressError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderAddressResponse, Orders.GetOrderAddressError&gt;</code>, with `result.value` of type <code>[GetOrderAddressResponse](src/models/get-order-address-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderBuyerInfo(request: Orders.GetOrderBuyerInfoRequest, options?: RequestOptions): ApiPromise&lt;GetOrderBuyerInfoResponse, Orders.GetOrderBuyerInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the buyer's display name, email address, and an
anonymized phone (last 4 digits only). Mirrors Amazon SP-API
`getOrderBuyerInfo`. PII-restricted endpoint: handlers are
marked `@RestrictedData` server-side and request/response
bodies must NOT be logged.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderBuyerInfo({ purchaseOrderId: "some example string" });
  // TODO: Handle 'response' of type GetOrderBuyerInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderBuyerInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderBuyerInfo({
  purchaseOrderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderBuyerInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderBuyerInfo(request)`

- **OnSuccess**: <code>[GetOrderBuyerInfoResponse](src/models/get-order-buyer-info-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderBuyerInfoError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderBuyerInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderBuyerInfoResponse, Orders.GetOrderBuyerInfoError&gt;</code>, with `result.value` of type <code>[GetOrderBuyerInfoResponse](src/models/get-order-buyer-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderItems(request: Orders.GetOrderItemsRequest, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderShipmentsResponse, Orders.GetOrderItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the SKU / quantity / item-price projection of a single
purchase order. Mirrors Amazon SP-API `getOrderItems`. Not
PII-restricted: only product, quantity, and price are returned.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderItems({ purchaseOrderId: "some example string" });
  // TODO: Handle 'response' of type GetFulfillmentOrderShipmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderItems({ purchaseOrderId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderShipmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderItems(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderItemsError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderShipmentsResponse, Orders.GetOrderItemsError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrderRegulatedInfo(request: Orders.GetOrderRegulatedInfoRequest, options?: RequestOptions): ApiPromise&lt;GetOrderRegulatedInfoResponse, Orders.GetOrderRegulatedInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parity with Amazon SP-API Orders v0 `getOrderRegulatedInfo`. Returns
the verification requirements that apply to an order containing
regulated items (alcohol, tobacco, age-restricted goods): the
required ID-verification method, the minimum buyer age, the
regulated category, and any value-added services the order ships
with.

**Walmart OMS coverage gap .** The the underlying service Order
Lookup response does not currently surface regulated-item
metadata. Until upstream support lands (tracked separately as a
follow-up to this PR), every order returns the safe default
`regulatedCategory=NOT_REGULATED` with `requiredVerificationMethod=NONE`.
The endpoint shape and contract are stable; only the projected
values will become richer once OMS exposes the fields.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrderRegulatedInfo({ purchaseOrderId: "some example string" });
  // TODO: Handle 'response' of type GetOrderRegulatedInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderRegulatedInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrderRegulatedInfo({
  purchaseOrderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOrderRegulatedInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | Walmart Purchase Order ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrderRegulatedInfo(request)`

- **OnSuccess**: <code>[GetOrderRegulatedInfoResponse](src/models/get-order-regulated-info-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderRegulatedInfoError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrderRegulatedInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOrderRegulatedInfoResponse, Orders.GetOrderRegulatedInfoError&gt;</code>, with `result.value` of type <code>[GetOrderRegulatedInfoResponse](src/models/get-order-regulated-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrders(request: Orders.GetOrdersRequest, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderResponse, Orders.GetOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns orders matching the given filters. Orders are fulfilled by
sellers (WFS or seller-fulfilled). Maps to Walmart OMS order queries.

### Current limitations (roadmap)

The underlying the Orders service backend does not yet support
every filter declared below. Calls using any of the following will
return `400 Bad Request` with `code=FILTER_NOT_SUPPORTED` and a
human-readable `message` explaining the specific rejection. Phase
2
will lift these one-by-one as the underlying service adds capability.

| Filter | Status today | Reason |
|---|---|---|
| `createdAfter`, `createdBefore` | Rejected (400) | the Orders service does not accept date-range filters at the order level. |
| `lastUpdatedAfter` | Rejected (400) | the underlying service has no order-level update-date index. |
| `orderStatuses` with >1 value | Rejected (400) | the underlying service accepts one status per call; pass a single value or omit to match all. |
| `fulfillmentTypes` | Rejected (400) | the underlying service accepts one shipNodeType per call; multi-type fan-out is Phase 2. |

These parameters remain in the contract (rather than being removed)
so that SDKs generated today stay forward-compatible with the
the roadmap surface — your code keeps compiling, only the runtime
behaviour changes when Phase 2 ships. Until then, omit them or
handle the documented 400 gracefully. The `tools/loadgen-orders.sh --contract`
smoke sweep exercises the rejection contract on every run.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrders();
  // TODO: Handle 'response' of type GetFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.getOrders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | Filter orders created after this date-time (ISO 8601).<br><br>**the roadmap — not yet supported.** Sending this parameter today<br>returns `400 FILTER_NOT_SUPPORTED`; the Orders service does not<br>accept date-range filters at the order level. Tracked by<br>.<br>Retained in the contract so SDKs generated today stay<br>forward-compatible. |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | Filter orders created before this date-time (ISO 8601).<br><br>**the roadmap — not yet supported.** See `createdAfter` for the<br>rationale and the tracking ticket. |
| <code>lastUpdatedAfter?</code> | <code>Date</code> (date-time) | Filter orders updated after this date-time (ISO 8601).<br><br>**the roadmap — not yet supported.** Sending this parameter today<br>returns `400 FILTER_NOT_SUPPORTED`; the Orders service has no<br>order-level update-date index. Tracked by<br>. |
| <code>orderStatuses?</code> | <code>[OrderStatus](src/models/order-status.ts)[]</code> | Filter by order status.<br><br>**the roadmap limitation:** the Orders service accepts AT MOST ONE<br>status per call. Passing multiple values today returns `400<br>FILTER_NOT_SUPPORTED`; pass a single value or omit to match all.<br>Multi-status fan-out tracked by<br>. |
| <code>fulfillmentTypes?</code> | <code>[FulfillmentType](src/models/fulfillment-type.ts)[]</code> | Filter by fulfillment type.<br><br>**the roadmap — not yet supported.** Sending this parameter today<br>returns `400 FILTER_NOT_SUPPORTED`; the underlying service accepts one<br>shipNodeType per call and multi-type fan-out is Phase 2. Tracked<br>by . |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrders(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[Orders.GetOrdersError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderResponse, Orders.GetOrdersError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refundOrderLines(request: Orders.RefundOrderLinesRequestParams, options?: RequestOptions): ApiPromise&lt;RefundOrderLinesResponse, Orders.RefundOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Walmart-specific write — no Amazon SP-API Orders v0 equivalent
(Amazon refunds live in the Finance API). Mirrors
gmp-orders-mono's legacy `/partner-api/{market}/v3/orders/{po}/refund`
contract, simplified for the v4 surface: a flat `orderLines[]` with
per-line refund amount + reason instead of the legacy three-level
nesting (`orderLines → refunds → refundCharges`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.refundOrderLines({
    purchaseOrderId: "some example string",
    body: {
      orderLines: [{ lineNumber: "some example string", refundAmount: {}, refundType: RefundType.Return }],
    },
  });
  // TODO: Handle 'response' of type RefundOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.RefundOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.refundOrderLines({
  purchaseOrderId: "some example string",
  body: {
    orderLines: [{ lineNumber: "some example string", refundAmount: {}, refundType: RefundType.Return }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundOrderLinesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[RefundOrderLinesRequest](src/models/refund-order-lines-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.refundOrderLines(request)`

- **OnSuccess**: <code>[RefundOrderLinesResponse](src/models/refund-order-lines-response.ts)</code>
- **OnError**: throws <code>[Orders.RefundOrderLinesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.refundOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundOrderLinesResponse, Orders.RefundOrderLinesError&gt;</code>, with `result.value` of type <code>[RefundOrderLinesResponse](src/models/refund-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shipOrderLines(request: Orders.ShipOrderLinesRequestParams, options?: RequestOptions): ApiPromise&lt;ShipOrderLinesResponse, Orders.ShipOrderLinesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.shipOrderLines({
    purchaseOrderId: "some example string",
    body: {
      orderLines: [
        {
          lineNumber: "some example string",
          trackingInfo: {
            carrier: CarrierName.Ups,
            trackingNumber: "some example string",
            shippedDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ShipOrderLinesResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.ShipOrderLinesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.shipOrderLines({
  purchaseOrderId: "some example string",
  body: {
    orderLines: [
      {
        lineNumber: "some example string",
        trackingInfo: {
          carrier: CarrierName.Ups,
          trackingNumber: "some example string",
          shippedDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShipOrderLinesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[ShipOrderLinesRequest](src/models/ship-order-lines-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.shipOrderLines(request)`

- **OnSuccess**: <code>[ShipOrderLinesResponse](src/models/ship-order-lines-response.ts)</code>
- **OnError**: throws <code>[Orders.ShipOrderLinesError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.shipOrderLines(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShipOrderLinesResponse, Orders.ShipOrderLinesError&gt;</code>, with `result.value` of type <code>[ShipOrderLinesResponse](src/models/ship-order-lines-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shipOrderMultiPackage(request: Orders.ShipOrderMultiPackageRequest, options?: RequestOptions): ApiPromise&lt;MultiPackageShipResponse, Orders.ShipOrderMultiPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Walmart-specific extension of `/shipping`. Each package carries
its own tracking number, carrier, dimensions, and the order
lines it covers. Maps onto FMS's existing `shipments[]` envelope
(one FMS shipment per v4 package). Inspired by gmp-orders-mono's
`shipOrderV2` (multiPackageShipping) operation; we hoist
`packages[]` to the top level rather than nesting it under each
line so the request stays self-evidently package-oriented.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.shipOrderMultiPackage({
    purchaseOrderId: "some example string",
    body: {
      packages: [
        {
          trackingInfo: {
            carrier: CarrierName.Ups,
            trackingNumber: "some example string",
            shippedDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
          },
          lines: [{ lineNumber: "some example string" }],
        },
      ],
    },
  });
  // TODO: Handle 'response' of type MultiPackageShipResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.ShipOrderMultiPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.shipOrderMultiPackage({
  purchaseOrderId: "some example string",
  body: {
    packages: [
      {
        trackingInfo: {
          carrier: CarrierName.Ups,
          trackingNumber: "some example string",
          shippedDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
        },
        lines: [{ lineNumber: "some example string" }],
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiPackageShipResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MultiPackageShipRequest](src/models/multi-package-ship-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.shipOrderMultiPackage(request)`

- **OnSuccess**: <code>[MultiPackageShipResponse](src/models/multi-package-ship-response.ts)</code>
- **OnError**: throws <code>[Orders.ShipOrderMultiPackageError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.shipOrderMultiPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiPackageShipResponse, Orders.ShipOrderMultiPackageError&gt;</code>, with `result.value` of type <code>[MultiPackageShipResponse](src/models/multi-package-ship-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShipmentStatus(request: Orders.UpdateShipmentStatusRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateShipmentStatusResponse, Orders.UpdateShipmentStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a non-terminal shipment-lifecycle event for an order
(ready for pickup, picked up, in transit, out for delivery).
Use the dedicated `/deliver` endpoint for terminal delivery —
it carries proof-of-delivery semantics this endpoint does not.

Amazon SP-API Orders v0 `updateShipmentStatus` parity.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateShipmentStatus({
    purchaseOrderId: "some example string",
    body: {
      shipmentStatus: ShipmentStatus1.ReadyForPickup,
      orderLines: [{ lineNumber: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type UpdateShipmentStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.UpdateShipmentStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.updateShipmentStatus({
  purchaseOrderId: "some example string",
  body: {
    shipmentStatus: ShipmentStatus1.ReadyForPickup,
    orderLines: [{ lineNumber: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateShipmentStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateShipmentStatusRequest](src/models/update-shipment-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateShipmentStatus(request)`

- **OnSuccess**: <code>[UpdateShipmentStatusResponse](src/models/update-shipment-status-response.ts)</code>
- **OnError**: throws <code>[Orders.UpdateShipmentStatusError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.updateShipmentStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateShipmentStatusResponse, Orders.UpdateShipmentStatusError&gt;</code>, with `result.value` of type <code>[UpdateShipmentStatusResponse](src/models/update-shipment-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVerificationStatus(request: Orders.UpdateVerificationStatusRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateVerificationStatusResponse, Orders.UpdateVerificationStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parity with Amazon SP-API Orders v0 `updateVerificationStatus`. The
seller calls this after delivering a regulated-item order to
record whether the buyer's identity / age was verified at the
doorstep. An APPROVED status releases the order for settlement;
REJECTED requires a `rejectionReason` and triggers downstream
return-processing.

Gated by the CCM-managed `orders.features.regulatedInfoEnabled`
kill-switch (live-refreshable, parity with the cancel kill-switch).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateVerificationStatus({
    purchaseOrderId: "some example string",
    body: { verificationStatus: VerificationStatus.Approved },
  });
  // TODO: Handle 'response' of type UpdateVerificationStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.UpdateVerificationStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.updateVerificationStatus({
  purchaseOrderId: "some example string",
  body: { verificationStatus: VerificationStatus.Approved },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateVerificationStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | Walmart Purchase Order ID |
| <code>body</code> | <code>[UpdateVerificationStatusRequest](src/models/update-verification-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateVerificationStatus(request)`

- **OnSuccess**: <code>[UpdateVerificationStatusResponse](src/models/update-verification-status-response.ts)</code>
- **OnError**: throws <code>[Orders.UpdateVerificationStatusError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.updateVerificationStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateVerificationStatusResponse, Orders.UpdateVerificationStatusError&gt;</code>, with `result.value` of type <code>[UpdateVerificationStatusResponse](src/models/update-verification-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Settlement

> Source: [Settlement](src/resources/settlement.ts)

<details>
<summary><code>listSettlementDetails(request: Settlement.ListSettlementDetailsRequest, options?: RequestOptions): ApiPromise&lt;SettlementDetailsResponse, Settlement.ListSettlementDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns paginated settlement transaction detail for the given partner and report date.
Contains PII (purchase order IDs). Delegates to mp-payment-reporting
GET /v3/report/reconreport/v1/getJson with offset-based pagination.
nextToken is a Base64-encoded offset into the report file.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlement.listSettlementDetails({
    partnerId: "some example string",
    reportDate: "some example string",
  });
  // TODO: Handle 'response' of type SettlementDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Settlement.ListSettlementDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlement.listSettlementDetails({
  partnerId: "some example string",
  reportDate: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementDetailsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |
| <code>reportDate</code> | <code>string</code> | Report date in MMddyyyy format (e.g. 06172026) |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>nextToken?</code> | <code>string</code> | Opaque cursor from a prior response; omit for first page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlement.listSettlementDetails(request)`

- **OnSuccess**: <code>[SettlementDetailsResponse](src/models/settlement-details-response.ts)</code>
- **OnError**: throws <code>[Settlement.ListSettlementDetailsError](src/resources/settlement.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlement.listSettlementDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementDetailsResponse, Settlement.ListSettlementDetailsError&gt;</code>, with `result.value` of type <code>[SettlementDetailsResponse](src/models/settlement-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSettlementPeriods(request: Settlement.ListSettlementPeriodsRequest, options?: RequestOptions): ApiPromise&lt;SettlementPeriodsResponse, Settlement.ListSettlementPeriodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns available settlement period dates for the authenticated seller.
Delegates to mp-payment-reporting GET /v3/report/reconreport/v1/availableReconFiles.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlement.listSettlementPeriods();
  // TODO: Handle 'response' of type SettlementPeriodsResponse
} catch (err) {
  // TODO: Handle 'err' of type Settlement.ListSettlementPeriodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlement.listSettlementPeriods().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementPeriodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>nextToken?</code> | <code>string</code> | Opaque cursor from a prior response; omit for first page |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlement.listSettlementPeriods(request)`

- **OnSuccess**: <code>[SettlementPeriodsResponse](src/models/settlement-periods-response.ts)</code>
- **OnError**: throws <code>[Settlement.ListSettlementPeriodsError](src/resources/settlement.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlement.listSettlementPeriods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementPeriodsResponse, Settlement.ListSettlementPeriodsError&gt;</code>, with `result.value` of type <code>[SettlementPeriodsResponse](src/models/settlement-periods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTransactions(request: Settlement.SearchTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionSearchResponse, Settlement.SearchTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of payment transactions for the authenticated seller
filtered by optional date range. Contains PII (purchase order IDs).
Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlement.searchTransactions();
  // TODO: Handle 'response' of type TransactionSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Settlement.SearchTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlement.searchTransactions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>nextToken?</code> | <code>string</code> | Opaque cursor from a prior response; omit for first page |
| <code>postedAfter?</code> | <code>Date</code> (date-time) | - |
| <code>postedBefore?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlement.searchTransactions(request)`

- **OnSuccess**: <code>[TransactionSearchResponse](src/models/transaction-search-response.ts)</code>
- **OnError**: throws <code>[Settlement.SearchTransactionsError](src/resources/settlement.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlement.searchTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionSearchResponse, Settlement.SearchTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionSearchResponse](src/models/transaction-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reconciliation

> Source: [Reconciliation](src/resources/reconciliation.ts)

<details>
<summary><code>checkDownloadReportByPeriod(request: Reconciliation.CheckDownloadReportByPeriodRequest, options?: RequestOptions): ApiPromise&lt;ReportAvailabilityResponse, Reconciliation.CheckDownloadReportByPeriodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks which reconciliation report versions (legacy, v1/WFS) are available
for a given partner and date. Delegates to mp-payment-reporting
GET /v3/report/reconreport/reconReportAvailability.
Note: the upstream date param is named `date` (not `reportDate`).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reconciliation.checkDownloadReportByPeriod({
    partnerId: "some example string",
    date: "2024-01-15",
  });
  // TODO: Handle 'response' of type ReportAvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type Reconciliation.CheckDownloadReportByPeriodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reconciliation.checkDownloadReportByPeriod({
  partnerId: "some example string",
  date: "2024-01-15",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportAvailabilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |
| <code>date</code> | <code>string</code> (date) | Report date in yyyy-MM-dd format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reconciliation.checkDownloadReportByPeriod(request)`

- **OnSuccess**: <code>[ReportAvailabilityResponse](src/models/report-availability-response.ts)</code>
- **OnError**: throws <code>[Reconciliation.CheckDownloadReportByPeriodError](src/resources/reconciliation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reconciliation.checkDownloadReportByPeriod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportAvailabilityResponse, Reconciliation.CheckDownloadReportByPeriodError&gt;</code>, with `result.value` of type <code>[ReportAvailabilityResponse](src/models/report-availability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadReconciliationReport(request: Reconciliation.DownloadReconciliationReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Reconciliation.DownloadReconciliationReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads a reconciliation report ZIP for the given partner and date.
Delegates to mp-payment-reporting GET /v1/mt/report/reconreport/reconFile (Azure MT storage).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reconciliation.downloadReconciliationReport({
    partnerId: "some example string",
    reportDate: "some example string",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Reconciliation.DownloadReconciliationReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reconciliation.downloadReconciliationReport({
  partnerId: "some example string",
  reportDate: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |
| <code>reportDate</code> | <code>string</code> | Report date in MMddyyyy format (e.g. 06172026) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reconciliation.downloadReconciliationReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Reconciliation.DownloadReconciliationReportError](src/resources/reconciliation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reconciliation.downloadReconciliationReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Reconciliation.DownloadReconciliationReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReconciliationDates(request: Reconciliation.ListReconciliationDatesRequest, options?: RequestOptions): ApiPromise&lt;ReportAvailabilityResponse, Reconciliation.ListReconciliationDatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the set of available reconciliation report dates for a partner.
Delegates to mp-payment-reporting GET /v3/report/reconreport/availableReconFiles.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reconciliation.listReconciliationDates({ partnerId: "some example string" });
  // TODO: Handle 'response' of type ReportAvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type Reconciliation.ListReconciliationDatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reconciliation.listReconciliationDates({
  partnerId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportAvailabilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reconciliation.listReconciliationDates(request)`

- **OnSuccess**: <code>[ReportAvailabilityResponse](src/models/report-availability-response.ts)</code>
- **OnError**: throws <code>[Reconciliation.ListReconciliationDatesError](src/resources/reconciliation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reconciliation.listReconciliationDates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportAvailabilityResponse, Reconciliation.ListReconciliationDatesError&gt;</code>, with `result.value` of type <code>[ReportAvailabilityResponse](src/models/report-availability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>cancelReport(request: Reports.CancelReportRequest, options?: RequestOptions): ApiPromise&lt;CancelReportResponse, Reports.CancelReportError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.cancelReport({ reportId: "some example string" });
  // TODO: Handle 'response' of type CancelReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.CancelReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.cancelReport({ reportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.cancelReport(request)`

- **OnSuccess**: <code>[CancelReportResponse](src/models/cancel-report-response.ts)</code>
- **OnError**: throws <code>[Reports.CancelReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.cancelReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelReportResponse, Reports.CancelReportError&gt;</code>, with `result.value` of type <code>[CancelReportResponse](src/models/cancel-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReport(request: Reports.CreateReportRequest, options?: RequestOptions): ApiPromise&lt;CreateReportResponse, Reports.CreateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a report request. Poll `GET /reports/{reportId}` for status.
Report type taxonomy TBD — coordinate with Pod 5 for financial reports.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.createReport({ body: { reportType: ReportType.Item } });
  // TODO: Handle 'response' of type CreateReportResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.CreateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.createReport({ body: { reportType: ReportType.Item } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateReportSpecification](src/models/create-report-specification.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.createReport(request)`

- **OnSuccess**: <code>[CreateReportResponse](src/models/create-report-response.ts)</code>
- **OnError**: throws <code>[Reports.CreateReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.createReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateReportResponse, Reports.CreateReportError&gt;</code>, with `result.value` of type <code>[CreateReportResponse](src/models/create-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadNewReport(request: Reports.DownloadNewReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Reports.DownloadNewReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the current-format settlement summary report ZIP.
Delegates to mp-payment-reporting GET /v3/report/reconreport/v1/reconFile (Swift v1 storage).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.downloadNewReport({
    partnerId: "some example string",
    reportDate: "some example string",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Reports.DownloadNewReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.downloadNewReport({
  partnerId: "some example string",
  reportDate: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |
| <code>reportDate</code> | <code>string</code> | Report date in MMddyyyy format (e.g. 06172026) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.downloadNewReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Reports.DownloadNewReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.downloadNewReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Reports.DownloadNewReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadOldReport(request: Reports.DownloadOldReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Reports.DownloadOldReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads the legacy-format settlement summary report ZIP.
Delegates to mp-payment-reporting GET /v3/report/reconreport/reconFile (legacy Swift storage).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.downloadOldReport({
    partnerId: "some example string",
    reportDate: "some example string",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Reports.DownloadOldReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.downloadOldReport({
  partnerId: "some example string",
  reportDate: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>partnerId</code> | <code>string</code> | Numeric partner/seller ID |
| <code>reportDate</code> | <code>string</code> | Report date in MMddyyyy format (e.g. 06172026) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.downloadOldReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Reports.DownloadOldReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.downloadOldReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Reports.DownloadOldReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReport(request: Reports.GetReportRequest, options?: RequestOptions): ApiPromise&lt;Report, Reports.GetReportError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReport({ reportId: "some example string" });
  // TODO: Handle 'response' of type Report
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReport({ reportId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Report
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReport(request)`

- **OnSuccess**: <code>[Report](src/models/report.ts)</code>
- **OnError**: throws <code>[Reports.GetReportError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Report, Reports.GetReportError&gt;</code>, with `result.value` of type <code>[Report](src/models/report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportDocument(request: Reports.GetReportDocumentRequest, options?: RequestOptions): ApiPromise&lt;ReportDocument, Reports.GetReportDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pre-signed URL for downloading the completed report.
Do not log the pre-signed URL.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReportDocument({ reportDocumentId: "some example string" });
  // TODO: Handle 'response' of type ReportDocument
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReportDocument({
  reportDocumentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportDocument
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportDocumentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReportDocument(request)`

- **OnSuccess**: <code>[ReportDocument](src/models/report-document.ts)</code>
- **OnError**: throws <code>[Reports.GetReportDocumentError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReportDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportDocument, Reports.GetReportDocumentError&gt;</code>, with `result.value` of type <code>[ReportDocument](src/models/report-document.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReports(request: Reports.GetReportsRequest, options?: RequestOptions): ApiPromise&lt;GetReportsResponse, Reports.GetReportsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getReports();
  // TODO: Handle 'response' of type GetReportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reports.GetReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports.getReports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetReportsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportTypes?</code> | <code>[ReportType1](src/models/report-type1.ts)[]</code> | Filter by report type. Values are Walmart Partner Reporting Platform enum names. Runtime availability is CCM-controlled; consult PRP docs for current PROD-enabled types. |
| <code>processingStatuses?</code> | <code>[ProcessingStatus](src/models/processing-status.ts)[]</code> | - |
| <code>createdSince?</code> | <code>Date</code> (date-time) | - |
| <code>createdUntil?</code> | <code>Date</code> (date-time) | - |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>nextToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getReports(request)`

- **OnSuccess**: <code>[GetReportsResponse](src/models/get-reports-response.ts)</code>
- **OnError**: throws <code>[Reports.GetReportsError](src/resources/reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reports.getReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetReportsResponse, Reports.GetReportsError&gt;</code>, with `result.value` of type <code>[GetReportsResponse](src/models/get-reports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](src/resources/payouts.ts)

<details>
<summary><code>configureAutoPayout(request: Payouts.ConfigureAutoPayoutRequest, options?: RequestOptions): ApiPromise&lt;PayoutStatusResponse, Payouts.ConfigureAutoPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables automatic scheduled payouts for the authenticated seller.
When enabled, payouts are triggered automatically on the standard settlement
cadence. Returns updated payout status. Requires disbursements:write scope.
Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.configureAutoPayout({ body: { enabled: true } });
  // TODO: Handle 'response' of type PayoutStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Payouts.ConfigureAutoPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.configureAutoPayout({ body: { enabled: true } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DisbursementsV4PaymentAutoPayoutRequest](src/models/disbursements-v4-payment-auto-payout-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.configureAutoPayout(request)`

- **OnSuccess**: <code>[PayoutStatusResponse](src/models/payout-status-response.ts)</code>
- **OnError**: throws <code>[Payouts.ConfigureAutoPayoutError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.configureAutoPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutStatusResponse, Payouts.ConfigureAutoPayoutError&gt;</code>, with `result.value` of type <code>[PayoutStatusResponse](src/models/payout-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAnnualStatementOpts(options?: RequestOptions): ApiPromise&lt;AnnualStatementOptsResponse, Payouts.GetAnnualStatementOptsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the authenticated seller is opted in to annual statement
generation and the current statement year. Delegates to GMPPaymentsPlatform
GET /annualStatementOpts/{partnerId}.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.getAnnualStatementOpts();
  // TODO: Handle 'response' of type AnnualStatementOptsResponse
} catch (err) {
  // TODO: Handle 'err' of type Payouts.GetAnnualStatementOptsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.getAnnualStatementOpts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnnualStatementOptsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.getAnnualStatementOpts()`

- **OnSuccess**: <code>[AnnualStatementOptsResponse](src/models/annual-statement-opts-response.ts)</code>
- **OnError**: throws <code>[Payouts.GetAnnualStatementOptsError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.getAnnualStatementOpts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnnualStatementOptsResponse, Payouts.GetAnnualStatementOptsError&gt;</code>, with `result.value` of type <code>[AnnualStatementOptsResponse](src/models/annual-statement-opts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFasterPayoutEligibility(options?: RequestOptions): ApiPromise&lt;FasterPayoutEligibilityResponse, Payouts.GetFasterPayoutEligibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the authenticated seller is eligible for an on-demand
faster payout, along with the approved amount and any ineligibility reason.
Delegates to GMPPaymentsPlatform GET /fasterPayout/eligibility/{partnerId}.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.getFasterPayoutEligibility();
  // TODO: Handle 'response' of type FasterPayoutEligibilityResponse
} catch (err) {
  // TODO: Handle 'err' of type Payouts.GetFasterPayoutEligibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.getFasterPayoutEligibility().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FasterPayoutEligibilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.getFasterPayoutEligibility()`

- **OnSuccess**: <code>[FasterPayoutEligibilityResponse](src/models/faster-payout-eligibility-response.ts)</code>
- **OnError**: throws <code>[Payouts.GetFasterPayoutEligibilityError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.getFasterPayoutEligibility().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FasterPayoutEligibilityResponse, Payouts.GetFasterPayoutEligibilityError&gt;</code>, with `result.value` of type <code>[FasterPayoutEligibilityResponse](src/models/faster-payout-eligibility-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentStatus(options?: RequestOptions): ApiPromise&lt;PayoutStatusResponse, Payouts.GetPaymentStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current payout status for the authenticated seller, including
scheduled payout date, amount, and lifecycle state (Pending, Processing,
Completed, Failed, OnHold). Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.getPaymentStatus();
  // TODO: Handle 'response' of type PayoutStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Payouts.GetPaymentStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.getPaymentStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayoutStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.getPaymentStatus()`

- **OnSuccess**: <code>[PayoutStatusResponse](src/models/payout-status-response.ts)</code>
- **OnError**: throws <code>[Payouts.GetPaymentStatusError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.getPaymentStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayoutStatusResponse, Payouts.GetPaymentStatusError&gt;</code>, with `result.value` of type <code>[PayoutStatusResponse](src/models/payout-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiateFasterPayout(options?: RequestOptions): ApiPromise&lt;InitiatePayoutResponse, Payouts.InitiateFasterPayoutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers an immediate on-demand payout for the authenticated seller,
bypassing the standard settlement schedule. Returns the payout ID and
initial status. Requires disbursements:write scope.
Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.initiateFasterPayout();
  // TODO: Handle 'response' of type InitiatePayoutResponse
} catch (err) {
  // TODO: Handle 'err' of type Payouts.InitiateFasterPayoutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.initiateFasterPayout().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitiatePayoutResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.initiateFasterPayout()`

- **OnSuccess**: <code>[InitiatePayoutResponse](src/models/initiate-payout-response.ts)</code>
- **OnError**: throws <code>[Payouts.InitiateFasterPayoutError](src/resources/payouts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payouts.initiateFasterPayout().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitiatePayoutResponse, Payouts.InitiateFasterPayoutError&gt;</code>, with `result.value` of type <code>[InitiatePayoutResponse](src/models/initiate-payout-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Disputes

> Source: [Disputes](src/resources/disputes.ts)

<details>
<summary><code>checkDisputeEligibility(options?: RequestOptions): ApiPromise&lt;DisputeEligibilityResponse, Disputes.CheckDisputeEligibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether the authenticated seller is eligible to raise a payment
dispute and, if not, the reason for ineligibility. Delegates to
GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.checkDisputeEligibility();
  // TODO: Handle 'response' of type DisputeEligibilityResponse
} catch (err) {
  // TODO: Handle 'err' of type Disputes.CheckDisputeEligibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.checkDisputeEligibility().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputeEligibilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.checkDisputeEligibility()`

- **OnSuccess**: <code>[DisputeEligibilityResponse](src/models/dispute-eligibility-response.ts)</code>
- **OnError**: throws <code>[Disputes.CheckDisputeEligibilityError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.checkDisputeEligibility().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputeEligibilityResponse, Disputes.CheckDisputeEligibilityError&gt;</code>, with `result.value` of type <code>[DisputeEligibilityResponse](src/models/dispute-eligibility-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FinalPayout

> Source: [FinalPayout](src/resources/final-payout.ts)

<details>
<summary><code>getFinalPayoutCaseStatus(options?: RequestOptions): ApiPromise&lt;FinalPayoutCaseStatusResponse, FinalPayout.GetFinalPayoutCaseStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state, case ID, and payable amount for the authenticated
seller's final payout case (used when a seller account is being offboarded).
Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finalPayout.getFinalPayoutCaseStatus();
  // TODO: Handle 'response' of type FinalPayoutCaseStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type FinalPayout.GetFinalPayoutCaseStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finalPayout.getFinalPayoutCaseStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FinalPayoutCaseStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finalPayout.getFinalPayoutCaseStatus()`

- **OnSuccess**: <code>[FinalPayoutCaseStatusResponse](src/models/final-payout-case-status-response.ts)</code>
- **OnError**: throws <code>[FinalPayout.GetFinalPayoutCaseStatusError](src/resources/final-payout.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finalPayout.getFinalPayoutCaseStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FinalPayoutCaseStatusResponse, FinalPayout.GetFinalPayoutCaseStatusError&gt;</code>, with `result.value` of type <code>[FinalPayoutCaseStatusResponse](src/models/final-payout-case-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFinalPayoutCaseStatus(request: FinalPayout.UpdateFinalPayoutCaseStatusRequest, options?: RequestOptions): ApiPromise&lt;FinalPayoutCaseStatusResponse, FinalPayout.UpdateFinalPayoutCaseStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transitions the authenticated seller's final payout case to Resolved or
Closed, optionally including resolution notes. Requires disbursements:write
scope. Delegates to GMPPaymentsPlatform (Phase 5).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finalPayout.updateFinalPayoutCaseStatus({
    body: { status: Status3.Resolved },
  });
  // TODO: Handle 'response' of type FinalPayoutCaseStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type FinalPayout.UpdateFinalPayoutCaseStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finalPayout.updateFinalPayoutCaseStatus({
  body: { status: Status3.Resolved },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FinalPayoutCaseStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DisbursementsV4FinalPayoutCaseUpdateStatusRequest](src/models/disbursements-v4-final-payout-case-update-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finalPayout.updateFinalPayoutCaseStatus(request)`

- **OnSuccess**: <code>[FinalPayoutCaseStatusResponse](src/models/final-payout-case-status-response.ts)</code>
- **OnError**: throws <code>[FinalPayout.UpdateFinalPayoutCaseStatusError](src/resources/final-payout.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finalPayout.updateFinalPayoutCaseStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FinalPayoutCaseStatusResponse, FinalPayout.UpdateFinalPayoutCaseStatusError&gt;</code>, with `result.value` of type <code>[FinalPayoutCaseStatusResponse](src/models/final-payout-case-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Finances

> Source: [Finances](src/resources/finances.ts)

<details>
<summary><code>listFinancialEventGroups(request: Finances.ListFinancialEventGroupsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns financial event groups for the seller.

**Status: stub** — no upstream endpoint found that models the SP-API
FinancialEventGroup (requires eventGroupId keying, date-range filter,
and cursor pagination). Returns empty response pending Phase 5.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finances.listFinancialEventGroups();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Finances.ListFinancialEventGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finances.listFinancialEventGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>maxResultsPerPage?</code> | <code>number</code> | The maximum number of results per page. |
| <code>financialEventGroupStartedBefore?</code> | <code>Date</code> (date-time) | Financial event groups that opened before this date/time (ISO 8601). |
| <code>financialEventGroupStartedAfter?</code> | <code>Date</code> (date-time) | Financial event groups that opened after this date/time (ISO 8601). |
| <code>nextToken?</code> | <code>string</code> | Cursor token for the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finances.listFinancialEventGroups(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Finances.ListFinancialEventGroupsError](src/resources/finances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finances.listFinancialEventGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventGroupsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFinancialEvents(request: Finances.ListFinancialEventsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns financial events for the authenticated seller via GMP partnerTxnSearch.

**Best-effort implementation** — backed by GMP partnerTxnSearch.
Returns transaction records for the seller keyed by partnerId.

**Unsupported parameters:** PostedAfter, PostedBefore, and NextToken are not
supported by the upstream. Supplying any of these parameters returns 400 Bad Request.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finances.listFinancialEvents();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Finances.ListFinancialEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finances.listFinancialEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>maxResultsPerPage?</code> | <code>number</code> | Ignored — GMP returns all results in a single page. |
| <code>postedAfter?</code> | <code>Date</code> (date-time) | Not supported — returns 400 Bad Request if supplied. |
| <code>postedBefore?</code> | <code>Date</code> (date-time) | Not supported — returns 400 Bad Request if supplied. |
| <code>nextToken?</code> | <code>string</code> | Not supported — returns 400 Bad Request if supplied. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finances.listFinancialEvents(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Finances.ListFinancialEventsError](src/resources/finances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finances.listFinancialEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFinancialEventsByGroupId(request: Finances.ListFinancialEventsByGroupIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsByGroupIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns financial events for a specific financial event group.

**Status: stub** — no upstream maps eventGroupId to a financial event
set. Returns empty response pending Phase 5.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finances.listFinancialEventsByGroupId({
    eventGroupId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Finances.ListFinancialEventsByGroupIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finances.listFinancialEventsByGroupId({
  eventGroupId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>eventGroupId</code> | <code>string</code> | The identifier of the financial event group. |
| <code>maxResultsPerPage?</code> | <code>number</code> | The maximum number of results to return per page. |
| <code>postedAfter?</code> | <code>Date</code> (date-time) | Financial events posted after (or on) this date (ISO 8601). |
| <code>postedBefore?</code> | <code>Date</code> (date-time) | Financial events posted before (but not on) this date (ISO 8601). |
| <code>nextToken?</code> | <code>string</code> | Cursor token for the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finances.listFinancialEventsByGroupId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Finances.ListFinancialEventsByGroupIdError](src/resources/finances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finances.listFinancialEventsByGroupId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsByGroupIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFinancialEventsByOrderId(request: Finances.ListFinancialEventsByOrderIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsByOrderIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns financial events for a specific order via GMP commission endpoint.

**Best-effort implementation** — returns commission charges only;
refunds, fees, and adjustments are absent. IDOR ownership gate enforced.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finances.listFinancialEventsByOrderId({ orderId: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Finances.ListFinancialEventsByOrderIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finances.listFinancialEventsByOrderId({
  orderId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | Walmart order number — must be numeric (1–50 digits). |
| <code>maxResultsPerPage?</code> | <code>number</code> | Ignored — GMP returns all commission entries in one page. |
| <code>nextToken?</code> | <code>string</code> | Not supported — returns 400 Bad Request if supplied. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finances.listFinancialEventsByOrderId(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Finances.ListFinancialEventsByOrderIdError](src/resources/finances.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finances.listFinancialEventsByOrderId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Finances.ListFinancialEventsByOrderIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProductPricing

> Source: [ProductPricing](src/resources/product-pricing.ts)

<details>
<summary><code>getCompetitivePricing(request: ProductPricing.GetCompetitivePricingRequest, options?: RequestOptions): ApiPromise&lt;GetPricingResponse, ProductPricing.GetCompetitivePricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns competitive pricing information for a seller's offer listings based on seller SKU or Walmart Item ID .

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getCompetitivePricing({
    marketplaceId: "some example string",
    itemType: ItemType.WalmartItemId,
  });
  // TODO: Handle 'response' of type GetPricingResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetCompetitivePricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getCompetitivePricing({
  marketplaceId: "some example string",
  itemType: ItemType.WalmartItemId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPricingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceId</code> | <code>string</code> | A marketplace identifier. Specifies the marketplace for which prices are returned. |
| <code>itemType?</code> | <code>[ItemType](src/models/item-type.ts)</code> | Indicates whether Walmart Item ID values or seller SKU values are used to identify items.<br>**Default**: "Sku" |
| <code>skus?</code> | <code>string[]</code> | A list of up to twenty seller SKU values used to identify items in the given marketplace. |
| <code>walmartItemIds?</code> | <code>string[]</code> | A list of up to twenty Walmart Item ID values used to identify items in the given marketplace. |
| <code>customerType?</code> | <code>[CustomerType](src/models/customer-type.ts)</code> | Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getCompetitivePricing(request)`

- **OnSuccess**: <code>[GetPricingResponse](src/models/get-pricing-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetCompetitivePricingError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getCompetitivePricing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPricingResponse, ProductPricing.GetCompetitivePricingError&gt;</code>, with `result.value` of type <code>[GetPricingResponse](src/models/get-pricing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompetitiveSummary(request: ProductPricing.GetCompetitiveSummaryRequest, options?: RequestOptions): ApiPromise&lt;CompetitiveSummaryBatchResponse, ProductPricing.GetCompetitiveSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Planned — not yet available in production.** Returns competitive summary including featured buying options and lowest priced offers
for a batch of Walmart Item IDs .

**Phase 1 stub** — no upstream data source identified.
Returns HTTP 501 until an upstream is confirmed.
Track: .


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getCompetitiveSummary({ body: {} });
  // TODO: Handle 'response' of type CompetitiveSummaryBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetCompetitiveSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getCompetitiveSummary({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompetitiveSummaryBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompetitiveSummaryBatchRequest](src/models/competitive-summary-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getCompetitiveSummary(request)`

- **OnSuccess**: <code>[CompetitiveSummaryBatchResponse](src/models/competitive-summary-batch-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetCompetitiveSummaryError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getCompetitiveSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompetitiveSummaryBatchResponse, ProductPricing.GetCompetitiveSummaryError&gt;</code>, with `result.value` of type <code>[CompetitiveSummaryBatchResponse](src/models/competitive-summary-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeaturedOfferExpectedPriceBatch(request: ProductPricing.GetFeaturedOfferExpectedPriceBatchRequestParams, options?: RequestOptions): ApiPromise&lt;GetFeaturedOfferExpectedPriceBatchResponse, ProductPricing.GetFeaturedOfferExpectedPriceBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Planned — not yet available in production.** Returns the featured offer expected price (FOEP) for a batch of seller SKUs.

**Phase 1 stub** — no upstream data source identified.
Returns HTTP 501 until an upstream is confirmed.
Track: .


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getFeaturedOfferExpectedPriceBatch({ body: {} });
  // TODO: Handle 'response' of type GetFeaturedOfferExpectedPriceBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetFeaturedOfferExpectedPriceBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getFeaturedOfferExpectedPriceBatch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFeaturedOfferExpectedPriceBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetFeaturedOfferExpectedPriceBatchRequest](src/models/get-featured-offer-expected-price-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getFeaturedOfferExpectedPriceBatch(request)`

- **OnSuccess**: <code>[GetFeaturedOfferExpectedPriceBatchResponse](src/models/get-featured-offer-expected-price-batch-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetFeaturedOfferExpectedPriceBatchError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getFeaturedOfferExpectedPriceBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFeaturedOfferExpectedPriceBatchResponse, ProductPricing.GetFeaturedOfferExpectedPriceBatchError&gt;</code>, with `result.value` of type <code>[GetFeaturedOfferExpectedPriceBatchResponse](src/models/get-featured-offer-expected-price-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemOffers(request: ProductPricing.GetItemOffersRequest, options?: RequestOptions): ApiPromise&lt;GetOffersResponse, ProductPricing.GetItemOffersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the lowest priced offers for a single item based on Walmart Item ID and item condition.

Uses Walmart Item ID as the primary identifier(ASIN not supported —
no ASIN resolver exists in the Walmart platform; IQS queries by product.item_id).

Backed by IQS catalog_index cross-seller query (same as getListingOffers hop-2).
Returns 404 when no offers are found for the given itemId.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getItemOffers({
    itemId: "some example string",
    marketplaceId: "some example string",
    itemCondition: ConditionType2.New,
  });
  // TODO: Handle 'response' of type GetOffersResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetItemOffersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getItemOffers({
  itemId: "some example string",
  marketplaceId: "some example string",
  itemCondition: ConditionType2.New,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOffersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>itemId</code> | <code>string</code> | The Walmart Item ID of the item. |
| <code>marketplaceId</code> | <code>string</code> | A marketplace identifier. Specifies the marketplace for which prices are returned. |
| <code>itemCondition</code> | <code>[ConditionType2](src/models/condition-type2.ts)</code> | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. |
| <code>customerType?</code> | <code>[CustomerType](src/models/customer-type.ts)</code> | Indicates whether to request Consumer or Business offers. Default is Consumer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getItemOffers(request)`

- **OnSuccess**: <code>[GetOffersResponse](src/models/get-offers-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetItemOffersError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getItemOffers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOffersResponse, ProductPricing.GetItemOffersError&gt;</code>, with `result.value` of type <code>[GetOffersResponse](src/models/get-offers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemOffersBatch(request: ProductPricing.GetItemOffersBatchRequestParams, options?: RequestOptions): ApiPromise&lt;GetItemOffersBatchResponse, ProductPricing.GetItemOffersBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Batch version of getItemOffers. Accepts up to 20 Walmart Item ID requests.
Uses Walmart Item ID as the primary identifier.

Implemented as in-process fan-out over getItemOffers.
Each item gets its own per-item HTTP status code in the response body;
the outer HTTP response is always 200.
Implemented: .


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getItemOffersBatch({ body: {} });
  // TODO: Handle 'response' of type GetItemOffersBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetItemOffersBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getItemOffersBatch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetItemOffersBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetItemOffersBatchRequest](src/models/get-item-offers-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getItemOffersBatch(request)`

- **OnSuccess**: <code>[GetItemOffersBatchResponse](src/models/get-item-offers-batch-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetItemOffersBatchError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getItemOffersBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetItemOffersBatchResponse, ProductPricing.GetItemOffersBatchError&gt;</code>, with `result.value` of type <code>[GetItemOffersBatchResponse](src/models/get-item-offers-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListingOffers(request: ProductPricing.GetListingOffersRequest, options?: RequestOptions): ApiPromise&lt;GetOffersResponse, ProductPricing.GetListingOffersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the lowest priced offers for a single SKU listing, based on SKU and item condition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getListingOffers({
    sellerSku: "some example string",
    marketplaceId: "some example string",
    itemCondition: ConditionType2.New,
  });
  // TODO: Handle 'response' of type GetOffersResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetListingOffersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getListingOffers({
  sellerSku: "some example string",
  marketplaceId: "some example string",
  itemCondition: ConditionType2.New,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetOffersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerSku</code> | <code>string</code> | Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId. |
| <code>marketplaceId</code> | <code>string</code> | A marketplace identifier. Specifies the marketplace for which prices are returned. |
| <code>itemCondition</code> | <code>[ConditionType2](src/models/condition-type2.ts)</code> | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. |
| <code>customerType?</code> | <code>[CustomerType](src/models/customer-type.ts)</code> | Indicates whether to request Consumer or Business offers. Default is Consumer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getListingOffers(request)`

- **OnSuccess**: <code>[GetOffersResponse](src/models/get-offers-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetListingOffersError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getListingOffers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetOffersResponse, ProductPricing.GetListingOffersError&gt;</code>, with `result.value` of type <code>[GetOffersResponse](src/models/get-offers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListingOffersBatch(request: ProductPricing.GetListingOffersBatchRequestParams, options?: RequestOptions): ApiPromise&lt;GetListingOffersBatchResponse, ProductPricing.GetListingOffersBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Batch version of getListingOffers. Accepts up to 20 SKU requests.

Implemented as in-process fan-out over getListingOffers (IQS-backed).
Each SKU gets its own per-item HTTP status code in the response body;
the outer HTTP response is always 200.
Implemented: .


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getListingOffersBatch({ body: {} });
  // TODO: Handle 'response' of type GetListingOffersBatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetListingOffersBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getListingOffersBatch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetListingOffersBatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetListingOffersBatchRequest](src/models/get-listing-offers-batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getListingOffersBatch(request)`

- **OnSuccess**: <code>[GetListingOffersBatchResponse](src/models/get-listing-offers-batch-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetListingOffersBatchError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getListingOffersBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetListingOffersBatchResponse, ProductPricing.GetListingOffersBatchError&gt;</code>, with `result.value` of type <code>[GetListingOffersBatchResponse](src/models/get-listing-offers-batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPricing(request: ProductPricing.GetPricingRequest, options?: RequestOptions): ApiPromise&lt;GetPricingResponse, ProductPricing.GetPricingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns pricing information for a seller's active offer listings based on seller SKU or Walmart Item ID .

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productPricing.getPricing({
    marketplaceId: "some example string",
    itemType: ItemType.WalmartItemId,
  });
  // TODO: Handle 'response' of type GetPricingResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductPricing.GetPricingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productPricing.getPricing({
  marketplaceId: "some example string",
  itemType: ItemType.WalmartItemId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPricingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceId</code> | <code>string</code> | A marketplace identifier. Specifies the marketplace for which prices are returned. |
| <code>itemType?</code> | <code>[ItemType](src/models/item-type.ts)</code> | Indicates whether Walmart Item ID values or seller SKU values are used to identify items.<br>**Default**: "Sku" |
| <code>skus?</code> | <code>string[]</code> | A list of up to twenty seller SKU values used to identify items in the given marketplace. |
| <code>walmartItemIds?</code> | <code>string[]</code> | A list of up to twenty Walmart Item ID values used to identify items in the given marketplace. |
| <code>itemCondition?</code> | <code>[ConditionType2](src/models/condition-type2.ts)</code> | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. |
| <code>offerType?</code> | <code>[OfferType](src/models/offer-type.ts)</code> | Indicates whether to request pricing information for the seller's B2C or B2B offers. Default is B2C. |
| <code>customerType?</code> | <code>[CustomerType](src/models/customer-type.ts)</code> | Indicates whether to request Consumer or Business offers. Default is Consumer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productPricing.getPricing(request)`

- **OnSuccess**: <code>[GetPricingResponse](src/models/get-pricing-response.ts)</code>
- **OnError**: throws <code>[ProductPricing.GetPricingError](src/resources/product-pricing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productPricing.getPricing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPricingResponse, ProductPricing.GetPricingError&gt;</code>, with `result.value` of type <code>[GetPricingResponse](src/models/get-pricing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProductFees

> Source: [ProductFees](src/resources/product-fees.ts)

<details>
<summary><code>getMyFeesEstimateForItem(request: ProductFees.GetMyFeesEstimateForItemRequest, options?: RequestOptions): ApiPromise&lt;GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an estimated fee for a single item identified by Walmart Item ID.
Walmart Item ID replaces the SP-API ASIN path parameter.

SP-API equivalent: `getMyFeesEstimateForASIN` (identifier changed from
ASIN to Walmart Item ID; request/response shape is otherwise 1:1).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFees.getMyFeesEstimateForItem({
    walmartItemId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GetMyFeesEstimateResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductFees.GetMyFeesEstimateForItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productFees.getMyFeesEstimateForItem({
  walmartItemId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMyFeesEstimateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>walmartItemId</code> | <code>string</code> | The Walmart Item ID of the item. Replaces SP-API ASIN. |
| <code>body</code> | <code>[GetMyFeesEstimateRequest](src/models/get-my-fees-estimate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productFees.getMyFeesEstimateForItem(request)`

- **OnSuccess**: <code>[GetMyFeesEstimateResponse](src/models/get-my-fees-estimate-response.ts)</code>
- **OnError**: throws <code>[ProductFees.GetMyFeesEstimateForItemError](src/resources/product-fees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productFees.getMyFeesEstimateForItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForItemError&gt;</code>, with `result.value` of type <code>[GetMyFeesEstimateResponse](src/models/get-my-fees-estimate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMyFeesEstimateForSku(request: ProductFees.GetMyFeesEstimateForSkuRequest, options?: RequestOptions): ApiPromise&lt;GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForSkuError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an estimated fee for a seller listing identified by Seller SKU.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFees.getMyFeesEstimateForSku({
    sellerSku: "some example string",
    marketplaceId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GetMyFeesEstimateResponse
} catch (err) {
  // TODO: Handle 'err' of type ProductFees.GetMyFeesEstimateForSkuError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productFees.getMyFeesEstimateForSku({
  sellerSku: "some example string",
  marketplaceId: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMyFeesEstimateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sellerSku</code> | <code>string</code> | The seller's SKU for the listing. Scoped to the authenticated seller. |
| <code>marketplaceId</code> | <code>string</code> | Marketplace identifier. |
| <code>body</code> | <code>[GetMyFeesEstimateRequest](src/models/get-my-fees-estimate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productFees.getMyFeesEstimateForSku(request)`

- **OnSuccess**: <code>[GetMyFeesEstimateResponse](src/models/get-my-fees-estimate-response.ts)</code>
- **OnError**: throws <code>[ProductFees.GetMyFeesEstimateForSkuError](src/resources/product-fees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productFees.getMyFeesEstimateForSku(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMyFeesEstimateResponse, ProductFees.GetMyFeesEstimateForSkuError&gt;</code>, with `result.value` of type <code>[GetMyFeesEstimateResponse](src/models/get-my-fees-estimate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMyFeesEstimates(request: ProductFees.GetMyFeesEstimatesRequest, options?: RequestOptions): ApiPromise&lt;FeesEstimateResult[], ProductFees.GetMyFeesEstimatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns estimated Walmart fees for a list of items identified by
Walmart Item ID or Seller SKU.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productFees.getMyFeesEstimates({
    body: [
      {
        idType: IdType.WalmartItemId,
        idValue: "some example string",
        feesEstimateRequest: {
          marketplaceId: "some example string",
          isWalmartFulfilled: true,
          priceToEstimateFees: { listingPrice: {} },
        },
      },
    ],
  });
  // TODO: Handle 'response' of type FeesEstimateResult[]
} catch (err) {
  // TODO: Handle 'err' of type ProductFees.GetMyFeesEstimatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productFees.getMyFeesEstimates({
  body: [
    {
      idType: IdType.WalmartItemId,
      idValue: "some example string",
      feesEstimateRequest: {
        marketplaceId: "some example string",
        isWalmartFulfilled: true,
        priceToEstimateFees: { listingPrice: {} },
      },
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeesEstimateResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FeesEstimateByIdRequest](src/models/fees-estimate-by-id-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productFees.getMyFeesEstimates(request)`

- **OnSuccess**: <code>[FeesEstimateResult](src/models/fees-estimate-result.ts)[]</code>
- **OnError**: throws <code>[ProductFees.GetMyFeesEstimatesError](src/resources/product-fees.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productFees.getMyFeesEstimates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeesEstimateResult[], ProductFees.GetMyFeesEstimatesError&gt;</code>, with `result.value` of type <code>[FeesEstimateResult](src/models/fees-estimate-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProductTypeDefinitions

> Source: [ProductTypeDefinitions](src/resources/product-type-definitions.ts)

<details>
<summary><code>getDefinitionsProductType(request: ProductTypeDefinitions.GetDefinitionsProductTypeRequest, options?: RequestOptions): ApiPromise&lt;ProductTypeDefinition, ProductTypeDefinitions.GetDefinitionsProductTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Placeholder — not yet implemented.**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productTypeDefinitions.getDefinitionsProductType({
    productType: "some example string",
  });
  // TODO: Handle 'response' of type ProductTypeDefinition
} catch (err) {
  // TODO: Handle 'err' of type ProductTypeDefinitions.GetDefinitionsProductTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productTypeDefinitions.getDefinitionsProductType({
  productType: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductTypeDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>productType</code> | <code>string</code> | - |
| <code>sellerId?</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productTypeDefinitions.getDefinitionsProductType(request)`

- **OnSuccess**: <code>[ProductTypeDefinition](src/models/product-type-definition.ts)</code>
- **OnError**: throws <code>[ProductTypeDefinitions.GetDefinitionsProductTypeError](src/resources/product-type-definitions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productTypeDefinitions.getDefinitionsProductType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductTypeDefinition, ProductTypeDefinitions.GetDefinitionsProductTypeError&gt;</code>, with `result.value` of type <code>[ProductTypeDefinition](src/models/product-type-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDefinitionsProductTypes(request: ProductTypeDefinitions.SearchDefinitionsProductTypesRequest, options?: RequestOptions): ApiPromise&lt;ProductTypeList, ProductTypeDefinitions.SearchDefinitionsProductTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**Placeholder — not yet implemented.**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.productTypeDefinitions.searchDefinitionsProductTypes();
  // TODO: Handle 'response' of type ProductTypeList
} catch (err) {
  // TODO: Handle 'err' of type ProductTypeDefinitions.SearchDefinitionsProductTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.productTypeDefinitions.searchDefinitionsProductTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProductTypeList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keywords?</code> | <code>string</code> | - |
| <code>itemName?</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en_US" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.productTypeDefinitions.searchDefinitionsProductTypes(request)`

- **OnSuccess**: <code>[ProductTypeList](src/models/product-type-list.ts)</code>
- **OnError**: throws <code>[ProductTypeDefinitions.SearchDefinitionsProductTypesError](src/resources/product-type-definitions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.productTypeDefinitions.searchDefinitionsProductTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProductTypeList, ProductTypeDefinitions.SearchDefinitionsProductTypesError&gt;</code>, with `result.value` of type <code>[ProductTypeList](src/models/product-type-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReportSchedules

> Source: [ReportSchedules](src/resources/report-schedules.ts)

<details>
<summary><code>cancelReportSchedule(request: ReportSchedules.CancelReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;CancelReportScheduleResponse, ReportSchedules.CancelReportScheduleError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportSchedules.cancelReportSchedule({
    reportScheduleId: "some example string",
  });
  // TODO: Handle 'response' of type CancelReportScheduleResponse
} catch (err) {
  // TODO: Handle 'err' of type ReportSchedules.CancelReportScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportSchedules.cancelReportSchedule({
  reportScheduleId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelReportScheduleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportScheduleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportSchedules.cancelReportSchedule(request)`

- **OnSuccess**: <code>[CancelReportScheduleResponse](src/models/cancel-report-schedule-response.ts)</code>
- **OnError**: throws <code>[ReportSchedules.CancelReportScheduleError](src/resources/report-schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportSchedules.cancelReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelReportScheduleResponse, ReportSchedules.CancelReportScheduleError&gt;</code>, with `result.value` of type <code>[CancelReportScheduleResponse](src/models/cancel-report-schedule-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createReportSchedule(request: ReportSchedules.CreateReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;CreateReportScheduleResponse, ReportSchedules.CreateReportScheduleError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportSchedules.createReportSchedule({
    body: { reportType: "some example string", period: Period1.Pt5M },
  });
  // TODO: Handle 'response' of type CreateReportScheduleResponse
} catch (err) {
  // TODO: Handle 'err' of type ReportSchedules.CreateReportScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportSchedules.createReportSchedule({
  body: { reportType: "some example string", period: Period1.Pt5M },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateReportScheduleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateReportScheduleSpecification](src/models/create-report-schedule-specification.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportSchedules.createReportSchedule(request)`

- **OnSuccess**: <code>[CreateReportScheduleResponse](src/models/create-report-schedule-response.ts)</code>
- **OnError**: throws <code>[ReportSchedules.CreateReportScheduleError](src/resources/report-schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportSchedules.createReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateReportScheduleResponse, ReportSchedules.CreateReportScheduleError&gt;</code>, with `result.value` of type <code>[CreateReportScheduleResponse](src/models/create-report-schedule-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportSchedule(request: ReportSchedules.GetReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;ReportSchedule, ReportSchedules.GetReportScheduleError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportSchedules.getReportSchedule({
    reportScheduleId: "some example string",
  });
  // TODO: Handle 'response' of type ReportSchedule
} catch (err) {
  // TODO: Handle 'err' of type ReportSchedules.GetReportScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportSchedules.getReportSchedule({
  reportScheduleId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReportSchedule
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportScheduleId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportSchedules.getReportSchedule(request)`

- **OnSuccess**: <code>[ReportSchedule](src/models/report-schedule.ts)</code>
- **OnError**: throws <code>[ReportSchedules.GetReportScheduleError](src/resources/report-schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportSchedules.getReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReportSchedule, ReportSchedules.GetReportScheduleError&gt;</code>, with `result.value` of type <code>[ReportSchedule](src/models/report-schedule.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportSchedules(request: ReportSchedules.GetReportSchedulesRequest, options?: RequestOptions): ApiPromise&lt;GetReportSchedulesResponse, ReportSchedules.GetReportSchedulesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportSchedules.getReportSchedules();
  // TODO: Handle 'response' of type GetReportSchedulesResponse
} catch (err) {
  // TODO: Handle 'err' of type ReportSchedules.GetReportSchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportSchedules.getReportSchedules().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetReportSchedulesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportTypes?</code> | <code>[ReportType1](src/models/report-type1.ts)[]</code> | Filter by report type. Values are Walmart Partner Reporting Platform enum names. Runtime availability is CCM-controlled; consult PRP docs for current PROD-enabled types. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportSchedules.getReportSchedules(request)`

- **OnSuccess**: <code>[GetReportSchedulesResponse](src/models/get-report-schedules-response.ts)</code>
- **OnError**: throws <code>[ReportSchedules.GetReportSchedulesError](src/resources/report-schedules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportSchedules.getReportSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetReportSchedulesResponse, ReportSchedules.GetReportSchedulesError&gt;</code>, with `result.value` of type <code>[GetReportSchedulesResponse](src/models/get-report-schedules-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sales

> Source: [Sales](src/resources/sales.ts)

<details>
<summary><code>getOrderMetrics(request: Sales.GetOrderMetricsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Sales.GetOrderMetricsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sales.getOrderMetrics({
    marketplaceIds: ["some example string"],
    interval: "some example string",
    granularity: Granularity.Hour,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Sales.GetOrderMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sales.getOrderMetrics({
  marketplaceIds: ["some example string"],
  interval: "some example string",
  granularity: Granularity.Hour,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified |
| <code>interval</code> | <code>string</code> | A time interval used for selecting order metrics. This takes the form of two dates separated by two hyphens (first date is inclusive; second date is exclusive). Dates are in ISO8601 format and must represent absolute time (either Z notation or offset notation). Example: 2018-09-01T00:00:00-07:00--2018-09-04T00:00:00-07:00 requests order metrics for Sept 1st, 2nd and 3rd in the -07:00 zone. |
| <code>granularity</code> | <code>[Granularity](src/models/granularity.ts)</code> | The granularity of the grouping of order metrics, based on a unit of time. Specifying granularity=Hour results in a successful request only if the interval specified is less than or equal to 30 days from now. For all other granularities, the interval specified must be less or equal to 2 years from now. Specifying granularity=Total results in order metrics that are aggregated over the entire interval that you specify. If the interval start and end date don’t align with the specified granularity, the head and tail end of the response interval will contain partial data. Example: Day to get a daily breakdown of the request interval, where the day boundary is defined by the granularityTimeZone. |
| <code>granularityTimeZone?</code> | <code>string</code> | An IANA-compatible time zone for determining the day boundary. Required when specifying a granularity value greater than Hour. The granularityTimeZone value must align with the offset of the specified interval value. For example, if the interval value uses Z notation, then granularityTimeZone must be UTC. If the interval value uses an offset, then granularityTimeZone must be an IANA-compatible time zone that matches the offset. Example: US/Pacific to compute day boundaries, accounting for daylight time savings, for US/Pacific zone. |
| <code>buyerType?</code> | <code>[BuyerType](src/models/buyer-type.ts)</code> | Filters the results by the buyer type that you specify, B2B (business to business) or B2C (business to customer). Example: B2B, if you want the response to include order metrics for only B2B buyers. |
| <code>fulfillmentNetwork?</code> | <code>string</code> | Filters the results by the fulfillment network that you specify, MFN (merchant fulfillment network) or AFN (marketplace fulfillment network). Do not include this filter if you want the response to include order metrics for all fulfillment networks. Example: AFN, if you want the response to include order metrics for only the marketplace fulfillment network. |
| <code>firstDayOfWeek?</code> | <code>[FirstDayOfWeek](src/models/first-day-of-week.ts)</code> | Specifies the day that the week starts on when granularity=Week, either Monday or Sunday. Default: Monday. Example: Sund |
| <code>asin?</code> | <code>string</code> | Filters the results by the ASIN that you specify. Specifying both ASIN and SKU returns an error. Do not include this filter if you want the response to include order metrics for all ASINs. Example: B0792R1RSN, if you want the response to include order metrics for only ASIN B0792R1RSN. |
| <code>sku?</code> | <code>string</code> | Filters the results by the SKU that you specify. Specifying both ASIN and SKU returns an error. Do not include this filter if you want the response to include order metrics for all SKUs. Example: TestSKU, if you want the response to include order metrics for only SKU TestSKU. |
| <code>spApiProgram?</code> | <code>string</code> | Filters the results by the program that you specify. Do not include this filter if you want the response to inclu |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sales.getOrderMetrics(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Sales.GetOrderMetricsError](src/resources/sales.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sales.getOrderMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Sales.GetOrderMetricsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Messaging

> Source: [Messaging](src/resources/messaging.ts)

<details>
<summary><code>createWarranty(request: Messaging.CreateWarrantyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateWarrantyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createWarranty({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateWarrantyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createWarranty({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createWarranty(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateWarrantyError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createWarranty(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateWarrantyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAttributes(request: Messaging.GetAttributesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.GetAttributesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.getAttributes({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.GetAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.getAttributes({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.getAttributes(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.GetAttributesError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.getAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.GetAttributesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmCustomizationDetails(request: Messaging.ConfirmCustomizationDetailsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.ConfirmCustomizationDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.confirmCustomizationDetails({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.ConfirmCustomizationDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.confirmCustomizationDetails({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.confirmCustomizationDetails(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.ConfirmCustomizationDetailsError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.confirmCustomizationDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.ConfirmCustomizationDetailsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConfirmDeliveryDetails(request: Messaging.CreateConfirmDeliveryDetailsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmDeliveryDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createConfirmDeliveryDetails({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateConfirmDeliveryDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createConfirmDeliveryDetails({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createConfirmDeliveryDetails(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateConfirmDeliveryDetailsError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createConfirmDeliveryDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmDeliveryDetailsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConfirmOrderDetails(request: Messaging.CreateConfirmOrderDetailsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmOrderDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createConfirmOrderDetails({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateConfirmOrderDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createConfirmOrderDetails({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createConfirmOrderDetails(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateConfirmOrderDetailsError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createConfirmOrderDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmOrderDetailsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConfirmServiceDetails(request: Messaging.CreateConfirmServiceDetailsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmServiceDetailsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createConfirmServiceDetails({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateConfirmServiceDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createConfirmServiceDetails({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createConfirmServiceDetails(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateConfirmServiceDetailsError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createConfirmServiceDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateConfirmServiceDetailsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDigitalAccessKey(request: Messaging.CreateDigitalAccessKeyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateDigitalAccessKeyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createDigitalAccessKey({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateDigitalAccessKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createDigitalAccessKey({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createDigitalAccessKey(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateDigitalAccessKeyError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createDigitalAccessKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateDigitalAccessKeyError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLegalDisclosure(request: Messaging.CreateLegalDisclosureRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateLegalDisclosureError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createLegalDisclosure({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateLegalDisclosureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createLegalDisclosure({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createLegalDisclosure(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateLegalDisclosureError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createLegalDisclosure(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateLegalDisclosureError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUnexpectedProblem(request: Messaging.CreateUnexpectedProblemRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.CreateUnexpectedProblemError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.createUnexpectedProblem({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.CreateUnexpectedProblemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.createUnexpectedProblem({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.createUnexpectedProblem(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.CreateUnexpectedProblemError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.createUnexpectedProblem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.CreateUnexpectedProblemError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMessagingActionsForOrder(request: Messaging.GetMessagingActionsForOrderRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.GetMessagingActionsForOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.getMessagingActionsForOrder({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.GetMessagingActionsForOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.getMessagingActionsForOrder({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This specifies the order for which you want a list of available message types. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.getMessagingActionsForOrder(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.GetMessagingActionsForOrderError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.getMessagingActionsForOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.GetMessagingActionsForOrderError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendInvoice(request: Messaging.SendInvoiceRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Messaging.SendInvoiceError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messaging.sendInvoice({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Messaging.SendInvoiceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messaging.sendInvoice({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | A marketplace order identifier. This identifies the order for which a message is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This identifies the marketplace in which the order was placed. You can only specify one market |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messaging.sendInvoice(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Messaging.SendInvoiceError](src/resources/messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messaging.sendInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Messaging.SendInvoiceError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>createDestination(request: Notifications.CreateDestinationRequest, options?: RequestOptions): ApiPromise&lt;Channel, Notifications.CreateDestinationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.createDestination({ body: {} });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type Notifications.CreateDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.createDestination({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.createDestination(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[Notifications.CreateDestinationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.createDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, Notifications.CreateDestinationError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Notifications.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Notifications.CreateSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.createSubscription({
    notificationType: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Notifications.CreateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.createSubscription({
  notificationType: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationType</code> | <code>string</code> | The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.createSubscription(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Notifications.CreateSubscriptionError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Notifications.CreateSubscriptionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDestination(request: Notifications.DeleteDestinationRequest, options?: RequestOptions): ApiPromise&lt;Channel, Notifications.DeleteDestinationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.deleteDestination({ destinationId: "some example string" });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type Notifications.DeleteDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.deleteDestination({
  destinationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>string</code> | The identifier for the destination that you want to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.deleteDestination(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[Notifications.DeleteDestinationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.deleteDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, Notifications.DeleteDestinationError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionById(request: Notifications.DeleteSubscriptionByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Notifications.DeleteSubscriptionByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.deleteSubscriptionById({
    subscriptionId: "some example string",
    notificationType: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Notifications.DeleteSubscriptionByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.deleteSubscriptionById({
  subscriptionId: "some example string",
  notificationType: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The identifier for the subscription that you want to delete. |
| <code>notificationType</code> | <code>string</code> | The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.deleteSubscriptionById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Notifications.DeleteSubscriptionByIdError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.deleteSubscriptionById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Notifications.DeleteSubscriptionByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDestination(request: Notifications.GetDestinationRequest, options?: RequestOptions): ApiPromise&lt;Channel, Notifications.GetDestinationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getDestination({ destinationId: "some example string" });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type Notifications.GetDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getDestination({
  destinationId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>destinationId</code> | <code>string</code> | The identifier generated when you created the destination. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getDestination(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[Notifications.GetDestinationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.getDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, Notifications.GetDestinationError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDestinations(options?: RequestOptions): ApiPromise&lt;ChannelList, Notifications.GetDestinationsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getDestinations();
  // TODO: Handle 'response' of type ChannelList
} catch (err) {
  // TODO: Handle 'err' of type Notifications.GetDestinationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getDestinations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChannelList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getDestinations()`

- **OnSuccess**: <code>[ChannelList](src/models/channel-list.ts)</code>
- **OnError**: throws <code>[Notifications.GetDestinationsError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.getDestinations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChannelList, Notifications.GetDestinationsError&gt;</code>, with `result.value` of type <code>[ChannelList](src/models/channel-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscription(request: Notifications.GetSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Notifications.GetSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getSubscription({ notificationType: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Notifications.GetSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getSubscription({
  notificationType: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationType</code> | <code>string</code> | The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. |
| <code>payloadVersion?</code> | <code>string</code> | The version of the payload object to be used in the notification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getSubscription(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Notifications.GetSubscriptionError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.getSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Notifications.GetSubscriptionError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscriptionById(request: Notifications.GetSubscriptionByIdRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Notifications.GetSubscriptionByIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getSubscriptionById({
    subscriptionId: "some example string",
    notificationType: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Notifications.GetSubscriptionByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getSubscriptionById({
  subscriptionId: "some example string",
  notificationType: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The identifier for the subscription that you want to get. |
| <code>notificationType</code> | <code>string</code> | The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getSubscriptionById(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Notifications.GetSubscriptionByIdError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.getSubscriptionById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Notifications.GetSubscriptionByIdError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendTestNotification(request: Notifications.SendTestNotificationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Notifications.SendTestNotificationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.sendTestNotification({
    notificationType: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Notifications.SendTestNotificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.sendTestNotification({
  notificationType: "some example string",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notificationType</code> | <code>string</code> | The type of notification. Must be one of: EMAIL, WEBHOOKS, SMS, PULL, MOBILE_PUSH. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.sendTestNotification(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Notifications.SendTestNotificationError](src/resources/notifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.notifications.sendTestNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Notifications.SendTestNotificationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Solicitations

> Source: [Solicitations](src/resources/solicitations.ts)

<details>
<summary><code>createProductReviewAndSellerFeedbackSolicitation(request: Solicitations.CreateProductReviewAndSellerFeedbackSolicitationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.solicitations.createProductReviewAndSellerFeedbackSolicitation({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.solicitations.createProductReviewAndSellerFeedbackSolicitation({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | An SP-API order identifier. This specifies the order for which a solicitation is sent. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be spec |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.solicitations.createProductReviewAndSellerFeedbackSolicitation(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError](src/resources/solicitations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.solicitations.createProductReviewAndSellerFeedbackSolicitation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSolicitationActionsForOrder(request: Solicitations.GetSolicitationActionsForOrderRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Solicitations.GetSolicitationActionsForOrderError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.solicitations.getSolicitationActionsForOrder({
    spApiOrderId: "some example string",
    marketplaceIds: ["some example string"],
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Solicitations.GetSolicitationActionsForOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.solicitations.getSolicitationActionsForOrder({
  spApiOrderId: "some example string",
  marketplaceIds: ["some example string"],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spApiOrderId</code> | <code>string</code> | An SP-API order identifier. This specifies the order for which you want a list of available solicitation types. |
| <code>marketplaceIds</code> | <code>string[]</code> | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be spec |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.solicitations.getSolicitationActionsForOrder(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Solicitations.GetSolicitationActionsForOrderError](src/resources/solicitations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.solicitations.getSolicitationActionsForOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Solicitations.GetSolicitationActionsForOrderError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sellers

> Source: [Sellers](src/resources/sellers.ts)

<details>
<summary><code>getAccount(options?: RequestOptions): ApiPromise&lt;SellerAccount, Sellers.GetAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated seller's account information including
business name, email, account status, and seller type.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sellers.getAccount();
  // TODO: Handle 'response' of type SellerAccount
} catch (err) {
  // TODO: Handle 'err' of type Sellers.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sellers.getAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SellerAccount
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sellers.getAccount()`

- **OnSuccess**: <code>[SellerAccount](src/models/seller-account.ts)</code>
- **OnError**: throws <code>[Sellers.GetAccountError](src/resources/sellers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sellers.getAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SellerAccount, Sellers.GetAccountError&gt;</code>, with `result.value` of type <code>[SellerAccount](src/models/seller-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketplaceParticipations(options?: RequestOptions): ApiPromise&lt;GetMarketplaceParticipationsResponse, Sellers.GetMarketplaceParticipationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of marketplaces the authenticated seller participates in
(e.g. Walmart US, Walmart Canada, Walmart Mexico).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sellers.getMarketplaceParticipations();
  // TODO: Handle 'response' of type GetMarketplaceParticipationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Sellers.GetMarketplaceParticipationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sellers.getMarketplaceParticipations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMarketplaceParticipationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sellers.getMarketplaceParticipations()`

- **OnSuccess**: <code>[GetMarketplaceParticipationsResponse](src/models/get-marketplace-participations-response.ts)</code>
- **OnError**: throws <code>[Sellers.GetMarketplaceParticipationsError](src/resources/sellers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sellers.getMarketplaceParticipations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMarketplaceParticipationsResponse, Sellers.GetMarketplaceParticipationsError&gt;</code>, with `result.value` of type <code>[GetMarketplaceParticipationsResponse](src/models/get-marketplace-participations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](src/resources/shipping.ts)

<details>
<summary><code>cancelShipment2(request: Shipping.CancelShipment2Request, options?: RequestOptions): ApiPromise&lt;CancelShipmentResponse1, Shipping.CancelShipment2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a shipment that has not yet shipped. Cancellation
eligibility is carrier-dependent; refer to the response
cancellation status to confirm.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.cancelShipment2({ shipmentId: "some example string" });
  // TODO: Handle 'response' of type CancelShipmentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Shipping.CancelShipment2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.cancelShipment2({ shipmentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelShipmentResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shipmentId</code> | <code>string</code> | Identifier of the shipment to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.cancelShipment2(request)`

- **OnSuccess**: <code>[CancelShipmentResponse1](src/models/cancel-shipment-response1.ts)</code>
- **OnError**: throws <code>[Shipping.CancelShipment2Error](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.cancelShipment2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelShipmentResponse1, Shipping.CancelShipment2Error&gt;</code>, with `result.value` of type <code>[CancelShipmentResponse1](src/models/cancel-shipment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccessPoints(request: Shipping.GetAccessPointsRequest, options?: RequestOptions): ApiPromise&lt;GetAccessPointsResponse, Shipping.GetAccessPointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns access points (pickup and dropoff locations) near the
supplied postal code and country, optionally filtered by access
point type.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getAccessPoints({
    accessPointTypes: "some example string",
    countryCode: "some example string",
    postalCode: "some example string",
  });
  // TODO: Handle 'response' of type GetAccessPointsResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetAccessPointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.getAccessPoints({
  accessPointTypes: "some example string",
  countryCode: "some example string",
  postalCode: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAccessPointsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accessPointTypes</code> | <code>string</code> | Comma-separated list of access point types to include. |
| <code>countryCode</code> | <code>string</code> | ISO 3166-1 alpha-2 country code (e.g. US, CA, MX). |
| <code>postalCode</code> | <code>string</code> | Postal code to search around. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getAccessPoints(request)`

- **OnSuccess**: <code>[GetAccessPointsResponse](src/models/get-access-points-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetAccessPointsError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getAccessPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAccessPointsResponse, Shipping.GetAccessPointsError&gt;</code>, with `result.value` of type <code>[GetAccessPointsResponse](src/models/get-access-points-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAdditionalInputs(request: Shipping.GetAdditionalInputsRequest, options?: RequestOptions): ApiPromise&lt;GetAdditionalInputsResponse, Shipping.GetAdditionalInputsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a JSON Schema document describing any
carrier-and-service-specific inputs required to purchase a
shipment for the supplied requestToken + rateId. The schema is
served verbatim and the calling client should validate the
seller's input against it before issuing purchaseShipment.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getAdditionalInputs({
    rateId: "some example string",
    requestToken: "some example string",
  });
  // TODO: Handle 'response' of type GetAdditionalInputsResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetAdditionalInputsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.getAdditionalInputs({
  rateId: "some example string",
  requestToken: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAdditionalInputsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>rateId</code> | <code>string</code> | rateId returned by a prior getRates response. |
| <code>requestToken</code> | <code>string</code> | requestToken returned by a prior getRates response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getAdditionalInputs(request)`

- **OnSuccess**: <code>[GetAdditionalInputsResponse](src/models/get-additional-inputs-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetAdditionalInputsError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getAdditionalInputs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAdditionalInputsResponse, Shipping.GetAdditionalInputsError&gt;</code>, with `result.value` of type <code>[GetAdditionalInputsResponse](src/models/get-additional-inputs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRates(request: Shipping.GetRatesRequestParams, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderResponse, Shipping.GetRatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of shipping rate quotes for the given shipment
request. The seller can then call purchaseShipment with the
selected rateId to commit to a label purchase.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getRates({
    body: {
      shipTo: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      shipFrom: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      packages: [
        {
          dimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
          weight: { value: 1.5, unit: Unit1.Oz },
          packageClientReferenceId: "some example string",
        },
      ],
      channelDetails: { channelType: ChannelType.WalmartMarketplace },
    },
  });
  // TODO: Handle 'response' of type GetFulfillmentOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetRatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.getRates({
  body: {
    shipTo: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    shipFrom: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    packages: [
      {
        dimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
        weight: { value: 1.5, unit: Unit1.Oz },
        packageClientReferenceId: "some example string",
      },
    ],
    channelDetails: { channelType: ChannelType.WalmartMarketplace },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetRatesRequest](src/models/get-rates-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getRates(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetRatesError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getRates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderResponse, Shipping.GetRatesError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderResponse](src/models/get-fulfillment-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShipmentDocuments(request: Shipping.GetShipmentDocumentsRequest, options?: RequestOptions): ApiPromise&lt;GetShipmentDocumentsResponse, Shipping.GetShipmentDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the label, customs, and other printable documents
associated with a previously-purchased shipment.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getShipmentDocuments({ shipmentId: "some example string" });
  // TODO: Handle 'response' of type GetShipmentDocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetShipmentDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.getShipmentDocuments({
  shipmentId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetShipmentDocumentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shipmentId</code> | <code>string</code> | Identifier of the shipment whose documents to retrieve. |
| <code>packageClientReferenceId?</code> | <code>string</code> | Optional package-level reference id to retrieve documents<br>for a specific package within a multi-package shipment. |
| <code>format?</code> | <code>[Format1](src/models/format1.ts)</code> | Requested document format (defaults to PDF). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getShipmentDocuments(request)`

- **OnSuccess**: <code>[GetShipmentDocumentsResponse](src/models/get-shipment-documents-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetShipmentDocumentsError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getShipmentDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetShipmentDocumentsResponse, Shipping.GetShipmentDocumentsError&gt;</code>, with `result.value` of type <code>[GetShipmentDocumentsResponse](src/models/get-shipment-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTracking(request: Shipping.GetTrackingRequest, options?: RequestOptions): ApiPromise&lt;GetTrackingResponse, Shipping.GetTrackingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current tracking status, event history, and any
proof-of-delivery details for the given trackingId. TNT
resolves carrier internally from the trackingId alone, so
carrierId is optional -- confirmed unnecessary by the TNT/
Vulcan team (STRIDE-TNT-CORE-PACKAGE-SERVICES) 2026-08-19.
When provided, it's used only as a defense-in-depth check
against the resolved carrier; a mismatch surfaces as 404.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getTracking({ trackingId: "some example string" });
  // TODO: Handle 'response' of type GetTrackingResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetTrackingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.getTracking({ trackingId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTrackingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trackingId</code> | <code>string</code> | Tracking identifier returned by purchaseShipment. |
| <code>carrierId?</code> | <code>string</code> | Optional carrier identifier for defense-in-depth validation<br>against TNT's resolved carrier. Not required by TNT itself<br>-- omit unless you specifically want mismatch protection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getTracking(request)`

- **OnSuccess**: <code>[GetTrackingResponse](src/models/get-tracking-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetTrackingError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getTracking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTrackingResponse, Shipping.GetTrackingError&gt;</code>, with `result.value` of type <code>[GetTrackingResponse](src/models/get-tracking-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oneClickShipment(request: Shipping.OneClickShipmentRequestParams, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderShipmentsResponse, Shipping.OneClickShipmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convenience endpoint that combines rate quote and purchase into
a single round trip when the seller already knows the desired
service level. Returns the purchased shipment record directly.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.oneClickShipment({
    body: {
      shipTo: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      shipFrom: {
        name: "some example string",
        addressLine1: "some example string",
        city: "some example string",
        stateOrRegion: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      packages: [
        {
          dimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
          weight: { value: 1.5, unit: Unit1.Oz },
          packageClientReferenceId: "some example string",
        },
      ],
      serviceSelection: {},
      requestedDocumentSpecification: { format: Format1.Pdf, size: {}, dpi: Dpi._203 },
      channelDetails: { channelType: ChannelType.WalmartMarketplace },
    },
  });
  // TODO: Handle 'response' of type GetFulfillmentOrderShipmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.OneClickShipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.oneClickShipment({
  body: {
    shipTo: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    shipFrom: {
      name: "some example string",
      addressLine1: "some example string",
      city: "some example string",
      stateOrRegion: "some example string",
      postalCode: "some example string",
      countryCode: "some example string",
    },
    packages: [
      {
        dimensions: { length: 1.5, width: 1.5, height: 1.5, unit: Unit.Inches },
        weight: { value: 1.5, unit: Unit1.Oz },
        packageClientReferenceId: "some example string",
      },
    ],
    serviceSelection: {},
    requestedDocumentSpecification: { format: Format1.Pdf, size: {}, dpi: Dpi._203 },
    channelDetails: { channelType: ChannelType.WalmartMarketplace },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderShipmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OneClickShipmentRequest](src/models/one-click-shipment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.oneClickShipment(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: throws <code>[Shipping.OneClickShipmentError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.oneClickShipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderShipmentsResponse, Shipping.OneClickShipmentError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchaseShipment(request: Shipping.PurchaseShipmentRequestParams, options?: RequestOptions): ApiPromise&lt;GetFulfillmentOrderShipmentsResponse, Shipping.PurchaseShipmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purchases the shipping label for the rate selected from a prior
getRates response. Returns the shipment record with label
document references.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.purchaseShipment({
    body: {
      requestToken: "some example string",
      rateId: "some example string",
      requestedDocumentSpecification: { format: Format1.Pdf, size: {}, dpi: Dpi._203 },
    },
  });
  // TODO: Handle 'response' of type GetFulfillmentOrderShipmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.PurchaseShipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.purchaseShipment({
  body: {
    requestToken: "some example string",
    rateId: "some example string",
    requestedDocumentSpecification: { format: Format1.Pdf, size: {}, dpi: Dpi._203 },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetFulfillmentOrderShipmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PurchaseShipmentRequest](src/models/purchase-shipment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.purchaseShipment(request)`

- **OnSuccess**: <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: throws <code>[Shipping.PurchaseShipmentError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.purchaseShipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetFulfillmentOrderShipmentsResponse, Shipping.PurchaseShipmentError&gt;</code>, with `result.value` of type <code>[GetFulfillmentOrderShipmentsResponse](src/models/get-fulfillment-order-shipments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitNdrFeedback(request: Shipping.SubmitNdrFeedbackRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Shipping.SubmitNdrFeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits seller feedback on a non-delivery event for a shipment,
instructing the carrier on how to proceed (return, reattempt,
redirect, etc).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shipping.submitNdrFeedback({
    body: { sellerTrackingId: "some example string", ndrAction: NdrAction.ReturnToOrigin },
  });
} catch (err) {
  // TODO: Handle 'err' of type Shipping.SubmitNdrFeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping.submitNdrFeedback({
  body: { sellerTrackingId: "some example string", ndrAction: NdrAction.ReturnToOrigin },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SubmitNdrFeedbackRequest](src/models/submit-ndr-feedback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.submitNdrFeedback(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Shipping.SubmitNdrFeedbackError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.submitNdrFeedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Shipping.SubmitNdrFeedbackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/resources/uploads.ts)

<details>
<summary><code>createUploadDestinationForResource(request: Uploads.CreateUploadDestinationForResourceRequest, options?: RequestOptions): ApiPromise&lt;CreateUploadDestinationResponse, Uploads.CreateUploadDestinationForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pre-signed URL and upload destination ID for uploading
a document for the given resource (e.g. feeds, reports).
**Do not log the pre-signed URL — it contains temporary credentials.**


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.createUploadDestinationForResource({
    resource: Resource.Feeds,
    contentType: ContentType1.TextXmlCharsetUtf8,
    marketplaceIds: ["some example string"],
    contentMd5: "some example string",
  });
  // TODO: Handle 'response' of type CreateUploadDestinationResponse
} catch (err) {
  // TODO: Handle 'err' of type Uploads.CreateUploadDestinationForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.createUploadDestinationForResource({
  resource: Resource.Feeds,
  contentType: ContentType1.TextXmlCharsetUtf8,
  marketplaceIds: ["some example string"],
  contentMd5: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateUploadDestinationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource</code> | <code>[Resource](src/models/resource.ts)</code> | The resource type for the upload destination (e.g. feeds) |
| <code>contentType</code> | <code>[ContentType1](src/models/content-type1.ts)</code> | MIME type of the content to be uploaded |
| <code>marketplaceIds</code> | <code>string[]</code> | - |
| <code>contentMd5</code> | <code>string</code> | MD5 hash of the content to be uploaded, encoded as base64 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.createUploadDestinationForResource(request)`

- **OnSuccess**: <code>[CreateUploadDestinationResponse](src/models/create-upload-destination-response.ts)</code>
- **OnError**: throws <code>[Uploads.CreateUploadDestinationForResourceError](src/resources/uploads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploads.createUploadDestinationForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateUploadDestinationResponse, Uploads.CreateUploadDestinationForResourceError&gt;</code>, with `result.value` of type <code>[CreateUploadDestinationResponse](src/models/create-upload-destination-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

