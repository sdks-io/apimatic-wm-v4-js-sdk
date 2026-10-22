import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * <br><b style='color:green;'>Market availability: US | CA | MX</b>, Response returned upon
 * successful feed submission.
 */
export type FeedId1 = {
  /** A unique ID, returned from the Bulk Upload API, used for tracking the Feed File. */
  feedId?: string;
};

export const feedId1Schema: Schema<FeedId1> = s.object<FeedId1>({
  feedId: s.optional(s.string()),
});
