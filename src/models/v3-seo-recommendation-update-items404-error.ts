import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3SeoRecommendationUpdateItems404Error = {
  /** status of the update */
  status?: string;
  /** The ID of the item that was updated. */
  itemId?: string;
  /** Description of the response */
  message?: string;
};

export const v3SeoRecommendationUpdateItems404ErrorSchema: Schema<V3SeoRecommendationUpdateItems404Error> =
  s.object<V3SeoRecommendationUpdateItems404Error>({
    status: s.optional(s.string()),
    itemId: s.optional(s.string()),
    message: s.optional(s.string()),
  });
