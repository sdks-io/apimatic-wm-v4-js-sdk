import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";
import { status1Schema, type Status1 } from "./status1.js";

export type ListingsItemSubmissionResponse = {
  sku: string;
  status: Status1;
  submissionId?: string;
  issues?: Issue[];
};

export const listingsItemSubmissionResponseSchema: Schema<ListingsItemSubmissionResponse> =
  s.object<ListingsItemSubmissionResponse>({
    sku: s.string(),
    status: status1Schema,
    submissionId: s.optional(s.string()),
    issues: s.optional(s.array(s.lazy(() => issueSchema))),
  });
