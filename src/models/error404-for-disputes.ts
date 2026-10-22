import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error404ForDisputes = {
  /** Error code of the response. */
  code?: string;
  /** Description of error. */
  description?: string;
  /** Info of error. */
  info?: string;
  /**
   * Severity of Error.
   *
   * Example: ERROR
   */
  severity?: string;
  /**
   * Category of error.
   *
   * Example: DATA
   */
  category?: string;
  /** Causes of error. */
  causes?: string[];
  /** Error Identifiers of the error. */
  errorIdentifiers?: Record<string, unknown>;
};

export const error404ForDisputesSchema: Schema<Error404ForDisputes> = s.object<Error404ForDisputes>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  info: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  causes: s.optional(s.array(s.string())),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
