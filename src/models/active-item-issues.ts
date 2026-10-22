import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignRefSchema, type CampaignRef } from "./campaign-ref.js";
import { issueCategorySchema, type IssueCategory } from "./issue-category.js";
import { issueSchema, type Issue } from "./issue.js";

/**
 * Item-level diagnostic data including product details, campaign associations, overall item status,
 * and list of issues.
 *
 * Each `ActiveItemIssues` object appears **once** per unique `offerId`. The `campaignAssociations`
 * array lists all campaigns the item belongs to. Issues are **item-level**, not campaign-specific —
 * the same issue applies regardless of which campaign the item is in.
 *
 * ### Identifier Contract
 * | Field     | Source           | Format                  | Description                                                              |
 * |-----------|------------------|-------------------------|--------------------------------------------------------------------------|
 * | `offerId` | Walmart-assigned | String                  | Uniquely identifies a specific offer (item + seller). Recommended primary key for partner systems. |
 * | `itemId`  | Walmart-assigned | Numeric string          | Walmart catalog item identifier. Shared across sellers offering the same product. |
 * | `sku`     | Partner-assigned | Alphanumeric (partner-defined) | The partner's own SKU. Never a Walmart-assigned value.               |
 */
export type ActiveItemIssues = {
  /**
   * Unique offer identifier. Enables deep-linking, correlation with partner inventory systems, and
   * disambiguation of items across campaigns.
   */
  offerId?: string;
  /**
   * Walmart catalog item identifier (numeric string). Shared across sellers offering the same
   * product.
   */
  itemId?: string;
  /**
   * Partner-assigned Stock Keeping Unit. Always the partner's own SKU, never a Walmart-assigned
   * value.
   */
  sku?: string;
  /** Product image URL. */
  productImageUrl?: string;
  /** Product display name. */
  productName?: string;
  /**
   * List of all campaigns this item is associated with. A single item may participate in multiple
   * campaigns.
   */
  campaignAssociations?: CampaignRef[];
  /**
   * Overall SEM eligibility status derived from all issues affecting this item.
   *
   * - **NO_ISSUES**: Item has no SEM issues and can be advertised on search engines with full
   *   visibility
   * - **LIMITED**: Item has issues that reduce its visibility or performance in Search Engine
   *   Marketing
   * - **BLOCKED**: Item has critical issues that completely prevent it from being advertised on
   *   search engines
   */
  issueCategory?: IssueCategory;
  /** Link to item on Walmart.com. */
  productUrl?: string;
  /**
   * List of issues affecting this item. Each issue contains an `issueType` that can be used as a
   * lookup key into the issue metadata returned by the `GET /item-issues/issue-types` endpoint.
   * Empty array when item has no issues.
   */
  issues?: Issue[];
};

export const activeItemIssuesSchema: Schema<ActiveItemIssues> = s.object<ActiveItemIssues>({
  offerId: s.optional(s.string()),
  itemId: s.optional(s.string()),
  sku: s.optional(s.string()),
  productImageUrl: s.optional(s.string()),
  productName: s.optional(s.string()),
  campaignAssociations: s.optional(s.array(s.lazy(() => campaignRefSchema))),
  issueCategory: s.optional(s.lazy(() => issueCategorySchema)),
  productUrl: s.optional(s.string()),
  issues: s.optional(s.array(s.lazy(() => issueSchema))),
});
