import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueCategory1Schema, type IssueCategory1 } from "./issue-category1.js";

/**
 * Static metadata for an issue type. Provides human-readable information for building diagnostic
 * UIs including issue name, description, severity, remediability, and help links.
 *
 * This metadata is the same for every item — it describes the issue type itself, not a specific
 * occurrence on an item.
 */
export type IssueMetadata = {
  /** Human-readable issue name for UI short headline display. */
  issueName?: string;
  /**
   * Issue severity category.
   *
   * - **BLOCKED**: Item cannot be advertised
   * - **LIMITED**: Item has reduced visibility or performance
   * - **NO_ISSUES**: Item has no SEM eligibility issues
   */
  issueCategory?: IssueCategory1;
  /**
   * Whether the partner can remediate this issue. `true` = actionable by partner (show "Fix Now" UI
   * affordance), `false` = requires Walmart or system intervention (informational only).
   */
  isFixable?: boolean;
  /** Human-readable description of the issue with remediation guidance. */
  issueDescription?: string;
  /**
   * Help link (Walmart-hosted or Google support) for additional information. May be null if no help
   * link is available for this issue type.
   */
  learnMoreUrl?: string | null;
};

export const issueMetadataSchema: Schema<IssueMetadata> = s.object<IssueMetadata>({
  issueName: s.optional(s.string()),
  issueCategory: s.optional(s.lazy(() => issueCategory1Schema)),
  isFixable: s.optional(s.boolean()),
  issueDescription: s.optional(s.string()),
  learnMoreUrl: s.optionalNullable(s.string()),
});
