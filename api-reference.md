# Reference

> Source: [WalmartApIsClient](src/client.ts)

## Authorization

> Source: [Authorization](src/resources/authorization.ts)

<details>
<summary><code>getTokenDetail(request: Authorization.GetTokenDetailRequest, options?: RequestOptions): ApiPromise&lt;TokenDetailResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This process retrieves the access permissions granted by sellers to applications in the context of OAuth 2.0. The scope encompasses various API categories, each with its respective access levels, for example Reports: View Only, Item: Full Access, etc.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.getTokenDetail({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmMarket: "us, mx, ca or cl",
    contentType: "application/x-www-form-urlencoded",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type TokenDetailResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization.getTokenDetail({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmMarket: "us, mx, ca or cl",
  contentType: "application/x-www-form-urlencoded",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenDetailResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmMarket</code> | <code>string</code> | Available marketplace location: us (USA), mx (Mexico), ca (Canada) or cl (Chile)<br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>contentType</code> | <code>string</code> | Content type of the request body. <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. <br><br><strong style="color: green;">**Market availability: Global**</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.getTokenDetail(request)`

- **OnSuccess**: <code>[TokenDetailResponse](src/models/token-detail-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.authorization.getTokenDetail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenDetailResponse, ApiError&gt;</code>, with `result.value` of type <code>[TokenDetailResponse](src/models/token-detail-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenApi(request: Authorization.TokenApiRequest, options?: RequestOptions): ApiPromise&lt;OAuthTokenModel, Authorization.TokenApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

<p>This endpoint issues access tokens required for authenticating API requests. It supports multiple OAuth 2.0 grant types to accommodate various integration scenarios.</p> <b style='color:green;'>Market availability: Global</b><br/><h3>Supported Grant Types</h3><table><tr><th>Grant Type</th><th>Description</th><th>How to get the credentials</th></tr><tr><td>authorization_code</td><td>Exchanges an authorization code for an access token.</td><td>Used in app integration only via the OAuth consent screen. This is applicable to the <strong>US market only</strong>. Refer to <a href=/global-marketplace/docs/oauth-20-authorization>OAuth 2.0 authorization</a> for more details.</td></tr><tr><td>client_credentials</td><td>Issues a token using client ID and secret.</td><td>For <strong>sellers</strong>: Obtain client_id and client_secret from the <strong>Developer Portal</strong>.<br/>For <strong>solution providers</strong>: Obtain credentials from sellers via <a href=/global-marketplace/docs/delegated-access-auth>Delegated Access authorization</a>.</td></tr><tr><td>refresh_token</td><td>Issues a new access token using a refresh token.</td><td>Provided during the authorization_code flow. This is applicable to the <strong>US market only</strong>. Refer to <a href=/global-marketplace/docs/oauth-20-authorization>OAuth 2.0 authorization</a> for more details.</td></tr></table><br/><b>Note:<br/></b> Use authorization_code and refresh_token <b>only for app-based integrations.</b> These grant types are currently <b>supported only in the US market</b>.<br/><br/><h3>Token Lifetimes</h3><table><tr><th>Token Type</th><th>Duration</th></tr><tr><td>Access Token</td><td>15 minutes <i>(900 seconds)</i></td></tr><tr><td>Refresh Token</td><td>1 year <i>(365 days)</i></td></tr></table>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.tokenApi({
    wmMarket: "us, mx, ca or cl",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmPartnerId: "43423324",
    grantType: GrantType1.ClientCredentials,
    code: "65CA5DA313A549D49D15D3119D9AD85D",
    redirectUri: "https://example-client-app.com",
    refreshToken: "APXcIoTpKMH9OQN.....",
  });
  // TODO: Handle 'response' of type OAuthTokenModel
} catch (err) {
  // TODO: Handle 'err' of type Authorization.TokenApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization.tokenApi({
  wmMarket: "us, mx, ca or cl",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmPartnerId: "43423324",
  grantType: GrantType1.ClientCredentials,
  code: "65CA5DA313A549D49D15D3119D9AD85D",
  redirectUri: "https://example-client-app.com",
  refreshToken: "APXcIoTpKMH9OQN.....",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthTokenModel
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
| <code>wmMarket</code> | <code>string</code> | Available marketplace location: us (USA), mx (Mexico), ca (Canada) or cl (Chile)<br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmPartnerId?</code> | <code>string</code> | Partner Id registered in Walmart marketplace to identify a seller. <br /> This field is required when **grant_type: authorization_code** and **grant_type: refresh_token** <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>grantType?</code> | <code>[GrantType1](src/models/grant-type1.ts)</code> | Type of grant requested. <br /> **Available grant types:** authorization_code, refresh_token and client_credentials <br><br><strong style="color: green;">**Market availability: Global**</strong><br>**Default**: "client_credentials" |
| <code>code?</code> | <code>string</code> | Authorization code obtained by your client app when the seller authorizes your app to access the seller resource. <br /> This field is required when **grant_type: authorization_code** <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>redirectUri?</code> | <code>string</code> | This should be same as one of your client app URIs provided while registering the app. <br /> This field is required when **grant_type: authorization_code** <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>refreshToken?</code> | <code>string</code> | Refresh token received as response of Authentication API with authorization_code grant type, to be used to refresh the access token. The token lifetime is 1 year. <br><br><strong style="color: green;">**Market availability: Global**</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.tokenApi(request)`

- **OnSuccess**: <code>[OAuthTokenModel](src/models/oauth-token-model.ts)</code>
- **OnError**: throws <code>[Authorization.TokenApiError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.tokenApi(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthTokenModel, Authorization.TokenApiError&gt;</code>, with `result.value` of type <code>[OAuthTokenModel](src/models/oauth-token-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SemCampaignManagement

> Source: [SemCampaignManagement](src/resources/sem-campaign-management.ts)

<details>
<summary><code>createCampaign(request: SemCampaignManagement.CreateCampaignRequest, options?: RequestOptions): ApiPromise&lt;SemCampaignResponse, SemCampaignManagement.CreateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to create a new campaign by providing the required details in the request. Upon successful creation, a unique campaign ID will be assigned to the newly created campaign for identification and management purposes.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.createCampaign({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    body: {
      metadata: { name: "some example string", startDate: "some example string", dailyBudget: 1.5 },
      itemsOperations: [{ operationType: OperationType.Add, skus: ["some example string"] }],
    },
  });
  // TODO: Handle 'response' of type SemCampaignResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.CreateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.createCampaign({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  body: {
    metadata: { name: "some example string", startDate: "some example string", dailyBudget: 1.5 },
    itemsOperations: [{ operationType: OperationType.Add, skus: ["some example string"] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaignResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[SemCampaignCreateRequest](src/models/sem-campaign-create-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.createCampaign(request)`

- **OnSuccess**: <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.CreateCampaignError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.createCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaignResponse, SemCampaignManagement.CreateCampaignError&gt;</code>, with `result.value` of type <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCampaign(request: SemCampaignManagement.DeleteCampaignRequest, options?: RequestOptions): ApiPromise&lt;SemCampaignResponse, SemCampaignManagement.DeleteCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to permanently remove an existing campaign from the system. Once deleted, the campaign and its unique ID will no longer be retrievable. The campaign's unique ID must be included in the request.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.deleteCampaign({
    campaignId: "some example string",
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemCampaignResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.DeleteCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.deleteCampaign({
  campaignId: "some example string",
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaignResponse
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
| <code>campaignId</code> | <code>string</code> | Campaign ID of the campaign to be deleted. |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.deleteCampaign(request)`

- **OnSuccess**: <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.DeleteCampaignError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.deleteCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaignResponse, SemCampaignManagement.DeleteCampaignError&gt;</code>, with `result.value` of type <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignDetails(request: SemCampaignManagement.GetCampaignDetailsRequest, options?: RequestOptions): ApiPromise&lt;SemCampaign, SemCampaignManagement.GetCampaignDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to retrieve detailed information about a specific campaign. Provide the campaign's unique ID in the request to fetch its attributes.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.getCampaignDetails({
    campaignId: "some example string",
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemCampaign
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.GetCampaignDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.getCampaignDetails({
  campaignId: "some example string",
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaign
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
| <code>campaignId</code> | <code>string</code> | Campaign ID of the campaign whose details are to be retrieved. |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.getCampaignDetails(request)`

- **OnSuccess**: <code>[SemCampaign](src/models/sem-campaign.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.GetCampaignDetailsError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.getCampaignDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaign, SemCampaignManagement.GetCampaignDetailsError&gt;</code>, with `result.value` of type <code>[SemCampaign](src/models/sem-campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCampaignRecommendations(request: SemCampaignManagement.SearchCampaignRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;CampaignRecommendationsSearchResponse, SemCampaignManagement.SearchCampaignRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for campaign-level recommendations to improve SEM campaign performance. Returns a paginated list of active campaigns for the authenticated seller, each enriched with actionable recommendations — including budget adjustments and bidding strategy optimizations — along with projected performance impact metrics (clicks, impressions, ad spend).<br><b style='color:green;'>Market availability: US only</b>

### Why this API matters
SEM campaigns require continuous optimization to stay competitive. Budget constraints and suboptimal bidding strategies are the two most common reasons campaigns underperform. Without data-driven guidance, sellers either overspend without results or miss revenue opportunities by underspending.

This API bridges that gap by surfacing **machine-generated recommendations** for each active campaign, complete with projected impact on clicks, impressions, and ad spend. Partners can integrate these recommendations into their dashboards and automation pipelines to:
- **Increase ROAS**: Apply budget and bidding strategy recommendations to maximize return on ad spend
- **Reduce wasted spend**: Identify campaigns where budget is being underutilized or misallocated
- **Automate campaign tuning**: Build automated workflows that periodically fetch recommendations and apply them programmatically, reducing manual effort and reaction time
- **Enable data-driven decisions**: Each recommendation includes three impact scenarios (recommended, conservative, aggressive) so sellers can choose the option that fits their risk tolerance

### Key use cases
1. **Campaign Health Dashboard**: Display campaigns with pending recommendations, color-coded by type (`BUDGET` vs `BIDDING_STRATEGY`), with projected impact metrics
2. **Automated Budget Optimizer**: Periodically poll this API and auto-apply budget recommendations that meet a minimum projected ROAS threshold
3. **Bidding Strategy Advisor**: Surface bidding strategy change suggestions to sellers with before/after performance projections
4. **Bulk Campaign Management**: Retrieve all recommendations across campaigns in a single paginated call, enabling batch review and bulk application of changes

### How it works
The API returns only active campaigns that are eligible for recommendations. You can filter results using `campaignIds` or `recommendationType` (`BUDGET` or `BIDDING_STRATEGY`).

### Default behavior
- When no request body is provided, the API defaults to `offset=0`, `limit=10`.
- By default, the API returns recommendations for both `BUDGET` and `BIDDING_STRATEGY`.
- Results are not sorted by default; use the sort object to order by adspend.
- Returns only **active campaigns** that have at least one pending recommendation
- Results are not sorted by default; use the `sort` object to order by `adspend`

### Supported filters
Filters are combined with AND logic. Multiple values within a single filter act as OR.

| Filter Field              | Supported Values              | Description                                              |
|---------------------------|-------------------------------|----------------------------------------------------------|
| `campaignIds`             | Numeric string campaign IDs   | Filter by specific campaign identifiers                  |
| `recommendationType`  | `BUDGET`, `BIDDING_STRATEGY`  | Filter by recommendation type                            |

### Sorting
Results can be sorted using the `sort` object:

| Sort Field | Supported Orders | Description                              |
|------------|------------------|------------------------------------------|
| `adspend`  | `ASC`, `DESC`    | Sort campaigns by ad spend               |

### Recommendation types
| Type               | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| `BUDGET`           | Recommended total or daily budget adjustment to improve campaign reach    |
| `BIDDING_STRATEGY` | Recommended change to bidding strategy for better performance            |

### Response structure
Each response contains two top-level fields:
- `pagination`: Standard pagination metadata (`pageNo`, `pageSize`, `totalCount`, `totalPages`, `hasNextPage`, `hasPreviousPage`)
- `data`: Array of campaign-level suggestions. Each campaign includes current settings (bidding strategy, target ROAS, daily budget) and an array of `campaignRecommendations` with projected performance impact at three levels: recommended, minimum, and maximum.

### Performance impact projections
Each recommendation includes a `recommendedValueImpact` object with up to three scenarios:
- **recommended**: The optimal suggested value (marked `isRecommended: true`)
- **minRecommendation**: A conservative lower-bound option (may be `null` if not applicable)
- **maxRecommendation**: An aggressive upper-bound option

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.searchCampaignRecommendations({
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
    accept: Accept.ApplicationJson,
    body: { page: { offset: 0, limit: 10 } },
  });
  // TODO: Handle 'response' of type CampaignRecommendationsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.SearchCampaignRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.searchCampaignRecommendations({
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
  accept: Accept.ApplicationJson,
  body: { page: { offset: 0, limit: 10 } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignRecommendationsSearchResponse
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
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request.<br>**Default**: "us" |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The expected response content type.<br>**Default**: "application/json" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body?</code> | <code>[CampaignRecommendationsSearchRequest](src/models/campaign-recommendations-search-request.ts)</code> | Optional search request with pagination, sorting, and filters. Defaults to `offset=0`, `limit=10` with no filters and no sorting if body is absent. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.searchCampaignRecommendations(request)`

- **OnSuccess**: <code>[CampaignRecommendationsSearchResponse](src/models/campaign-recommendations-search-response.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.SearchCampaignRecommendationsError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.searchCampaignRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignRecommendationsSearchResponse, SemCampaignManagement.SearchCampaignRecommendationsError&gt;</code>, with `result.value` of type <code>[CampaignRecommendationsSearchResponse](src/models/campaign-recommendations-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopCampaign(request: SemCampaignManagement.StopCampaignRequest, options?: RequestOptions): ApiPromise&lt;SemCampaignResponse, SemCampaignManagement.StopCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to stop an active campaign. Stopping a campaign does not delete it but prevents further actions. The campaign's unique ID must be included in the request.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.stopCampaign({
    campaignId: "some example string",
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemCampaignResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.StopCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.stopCampaign({
  campaignId: "some example string",
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaignResponse
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
| <code>campaignId</code> | <code>string</code> | Campaign ID of the campaign to be stopped. |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.stopCampaign(request)`

- **OnSuccess**: <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.StopCampaignError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.stopCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaignResponse, SemCampaignManagement.StopCampaignError&gt;</code>, with `result.value` of type <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaign(request: SemCampaignManagement.UpdateCampaignRequest, options?: RequestOptions): ApiPromise&lt;SemCampaignResponse, SemCampaignManagement.UpdateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify an existing campaign's details and manage its associated items. You must provide the campaign's unique ID along with the necessary changes in the request. The specified updates will be applied while preserving the campaign's unique identifier.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCampaignManagement.updateCampaign({
    campaignId: "some example string",
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    body: {},
  });
  // TODO: Handle 'response' of type SemCampaignResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCampaignManagement.UpdateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCampaignManagement.updateCampaign({
  campaignId: "some example string",
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaignResponse
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
| <code>campaignId</code> | <code>string</code> | Campaign ID of the campaign to be updated. |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[SemCampaignUpdateRequest](src/models/sem-campaign-update-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCampaignManagement.updateCampaign(request)`

- **OnSuccess**: <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: throws <code>[SemCampaignManagement.UpdateCampaignError](src/resources/sem-campaign-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCampaignManagement.updateCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaignResponse, SemCampaignManagement.UpdateCampaignError&gt;</code>, with `result.value` of type <code>[SemCampaignResponse](src/models/sem-campaign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SemCatalog

> Source: [SemCatalog](src/resources/sem-catalog.ts)

<details>
<summary><code>getEligibleItems(request: SemCatalog.GetEligibleItemsRequest, options?: RequestOptions): ApiPromise&lt;SemCatalogueResponse, SemCatalog.GetEligibleItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to check whether an item from your catalog meets the required conditions for Search Engine Marketing ads.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCatalog.getEligibleItems({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    body: { filters: [{ field: "some example string", values: ["some example string"] }] },
  });
  // TODO: Handle 'response' of type SemCatalogueResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCatalog.GetEligibleItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCatalog.getEligibleItems({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  body: { filters: [{ field: "some example string", values: ["some example string"] }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCatalogueResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[SemItemEligibilityRequest](src/models/sem-item-eligibility-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCatalog.getEligibleItems(request)`

- **OnSuccess**: <code>[SemCatalogueResponse](src/models/sem-catalogue-response.ts)</code>
- **OnError**: throws <code>[SemCatalog.GetEligibleItemsError](src/resources/sem-catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCatalog.getEligibleItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCatalogueResponse, SemCatalog.GetEligibleItemsError&gt;</code>, with `result.value` of type <code>[SemCatalogueResponse](src/models/sem-catalogue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemRecommendations(request: SemCatalog.GetItemRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;SemCatalogueResponse, SemCatalog.GetItemRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to fetch a list of top recommended items from your catalog. You can customize the number of recommendations to be returned by adjusting the request parameter.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semCatalog.getItemRecommendations({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemCatalogueResponse
} catch (err) {
  // TODO: Handle 'err' of type SemCatalog.GetItemRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semCatalog.getItemRecommendations({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCatalogueResponse
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
| <code>limit?</code> | <code>number</code> | Specifies the maximum number of recommended items to be returned. This value cannot exceed 200.<br>**Default**: 100 |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semCatalog.getItemRecommendations(request)`

- **OnSuccess**: <code>[SemCatalogueResponse](src/models/sem-catalogue-response.ts)</code>
- **OnError**: throws <code>[SemCatalog.GetItemRecommendationsError](src/resources/sem-catalog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semCatalog.getItemRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCatalogueResponse, SemCatalog.GetItemRecommendationsError&gt;</code>, with `result.value` of type <code>[SemCatalogueResponse](src/models/sem-catalogue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SemReporting

> Source: [SemReporting](src/resources/sem-reporting.ts)

<details>
<summary><code>getBillingHistory(request: SemReporting.GetBillingHistoryRequest, options?: RequestOptions): ApiPromise&lt;SemBillingHistoryResponse, SemReporting.GetBillingHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to fetch your billing history.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semReporting.getBillingHistory({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemBillingHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type SemReporting.GetBillingHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semReporting.getBillingHistory({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemBillingHistoryResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body?</code> | <code>[SemBillingHistoryRequest](src/models/sem-billing-history-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semReporting.getBillingHistory(request)`

- **OnSuccess**: <code>[SemBillingHistoryResponse](src/models/sem-billing-history-response.ts)</code>
- **OnError**: throws <code>[SemReporting.GetBillingHistoryError](src/resources/sem-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semReporting.getBillingHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemBillingHistoryResponse, SemReporting.GetBillingHistoryError&gt;</code>, with `result.value` of type <code>[SemBillingHistoryResponse](src/models/sem-billing-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignLevelSummary(request: SemReporting.GetCampaignLevelSummaryRequest, options?: RequestOptions): ApiPromise&lt;SemCampaignLevelReportResponse, SemReporting.GetCampaignLevelSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to fetch comprehensive performance metrics for all campaigns, allowing you to analyze key performance indicators based on specified filtering and sorting criteria.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semReporting.getCampaignLevelSummary({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemCampaignLevelReportResponse
} catch (err) {
  // TODO: Handle 'err' of type SemReporting.GetCampaignLevelSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semReporting.getCampaignLevelSummary({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemCampaignLevelReportResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body?</code> | <code>[SemReportRequest](src/models/sem-report-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semReporting.getCampaignLevelSummary(request)`

- **OnSuccess**: <code>[SemCampaignLevelReportResponse](src/models/sem-campaign-level-report-response.ts)</code>
- **OnError**: throws <code>[SemReporting.GetCampaignLevelSummaryError](src/resources/sem-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semReporting.getCampaignLevelSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemCampaignLevelReportResponse, SemReporting.GetCampaignLevelSummaryError&gt;</code>, with `result.value` of type <code>[SemCampaignLevelReportResponse](src/models/sem-campaign-level-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getItemLevelSummary(request: SemReporting.GetItemLevelSummaryRequest, options?: RequestOptions): ApiPromise&lt;SemItemLevelReportResponse, SemReporting.GetItemLevelSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to fetch comprehensive performance metrics for all the items in a specific campaign, allowing you to analyze key performance indicators based on specified filtering and sorting criteria.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semReporting.getItemLevelSummary({
    campaignId: "some example string",
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type SemItemLevelReportResponse
} catch (err) {
  // TODO: Handle 'err' of type SemReporting.GetItemLevelSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semReporting.getItemLevelSummary({
  campaignId: "some example string",
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SemItemLevelReportResponse
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
| <code>campaignId</code> | <code>string</code> | Campaign ID of the campaign whose item-level performance report is to be retrieved. |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body?</code> | <code>[SemReportRequest](src/models/sem-report-request.ts)</code> | Request Payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semReporting.getItemLevelSummary(request)`

- **OnSuccess**: <code>[SemItemLevelReportResponse](src/models/sem-item-level-report-response.ts)</code>
- **OnError**: throws <code>[SemReporting.GetItemLevelSummaryError](src/resources/sem-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semReporting.getItemLevelSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SemItemLevelReportResponse, SemReporting.GetItemLevelSummaryError&gt;</code>, with `result.value` of type <code>[SemItemLevelReportResponse](src/models/sem-item-level-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WsrAttributionReports

> Source: [WsrAttributionReports](src/resources/wsr-attribution-reports.ts)

<details>
<summary><code>getTagTemplates(request: WsrAttributionReports.GetTagTemplatesRequest, options?: RequestOptions): ApiPromise&lt;WsrTagTemplatesResponse, WsrAttributionReports.GetTagTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch referral link tag templates for different page types (ITEM, BRANDSHOP). Tag templates contain URL patterns with placeholders that can be used to construct final referral URLs/tags for affiliate tracking.

<span style="color:green">**Market availability: US**</span>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wsrAttributionReports.getTagTemplates({
    templateType: TemplateType.NonMacro,
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
  });
  // TODO: Handle 'response' of type WsrTagTemplatesResponse
} catch (err) {
  // TODO: Handle 'err' of type WsrAttributionReports.GetTagTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wsrAttributionReports.getTagTemplates({
  templateType: TemplateType.NonMacro,
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WsrTagTemplatesResponse
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
| <code>templateType?</code> | <code>[TemplateType](src/models/template-type.ts)</code> | The type of tag template to fetch. Currently supports NON_MACRO.<br><br><span style="color:green">**Market availability: Global**</span><br>**Default**: "NON_MACRO" |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | The target market of the API call.<br>**Default**: "us" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wsrAttributionReports.getTagTemplates(request)`

- **OnSuccess**: <code>[WsrTagTemplatesResponse](src/models/wsr-tag-templates-response.ts)</code>
- **OnError**: throws <code>[WsrAttributionReports.GetTagTemplatesError](src/resources/wsr-attribution-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wsrAttributionReports.getTagTemplates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WsrTagTemplatesResponse, WsrAttributionReports.GetTagTemplatesError&gt;</code>, with `result.value` of type <code>[WsrTagTemplatesResponse](src/models/wsr-tag-templates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWsrItemReport(request: WsrAttributionReports.GetWsrItemReportRequest, options?: RequestOptions): ApiPromise&lt;WsrItemReportResponse, WsrAttributionReports.GetWsrItemReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed item-level performance reports for affiliate campaigns.

<span style="color:green">**Market availability: US only**</span>

This endpoint returns performance data at the individual item/product level,
including product details such as item name, category, and product type along
with performance metrics. This is useful for understanding which products are
driving the most revenue through affiliate channels.

### Aggregation Levels and Field Availability
The `performanceBy` parameter determines which identifier fields are populated in the response:

| performanceBy | campaignId | adGroupId | creativeId |
|---------------|------------|-----------|------------|
| CAMPAIGN      | ✓          | null      | null       |
| ADGROUP       | ✓          | ✓         | null       |
| CREATIVE      | ✓          | ✓         | ✓          |

### Supported filters
- `startDate`: Report start date (required)
- `endDate`: Report end date (required)
- `campaignId`: Filter by specific campaign IDs
- `adGroupId`: Filter by specific ad group IDs
- `creativeId`: Filter by specific creative IDs

### Date Validation Rules
- End date must be strictly after start date
- Maximum date range: less than 1 year
- Dates must be in ISO format (YYYY-MM-DD)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wsrAttributionReports.getWsrItemReport({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
    body: {
      performanceBy: PerformanceBy.Campaign,
      startDate: "2026-01-01",
      endDate: "2026-01-31",
      page: { limit: 10, offset: 0 },
      sort: { field: Field.Gmv, order: Order.Desc },
    },
  });
  // TODO: Handle 'response' of type WsrItemReportResponse
} catch (err) {
  // TODO: Handle 'err' of type WsrAttributionReports.GetWsrItemReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wsrAttributionReports.getWsrItemReport({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
  body: {
    performanceBy: PerformanceBy.Campaign,
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    page: { limit: 10, offset: 0 },
    sort: { field: Field.Gmv, order: Order.Desc },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WsrItemReportResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request.<br>**Default**: "us" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[WsrReportRequest](src/models/wsr-report-request.ts)</code> | Item report request with filters and parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wsrAttributionReports.getWsrItemReport(request)`

- **OnSuccess**: <code>[WsrItemReportResponse](src/models/wsr-item-report-response.ts)</code>
- **OnError**: throws <code>[WsrAttributionReports.GetWsrItemReportError](src/resources/wsr-attribution-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wsrAttributionReports.getWsrItemReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WsrItemReportResponse, WsrAttributionReports.GetWsrItemReportError&gt;</code>, with `result.value` of type <code>[WsrItemReportResponse](src/models/wsr-item-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWsrPerformanceReport(request: WsrAttributionReports.GetWsrPerformanceReportRequest, options?: RequestOptions): ApiPromise&lt;WsrPerformanceReportResponse, WsrAttributionReports.GetWsrPerformanceReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve performance analytics and metrics for affiliate campaigns.

<span style="color:green">**Market availability: US only**</span>

This endpoint returns aggregated performance data including clicks, orders,
GMV, and commission metrics within a specified date range. Data can be
aggregated at different levels based on the `performanceBy` parameter.

### Aggregation Levels and Field Availability
The `performanceBy` parameter determines which identifier fields are populated in the response:

| performanceBy | campaignId | adGroupId | creativeId |
|---------------|------------|-----------|------------|
| CAMPAIGN      | ✓          | null      | null       |
| ADGROUP       | ✓          | ✓         | null       |
| CREATIVE      | ✓          | ✓         | ✓          |

### Supported filters
- `startDate`: Report start date (required)
- `endDate`: Report end date (required)
- `campaignId`: Filter by specific campaign IDs
- `adGroupId`: Filter by specific ad group IDs
- `creativeId`: Filter by specific creative IDs

### Date Validation Rules
- End date must be strictly after start date
- Maximum date range: less than 1 year
- Dates must be in ISO format (YYYY-MM-DD)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wsrAttributionReports.getWsrPerformanceReport({
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
    body: {
      performanceBy: PerformanceBy.Campaign,
      startDate: "2026-01-01",
      endDate: "2026-01-31",
      page: { limit: 10, offset: 0 },
      sort: { field: Field.Gmv, order: Order.Desc },
    },
  });
  // TODO: Handle 'response' of type WsrPerformanceReportResponse
} catch (err) {
  // TODO: Handle 'err' of type WsrAttributionReports.GetWsrPerformanceReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wsrAttributionReports.getWsrPerformanceReport({
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
  body: {
    performanceBy: PerformanceBy.Campaign,
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    page: { limit: 10, offset: 0 },
    sort: { field: Field.Gmv, order: Order.Desc },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WsrPerformanceReportResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request.<br>**Default**: "us" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[WsrReportRequest](src/models/wsr-report-request.ts)</code> | Performance report request with date range and optional filters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.wsrAttributionReports.getWsrPerformanceReport(request)`

- **OnSuccess**: <code>[WsrPerformanceReportResponse](src/models/wsr-performance-report-response.ts)</code>
- **OnError**: throws <code>[WsrAttributionReports.GetWsrPerformanceReportError](src/resources/wsr-attribution-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wsrAttributionReports.getWsrPerformanceReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WsrPerformanceReportResponse, WsrAttributionReports.GetWsrPerformanceReportError&gt;</code>, with `result.value` of type <code>[WsrPerformanceReportResponse](src/models/wsr-performance-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SemItemDiagnostics

> Source: [SemItemDiagnostics](src/resources/sem-item-diagnostics.ts)

<details>
<summary><code>getIssueTypes(request: SemItemDiagnostics.GetIssueTypesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, IssueMetadata&gt;, SemItemDiagnostics.GetIssueTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete, authoritative metadata for all SEM eligibility issue types (~61 issue types, ~5KB).<br><b style='color:green;'>Market availability: US only</b>

Items used in Search Engine Marketing (SEM) campaigns such as Google Shopping Ads must meet specific content, quality, and policy requirements before they can be advertised on search engines. When items fail to meet these requirements, they are flagged with specific issue types that either **block** the item from being advertised entirely or **limit** its visibility and performance in SEM.

This endpoint returns the complete catalog of all issue types that can affect an item's SEM eligibility, along with human-readable names, descriptions, remediation guidance, severity categories, and help links. It serves as the **single source of truth** for issue metadata.

### Current scope
The issue types returned by this endpoint apply to items that are currently part of active SEM campaigns. The `POST /item-issues/search` endpoint uses these issue types to report diagnostics on campaign items.

### Future extensibility
In a future release, the `POST /item-issues/search` endpoint will support querying diagnostic issues for any item in the seller's catalog — even items not yet added to a campaign — using the `itemId` filter. The same issue types returned by this endpoint will apply to those items as well, enabling sellers to proactively diagnose and fix issues before campaign onboarding.

### SEM eligibility issue categories
Each issue type belongs to one of three categories that indicate its impact on an item's ability to be advertised on search engines:

| Category     | Count | SEM Impact                                                                     |
|--------------|-------|--------------------------------------------------------------------------------|
| `BLOCKED`    | ~49   | Item **cannot be advertised** on search engines. Must be resolved before the item can appear in SEM ads. Examples: `ITEM_OUT_OF_STOCK`, `POLICY_VIOLATION`, `MISSING_INVALID_TITLE`, `INVALID_IMAGE`, `BUYBOX_NOT_WINNER` |
| `LIMITED`    | ~11   | Item **can be advertised but with reduced visibility** or performance on search engines. Resolving these issues improves ad reach and effectiveness. Examples: `TITLE_TOO_LONG`, `LOW_IMAGE_QUALITY`, `DESCRIPTION_TOO_SHORT`, `LOW_OFFER_LISTING_QUALITY` |
| `NO_ISSUES`  | ~1    | Informational statuses such as `DUPLICATE_OFFER` — item has no SEM eligibility issues |

### Actionable vs non-actionable issues
Each issue type includes an `isFixable` flag that indicates whether the seller can resolve the issue:
- `isFixable=true`: Seller can take action to restore or improve SEM eligibility (For example, restock inventory, update title, improve image quality). Partners should surface these with a "Fix Now" UI affordance.
- `isFixable=false`: Requires Walmart or system intervention (For example, Google policy violations, BuyBox eligibility). Partners should display these as informational — the seller cannot directly resolve them.

### Response structure
The response is a map keyed by `issueType` (string), where each value is an `IssueMetadata` object containing:
- `issueName`: Human-readable short headline for UI display (For example, "Item Out of Stock")
- `issueCategory`: SEM eligibility impact — `BLOCKED` (cannot advertise on search engines) or `LIMITED` (reduced SEM visibility)
- `isFixable`: Whether the partner can remediate this issue to restore SEM eligibility
- `issueDescription`: Human-readable description with specific remediation guidance (For example, "Item is out of stock. Add inventory to make the item available.")
- `learnMoreUrl`: Help link to Walmart-hosted or Google support documentation for step-by-step remediation. May be null for some issue types.

### Recommended usage pattern
1. Call this endpoint **once** on application initialization
2. Cache the result locally (recommended **TTL: 24 hours**)
3. Use cached metadata to enrich items returned by the `POST /item-issues/search` endpoint — match each item's `issueType` to the cached metadata for display name, description, and help links
4. Use `isFixable` to drive UI affordances: show "Fix Now" buttons for fixable SEM issues, informational badges for non-fixable ones
5. Use `learnMoreUrl` to deep-link to help documentation for step-by-step remediation guidance
6. Use `issueCategory` to color-code or badge issues in your UI: red for `BLOCKED` (cannot advertise), yellow for `LIMITED` (reduced SEM performance)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semItemDiagnostics.getIssueTypes({
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
  });
  // TODO: Handle 'response' of type Record<string, IssueMetadata>
} catch (err) {
  // TODO: Handle 'err' of type SemItemDiagnostics.GetIssueTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semItemDiagnostics.getIssueTypes({
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, IssueMetadata>
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
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request.<br>**Default**: "us" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semItemDiagnostics.getIssueTypes(request)`

- **OnSuccess**: <code>Record&lt;string, [IssueMetadata](src/models/issue-metadata.ts)&gt;</code>
- **OnError**: throws <code>[SemItemDiagnostics.GetIssueTypesError](src/resources/sem-item-diagnostics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semItemDiagnostics.getIssueTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, IssueMetadata&gt;, SemItemDiagnostics.GetIssueTypesError&gt;</code>, with `result.value` of type <code>Record&lt;string, [IssueMetadata](src/models/issue-metadata.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchItemIssues(request: SemItemDiagnostics.SearchItemIssuesRequest, options?: RequestOptions): ApiPromise&lt;ItemDiagnosticSearchResponse, SemItemDiagnostics.SearchItemIssuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for item-level diagnostic issues that block or limit items from being used in Search Engine Marketing (SEM). Returns paginated, item-level diagnostic details including campaign associations, issue types, severity, remediation guidance, and overall item status.<br><b style='color:green;'>Market availability: US only</b>

Items in SEM campaigns must meet content, quality, and policy requirements before they can be advertised on search engines (For example, Google Shopping Ads). This endpoint surfaces the specific issues preventing or limiting an item's SEM eligibility, along with actionable remediation guidance so sellers can resolve problems and restore advertising reach.

### Current scope
This endpoint currently returns diagnostics for **items that are part of active SEM campaigns** for the authenticated seller. Each item in the response includes its `campaignAssociations` — the list of campaigns the item belongs to. Items not associated with any campaign are not included in the results.

### Default behavior
- When no request body is provided, defaults to `offset=0`, `limit=100` with no filters
- When no `issueCategory` filter is provided, returns **only items with issues** (`BLOCKED` or `LIMITED`)
- To include healthy items, explicitly pass `issueCategory` filter with `NO_ISSUES` or all three values
- By default, the API prioritizes returning actionable diagnostic issues rather than healthy items. This reduces payload size and improves relevance

### Supported filters
Filters are combined with AND logic. Multiple values within a single filter act as OR.

| Filter Field    | Supported Values                          | Max Values | Description                                              |
|-----------------|-------------------------------------------|------------|----------------------------------------------------------|
| `issues`        | Any valid `issueType` enum value          | 100        | Filter by specific SEM issue types (For example, `ITEM_OUT_OF_STOCK`, `TITLE_TOO_LONG`, `POLICY_VIOLATION`) |
| `issueCategory` | `LIMITED`, `BLOCKED`, `NO_ISSUES`         | 100        | Filter by SEM issue severity — `BLOCKED` items cannot be advertised at all, `LIMITED` items have reduced SEM performance |
| `itemId`        | Numeric string item IDs                   | 100        | Filter by Walmart catalog item identifiers within the seller's active campaigns. *In a future release, this filter will also support items outside of campaigns.* |

### Response structure
Each response contains two top-level fields:
- `pagination`: Standard pagination metadata including `hasNextPage`/`hasPreviousPage` for convenient UI navigation
- `data`: Array of item-level diagnostics. Each item appears **once** per unique `offerId` with all campaign associations listed. Each item includes an `issueCategory` field representing the overall SEM eligibility status of the item, and an `issues` array containing issue type identifiers. Issues are item-level, not campaign-specific — a blocked item is blocked in all SEM campaigns it belongs to.

Issue metadata (name, description, fixability, help links) is not included in this response. Partners should use the dedicated `GET /item-issues/issue-types` endpoint to retrieve complete issue metadata and cache it locally (TTL: 24 hours).

### Issue categories
| Category     | SEM Impact                                                                     |
|--------------|--------------------------------------------------------------------------------|
| `BLOCKED`    | Item **cannot be advertised** on search engines. Must be resolved before the item can appear in SEM ads. Examples: out of stock, missing title, policy violation, invalid image. |
| `LIMITED`    | Item **can be advertised but with reduced visibility** or performance on search engines. Resolving these issues improves ad reach and effectiveness. Examples: title too long, low image quality, description too short. |
| `NO_ISSUES`  | Item has no SEM issues and can be advertised normally with full visibility.      |

### Actionable vs non-actionable issues
Each issue type has an `isFixable` flag available via the `GET /item-issues/issue-types` reference endpoint:
- `isFixable=true`: Seller can fix the issue to restore SEM eligibility (For example, restock inventory, update title, fix image). Partners should surface these with a "Fix Now" UI affordance.
- `isFixable=false`: Requires Walmart or system intervention (For example, Google policy violations). Partners should display these as informational — the seller cannot directly resolve them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.semItemDiagnostics.searchItemIssues({
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: WmMarket.Us,
    accept: Accept.ApplicationJson,
    body: { page: { offset: 0, limit: 20 } },
  });
  // TODO: Handle 'response' of type ItemDiagnosticSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type SemItemDiagnostics.SearchItemIssuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.semItemDiagnostics.searchItemIssues({
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: WmMarket.Us,
  accept: Accept.ApplicationJson,
  body: { page: { offset: 0, limit: 20 } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemDiagnosticSearchResponse
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
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. |
| <code>wmGlobalVersion?</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br>**Default**: "3.1" |
| <code>wmMarket?</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request.<br>**Default**: "us" |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | The expected response content type.<br>**Default**: "application/json" |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body?</code> | <code>[ItemDiagnosticSearchRequest](src/models/item-diagnostic-search-request.ts)</code> | Optional search request with pagination and filters.<br>Defaults to `offset=0`, `limit=100` with no filters if body is absent.<br>When no `issueCategory` filter is provided, only items with issues (`BLOCKED` or `LIMITED`) are returned.<br>This reduces payload size and improves relevance — diagnostics API consumers typically want problems, not healthy-item confirmation.<br>To include all items, explicitly pass `issueCategory` filter with all three values: `LIMITED`, `BLOCKED`, `NO_ISSUES`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.semItemDiagnostics.searchItemIssues(request)`

- **OnSuccess**: <code>[ItemDiagnosticSearchResponse](src/models/item-diagnostic-search-response.ts)</code>
- **OnError**: throws <code>[SemItemDiagnostics.SearchItemIssuesError](src/resources/sem-item-diagnostics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.semItemDiagnostics.searchItemIssues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemDiagnosticSearchResponse, SemItemDiagnostics.SearchItemIssuesError&gt;</code>, with `result.value` of type <code>[ItemDiagnosticSearchResponse](src/models/item-diagnostic-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AssortmentRecommendations

> Source: [AssortmentRecommendations](src/resources/assortment-recommendations.ts)

<details>
<summary><code>getAssortmentRecommendationTrends(request: AssortmentRecommendations.GetAssortmentRecommendationTrendsRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthAssortmentRecommendationsTrendsResponse, AssortmentRecommendations.GetAssortmentRecommendationTrendsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can fetch the monthly and weekly trends for both demand and price, for the assortment recommendations that are recommended for you. <br><b style='color:green;'>Market availability: US only</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assortmentRecommendations.getAssortmentRecommendationTrends({
    recommendationUniqueId: "some example string",
    trendTypes: "PRICE_TRENDS,DEMAND_TRENDS",
    wmGlobalVersion: WmGlobalVersion._31,
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3GrowthAssortmentRecommendationsTrendsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssortmentRecommendations.GetAssortmentRecommendationTrendsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assortmentRecommendations.getAssortmentRecommendationTrends({
  recommendationUniqueId: "some example string",
  trendTypes: "PRICE_TRENDS,DEMAND_TRENDS",
  wmGlobalVersion: WmGlobalVersion._31,
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthAssortmentRecommendationsTrendsResponse
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
| <code>recommendationUniqueId</code> | <code>string</code> | Unique ID that is returned in the response of the get recommendations API or in the on-request bulk CSV file. <br><b style='color:green;'>Market availability: US only</span></b> |
| <code>trendTypes?</code> | <code>string</code> | Comma separated list of trends.<br><b style='color:green;'>Market availability: US only</span></b><br><br> \| Attribute \| Description \| Data Type \|<br>\| --- \| ----------- \| ------- \|<br>\| PRICE_TRENDS \| Indicates the price trends for the recommended item in the marketplace currency for rolling 52-weeks/12-months. The data may not be available for all weeks/months. \| string \|<br>\| DEMAND_TRENDS \| Indicates the demand trends for the recommended item for 52-weeks/12-months. \| string \| |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assortmentRecommendations.getAssortmentRecommendationTrends(request)`

- **OnSuccess**: <code>[V3GrowthAssortmentRecommendationsTrendsResponse](src/models/v3-growth-assortment-recommendations-trends-response.ts)</code>
- **OnError**: throws <code>[AssortmentRecommendations.GetAssortmentRecommendationTrendsError](src/resources/assortment-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assortmentRecommendations.getAssortmentRecommendationTrends(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthAssortmentRecommendationsTrendsResponse, AssortmentRecommendations.GetAssortmentRecommendationTrendsError&gt;</code>, with `result.value` of type <code>[V3GrowthAssortmentRecommendationsTrendsResponse](src/models/v3-growth-assortment-recommendations-trends-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAssortmentRecommendationVariants(request: AssortmentRecommendations.GetAssortmentRecommendationVariantsRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthAssortmentRecommendationsVariantsResponse, AssortmentRecommendations.GetAssortmentRecommendationVariantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can fetch variant items corresponding to a recommended primary variant item. <br><b style='color:green;'>Market availability: US only</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assortmentRecommendations.getAssortmentRecommendationVariants({
    primaryVariantItemId: "some example string",
    nextCursor: "*",
    wmGlobalVersion: WmGlobalVersion._31,
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3GrowthAssortmentRecommendationsVariantsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssortmentRecommendations.GetAssortmentRecommendationVariantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assortmentRecommendations.getAssortmentRecommendationVariants({
  primaryVariantItemId: "some example string",
  nextCursor: "*",
  wmGlobalVersion: WmGlobalVersion._31,
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthAssortmentRecommendationsVariantsResponse
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
| <code>primaryVariantItemId</code> | <code>string</code> | Primary variant item ID that is returned in the response of get recommendations API or in the on-request bulk CSV file. <br><b style='color:green;'>Market availability: US only</span></b> |
| <code>nextCursor?</code> | <code>string</code> | Used for pagination when more than 200 records are retrieved. The nextCursor value of the response includes a marker which needs to be passed in next call which retrieves the next page of results. <br><b style='color:green;'>Market availability: US only</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assortmentRecommendations.getAssortmentRecommendationVariants(request)`

- **OnSuccess**: <code>[V3GrowthAssortmentRecommendationsVariantsResponse](src/models/v3-growth-assortment-recommendations-variants-response.ts)</code>
- **OnError**: throws <code>[AssortmentRecommendations.GetAssortmentRecommendationVariantsError](src/resources/assortment-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assortmentRecommendations.getAssortmentRecommendationVariants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthAssortmentRecommendationsVariantsResponse, AssortmentRecommendations.GetAssortmentRecommendationVariantsError&gt;</code>, with `result.value` of type <code>[V3GrowthAssortmentRecommendationsVariantsResponse](src/models/v3-growth-assortment-recommendations-variants-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAssortmentRecommendations(request: AssortmentRecommendations.GetAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthAssortmentRecommendationsResponse, AssortmentRecommendations.GetAssortmentRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can fetch the list of recommendations that are recommended for you. 

Using ITEM as a recommendationType,
*   You can get the list of ITEM recommendations. You can apply filters to fetch selective item recommendations. <br><b style='color:green;'>Market availability: US | CA | MX</span></b> 



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assortmentRecommendations.getAssortmentRecommendations({
    wmGlobalVersion: WmGlobalVersion._31,
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    body: { meta: { limit: 2 } },
  });
  // TODO: Handle 'response' of type V3GrowthAssortmentRecommendationsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssortmentRecommendations.GetAssortmentRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assortmentRecommendations.getAssortmentRecommendations({
  wmGlobalVersion: WmGlobalVersion._31,
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  body: { meta: { limit: 2 } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthAssortmentRecommendationsResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3GrowthAssortmentRecommendationsRequest](src/models/v3-growth-assortment-recommendations-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assortmentRecommendations.getAssortmentRecommendations(request)`

- **OnSuccess**: <code>[V3GrowthAssortmentRecommendationsResponse](src/models/v3-growth-assortment-recommendations-response.ts)</code>
- **OnError**: throws <code>[AssortmentRecommendations.GetAssortmentRecommendationsError](src/resources/assortment-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assortmentRecommendations.getAssortmentRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthAssortmentRecommendationsResponse, AssortmentRecommendations.GetAssortmentRecommendationsError&gt;</code>, with `result.value` of type <code>[V3GrowthAssortmentRecommendationsResponse](src/models/v3-growth-assortment-recommendations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategorizationDetailsOfAssortmentRecommendations(request: AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthAssortmentRecommendationsCategorizationCountsResponse, AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can get the list of brands or categories associated with the items recommendations that are recommended for you.

Using BRAND as a categorizationType
*   You can get the list of brands sorted by the number of item recommendations associated with it. This is then sorted in lexicographic order of brand name. 

Using CATEGORY as a categorizationType
*   You can get the list of categories sorted by the number of item recommendations associated with it. This is then sorted in lexicographic order of category name. 
<br><b style='color:green;'>Market availability: US | CA | MX</span></b> 



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assortmentRecommendations.getCategorizationDetailsOfAssortmentRecommendations(
    {
      wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
      wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
      wmSvcName: "Walmart Service Name",
      wmMarket: WmMarket1.Us,
      wmGlobalVersion: WmGlobalVersion._31,
      body: { categorizationType: CategorizationType3.Brand, meta: { limit: 2 } },
    },
  );
  // TODO: Handle 'response' of type V3GrowthAssortmentRecommendationsCategorizationCountsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assortmentRecommendations.getCategorizationDetailsOfAssortmentRecommendations({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { categorizationType: CategorizationType3.Brand, meta: { limit: 2 } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthAssortmentRecommendationsCategorizationCountsResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs <br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID <br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called <br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1<br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel <br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>body</code> | <code>[V3GrowthAssortmentRecommendationsCategorizationCountsRequest](src/models/v3-growth-assortment-recommendations-categorization-counts-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assortmentRecommendations.getCategorizationDetailsOfAssortmentRecommendations(request)`

- **OnSuccess**: <code>[V3GrowthAssortmentRecommendationsCategorizationCountsResponse](src/models/v3-growth-assortment-recommendations-categorization-counts-response.ts)</code>
- **OnError**: throws <code>[AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError](src/resources/assortment-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assortmentRecommendations.getCategorizationDetailsOfAssortmentRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthAssortmentRecommendationsCategorizationCountsResponse, AssortmentRecommendations.GetCategorizationDetailsOfAssortmentRecommendationsError&gt;</code>, with `result.value` of type <code>[V3GrowthAssortmentRecommendationsCategorizationCountsResponse](src/models/v3-growth-assortment-recommendations-categorization-counts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rejectAssortmentRecommendations(request: AssortmentRecommendations.RejectAssortmentRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthAssortmentRecommendationsRejectionsResponse, AssortmentRecommendations.RejectAssortmentRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can reject a list of recommendations that are recommended for you. 

Using ITEM as a recommendationType,
*   You can reject specific item recommendations using the filterCriteria or by providing the list of itemRecommendationUniqueIds. 
*   You will need to provide valid rejection code(s) while submitting the reject request. You are required to send the custom rejection message if the rejection code is OTHER_REASON
<br><b style='color:green;'>Market availability: US | CA | MX</span></b> 



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assortmentRecommendations.rejectAssortmentRecommendations({
    wmGlobalVersion: WmGlobalVersion._31,
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    body: { rejectionCodes: RejectionCodes1.NotSellingTheseItems },
  });
  // TODO: Handle 'response' of type V3GrowthAssortmentRecommendationsRejectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type AssortmentRecommendations.RejectAssortmentRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assortmentRecommendations.rejectAssortmentRecommendations({
  wmGlobalVersion: WmGlobalVersion._31,
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  body: { rejectionCodes: RejectionCodes1.NotSellingTheseItems },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthAssortmentRecommendationsRejectionsResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3GrowthAssortmentRecommendationsRejectionsRequest](src/models/v3-growth-assortment-recommendations-rejections-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assortmentRecommendations.rejectAssortmentRecommendations(request)`

- **OnSuccess**: <code>[V3GrowthAssortmentRecommendationsRejectionsResponse](src/models/v3-growth-assortment-recommendations-rejections-response.ts)</code>
- **OnError**: throws <code>[AssortmentRecommendations.RejectAssortmentRecommendationsError](src/resources/assortment-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assortmentRecommendations.rejectAssortmentRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthAssortmentRecommendationsRejectionsResponse, AssortmentRecommendations.RejectAssortmentRecommendationsError&gt;</code>, with `result.value` of type <code>[V3GrowthAssortmentRecommendationsRejectionsResponse](src/models/v3-growth-assortment-recommendations-rejections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ShipmentProtection

> Source: [ShipmentProtection](src/resources/shipment-protection.ts)

<details>
<summary><code>downloadClaimDocuments(request: ShipmentProtection.DownloadClaimDocumentsRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ShipmentProtection.DownloadClaimDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a ZIP file containing one or more uploaded claim documents.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.downloadClaimDocuments({
    claimNumber: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    body: { documentIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.DownloadClaimDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.downloadClaimDocuments({
  claimNumber: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  body: { documentIds: ["some example string"] },
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
| <code>claimNumber</code> | <code>string</code> | Exact claim number for filtering (query) or identifying a specific claim (path). |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>body</code> | <code>[V3ClaimsShipmentProtectionClaimDocumentsRequest](src/models/v3-claims-shipment-protection-claim-documents-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.downloadClaimDocuments(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ShipmentProtection.DownloadClaimDocumentsError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.downloadClaimDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ShipmentProtection.DownloadClaimDocumentsError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClaimDetails(request: ShipmentProtection.GetClaimDetailsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ShipmentProtection.GetClaimDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves detailed information for a single claim.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.getClaimDetails({
    claimNumber: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.GetClaimDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.getClaimDetails({
  claimNumber: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
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
| <code>claimNumber</code> | <code>string</code> | Exact claim number for filtering (query) or identifying a specific claim (path). |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.getClaimDetails(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ShipmentProtection.GetClaimDetailsError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.getClaimDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ShipmentProtection.GetClaimDetailsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClaimHistory(request: ShipmentProtection.GetClaimHistoryRequest, options?: RequestOptions): ApiPromise&lt;V3ClaimsShipmentProtectionClaimHistoryResponse, ShipmentProtection.GetClaimHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a chronological log of status changes, notes, and uploaded documents.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.getClaimHistory({
    claimNumber: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type V3ClaimsShipmentProtectionClaimHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.GetClaimHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.getClaimHistory({
  claimNumber: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ClaimsShipmentProtectionClaimHistoryResponse
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
| <code>claimNumber</code> | <code>string</code> | Exact claim number for filtering (query) or identifying a specific claim (path). |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.getClaimHistory(request)`

- **OnSuccess**: <code>[V3ClaimsShipmentProtectionClaimHistoryResponse](src/models/v3-claims-shipment-protection-claim-history-response.ts)</code>
- **OnError**: throws <code>[ShipmentProtection.GetClaimHistoryError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.getClaimHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ClaimsShipmentProtectionClaimHistoryResponse, ShipmentProtection.GetClaimHistoryError&gt;</code>, with `result.value` of type <code>[V3ClaimsShipmentProtectionClaimHistoryResponse](src/models/v3-claims-shipment-protection-claim-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listClaims(request: ShipmentProtection.ListClaimsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ShipmentProtection.ListClaimsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of claims, with optional filters.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.listClaims({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.ListClaimsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.listClaims({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
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
| <code>limit?</code> | <code>number</code> | Maximum number of results to return in the response page (default 25, maximum 300).<br>**Default**: 25 |
| <code>offset?</code> | <code>number</code> | Zero‑based index of the first result to return (default 0). Use together with `limit` for pagination.<br>**Default**: 0 |
| <code>claimsGroup?</code> | <code>[ClaimsGroup](src/models/claims-group.ts)</code> | Filter claims by broad status group: OPEN, ACTION_NEEDED, or CLOSED. |
| <code>claimNumber?</code> | <code>string</code> | Exact claim number for filtering (query) or identifying a specific claim (path). |
| <code>purchaseOrderId?</code> | <code>string</code> | Filter by the Walmart purchase order ID associated with the claim. |
| <code>trackingNo?</code> | <code>string</code> | Filter by the package tracking number associated with the claim. |
| <code>claimTypes?</code> | <code>string</code> | Comma‑separated list of claim types to include (LIT, LAD, DAMAGED). |
| <code>claimStatuses?</code> | <code>string</code> | Comma‑separated list of claim status codes to include (INITIATED, IN_REVIEW, NEED_INFO, etc.). |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | Field to sort by; currently supports `claimDate`. |
| <code>sortOrder?</code> | <code>[Order](src/models/order.ts)</code> | Sort direction: `ASC` for ascending or `DESC` for descending (default DESC). |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.listClaims(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ShipmentProtection.ListClaimsError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.listClaims(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ShipmentProtection.ListClaimsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitAdditionalInfo(request: ShipmentProtection.SubmitAdditionalInfoRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ShipmentProtection.SubmitAdditionalInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds documents or notes to an existing claim when Walmart requests more details.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.submitAdditionalInfo({
    claimNumber: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    files: new Uint8Array(),
    documentTypes: [{ fileName: "item_damage.jpg", type: Type11.ProofOfDamagedItem }],
    notes: "Here is the picture you requested.",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.SubmitAdditionalInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.submitAdditionalInfo({
  claimNumber: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  files: new Uint8Array(),
  documentTypes: [{ fileName: "item_damage.jpg", type: Type11.ProofOfDamagedItem }],
  notes: "Here is the picture you requested.",
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
| <code>claimNumber</code> | <code>string</code> | Exact claim number for filtering (query) or identifying a specific claim (path). |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>files</code> | <code>FileInput</code> | Additional supporting file. |
| <code>documentTypes</code> | <code>[DocumentType1](src/models/document-type1.ts)[]</code> | Mapping for each uploaded file. |
| <code>notes?</code> | <code>string</code> | Additional information requested by Walmart |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.submitAdditionalInfo(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ShipmentProtection.SubmitAdditionalInfoError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.submitAdditionalInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ShipmentProtection.SubmitAdditionalInfoError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitClaim(request: ShipmentProtection.SubmitClaimRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ShipmentProtection.SubmitClaimError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shipment-protection claim. Send multipart/form-data with files, documentTypes, and payload.<br><b style='color:green;'>Market availability: US Only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipmentProtection.submitClaim({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    files: new Uint8Array(),
    documentTypes: [
      { fileName: "file1.jpg", type: Type1.ProofOfDamagedItem },
      { fileName: "invoice.pdf", type: Type1.Invoice },
    ],
    payload: {
      purchaseOrderNo: "RAPMOCK1729803026938",
      purchaseOrderLineNo: "1",
      salesOrderNo: "RAPMOCK1729803026883",
      salesOrderLineNo: "1",
      fulfillerLineId: "1",
      quantity: 3,
      returnOrderId: "136900073772361154",
      claimType: ClaimType.Damaged,
      notes: "Claim submission notes.",
    },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ShipmentProtection.SubmitClaimError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipmentProtection.submitClaim({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  files: new Uint8Array(),
  documentTypes: [
    { fileName: "file1.jpg", type: Type1.ProofOfDamagedItem },
    { fileName: "invoice.pdf", type: Type1.Invoice },
  ],
  payload: {
    purchaseOrderNo: "RAPMOCK1729803026938",
    purchaseOrderLineNo: "1",
    salesOrderNo: "RAPMOCK1729803026883",
    salesOrderLineNo: "1",
    fulfillerLineId: "1",
    quantity: 3,
    returnOrderId: "136900073772361154",
    claimType: ClaimType.Damaged,
    notes: "Claim submission notes.",
  },
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
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues; use a randomly generated GUID for this ID. |
| <code>wmSvcName</code> | <code>string</code> | Walmart service name—for Marketplace APIs simply use `Walmart Service Name` or the service identifier provided by Walmart. |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. |
| <code>files</code> | <code>FileInput</code> | Supporting file (image, PDF, etc.). |
| <code>documentTypes</code> | <code>[DocumentType](src/models/document-type.ts)[]</code> | Maps each uploaded file to its document category. |
| <code>payload</code> | <code>[Payload](src/models/payload.ts)</code> | Claim details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipmentProtection.submitClaim(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ShipmentProtection.SubmitClaimError](src/resources/shipment-protection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipmentProtection.submitClaim(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ShipmentProtection.SubmitClaimError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
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
<summary><code>postContest(request: Disputes.PostContestRequest, options?: RequestOptions): ApiPromise&lt;DisputeContestResponses, Disputes.PostContestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to submit dispute for up to 100 items at a time.

We need to pass `productId`, and `productIdType` in the body for creating a dispute. 

*   POST {{url}}/v3/items/dispute/duplicates/contest 
<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.postContest({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { issues: [{}] },
  });
  // TODO: Handle 'response' of type DisputeContestResponses
} catch (err) {
  // TODO: Handle 'err' of type Disputes.PostContestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.postContest({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { issues: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputeContestResponses
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body</code> | <code>[V3ItemsDisputeDuplicatesContestRequest](src/models/v3-items-dispute-duplicates-contest-request.ts)</code> | Required fields for the dispute. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.postContest(request)`

- **OnSuccess**: <code>[DisputeContestResponses](src/models/dispute-contest-responses.ts)</code>
- **OnError**: throws <code>[Disputes.PostContestError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.postContest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputeContestResponses, Disputes.PostContestError&gt;</code>, with `result.value` of type <code>[DisputeContestResponses](src/models/dispute-contest-responses.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postStatus(request: Disputes.PostStatusRequest, options?: RequestOptions): ApiPromise&lt;V3ItemsDisputeDuplicatesStatusResponse, Disputes.PostStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the status of up to 100 disputed items at a time.

We need to pass `productId`, and `productIdType` in the body for creating a dispute. 

*   POST {{url}}/v3/items/dispute/duplicates/status 

Responses will be based on the item status: 

* 404: No item Response 

* 200: Response received for all items 

* 206: Partial response received 

An Item can be in 4 different stages: 
* `IN_REVIEW`, `IS_DUPLICATE`, `ERROR`, `NOT_DUPLICATE` 
<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.postStatus({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { issues: [{}] },
  });
  // TODO: Handle 'response' of type V3ItemsDisputeDuplicatesStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Disputes.PostStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.postStatus({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { issues: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ItemsDisputeDuplicatesStatusResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body</code> | <code>[V3ItemsDisputeDuplicatesStatusRequest](src/models/v3-items-dispute-duplicates-status-request.ts)</code> | Required fields for the dispute. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.postStatus(request)`

- **OnSuccess**: <code>[V3ItemsDisputeDuplicatesStatusResponse](src/models/v3-items-dispute-duplicates-status-response.ts)</code>
- **OnError**: throws <code>[Disputes.PostStatusError](src/resources/disputes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputes.postStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ItemsDisputeDuplicatesStatusResponse, Disputes.PostStatusError&gt;</code>, with `result.value` of type <code>[V3ItemsDisputeDuplicatesStatusResponse](src/models/v3-items-dispute-duplicates-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeedsApi

> Source: [FeedsApi](src/resources/feeds-api.ts)

<details>
<summary><code>getAllFeedStatuses(request: FeedsApi.GetAllFeedStatusesRequest, options?: RequestOptions): ApiPromise&lt;FeedRecordResponse, FeedsApi.GetAllFeedStatusesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API returns the feed statuses for all the specified feed IDs. Use the specified feedTypes to query the status of each feed and identify whether it was processed successfully, failed, or is still in progress. 

 | FeedTypes | Availability |
|--------|----------|
| MP_MAINTENANCE, MP_ITEM_MATCH, LAGTIME | Global |
| MP_INVENTORY, SKU_TEMPLATE_MAP | US, CA, MX |
| MP_ITEM_INTL | CA, MX, CL |
| MP_ITEM, MP_WFS_ITEM, WALMART_FUNDED_INCENTIVES_ENROLLMENT, INCENTIVE_ENROLLMENT,PRICE_AND_PROMOTION | US Only |
| OMNI_WFS, RETIRE_ITEM, SHIPPING_OVERRIDES, FITMENT_ACES, FITMENT_PIES, SPLIT_AND_MERGE | US Only |
| OMNI_WFSSETUP, OMNI_WFSCONVERT | CA, MX | 

<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedsApi.getAllFeedStatuses({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type FeedRecordResponse
} catch (err) {
  // TODO: Handle 'err' of type FeedsApi.GetAllFeedStatusesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedsApi.getAllFeedStatuses({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedRecordResponse
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
| <code>feedId?</code> | <code>string</code> | A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special characters must be escaped. (e.g., feedId: '...3456@789...' must be entered in the URL as '...3456%40789).<br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>feedType?</code> | <code>string</code> | The feedType parameter defines the type of feed whose status you are querying. Feed types are specific to each market, so be sure to provide a value that is supported for your target market. <br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>feedStatus?</code> | <code>[FeedStatus1](src/models/feed-status1.ts)</code> | Status of the feed.<br><br><strong style="color: green;">**Market availability: Global**</strong> |
| <code>offset?</code> | <code>string</code> | The object response to start with, where 0 is the first entity that can be requested. <br><br><strong style="color: green;">**Market availability: Global**</strong><br>**Default**: "0" |
| <code>limit?</code> | <code>string</code> | The number of entities to be returned. It cannot be more than 50 entities.<br><strong style="color: green;">**Market availability: Global**</strong><br>**Default**: "50" |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedsApi.getAllFeedStatuses(request)`

- **OnSuccess**: <code>[FeedRecordResponse](src/models/feed-record-response.ts)</code>
- **OnError**: throws <code>[FeedsApi.GetAllFeedStatusesError](src/resources/feeds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feedsApi.getAllFeedStatuses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedRecordResponse, FeedsApi.GetAllFeedStatusesError&gt;</code>, with `result.value` of type <code>[FeedRecordResponse](src/models/feed-record-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedErrorReport(request: FeedsApi.GetFeedErrorReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Feed Error Report API allows you to download a detailed error report for a submitted feed. 

Currently the API supports error report download for the following feeds: 
*   FITMENT_ACES 
*   FITMENT_PIES 

 This API returns a zipped .csv file, which contains line item level detailed error messages. For details and a sample, please refer to the guide section link below. 
<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedsApi.getFeedErrorReport({
    feedId: "some example string",
    feedType: FeedType.FitmentAces,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedsApi.getFeedErrorReport({
  feedId: "some example string",
  feedType: FeedType.FitmentAces,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedId</code> | <code>string</code> | Feed Id of the feed.<br><br><strong style="color: green;">**Market availability: US only**</strong> |
| <code>feedType</code> | <code>[FeedType](src/models/feed-type.ts)</code> | Feed type for which Error Report needs to be downloaded.<br><br><strong style="color: green;">**Market availability: US only**</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedsApi.getFeedErrorReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.feedsApi.getFeedErrorReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFeedItemStatus(request: FeedsApi.GetFeedItemStatusRequest, options?: RequestOptions): ApiPromise&lt;V3FeedsResponse1, FeedsApi.GetFeedItemStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the feed and item status for a specified Feed ID.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedsApi.getFeedItemStatus({
    feedId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3FeedsResponse1
} catch (err) {
  // TODO: Handle 'err' of type FeedsApi.GetFeedItemStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedsApi.getFeedItemStatus({
  feedId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3FeedsResponse1
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
| <code>feedId</code> | <code>string</code> | A unique ID returned from the Bulk Upload API, used for tracking the Feed File. Special characters must be escaped. (e.g., feedId: '...3456@789...' must be entered in the URL as '...3456%40789).<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>includeDetails?</code> | <code>string</code> | Includes details for each entity in the feed. When set to true, returns detailed information about each item in the feed, including individual success or failure statuses and any specific error messages. Defaults to false, which returns only high-level feed status. <br><br><strong style="color: green;">**Market availability: Global**</strong><br>**Default**: "false" |
| <code>offset?</code> | <code>string</code> | The object response to start with, where 0 is the first entity that can be requested. Use only when `includeDetails` is set to true.<br><br><strong style="color: green;">Market availability: Global</strong><br>**Default**: "0" |
| <code>limit?</code> | <code>string</code> | The number of entities to be returned. It cannot be more than 50 entities. Use only when `includeDetails` is set to true.<br><br><strong style="color: green;">Market availability: Global</strong><br>**Default**: "50" |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedsApi.getFeedItemStatus(request)`

- **OnSuccess**: <code>[V3FeedsResponse1](src/models/v3-feeds-response1.ts)</code>
- **OnError**: throws <code>[FeedsApi.GetFeedItemStatusError](src/resources/feeds-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feedsApi.getFeedItemStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3FeedsResponse1, FeedsApi.GetFeedItemStatusError&gt;</code>, with `result.value` of type <code>[V3FeedsResponse1](src/models/v3-feeds-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsightApi

> Source: [InsightApi](src/resources/insight-api.ts)

<details>
<summary><code>getCategoriesList(request: InsightApi.GetCategoriesListRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsItemsListingQualityCountResponse, InsightApi.GetCategoriesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all item categories that have items with listing quality issues or brands for a seller.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getCategoriesList({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsItemsListingQualityCountResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetCategoriesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getCategoriesList({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsItemsListingQualityCountResponse
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
| <code>viewTrendingItems?</code> | <code>boolean</code> | Specify whether or not to include seller's items that are trending in the Listing Quality Score.<br><b style='color:green;'>Market availability: US only</b><br>**Default**: true |
| <code>wfsFlag?</code> | <code>boolean</code> | Specify whether or not to include WFS-eligible items in the overall Listing Quality Score.<br><b style='color:green;'>Market availability: US only</b> |
| <code>hasIssue?</code> | <code>number</code> | Specify whether or not to include items that have issues in the Listing Quality Score.<br><b style='color:green;'>Market availability: US only</b><br>**Default**: 0 |
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | Specify whether to get item count by brand or category.If not specified, category is the default value.<br><b style='color:green;'>Market availability: US only</b> |
| <code>inDemandIndicator?</code> | <code>boolean</code> | Specify whether to get item count by customer favorite.<br><b style='color:green;'>Market availability: US only</b> |
| <code>limit?</code> | <code>number</code> | Specify the number of items to return. The default is 100, with a maximum value of 1000..<br><b style='color:green;'>Market availability: US only</b> |
| <code>offset?</code> | <code>number</code> | Specify the offset of item list to be returned.<br><b style='color:green;'>Market availability: US only</b><br>**Default**: 0 |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getCategoriesList(request)`

- **OnSuccess**: <code>[V3InsightsItemsListingQualityCountResponse](src/models/v3-insights-items-listing-quality-count-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetCategoriesListError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getCategoriesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsItemsListingQualityCountResponse, InsightApi.GetCategoriesListError&gt;</code>, with `result.value` of type <code>[V3InsightsItemsListingQualityCountResponse](src/models/v3-insights-items-listing-quality-count-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListingQualityScore(request: InsightApi.GetListingQualityScoreRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsItemsListingQualityScoreResponse, InsightApi.GetListingQualityScoreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the total Listing Quality Score for a seller's entire item catalog.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getListingQualityScore({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsItemsListingQualityScoreResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetListingQualityScoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getListingQualityScore({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsItemsListingQualityScoreResponse
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
| <code>viewTrendingItems?</code> | <code>boolean</code> | Specify whether or not to include seller's items that are trending in the Listing Quality Score.<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |
| <code>wfsFlag?</code> | <code>string</code> | Specify whether or not to include WFS-eligible items in the overall Listing Quality Score.<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getListingQualityScore(request)`

- **OnSuccess**: <code>[V3InsightsItemsListingQualityScoreResponse](src/models/v3-insights-items-listing-quality-score-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetListingQualityScoreError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getListingQualityScore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsItemsListingQualityScoreResponse, InsightApi.GetListingQualityScoreError&gt;</code>, with `result.value` of type <code>[V3InsightsItemsListingQualityScoreResponse](src/models/v3-insights-items-listing-quality-score-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProSellerBadgeInfo(request: InsightApi.GetProSellerBadgeInfoRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsProsellerbadgeResponse, InsightApi.GetProSellerBadgeInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Pro Seller badge status will provide you with information regarding your current badge status as well as the progress you've made in meeting the criteria.<br><b style='color:green;'>Market availability: MX only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getProSellerBadgeInfo({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsProsellerbadgeResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetProSellerBadgeInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getProSellerBadgeInfo({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsProsellerbadgeResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getProSellerBadgeInfo(request)`

- **OnSuccess**: <code>[V3InsightsProsellerbadgeResponse](src/models/v3-insights-prosellerbadge-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetProSellerBadgeInfoError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getProSellerBadgeInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsProsellerbadgeResponse, InsightApi.GetProSellerBadgeInfoError&gt;</code>, with `result.value` of type <code>[V3InsightsProsellerbadgeResponse](src/models/v3-insights-prosellerbadge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSellerIncentivesInfo(request: InsightApi.GetSellerIncentivesInfoRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsSellerIncentivesResponse, InsightApi.GetSellerIncentivesInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Pro Seller Tier and Rewards Status API allows you to check your seller’s current tier status within the Pro Seller program, a three-tier incentive structure consisting of Rising, Advanced, and Pro Seller levels in US and a single-tier i.e Pro Seller in CA.<br><b style='color:green;'>Market availability: US | CA</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getSellerIncentivesInfo({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsSellerIncentivesResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetSellerIncentivesInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getSellerIncentivesInfo({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsSellerIncentivesResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getSellerIncentivesInfo(request)`

- **OnSuccess**: <code>[V3InsightsSellerIncentivesResponse](src/models/v3-insights-seller-incentives-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetSellerIncentivesInfoError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getSellerIncentivesInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsSellerIncentivesResponse, InsightApi.GetSellerIncentivesInfoError&gt;</code>, with `result.value` of type <code>[V3InsightsSellerIncentivesResponse](src/models/v3-insights-seller-incentives-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUnpublishedItemCount(request: InsightApi.GetUnpublishedItemCountRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsItemsUnpublishedCountsResponse, InsightApi.GetUnpublishedItemCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to get the count of unpublished items.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getUnpublishedItemCount({
    fromDate: "2020-09-23",
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsItemsUnpublishedCountsResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetUnpublishedItemCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getUnpublishedItemCount({
  fromDate: "2020-09-23",
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsItemsUnpublishedCountsResponse
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
| <code>fromDate</code> | <code>string</code> | Returns all unpublished items count with reason codes since the given date period<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getUnpublishedItemCount(request)`

- **OnSuccess**: <code>[V3InsightsItemsUnpublishedCountsResponse](src/models/v3-insights-items-unpublished-counts-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetUnpublishedItemCountError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getUnpublishedItemCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsItemsUnpublishedCountsResponse, InsightApi.GetUnpublishedItemCountError&gt;</code>, with `result.value` of type <code>[V3InsightsItemsUnpublishedCountsResponse](src/models/v3-insights-items-unpublished-counts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUnpublishedItems(request: InsightApi.GetUnpublishedItemsRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsItemsUnpublishedItemsResponse, InsightApi.GetUnpublishedItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Unpublished Items<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.getUnpublishedItems({
    fromDate: "2020-09-23",
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
  });
  // TODO: Handle 'response' of type V3InsightsItemsUnpublishedItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.GetUnpublishedItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.getUnpublishedItems({
  fromDate: "2020-09-23",
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsItemsUnpublishedItemsResponse
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
| <code>fromDate</code> | <code>string</code> | Returns all unpublished items since the given date<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |
| <code>unpublishedReasonCode?</code> | <code>string</code> | Unpublished reason code<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "all" |
| <code>limit?</code> | <code>string</code> | The number of items to be returned.<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "20" |
| <code>offerLifecycleStatus?</code> | <code>string</code> | The lifecycle status of an item describes where the item listing is in the overall lifecycle. Examples of allowed values are ACTIVE , ARCHIVED, RETIRED.<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "all" |
| <code>marketTrending?</code> | <code>string</code> | Filter the item list to return only items that are trending on Walmart.com<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "true" |
| <code>itemsWithInventory?</code> | <code>string</code> | Filter the item list to return only items that have inventory<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "true" |
| <code>isCustomerFavorite?</code> | <code>boolean</code> | Filters items by customer favorite status. When set to `true`, only customer favorites are returned. When set to `false`, only non-favorites are returned. If omitted, all items are returned.<br><b style='color:green;'>Market availability: US only</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.getUnpublishedItems(request)`

- **OnSuccess**: <code>[V3InsightsItemsUnpublishedItemsResponse](src/models/v3-insights-items-unpublished-items-response.ts)</code>
- **OnError**: throws <code>[InsightApi.GetUnpublishedItemsError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.getUnpublishedItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsItemsUnpublishedItemsResponse, InsightApi.GetUnpublishedItemsError&gt;</code>, with `result.value` of type <code>[V3InsightsItemsUnpublishedItemsResponse](src/models/v3-insights-items-unpublished-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemsDetailsForListing(request: InsightApi.ItemsDetailsForListingRequest, options?: RequestOptions): ApiPromise&lt;V3InsightsItemsListingQualityItemsResponse, InsightApi.ItemsDetailsForListingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get each item's listing quality details including: item quality score, offer score, content score and issues, and item performance.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insightApi.itemsDetailsForListing({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    body: { query: { field: Field41.Sku, value: "WB 433KP412-12" } },
  });
  // TODO: Handle 'response' of type V3InsightsItemsListingQualityItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type InsightApi.ItemsDetailsForListingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insightApi.itemsDetailsForListing({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  body: { query: { field: Field41.Sku, value: "WB 433KP412-12" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3InsightsItemsListingQualityItemsResponse
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
| <code>limit?</code> | <code>string</code> | Specify number of items to return. If no limit is specified, API returns 200 items by default.<br><b style='color:green;'>Market availability: US \| CA \| MX</b><br>**Default**: "200" |
| <code>nextCursor?</code> | <code>string</code> | Specify pagination for long list of items.<br><b style='color:green;'>Market availability: US only</b> |
| <code>offset?</code> | <code>string</code> | Specify pagination for long list of items.<br><b style='color:green;'>Market availability: CA \| MX</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | GLOBAL VERSION DEFAULT AS 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3InsightsItemsListingQualityItemsRequest](src/models/v3-insights-items-listing-quality-items-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insightApi.itemsDetailsForListing(request)`

- **OnSuccess**: <code>[V3InsightsItemsListingQualityItemsResponse](src/models/v3-insights-items-listing-quality-items-response.ts)</code>
- **OnError**: throws <code>[InsightApi.ItemsDetailsForListingError](src/resources/insight-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insightApi.itemsDetailsForListing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3InsightsItemsListingQualityItemsResponse, InsightApi.ItemsDetailsForListingError&gt;</code>, with `result.value` of type <code>[V3InsightsItemsListingQualityItemsResponse](src/models/v3-insights-items-listing-quality-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InventoryApi

> Source: [InventoryApi](src/resources/inventory-api.ts)

<details>
<summary><code>getInventory(request: InventoryApi.GetInventoryRequest, options?: RequestOptions): ApiPromise&lt;Inventory1, InventoryApi.GetInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can use this API to get the inventory for a given item.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.getInventory({
    sku: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type Inventory1
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.GetInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.getInventory({
  sku: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Inventory1
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
| <code>sku</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>shipNode?</code> | <code>string</code> | The shipNode for which the inventory is requested. <br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.getInventory(request)`

- **OnSuccess**: <code>[Inventory1](src/models/inventory1.ts)</code>
- **OnError**: throws <code>[InventoryApi.GetInventoryError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.getInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Inventory1, InventoryApi.GetInventoryError&gt;</code>, with `result.value` of type <code>[Inventory1](src/models/inventory1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultiNodeInventoryForAllSkuAndAllShipNodes(request: InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest, options?: RequestOptions): ApiPromise&lt;MultiNodeInventoryFetchResponseDto, InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.
<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type MultiNodeInventoryFetchResponseDto
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiNodeInventoryFetchResponseDto
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
| <code>limit?</code> | <code>string</code> | The number of items returned. Cannot be more than 50.<br><br><strong style="color: green;">Market availability: US only</strong><br>**Default**: "10" |
| <code>nextCursor?</code> | <code>string</code> | String returned from initial API call to indicate pagination. Specify nextCursor value to retrieve the next 50 items.<br><br><strong style="color: green;">Market availability: US only</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes(request)`

- **OnSuccess**: <code>[MultiNodeInventoryFetchResponseDto](src/models/multi-node-inventory-fetch-response-dto.ts)</code>
- **OnError**: throws <code>[InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiNodeInventoryFetchResponseDto, InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError&gt;</code>, with `result.value` of type <code>[MultiNodeInventoryFetchResponseDto](src/models/multi-node-inventory-fetch-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMultiNodeInventoryForSkuAndAllShipnodes(request: InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesRequest, options?: RequestOptions): ApiPromise&lt;InventoriesDto, InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.getMultiNodeInventoryForSkuAndAllShipnodes({
    sku: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type InventoriesDto
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.getMultiNodeInventoryForSkuAndAllShipnodes({
  sku: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InventoriesDto
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
| <code>sku</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>shipNode?</code> | <code>string</code> | ShipNode Id of the ship node for which the inventory is requested<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.getMultiNodeInventoryForSkuAndAllShipnodes(request)`

- **OnSuccess**: <code>[InventoriesDto](src/models/inventories-dto.ts)</code>
- **OnError**: throws <code>[InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.getMultiNodeInventoryForSkuAndAllShipnodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InventoriesDto, InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError&gt;</code>, with `result.value` of type <code>[InventoriesDto](src/models/inventories-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWfsInventory(request: InventoryApi.GetWfsInventoryRequest, options?: RequestOptions): ApiPromise&lt;V3FulfillmentInventoryResponse, InventoryApi.GetWfsInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.getWfsInventory({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3FulfillmentInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.GetWfsInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.getWfsInventory({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3FulfillmentInventoryResponse
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
| <code>sku?</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>fromModifiedDate?</code> | <code>string</code> | last inventory modified date - starting range.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>toModifiedDate?</code> | <code>string</code> | last inventory modified date - starting range.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>limit?</code> | <code>string</code> | Number of Sku to be returned. Cannot be larger than 300.<br><br><strong style="color: green;">Market availability: Global</strong><br>**Default**: "10" |
| <code>offset?</code> | <code>string</code> | Offset is the number of records you wish to skip before selecting records.<br><br><strong style="color: green;">Market availability: Global</strong><br>**Default**: "0" |
| <code>shipNodeType?</code> | <code>string</code> | Currently supported: multichannel. This param is enabled only for multi channel sellers. sku becomes mandatory and other params are ineffective while using this param. sku can either contain one item or list of sku's separated by comma (example: sku1,sku2)<br><br><strong style="color: green;">Market availability: US only</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.getWfsInventory(request)`

- **OnSuccess**: <code>[V3FulfillmentInventoryResponse](src/models/v3-fulfillment-inventory-response.ts)</code>
- **OnError**: throws <code>[InventoryApi.GetWfsInventoryError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.getWfsInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3FulfillmentInventoryResponse, InventoryApi.GetWfsInventoryError&gt;</code>, with `result.value` of type <code>[V3FulfillmentInventoryResponse](src/models/v3-fulfillment-inventory-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBulkInventory(request: InventoryApi.UpdateBulkInventoryRequest, options?: RequestOptions): ApiPromise&lt;FeedId, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates inventory for items in bulk. 
Seller Can either use feed type "inventory" or "MP_INVENTORY" 
* Inventory spec 1.4 feed type: inventory 
* Inventory spec 1.5 feed type: MP_INVENTORY 

Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses.

 Refer to the throttling limits before uploading the Feed Files.

<b>Download the request body sample from </b>

 <a href="/file/mp/us/inventory-samples.zip">US Samples JSON</a>
<a href="/file/mp/ca/inventory-samples.zip">CA Samples JSON</a>
<a href="/file/mp/mx/inventory-samples.zip">MX Samples JSON</a>
<a href="/file/mp/cl/inventory-samples.zip">CL Samples JSON</a>
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.updateBulkInventory({
    feedType: FeedType1.Inventory,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    file: new Uint8Array(),
  });
  // TODO: Handle 'response' of type FeedId
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.updateBulkInventory({
  feedType: FeedType1.Inventory,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  file: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedType</code> | <code>[FeedType1](src/models/feed-type1.ts)</code> | The feed Type<br>Inventory: Global<br>MP_Inventory: US \| MX \| CA<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>shipNode?</code> | <code>string</code> | The shipNode for which the inventory is to be updated. Not required in case of Multi Node Inventory Update Feed (feedType=MP_INVENTORY)<br><br><strong style="color: green;">Market availability: US only</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>file</code> | <code>FileInput</code> | Feed file to upload<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.updateBulkInventory(request)`

- **OnSuccess**: <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.inventoryApi.updateBulkInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId, ApiError&gt;</code>, with `result.value` of type <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInventoryForAnItem(request: InventoryApi.UpdateInventoryForAnItemRequest, options?: RequestOptions): ApiPromise&lt;Inventory1, InventoryApi.UpdateInventoryForAnItemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the inventory for a given item.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.updateInventoryForAnItem({
    sku: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { sku: "97964_KFTest", quantity: { amount: 10 }, inventoryAvailableDate: "2024-09-20" },
  });
  // TODO: Handle 'response' of type Inventory1
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.UpdateInventoryForAnItemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.updateInventoryForAnItem({
  sku: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { sku: "97964_KFTest", quantity: { amount: 10 }, inventoryAvailableDate: "2024-09-20" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Inventory1
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
| <code>sku</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>shipNode?</code> | <code>string</code> | The shipNode for which the inventory is to be updated.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body</code> | <code>[V3InventoryRequest](src/models/v3-inventory-request.ts)</code> | File fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.updateInventoryForAnItem(request)`

- **OnSuccess**: <code>[Inventory1](src/models/inventory1.ts)</code>
- **OnError**: throws <code>[InventoryApi.UpdateInventoryForAnItemError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.updateInventoryForAnItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Inventory1, InventoryApi.UpdateInventoryForAnItemError&gt;</code>, with `result.value` of type <code>[Inventory1](src/models/inventory1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMultiNodeInventory(request: InventoryApi.UpdateMultiNodeInventoryRequest, options?: RequestOptions): ApiPromise&lt;MultiNodeInventoryUpdateResponseDto, InventoryApi.UpdateMultiNodeInventoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventoryApi.updateMultiNodeInventory({
    sku: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      inventories: {
        nodes: [
          { shipNode: "1000005050", inputQty: {}, inventoryAvailableDate: "2024-09-20" },
          { shipNode: "79897837271126017", inputQty: {}, inventoryAvailableDate: "2024-09-20" },
        ],
      },
    },
  });
  // TODO: Handle 'response' of type MultiNodeInventoryUpdateResponseDto
} catch (err) {
  // TODO: Handle 'err' of type InventoryApi.UpdateMultiNodeInventoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventoryApi.updateMultiNodeInventory({
  sku: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    inventories: {
      nodes: [
        { shipNode: "1000005050", inputQty: {}, inventoryAvailableDate: "2024-09-20" },
        { shipNode: "79897837271126017", inputQty: {}, inventoryAvailableDate: "2024-09-20" },
      ],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MultiNodeInventoryUpdateResponseDto
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
| <code>sku</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to encode space with %20. Other characters don't need to be encoded.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body</code> | <code>[V3InventoriesRequest](src/models/v3-inventories-request.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventoryApi.updateMultiNodeInventory(request)`

- **OnSuccess**: <code>[MultiNodeInventoryUpdateResponseDto](src/models/multi-node-inventory-update-response-dto.ts)</code>
- **OnError**: throws <code>[InventoryApi.UpdateMultiNodeInventoryError](src/resources/inventory-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.inventoryApi.updateMultiNodeInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MultiNodeInventoryUpdateResponseDto, InventoryApi.UpdateMultiNodeInventoryError&gt;</code>, with `result.value` of type <code>[MultiNodeInventoryUpdateResponseDto](src/models/multi-node-inventory-update-response-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LagTimeApi

> Source: [LagTimeApi](src/resources/lag-time-api.ts)

<details>
<summary><code>getLagTime(request: LagTimeApi.GetLagTimeRequest, options?: RequestOptions): ApiPromise&lt;LagTimeResponse, LagTimeApi.GetLagTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the lag time for a specific item using its SKU.

Lag Time represents the number of days between when an item is ordered and when it is shipped. Approval thresholds and exemption processes for higher lag times vary by market. For more details, refer to the relevant market-specific knowledge article.
<br><b style='color:green;'>Market availability: Global</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lagTimeApi.getLagTime({
    sku: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type LagTimeResponse
} catch (err) {
  // TODO: Handle 'err' of type LagTimeApi.GetLagTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lagTimeApi.getLagTime({
  sku: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LagTimeResponse
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
| <code>sku</code> | <code>string</code> | A unique alphanumeric ID assigned by the seller to identify each item. The seller uses this ID in the XSD file to reference specific items. If the SKU contains any of the following special characters — :, /, ?, #, [, ], @, !, $, &, ', (, ), *, +, ,, ;, =, space, {, }, or % — they must be URL-encoded. For example, encode spaces as %20. No encoding is required for other characters.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lagTimeApi.getLagTime(request)`

- **OnSuccess**: <code>[LagTimeResponse](src/models/lag-time-response.ts)</code>
- **OnError**: throws <code>[LagTimeApi.GetLagTimeError](src/resources/lag-time-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lagTimeApi.getLagTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LagTimeResponse, LagTimeApi.GetLagTimeError&gt;</code>, with `result.value` of type <code>[LagTimeResponse](src/models/lag-time-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLagTimeBulk(request: LagTimeApi.UpdateLagTimeBulkRequest, options?: RequestOptions): ApiPromise&lt;FeedId1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update lag time for multiple items at once.

Lag Time represents the number of days between when an item is ordered and when it is shipped. Approval thresholds and exemption processes for higher lag times vary by market. For more details, refer to the relevant market-specific knowledge article.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lagTimeApi.updateLagTimeBulk({
    feedType: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { lagTimeHeader: {} },
  });
  // TODO: Handle 'response' of type FeedId1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lagTimeApi.updateLagTimeBulk({
  feedType: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { lagTimeHeader: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedType</code> | <code>string</code> | Indicates the feed type. Use 'lagtime'.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body</code> | <code>[V3FeedsRequest](src/models/v3-feeds-request.ts)</code> | File fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lagTimeApi.updateLagTimeBulk(request)`

- **OnSuccess**: <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.lagTimeApi.updateLagTimeBulk(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId1, ApiError&gt;</code>, with `result.value` of type <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>createSubscription(request: Notifications.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;V3WebhooksSubscriptionsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create one or more webhook subscriptions for event notifications by selecting an event type, event version, resource name, and providing a destination event URL.

Use the Get Event Types API to retrieve available event types, versions, and resource names. Configure the eventUrl to receive notifications.

URL authentication options
- If authMethod is BASIC_AUTH, Walmart passes an authentication header to the eventUrl using authHeaderName as the header key and the Base64-encoded userName:password as the value.
- If authMethod is HMAC, Walmart passes an authentication header to the eventUrl using authHeaderName as the header key and HMACSHA256 of the complete response as the value, with clientSecret as the key.
- If authMethod is OAUTH, Walmart makes a POST call to authUrl to generate a token with request body "grant_type=client_credentials" and headers:
(1) Authorization header using authHeaderName as the key and Base64-encoded clientId:clientSecret as the value, (2) Accept: "application/json; charset=UTF-8", (3) Content-Type: "application/x-www-form-urlencoded; charset=ISO-8859-1", and (4) any custom headers provided in headers. The authUrl must return HTTP 200 with access_token and expires_in fields. When sending notifications to eventUrl, Walmart includes the access_token in headers using authHeaderName as the key and value "Bearer <access_token>", along with any custom headers provided in headers.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.createSubscription({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      events: [
        {
          eventType: "OFFER_UNPUBLISHED",
          eventVersion: "V1",
          resourceName: "ITEM",
          eventUrl: "https://example.com/events",
          status: "ACTIVE",
        },
        {
          eventType: "PO_CREATED",
          eventVersion: "V1",
          resourceName: "ORDER",
          eventUrl: "https://example.com/orders",
          status: "ACTIVE",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type V3WebhooksSubscriptionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.createSubscription({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    events: [
      {
        eventType: "OFFER_UNPUBLISHED",
        eventVersion: "V1",
        resourceName: "ITEM",
        eventUrl: "https://example.com/events",
        status: "ACTIVE",
      },
      {
        eventType: "PO_CREATED",
        eventVersion: "V1",
        resourceName: "ORDER",
        eventUrl: "https://example.com/orders",
        status: "ACTIVE",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WebhooksSubscriptionsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3WebhooksSubscriptionsRequest](src/models/v3-webhooks-subscriptions-request.ts)</code> | Request body parameters for creating one or more subscriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.createSubscription(request)`

- **OnSuccess**: <code>[V3WebhooksSubscriptionsResponse1](src/models/v3-webhooks-subscriptions-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WebhooksSubscriptionsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V3WebhooksSubscriptionsResponse1](src/models/v3-webhooks-subscriptions-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscription(request: Notifications.DeleteSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;V3WebhooksSubscriptionsResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing webhook subscription by ID. After deletion, the subscription cannot be retrieved.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.deleteSubscription({
    subscriptionId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3WebhooksSubscriptionsResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.deleteSubscription({
  subscriptionId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WebhooksSubscriptionsResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Unique identifier of the subscription to delete.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.deleteSubscription(request)`

- **OnSuccess**: <code>[V3WebhooksSubscriptionsResponse2](src/models/v3-webhooks-subscriptions-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.deleteSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WebhooksSubscriptionsResponse2, ApiError&gt;</code>, with `result.value` of type <code>[V3WebhooksSubscriptionsResponse2](src/models/v3-webhooks-subscriptions-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllSubscriptions(request: Notifications.GetAllSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;V3WebhooksSubscriptionsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of all webhook subscriptions created using the Create Subscription API. Use query parameters to filter by subscription ID, event type, resource, or status.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getAllSubscriptions({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3WebhooksSubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getAllSubscriptions({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WebhooksSubscriptionsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId?</code> | <code>string</code> | Filter results to a specific subscription by its unique identifier.<br><b style='color:green;'>Market availability: Global</b> |
| <code>eventType?</code> | <code>string</code> | Filter results to a specific event type. Refer to the Event Payload section for the list of available event types.<br><b style='color:green;'>Market availability: Global</b> |
| <code>resourceName?</code> | <code>string</code> | Filter results to a specific resource (functional category). Refer to the Event Payload section for the list of available resource names.<br><b style='color:green;'>Market availability: Global</b> |
| <code>status?</code> | <code>string</code> | Filter results by subscription status. Allowed values: ACTIVE, INACTIVE.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getAllSubscriptions(request)`

- **OnSuccess**: <code>[V3WebhooksSubscriptionsResponse](src/models/v3-webhooks-subscriptions-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.getAllSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WebhooksSubscriptionsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3WebhooksSubscriptionsResponse](src/models/v3-webhooks-subscriptions-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEventTypes(request: Notifications.GetEventTypesRequest, options?: RequestOptions): ApiPromise&lt;V3WebhooksEventTypesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of event types and resource names available for subscription. Notifications are triggered only for event types that you subscribe to using the Create Subscription API.

Event types are workflow events fired when statuses or conditions change (for example, an offer moving from published to unpublished, an order auto-cancellation, or a buy box change).

Resource names are functional API categories (for example, ITEM, PRICE, ORDER, INVENTORY). Permissions to subscribe to an event type are governed by the resource's delegated access permissions.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getEventTypes({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3WebhooksEventTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getEventTypes({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WebhooksEventTypesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getEventTypes(request)`

- **OnSuccess**: <code>[V3WebhooksEventTypesResponse](src/models/v3-webhooks-event-types-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.getEventTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WebhooksEventTypesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3WebhooksEventTypesResponse](src/models/v3-webhooks-event-types-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testNotification(request: Notifications.TestNotificationRequestParams, options?: RequestOptions): ApiPromise&lt;RejectRecommendationsResponsePayload, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a test notification to a destination URL using a sample payload.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.testNotification({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      eventType: "OFFER_UNPUBLISHED",
      eventVersion: "V1",
      resourceName: "ITEM",
      eventUrl: "https://example.com/events",
      authDetails: {
        authMethod: "BASIC_AUTH",
        userName: "abc",
        password: "test",
        authHeaderName: "Authorization",
      },
      headers: { "X-Custom-Header": "my-value" },
    },
  });
  // TODO: Handle 'response' of type RejectRecommendationsResponsePayload
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.testNotification({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    eventType: "OFFER_UNPUBLISHED",
    eventVersion: "V1",
    resourceName: "ITEM",
    eventUrl: "https://example.com/events",
    authDetails: {
      authMethod: "BASIC_AUTH",
      userName: "abc",
      password: "test",
      authHeaderName: "Authorization",
    },
    headers: { "X-Custom-Header": "my-value" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RejectRecommendationsResponsePayload
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3WebhooksTestRequest](src/models/v3-webhooks-test-request.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.testNotification(request)`

- **OnSuccess**: <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.testNotification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RejectRecommendationsResponsePayload, ApiError&gt;</code>, with `result.value` of type <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Notifications.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;V3WebhooksSubscriptionsResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the details of a subscription. You can update the event version, destination URL, headers, and authentication details. You can also enable or disable the subscription by changing the status to ACTIVE or INACTIVE.

<b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.updateSubscription({
    subscriptionId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket2.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      eventUrl: "https://example.com/events",
      authDetails: {
        authMethod: "BASIC_AUTH",
        userName: "abc",
        password: "test",
        authHeaderName: "Authorization",
      },
      status: "ACTIVE",
    },
  });
  // TODO: Handle 'response' of type V3WebhooksSubscriptionsResponse3
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.updateSubscription({
  subscriptionId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket2.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    eventUrl: "https://example.com/events",
    authDetails: {
      authMethod: "BASIC_AUTH",
      userName: "abc",
      password: "test",
      authHeaderName: "Authorization",
    },
    status: "ACTIVE",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WebhooksSubscriptionsResponse3
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | Unique identifier of the subscription to update.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket2](src/models/wm-market2.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3WebhooksSubscriptionsRequest1](src/models/v3-webhooks-subscriptions-request1.ts)</code> | Request body parameters for updating a subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.updateSubscription(request)`

- **OnSuccess**: <code>[V3WebhooksSubscriptionsResponse3](src/models/v3-webhooks-subscriptions-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WebhooksSubscriptionsResponse3, ApiError&gt;</code>, with `result.value` of type <code>[V3WebhooksSubscriptionsResponse3](src/models/v3-webhooks-subscriptions-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OnRequestReportApi

> Source: [OnRequestReportApi](src/resources/on-request-report-api.ts)

<details>
<summary><code>downloadReport(request: OnRequestReportApi.DownloadReportRequest, options?: RequestOptions): ApiPromise&lt;DownloadReportResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches URL to download a generated report.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onRequestReportApi.downloadReport({
    requestId: "28fae71e-7f34-4493-ad5b-1edca6afebf7",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
  });
  // TODO: Handle 'response' of type DownloadReportResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onRequestReportApi.downloadReport({
  requestId: "28fae71e-7f34-4493-ad5b-1edca6afebf7",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DownloadReportResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>requestId</code> | <code>string</code> | Automated ID generated by system that uniquely identifies the report request.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call. <br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onRequestReportApi.downloadReport(request)`

- **OnSuccess**: <code>[DownloadReportResponse](src/models/download-report-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onRequestReportApi.downloadReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DownloadReportResponse, ApiError&gt;</code>, with `result.value` of type <code>[DownloadReportResponse](src/models/download-report-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRequestsStatus(request: OnRequestReportApi.GetRequestsStatusRequest, options?: RequestOptions): ApiPromise&lt;RequestsStatusResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a list of all report requests for specified search criteria by using query parameters.

You can fetch details of report requests created in the last 30 days only.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onRequestReportApi.getRequestsStatus({
    reportType: ReportType4.Item,
    reportVersion: "v1",
    requestStatus: RequestStatus4.Ready,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
  });
  // TODO: Handle 'response' of type RequestsStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onRequestReportApi.getRequestsStatus({
  reportType: ReportType4.Item,
  reportVersion: "v1",
  requestStatus: RequestStatus4.Ready,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestsStatusResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportType</code> | <code>[ReportType4](src/models/report-type4.ts)</code> | Type of report for which the request is created. Example, ITEM for Item Report.<br><br><strong style="color: green;">Market availability: <br><br> ITEM: Global <br>INVENTORY: Global <br>LAGTIME: US\|CA\|MX <br>Other Reports: US only</strong> |
| <code>reportVersion?</code> | <code>string</code> | Version of report for which the request is created. Example, v1.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>requestStatus?</code> | <code>[RequestStatus4](src/models/request-status4.ts)</code> | Status of report request. Possible values are RECEIVED, INPROGRESS, READY, ERROR.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>requestSubmissionStartDate?</code> | <code>string</code> | Report request submittal start date for range of reports requested, in format: YYYY-MM-DDTHH:mm:ssZ<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>requestSubmissionEndDate?</code> | <code>string</code> | Report request submittal end date for range of reports requested, in format YYYY-MM-DDTHH:mm:ssZ<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call. <br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onRequestReportApi.getRequestsStatus(request)`

- **OnSuccess**: <code>[RequestsStatusResponse](src/models/requests-status-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onRequestReportApi.getRequestsStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestsStatusResponse, ApiError&gt;</code>, with `result.value` of type <code>[RequestsStatusResponse](src/models/requests-status-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleRequestStatus(request: OnRequestReportApi.GetSingleRequestStatusRequest, options?: RequestOptions): ApiPromise&lt;RequestStatusResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches status and other details of a report request by providing a requestID.

You can fetch details of report request created in the last 30 days only.
<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onRequestReportApi.getSingleRequestStatus({
    requestId: "28fae71e-7f34-4493-ad5b-1edca6afebf7",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
  });
  // TODO: Handle 'response' of type RequestStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onRequestReportApi.getSingleRequestStatus({
  requestId: "28fae71e-7f34-4493-ad5b-1edca6afebf7",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestStatusResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>requestId</code> | <code>string</code> | Automated ID generated by system that uniquely identifies the report request.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call. <br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onRequestReportApi.getSingleRequestStatus(request)`

- **OnSuccess**: <code>[RequestStatusResponse](src/models/request-status-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.onRequestReportApi.getSingleRequestStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestStatusResponse, ApiError&gt;</code>, with `result.value` of type <code>[RequestStatusResponse](src/models/request-status-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OnRequestReport

> Source: [OnRequestReport](src/resources/on-request-report.ts)

<details>
<summary><code>generateReport(request: OnRequestReport.GenerateReportRequest, options?: RequestOptions): ApiPromise&lt;V3ReportsReportRequestsResponse1, OnRequestReport.GenerateReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new request for report by specifying the `reportType` and `reportVersion`.
<br><b style='color:green;'>Market availability: Global</b>

**Max reporting window:** For `ITEM_PERFORMANCE` v3, the date range between `dataStartTime` and `dataEndTime` must not exceed 2 years (730 days). Exceeding this limit will return a `400` error.

**Row limit:** There is no limit on the number of rows returned in the report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.onRequestReport.generateReport({
    reportType: ReportType4.Item,
    reportVersion: "v1",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
    body: {
      rowFilters: [
        { columnName: "Offer Start Date", type: Type4.RangeFilter },
        { columnName: "Offer End Date", type: Type4.RangeFilter },
        { columnName: "Price", type: Type4.RangeFilter },
        { values: ["PUBLISHED"], columnName: "Publish Status", type: Type4.EnumFilter },
        { values: ["FELIX LECHEF", "ANEZUS"], columnName: "brand", type: Type4.MultiValueFilter },
        { values: ["JEWELRY MAKING AND STORAGE"], columnName: "category", type: Type4.MultiValueFilter },
      ],
      excludeColumns: ["Average Rating", "Shelf Name"],
      dataStartTime: "2024-08-10T20:11:24.000Z",
      dataEndTime: "2024-09-10T20:11:24.000Z",
    },
  });
  // TODO: Handle 'response' of type V3ReportsReportRequestsResponse1
} catch (err) {
  // TODO: Handle 'err' of type OnRequestReport.GenerateReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.onRequestReport.generateReport({
  reportType: ReportType4.Item,
  reportVersion: "v1",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
  body: {
    rowFilters: [
      { columnName: "Offer Start Date", type: Type4.RangeFilter },
      { columnName: "Offer End Date", type: Type4.RangeFilter },
      { columnName: "Price", type: Type4.RangeFilter },
      { values: ["PUBLISHED"], columnName: "Publish Status", type: Type4.EnumFilter },
      { values: ["FELIX LECHEF", "ANEZUS"], columnName: "brand", type: Type4.MultiValueFilter },
      { values: ["JEWELRY MAKING AND STORAGE"], columnName: "category", type: Type4.MultiValueFilter },
    ],
    excludeColumns: ["Average Rating", "Shelf Name"],
    dataStartTime: "2024-08-10T20:11:24.000Z",
    dataEndTime: "2024-09-10T20:11:24.000Z",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ReportsReportRequestsResponse1
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
| <code>reportType</code> | <code>[ReportType4](src/models/report-type4.ts)</code> | Type of report for which the request is created. Example, ITEM for Item Report.<br><br><strong style="color: green;">Market availability: <br><br> ITEM: Global <br>INVENTORY: Global <br>LAGTIME: US\|CA\|MX <br>Other Reports: US only</strong> |
| <code>reportVersion</code> | <code>string</code> | Version of report for which the request is created.<br><br><strong style="color: green;">Market availability: Global</strong><br><br> \|ReportType \|Market Availabilty \|Version Supported <br>\|--------\|----------\|----------<br>\| ITEM   \|Global\|  v1  (**v3 to v6 : US only**)<br>\|INVENTORY\|Global\| v1 <br>\|LAGTIME\|US,CA,MX\| v1 <br>\|DELIVERY_DEFECT\|US only\| v1 <br>\|ITEM_PERFORMANCE\|US only\| v1 to v3 <br>\|PROMO\|US only\| v1 <br>\|RETURN_OVERRIDES\|US only\| v1 <br>\|CPA\|US only\| v1 <br>\|SHIPPING_CONFIGURATION\|US only\| v1 <br>\|SHIPPING_PROGRAM\|US only\| v1 <br>\|FITMENT_MISSING_ATTR\|US only\| v1 <br>\|FITMENT_ACES_COVERAGE\|US only\| v1 <br>\|BUYBOX\|US only\| v1 <br>\|ASSORTMENT_RECOMMENDATIONS\|US only\| v1 <br>\|CANCELLATION\|US only\| v1 <br>\|INVENTORY_RECOMMENDATIONS\|US only\| v1 \| |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | The target market of the API call. <br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><strong style="color: green;">Market availability: Global</strong> |
| <code>body?</code> | <code>[V3ReportsReportRequestsRequest](src/models/v3-reports-report-requests-request.ts)</code> | Request body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.onRequestReport.generateReport(request)`

- **OnSuccess**: <code>[V3ReportsReportRequestsResponse1](src/models/v3-reports-report-requests-response1.ts)</code>
- **OnError**: throws <code>[OnRequestReport.GenerateReportError](src/resources/on-request-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.onRequestReport.generateReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ReportsReportRequestsResponse1, OnRequestReport.GenerateReportError&gt;</code>, with `result.value` of type <code>[V3ReportsReportRequestsResponse1](src/models/v3-reports-report-requests-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReportScheduler

> Source: [ReportScheduler](src/resources/report-scheduler.ts)

<details>
<summary><code>deleteReportSchedule(request: ReportScheduler.DeleteReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;RejectRecommendationsResponsePayload, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to remove an existing report schedule. 

<strong style="color: green;">Market availability: US only</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportScheduler.deleteReportSchedule({
    scheduleId: "some example string",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  });
  // TODO: Handle 'response' of type RejectRecommendationsResponsePayload
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportScheduler.deleteReportSchedule({
  scheduleId: "some example string",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RejectRecommendationsResponsePayload
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | A unique identifier assigned to the report schedule. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportScheduler.deleteReportSchedule(request)`

- **OnSuccess**: <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportScheduler.deleteReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RejectRecommendationsResponsePayload, ApiError&gt;</code>, with `result.value` of type <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllReportSchedules(request: ReportScheduler.GetAllReportSchedulesRequest, options?: RequestOptions): ApiPromise&lt;V3ReportsSchedulesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get All Report Schedules API retrieves a list of all existing report schedules. This helps you to easily view and manage all scheduled reports in one place. 

<strong style="color: green;">Market availability: US only</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportScheduler.getAllReportSchedules({
    reportType: ReportType10.Item,
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  });
  // TODO: Handle 'response' of type V3ReportsSchedulesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportScheduler.getAllReportSchedules({
  reportType: ReportType10.Item,
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ReportsSchedulesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportType</code> | <code>[ReportType10](src/models/report-type10.ts)</code> | Specifies the type of report to be generated. Example: ITEM for Item Report. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportScheduler.getAllReportSchedules(request)`

- **OnSuccess**: <code>[V3ReportsSchedulesResponse](src/models/v3-reports-schedules-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportScheduler.getAllReportSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ReportsSchedulesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3ReportsSchedulesResponse](src/models/v3-reports-schedules-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReportSchedule(request: ReportScheduler.GetReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;V3ReportsSchedulesResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves the details of a single report schedule based on the specified scheduleId.

<strong style="color: green;">Market availability: US only</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportScheduler.getReportSchedule({
    scheduleId: "some example string",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  });
  // TODO: Handle 'response' of type V3ReportsSchedulesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportScheduler.getReportSchedule({
  scheduleId: "some example string",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ReportsSchedulesResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | - |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportScheduler.getReportSchedule(request)`

- **OnSuccess**: <code>[V3ReportsSchedulesResponse1](src/models/v3-reports-schedules-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportScheduler.getReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ReportsSchedulesResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V3ReportsSchedulesResponse1](src/models/v3-reports-schedules-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateReportSchedule(request: ReportScheduler.UpdateReportScheduleRequest, options?: RequestOptions): ApiPromise&lt;V3ReportsSchedulesResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify an existing report schedule. You can change the parameters to better suit your needs, ensuring that reports are generated and delivered according to the most current requirements. 

<strong style="color: green;">Market availability: US only</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportScheduler.updateReportSchedule({
    scheduleId: "some example string",
    wmSvcName: "Walmart Marketplace",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  });
  // TODO: Handle 'response' of type V3ReportsSchedulesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportScheduler.updateReportSchedule({
  scheduleId: "some example string",
  wmSvcName: "Walmart Marketplace",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ReportsSchedulesResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scheduleId</code> | <code>string</code> | A unique identifier assigned to the report schedule. |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>body?</code> | <code>[V3ReportsSchedulesRequest](src/models/v3-reports-schedules-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportScheduler.updateReportSchedule(request)`

- **OnSuccess**: <code>[V3ReportsSchedulesResponse1](src/models/v3-reports-schedules-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportScheduler.updateReportSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ReportsSchedulesResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V3ReportsSchedulesResponse1](src/models/v3-reports-schedules-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TaxFormApIs

> Source: [TaxFormApIs](src/resources/tax-form-ap-is.ts)

<details>
<summary><code>downloadTaxForm(request: TaxFormApIs.DownloadTaxFormRequest, options?: RequestOptions): ApiPromise&lt;undefined, TaxFormApIs.DownloadTaxFormError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Download Tax Form API downloads the selected tax form document as a byte stream.

<b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.taxFormApIs.downloadTaxForm({
    payoutYear: "some example string",
    taxFormType: "some example string",
    formId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: "US",
    wmPartnerId: "123456789",
    wmTenantId: "0",
  });
} catch (err) {
  // TODO: Handle 'err' of type TaxFormApIs.DownloadTaxFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taxFormApIs.downloadTaxForm({
  payoutYear: "some example string",
  taxFormType: "some example string",
  formId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: "US",
  wmPartnerId: "123456789",
  wmTenantId: "0",
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
| <code>payoutYear</code> | <code>string</code> | The tax year associated with the payout (for example, 2024). <br><b style='color:green;'>Market availability: US only</b> |
| <code>taxFormType</code> | <code>string</code> | The tax form type to download (for example, 1099-K).<br><b style='color:green;'>Market availability: US only</b> |
| <code>formId</code> | <code>string</code> | The unique form ID returned by the list tax forms endpoint.<br><b style='color:green;'>Market availability: US only</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>string</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmPartnerId</code> | <code>string</code> | The partner (seller) identifier registered in Walmart Marketplace. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmTenantId</code> | <code>string</code> | Specifies the tenant identifier. <br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taxFormApIs.downloadTaxForm(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TaxFormApIs.DownloadTaxFormError](src/resources/tax-form-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taxFormApIs.downloadTaxForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TaxFormApIs.DownloadTaxFormError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTaxForms(request: TaxFormApIs.GetTaxFormsRequest, options?: RequestOptions): ApiPromise&lt;V1SettingsGettaxformprofileResponse, TaxFormApIs.GetTaxFormsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Get Tax Forms API returns available tax forms for the authenticated seller, including form type and form ID. The response is a JSON object containing tax form metadata.

<b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.taxFormApIs.getTaxForms({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmGlobalVersion: WmGlobalVersion._31,
    wmMarket: "US",
    wmPartnerId: "123456789",
    wmTenantId: "0",
  });
  // TODO: Handle 'response' of type V1SettingsGettaxformprofileResponse
} catch (err) {
  // TODO: Handle 'err' of type TaxFormApIs.GetTaxFormsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.taxFormApIs.getTaxForms({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmGlobalVersion: WmGlobalVersion._31,
  wmMarket: "US",
  wmPartnerId: "123456789",
  wmTenantId: "0",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SettingsGettaxformprofileResponse
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | The version of the global API used.<br><strong style="color: green;">Market availability: Global</strong> |
| <code>wmMarket</code> | <code>string</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmPartnerId</code> | <code>string</code> | The partner (seller) identifier registered in Walmart Marketplace. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmTenantId</code> | <code>string</code> | Specifies the tenant identifier for multi-tenant contexts. <br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.taxFormApIs.getTaxForms(request)`

- **OnSuccess**: <code>[V1SettingsGettaxformprofileResponse](src/models/v1-settings-gettaxformprofile-response.ts)</code>
- **OnError**: throws <code>[TaxFormApIs.GetTaxFormsError](src/resources/tax-form-ap-is.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.taxFormApIs.getTaxForms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SettingsGettaxformprofileResponse, TaxFormApIs.GetTaxFormsError&gt;</code>, with `result.value` of type <code>[V1SettingsGettaxformprofileResponse](src/models/v1-settings-gettaxformprofile-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Prices

> Source: [Prices](src/resources/prices.ts)

<details>
<summary><code>createStrategy(request: Prices.CreateStrategyRequest, options?: RequestOptions): ApiPromise&lt;V3RepricerStrategyResponse2, Prices.CreateStrategyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new strategy for the seller.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.createStrategy({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type V3RepricerStrategyResponse2
} catch (err) {
  // TODO: Handle 'err' of type Prices.CreateStrategyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.createStrategy({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3RepricerStrategyResponse2
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3RepricerStrategyRequest1](src/models/v3-repricer-strategy-request1.ts)</code> | The request body will have the strategy related information.<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.createStrategy(request)`

- **OnSuccess**: <code>[V3RepricerStrategyResponse2](src/models/v3-repricer-strategy-response2.ts)</code>
- **OnError**: throws <code>[Prices.CreateStrategyError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.createStrategy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3RepricerStrategyResponse2, Prices.CreateStrategyError&gt;</code>, with `result.value` of type <code>[V3RepricerStrategyResponse2](src/models/v3-repricer-strategy-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStrategy(request: Prices.DeleteStrategyRequest, options?: RequestOptions): ApiPromise&lt;RejectRecommendationsResponsePayload, Prices.DeleteStrategyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the strategy.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.deleteStrategy({
    strategyCollectionId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type RejectRecommendationsResponsePayload
} catch (err) {
  // TODO: Handle 'err' of type Prices.DeleteStrategyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.deleteStrategy({
  strategyCollectionId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RejectRecommendationsResponsePayload
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
| <code>strategyCollectionId</code> | <code>string</code> | Unique identifier used to group and manage repricing strategies across different resources.<br><b style='color:green;'>Market availability: US \| CA \| MX</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.deleteStrategy(request)`

- **OnSuccess**: <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: throws <code>[Prices.DeleteStrategyError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.deleteStrategy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RejectRecommendationsResponsePayload, Prices.DeleteStrategyError&gt;</code>, with `result.value` of type <code>[RejectRecommendationsResponsePayload](src/models/reject-recommendations-response-payload.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllIncentives(request: Prices.GetAllIncentivesRequest, options?: RequestOptions): ApiPromise&lt;V3PriceIncentivesResponse, Prices.GetAllIncentivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Incentives API endpoint gives you the list of all price incentives for items in your catalog. 

The details include Item Id, Product Name, Product Url, SKU Id, Target Price, current Price, Incentive Type, Incentive Status, Base referral fee, Reduced Referral Fee, Enrollment Type, Inventory count, Enrollment Date (epoch Timestamp), Start date (epoch Timestamp), Expiration date (epoch Timestamp), and Incentive Id. 

Target Price, Expiration date, Start date, Incentive Id, and Reduced Ref fee and Enrollment Type for WF items would not be shown (null values). 

Enrollment Type and Date for Eligible Reduced Referral Fee incentives will not show up.<br><b style='color:green;'>Market availability: US</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.getAllIncentives({
    incentiveStatus: IncentiveStatus.Eligible,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3PriceIncentivesResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.GetAllIncentivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.getAllIncentives({
  incentiveStatus: IncentiveStatus.Eligible,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3PriceIncentivesResponse
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
| <code>incentiveStatus?</code> | <code>[IncentiveStatus](src/models/incentive-status.ts)</code> | Specify the incentive status to retrieve items with ELIGIBLE or ENROLLED incentives. Allowed values include ENROLLED and ELIGIBLE.<br><b style='color:green;'>Market availability: US</b><br>**Default**: "ELIGIBLE" |
| <code>limit?</code> | <code>number</code> | Specify number of items to return. Max limit value is 200 and min is 1.<br><b style='color:green;'>Market availability: US</b><br>**Default**: 25 |
| <code>offset?</code> | <code>number</code> | Specify the offset of item list to be returned. Min offset value is 0.<br><b style='color:green;'>Market availability: US</b><br>**Default**: 0 |
| <code>sortBy?</code> | <code>[SortBy1](src/models/sort-by1.ts)</code> | Specify the sort criteria for items. Examples of the allowed values are ITEM_ID, PRODUCT_NAME, CURRENT_PRICE, EXPIRATION_DATE, ENROLLMENT_DATE.<br><b style='color:green;'>Market availability: US</b><br>**Default**: "EXPIRATION_DATE" |
| <code>sortOrder?</code> | <code>[Order](src/models/order.ts)</code> | Specify the sort order for given sort criteria. Examples of the allowed values are ASC or DESC.<br><b style='color:green;'>Market availability: US</b><br>**Default**: "DESC" |
| <code>incentiveType?</code> | <code>[IncentiveType](src/models/incentive-type.ts)</code> | Specify the incentive type to filter the incentive items. Allowed values include REDUCED_REFERRAL, WALMART_FUNDED.<br><b style='color:green;'>Market availability: US</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.getAllIncentives(request)`

- **OnSuccess**: <code>[V3PriceIncentivesResponse](src/models/v3-price-incentives-response.ts)</code>
- **OnError**: throws <code>[Prices.GetAllIncentivesError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.getAllIncentives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3PriceIncentivesResponse, Prices.GetAllIncentivesError&gt;</code>, with `result.value` of type <code>[V3PriceIncentivesResponse](src/models/v3-price-incentives-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRepricerFeed(request: Prices.GetRepricerFeedRequest, options?: RequestOptions): ApiPromise&lt;FeedId1, Prices.GetRepricerFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add/Remove one or more items from a strategy.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.getRepricerFeed({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type FeedId1
} catch (err) {
  // TODO: Handle 'err' of type Prices.GetRepricerFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.getRepricerFeed({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId1
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3RepricerFeedsRequest](src/models/v3-repricer-feeds-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.getRepricerFeed(request)`

- **OnSuccess**: <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: throws <code>[Prices.GetRepricerFeedError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.getRepricerFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId1, Prices.GetRepricerFeedError&gt;</code>, with `result.value` of type <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStrategies(request: Prices.GetStrategiesRequest, options?: RequestOptions): ApiPromise&lt;V3RepricerStrategiesResponse, Prices.GetStrategiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the list of strategies.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.getStrategies({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3RepricerStrategiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.GetStrategiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.getStrategies({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3RepricerStrategiesResponse
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
| <code>offset?</code> | <code>string</code> | The response object starts at 0, representing the first entity that can be retrieved.<br><b style='color:green;'>Market availability: CA \| MX</b><br>**Default**: "0" |
| <code>limit?</code> | <code>string</code> | The number of entities to return, with a maximum limit of 25.<br><b style='color:green;'>Market availability: CA \| MX</b><br>**Default**: "10" |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.getStrategies(request)`

- **OnSuccess**: <code>[V3RepricerStrategiesResponse](src/models/v3-repricer-strategies-response.ts)</code>
- **OnError**: throws <code>[Prices.GetStrategiesError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.getStrategies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3RepricerStrategiesResponse, Prices.GetStrategiesError&gt;</code>, with `result.value` of type <code>[V3RepricerStrategiesResponse](src/models/v3-repricer-strategies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>priceAndPromotionBulkUploads(request: Prices.PriceAndPromotionBulkUploadsRequest, options?: RequestOptions): ApiPromise&lt;FeedId, Prices.PriceAndPromotionBulkUploadsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates prices and promotions in bulk for multiple items. You can modify the prices of multiple items in bulk using a price feed. This is useful for implementing pricing strategies across your catalog, such as seasonal discounts, competitive pricing adjustments, or clearance sales.

Each price feed can contain up to 10,000 items. To ensure optimal performance (feed processing time), we recommend limiting feeds to 1,000 items and keeping the payload under 10 MB.

Use this API instead of the single price update API when updating prices for multiple items. For newly created items, ensure that the Walmart Part ID (WPID) has been assigned and that at least 24 hours have passed since item creation before submitting a bulk price update feed. The bulk price update Service Level Agreement (SLA) is 15 minutes.

The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:

<ul><li>You may include the same Stock Keeping Unit (SKU) multiple times in a single feed. However, if a SKU is repeated in a feed, only one price will be applied.</li><li>The price sequence guarantee ensures that the latest price update, based on its creation timestamp, is the one that changes the item's price, overwriting the previous version.</li><li>Price updates received with an earlier timestamp are ignored. We recommend using UTC timestamps for the value of <code>feedDate</code> in all feed-based bulk updates.</li></ul>

After submitting the price feed, wait at least 5 minutes before checking whether the bulk price update was successful. If a price update fails, for example, due to duplicate SKU entries, an error response will be returned.

For more information and usage examples, refer to the <a href="https://developer.walmart.com/global-marketplace/docs/update-pricing-for-multiple-items-bulk">Pricing API Guide</a>.

<strong style="color: green;">Market availability: Global</strong>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.priceAndPromotionBulkUploads({
    feedType: FeedType21.PriceAndPromotion,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type FeedId
} catch (err) {
  // TODO: Handle 'err' of type Prices.PriceAndPromotionBulkUploadsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.priceAndPromotionBulkUploads({
  feedType: FeedType21.PriceAndPromotion,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId
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
| <code>feedType</code> | <code>[FeedType21](src/models/feed-type21.ts)</code> | The feed Type.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3FeedsFeedTypePriceAndPromotionRequest](src/models/v3-feeds-feed-type-price-and-promotion-request.ts)</code> | The request body consists of a Feed file attached to the request based on the feedType selected .<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.priceAndPromotionBulkUploads(request)`

- **OnSuccess**: <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: throws <code>[Prices.PriceAndPromotionBulkUploadsError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.priceAndPromotionBulkUploads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId, Prices.PriceAndPromotionBulkUploadsError&gt;</code>, with `result.value` of type <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reducedReferralFeeIncentivesEnrollment(request: Prices.ReducedReferralFeeIncentivesEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;V3FeedsFeedTypeIncentiveEnrollmentResponse, Prices.ReducedReferralFeeIncentivesEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can use this API endpoint to enroll any eligible reduced referral fee incentive and unenroll any active reduced referral fee incentives.<br><b style='color:green;'>Market availability: US</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.reducedReferralFeeIncentivesEnrollment({
    feedType: FeedType11.IncentiveEnrollment,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type V3FeedsFeedTypeIncentiveEnrollmentResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.ReducedReferralFeeIncentivesEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.reducedReferralFeeIncentivesEnrollment({
  feedType: FeedType11.IncentiveEnrollment,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3FeedsFeedTypeIncentiveEnrollmentResponse
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
| <code>feedType</code> | <code>[FeedType11](src/models/feed-type11.ts)</code> | The feed Type.<br><b style='color:green;'>Market availability: US</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3FeedsFeedTypeIncentiveEnrollmentRequest](src/models/v3-feeds-feed-type-incentive-enrollment-request.ts)</code> | The request body consists referralFeeIncentiveEnrollment through which sku opt-in using Y and opt-out using N.<br><b style='color:green;'>Market availability: US</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.reducedReferralFeeIncentivesEnrollment(request)`

- **OnSuccess**: <code>[V3FeedsFeedTypeIncentiveEnrollmentResponse](src/models/v3-feeds-feed-type-incentive-enrollment-response.ts)</code>
- **OnError**: throws <code>[Prices.ReducedReferralFeeIncentivesEnrollmentError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.reducedReferralFeeIncentivesEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3FeedsFeedTypeIncentiveEnrollmentResponse, Prices.ReducedReferralFeeIncentivesEnrollmentError&gt;</code>, with `result.value` of type <code>[V3FeedsFeedTypeIncentiveEnrollmentResponse](src/models/v3-feeds-feed-type-incentive-enrollment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePrice(request: Prices.UpdatePriceRequest, options?: RequestOptions): ApiPromise&lt;V3PriceResponse, Prices.UpdatePriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the price of an item listed on Walmart Marketplace. Use this API to change the price of a single item. If you want to update pricing for multiple items, we recommend using the <a href="https://developer.walmart.com/global-marketplace/reference/priceandpromotionbulkuploads">Update pricing for multiple items in bulk</a> API. 

For more information and usage examples, refer to the <a href="https://developer.walmart.com/us-marketplace/docs/update-pricing-for-a-single-item">Pricing API Guide</a>.<br><b style='color:green;'>Market availability: CA | MX | CL</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.updatePrice({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type V3PriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.UpdatePriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.updatePrice({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3PriceResponse
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3PriceRequest](src/models/v3-price-request.ts)</code> | The request body consists of a Feed file attached to the request based on the feedType selected .<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.updatePrice(request)`

- **OnSuccess**: <code>[V3PriceResponse](src/models/v3-price-response.ts)</code>
- **OnError**: throws <code>[Prices.UpdatePriceError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.updatePrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3PriceResponse, Prices.UpdatePriceError&gt;</code>, with `result.value` of type <code>[V3PriceResponse](src/models/v3-price-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStrategy(request: Prices.UpdateStrategyRequest, options?: RequestOptions): ApiPromise&lt;V3RepricerStrategyResponse, Prices.UpdateStrategyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the existing strategy.<br><b style='color:green;'>Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.updateStrategy({
    strategyCollectionId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { enabled: true },
  });
  // TODO: Handle 'response' of type V3RepricerStrategyResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.UpdateStrategyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.updateStrategy({
  strategyCollectionId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { enabled: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3RepricerStrategyResponse
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
| <code>strategyCollectionId</code> | <code>string</code> | Unique identifier used to group and manage repricing strategies across different resources.<br><b style='color:green;'>Market availability: US \| CA \| MX</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</span></b> |
| <code>body</code> | <code>[V3RepricerStrategyRequest](src/models/v3-repricer-strategy-request.ts)</code> | The request body will have the strategy related information |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.updateStrategy(request)`

- **OnSuccess**: <code>[V3RepricerStrategyResponse](src/models/v3-repricer-strategy-response.ts)</code>
- **OnError**: throws <code>[Prices.UpdateStrategyError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.updateStrategy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3RepricerStrategyResponse, Prices.UpdateStrategyError&gt;</code>, with `result.value` of type <code>[V3RepricerStrategyResponse](src/models/v3-repricer-strategy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWalmartFundedIncentivesEnrollmentStatus(request: Prices.UpdateWalmartFundedIncentivesEnrollmentStatusRequest, options?: RequestOptions): ApiPromise&lt;V3PriceIncentivesWfpreferenceResponse, Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If you wish to permanently disable Walmart-funded incentives for all items of your catalog, you can use this API to set the Walmart-funded incentives program as OFF. 

The default value of this variable is ON. 

Any changes to preferences will lock in (disable) the preference option for a period of 4 hours as indicated by isDisabled response field of the API.<br><b style='color:green;'>Market availability: US</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.updateWalmartFundedIncentivesEnrollmentStatus({
    autoEnrollEnabled: true,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3PriceIncentivesWfpreferenceResponse
} catch (err) {
  // TODO: Handle 'err' of type Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.updateWalmartFundedIncentivesEnrollmentStatus({
  autoEnrollEnabled: true,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3PriceIncentivesWfpreferenceResponse
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
| <code>autoEnrollEnabled?</code> | <code>boolean</code> | Specify the boolean for enabling auto enrollment. Examples of the allowed values are true or false.<br><b style='color:green;'>Market availability: US</b><br>**Default**: true |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.updateWalmartFundedIncentivesEnrollmentStatus(request)`

- **OnSuccess**: <code>[V3PriceIncentivesWfpreferenceResponse](src/models/v3-price-incentives-wfpreference-response.ts)</code>
- **OnError**: throws <code>[Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.updateWalmartFundedIncentivesEnrollmentStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3PriceIncentivesWfpreferenceResponse, Prices.UpdateWalmartFundedIncentivesEnrollmentStatusError&gt;</code>, with `result.value` of type <code>[V3PriceIncentivesWfpreferenceResponse](src/models/v3-price-incentives-wfpreference-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walmartFundedIncentivesEnrollment(request: Prices.WalmartFundedIncentivesEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;FeedId, Prices.WalmartFundedIncentivesEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

While all Walmart-funded incentives are auto-enrolled by default, you can use this API endpoint to 'Opt-out' specific Walmart-funded items whose price you don't wish to lower. 

You can also 'Opt-in' items which were previously Opted-out by you at any time using this API.<br><b style='color:green;'>Market availability: US</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prices.walmartFundedIncentivesEnrollment({
    feedType: FeedType2.WalmartFundedIncentivesEnrollment,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type FeedId
} catch (err) {
  // TODO: Handle 'err' of type Prices.WalmartFundedIncentivesEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prices.walmartFundedIncentivesEnrollment({
  feedType: FeedType2.WalmartFundedIncentivesEnrollment,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId
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
| <code>feedType</code> | <code>[FeedType2](src/models/feed-type2.ts)</code> | The feed Type.<br><b style='color:green;'>Market availability: US</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest](src/models/v3-feeds-feed-type-walmart-funded-incentives-enrollment-request.ts)</code> | The request body consists walmartFundedIncentivesEnrollment through which Opt-in / Opt-out has to be updated |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prices.walmartFundedIncentivesEnrollment(request)`

- **OnSuccess**: <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: throws <code>[Prices.WalmartFundedIncentivesEnrollmentError](src/resources/prices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prices.walmartFundedIncentivesEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId, Prices.WalmartFundedIncentivesEnrollmentError&gt;</code>, with `result.value` of type <code>[FeedId](src/models/feed-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Promotions

> Source: [Promotions](src/resources/promotions.ts)

<details>
<summary><code>getPromotionalPrices(request: Promotions.GetPromotionalPricesRequest, options?: RequestOptions): ApiPromise&lt;V3PromoSkuResponse, Promotions.GetPromotionalPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

 Retrieves a list of promotional prices for a single SKU.<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotions.getPromotionalPrices({
    sku: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3PromoSkuResponse
} catch (err) {
  // TODO: Handle 'err' of type Promotions.GetPromotionalPricesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promotions.getPromotionalPrices({
  sku: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3PromoSkuResponse
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
| <code>sku</code> | <code>string</code> | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This will be used by the seller in the XSD file to refer to each item. Special characters in the sku needing encoding are: ':', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(', ')', '*', '+', ',', ';', '=', as well as '%' itself. Other characters don't need to be encoded.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. <br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.promotions.getPromotionalPrices(request)`

- **OnSuccess**: <code>[V3PromoSkuResponse](src/models/v3-promo-sku-response.ts)</code>
- **OnError**: throws <code>[Promotions.GetPromotionalPricesError](src/resources/promotions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promotions.getPromotionalPrices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3PromoSkuResponse, Promotions.GetPromotionalPricesError&gt;</code>, with `result.value` of type <code>[V3PromoSkuResponse](src/models/v3-promo-sku-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>priceBulkUploads(request: Promotions.PriceBulkUploadsRequest, options?: RequestOptions): ApiPromise&lt;FeedId1, Promotions.PriceBulkUploadsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The price and promotional price API allows you to creates, updates, or deletes promotional prices for multiple SKUs 

 To set a new promotional price, set the "promotionSettingAction" attribute to "Create". To update an existing one, set the "promotionSettingAction" attribute to "Create" with promoId. To delete a promotional price, set the "promotionSettingAction" attribute to "Delete". To delete all promotions for a SKU, set the "promotionSettingAction" attribute to "Replace All" 

 Please Note: 
- The effective start date for a given promotion should be within 365 days from the current date and time. 
- The end date of a given promotion should be within 180 days from the start date and time. Any promotions beyond 180 days will result in an error <br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotions.priceBulkUploads({
    feedType: FeedType21.PriceAndPromotion,
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type FeedId1
} catch (err) {
  // TODO: Handle 'err' of type Promotions.PriceBulkUploadsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promotions.priceBulkUploads({
  feedType: FeedType21.PriceAndPromotion,
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId1
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
| <code>feedType</code> | <code>[FeedType21](src/models/feed-type21.ts)</code> | The feed Type. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding. <br><b style='color:green;'>Market availability: Global</b> |
| <code>body?</code> | <code>[V3FeedsFeedTypePriceAndPromotionRequest1](src/models/v3-feeds-feed-type-price-and-promotion-request1.ts)</code> | The request body consists of a Feed file attached to the request based on the feedType selected |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.promotions.priceBulkUploads(request)`

- **OnSuccess**: <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: throws <code>[Promotions.PriceBulkUploadsError](src/resources/promotions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promotions.priceBulkUploads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId1, Promotions.PriceBulkUploadsError&gt;</code>, with `result.value` of type <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePromotionalPrices(request: Promotions.UpdatePromotionalPricesRequest, options?: RequestOptions): ApiPromise&lt;V3PriceResponse, Promotions.UpdatePromotionalPricesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The update a promotional price API allows you to creates, updates, or deletes promotional prices for single SKUs 

 To set a new promotional price, set the "promotionSettingAction" attribute to "Create". To update an existing one, set the "promotionSettingAction" attribute to "Create" with promoId. To delete a promotional price, set the "promotionSettingAction" attribute to "Delete". To delete all promotions for a SKU, set the "promotionSettingAction" attribute to "Replace All" 

 Please Note: 
- The effective start date for a given promotion should be within 365 days from the current date and time. 
- The end date of a given promotion should be within 180 days from the start date and time. Any promotions beyond 180 days will result in an error <br><b style='color:green;'>Market availability: CA | MX | CL</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotions.updatePromotionalPrices({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {},
  });
  // TODO: Handle 'response' of type V3PriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Promotions.UpdatePromotionalPricesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promotions.updatePromotionalPrices({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3PriceResponse
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
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. Required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Global Version is set to 3.1 by default. <br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3PriceRequest](src/models/v3-price-request.ts)</code> | The request body consists of a Feed file attached to the request.<br><b style='color:green;'>Market availability: CA \| MX \| CL</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.promotions.updatePromotionalPrices(request)`

- **OnSuccess**: <code>[V3PriceResponse](src/models/v3-price-response.ts)</code>
- **OnError**: throws <code>[Promotions.UpdatePromotionalPricesError](src/resources/promotions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promotions.updatePromotionalPrices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3PriceResponse, Promotions.UpdatePromotionalPricesError&gt;</code>, with `result.value` of type <code>[V3PriceResponse](src/models/v3-price-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RecommendationsApi

> Source: [RecommendationsApi](src/resources/recommendations-api.ts)

<details>
<summary><code>getFulfillWithWfsRecommendations(request: RecommendationsApi.GetFulfillWithWfsRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3WfsRecommendationFulfilWithWfsResponse, RecommendationsApi.GetFulfillWithWfsRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use **Fulfill With WFS Recommendations** to identify which seller-fulfilled items in your catalog Walmart suggests could potentially perform best when fulfilled by WFS. These suggestions are available on demand, and suggestions are refreshed the 1st and 15th of each month.

Key attributes include:

- **estimatedSalesLift**: The estimated increase in sales you could see if you converted the suggested items from seller-fulfilled to WFS.

- **sellerFulfilledPast30DaysSales**: A historical view of your seller-fulfilled sales for the past 30 days.
- **walmartFulfilledEstimatedSales**: An estimated view of your potential sales if the suggested items were fulfilled by WFS.

You can use these suggestions to determine which items to convert to WFS.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendationsApi.getFulfillWithWfsRecommendations({
    customerFavorite: true,
    limit: 10,
    offset: 1,
    sortBy: "estimatedSalesLift",
    contentType: "application/json",
    accept: "application/json",
    wmGlobalVersion: "3.1",
    wmMarket: "US",
    wmAuditOriginSource: "SELLER_API",
  });
  // TODO: Handle 'response' of type V3WfsRecommendationFulfilWithWfsResponse
} catch (err) {
  // TODO: Handle 'err' of type RecommendationsApi.GetFulfillWithWfsRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendationsApi.getFulfillWithWfsRecommendations({
  customerFavorite: true,
  limit: 10,
  offset: 1,
  sortBy: "estimatedSalesLift",
  contentType: "application/json",
  accept: "application/json",
  wmGlobalVersion: "3.1",
  wmMarket: "US",
  wmAuditOriginSource: "SELLER_API",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WfsRecommendationFulfilWithWfsResponse
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
| <code>customerFavorite?</code> | <code>boolean</code> | Filters items by customer favorite status. When set to `true`, only customer favorites are returned. When set to `false`, only non-favorites are returned. If omitted, all items are returned. |
| <code>showInsights?</code> | <code>boolean</code> | Shows aggregate recommendation values for all items.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: false |
| <code>limit?</code> | <code>number</code> | The maximum number of SKUs to include in the response (1–300). If you omit this parameter, Walmart returns up to 30 SKUs.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 30 |
| <code>offset?</code> | <code>number</code> | The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the first SKU.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 0 |
| <code>sortBy?</code> | <code>string</code> | The attribute to be used in sorting the response.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "estimatedSalesLift" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order of value. Default is "DESC.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "DESC" |
| <code>showHiddenRecordsOnly?</code> | <code>boolean</code> | Shows insights you have hidden.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: false |
| <code>contentType</code> | <code>string</code> | Specifies the literal **application/json**. This value identifies the content type of the request body.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmGlobalVersion</code> | <code>string</code> | Global version for API compatibility.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmMarket</code> | <code>string</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmAuditOriginSource</code> | <code>string</code> | Seller identifier.<br><br><b style='color: green;'>Market availability: US only</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendationsApi.getFulfillWithWfsRecommendations(request)`

- **OnSuccess**: <code>[V3WfsRecommendationFulfilWithWfsResponse](src/models/v3-wfs-recommendation-fulfil-with-wfs-response.ts)</code>
- **OnError**: throws <code>[RecommendationsApi.GetFulfillWithWfsRecommendationsError](src/resources/recommendations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendationsApi.getFulfillWithWfsRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WfsRecommendationFulfilWithWfsResponse, RecommendationsApi.GetFulfillWithWfsRecommendationsError&gt;</code>, with `result.value` of type <code>[V3WfsRecommendationFulfilWithWfsResponse](src/models/v3-wfs-recommendation-fulfil-with-wfs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRestockRecommendations(request: RecommendationsApi.GetRestockRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3WfsRecommendationRestockResponse, RecommendationsApi.GetRestockRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use **Restock Recommendations** to get Walmart-generated suggestions for the items you should restock with WFS based on your current inventory and forecasted sales demand. These suggestions are available on demand. Key attributes include:

- **suggestedUnits**: The number of units we suggest you send of this item to WFS
- **forecastedSalesLift**: The estimated increase in sales you may see if your items are restocked according to our suggestions
- **totalForecastedSalesLost**: How much money you're estimated to lose out on if you don't restock your inventory

Once you determine which suggested items to restock, you can use the Create inbound shipment API to create a shipping plan to send inventory to WFS.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendationsApi.getRestockRecommendations({
    customerFavorite: true,
    limit: 10,
    offset: 1,
    sortBy: "forecastedSalesLift",
    authorization: "Basic YzcyOTFjNmItNzI5MC00....",
    contentType: "application/json",
    accept: "application/json",
    wmGlobalVersion: "3.1",
    wmMarket: "US",
    wmAuditOriginSource: "SELLER_API",
  });
  // TODO: Handle 'response' of type V3WfsRecommendationRestockResponse
} catch (err) {
  // TODO: Handle 'err' of type RecommendationsApi.GetRestockRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendationsApi.getRestockRecommendations({
  customerFavorite: true,
  limit: 10,
  offset: 1,
  sortBy: "forecastedSalesLift",
  authorization: "Basic YzcyOTFjNmItNzI5MC00....",
  contentType: "application/json",
  accept: "application/json",
  wmGlobalVersion: "3.1",
  wmMarket: "US",
  wmAuditOriginSource: "SELLER_API",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WfsRecommendationRestockResponse
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
| <code>customerFavorite?</code> | <code>boolean</code> | Filters items by customer favorite status. When set to `true`, only customer favorites are returned. When set to `false`, only non-favorites are returned. If omitted, all items are returned. |
| <code>showInsights?</code> | <code>boolean</code> | Shows aggregate recommendation values for all items.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: true |
| <code>limit?</code> | <code>number</code> | The maximum number of SKUs to include in the response (1–300). If you omit this parameter, Walmart returns up to 30 SKUs.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 30 |
| <code>offset?</code> | <code>number</code> | The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the first SKU.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 0 |
| <code>sortBy?</code> | <code>string</code> | The attribute to be used in sorting the response.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "forecastedSalesLift" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order of value. Default is "DESC.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "DESC" |
| <code>showHiddenRecordsOnly?</code> | <code>boolean</code> | Shows insights you have hidden.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: false |
| <code>authorization</code> | <code>string</code> | Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>contentType</code> | <code>string</code> | Specifies the literal **application/json**. This value identifies the content type of the request body.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmGlobalVersion</code> | <code>string</code> | Global version for API compatibility.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmMarket</code> | <code>string</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmAuditOriginSource</code> | <code>string</code> | Seller identifier.<br><br><b style='color: green;'>Market availability: US only</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendationsApi.getRestockRecommendations(request)`

- **OnSuccess**: <code>[V3WfsRecommendationRestockResponse](src/models/v3-wfs-recommendation-restock-response.ts)</code>
- **OnError**: throws <code>[RecommendationsApi.GetRestockRecommendationsError](src/resources/recommendations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendationsApi.getRestockRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WfsRecommendationRestockResponse, RecommendationsApi.GetRestockRecommendationsError&gt;</code>, with `result.value` of type <code>[V3WfsRecommendationRestockResponse](src/models/v3-wfs-recommendation-restock-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShipmentQuantityRecommendations(request: RecommendationsApi.GetShipmentQuantityRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3WfsRecommendationShipmentQuantityResponse, RecommendationsApi.GetShipmentQuantityRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get recommended shipment quantities for the items that you plan to send to Walmart Fulfillment Services (WFS) in order to achieve optimal inventory levels.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendationsApi.getShipmentQuantityRecommendations({
    authorization: "Basic YzcyOTFjNmItNzI5MC00....",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    accept: "application/json",
    wmGlobalVersion: "3.1",
    wmMarket: "US",
    body: { listOfGtins: ["00723508807642", "00643131798370", "00643131799155"], listOfSkus: [] },
  });
  // TODO: Handle 'response' of type V3WfsRecommendationShipmentQuantityResponse
} catch (err) {
  // TODO: Handle 'err' of type RecommendationsApi.GetShipmentQuantityRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendationsApi.getShipmentQuantityRecommendations({
  authorization: "Basic YzcyOTFjNmItNzI5MC00....",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  accept: "application/json",
  wmGlobalVersion: "3.1",
  wmMarket: "US",
  body: { listOfGtins: ["00723508807642", "00643131798370", "00643131799155"], listOfSkus: [] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WfsRecommendationShipmentQuantityResponse
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
| <code>authorization</code> | <code>string</code> | Basic authorization header. Base 64 encodes the Client ID and Client Secret retrieved in step two of the integration steps.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmSecAccessToken</code> | <code>string</code> | The access token retrieved in the Token API call<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmGlobalVersion</code> | <code>string</code> | Global version for API compatibility.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmMarket</code> | <code>string</code> | Market identifier.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>body</code> | <code>[V3WfsRecommendationShipmentQuantityRequest](src/models/v3-wfs-recommendation-shipment-quantity-request.ts)</code> | Request body containing GTINs or SKUs to retrieve the quantity limit.<br><br><b style='color: green;'>Market availability: US only</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendationsApi.getShipmentQuantityRecommendations(request)`

- **OnSuccess**: <code>[V3WfsRecommendationShipmentQuantityResponse](src/models/v3-wfs-recommendation-shipment-quantity-response.ts)</code>
- **OnError**: throws <code>[RecommendationsApi.GetShipmentQuantityRecommendationsError](src/resources/recommendations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendationsApi.getShipmentQuantityRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WfsRecommendationShipmentQuantityResponse, RecommendationsApi.GetShipmentQuantityRecommendationsError&gt;</code>, with `result.value` of type <code>[V3WfsRecommendationShipmentQuantityResponse](src/models/v3-wfs-recommendation-shipment-quantity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUnpublishedRecommendations(request: RecommendationsApi.GetUnpublishedRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3WfsRecommendationUnpublishedResponse, RecommendationsApi.GetUnpublishedRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This call helps you identify the estimated storage fees with Walmart for your unpublished WFS items.

Use **Unpublish Recommendations** to fetch a current list of your unpublished WFS items. This is available on demand. 

Key data attributes include:

- **unpublishedIssue**: The reason your item is currently unpublished with Walmart.
- **estimatedStorageFee**: The estimated storage costs associated with your unpublished WFS inventory.
- **totalunpublishedunitsstored**: The total quantity of units in WFS fulfillment centers for unpublished items.

Use this data to identify the reason these items are unpublished and the estimated costs associated with these unpublished items. By default, these suggestions will only include items that are active with an Available to Sell (ATS) quantity of 0.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendationsApi.getUnpublishedRecommendations({
    customerFavorite: true,
    limit: 10,
    offset: 1,
    sortBy: "forecastedSalesLift",
    contentType: "application/json",
    accept: "application/json",
    wmGlobalVersion: "3.1",
    wmMarket: "US",
    wmAuditOriginSource: "SELLER_API",
  });
  // TODO: Handle 'response' of type V3WfsRecommendationUnpublishedResponse
} catch (err) {
  // TODO: Handle 'err' of type RecommendationsApi.GetUnpublishedRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendationsApi.getUnpublishedRecommendations({
  customerFavorite: true,
  limit: 10,
  offset: 1,
  sortBy: "forecastedSalesLift",
  contentType: "application/json",
  accept: "application/json",
  wmGlobalVersion: "3.1",
  wmMarket: "US",
  wmAuditOriginSource: "SELLER_API",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3WfsRecommendationUnpublishedResponse
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
| <code>customerFavorite?</code> | <code>boolean</code> | Filters items by customer favorite status. When set to `true`, only customer favorites are returned. When set to `false`, only non-favorites are returned. If omitted, all items are returned. |
| <code>showInsights?</code> | <code>boolean</code> | Shows aggregate recommendation values for all items.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: false |
| <code>limit?</code> | <code>number</code> | The maximum number of SKUs to include in the response (1–300). If you omit this parameter, Walmart returns up to 30 SKUs.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 30 |
| <code>offset?</code> | <code>number</code> | The number of SKUs to skip before Walmart starts listing results. Set to 0 to start at the first SKU.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: 0 |
| <code>sortBy?</code> | <code>string</code> | The attribute to be used in sorting the response.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "estimatedSalesLift" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which the response should be sorted. This can be in set to "ASC" or "DESC" order of value. Default is "DESC.<br><br><b style='color: green;'>Market availability: US only</b><br>**Default**: "DESC" |
| <code>contentType</code> | <code>string</code> | Specifies the literal **application/json**. This value identifies the content type of the request body.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmGlobalVersion</code> | <code>string</code> | Global version for API compatibility.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmMarket</code> | <code>string</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color: green;'>Market availability: US only</b> |
| <code>wmAuditOriginSource</code> | <code>string</code> | Seller identifier.<br><br><b style='color: green;'>Market availability: US only</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendationsApi.getUnpublishedRecommendations(request)`

- **OnSuccess**: <code>[V3WfsRecommendationUnpublishedResponse](src/models/v3-wfs-recommendation-unpublished-response.ts)</code>
- **OnError**: throws <code>[RecommendationsApi.GetUnpublishedRecommendationsError](src/resources/recommendations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendationsApi.getUnpublishedRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3WfsRecommendationUnpublishedResponse, RecommendationsApi.GetUnpublishedRecommendationsError&gt;</code>, with `result.value` of type <code>[V3WfsRecommendationUnpublishedResponse](src/models/v3-wfs-recommendation-unpublished-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReportsApi

> Source: [ReportsApi](src/resources/reports-api.ts)

<details>
<summary><code>getAvailableReconReportDates(request: ReportsApi.GetAvailableReconReportDatesRequest, options?: RequestOptions): ApiPromise&lt;ReconReportDateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will list all the available Marketplace reconciliation report dates for the Seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getAvailableReconReportDates({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type ReconReportDateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getAvailableReconReportDates({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReconReportDateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getAvailableReconReportDates(request)`

- **OnSuccess**: <code>[ReconReportDateResponse](src/models/recon-report-date-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportsApi.getAvailableReconReportDates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReconReportDateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ReconReportDateResponse](src/models/recon-report-date-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableV1ReconReportAsJson(request: ReportsApi.GetAvailableV1ReconReportAsJsonRequest, options?: RequestOptions): ApiPromise&lt;ReconReportV1AsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will get a partner’s transaction details in JSON format for a specific date range (available only for v1 reports). Dates for accessing the report can be found by using the ‘GET Available recon report dates’ API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getAvailableV1ReconReportAsJson({
    reportDate: "some example string",
    offset: 1,
    noOfRecords: 1,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type ReconReportV1AsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getAvailableV1ReconReportAsJson({
  reportDate: "some example string",
  offset: 1,
  noOfRecords: 1,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReconReportV1AsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reportDate</code> | <code>string</code> | Date of the settlement report |
| <code>offset</code> | <code>number</code> | starting number of the bytes, initial value for the offset is zero |
| <code>noOfRecords</code> | <code>number</code> | number of records in the report (max limit 1000) |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getAvailableV1ReconReportAsJson(request)`

- **OnSuccess**: <code>[ReconReportV1AsJsonResponse](src/models/recon-report-v1-as-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportsApi.getAvailableV1ReconReportAsJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReconReportV1AsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[ReconReportV1AsJsonResponse](src/models/recon-report-v1-as-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAvailableV1ReconReportDates(request: ReportsApi.GetAvailableV1ReconReportDatesRequest, options?: RequestOptions): ApiPromise&lt;ReconReportDateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will list all the available Marketplace reconciliation report dates for the Seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getAvailableV1ReconReportDates({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type ReconReportDateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getAvailableV1ReconReportDates({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReconReportDateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getAvailableV1ReconReportDates(request)`

- **OnSuccess**: <code>[ReconReportDateResponse](src/models/recon-report-date-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportsApi.getAvailableV1ReconReportDates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReconReportDateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ReconReportDateResponse](src/models/recon-report-date-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPartnerPerformance(request: ReportsApi.GetPartnerPerformanceRequest, options?: RequestOptions): ApiPromise&lt;PartnerProgramPerformanceRes, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will get a partner's current cycle performance

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getPartnerPerformance({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type PartnerProgramPerformanceRes
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getPartnerPerformance({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerProgramPerformanceRes
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getPartnerPerformance(request)`

- **OnSuccess**: <code>[PartnerProgramPerformanceRes](src/models/partner-program-performance-res.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportsApi.getPartnerPerformance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerProgramPerformanceRes, ApiError&gt;</code>, with `result.value` of type <code>[PartnerProgramPerformanceRes](src/models/partner-program-performance-res.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPartnerStatement(request: ReportsApi.GetPartnerStatementRequest, options?: RequestOptions): ApiPromise&lt;PartnerProgramStatementRes, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API will get a partner's current cycle statement

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getPartnerStatement({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type PartnerProgramStatementRes
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getPartnerStatement({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerProgramStatementRes
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getPartnerStatement(request)`

- **OnSuccess**: <code>[PartnerProgramStatementRes](src/models/partner-program-statement-res.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reportsApi.getPartnerStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerProgramStatementRes, ApiError&gt;</code>, with `result.value` of type <code>[PartnerProgramStatementRes](src/models/partner-program-statement-res.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReconReport(request: ReportsApi.GetReconReportRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ReportsApi.GetReconReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seller can download the reconciliation report for a specific date using this API. Dates available to be downloaded can be found by using the Get available reconciliation report dates API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getReconReport({
    reportDate: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.GetReconReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getReconReport({
  reportDate: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
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
| <code>reportDate</code> | <code>string</code> | The date for which the reconcilation file is available |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getReconReport(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ReportsApi.GetReconReportError](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.getReconReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ReportsApi.GetReconReportError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getReconReportV1(request: ReportsApi.GetReconReportV1Request, options?: RequestOptions): ApiPromise&lt;BinaryContent, ReportsApi.GetReconReportV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seller can download the reconciliation report for a specific date using this API. Dates available to be downloaded can be found by using the Get available reconciliation report dates API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reportsApi.getReconReportV1({
    reportDate: "some example string",
    reportVersion: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ReportsApi.GetReconReportV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reportsApi.getReconReportV1({
  reportDate: "some example string",
  reportVersion: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
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
| <code>reportDate</code> | <code>string</code> | The date for which the reconcilation file is available |
| <code>reportVersion</code> | <code>string</code> | Report Version |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reportsApi.getReconReportV1(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ReportsApi.GetReconReportV1Error](src/resources/reports-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reportsApi.getReconReportV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ReportsApi.GetReconReportV1Error&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReturnsRefund

> Source: [ReturnsRefund](src/resources/returns-refund.ts)

<details>
<summary><code>getReturns(request: ReturnsRefund.GetReturnsRequest, options?: RequestOptions): ApiPromise&lt;ReturnOrderResponse, ReturnsRefund.GetReturnsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of all return orders for the specified filter criteria.

<br><b style='color:green;'>Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.returnsRefund.getReturns({
    queryParams: {},
    wmQosCorrelationId: "some example string",
    wmSvcName: "some example string",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type ReturnOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ReturnsRefund.GetReturnsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.returnsRefund.getReturns({
  queryParams: {},
  wmQosCorrelationId: "some example string",
  wmSvcName: "some example string",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReturnOrderResponse
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
| <code>queryParams</code> | <code>[QueryParams](src/models/query-params.ts)</code> | - |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br>Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br>Example: Walmart Marketplace<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.returnsRefund.getReturns(request)`

- **OnSuccess**: <code>[ReturnOrderResponse](src/models/return-order-response.ts)</code>
- **OnError**: throws <code>[ReturnsRefund.GetReturnsError](src/resources/returns-refund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.returnsRefund.getReturns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReturnOrderResponse, ReturnsRefund.GetReturnsError&gt;</code>, with `result.value` of type <code>[ReturnOrderResponse](src/models/return-order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refundRequest(request: ReturnsRefund.RefundRequestRequest, options?: RequestOptions): ApiPromise&lt;Request, ReturnsRefund.RefundRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds one or more order lines that have been shipped. The response to a successful call contains the order with the refunded line item. 

<br><b style='color:green;'>Market availability: US | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.returnsRefund.refundRequest({
    returnOrderId: "some example string",
    wmQosCorrelationId: "some example string",
    wmSvcName: "some example string",
    wmMarket: WmMarket3.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      customerOrderId: "some example string",
      refundLines: [
        { returnOrderLineNumber: 1, quantity: { unitOfMeasure: "some example string", measurementValue: 1 } },
      ],
      orderRefund: {},
    },
  });
  // TODO: Handle 'response' of type Request
} catch (err) {
  // TODO: Handle 'err' of type ReturnsRefund.RefundRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.returnsRefund.refundRequest({
  returnOrderId: "some example string",
  wmQosCorrelationId: "some example string",
  wmSvcName: "some example string",
  wmMarket: WmMarket3.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    customerOrderId: "some example string",
    refundLines: [
      { returnOrderLineNumber: 1, quantity: { unitOfMeasure: "some example string", measurementValue: 1 } },
    ],
    orderRefund: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Request
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
| <code>returnOrderId</code> | <code>string</code> | Return order identifier of the return order object as part of array. This is the same as RMA number.<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br>Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br>Example: Walmart Marketplace<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>wmMarket</code> | <code>[WmMarket3](src/models/wm-market3.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: US \| MX</b> |
| <code>body</code> | <code>[RefundRequest](src/models/refund-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.returnsRefund.refundRequest(request)`

- **OnSuccess**: <code>[Request](src/models/request.ts)</code>
- **OnError**: throws <code>[ReturnsRefund.RefundRequestError](src/resources/returns-refund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.returnsRefund.refundRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Request, ReturnsRefund.RefundRequestError&gt;</code>, with `result.value` of type <code>[Request](src/models/request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>returnOrderCursor(request: ReturnsRefund.ReturnOrderCursorRequest, options?: RequestOptions): ApiPromise&lt;ReturnOrdersResponses, ReturnsRefund.ReturnOrderCursorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves the details of all return orders based on the specified filter criteria and returns all orders in the response. It returns a nextCursorMark for the next 100 orders, and continues in this manner until the last order. The same API can also be used to search for a single order based on returnOrderId or customerOrderId.<br><b style='color:green;'>Market availability: MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.returnsRefund.returnOrderCursor({
    queryParams: {},
    wmQosCorrelationId: "some example string",
    wmSvcName: "some example string",
    wmMarket: WmMarket21.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type ReturnOrdersResponses
} catch (err) {
  // TODO: Handle 'err' of type ReturnsRefund.ReturnOrderCursorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.returnsRefund.returnOrderCursor({
  queryParams: {},
  wmQosCorrelationId: "some example string",
  wmSvcName: "some example string",
  wmMarket: WmMarket21.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReturnOrdersResponses
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
| <code>queryParams</code> | <code>[QueryParamsMx](src/models/query-params-mx.ts)</code> | - |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br>Example: b3261d2d-028a-4ef7-8602-633c23200af6<br><b style='color:green;'>Market availability: MX</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br>Example: Walmart Marketplace<br><b style='color:green;'>Market availability: MX</b> |
| <code>wmMarket</code> | <code>[WmMarket21](src/models/wm-market21.ts)</code> | Identifies the Walmart Marketplace region for the request.<br><b style='color:green;'>Market availability: MX</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><b style='color:green;'>Market availability: MX</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: MX</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.returnsRefund.returnOrderCursor(request)`

- **OnSuccess**: <code>[ReturnOrdersResponses](src/models/return-orders-responses.ts)</code>
- **OnError**: throws <code>[ReturnsRefund.ReturnOrderCursorError](src/resources/returns-refund.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.returnsRefund.returnOrderCursor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReturnOrdersResponses, ReturnsRefund.ReturnOrderCursorError&gt;</code>, with `result.value` of type <code>[ReturnOrdersResponses](src/models/return-orders-responses.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](src/resources/reviews.ts)

<details>
<summary><code>bulkUpdateItemStatus(request: Reviews.BulkUpdateItemStatusRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthReviewsAcceleratorItemsStatusResponse, Reviews.BulkUpdateItemStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to enroll or disenroll items in the Review Accelerator Program (RAP).<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.bulkUpdateItemStatus({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket1.Us,
    body: { status: Status11.Enroll, items: [{ itemId: "2719243" }, { itemId: "2719255" }] },
  });
  // TODO: Handle 'response' of type V3GrowthReviewsAcceleratorItemsStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.BulkUpdateItemStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews.bulkUpdateItemStatus({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket1.Us,
  body: { status: Status11.Enroll, items: [{ itemId: "2719243" }, { itemId: "2719255" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthReviewsAcceleratorItemsStatusResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3GrowthReviewsAcceleratorItemsStatusRequest](src/models/v3-growth-reviews-accelerator-items-status-request.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.bulkUpdateItemStatus(request)`

- **OnSuccess**: <code>[V3GrowthReviewsAcceleratorItemsStatusResponse](src/models/v3-growth-reviews-accelerator-items-status-response.ts)</code>
- **OnError**: throws <code>[Reviews.BulkUpdateItemStatusError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.bulkUpdateItemStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthReviewsAcceleratorItemsStatusResponse, Reviews.BulkUpdateItemStatusError&gt;</code>, with `result.value` of type <code>[V3GrowthReviewsAcceleratorItemsStatusResponse](src/models/v3-growth-reviews-accelerator-items-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIrpCategories(request: Reviews.GetIrpCategoriesRequest, options?: RequestOptions): ApiPromise&lt;V3GrowthReviewsAcceleratorCategoriesResponse, Reviews.GetIrpCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the set of categories the RAP post-purchase items belong to.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.getIrpCategories({
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket1.Us,
    body: {},
  });
  // TODO: Handle 'response' of type V3GrowthReviewsAcceleratorCategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.GetIrpCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews.getIrpCategories({
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket1.Us,
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthReviewsAcceleratorCategoriesResponse
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
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3GrowthReviewsAcceleratorCategoriesRequest](src/models/v3-growth-reviews-accelerator-categories-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.getIrpCategories(request)`

- **OnSuccess**: <code>[V3GrowthReviewsAcceleratorCategoriesResponse](src/models/v3-growth-reviews-accelerator-categories-response.ts)</code>
- **OnError**: throws <code>[Reviews.GetIrpCategoriesError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.getIrpCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthReviewsAcceleratorCategoriesResponse, Reviews.GetIrpCategoriesError&gt;</code>, with `result.value` of type <code>[V3GrowthReviewsAcceleratorCategoriesResponse](src/models/v3-growth-reviews-accelerator-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIrpItems(request: Reviews.GetIrpItemsRequestParams, options?: RequestOptions): ApiPromise&lt;V3GrowthReviewsAcceleratorItemsResponse, Reviews.GetIrpItemsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To get all eligible products that can be enrolled in the Reviews Accelerator post-purchase program, as well as to retrieve all products currently enrolled in the program, and all products that have attained target reviews after enrollment, you can use the following criteria:
<li>Filter products by category and price.
<li>Sort products by Walmart-recommended item priorities.
<li>Search using wildcards to match the product name and SKU.<br><b style='color:green;'>Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.getIrpItems({
    scrollId: "some example string",
    wmGlobalVersion: WmGlobalVersion._31,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket1.Us,
    body: { filter: { itemStatus: ItemStatus8.Eligible } },
  });
  // TODO: Handle 'response' of type V3GrowthReviewsAcceleratorItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Reviews.GetIrpItemsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews.getIrpItems({
  scrollId: "some example string",
  wmGlobalVersion: WmGlobalVersion._31,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket1.Us,
  body: { filter: { itemStatus: ItemStatus8.Eligible } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3GrowthReviewsAcceleratorItemsResponse
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
| <code>scrollId?</code> | <code>string</code> | Optional parameter specifying the scrollId to return the next set of results.<br><b style='color:green;'>Market availability: US only</b><br>**Default**: "*" |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The default is set to 3.1.1<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><b style='color:green;'>Market availability: Global</b> |
| <code>body</code> | <code>[V3GrowthReviewsAcceleratorItemsRequest](src/models/v3-growth-reviews-accelerator-items-request.ts)</code> | Request payload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.getIrpItems(request)`

- **OnSuccess**: <code>[V3GrowthReviewsAcceleratorItemsResponse](src/models/v3-growth-reviews-accelerator-items-response.ts)</code>
- **OnError**: throws <code>[Reviews.GetIrpItemsError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.getIrpItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3GrowthReviewsAcceleratorItemsResponse, Reviews.GetIrpItemsError&gt;</code>, with `result.value` of type <code>[V3GrowthReviewsAcceleratorItemsResponse](src/models/v3-growth-reviews-accelerator-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RichMedia

> Source: [RichMedia](src/resources/rich-media.ts)

<details>
<summary><code>getAllAssets(request: RichMedia.GetAllAssetsRequest, options?: RequestOptions): ApiPromise&lt;AssetsResponse, RichMedia.GetAllAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve rich media assets, including 360-spin images and videos, from the seller catalog. Assets can be created in seller center media library or programmatically through the API. Use this endpoint to retrieve the asset hash, which uniquely identifies each media asset for future management.

<b style="color: green;">Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.richMedia.getAllAssets({
    page: 1,
    limit: 25,
    linkedGtins: ["00716999676446", "07815386164856"],
    richMediaTitle: "title",
    richMediaType: RichMediaType.Video,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
  });
  // TODO: Handle 'response' of type AssetsResponse
} catch (err) {
  // TODO: Handle 'err' of type RichMedia.GetAllAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.richMedia.getAllAssets({
  page: 1,
  limit: 25,
  linkedGtins: ["00716999676446", "07815386164856"],
  richMediaTitle: "title",
  richMediaType: RichMediaType.Video,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetsResponse
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
| <code>page?</code> | <code>number</code> | Indicates the page number to return in the paginated result set. Use this parameter to navigate through multiple pages of results. The value should be a positive integer. For example, 1 for the first page, 2 for the second, and so on.<br><br><b style="color: green;">Market availability: US only</b><br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | Defines the maximum number of items to return per page when retrieving paginated data. Use this parameter to control the number of results included in a single page. The value should be a positive integer.<br><br><b style="color: green;">Market availability: US only</b><br>**Default**: 25 |
| <code>linkedGtins?</code> | <code>string[]</code> | Filters assets by linked GTIN. Provide multiple GTINs as a list. If omitted, all assets are returned.<br><br><b style="color: green;">Market availability: US only</b> |
| <code>richMediaTitle?</code> | <code>string</code> | Filters assets by rich media title or asset title. If omitted, all assets are returned.<br><br><b style="color: green;">Market availability: US only</b> |
| <code>richMediaType?</code> | <code>[RichMediaType](src/models/rich-media-type.ts)</code> | Filters assets by rich media type. Allowed values: `IMAGES360`, `VIDEO`.<br><br><b style="color: green;">Market availability: US only</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the consumer channel type received during onboarding.<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.richMedia.getAllAssets(request)`

- **OnSuccess**: <code>[AssetsResponse](src/models/assets-response.ts)</code>
- **OnError**: throws <code>[RichMedia.GetAllAssetsError](src/resources/rich-media.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.richMedia.getAllAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetsResponse, RichMedia.GetAllAssetsError&gt;</code>, with `result.value` of type <code>[AssetsResponse](src/models/assets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>richMediaOperation(request: RichMedia.RichMediaOperationRequest, options?: RequestOptions): ApiPromise&lt;FeedId1, RichMedia.RichMediaOperationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create, update, or delink rich media assets for items in the seller catalog. Supported asset types are `IMAGES360` and `VIDEO`. Use this API to 1) add new rich media, 2) update associations for existing rich media, or 3) delink item association on existing rich media. Provide accessible media URLs and related metadata in the request body. Video assets require one video URL. 360-spin image assets require 24 image URLs.

<b style="color: green;">Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.richMedia.richMediaOperation({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    body: {
      supplierItemFeedHeader: {
        locale: "some example string",
        version: "some example string",
        subCategory: SubCategory.Video,
      },
      supplierItem: [{ orderable: { productId: "some example string" }, visible: {} }],
    },
  });
  // TODO: Handle 'response' of type FeedId1
} catch (err) {
  // TODO: Handle 'err' of type RichMedia.RichMediaOperationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.richMedia.richMediaOperation({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  body: {
    supplierItemFeedHeader: {
      locale: "some example string",
      version: "some example string",
      subCategory: SubCategory.Video,
    },
    supplierItem: [{ orderable: { productId: "some example string" }, visible: {} }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId1
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the consumer channel type received during onboarding.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>body</code> | <code>[RichMediaFeedRequest](src/models/rich-media-feed-request.ts)</code> | Rich media feed payload containing asset metadata, item associations, and media URLs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.richMedia.richMediaOperation(request)`

- **OnSuccess**: <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: throws <code>[RichMedia.RichMediaOperationError](src/resources/rich-media.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.richMedia.richMediaOperation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId1, RichMedia.RichMediaOperationError&gt;</code>, with `result.value` of type <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SeoRecommendations

> Source: [SeoRecommendations](src/resources/seo-recommendations.ts)

<details>
<summary><code>getSeoRecommendations(request: SeoRecommendations.GetSeoRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3SeoRecommendationGetItemsResponse, SeoRecommendations.GetSeoRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of items with SEO recommendations. Sellers can filter items by status (all, new, accepted, rejected), search for specific items using identifiers like (itemId, sku, or name) and paginate results for large datasets.. 



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.seoRecommendations.getSeoRecommendations({
    limit: "200",
    nextCursor: "*",
    previousCursor: "1374004777531007833",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    accept: "application/json",
  });
  // TODO: Handle 'response' of type V3SeoRecommendationGetItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type SeoRecommendations.GetSeoRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.seoRecommendations.getSeoRecommendations({
  limit: "200",
  nextCursor: "*",
  previousCursor: "1374004777531007833",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  accept: "application/json",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SeoRecommendationGetItemsResponse
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
| <code>status?</code> | <code>[Status2](src/models/status2.ts)</code> | Specifies the type of items to retrieve. Default when type not provided it will return new items. |
| <code>limit?</code> | <code>string</code> | Specify number of items to return. If no limit is specified, API returns 200 items by default. |
| <code>nextCursor?</code> | <code>string</code> | Link to go to the next page |
| <code>previousCursor?</code> | <code>string</code> | Link to go to the previous page |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |
| <code>body?</code> | <code>[V3SeoRecommendationGetItemsRequest](src/models/v3-seo-recommendation-get-items-request.ts)</code> | This will contain the wild card search related details |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.seoRecommendations.getSeoRecommendations(request)`

- **OnSuccess**: <code>[V3SeoRecommendationGetItemsResponse](src/models/v3-seo-recommendation-get-items-response.ts)</code>
- **OnError**: throws <code>[SeoRecommendations.GetSeoRecommendationsError](src/resources/seo-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.seoRecommendations.getSeoRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SeoRecommendationGetItemsResponse, SeoRecommendations.GetSeoRecommendationsError&gt;</code>, with `result.value` of type <code>[V3SeoRecommendationGetItemsResponse](src/models/v3-seo-recommendation-get-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSeoRecommendations(request: SeoRecommendations.UpdateSeoRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;V3SeoRecommendationUpdateItemsResponse, SeoRecommendations.UpdateSeoRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sellers can accept or reject SEO recommendations with optimal feedback for rejected recommendations

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.seoRecommendations.updateSeoRecommendations({
    itemId: "some example string",
    decision: Decision.Approved,
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    accept: "application/json",
  });
  // TODO: Handle 'response' of type V3SeoRecommendationUpdateItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type SeoRecommendations.UpdateSeoRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.seoRecommendations.updateSeoRecommendations({
  itemId: "some example string",
  decision: Decision.Approved,
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  accept: "application/json",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SeoRecommendationUpdateItemsResponse
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
| <code>itemId</code> | <code>string</code> | Unique Item Identifier |
| <code>decision</code> | <code>[Decision](src/models/decision.ts)</code> | approve/reject a recommendation |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and used to track and debug issues; use a random generated GUID for this ID |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name |
| <code>accept</code> | <code>string</code> | Only supported Media Type : application/json |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding |
| <code>body?</code> | <code>[V3SeoRecommendationUpdateItemsRequest](src/models/v3-seo-recommendation-update-items-request.ts)</code> | Additional details required for submission |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.seoRecommendations.updateSeoRecommendations(request)`

- **OnSuccess**: <code>[V3SeoRecommendationUpdateItemsResponse](src/models/v3-seo-recommendation-update-items-response.ts)</code>
- **OnError**: throws <code>[SeoRecommendations.UpdateSeoRecommendationsError](src/resources/seo-recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.seoRecommendations.updateSeoRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SeoRecommendationUpdateItemsResponse, SeoRecommendations.UpdateSeoRecommendationsError&gt;</code>, with `result.value` of type <code>[V3SeoRecommendationUpdateItemsResponse](src/models/v3-seo-recommendation-update-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ShipWithWalmart

> Source: [ShipWithWalmart](src/resources/ship-with-walmart.ts)

<details>
<summary><code>createLabel(request: ShipWithWalmart.CreateLabelRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsResponse, ShipWithWalmart.CreateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a shipping label using the provided shipment information. A successful response includes a tracking number and a label file in the media type specified in the Accept header.<br><br>This API is supported for <b>all shipping programs</b>, including <b>Walmart Provided Shipping (WPS)</b> and <b>Ship with Walmart (SWW)</b>.<br><br><b>Media Type Options (via Accept header):</b><br>• application/json, application/pdf → Returns label in PDF format.
• application/json, image/png → Returns label in PNG format.
• application/json → Returns tracking info only in JSON. <br><br> <b>Note:</b> The <b>Ship with Walmart service from China to the U.S.</b> is <b>paused until further notice</b>.

<b style="color: green;">Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.createLabel({
    accept: "application/json",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      packageType: "CUSTOM_PACKAGE",
      boxDimensions: {
        boxLength: 13,
        boxWidth: 9,
        boxHeight: 0,
        boxWeight: 13,
        boxDimensionUnit: BoxDimensionUnit3.In,
        boxWeightUnit: BoxWeightUnit3.Lb,
      },
      boxItems: [{ sku: "PRECISE3PGLASS9", quantity: 1, lineNumber: "1" }],
      fromAddress: {
        contactName: "Test Seller",
        companyName: "Test Company",
        addressLine1: "Add1",
        addressLine2: "Add2",
        city: "Anchorage",
        state: "AK",
        postalCode: "99501",
        country: "US",
        phone: "12253",
        email: "test@walmart.com",
      },
      purchaseOrderId: "97108719025934786",
      carrierName: "FedEx",
      carrierServiceType: "FEDEX_2_DAY",
      hazmat: true,
    },
  });
  // TODO: Handle 'response' of type V3ShippingLabelsResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipWithWalmart.CreateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.createLabel({
  accept: "application/json",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    packageType: "CUSTOM_PACKAGE",
    boxDimensions: {
      boxLength: 13,
      boxWidth: 9,
      boxHeight: 0,
      boxWeight: 13,
      boxDimensionUnit: BoxDimensionUnit3.In,
      boxWeightUnit: BoxWeightUnit3.Lb,
    },
    boxItems: [{ sku: "PRECISE3PGLASS9", quantity: 1, lineNumber: "1" }],
    fromAddress: {
      contactName: "Test Seller",
      companyName: "Test Company",
      addressLine1: "Add1",
      addressLine2: "Add2",
      city: "Anchorage",
      state: "AK",
      postalCode: "99501",
      country: "US",
      phone: "12253",
      email: "test@walmart.com",
    },
    purchaseOrderId: "97108719025934786",
    carrierName: "FedEx",
    carrierServiceType: "FEDEX_2_DAY",
    hazmat: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsResponse
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
| <code>accept</code> | <code>string</code> | Specifies the desired response format. The order of media types determines the priority for format selection.<br><br>**Supported values:**<br>- `application/json` : Returns tracking information only (no label file).<br>- `application/json, application/pdf` : Returns the label in PDF format.<br>- `application/json, image/png` : Returns the label in PNG format.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br>Example: Walmart Marketplace<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Case-sensitive market identifier. Valid values: MX, CA, CL, US <br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |
| <code>body</code> | <code>[V3ShippingLabelsRequest](src/models/v3-shipping-labels-request.ts)</code> | Label fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.createLabel(request)`

- **OnSuccess**: <code>[V3ShippingLabelsResponse](src/models/v3-shipping-labels-response.ts)</code>
- **OnError**: throws <code>[ShipWithWalmart.CreateLabelError](src/resources/ship-with-walmart.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipWithWalmart.createLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsResponse, ShipWithWalmart.CreateLabelError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsResponse](src/models/v3-shipping-labels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLabelMps(request: ShipWithWalmart.CreateLabelMpsRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingMultiPackageLabelsResponse, ShipWithWalmart.CreateLabelMpsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a shipping label for items, supporting multiple packages per request. A successful response includes a tracking number and a label file in the media type specified by the Accept header. This API supports <b>all shipping programs</b>, including <b>Walmart Provided Shipping (WPS)</b> and <b>Ship with Walmart (SWW)</b>.<br><br><b>Media Type Options (via Accept header):</b><br>•application/json, application/pdf → Returns the label in PDF format.<br>•application/json → Returns tracking info only, in JSON format.

<b style="color: green;">Market availability: CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.createLabelMps({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
    body: {
      packageDimensions: [
        {
          packageType: "CUSTOM_PACKAGE",
          boxDimensions: {
            boxDimensionUnit: BoxDimensionUnit4.In,
            boxWeightUnit: BoxWeightUnit4.Lb,
            boxWeight: 3,
            boxLength: 9,
            boxWidth: 12,
            boxHeight: 1,
          },
        },
        {
          packageType: "CUSTOM_PACKAGE",
          boxDimensions: {
            boxDimensionUnit: BoxDimensionUnit4.In,
            boxWeightUnit: BoxWeightUnit4.Lb,
            boxWeight: 3,
            boxLength: 9,
            boxWidth: 12,
            boxHeight: 1,
          },
        },
        {
          packageType: "CUSTOM_PACKAGE",
          boxDimensions: {
            boxDimensionUnit: BoxDimensionUnit4.In,
            boxWeightUnit: BoxWeightUnit4.Lb,
            boxWeight: 3,
            boxLength: 9,
            boxWidth: 12,
            boxHeight: 1,
          },
        },
      ],
      boxItems: [{ sku: "EDF07661449630550", quantity: 1, countryOfOrigin: "MX", lineNumber: "1" }],
      fromAddress: {
        contactName: "Test",
        companyName: "Walmart",
        addressLine1: "Add1",
        addressLine2: "Add2",
        city: "Anchorage",
        state: "AK",
        postalCode: "99501",
        country: "US",
        phone: "12253",
        email: "test@walmart.com",
      },
      purchaseOrderId: "309006496534952",
      carrierName: "FedEx",
      carrierServiceType: "FEDEX_INTERNATIONAL_ECONOMY",
    },
  });
  // TODO: Handle 'response' of type V3ShippingMultiPackageLabelsResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipWithWalmart.CreateLabelMpsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.createLabelMps({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
  body: {
    packageDimensions: [
      {
        packageType: "CUSTOM_PACKAGE",
        boxDimensions: {
          boxDimensionUnit: BoxDimensionUnit4.In,
          boxWeightUnit: BoxWeightUnit4.Lb,
          boxWeight: 3,
          boxLength: 9,
          boxWidth: 12,
          boxHeight: 1,
        },
      },
      {
        packageType: "CUSTOM_PACKAGE",
        boxDimensions: {
          boxDimensionUnit: BoxDimensionUnit4.In,
          boxWeightUnit: BoxWeightUnit4.Lb,
          boxWeight: 3,
          boxLength: 9,
          boxWidth: 12,
          boxHeight: 1,
        },
      },
      {
        packageType: "CUSTOM_PACKAGE",
        boxDimensions: {
          boxDimensionUnit: BoxDimensionUnit4.In,
          boxWeightUnit: BoxWeightUnit4.Lb,
          boxWeight: 3,
          boxLength: 9,
          boxWidth: 12,
          boxHeight: 1,
        },
      },
    ],
    boxItems: [{ sku: "EDF07661449630550", quantity: 1, countryOfOrigin: "MX", lineNumber: "1" }],
    fromAddress: {
      contactName: "Test",
      companyName: "Walmart",
      addressLine1: "Add1",
      addressLine2: "Add2",
      city: "Anchorage",
      state: "AK",
      postalCode: "99501",
      country: "US",
      phone: "12253",
      email: "test@walmart.com",
    },
    purchaseOrderId: "309006496534952",
    carrierName: "FedEx",
    carrierServiceType: "FEDEX_INTERNATIONAL_ECONOMY",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingMultiPackageLabelsResponse
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default. Valid values: MX, CA, CL.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>accept</code> | <code>string</code> | Response type. The order of media types in the Accept header determines the priority for response format selection.<br><br><b style="color: green;">Market availability: CA</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |
| <code>body</code> | <code>[V3ShippingMultiPackageLabelsRequest](src/models/v3-shipping-multi-package-labels-request.ts)</code> | Label fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.createLabelMps(request)`

- **OnSuccess**: <code>[V3ShippingMultiPackageLabelsResponse](src/models/v3-shipping-multi-package-labels-response.ts)</code>
- **OnError**: throws <code>[ShipWithWalmart.CreateLabelMpsError](src/resources/ship-with-walmart.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipWithWalmart.createLabelMps(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingMultiPackageLabelsResponse, ShipWithWalmart.CreateLabelMpsError&gt;</code>, with `result.value` of type <code>[V3ShippingMultiPackageLabelsResponse](src/models/v3-shipping-multi-package-labels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>discardLabel(request: ShipWithWalmart.DiscardLabelRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsCarriersTrackingsResponse, ShipWithWalmart.DiscardLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a previously generated shipping label as discarded.
This API is used when the label should no longer be used for shipment processing. <br><br> <b>Applicable Shipping Programs:</b><br>This API is supported for the following <b>shipping programs:  Walmart Provided Shipping (WPS) and Ship with Walmart (SWW).</b>

<b style="color: green;">Market availability: US | CA | MX</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.discardLabel({
    carrierShortName: "some example string",
    trackingNo: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket6.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3ShippingLabelsCarriersTrackingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipWithWalmart.DiscardLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.discardLabel({
  carrierShortName: "some example string",
  trackingNo: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket6.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsCarriersTrackingsResponse
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
| <code>carrierShortName</code> | <code>string</code> | The short name of the shipping carrier.<br>Use the carrierShortName value returned from the Supported Carriers API to ensure compatibility.<br><br><b style="color: green;">Market availability: US \| CA \| MX</b> |
| <code>trackingNo</code> | <code>string</code> | The shipment tracking number.<br><br><br><br><b style="color: green;">Market availability: US \| CA \| MX</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID. <br> Example: b3261d2d-028a-4ef7-8602-633c23200af6 <br> <b style="color: green;">Market availability: Global </b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. <br> Example: Walmart Marketplace.<br><br><b style="color: green;">Market availability: Global </b> |
| <code>wmMarket</code> | <code>[WmMarket6](src/models/wm-market6.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default. Valid values: MX, US<br><br><b style="color: green;">Market availability: Global </b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global </b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style="color: green;">Market availability: Global </b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.discardLabel(request)`

- **OnSuccess**: <code>[V3ShippingLabelsCarriersTrackingsResponse](src/models/v3-shipping-labels-carriers-trackings-response.ts)</code>
- **OnError**: throws <code>[ShipWithWalmart.DiscardLabelError](src/resources/ship-with-walmart.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipWithWalmart.discardLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsCarriersTrackingsResponse, ShipWithWalmart.DiscardLabelError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsCarriersTrackingsResponse](src/models/v3-shipping-labels-carriers-trackings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCarrierPackageTypes(request: ShipWithWalmart.GetCarrierPackageTypesRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsCarriersPackageTypesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves all supported package types for the selected carrier.

<b style="color: green;">Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.getCarrierPackageTypes({
    carrierShortName: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3ShippingLabelsCarriersPackageTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getCarrierPackageTypes({
  carrierShortName: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsCarriersPackageTypesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>carrierShortName</code> | <code>string</code> | carrierShortName fetched from carrier API response or pass 'ALL' to fetch all package types of supported carriers<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a random generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default. Valid values: MX, CA, CL.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getCarrierPackageTypes(request)`

- **OnSuccess**: <code>[V3ShippingLabelsCarriersPackageTypesResponse](src/models/v3-shipping-labels-carriers-package-types-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.shipWithWalmart.getCarrierPackageTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsCarriersPackageTypesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsCarriersPackageTypesResponse](src/models/v3-shipping-labels-carriers-package-types-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCarriers(request: ShipWithWalmart.GetCarriersRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsCarriersResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves all carriers supported by Ship With Walmart.

<b style="color: green;">Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.getCarriers({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3ShippingLabelsCarriersResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getCarriers({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsCarriersResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Case-sensitive market identifier. Valid values: MX, CA, CL<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getCarriers(request)`

- **OnSuccess**: <code>[V3ShippingLabelsCarriersResponse](src/models/v3-shipping-labels-carriers-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.shipWithWalmart.getCarriers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsCarriersResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsCarriersResponse](src/models/v3-shipping-labels-carriers-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: ShipWithWalmart.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsPurchaseOrdersResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves all label details generated for a purchase order id.

<b style="color: green;">Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.getLabel({
    purchaseOrderId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3ShippingLabelsPurchaseOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getLabel({
  purchaseOrderId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsPurchaseOrdersResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>purchaseOrderId</code> | <code>string</code> | purchaseOrderId<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Case-sensitive market identifier. Valid values: MX, CA, CL<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getLabel(request)`

- **OnSuccess**: <code>[V3ShippingLabelsPurchaseOrdersResponse](src/models/v3-shipping-labels-purchase-orders-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.shipWithWalmart.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsPurchaseOrdersResponse, ApiError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsPurchaseOrdersResponse](src/models/v3-shipping-labels-purchase-orders-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabelByTrackingAndCarrier(request: ShipWithWalmart.GetLabelByTrackingAndCarrierRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the shipping label for a specific carrier and tracking number combination.
The response includes the tracking number and the label in the requested media type (PDF or PNG), based on the Accept header provided. <br><br> <b>Media Type Options:</b><br>•Accept: application/json,application/pdf → Returns label in PDF format.<br>•Accept: application/json,image/png → Returns label in PNG format. <br><br><b>Market and Shipment Program Applicability:</b><br>•<b>CL</b> : Applicable for <b>International</b> shipments only.<br>•<b>US, MX, CA</b>: Applicable for <b>Domestic and International</b> shipments across <b>all shipping programs</b> (including <b>Walmart Provided Shipping (WPS)</b> and <b>Ship with Walmart (SWW)</b>).

<b style="color: green;">Market availability: Global</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.shipWithWalmart.getLabelByTrackingAndCarrier({
    carrierShortName: "some example string",
    trackingNo: "some example string",
    accept: "application/pdf",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getLabelByTrackingAndCarrier({
  carrierShortName: "some example string",
  trackingNo: "some example string",
  accept: "application/pdf",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>carrierShortName</code> | <code>string</code> | carrierShortName<br><br><b style="color: green;">Market availability: Global</b> |
| <code>trackingNo</code> | <code>string</code> | trackingNo<br><br><b style="color: green;">Market availability: Global</b> |
| <code>accept</code> | <code>string</code> | Supported media types for US, CA, MX are:\napplication/pdf, image/png. For CL, the supported media type is\napplication/pdf, image/png, application/zpl.\n\n<b style=\"color: green;\">Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Walmart Service Name<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Case-sensitive market identifier. Valid values: MX, CA, CL<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getLabelByTrackingAndCarrier(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.shipWithWalmart.getLabelByTrackingAndCarrier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanFormByManifestId(request: ShipWithWalmart.GetScanFormByManifestIdRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves a scan form for a given manifest ID.

**Rate Limits:** This endpoint allows 100 requests per minute. Exceeding this limit returns a `429 Too Many Requests` response. See the [Rate Limiting guide](https://developer.walmart.com/us-marketplace/docs/rate-limiting) for full details. The response includes `x-current-token-count` (remaining requests in the current window) and `X-Next-Replenishment-Time` (when the token count next increases).

**Sandbox:** Use base URL `https://sandbox.walmartapis.com`. The sandbox returns a stub binary document for any valid sandbox `manifestId`. The `documentFormat` selection (PDF/ZPL/PNG) is honored in production; in sandbox, a PDF stub is always returned regardless of the format requested during scan form creation.

**Note:** This endpoint returns a binary document stream (application/octet-stream). Treat the response body as bytes and save it to a file. The underlying document format aligns with the scan form documentFormat selected during creation (for example, PDF, ZPL, PNG).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.getScanFormByManifestId({
    manifestId: "some example string",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/octet-stream",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getScanFormByManifestId({
  manifestId: "some example string",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/octet-stream",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>manifestId</code> | <code>string</code> | Manifest ID returned by the create scan form API. Use this value to download the scan form document. |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Case-sensitive market identifier. Valid values: US<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>accept</code> | <code>string</code> | Requested response media type. This endpoint returns a binary document stream (application/octet-stream). Treat the response body as bytes.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style="color: green;">Market availability: Global</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getScanFormByManifestId(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.shipWithWalmart.getScanFormByManifestId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ApiError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShippingEstimate(request: ShipWithWalmart.GetShippingEstimateRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingLabelsShippingEstimatesResponse, ShipWithWalmart.GetShippingEstimateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves shipping cost estimates for available shipping services based on address and package (example, customer address, packaged weight.)

<b style="color: green;">Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.getShippingEstimate({
    accept: "application/json",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket11.Mx,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      boxDimensions: {
        boxLength: 6,
        boxWidth: 6,
        boxHeight: 6,
        boxWeight: 0.8,
        boxDimensionUnit: BoxDimensionUnit.In,
        boxWeightUnit: BoxWeightUnit.Lb,
      },
      deliverByDate: "2023-06-07T23:00:00.611Z",
      shipByDate: "2023-06-05T08:00:00.611Z",
      fromAddress: {
        postalCode: "91776",
        countryCode: "US",
        addressLines: ["311 E VALLEY BLVD STE 112 PMB 271as"],
        city: "SAN GABRIEL1as",
        state: "CA",
      },
      toAddress: {
        postalCode: "94085",
        countryCode: "US",
        addressLines: ["748 N Mathilda Ave", "Room # 224"],
        city: "SUNNYVALE",
        state: "CA",
      },
      carriers: ["FEDEX"],
      packageType: "CUSTOM_PACKAGE",
      includeServicesNotMeetingDeliveryPromise: true,
      purchaseOrderId: "91088062299813853",
      boxItems: [{ sku: "sku-1NMeZnK1B1MNJdXde5771022", quantity: 1, lineNumber: "1" }],
    },
  });
  // TODO: Handle 'response' of type V3ShippingLabelsShippingEstimatesResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipWithWalmart.GetShippingEstimateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.getShippingEstimate({
  accept: "application/json",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket11.Mx,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    boxDimensions: {
      boxLength: 6,
      boxWidth: 6,
      boxHeight: 6,
      boxWeight: 0.8,
      boxDimensionUnit: BoxDimensionUnit.In,
      boxWeightUnit: BoxWeightUnit.Lb,
    },
    deliverByDate: "2023-06-07T23:00:00.611Z",
    shipByDate: "2023-06-05T08:00:00.611Z",
    fromAddress: {
      postalCode: "91776",
      countryCode: "US",
      addressLines: ["311 E VALLEY BLVD STE 112 PMB 271as"],
      city: "SAN GABRIEL1as",
      state: "CA",
    },
    toAddress: {
      postalCode: "94085",
      countryCode: "US",
      addressLines: ["748 N Mathilda Ave", "Room # 224"],
      city: "SUNNYVALE",
      state: "CA",
    },
    carriers: ["FEDEX"],
    packageType: "CUSTOM_PACKAGE",
    includeServicesNotMeetingDeliveryPromise: true,
    purchaseOrderId: "91088062299813853",
    boxItems: [{ sku: "sku-1NMeZnK1B1MNJdXde5771022", quantity: 1, lineNumber: "1" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingLabelsShippingEstimatesResponse
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
| <code>accept</code> | <code>string</code> | Response type. The order of media types in the Accept header determines the priority for response format selection.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID which identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. <br> Example: Walmart Marketplace<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket11](src/models/wm-market11.ts)</code> | Case-sensitive market identifier. Valid values: MX, CA, CL<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to track the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>body</code> | <code>[V3ShippingLabelsShippingEstimatesRequest](src/models/v3-shipping-labels-shipping-estimates-request.ts)</code> | Shipping fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.getShippingEstimate(request)`

- **OnSuccess**: <code>[V3ShippingLabelsShippingEstimatesResponse](src/models/v3-shipping-labels-shipping-estimates-response.ts)</code>
- **OnError**: throws <code>[ShipWithWalmart.GetShippingEstimateError](src/resources/ship-with-walmart.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipWithWalmart.getShippingEstimate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingLabelsShippingEstimatesResponse, ShipWithWalmart.GetShippingEstimateError&gt;</code>, with `result.value` of type <code>[V3ShippingLabelsShippingEstimatesResponse](src/models/v3-shipping-labels-shipping-estimates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scanForm(request: ShipWithWalmart.ScanFormRequest, options?: RequestOptions): ApiPromise&lt;V3ShippingScanFormResponse, ShipWithWalmart.ScanFormError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API generates a scan form using the provided tracking numbers. The scan form is a consolidated document that contains all the tracking numbers and shipping details for the packages being shipped out on a particular day. It is used by carriers to verify and process the shipments during pickup and delivery. Currently, only USPS supports scan forms.

**Idempotency:** `scanFormId` acts as a natural idempotency key — the client supplies it in the request body before the call. Submitting a second POST with a `scanFormId` that was already successfully processed returns `409 Conflict`; no duplicate scan form is created. On network failure or timeout, clients may safely retry using the same `scanFormId`. This guarantee is critical for EOD automation — a duplicate manifest can cause carrier processing errors and shipment delays.

**Rate Limits:** This endpoint allows 100 requests per minute. Exceeding this limit returns a `429 Too Many Requests` response. See the [Rate Limiting guide](https://developer.walmart.com/us-marketplace/docs/rate-limiting) for full details. The response includes `x-current-token-count` (remaining requests in the current window) and `X-Next-Replenishment-Time` (when the token count next increases).

**Sandbox:** Use base URL `https://sandbox.walmartapis.com`. The sandbox accepts test tracking numbers and returns a synthetic `manifestId` (e.g. `SANDBOX-12345`). Use that `manifestId` with the GET endpoint to retrieve the stub scan form document.

<b style="color: green;">Market availability: US only</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipWithWalmart.scanForm({
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    accept: "application/json",
    body: {
      scanFormId: "string",
      carrierName: "USPS",
      shipOnDate: "2025-08-23",
      fromAddress: {
        contactName: "John Doe",
        companyName: "Walmart",
        addressLine1: "1375 Crossman Ave",
        addressLine2: "string",
        city: "Sunnyvale",
        state: "CA",
        postalCode: "63116",
        country: "US",
        phone: "6172012456",
        email: "",
      },
      trackingNumbers: ["100044481029", "100044481030"],
      documentFormat: "PDF",
    },
  });
  // TODO: Handle 'response' of type V3ShippingScanFormResponse
} catch (err) {
  // TODO: Handle 'err' of type ShipWithWalmart.ScanFormError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipWithWalmart.scanForm({
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  accept: "application/json",
  body: {
    scanFormId: "string",
    carrierName: "USPS",
    shipOnDate: "2025-08-23",
    fromAddress: {
      contactName: "John Doe",
      companyName: "Walmart",
      addressLine1: "1375 Crossman Ave",
      addressLine2: "string",
      city: "Sunnyvale",
      state: "CA",
      postalCode: "63116",
      country: "US",
      phone: "6172012456",
      email: "",
    },
    trackingNumbers: ["100044481029", "100044481030"],
    documentFormat: "PDF",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ShippingScanFormResponse
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
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Case-sensitive market identifier. Valid values: US<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>accept</code> | <code>string</code> | Response media type. Only supported media type: application/json.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style="color: green;">Market availability: Global</b> |
| <code>body</code> | <code>[V3ShippingScanFormRequest](src/models/v3-shipping-scan-form-request.ts)</code> | Scan form request payload, including carrier, ship date, origin address, and tracking numbers to include in the manifest. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipWithWalmart.scanForm(request)`

- **OnSuccess**: <code>[V3ShippingScanFormResponse](src/models/v3-shipping-scan-form-response.ts)</code>
- **OnError**: throws <code>[ShipWithWalmart.ScanFormError](src/resources/ship-with-walmart.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipWithWalmart.scanForm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ShippingScanFormResponse, ShipWithWalmart.ScanFormError&gt;</code>, with `result.value` of type <code>[V3ShippingScanFormResponse](src/models/v3-shipping-scan-form-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SimplifiedShippingSettings

> Source: [SimplifiedShippingSettings](src/resources/simplified-shipping-settings.ts)

<details>
<summary><code>bulkMigrateOffersForSimplifiedShippingSettings(request: SimplifiedShippingSettings.BulkMigrateOffersForSimplifiedShippingSettingsRequest, options?: RequestOptions): ApiPromise&lt;FeedId1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is used to bulk migrate offers from manual templates to Simplified Shipping Settings and vice-versa. Make sure to create account level settings before proceeding with item migration to Simplified Shipping Settings.
<br><b style='color:green;'>Market availability: US</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simplifiedShippingSettings.bulkMigrateOffersForSimplifiedShippingSettings({
    feedType: "some example string",
    requestType: "some example string",
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      programActionFeedHeader: {
        version: "5.0.20241002-17_27_17-api",
        locale: "en",
        businessUnit: "WALMART_US",
      },
      programAction: [{ programs: {}, itemIdentifiers: { sku: "8922gfgf" } }],
    },
  });
  // TODO: Handle 'response' of type FeedId1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simplifiedShippingSettings.bulkMigrateOffersForSimplifiedShippingSettings({
  feedType: "some example string",
  requestType: "some example string",
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    programActionFeedHeader: {
      version: "5.0.20241002-17_27_17-api",
      locale: "en",
      businessUnit: "WALMART_US",
    },
    programAction: [{ programs: {}, itemIdentifiers: { sku: "8922gfgf" } }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedId1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feedType?</code> | <code>string</code> | The type of feed, which specifies the nature of the update.<br><br><b style='color:green;'>Market availability: US</span></b><br>**Default**: "PROGRAM_ACTIONS" |
| <code>requestType?</code> | <code>string</code> | Specifies the type of request being made. <br><br><b style='color:green;'>Market availability: US</span></b><br>**Default**: "SHIPPING_CONFIG" |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>body</code> | <code>[V3FeedsRequest1](src/models/v3-feeds-request1.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simplifiedShippingSettings.bulkMigrateOffersForSimplifiedShippingSettings(request)`

- **OnSuccess**: <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simplifiedShippingSettings.bulkMigrateOffersForSimplifiedShippingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedId1, ApiError&gt;</code>, with `result.value` of type <code>[FeedId1](src/models/feed-id1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSimplifiedShippingSettings(request: SimplifiedShippingSettings.CreateSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise&lt;V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is used to update the account-level configuration. The carrier configurations created using this API will be applied across all Fulfillment Centers (FCs) unless they are overridden using the FC Configuration API..
<br><b style='color:green;'>Market availability: US</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simplifiedShippingSettings.createSimplifiedShippingSettings({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      simplifiedShippingSettings: {
        accountConfigs: {
          shippingPriority: ShippingPriority7.Fastest,
          migrateEligibleOffers: false,
          carrierConfigs: [{}, {}],
        },
      },
    },
  });
  // TODO: Handle 'response' of type V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simplifiedShippingSettings.createSimplifiedShippingSettings({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    simplifiedShippingSettings: {
      accountConfigs: {
        shippingPriority: ShippingPriority7.Fastest,
        migrateEligibleOffers: false,
        carrierConfigs: [{}, {}],
      },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>body</code> | <code>[V3SettingsShippingSimplifiedshippingsettingsAccountRequest1](src/models/v3-settings-shipping-simplifiedshippingsettings-account-request1.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simplifiedShippingSettings.createSimplifiedShippingSettings(request)`

- **OnSuccess**: <code>[V3SettingsShippingSimplifiedshippingsettingsAccountResponse1](src/models/v3-settings-shipping-simplifiedshippingsettings-account-response1.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simplifiedShippingSettings.createSimplifiedShippingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SettingsShippingSimplifiedshippingsettingsAccountResponse1[], ApiError&gt;</code>, with `result.value` of type <code>[V3SettingsShippingSimplifiedshippingsettingsAccountResponse1](src/models/v3-settings-shipping-simplifiedshippingsettings-account-response1.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSimplifiedShippingSettings(request: SimplifiedShippingSettings.GetSimplifiedShippingSettingsRequest, options?: RequestOptions): ApiPromise&lt;V3SettingsShippingSimplifiedshippingsettingsResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API helps seller to fetch the Simplified Shipping Settings for a seller account and FC-level configurations.
<br><b style='color:green;'>Market availability: Global</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simplifiedShippingSettings.getSimplifiedShippingSettings({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
  });
  // TODO: Handle 'response' of type V3SettingsShippingSimplifiedshippingsettingsResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simplifiedShippingSettings.getSimplifiedShippingSettings({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SettingsShippingSimplifiedshippingsettingsResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding..<br><br><b style='color:green;'>Market availability: Global</span></b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simplifiedShippingSettings.getSimplifiedShippingSettings(request)`

- **OnSuccess**: <code>[V3SettingsShippingSimplifiedshippingsettingsResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simplifiedShippingSettings.getSimplifiedShippingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SettingsShippingSimplifiedshippingsettingsResponse[], ApiError&gt;</code>, with `result.value` of type <code>[V3SettingsShippingSimplifiedshippingsettingsResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFcLevelSimplifiedShippingSettings(request: SimplifiedShippingSettings.UpdateFcLevelSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise&lt;V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API can be used for overriding the configurations at one or more Fulfillment Centers.
<br><b style='color:green;'>Market availability: US</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simplifiedShippingSettings.updateFcLevelSimplifiedShippingSettings({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: {
      simplifiedShippingSettings: {
        shipNodeConfigs: [
          { shipNodes: ["1234567616356"], isOverridden: false },
          { shipNodes: ["1234567616357"], isOverridden: true, carrierConfigs: [{}] },
        ],
      },
    },
  });
  // TODO: Handle 'response' of type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simplifiedShippingSettings.updateFcLevelSimplifiedShippingSettings({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: {
    simplifiedShippingSettings: {
      shipNodeConfigs: [
        { shipNodes: ["1234567616356"], isOverridden: false },
        { shipNodes: ["1234567616357"], isOverridden: true, carrierConfigs: [{}] },
      ],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding..<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>body</code> | <code>[V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest](src/models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-request.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simplifiedShippingSettings.updateFcLevelSimplifiedShippingSettings(request)`

- **OnSuccess**: <code>[V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simplifiedShippingSettings.updateFcLevelSimplifiedShippingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse[], ApiError&gt;</code>, with `result.value` of type <code>[V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-fulfillmentcenter-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSimplifiedShippingSettings(request: SimplifiedShippingSettings.UpdateSimplifiedShippingSettingsRequestParams, options?: RequestOptions): ApiPromise&lt;V3SettingsShippingSimplifiedshippingsettingsAccountResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API is used to update the account-level configuration. The carrier configurations updated using this API will be applied across all Fulfillment Centers (FCs) unless they are overridden using the FC Configuration API.

<br><b style='color:green;'>Market availability: US</span></b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simplifiedShippingSettings.updateSimplifiedShippingSettings({
    wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Service Name",
    wmMarket: WmMarket1.Us,
    wmGlobalVersion: WmGlobalVersion._31,
    body: { simplifiedShippingSettings: { accountConfigs: { carrierConfigs: [{}, {}] } } },
  });
  // TODO: Handle 'response' of type V3SettingsShippingSimplifiedshippingsettingsAccountResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simplifiedShippingSettings.updateSimplifiedShippingSettings({
  wmSecAccessToken: "eyJraWQiOiIzZjVhYTFmNS1hYWE5LTQzM.....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Service Name",
  wmMarket: WmMarket1.Us,
  wmGlobalVersion: WmGlobalVersion._31,
  body: { simplifiedShippingSettings: { accountConfigs: { carrierConfigs: [{}, {}] } } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SettingsShippingSimplifiedshippingsettingsAccountResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called. <br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmMarket</code> | <code>[WmMarket1](src/models/wm-market1.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmGlobalVersion</code> | <code>[WmGlobalVersion](src/models/wm-global-version.ts)</code> | Indicates the global version of the API. The value must be set to 3.1.<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding..<br><br><b style='color:green;'>Market availability: Global</span></b> |
| <code>body</code> | <code>[V3SettingsShippingSimplifiedshippingsettingsAccountRequest](src/models/v3-settings-shipping-simplifiedshippingsettings-account-request.ts)</code> | Request fields |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.simplifiedShippingSettings.updateSimplifiedShippingSettings(request)`

- **OnSuccess**: <code>[V3SettingsShippingSimplifiedshippingsettingsAccountResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-account-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.simplifiedShippingSettings.updateSimplifiedShippingSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SettingsShippingSimplifiedshippingsettingsAccountResponse[], ApiError&gt;</code>, with `result.value` of type <code>[V3SettingsShippingSimplifiedshippingsettingsAccountResponse](src/models/v3-settings-shipping-simplifiedshippingsettings-account-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WalmartSellerFulfilled

> Source: [WalmartSellerFulfilled](src/resources/walmart-seller-fulfilled.ts)

<details>
<summary><code>walmartPlusEnrollment(request: WalmartSellerFulfilled.WalmartPlusEnrollmentRequest, options?: RequestOptions): ApiPromise&lt;V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse, WalmartSellerFulfilled.WalmartPlusEnrollmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API endpoint allows you to efficiently manage item participation in the Walmart+ program. Use it to enroll eligible items in Walmart+ or to unenroll items that are currently part of the program.<br><b style='color:green;'>Market availability: US</b> 



<b>Download and review the <a href="/file/mp/us/PROGRAM_ACTIONS_5.0.20250617-00_03_34_US_WalmartPlusEnrollment.xlsx">Excel template sample </a> and the <a href="/file/mp/us/bulk-enroll-requestBody-template.json">JSON body sample</a> to ensure proper formatting of the updated file before uploading it for processing.</b>

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walmartSellerFulfilled.walmartPlusEnrollment({
    feedType: FeedType3.ProgramActions,
    requestType: RequestType.WalmartPlusSff,
    wmSecAccessToken:
      "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
    wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
    wmSvcName: "Walmart Marketplace",
    wmMarket: WmMarket.Us,
    fileName: new Uint8Array(),
  });
  // TODO: Handle 'response' of type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse
} catch (err) {
  // TODO: Handle 'err' of type WalmartSellerFulfilled.WalmartPlusEnrollmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walmartSellerFulfilled.walmartPlusEnrollment({
  feedType: FeedType3.ProgramActions,
  requestType: RequestType.WalmartPlusSff,
  wmSecAccessToken:
    "eyJraWQiOiIxNWNhNGIyYi0yODVjLTQ0ZDUtYmExNC05ZDk1NTlkZmUwNjgiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0....",
  wmQosCorrelationId: "b3261d2d-028a-4ef7-8602-633c23200af6",
  wmSvcName: "Walmart Marketplace",
  wmMarket: WmMarket.Us,
  fileName: new Uint8Array(),
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse
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
| <code>feedType</code> | <code>[FeedType3](src/models/feed-type3.ts)</code> | The type of feed, which specifies the nature of the update.<br><b style='color:green;'>Market availability: US</b> |
| <code>requestType</code> | <code>[RequestType](src/models/request-type.ts)</code> | Specifies the type of request for the Walmart+ SFF (Seller-Fulfilled) program.<br><b style='color:green;'>Market availability: US</b> |
| <code>wmSecAccessToken</code> | <code>string</code> | Access token obtained from the Token API. This is required for authenticating requests to Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmQosCorrelationId</code> | <code>string</code> | A unique ID that identifies each API call and is used to track and debug issues. Use a randomly generated GUID for this ID.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmSvcName</code> | <code>string</code> | Specifies the name of the Walmart service being called.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmMarket</code> | <code>[WmMarket](src/models/wm-market.ts)</code> | Identifies the Walmart Marketplace region for the request. If not specified, US is used by default.<br><b style='color:green;'>Market availability: Global</b> |
| <code>wmConsumerChannelType?</code> | <code>string</code> | A unique ID to identify the consumer request by channel. Use the Consumer Channel Type received during onboarding.<br><b style='color:green;'>Market availability: Global</b> |
| <code>fileName</code> | <code>FileInput</code> | Upload an Excel file or a JSON file containing the data for Walmart+ enrollment or unenrollment.<br><b style='color:green;'>Market availability: US</b> |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walmartSellerFulfilled.walmartPlusEnrollment(request)`

- **OnSuccess**: <code>[V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse](src/models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff-response.ts)</code>
- **OnError**: throws <code>[WalmartSellerFulfilled.WalmartPlusEnrollmentError](src/resources/walmart-seller-fulfilled.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walmartSellerFulfilled.walmartPlusEnrollment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse, WalmartSellerFulfilled.WalmartPlusEnrollmentError&gt;</code>, with `result.value` of type <code>[V3FeedsFeedTypeProgramActionsRequestTypeWalmartPlusSffResponse](src/models/v3-feeds-feed-type-program-actions-request-type-walmart-plus-sff-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[WalmartApIsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

