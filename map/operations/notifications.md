<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `src/resources/notifications.ts` · 9 operations · Request and error types: namespace `Notifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDestination

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createDestination(request: Notifications.CreateDestinationRequest, options?: RequestOptions): ApiPromise<Channel, Notifications.CreateDestinationError>`
- **Wire**: `POST /notifications/v4/destinations`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.CreateDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.CreateDestinationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |

### createSubscription

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSubscription(request: Notifications.CreateSubscriptionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Notifications.CreateSubscriptionError>`
- **Wire**: `POST /notifications/v4/subscriptions/{notificationType}`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.CreateSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.CreateSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `notificationType` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

### deleteDestination

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDestination(request: Notifications.DeleteDestinationRequest, options?: RequestOptions): ApiPromise<Channel, Notifications.DeleteDestinationError>`
- **Wire**: `DELETE /notifications/v4/destinations/{destinationId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.DeleteDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.DeleteDestinationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `destinationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |

### deleteSubscriptionById

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSubscriptionById(request: Notifications.DeleteSubscriptionByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Notifications.DeleteSubscriptionByIdError>`
- **Wire**: `DELETE /notifications/v4/subscriptions/{notificationType}/{subscriptionId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.DeleteSubscriptionByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.DeleteSubscriptionByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `notificationType` | `path` | `string` | yes |

### getDestination

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDestination(request: Notifications.GetDestinationRequest, options?: RequestOptions): ApiPromise<Channel, Notifications.GetDestinationError>`
- **Wire**: `GET /notifications/v4/destinations/{destinationId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channel`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.GetDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.GetDestinationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `destinationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |

### getDestinations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDestinations(options?: RequestOptions): ApiPromise<ChannelList, Notifications.GetDestinationsError>`
- **Wire**: `GET /notifications/v4/destinations`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChannelList`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.GetDestinationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelList` | `channelListSchema` | `src/models/channel-list.ts` |

### getSubscription

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSubscription(request: Notifications.GetSubscriptionRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Notifications.GetSubscriptionError>`
- **Wire**: `GET /notifications/v4/subscriptions/{notificationType}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.GetSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.GetSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `notificationType` | `path` | `string` | yes |
| `payloadVersion` | `query` | `string` | no |

### getSubscriptionById

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSubscriptionById(request: Notifications.GetSubscriptionByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Notifications.GetSubscriptionByIdError>`
- **Wire**: `GET /notifications/v4/subscriptions/{notificationType}/{subscriptionId}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.GetSubscriptionByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.GetSubscriptionByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `notificationType` | `path` | `string` | yes |

### sendTestNotification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `sendTestNotification(request: Notifications.SendTestNotificationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Notifications.SendTestNotificationError>`
- **Wire**: `POST /notifications/v4/subscriptions/{notificationType}/testNotification`
- **Auth**: `walletAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Notifications.SendTestNotificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notifications.SendTestNotificationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `notificationType` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

