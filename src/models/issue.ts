import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";

export type Issue = {
  /** Machine-readable issue code */
  code: string;
  /** Human-readable issue message (locale-aware) */
  message: string;
  severity: Severity;
  /** Affected attribute names */
  attributeNames?: string[];
};

export const issueSchema: Schema<Issue> = s.object<Issue>({
  code: s.string(),
  message: s.string(),
  severity: severitySchema,
  attributeNames: s.optional(s.array(s.string())),
});
