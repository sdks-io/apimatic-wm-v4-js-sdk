<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sellers — operations

Accessor: `client.sellers` · Source: `src/resources/sellers.ts` · 2 operations · Request and error types: namespace `Sellers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccount

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccount(options?: RequestOptions): ApiPromise<SellerAccount, Sellers.GetAccountError>`
- **Wire**: `GET /sellers/v4/account`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SellerAccount`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Sellers.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SellerAccount` | `sellerAccountSchema` | `src/models/seller-account.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getMarketplaceParticipations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMarketplaceParticipations(options?: RequestOptions): ApiPromise<GetMarketplaceParticipationsResponse, Sellers.GetMarketplaceParticipationsError>`
- **Wire**: `GET /sellers/v4/marketplaceParticipations`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMarketplaceParticipationsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Sellers.GetMarketplaceParticipationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMarketplaceParticipationsResponse` | `getMarketplaceParticipationsResponseSchema` | `src/models/get-marketplace-participations-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

