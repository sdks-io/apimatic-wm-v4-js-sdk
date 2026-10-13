<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settlement — operations

Accessor: `client.settlement` · Source: `src/resources/settlement.ts` · 3 operations · Request and error types: namespace `Settlement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listSettlementDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSettlementDetails(request: Settlement.ListSettlementDetailsRequest, options?: RequestOptions): ApiPromise<SettlementDetailsResponse, Settlement.ListSettlementDetailsError>`
- **Wire**: `GET /disbursements/v4/payment/settlementDetails`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementDetailsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Settlement.ListSettlementDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [403] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settlement.ListSettlementDetailsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `partnerId` | `query` | `string` | yes | — |
| `reportDate` | `query` | `string` | yes | — |
| `pageSize` | `query` | `number` | no | `10` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettlementDetailsResponse` | `settlementDetailsResponseSchema` | `src/models/settlement-details-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listSettlementPeriods

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSettlementPeriods(request: Settlement.ListSettlementPeriodsRequest, options?: RequestOptions): ApiPromise<SettlementPeriodsResponse, Settlement.ListSettlementPeriodsError>`
- **Wire**: `GET /disbursements/v4/payment/settlementPeriods`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SettlementPeriodsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Settlement.ListSettlementPeriodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [403] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settlement.ListSettlementPeriodsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `10` |
| `nextToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SettlementPeriodsResponse` | `settlementPeriodsResponseSchema` | `src/models/settlement-periods-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### searchTransactions

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `searchTransactions(request: Settlement.SearchTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionSearchResponse, Settlement.SearchTransactionsError>`
- **Wire**: `GET /disbursements/v4/payment/search/transactions`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionSearchResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Settlement.SearchTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [401] `ErrorList` · `"errorList3"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Settlement.SearchTransactionsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `10` |
| `nextToken` | `query` | `string` | no | — |
| `postedAfter` | `query` | `Date` (date-time) | no | — |
| `postedBefore` | `query` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionSearchResponse` | `transactionSearchResponseSchema` | `src/models/transaction-search-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

