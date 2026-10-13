<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListingsRestrictions — operations

Accessor: `client.listingsRestrictions` · Source: `src/resources/listings-restrictions.ts` · 1 operation · Request and error types: namespace `ListingsRestrictions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getListingsRestrictions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getListingsRestrictions(request: ListingsRestrictions.GetListingsRestrictionsRequest, options?: RequestOptions): ApiPromise<RestrictionList, ListingsRestrictions.GetListingsRestrictionsError>`
- **Wire**: `GET /listings/v4/restrictions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RestrictionList`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ListingsRestrictions.GetListingsRestrictionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ListingsRestrictions.GetListingsRestrictionsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `asin` | `query` | `string` | yes | — |
| `conditionType` | `query` | `ConditionType1` | yes | — |
| `sellerId` | `query` | `string` | yes | — |
| `marketplaceIds` | `query` | `string[]` | yes | — |
| `reasonLocale` | `query` | `string` | no | `"en_US"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConditionType1` | `conditionType1Schema` | `src/models/condition-type1.ts` |
| `RestrictionList` | `restrictionListSchema` | `src/models/restriction-list.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

