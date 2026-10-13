<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sales — operations

Accessor: `client.sales` · Source: `src/resources/sales.ts` · 1 operation · Request and error types: namespace `Sales`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrderMetrics

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getOrderMetrics(request: Sales.GetOrderMetricsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Sales.GetOrderMetricsError>`
- **Wire**: `GET /sales/v4/orderMetrics`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Sales.GetOrderMetricsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sales.GetOrderMetricsRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `interval` | `query` | — | `string` | yes |
| `granularity` | `query` | — | `Granularity` | yes |
| `granularityTimeZone` | `query` | — | `string` | no |
| `buyerType` | `query` | — | `BuyerType` | no |
| `fulfillmentNetwork` | `query` | — | `string` | no |
| `firstDayOfWeek` | `query` | — | `FirstDayOfWeek` | no |
| `asin` | `query` | — | `string` | no |
| `sku` | `query` | — | `string` | no |
| `spApiProgram` | `query` | `sp-apiProgram` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Granularity` | `granularitySchema` | `src/models/granularity.ts` |
| `BuyerType` | `buyerTypeSchema` | `src/models/buyer-type.ts` |
| `FirstDayOfWeek` | `firstDayOfWeekSchema` | `src/models/first-day-of-week.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

