import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CancelFeedResponse = {
  /** The feed that was requested to be cancelled */
  feedId: string;
  /** Result of the cancellation request */
  status: string;
};

export const cancelFeedResponseSchema: Schema<CancelFeedResponse> = s.object<CancelFeedResponse>({
  feedId: s.string(),
  status: s.string(),
});
