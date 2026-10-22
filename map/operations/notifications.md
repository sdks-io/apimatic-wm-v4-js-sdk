<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `src/resources/notifications.ts` · 6 operations · Request types: namespace `Notifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSubscription

- **Signature**: `createSubscription(request: Notifications.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<V3WebhooksSubscriptionsResponse1, ApiError>`
- **Wire**: `POST /v3/webhooks/subscriptions`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3WebhooksSubscriptionsResponse1`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.CreateSubscriptionRequestParams` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3WebhooksSubscriptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksSubscriptionsRequest` | `v3WebhooksSubscriptionsRequestSchema` | `src/models/v3-webhooks-subscriptions-request.ts` |
| `V3WebhooksSubscriptionsResponse1` | `v3WebhooksSubscriptionsResponse1Schema` | `src/models/v3-webhooks-subscriptions-response1.ts` |

### deleteSubscription

- **Signature**: `deleteSubscription(request: Notifications.DeleteSubscriptionRequest, options?: RequestOptions): ApiPromise<V3WebhooksSubscriptionsResponse2, ApiError>`
- **Wire**: `DELETE /v3/webhooks/subscriptions/{subscriptionId}`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3WebhooksSubscriptionsResponse2`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.DeleteSubscriptionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksSubscriptionsResponse2` | `v3WebhooksSubscriptionsResponse2Schema` | `src/models/v3-webhooks-subscriptions-response2.ts` |

### getAllSubscriptions

- **Signature**: `getAllSubscriptions(request: Notifications.GetAllSubscriptionsRequest, options?: RequestOptions): ApiPromise<V3WebhooksSubscriptionsResponse, ApiError>`
- **Wire**: `GET /v3/webhooks/subscriptions`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3WebhooksSubscriptionsResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.GetAllSubscriptionsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `query` | — | `string` | no |
| `eventType` | `query` | — | `string` | no |
| `resourceName` | `query` | — | `string` | no |
| `status` | `query` | — | `string` | no |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksSubscriptionsResponse` | `v3WebhooksSubscriptionsResponseSchema` | `src/models/v3-webhooks-subscriptions-response.ts` |

### getEventTypes

- **Signature**: `getEventTypes(request: Notifications.GetEventTypesRequest, options?: RequestOptions): ApiPromise<V3WebhooksEventTypesResponse, ApiError>`
- **Wire**: `GET /v3/webhooks/eventTypes`
- **Auth**: `accessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3WebhooksEventTypesResponse`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.GetEventTypesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksEventTypesResponse` | `v3WebhooksEventTypesResponseSchema` | `src/models/v3-webhooks-event-types-response.ts` |

### testNotification

- **Signature**: `testNotification(request: Notifications.TestNotificationRequestParams, options?: RequestOptions): ApiPromise<RejectRecommendationsResponsePayload, ApiError>`
- **Wire**: `POST /v3/webhooks/test`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RejectRecommendationsResponsePayload`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.TestNotificationRequestParams` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3WebhooksTestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksTestRequest` | `v3WebhooksTestRequestSchema` | `src/models/v3-webhooks-test-request.ts` |
| `RejectRecommendationsResponsePayload` | `rejectRecommendationsResponsePayloadSchema` | `src/models/reject-recommendations-response-payload.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Notifications.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<V3WebhooksSubscriptionsResponse3, ApiError>`
- **Wire**: `PATCH /v3/webhooks/subscriptions/{subscriptionId}`
- **Auth**: `accessToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V3WebhooksSubscriptionsResponse3`
- **Error**: `WalmartApIsError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.UpdateSubscriptionRequestParams` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | — | `string` | yes |
| `wmQosCorrelationId` | `header` | `WM_QOS.CORRELATION_ID` | `string` | yes |
| `wmSvcName` | `header` | `WM_SVC.NAME` | `string` | yes |
| `wmMarket` | `header` | `WM_MARKET` | `WmMarket2` | yes |
| `wmGlobalVersion` | `header` | `WM_GLOBAL_VERSION` | `WmGlobalVersion` | yes |
| `wmConsumerChannelType` | `header` | `WM_CONSUMER.CHANNEL.TYPE` | `string` | no |
| `body` | `body` | — | `V3WebhooksSubscriptionsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmMarket2` | `wmMarket2Schema` | `src/models/wm-market2.ts` |
| `WmGlobalVersion` | `wmGlobalVersionSchema` | `src/models/wm-global-version.ts` |
| `V3WebhooksSubscriptionsRequest1` | `v3WebhooksSubscriptionsRequest1Schema` | `src/models/v3-webhooks-subscriptions-request1.ts` |
| `V3WebhooksSubscriptionsResponse3` | `v3WebhooksSubscriptionsResponse3Schema` | `src/models/v3-webhooks-subscriptions-response3.ts` |

