import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Error500ForDisputes = {
  /** Error code of the response. */
  code?: string;
  /** Description of error. */
  description?: string;
  /** Severity of Error. */
  severity?: string;
  /** Category of error. */
  category?: string;
  /** Causes of error. */
  causes?: string[];
  /** Error Identifiers of the error. */
  errorIdentifiers?: Record<string, unknown>;
};

export const error500ForDisputesSchema: Schema<Error500ForDisputes> = s.object<Error500ForDisputes>({
  code: s.optional(s.string()),
  description: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  causes: s.optional(s.array(s.string())),
  errorIdentifiers: s.optional(s.record(s.string(), s.unknown())),
});
