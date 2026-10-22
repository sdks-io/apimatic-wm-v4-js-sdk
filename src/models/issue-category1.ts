import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Issue severity category.
 *
 * - **BLOCKED**: Item cannot be advertised
 * - **LIMITED**: Item has reduced visibility or performance
 * - **NO_ISSUES**: Item has no SEM eligibility issues
 */
export const IssueCategory1 = {
  Blocked: "BLOCKED",
  Limited: "LIMITED",
  NoIssues: "NO_ISSUES",
} as const;
export type IssueCategory1 = (typeof IssueCategory1)[keyof typeof IssueCategory1] | (string & {});

export const issueCategory1Schema: EnumSchema<IssueCategory1> = s.enumOf<IssueCategory1>(IssueCategory1);
