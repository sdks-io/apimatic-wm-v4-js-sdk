import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SemError400 = {
  /**
   * A unique identifier for the type of error. This helps in quickly recognizing and categorizing
   * the specific issue.
   */
  code?: string;
  /**
   * A detailed message explaining what caused the error. This provides more context about the
   * issue.
   */
  description?: string;
  /** A brief summary of the error, often used for a quick understanding of the issue. */
  info?: string;
  /**
   * Indicates the criticality of the error. Common values include `ERROR`, `WARNING`, or `INFO`.
   */
  severity?: string;
  /**
   * Classifies the error into a specific group or type, which helps in organizing and managing
   * different types of issues.
   */
  category?: string;
};

export const semError400Schema: Schema<SemError400> = s.object<SemError400>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  info: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
});
