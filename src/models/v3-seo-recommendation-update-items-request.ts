import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvedSchema, type Approved } from "./approved.js";
import { feedbackSchema, type Feedback } from "./feedback.js";

export type V3SeoRecommendationUpdateItemsRequest = {
  /** Required only when decision is APPROVED */
  approved?: Approved;
  /** Required only when decision is REJECTED */
  feedback?: Feedback;
};

export const v3SeoRecommendationUpdateItemsRequestSchema: Schema<V3SeoRecommendationUpdateItemsRequest> =
  s.object<V3SeoRecommendationUpdateItemsRequest>({
    approved: s.optional(s.lazy(() => approvedSchema)),
    feedback: s.optional(s.lazy(() => feedbackSchema)),
  });
