<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messaging — operations

Accessor: `client.messaging` · Source: `src/resources/messaging.ts` · 11 operations · Request and error types: namespace `Messaging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWarranty

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWarranty(request: Messaging.CreateWarrantyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateWarrantyError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/warranty`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateWarrantyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateWarrantyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getAttributes

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAttributes(request: Messaging.GetAttributesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.GetAttributesError>`
- **Wire**: `GET /messaging/v4/orders/{sp-apiOrderId}/attributes`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.GetAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.GetAttributesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### confirmCustomizationDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `confirmCustomizationDetails(request: Messaging.ConfirmCustomizationDetailsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.ConfirmCustomizationDetailsError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/confirmCustomizationDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.ConfirmCustomizationDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.ConfirmCustomizationDetailsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createConfirmDeliveryDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfirmDeliveryDetails(request: Messaging.CreateConfirmDeliveryDetailsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmDeliveryDetailsError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/confirmDeliveryDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateConfirmDeliveryDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateConfirmDeliveryDetailsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createConfirmOrderDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfirmOrderDetails(request: Messaging.CreateConfirmOrderDetailsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmOrderDetailsError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/confirmOrderDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateConfirmOrderDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateConfirmOrderDetailsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createConfirmServiceDetails

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfirmServiceDetails(request: Messaging.CreateConfirmServiceDetailsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateConfirmServiceDetailsError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/confirmServiceDetails`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateConfirmServiceDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateConfirmServiceDetailsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createDigitalAccessKey

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createDigitalAccessKey(request: Messaging.CreateDigitalAccessKeyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateDigitalAccessKeyError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/digitalAccessKey`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateDigitalAccessKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateDigitalAccessKeyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createLegalDisclosure

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createLegalDisclosure(request: Messaging.CreateLegalDisclosureRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateLegalDisclosureError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/legalDisclosure`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateLegalDisclosureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateLegalDisclosureRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### createUnexpectedProblem

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUnexpectedProblem(request: Messaging.CreateUnexpectedProblemRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.CreateUnexpectedProblemError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/unexpectedProblem`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.CreateUnexpectedProblemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.CreateUnexpectedProblemRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### getMessagingActionsForOrder

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMessagingActionsForOrder(request: Messaging.GetMessagingActionsForOrderRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.GetMessagingActionsForOrderError>`
- **Wire**: `GET /messaging/v4/orders/{sp-apiOrderId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.GetMessagingActionsForOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.GetMessagingActionsForOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### sendInvoice

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `sendInvoice(request: Messaging.SendInvoiceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Messaging.SendInvoiceError>`
- **Wire**: `POST /messaging/v4/orders/{sp-apiOrderId}/messages/invoice`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Messaging.SendInvoiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messaging.SendInvoiceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `spApiOrderId` | `path` | `sp-apiOrderId` | `string` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `body` | `body` | — | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

