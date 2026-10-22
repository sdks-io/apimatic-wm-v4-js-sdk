<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReturnsRefund — operations

Accessor: `client.returnsRefund` · Source: `src/resources/returns-refund.ts` · 3 operations · Request and error types: namespace `ReturnsRefund`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getReturns

- **Signature**: `getReturns(request: ReturnsRefund.GetReturnsRequest, options?: RequestOptions): ApiPromise<ReturnOrderResponse, ReturnsRefund.GetReturnsError>`
- **Wire**: `GET /v3/returns`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReturnOrderResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReturnsRefund.GetReturnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse3"` [400] `ErrorResponse3` · `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"errorResponses"` [500] `ErrorResponses` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReturnsRefund.GetReturnsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `queryParams` | `query` | `Query Params` | `QueryParams` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryParams` | `queryParamsSchema` | `src/models/query-params.ts` |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `ReturnOrderResponse` | `returnOrderResponseSchema` | `src/models/return-order-response.ts` |
| `ErrorResponse3` | `errorResponse3Schema` | `src/models/error-response3.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |
| `ErrorResponses` | `errorResponsesSchema` | `src/models/error-responses.ts` |

### refundRequest

- **Signature**: `refundRequest(request: ReturnsRefund.RefundRequestRequest, options?: RequestOptions): ApiPromise<Request, ReturnsRefund.RefundRequestError>`
- **Wire**: `POST /v3/returns/{returnOrderId}/refund`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Request`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReturnsRefund.RefundRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse3"` [400] `ErrorResponse3` · `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"errorResponses"` [500] `ErrorResponses` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReturnsRefund.RefundRequestRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `returnOrderId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket3` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `RefundRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket3` | `wmMarket3Schema` | `src/models/wm-market3.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `RefundRequest` | `refundRequestSchema` | `src/models/refund-request.ts` |
| `Request` | `requestSchema` | `src/models/request.ts` |
| `ErrorResponse3` | `errorResponse3Schema` | `src/models/error-response3.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |
| `ErrorResponses` | `errorResponsesSchema` | `src/models/error-responses.ts` |

### returnOrderCursor

- **Signature**: `returnOrderCursor(request: ReturnsRefund.ReturnOrderCursorRequest, options?: RequestOptions): ApiPromise<ReturnOrdersResponses, ReturnsRefund.ReturnOrderCursorError>`
- **Wire**: `GET /v3/returns/cursor`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReturnOrdersResponses`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ReturnsRefund.ReturnOrderCursorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse3"` [400] `ErrorResponse3` · `"unauthorized1"` [401] `Unauthorized1` · `"forbidden1"` [403] `Forbidden1` · `"tooManyRequests1"` [429] `TooManyRequests1` · `"errorResponses"` [500] `ErrorResponses` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReturnsRefund.ReturnOrderCursorRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `queryParams` | `query` | `Query Params` | `QueryParamsMx` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket21` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryParamsMx` | `queryParamsMxSchema` | `src/models/query-params-mx.ts` |
| `WmMarket21` | `wmMarket21Schema` | `src/models/wm-market21.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `ReturnOrdersResponses` | `returnOrdersResponsesSchema` | `src/models/return-orders-responses.ts` |
| `ErrorResponse3` | `errorResponse3Schema` | `src/models/error-response3.ts` |
| `Unauthorized1` | `unauthorized1Schema` | `src/models/unauthorized1.ts` |
| `Forbidden1` | `forbidden1Schema` | `src/models/forbidden1.ts` |
| `TooManyRequests1` | `tooManyRequests1Schema` | `src/models/too-many-requests1.ts` |
| `ErrorResponses` | `errorResponsesSchema` | `src/models/error-responses.ts` |

