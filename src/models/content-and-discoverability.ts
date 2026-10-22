import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contentDiscoverabilityIssueSchema,
  type ContentDiscoverabilityIssue,
} from "./content-discoverability-issue.js";

export type ContentAndDiscoverability = {
  issueCount?: number;
  issues?: ContentDiscoverabilityIssue[];
};

export const contentAndDiscoverabilitySchema: Schema<ContentAndDiscoverability> =
  s.object<ContentAndDiscoverability>({
    issueCount: s.optional(s.int()),
    issues: s.optional(s.array(s.lazy(() => contentDiscoverabilityIssueSchema))),
  });
