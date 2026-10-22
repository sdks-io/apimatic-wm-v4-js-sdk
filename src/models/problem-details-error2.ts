import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RFC 9457 Problem Details for HTTP APIs */
export type ProblemDetailsError2 = {
  /** A URI reference that identifies the problem type. */
  type?: string;
  /** A short, human-readable summary of the problem type. */
  title?: string;
  /** The HTTP status code. */
  status?: number;
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** A URI reference that identifies the specific occurrence of the problem. */
  instance?: string;
};

export const problemDetailsError2Schema: Schema<ProblemDetailsError2> = s.object<ProblemDetailsError2>({
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.int()),
  detail: s.optional(s.string()),
  instance: s.optional(s.string()),
});
