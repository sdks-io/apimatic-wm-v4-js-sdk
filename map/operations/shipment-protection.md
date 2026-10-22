<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShipmentProtection — operations

Accessor: `client.shipmentProtection` · Source: `src/resources/shipment-protection.ts` · 6 operations · Request and error types: namespace `ShipmentProtection`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadClaimDocuments

- **Signature**: `downloadClaimDocuments(request: ShipmentProtection.DownloadClaimDocumentsRequest, options?: RequestOptions): ApiPromise<BinaryContent, ShipmentProtection.DownloadClaimDocumentsError>`
- **Wire**: `POST /v3/claims/shipment-protection/claim/{claimNumber}/documents`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.DownloadClaimDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtectionClaimDocuments400Error1"` [400] `V3ClaimsShipmentProtectionClaimDocuments400Error1` · `"v3ClaimsShipmentProtectionClaimDocuments404Error1"` [404] `V3ClaimsShipmentProtectionClaimDocuments404Error1` · `"v3ClaimsShipmentProtectionClaimDocuments500Error1"` [500] `V3ClaimsShipmentProtectionClaimDocuments500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.DownloadClaimDocumentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `claimNumber` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ClaimsShipmentProtectionClaimDocumentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ClaimsShipmentProtectionClaimDocumentsRequest` | `v3ClaimsShipmentProtectionClaimDocumentsRequestSchema` | `src/models/v3-claims-shipment-protection-claim-documents-request.ts` |
| `V3ClaimsShipmentProtectionClaimDocuments400Error1` | `v3ClaimsShipmentProtectionClaimDocuments400Error1Schema` | `src/models/v3-claims-shipment-protection-claim-documents400-error1.ts` |
| `V3ClaimsShipmentProtectionClaimDocuments404Error1` | `v3ClaimsShipmentProtectionClaimDocuments404Error1Schema` | `src/models/v3-claims-shipment-protection-claim-documents404-error1.ts` |
| `V3ClaimsShipmentProtectionClaimDocuments500Error1` | `v3ClaimsShipmentProtectionClaimDocuments500Error1Schema` | `src/models/v3-claims-shipment-protection-claim-documents500-error1.ts` |

### getClaimDetails

- **Signature**: `getClaimDetails(request: ShipmentProtection.GetClaimDetailsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ShipmentProtection.GetClaimDetailsError>`
- **Wire**: `GET /v3/claims/shipment-protection/claim/{claimNumber}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.GetClaimDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtectionClaim400Error1"` [400] `V3ClaimsShipmentProtectionClaim400Error1` · `"v3ClaimsShipmentProtectionClaim404Error1"` [404] `V3ClaimsShipmentProtectionClaim404Error1` · `"v3ClaimsShipmentProtectionClaim500Error1"` [500] `V3ClaimsShipmentProtectionClaim500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.GetClaimDetailsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `claimNumber` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ClaimsShipmentProtectionClaim400Error1` | `v3ClaimsShipmentProtectionClaim400Error1Schema` | `src/models/v3-claims-shipment-protection-claim400-error1.ts` |
| `V3ClaimsShipmentProtectionClaim404Error1` | `v3ClaimsShipmentProtectionClaim404Error1Schema` | `src/models/v3-claims-shipment-protection-claim404-error1.ts` |
| `V3ClaimsShipmentProtectionClaim500Error1` | `v3ClaimsShipmentProtectionClaim500Error1Schema` | `src/models/v3-claims-shipment-protection-claim500-error1.ts` |

### getClaimHistory

- **Signature**: `getClaimHistory(request: ShipmentProtection.GetClaimHistoryRequest, options?: RequestOptions): ApiPromise<V3ClaimsShipmentProtectionClaimHistoryResponse, ShipmentProtection.GetClaimHistoryError>`
- **Wire**: `GET /v3/claims/shipment-protection/claim/{claimNumber}/history`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ClaimsShipmentProtectionClaimHistoryResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.GetClaimHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtectionClaimHistory400Error1"` [400] `V3ClaimsShipmentProtectionClaimHistory400Error1` · `"v3ClaimsShipmentProtectionClaimHistory404Error1"` [404] `V3ClaimsShipmentProtectionClaimHistory404Error1` · `"v3ClaimsShipmentProtectionClaimHistory500Error1"` [500] `V3ClaimsShipmentProtectionClaimHistory500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.GetClaimHistoryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `claimNumber` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ClaimsShipmentProtectionClaimHistoryResponse` | `v3ClaimsShipmentProtectionClaimHistoryResponseSchema` | `src/models/v3-claims-shipment-protection-claim-history-response.ts` |
| `V3ClaimsShipmentProtectionClaimHistory400Error1` | `v3ClaimsShipmentProtectionClaimHistory400Error1Schema` | `src/models/v3-claims-shipment-protection-claim-history400-error1.ts` |
| `V3ClaimsShipmentProtectionClaimHistory404Error1` | `v3ClaimsShipmentProtectionClaimHistory404Error1Schema` | `src/models/v3-claims-shipment-protection-claim-history404-error1.ts` |
| `V3ClaimsShipmentProtectionClaimHistory500Error1` | `v3ClaimsShipmentProtectionClaimHistory500Error1Schema` | `src/models/v3-claims-shipment-protection-claim-history500-error1.ts` |

### listClaims

- **Signature**: `listClaims(request: ShipmentProtection.ListClaimsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ShipmentProtection.ListClaimsError>`
- **Wire**: `GET /v3/claims/shipment-protection`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.ListClaimsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtection400Error1"` [400] `V3ClaimsShipmentProtection400Error1` · `"v3ClaimsShipmentProtection401Error1"` [401] `V3ClaimsShipmentProtection401Error1` · `"v3ClaimsShipmentProtection500Error1"` [500] `V3ClaimsShipmentProtection500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.ListClaimsRequest` (14):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `25` |
| `offset` | `query` | — | `number` | no | `0` |
| `claimsGroup` | `query` | — | `ClaimsGroup` | no | — |
| `claimNumber` | `query` | — | `string` | no | — |
| `purchaseOrderId` | `query` | — | `string` | no | — |
| `trackingNo` | `query` | — | `string` | no | — |
| `claimTypes` | `query` | — | `string` | no | — |
| `claimStatuses` | `query` | — | `string` | no | — |
| `sortBy` | `query` | — | `SortBy` | no | — |
| `sortOrder` | `query` | — | `Order` | no | — |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes | — |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes | — |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes | — |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClaimsGroup` | `claimsGroupSchema` | `src/models/claims-group.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `V3ClaimsShipmentProtection400Error1` | `v3ClaimsShipmentProtection400Error1Schema` | `src/models/v3-claims-shipment-protection400-error1.ts` |
| `V3ClaimsShipmentProtection401Error1` | `v3ClaimsShipmentProtection401Error1Schema` | `src/models/v3-claims-shipment-protection401-error1.ts` |
| `V3ClaimsShipmentProtection500Error1` | `v3ClaimsShipmentProtection500Error1Schema` | `src/models/v3-claims-shipment-protection500-error1.ts` |

### submitAdditionalInfo

- **Signature**: `submitAdditionalInfo(request: ShipmentProtection.SubmitAdditionalInfoRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ShipmentProtection.SubmitAdditionalInfoError>`
- **Wire**: `PATCH /v3/claims/shipment-protection/claim/{claimNumber}`
- **Auth**: none — public; no credential is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.SubmitAdditionalInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtectionClaim400Error1"` [400] `V3ClaimsShipmentProtectionClaim400Error1` · `"v3ClaimsShipmentProtectionClaim404Error1"` [404] `V3ClaimsShipmentProtectionClaim404Error1` · `"v3ClaimsShipmentProtectionClaim500Error1"` [500] `V3ClaimsShipmentProtectionClaim500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.SubmitAdditionalInfoRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `claimNumber` | `path` | — | `string` | yes |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `files` | `form` | — | `FileInput` | yes |
| `documentTypes` | `form` | — | `DocumentType1[]` | yes |
| `notes` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentType1` | `documentType1Schema` | `src/models/document-type1.ts` |
| `V3ClaimsShipmentProtectionClaim400Error1` | `v3ClaimsShipmentProtectionClaim400Error1Schema` | `src/models/v3-claims-shipment-protection-claim400-error1.ts` |
| `V3ClaimsShipmentProtectionClaim404Error1` | `v3ClaimsShipmentProtectionClaim404Error1Schema` | `src/models/v3-claims-shipment-protection-claim404-error1.ts` |
| `V3ClaimsShipmentProtectionClaim500Error1` | `v3ClaimsShipmentProtectionClaim500Error1Schema` | `src/models/v3-claims-shipment-protection-claim500-error1.ts` |

### submitClaim

- **Signature**: `submitClaim(request: ShipmentProtection.SubmitClaimRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ShipmentProtection.SubmitClaimError>`
- **Wire**: `POST /v3/claims/shipment-protection/claim`
- **Auth**: none — public; no credential is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipmentProtection.SubmitClaimError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ClaimsShipmentProtectionClaim400Error1"` [400] `V3ClaimsShipmentProtectionClaim400Error1` · `"v3ClaimsShipmentProtectionClaim401Error1"` [401] `V3ClaimsShipmentProtectionClaim401Error1` · `"v3ClaimsShipmentProtectionClaim500Error1"` [500] `V3ClaimsShipmentProtectionClaim500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipmentProtection.SubmitClaimRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmSecAccessToken` | `header` | `WM_SEC.ACCESS_TOKEN` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `files` | `form` | — | `FileInput` | yes |
| `documentTypes` | `form` | — | `DocumentType[]` | yes |
| `payload` | `form` | — | `Payload` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentType` | `documentTypeSchema` | `src/models/document-type.ts` |
| `Payload` | `payloadSchema` | `src/models/payload.ts` |
| `V3ClaimsShipmentProtectionClaim400Error1` | `v3ClaimsShipmentProtectionClaim400Error1Schema` | `src/models/v3-claims-shipment-protection-claim400-error1.ts` |
| `V3ClaimsShipmentProtectionClaim401Error1` | `v3ClaimsShipmentProtectionClaim401Error1Schema` | `src/models/v3-claims-shipment-protection-claim401-error1.ts` |
| `V3ClaimsShipmentProtectionClaim500Error1` | `v3ClaimsShipmentProtectionClaim500Error1Schema` | `src/models/v3-claims-shipment-protection-claim500-error1.ts` |

