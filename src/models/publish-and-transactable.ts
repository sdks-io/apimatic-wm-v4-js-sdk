import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issue1Schema, type Issue1 } from "./issue1.js";

export type PublishAndTransactable = {
  issueTitle?: string;
  totalIssue?: number;
  maxIssue?: number;
  issues?: Issue1[];
  score?: number;
};

export const publishAndTransactableSchema: Schema<PublishAndTransactable> = s.object<PublishAndTransactable>({
  issueTitle: s.optional(s.string()),
  totalIssue: s.optional(s.int()),
  maxIssue: s.optional(s.int()),
  issues: s.optional(s.array(s.lazy(() => issue1Schema))),
  score: s.optional(s.int()),
});
