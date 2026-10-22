import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response payload containing operation results. */
export type Payload20 = {
  /** A unique ID returned from the Bulk Upload API, used for tracking the feed file. */
  feedId?: string;
  /** Number of errors encountered during processing. */
  errorCount?: number;
};

export const payload20Schema: Schema<Payload20> = s.object<Payload20>({
  feedId: s.optional(s.string()),
  errorCount: s.optional(s.int()),
});
