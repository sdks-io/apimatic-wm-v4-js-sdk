import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items. */
export type ItemsFailureResponse = {
  /** Specifies the item identifier. */
  itemId?: string;
  /**
   * A unique identifier for the type of error. This helps in quickly recognizing and categorizing
   * the specific issue.
   */
  errorCode?: string;
  /**
   * A detailed message explaining what caused the error. This provides more context about the
   * issue.
   */
  errorDescription?: string;
  /**
   * Classifies the error into a specific group or type, which helps in organizing and managing
   * different types of issues.
   */
  category?: string;
  /** Indicates the criticality of the error. Common values include ERROR, WARNING, or INFO. */
  severity?: string;
};

export const itemsFailureResponseSchema: Schema<ItemsFailureResponse> = s.object<ItemsFailureResponse>({
  itemId: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  category: s.optional(s.string()),
  severity: s.optional(s.string()),
});
