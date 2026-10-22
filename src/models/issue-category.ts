import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const IssueCategory = {
  NoIssues: "NO_ISSUES",
  Limited: "LIMITED",
  Blocked: "BLOCKED",
} as const;
export type IssueCategory = (typeof IssueCategory)[keyof typeof IssueCategory] | (string & {});

export const issueCategorySchema: EnumSchema<IssueCategory> = s.enumOf<IssueCategory>(IssueCategory);
