import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Authorization } from "./resources/authorization.js";
import { Catalog } from "./resources/catalog.js";
import { DataKiosk } from "./resources/data-kiosk.js";
import { Disputes } from "./resources/disputes.js";
import { Feeds } from "./resources/feeds.js";
import { FinalPayout } from "./resources/final-payout.js";
import { Finances } from "./resources/finances.js";
import { FulfillmentOutbound } from "./resources/fulfillment-outbound.js";
import { Inventory } from "./resources/inventory.js";
import { ListingsItems } from "./resources/listings-items.js";
import { ListingsRestrictions } from "./resources/listings-restrictions.js";
import { MerchantFulfillment } from "./resources/merchant-fulfillment.js";
import { Messaging } from "./resources/messaging.js";
import { Notifications } from "./resources/notifications.js";
import { Orders } from "./resources/orders.js";
import { Payouts } from "./resources/payouts.js";
import { ProductFees } from "./resources/product-fees.js";
import { ProductPricing } from "./resources/product-pricing.js";
import { ProductTypeDefinitions } from "./resources/product-type-definitions.js";
import { Reconciliation } from "./resources/reconciliation.js";
import { ReportSchedules } from "./resources/report-schedules.js";
import { Reports } from "./resources/reports.js";
import { Sales } from "./resources/sales.js";
import { Sellers } from "./resources/sellers.js";
import { Settlement } from "./resources/settlement.js";
import { Shipping } from "./resources/shipping.js";
import { Solicitations } from "./resources/solicitations.js";
import { Uploads } from "./resources/uploads.js";
import { WfsInbound } from "./resources/wfs-inbound.js";
import { WfsInventory } from "./resources/wfs-inventory.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * OAuth token issuance for Walmart Marketplace, covering **both** v4 authorization flows in one
 * contract:
 *
 * 1. **Seller-direct** (`client_credentials`) — a seller's own application exchanges its client
 *    credentials for a short-lived access token, then calls the v4 APIs with `Authorization: Bearer
 *    <token>`.
 * 2. **Solution-Provider delegated** (`authorization_code` + PKCE, `refresh_token`, and Dynamic
 *    Client Registration) — a seller grants a Solution Provider's application access to their
 *    Marketplace account.
 *
 * Both flows are served by `the Authorization API` as a **stateless proxy** to Walmart IAM : IAM
 * remains the sole issuer; no secrets are stored and no tokens are signed here. Access tokens are
 * opaque, `Bearer`-type, short-lived; refresh tokens (delegated flow) are rotated on use. Never log
 * tokens.
 *
 * ## One token endpoint, grant dispatch
 * `POST /auth/v4/token` handles all three grants (`client_credentials`, `authorization_code`,
 * `refresh_token`) via `grant_type` dispatch — the merged v4 contract ( for seller-direct, for
 * delegated). This is why the two formerly separate specs (`openapi.yaml` + `delegated-oauth.yaml`)
 * are now a single document: a path can carry exactly one `post:`, so one file makes the shared
 * endpoint unambiguous for codegen and for the implementing controller.
 *
 * ## Posture
 * - **Seller-direct is OAuth 2.0** : documents what IAM/Apigee already do. IAM cannot add new auth
 *   features for this flow, so `client_credentials` issues **no** refresh token, `scope=` is
 *   accepted-but-ignored (no down-scoping), and introspection (RFC 7662) / revocation (RFC 7009) /
 *   discovery (RFC 8414) are **deliberately absent**.
 * - **Delegated is OAuth 2.1** : IAM already supports PKCE (`S256`), refresh rotation (~1-year TTL
 *   via `offline_access`), and Dynamic Client Registration (RFC 7591), so this flow specifies them
 *   properly.
 *
 * The one modernization over `/v3` shared by both flows is the **access-token header**: v4 uses the
 * standard `Authorization: Bearer` and **does not use `WM_SEC.ACCESS_TOKEN`** (the gateway already
 * tolerates Bearer).
 *
 * ## Delegated-flow upstream gaps (, pending)
 * `GET /auth/v4/authorize` documents the OAuth-2.1-correct target. Three of its guarantees depend
 * on upstream changes that are **not yet in place**: `iss` emission (RFC 9207), exact
 * `redirect_uri` enforcement, and server-side PKCE `S256` enforcement (rejecting `plain`) are IAM /
 * app-store responsibilities tracked in . the Authorization API validates the request-side
 * invariants it can and redirects correctly; the full end-to-end guarantee lands when IAM +
 * app-store ship those changes.
 *
 * **Pod Owner:** Pod 0 — Core & Auth **Implementation target:** the Authorization API (proxy) →
 * Walmart IAM , Retrieve catalog and product information from the Walmart Marketplace catalog.
 *
 *
 * **Pod Owner:** Pod 1 — Items & Catalog **Implementation target:** Partner Item Query Service
 * (PIQS), Submit analytics queries and retrieve structured data from Walmart's data platform.
 * Modeled after Walmart Seller API Data Kiosk API.
 *
 * ADR pending: GraphQL vs REST query language — see docs/adr/ once filed. Until the ADR resolves,
 * the query body is treated as an opaque string.
 *
 * **Pod Owner:** Pod 4 — Feeds & Reports **Implementation target:** Walmart Analytics / Data
 * Platform, Submit bulk data to Walmart Marketplace via asynchronous feed processing. Sellers
 * submit a feed file in a single API call; the server handles document storage and initiates async
 * processing. Poll feed status with the feedId returned in the submission response.
 *
 * **Pod Owner:** Pod 4 — Feeds & Reports **Implementation target:** Walmart Feed Service / Bulk
 * Operations
 *
 * <!-- hello: Atul Soman (@a0s1r2d) joined Pod 4 — 2026-06-04 --> <!-- hello: Ramprabhu Murugesan
 * (@rmurug3) joined Pod 4 as lead — 2026-06-04 -->, WFS Inbound Plans API. Walmart Seller API —
 * Fulfillment Inbound contract. Terminology: WFS = Walmart Fulfillment Services, Ship Node =
 * fulfillment center., WFS Inbound Delivery Windows, Self-Ship Appointments & Operation Status API.
 * Walmart Seller API — Fulfillment Inbound contract. Terminology: WFS = Walmart Fulfillment
 * Services, Ship Node = fulfillment center., WFS Inbound Packing. Walmart Seller API — Fulfillment
 * Inbound contract. Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment
 * center., WFS Inbound Packing & Placement API. Walmart Seller API — Fulfillment Inbound contract.
 * Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound
 * Items, Compliance, Labels & Prep API. Walmart Seller API — Fulfillment Inbound contract.
 * Terminology: WFS = Walmart Fulfillment Services, Ship Node = fulfillment center., WFS Inbound
 * Shipments API. Walmart Seller API — Fulfillment Inbound contract. Terminology: WFS = Walmart
 * Fulfillment Services, Ship Node = fulfillment center., Create and manage WFS (Walmart Fulfillment
 * Services) outbound fulfillment orders. Sellers ship inventory to Walmart ship nodes; Walmart
 * picks, packs, and ships to end customers.
 *
 *
 * **Pod Owner:** Pod 2 — Orders & Fulfillment **Implementation target:** WFS Outbound / Ship Node
 * Service, Manage seller inventory on the Walmart Marketplace.
 *
 *
 * **Pod Owner:** Pod 3 — Inventory & Pricing **Implementation target:** Walmart Inventory Service,
 * Create, fully update, patch, and delete listings items for sellers on the Walmart Marketplace.
 * Modeled after Walmart Seller API Listings Items API.
 *
 * **Pod Owner:** Pod 1 — Items & Catalog **Implementation target:** Walmart Item Setup Service, Get
 * information about listing restrictions on items in the Walmart Marketplace. Identifies compliance
 * blocks, category restrictions, and approval requirements.
 *
 *
 * **Pod Owner:** Pod 3 — Inventory & Pricing **Implementation target:** Walmart Item Compliance /
 * Restriction Service, SUPERSEDED — NOT SCHEDULED FOR IMPLEMENTATION. the Merchant Fulfillment API
 * is obsolete: its operations are covered by the Shipping API, and both front the same upstream
 * (Ship With Walmart). Per Suresh's SWW-consolidation analysis, every operation below is marked
 * counts toward Pod 2 implementation scope. This spec is retained for reference only (tombstone) —
 * no code is being built against it. New seller-fulfilled shipping work goes to the Shipping API.
 *
 * Tracking: (this deprecation). The one partial-coverage gap (MFN full-record `getShipment` has no
 * single the Shipping API equivalent) is owned by Suresh for decision in .
 *
 * --- Get eligible shipping services and purchase shipping labels for seller-fulfilled orders.
 * Modeled after Walmart Seller API Merchant Fulfillment API.
 *
 * **Pod Owner:** Pod 2 — Orders & Fulfillment **Implementation target:** Ship With Walmart (SWW) —
 * SWW-LABEL-SERVICE (internal `/v3/sww/labels/*` synchronous REST; see
 * docs/mapper/mfn-mapper-feasibility.md), Retrieve and manage Walmart Marketplace orders.
 *
 *
 * **Pod Owner:** Pod 2 — Orders & Fulfillment **Implementation target:** Walmart Order Management
 * Service (OMS) <!-- hello: Vikram Godbole (@vgodbol) joined Pod 2 — 2026-06-03 --> <!-- hello:
 * Suresh Dussa (@s0d08o6) joined Pod 2 — 2026-06-08 --> <!-- hello: Leon Jiang (@r0j09pq) joined
 * Pod 2 — 2026-08-10 --> <!-- hello: Rashmi Das (@r0d01sm) joined Pod 2 — 2026-08-18 -->, Unified
 * Payments domain API for Walmart Marketplace sellers. Consolidates Pod 5 (Finances / financial
 * event reporting) and Pod 6 (Outbound Payments — settlement, reconciliation, payout execution)
 * into a single service under the Payments domain .
 *
 * **Category A (7 routes):** Reporting — delegated to mp-payment-reporting upstream. **Category B
 * (9 routes):** Execution — delegated to GMPPayments upstream. **Finances (4 routes):** Financial
 * event reporting — delegated to GMP partnerTxnSearch and commission endpoints (, ).
 *
 * Routes with x-walmart-pii: true contain order/seller PII and require an RDT issued by the Tokens
 * service (Pod 0, ) in production.
 *
 * **Domain Owner:** Payments Domain (consolidated Pod 5 + Pod 6) **Tech Lead:** \@cssehga
 * **Replaces:** the payments settlement backend (v3 BFF); the Payments API (Pod 5), Pricing
 * information for seller items and competitive pricing summaries. Aligned to SP-API
 * productPricingV0 surface (April 2026 release), with Walmart Item ID substituted for ASIN as the
 * primary item identifier .
 *
 * Three GET endpoints are backed by IQS / GCI catalog_index . Five batch/item endpoints are Phase 1
 * stubs pending implementation — through .
 *
 * **Pod Owner:** Pod 3 — Inventory & Pricing **Implementation target:** Walmart Price Service /
 * Competitive Intelligence, Fee estimate endpoints for seller items. Aligned to SP-API
 * productFeesV0 surface, with Walmart Item ID substituted for ASIN as the primary item identifier ,
 * and Amazon-specific branding replaced with Walmart equivalents.
 *
 * All three endpoints are Phase 2 implementations backed by:
 * - IQS catalog_index — item enrichment (category, weight, dims, GTIN)
 * - Partner Rate Service (Columbus) — referral fee by category
 * - WFS Fulfillment Fee Service (payment-app.wfs) — WFS pick-and-pack fees
 *
 * **Pod Owner:** Pod 3 — Inventory & Pricing, Retrieve Walmart product type definitions, attribute
 * schemas, and item classification rules used when setting up seller listings.
 *
 * **Pod Owner:** Pod 1 — Items & Catalog **Implementation target:** Walmart Item Classification
 * Service, Create, cancel, and retrieve seller reports. Supports scheduled and on-demand reports
 * with async processing.
 *
 *
 * **Pod Owner:** Pod 4 — Feeds & Reports **Implementation target:** Walmart Seller Reporting
 * Service, Retrieve information about a seller's Walmart Marketplace account and marketplace
 * participations.
 *
 *
 * **Pod Owner:** Pod 5 — Seller & Finances **Implementation target:** Walmart Seller Account
 * Service / Seller Center, Shipping API for sellers to request rates, purchase shipping labels,
 * track shipments, and manage delivery exceptions across Walmart Marketplace and WFS channels.
 *
 * Surface aligned with industry SP-API Shipping v2. Pod 2 — Orders & Fulfillment owns this service.
 * Common types (Address, Money, Weight, PackageDimensions) are inlined per Pod 2 convention,
 * byte-identical to the canonical copies in the Merchant Fulfillment API; (proposed) defines the
 * future promotion path to models/_shared/ once the Rule of Three triggers a coordinated extraction
 * PR., Create upload destinations (pre-signed URLs) for feed documents and retrieve previously
 * uploaded documents. Used in conjunction with the Feeds service for async bulk operations.
 *
 *
 * Pre-signed URLs must not appear in logs — treat as secrets.
 *
 * **Pod Owner:** Pod 4 — Feeds & Reports **Implementation target:** Walmart Document Store / S3
 * pre-signed URLs
 */
export class WalmartApIsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authorization?: Authorization;
  #catalog?: Catalog;
  #dataKiosk?: DataKiosk;
  #feeds?: Feeds;
  #wfsInbound?: WfsInbound;
  #fulfillmentOutbound?: FulfillmentOutbound;
  #inventory?: Inventory;
  #wfsInventory?: WfsInventory;
  #listingsItems?: ListingsItems;
  #listingsRestrictions?: ListingsRestrictions;
  #merchantFulfillment?: MerchantFulfillment;
  #orders?: Orders;
  #settlement?: Settlement;
  #reconciliation?: Reconciliation;
  #reports?: Reports;
  #payouts?: Payouts;
  #disputes?: Disputes;
  #finalPayout?: FinalPayout;
  #finances?: Finances;
  #productPricing?: ProductPricing;
  #productFees?: ProductFees;
  #productTypeDefinitions?: ProductTypeDefinitions;
  #reportSchedules?: ReportSchedules;
  #sales?: Sales;
  #messaging?: Messaging;
  #notifications?: Notifications;
  #solicitations?: Solicitations;
  #sellers?: Sellers;
  #shipping?: Shipping;
  #uploads?: Uploads;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "WALMART_AP_IS_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "WalmartApIsClient/4.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * OAuth 2.0 / 2.1 token issuance, delegated consent, and client registration.
   */
  get authorization(): Authorization {
    return (this.#authorization ??= new Authorization(this.#rawClient, this.#servers, this.#auth));
  }

  get catalog(): Catalog {
    return (this.#catalog ??= new Catalog(this.#rawClient, this.#servers, this.#auth));
  }

  get dataKiosk(): DataKiosk {
    return (this.#dataKiosk ??= new DataKiosk(this.#rawClient, this.#servers, this.#auth));
  }

  get feeds(): Feeds {
    return (this.#feeds ??= new Feeds(this.#rawClient, this.#servers, this.#auth));
  }

  get wfsInbound(): WfsInbound {
    return (this.#wfsInbound ??= new WfsInbound(this.#rawClient, this.#servers, this.#auth));
  }

  get fulfillmentOutbound(): FulfillmentOutbound {
    return (this.#fulfillmentOutbound ??= new FulfillmentOutbound(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get inventory(): Inventory {
    return (this.#inventory ??= new Inventory(this.#rawClient, this.#servers, this.#auth));
  }

  get wfsInventory(): WfsInventory {
    return (this.#wfsInventory ??= new WfsInventory(this.#rawClient, this.#servers, this.#auth));
  }

  get listingsItems(): ListingsItems {
    return (this.#listingsItems ??= new ListingsItems(this.#rawClient, this.#servers, this.#auth));
  }

  get listingsRestrictions(): ListingsRestrictions {
    return (this.#listingsRestrictions ??= new ListingsRestrictions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get merchantFulfillment(): MerchantFulfillment {
    return (this.#merchantFulfillment ??= new MerchantFulfillment(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Settlement periods and detailed transaction records.
   */
  get settlement(): Settlement {
    return (this.#settlement ??= new Settlement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reconciliation report availability and download.
   */
  get reconciliation(): Reconciliation {
    return (this.#reconciliation ??= new Reconciliation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Settlement summary report download (new and legacy formats).
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payout status, eligibility, and initiation.
   */
  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Dispute eligibility for payment issues.
   */
  get disputes(): Disputes {
    return (this.#disputes ??= new Disputes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Final payout case management.
   */
  get finalPayout(): FinalPayout {
    return (this.#finalPayout ??= new FinalPayout(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Financial event groups, financial events, and order-level financial events (consolidated from
   * Pod 5).
   */
  get finances(): Finances {
    return (this.#finances ??= new Finances(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Product pricing and competitive pricing operations
   */
  get productPricing(): ProductPricing {
    return (this.#productPricing ??= new ProductPricing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Fee estimate operations for seller items
   */
  get productFees(): ProductFees {
    return (this.#productFees ??= new ProductFees(this.#rawClient, this.#servers, this.#auth));
  }

  get productTypeDefinitions(): ProductTypeDefinitions {
    return (this.#productTypeDefinitions ??= new ProductTypeDefinitions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get reportSchedules(): ReportSchedules {
    return (this.#reportSchedules ??= new ReportSchedules(this.#rawClient, this.#servers, this.#auth));
  }

  get sales(): Sales {
    return (this.#sales ??= new Sales(this.#rawClient, this.#servers, this.#auth));
  }

  get messaging(): Messaging {
    return (this.#messaging ??= new Messaging(this.#rawClient, this.#servers, this.#auth));
  }

  get notifications(): Notifications {
    return (this.#notifications ??= new Notifications(this.#rawClient, this.#servers, this.#auth));
  }

  get solicitations(): Solicitations {
    return (this.#solicitations ??= new Solicitations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Seller account and marketplace participation information
   */
  get sellers(): Sellers {
    return (this.#sellers ??= new Sellers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Rate quotes, label purchase, tracking, and delivery for seller shipments.
   */
  get shipping(): Shipping {
    return (this.#shipping ??= new Shipping(this.#rawClient, this.#servers, this.#auth));
  }

  get uploads(): Uploads {
    return (this.#uploads ??= new Uploads(this.#rawClient, this.#servers, this.#auth));
  }
}
