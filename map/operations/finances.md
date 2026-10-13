<!-- Generated file — do not edit; regenerated with the SDK. -->

# Finances — operations

Accessor: `client.finances` · Source: `src/resources/finances.ts` · 4 operations · Request and error types: namespace `Finances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listFinancialEventGroups

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFinancialEventGroups(request: Finances.ListFinancialEventGroupsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventGroupsError>`
- **Wire**: `GET /finances/v4/financialEventGroups`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Finances.ListFinancialEventGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finances.ListFinancialEventGroupsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `maxResultsPerPage` | `query` | `MaxResultsPerPage` | `number` | no |
| `financialEventGroupStartedBefore` | `query` | `FinancialEventGroupStartedBefore` | `Date` (date-time) | no |
| `financialEventGroupStartedAfter` | `query` | `FinancialEventGroupStartedAfter` | `Date` (date-time) | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listFinancialEvents

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFinancialEvents(request: Finances.ListFinancialEventsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsError>`
- **Wire**: `GET /finances/v4/financialEvents`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Finances.ListFinancialEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finances.ListFinancialEventsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `maxResultsPerPage` | `query` | `MaxResultsPerPage` | `number` | no |
| `postedAfter` | `query` | `PostedAfter` | `Date` (date-time) | no |
| `postedBefore` | `query` | `PostedBefore` | `Date` (date-time) | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listFinancialEventsByGroupId

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFinancialEventsByGroupId(request: Finances.ListFinancialEventsByGroupIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsByGroupIdError>`
- **Wire**: `GET /finances/v4/financialEventGroups/{eventGroupId}/financialEvents`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Finances.ListFinancialEventsByGroupIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finances.ListFinancialEventsByGroupIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `eventGroupId` | `path` | — | `string` | yes |
| `maxResultsPerPage` | `query` | `MaxResultsPerPage` | `number` | no |
| `postedAfter` | `query` | `PostedAfter` | `Date` (date-time) | no |
| `postedBefore` | `query` | `PostedBefore` | `Date` (date-time) | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### listFinancialEventsByOrderId

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFinancialEventsByOrderId(request: Finances.ListFinancialEventsByOrderIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Finances.ListFinancialEventsByOrderIdError>`
- **Wire**: `GET /finances/v4/orders/{orderId}/financialEvents`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Finances.ListFinancialEventsByOrderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finances.ListFinancialEventsByOrderIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | — | `string` | yes |
| `maxResultsPerPage` | `query` | `MaxResultsPerPage` | `number` | no |
| `nextToken` | `query` | `NextToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

