import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { errorResponse429Schema, type ErrorResponse429 } from "../models/error-response429.js";
import { issueMetadataSchema, type IssueMetadata } from "../models/issue-metadata.js";
import {
  itemDiagnosticSearchRequestSchema,
  type ItemDiagnosticSearchRequest,
} from "../models/item-diagnostic-search-request.js";
import {
  itemDiagnosticSearchResponseSchema,
  type ItemDiagnosticSearchResponse,
} from "../models/item-diagnostic-search-response.js";
import { WmGlobalVersion, wmGlobalVersionSchema } from "../models/wm-global-version.js";
import { WmMarket, wmMarketSchema } from "../models/wm-market.js";
import type { Servers } from "../servers.js";

export class SemItemDiagnostics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get issue types
   *
   * @remarks
   * Returns the complete, authoritative metadata for all SEM eligibility issue types (~61 issue
   * types, ~5KB).<br><b style='color:green;'>Market availability: US only</b>
   *
   * Items used in Search Engine Marketing (SEM) campaigns such as Google Shopping Ads must meet
   * specific content, quality, and policy requirements before they can be advertised on search
   * engines. When items fail to meet these requirements, they are flagged with specific issue types
   * that either **block** the item from being advertised entirely or **limit** its visibility and
   * performance in SEM.
   *
   * This endpoint returns the complete catalog of all issue types that can affect an item's SEM
   * eligibility, along with human-readable names, descriptions, remediation guidance, severity
   * categories, and help links. It serves as the **single source of truth** for issue metadata.
   *
   * ### Current scope
   * The issue types returned by this endpoint apply to items that are currently part of active SEM
   * campaigns. The `POST /item-issues/search` endpoint uses these issue types to report diagnostics
   * on campaign items.
   *
   * ### Future extensibility
   * In a future release, the `POST /item-issues/search` endpoint will support querying diagnostic
   * issues for any item in the seller's catalog — even items not yet added to a campaign — using
   * the `itemId` filter. The same issue types returned by this endpoint will apply to those items
   * as well, enabling sellers to proactively diagnose and fix issues before campaign onboarding.
   *
   * ### SEM eligibility issue categories
   * Each issue type belongs to one of three categories that indicate its impact on an item's
   * ability to be advertised on search engines:
   *
   * | Category     | Count | SEM Impact                                                                     |
   * |--------------|-------|--------------------------------------------------------------------------------|
   * | `BLOCKED`    | ~49   | Item **cannot be advertised** on search engines. Must be resolved before the item can appear in SEM ads. Examples: `ITEM_OUT_OF_STOCK`, `POLICY_VIOLATION`, `MISSING_INVALID_TITLE`, `INVALID_IMAGE`, `BUYBOX_NOT_WINNER` |
   * | `LIMITED`    | ~11   | Item **can be advertised but with reduced visibility** or performance on search engines. Resolving these issues improves ad reach and effectiveness. Examples: `TITLE_TOO_LONG`, `LOW_IMAGE_QUALITY`, `DESCRIPTION_TOO_SHORT`, `LOW_OFFER_LISTING_QUALITY` |
   * | `NO_ISSUES`  | ~1    | Informational statuses such as `DUPLICATE_OFFER` — item has no SEM eligibility issues |
   *
   * ### Actionable vs non-actionable issues
   * Each issue type includes an `isFixable` flag that indicates whether the seller can resolve the
   * issue:
   * - `isFixable=true`: Seller can take action to restore or improve SEM eligibility (For example,
   *   restock inventory, update title, improve image quality). Partners should surface these with a
   *   "Fix Now" UI affordance.
   * - `isFixable=false`: Requires Walmart or system intervention (For example, Google policy
   *   violations, BuyBox eligibility). Partners should display these as informational — the seller
   *   cannot directly resolve them.
   *
   * ### Response structure
   * The response is a map keyed by `issueType` (string), where each value is an `IssueMetadata`
   * object containing:
   * - `issueName`: Human-readable short headline for UI display (For example, "Item Out of Stock")
   * - `issueCategory`: SEM eligibility impact — `BLOCKED` (cannot advertise on search engines) or
   *   `LIMITED` (reduced SEM visibility)
   * - `isFixable`: Whether the partner can remediate this issue to restore SEM eligibility
   * - `issueDescription`: Human-readable description with specific remediation guidance (For
   *   example, "Item is out of stock. Add inventory to make the item available.")
   * - `learnMoreUrl`: Help link to Walmart-hosted or Google support documentation for step-by-step
   *   remediation. May be null for some issue types.
   *
   * ### Recommended usage pattern
   * 1. Call this endpoint **once** on application initialization
   * 2. Cache the result locally (recommended **TTL: 24 hours**)
   * 3. Use cached metadata to enrich items returned by the `POST /item-issues/search` endpoint —
   *    match each item's `issueType` to the cached metadata for display name, description, and help
   *    links
   * 4. Use `isFixable` to drive UI affordances: show "Fix Now" buttons for fixable SEM issues,
   *    informational badges for non-fixable ones
   * 5. Use `learnMoreUrl` to deep-link to help documentation for step-by-step remediation guidance
   * 6. Use `issueCategory` to color-code or badge issues in your UI: red for `BLOCKED` (cannot
   *    advertise), yellow for `LIMITED` (reduced SEM performance)
   *
   * @returns Issue types metadata retrieved successfully
   *
   * @throws {@link SemItemDiagnostics.GetIssueTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIssueTypes(
    request: SemItemDiagnostics.GetIssueTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, IssueMetadata>, SemItemDiagnostics.GetIssueTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/advertising/sem/item-issues/issue-types"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          {
            name: "WM_GLOBAL_VERSION",
            value: request.wmGlobalVersion,
            schema: s.defaulted(wmGlobalVersionSchema, WmGlobalVersion._31),
          },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.defaulted(wmMarketSchema, WmMarket.Us) },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => issueMetadataSchema),
          ),
        },
        errorFactory: SemItemDiagnostics.GetIssueTypesError,
      },
      options,
    );
  }

  /**
   * Search item issues
   *
   * @remarks
   * Search for item-level diagnostic issues that block or limit items from being used in Search
   * Engine Marketing (SEM). Returns paginated, item-level diagnostic details including campaign
   * associations, issue types, severity, remediation guidance, and overall item status.<br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * Items in SEM campaigns must meet content, quality, and policy requirements before they can be
   * advertised on search engines (For example, Google Shopping Ads). This endpoint surfaces the
   * specific issues preventing or limiting an item's SEM eligibility, along with actionable
   * remediation guidance so sellers can resolve problems and restore advertising reach.
   *
   * ### Current scope
   * This endpoint currently returns diagnostics for **items that are part of active SEM campaigns**
   * for the authenticated seller. Each item in the response includes its `campaignAssociations` —
   * the list of campaigns the item belongs to. Items not associated with any campaign are not
   * included in the results.
   *
   * ### Default behavior
   * - When no request body is provided, defaults to `offset=0`, `limit=100` with no filters
   * - When no `issueCategory` filter is provided, returns **only items with issues** (`BLOCKED` or
   *   `LIMITED`)
   * - To include healthy items, explicitly pass `issueCategory` filter with `NO_ISSUES` or all
   *   three values
   * - By default, the API prioritizes returning actionable diagnostic issues rather than healthy
   *   items. This reduces payload size and improves relevance
   *
   * ### Supported filters
   * Filters are combined with AND logic. Multiple values within a single filter act as OR.
   *
   * | Filter Field    | Supported Values                          | Max Values | Description                                              |
   * |-----------------|-------------------------------------------|------------|----------------------------------------------------------|
   * | `issues`        | Any valid `issueType` enum value          | 100        | Filter by specific SEM issue types (For example, `ITEM_OUT_OF_STOCK`, `TITLE_TOO_LONG`, `POLICY_VIOLATION`) |
   * | `issueCategory` | `LIMITED`, `BLOCKED`, `NO_ISSUES`         | 100        | Filter by SEM issue severity — `BLOCKED` items cannot be advertised at all, `LIMITED` items have reduced SEM performance |
   * | `itemId`        | Numeric string item IDs                   | 100        | Filter by Walmart catalog item identifiers within the seller's active campaigns. *In a future release, this filter will also support items outside of campaigns.* |
   *
   * ### Response structure
   * Each response contains two top-level fields:
   * - `pagination`: Standard pagination metadata including `hasNextPage`/`hasPreviousPage` for
   *   convenient UI navigation
   * - `data`: Array of item-level diagnostics. Each item appears **once** per unique `offerId` with
   *   all campaign associations listed. Each item includes an `issueCategory` field representing
   *   the overall SEM eligibility status of the item, and an `issues` array containing issue type
   *   identifiers. Issues are item-level, not campaign-specific — a blocked item is blocked in all
   *   SEM campaigns it belongs to.
   *
   * Issue metadata (name, description, fixability, help links) is not included in this response.
   * Partners should use the dedicated `GET /item-issues/issue-types` endpoint to retrieve complete
   * issue metadata and cache it locally (TTL: 24 hours).
   *
   * ### Issue categories
   * | Category     | SEM Impact                                                                     |
   * |--------------|--------------------------------------------------------------------------------|
   * | `BLOCKED`    | Item **cannot be advertised** on search engines. Must be resolved before the item can appear in SEM ads. Examples: out of stock, missing title, policy violation, invalid image. |
   * | `LIMITED`    | Item **can be advertised but with reduced visibility** or performance on search engines. Resolving these issues improves ad reach and effectiveness. Examples: title too long, low image quality, description too short. |
   * | `NO_ISSUES`  | Item has no SEM issues and can be advertised normally with full visibility.      |
   *
   * ### Actionable vs non-actionable issues
   * Each issue type has an `isFixable` flag available via the `GET /item-issues/issue-types`
   * reference endpoint:
   * - `isFixable=true`: Seller can fix the issue to restore SEM eligibility (For example, restock
   *   inventory, update title, fix image). Partners should surface these with a "Fix Now" UI
   *   affordance.
   * - `isFixable=false`: Requires Walmart or system intervention (For example, Google policy
   *   violations). Partners should display these as informational — the seller cannot directly
   *   resolve them.
   *
   * @returns Search results retrieved successfully
   *
   * @throws {@link SemItemDiagnostics.SearchItemIssuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchItemIssues(
    request: SemItemDiagnostics.SearchItemIssuesRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemDiagnosticSearchResponse, SemItemDiagnostics.SearchItemIssuesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/advertising/sem/item-issues/search"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          {
            name: "WM_GLOBAL_VERSION",
            value: request.wmGlobalVersion,
            schema: s.defaulted(wmGlobalVersionSchema, WmGlobalVersion._31),
          },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.defaulted(wmMarketSchema, WmMarket.Us) },
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationJson),
          },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => itemDiagnosticSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: itemDiagnosticSearchResponseSchema },
        errorFactory: SemItemDiagnostics.SearchItemIssuesError,
      },
      options,
    );
  }
}

export namespace SemItemDiagnostics {
  export type GetIssueTypesRequest = {
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** The version of the global API used. @default WmGlobalVersion._31 */
    wmGlobalVersion?: WmGlobalVersion;
    /** Identifies the Walmart Marketplace region for the request. @default WmMarket.Us */
    wmMarket?: WmMarket;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
  };

  export class GetIssueTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse429", ErrorResponse429>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIssueTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse429", decode: { kind: "json", schema: errorResponse429Schema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchItemIssuesRequest = {
    /** Specifies the name of the Walmart service being called. */
    wmSvcName: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID.
     */
    wmQosCorrelationId: string;
    /** The version of the global API used. @default WmGlobalVersion._31 */
    wmGlobalVersion?: WmGlobalVersion;
    /** Identifies the Walmart Marketplace region for the request. @default WmMarket.Us */
    wmMarket?: WmMarket;
    /** The expected response content type. @default Accept.ApplicationJson */
    accept?: Accept;
    /**
     * A unique ID to identify the consumer request by channel. Use the Consumer Channel Type
     * received during onboarding.
     */
    wmConsumerChannelType?: string;
    /**
     * Optional search request with pagination and filters. Defaults to `offset=0`, `limit=100` with
     * no filters if body is absent. When no `issueCategory` filter is provided, only items with
     * issues (`BLOCKED` or `LIMITED`) are returned. This reduces payload size and improves
     * relevance — diagnostics API consumers typically want problems, not healthy-item confirmation.
     * To include all items, explicitly pass `issueCategory` filter with all three values:
     * `LIMITED`, `BLOCKED`, `NO_ISSUES`.
     */
    body?: ItemDiagnosticSearchRequest;
  };

  export class SearchItemIssuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse429", ErrorResponse429>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchItemIssuesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse429", decode: { kind: "json", schema: errorResponse429Schema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
