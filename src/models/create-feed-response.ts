import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateFeedResponse = {
  /** Unique identifier for the submitted feed. Use this to poll feed status. */
  feedId: string;
  /** The feed type that was submitted */
  feedType?: string;
  /** The marketplace the feed was submitted to */
  marketplaceId?: string;
};

export const createFeedResponseSchema: Schema<CreateFeedResponse> = s.object<CreateFeedResponse>({
  feedId: s.string(),
  feedType: s.optional(s.string()),
  marketplaceId: s.optional(s.string()),
});
