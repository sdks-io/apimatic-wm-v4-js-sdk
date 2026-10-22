import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3SeoRecommendationUpdateItems404Error1 = {
  /** status of the update */
  status?: string;
  /** The ID of the item that was updated. */
  itemId?: string;
  /** Description of the response */
  message?: string;
};

export const v3SeoRecommendationUpdateItems404Error1Schema: Schema<V3SeoRecommendationUpdateItems404Error1> =
  s.object<V3SeoRecommendationUpdateItems404Error1>({
    status: s.optional(s.string()),
    itemId: s.optional(s.string()),
    message: s.optional(s.string()),
  });
