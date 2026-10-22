import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueTypeSchema, type IssueType } from "./issue-type.js";

/**
 * Issue affecting an item. Contains the issue type identifier only.
 *
 * The `issueType` serves as a lookup key into the issue metadata returned by the `GET
 * /item-issues/issue-types` reference endpoint. All static metadata (name, description, category,
 * fixability, help links) lives in that endpoint's response.
 */
export type Issue = {
  /**
   * Lookup key into the issue metadata returned by the `GET /item-issues/issue-types` endpoint.
   * Maps to one of the supported issue type enum values.
   */
  issueType?: IssueType;
};

export const issueSchema: Schema<Issue> = s.object<Issue>({
  issueType: s.optional(s.lazy(() => issueTypeSchema)),
});
