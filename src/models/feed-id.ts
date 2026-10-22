import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeedId = {
  /**
   * A unique identifier, which is returned by the Bulk Upload API, used to track and manage the
   * status of the feed file.
   */
  feedId?: string;
  additionalAttributes?: Record<string, unknown> | null;
  errors?: Record<string, unknown> | null;
};

export const feedIdSchema: Schema<FeedId> = s.object<FeedId>({
  feedId: s.optional(s.string()),
  additionalAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  errors: s.optionalNullable(s.record(s.string(), s.unknown())),
});
