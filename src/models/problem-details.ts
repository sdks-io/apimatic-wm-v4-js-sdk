import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Problem details for HTTP APIs, as defined by RFC 9457 (https://www.rfc-editor.org/rfc/rfc9457).
 */
export type ProblemDetails = {
  /** A URI that identifies the problem type. */
  type: string;
  /** A short, human-readable summary of the problem type. */
  title: string;
  /** The HTTP status code returned by the origin server for this occurrence. */
  status: number;
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** A URI reference that identifies the specific occurrence of the problem. */
  instance?: string;
  /** A Walmart-specific error code for legacy compatibility. */
  code?: string;
};

export const problemDetailsSchema: Schema<ProblemDetails> = s.object<ProblemDetails>({
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.optional(s.string()),
  instance: s.optional(s.string()),
  code: s.optional(s.string()),
});
