import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload7Schema, type Payload7 } from "./payload7.js";

export type V3GrowthAssortmentRecommendationsRejectionsResponse = {
  /** Payload in the response for rejecting recommendations. */
  payload?: Payload7;
};

export const v3GrowthAssortmentRecommendationsRejectionsResponseSchema: Schema<V3GrowthAssortmentRecommendationsRejectionsResponse> =
  s.object<V3GrowthAssortmentRecommendationsRejectionsResponse>({
    payload: s.optional(s.lazy(() => payload7Schema)),
  });
