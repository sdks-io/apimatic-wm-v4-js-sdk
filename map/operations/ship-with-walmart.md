<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShipWithWalmart — operations

Accessor: `client.shipWithWalmart` · Source: `src/resources/ship-with-walmart.ts` · 10 operations · Request and error types: namespace `ShipWithWalmart`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLabel

- **Signature**: `createLabel(request: ShipWithWalmart.CreateLabelRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsResponse, ShipWithWalmart.CreateLabelError>`
- **Wire**: `POST /v3/shipping/labels`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ShippingLabelsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipWithWalmart.CreateLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3ShippingLabels500Error1"` [500] `V3ShippingLabels500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipWithWalmart.CreateLabelRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket1` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ShippingLabelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket1` | `wmMarket1Schema` | `src/models/wm-market1.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsRequest` | `v3ShippingLabelsRequestSchema` | `src/models/v3-shipping-labels-request.ts` |
| `V3ShippingLabelsResponse` | `v3ShippingLabelsResponseSchema` | `src/models/v3-shipping-labels-response.ts` |
| `V3ShippingLabels500Error1` | `v3ShippingLabels500Error1Schema` | `src/models/v3-shipping-labels500-error1.ts` |

### createLabelMps

- **Signature**: `createLabelMps(request: ShipWithWalmart.CreateLabelMpsRequest, options?: RequestOptions): ApiPromise<V3ShippingMultiPackageLabelsResponse, ShipWithWalmart.CreateLabelMpsError>`
- **Wire**: `POST /v3/shipping/multi-package/labels`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ShippingMultiPackageLabelsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipWithWalmart.CreateLabelMpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error5[]` · `"v3ShippingMultiPackageLabels500Error1"` [500] `V3ShippingMultiPackageLabels500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipWithWalmart.CreateLabelMpsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ShippingMultiPackageLabelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingMultiPackageLabelsRequest` | `v3ShippingMultiPackageLabelsRequestSchema` | `src/models/v3-shipping-multi-package-labels-request.ts` |
| `V3ShippingMultiPackageLabelsResponse` | `v3ShippingMultiPackageLabelsResponseSchema` | `src/models/v3-shipping-multi-package-labels-response.ts` |
| `Error5` | `error5Schema` | `src/models/error5.ts` |
| `V3ShippingMultiPackageLabels500Error1` | `v3ShippingMultiPackageLabels500Error1Schema` | `src/models/v3-shipping-multi-package-labels500-error1.ts` |

### discardLabel

- **Signature**: `discardLabel(request: ShipWithWalmart.DiscardLabelRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsCarriersTrackingsResponse, ShipWithWalmart.DiscardLabelError>`
- **Wire**: `DELETE /v3/shipping/labels/carriers/{carrierShortName}/trackings/{trackingNo}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ShippingLabelsCarriersTrackingsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipWithWalmart.DiscardLabelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `V3ShippingLabelsCarriersTrackings400Error1[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipWithWalmart.DiscardLabelRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `carrierShortName` | `path` | — | `string` | yes |
| `trackingNo` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket6` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket6` | `wmMarket6Schema` | `src/models/wm-market6.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsCarriersTrackingsResponse` | `v3ShippingLabelsCarriersTrackingsResponseSchema` | `src/models/v3-shipping-labels-carriers-trackings-response.ts` |
| `V3ShippingLabelsCarriersTrackings400Error1` | `v3ShippingLabelsCarriersTrackings400Error1Schema` | `src/models/v3-shipping-labels-carriers-trackings400-error1.ts` |

### getCarrierPackageTypes

- **Signature**: `getCarrierPackageTypes(request: ShipWithWalmart.GetCarrierPackageTypesRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsCarriersPackageTypesResponse, ApiError>`
- **Wire**: `GET /v3/shipping/labels/carriers/{carrierShortName}/package-types`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ShippingLabelsCarriersPackageTypesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShipWithWalmart.GetCarrierPackageTypesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `carrierShortName` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsCarriersPackageTypesResponse` | `v3ShippingLabelsCarriersPackageTypesResponseSchema` | `src/models/v3-shipping-labels-carriers-package-types-response.ts` |

### getCarriers

- **Signature**: `getCarriers(request: ShipWithWalmart.GetCarriersRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsCarriersResponse, ApiError>`
- **Wire**: `GET /v3/shipping/labels/carriers`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ShippingLabelsCarriersResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShipWithWalmart.GetCarriersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsCarriersResponse` | `v3ShippingLabelsCarriersResponseSchema` | `src/models/v3-shipping-labels-carriers-response.ts` |

### getLabel

- **Signature**: `getLabel(request: ShipWithWalmart.GetLabelRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsPurchaseOrdersResponse, ApiError>`
- **Wire**: `GET /v3/shipping/labels/purchase-orders/{purchaseOrderId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3ShippingLabelsPurchaseOrdersResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShipWithWalmart.GetLabelRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `purchaseOrderId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsPurchaseOrdersResponse` | `v3ShippingLabelsPurchaseOrdersResponseSchema` | `src/models/v3-shipping-labels-purchase-orders-response.ts` |

### getLabelByTrackingAndCarrier

- **Signature**: `getLabelByTrackingAndCarrier(request: ShipWithWalmart.GetLabelByTrackingAndCarrierRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /v3/shipping/labels/carriers/{carrierShortName}/trackings/{trackingNo}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShipWithWalmart.GetLabelByTrackingAndCarrierRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `carrierShortName` | `path` | — | `string` | yes |
| `trackingNo` | `path` | — | `string` | yes |
| `accept` | `header` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |

### getScanFormByManifestId

- **Signature**: `getScanFormByManifestId(request: ShipWithWalmart.GetScanFormByManifestIdRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /v3/shipping/scan-form`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ShipWithWalmart.GetScanFormByManifestIdRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `manifestId` | `query` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |

### getShippingEstimate

- **Signature**: `getShippingEstimate(request: ShipWithWalmart.GetShippingEstimateRequest, options?: RequestOptions): ApiPromise<V3ShippingLabelsShippingEstimatesResponse, ShipWithWalmart.GetShippingEstimateError>`
- **Wire**: `POST /v3/shipping/labels/shipping-estimates`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ShippingLabelsShippingEstimatesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipWithWalmart.GetShippingEstimateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `V3ShippingLabelsShippingEstimates400Error1[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipWithWalmart.GetShippingEstimateRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket11` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ShippingLabelsShippingEstimatesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket11` | `wmMarket11Schema` | `src/models/wm-market11.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingLabelsShippingEstimatesRequest` | `v3ShippingLabelsShippingEstimatesRequestSchema` | `src/models/v3-shipping-labels-shipping-estimates-request.ts` |
| `V3ShippingLabelsShippingEstimatesResponse` | `v3ShippingLabelsShippingEstimatesResponseSchema` | `src/models/v3-shipping-labels-shipping-estimates-response.ts` |
| `V3ShippingLabelsShippingEstimates400Error1` | `v3ShippingLabelsShippingEstimates400Error1Schema` | `src/models/v3-shipping-labels-shipping-estimates400-error1.ts` |

### scanForm

- **Signature**: `scanForm(request: ShipWithWalmart.ScanFormRequest, options?: RequestOptions): ApiPromise<V3ShippingScanFormResponse, ShipWithWalmart.ScanFormError>`
- **Wire**: `POST /v3/shipping/scan-form`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3ShippingScanFormResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ShipWithWalmart.ScanFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShipWithWalmart.ScanFormRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `accept` | `header` | `Accept` | `string` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3ShippingScanFormRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket` | `wmMarketSchema` | `src/models/wm-market.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3ShippingScanFormRequest` | `v3ShippingScanFormRequestSchema` | `src/models/v3-shipping-scan-form-request.ts` |
| `V3ShippingScanFormResponse` | `v3ShippingScanFormResponseSchema` | `src/models/v3-shipping-scan-form-response.ts` |

