import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error12 = {
  /**
   * A unique identifier for the type of error. This helps in quickly recognizing and categorizing
   * the specific issue.<br><b style='color:green;'>Market availability: US only</b>
   */
  code?: string;
  /**
   * A detailed message explaining what caused the error. This provides more context about the
   * issue.<br><b style='color:green;'>Market availability: US only</b>
   */
  description?: string;
  /**
   * Classifies the error into a specific group or type, which helps in organizing and managing
   * different types of issues.<br><b style='color:green;'>Market availability: US only</b>
   */
  category?: string;
  /**
   * Indicates the criticality of the error. Common values include ERROR, WARNING, or INFO.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  severity?: string;
};

export const error12Schema: Schema<Error12> = s.object<Error12>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  severity: s.optional(s.string()),
});
