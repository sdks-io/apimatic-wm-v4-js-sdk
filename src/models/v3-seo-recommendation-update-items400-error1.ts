import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3SeoRecommendationUpdateItems400Error1 = {
  /** status of the update */
  status?: string;
  /** The ID of the item that was updated. */
  itemId?: string;
  /** Description of the response */
  message?: string;
  /** Description of what went wrong */
  error?: string;
};

export const v3SeoRecommendationUpdateItems400Error1Schema: Schema<V3SeoRecommendationUpdateItems400Error1> =
  s.object<V3SeoRecommendationUpdateItems400Error1>({
    status: s.optional(s.string()),
    itemId: s.optional(s.string()),
    message: s.optional(s.string()),
    error: s.optional(s.string()),
  });
