import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error8 = {
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
  /**
   * Classifies the error into a specific group or type, which helps in organizing and managing
   * different types of issues.
   */
  category?: string;
  /** Indicates the criticality of the error. Common values include ERROR, WARNING, or INFO. */
  severity?: string;
};

export const error8Schema: Schema<Error8> = s.object<Error8>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  severity: s.optional(s.string()),
});
