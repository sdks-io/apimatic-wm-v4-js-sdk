import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Required only when decision is REJECTED */
export type Feedback = {
  /** Optional feedback provided explaining the decision. */
  feedback?: string;
};

export const feedbackSchema: Schema<Feedback> = s.object<Feedback>({
  feedback: s.optional(s.string()),
});
