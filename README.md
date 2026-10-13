# Walmart APIs

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Walmart APIs SDK for TypeScript provides typed access to the Walmart APIs REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

OAuth token issuance for Walmart Marketplace, covering **both** v4 authorization
flows in one contract:

1. **Seller-direct** (`client_credentials`) — a seller's own application exchanges
   its client credentials for a short-lived access token, then calls the v4 APIs
   with `Authorization: Bearer <token>`.
2. **Solution-Provider delegated** (`authorization_code` + PKCE, `refresh_token`,
   and Dynamic Client Registration) — a seller grants a Solution Provider's
   application access to their Marketplace account.

Both flows are served by `the Authorization API` as a **stateless proxy** to
Walmart IAM : IAM remains the sole issuer; no secrets are stored and no
tokens are signed here. Access tokens are opaque, `Bearer`-type, short-lived;
refresh tokens (delegated flow) are rotated on use. Never log tokens.

## One token endpoint, grant dispatch
`POST /auth/v4/token` handles all three grants (`client_credentials`,
`authorization_code`, `refresh_token`) via `grant_type` dispatch — the merged v4
contract ( for seller-direct, for delegated). This is why the two
formerly separate specs (`openapi.yaml` + `delegated-oauth.yaml`) are now a single
document: a path can carry exactly one `post:`, so one file makes the shared
endpoint unambiguous for codegen and for the implementing controller.

## Posture
- **Seller-direct is OAuth 2.0** : documents what IAM/Apigee already do.
  IAM cannot add new auth features for this flow, so `client_credentials` issues
  **no** refresh token, `scope=` is accepted-but-ignored (no down-scoping), and
  introspection (RFC 7662) / revocation (RFC 7009) / discovery (RFC 8414) are
  **deliberately absent**.
- **Delegated is OAuth 2.1** : IAM already supports PKCE (`S256`), refresh
  rotation (~1-year TTL via `offline_access`), and Dynamic Client Registration
  (RFC 7591), so this flow specifies them properly.

The one modernization over `/v3` shared by both flows is the **access-token
header**: v4 uses the standard `Authorization: Bearer` and **does not use
`WM_SEC.ACCESS_TOKEN`** (the gateway already tolerates Bearer).

## Delegated-flow upstream gaps (, pending)
`GET /auth/v4/authorize` documents the OAuth-2.1-correct target. Three of its
guarantees depend on upstream changes that are **not yet in place**: `iss`
emission (RFC 9207), exact `redirect_uri` enforcement, and server-side PKCE `S256`
enforcement (rejecting `plain`) are IAM / app-store responsibilities tracked in
. the Authorization API validates the request-side invariants it can and
redirects correctly; the full end-to-end guarantee lands when IAM + app-store ship
those changes.

**Pod Owner:** Pod 0 — Core & Auth
**Implementation target:** the Authorization API (proxy) → Walmart IAM
, Retrieve catalog and product information from the Walmart Marketplace catalog.


**Pod Owner:** Pod 1 — Items & Catalog
**Implementation target:** Partner Item Query Service (PIQS), Submit analytics queries and retrieve structured data from Walmart's
data platform. Modeled after Walmart Seller API Data Kiosk API.

ADR pending: GraphQL vs REST query language — see docs/adr/ once filed.
Until the ADR resolves, the query body is treated as an opaque string.

**Pod Owner:** Pod 4 — Feeds & Reports
**Implementation target:** Walmart Analytics / Data Platform, Submit bulk data to Walmart Marketplace via asynchronous feed processing.
Sellers submit a feed file in a single API call; the server handles
document storage and initiates async processing. Poll feed status
with the feedId returned in the submission response.

**Pod Owner:** Pod 4 — Feeds & Reports
**Implementation target:** Walmart Feed Service / Bulk Operations

<!-- hello: Atul Soman (@a0s1r2d) joined Pod 4 — 2026-06-04 -->
<!-- hello: Ramprabhu Murugesan (@rmurug3) joined Pod 4 as lead — 2026-06-04 -->, WFS Inbound Plans API. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound Delivery Windows, Self-Ship Appointments & Operation Status API. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound Packing. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound Packing & Placement API. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound Items, Compliance, Labels & Prep API. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound Shipments API. Walmart Seller API — Fulfillment Inbound contract.
Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., Create and manage WFS (Walmart Fulfillment Services) outbound fulfillment orders.
Sellers ship inventory to Walmart ship nodes; Walmart picks, packs, and ships
to end customers.


**Pod Owner:** Pod 2 — Orders & Fulfillment
**Implementation target:** WFS Outbound / Ship Node Service, Manage seller inventory on the Walmart Marketplace.


**Pod Owner:** Pod 3 — Inventory & Pricing
**Implementation target:** Walmart Inventory Service, Create, fully update, patch, and delete listings items for sellers on the
Walmart Marketplace. Modeled after Walmart Seller API Listings Items API.

**Pod Owner:** Pod 1 — Items & Catalog
**Implementation target:** Walmart Item Setup Service, Get information about listing restrictions on items in the Walmart Marketplace.
Identifies compliance blocks, category restrictions, and approval requirements.


**Pod Owner:** Pod 3 — Inventory & Pricing
**Implementation target:** Walmart Item Compliance / Restriction Service, SUPERSEDED — NOT SCHEDULED FOR IMPLEMENTATION.
the Merchant Fulfillment API is obsolete: its operations are covered by
the Shipping API, and both front the same upstream (Ship With Walmart).
Per Suresh's SWW-consolidation analysis, every operation below is marked
counts toward Pod 2 implementation scope. This spec is retained for
reference only (tombstone) — no code is being built against it. New
seller-fulfilled shipping work goes to the Shipping API.

Tracking: (this deprecation). The one partial-coverage gap
(MFN full-record `getShipment` has no single the Shipping API equivalent)
is owned by Suresh for decision in .

---
Get eligible shipping services and purchase shipping labels for seller-fulfilled
orders. Modeled after Walmart Seller API Merchant Fulfillment API.

**Pod Owner:** Pod 2 — Orders & Fulfillment
**Implementation target:** Ship With Walmart (SWW) — SWW-LABEL-SERVICE
(internal `/v3/sww/labels/*` synchronous REST; see
docs/mapper/mfn-mapper-feasibility.md), Retrieve and manage Walmart Marketplace orders.


**Pod Owner:** Pod 2 — Orders & Fulfillment
**Implementation target:** Walmart Order Management Service (OMS)
<!-- hello: Vikram Godbole (@vgodbol) joined Pod 2 — 2026-06-03 -->
<!-- hello: Suresh Dussa (@s0d08o6) joined Pod 2 — 2026-06-08 -->
<!-- hello: Leon Jiang (@r0j09pq) joined Pod 2 — 2026-08-10 -->
<!-- hello: Rashmi Das (@r0d01sm) joined Pod 2 — 2026-08-18 -->, Unified Payments domain API for Walmart Marketplace sellers.
Consolidates Pod 5 (Finances / financial event reporting) and Pod 6
(Outbound Payments — settlement, reconciliation, payout execution) into a
single service under the Payments domain .

**Category A (7 routes):** Reporting — delegated to mp-payment-reporting upstream.
**Category B (9 routes):** Execution — delegated to GMPPayments upstream.
**Finances (4 routes):** Financial event reporting — delegated to GMP partnerTxnSearch
and commission endpoints (, ).

Routes with x-walmart-pii: true contain order/seller PII and require an RDT
issued by the Tokens service (Pod 0, ) in production.

**Domain Owner:** Payments Domain (consolidated Pod 5 + Pod 6)
**Tech Lead:** @cssehga
**Replaces:** the payments settlement backend (v3 BFF); the Payments API (Pod 5), Pricing information for seller items and competitive pricing summaries.
Aligned to SP-API productPricingV0 surface (April 2026 release), with
Walmart Item ID substituted for ASIN as the primary item identifier .

Three GET endpoints are backed by IQS / GCI catalog_index .
Five batch/item endpoints are Phase 1 stubs pending implementation —
through .

**Pod Owner:** Pod 3 — Inventory & Pricing
**Implementation target:** Walmart Price Service / Competitive Intelligence, Fee estimate endpoints for seller items.
Aligned to SP-API productFeesV0 surface, with Walmart Item ID substituted
for ASIN as the primary item identifier , and Amazon-specific
branding replaced with Walmart equivalents.

All three endpoints are Phase 2 implementations backed by:
- IQS catalog_index — item enrichment (category, weight, dims, GTIN)
- Partner Rate Service (Columbus) — referral fee by category
- WFS Fulfillment Fee Service (payment-app.wfs) — WFS pick-and-pack fees

**Pod Owner:** Pod 3 — Inventory & Pricing, Retrieve Walmart product type definitions, attribute schemas, and
item classification rules used when setting up seller listings.

**Pod Owner:** Pod 1 — Items & Catalog
**Implementation target:** Walmart Item Classification Service, Create, cancel, and retrieve seller reports.
Supports scheduled and on-demand reports with async processing.


**Pod Owner:** Pod 4 — Feeds & Reports
**Implementation target:** Walmart Seller Reporting Service, Retrieve information about a seller's Walmart Marketplace account
and marketplace participations.


**Pod Owner:** Pod 5 — Seller & Finances
**Implementation target:** Walmart Seller Account Service / Seller Center, Shipping API for sellers to request rates, purchase shipping labels,
track shipments, and manage delivery exceptions across Walmart
Marketplace and WFS channels.

Surface aligned with industry SP-API Shipping v2. Pod 2 — Orders &
Fulfillment owns this service. Common types (Address, Money, Weight,
PackageDimensions) are inlined per Pod 2 convention, byte-identical to
the canonical copies in the Merchant Fulfillment API; (proposed)
defines the future promotion path to models/_shared/ once the Rule of
Three triggers a coordinated extraction PR., Create upload destinations (pre-signed URLs) for feed documents and
retrieve previously uploaded documents. Used in conjunction with the
Feeds service for async bulk operations.


Pre-signed URLs must not appear in logs — treat as secrets.

**Pod Owner:** Pod 4 — Feeds & Reports
**Implementation target:** Walmart Document Store / S3 pre-signed URLs

---

## Installation

To add the SDK to your project from npm:

```bash
npm install apimatic-wm-v4-sdk
```

To install from the SDK source instead, compile it to `dist/` — run its `build` script once in the SDK folder — then add it to your project by path:

```bash
npm install <path-to-sdk>
```

---

## Quick Start

Create one client and reuse it. Configure its behaviour through [ClientOptions](src/client-options.ts).

```ts
import { PkceMethod, ServerEnvironment, WalmartApIsClient } from "apimatic-wm-v4-sdk";

const client = new WalmartApIsClient({
  serverEnvironment: ServerEnvironment.Production,
  sellerAuthAuthorizationCode: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  sellerAuthClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
  basicClientAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  walletAuth: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

Nothing in `ClientOptions` is required — `new WalmartApIsClient()` compiles — and each option left out falls back to its default. `serverEnvironment` is spelled out above so the environment a call reaches is visible where the client is built rather than inherited silently.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("apimatic-wm-v4-sdk");

const client = new sdk.WalmartApIsClient({
  serverEnvironment: sdk.ServerEnvironment.Production,
  sellerAuthAuthorizationCode: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: sdk.PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  sellerAuthClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
  basicClientAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  walletAuth: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/authorization.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/authorization.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/authorization.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **174 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at pod-0@sellers.walmart.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
