import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items */
export type ItemsRequest = {
  /** Specifies the item identifier. */
  itemId: string;
  /** Custom target number of reviews requested to be collected for the item. Default is 5. */
  targetReviews?: number;
};

export const itemsRequestSchema: Schema<ItemsRequest> = s.object<ItemsRequest>({
  itemId: s.string(),
  targetReviews: s.optional(s.int()),
});
