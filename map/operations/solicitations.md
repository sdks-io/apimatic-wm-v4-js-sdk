<!-- Generated file — do not edit; regenerated with the SDK. -->

# Solicitations — operations

Accessor: `client.solicitations` · Source: `src/resources/solicitations.ts` · 2 operations · Request and error types: namespace `Solicitations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProductReviewAndSellerFeedbackSolicitation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createProductReviewAndSellerFeedbackSolicitation(request: Solicitations.CreateProductReviewAndSellerFeedbackSolicitationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError>`
- **Wire**: `POST /solicitations/v4/orders/{sp-apiOrderId}/solicitations/productReviewAndSellerFeedback`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Solicitations.CreateProductReviewAndSellerFeedbackSolicitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Solicitations.CreateProductReviewAndSellerFeedbackSolicitationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getSolicitationActionsForOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSolicitationActionsForOrder(request: Solicitations.GetSolicitationActionsForOrderRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Solicitations.GetSolicitationActionsForOrderError>`
- **Wire**: `GET /solicitations/v4/orders/{sp-apiOrderId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Solicitations.GetSolicitationActionsForOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Solicitations.GetSolicitationActionsForOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

