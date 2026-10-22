import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contentDiscoverabilityIssuesDescSchema,
  type ContentDiscoverabilityIssuesDesc,
} from "./content-discoverability-issues-desc.js";

export type ContentDiscoverabilityIssue = {
  score?: number;
  isEditable?: boolean;
  attributeValue?: string;
  isSpecAttribute?: boolean;
  attributeName?: string;
  issueCount?: number;
  issues?: ContentDiscoverabilityIssuesDesc[];
};

export const contentDiscoverabilityIssueSchema: Schema<ContentDiscoverabilityIssue> =
  s.object<ContentDiscoverabilityIssue>({
    score: s.optional(s.float64()),
    isEditable: s.optional(s.boolean()),
    attributeValue: s.optional(s.string()),
    isSpecAttribute: s.optional(s.boolean()),
    attributeName: s.optional(s.string()),
    issueCount: s.optional(s.int()),
    issues: s.optional(s.array(s.lazy(() => contentDiscoverabilityIssuesDescSchema))),
  });
