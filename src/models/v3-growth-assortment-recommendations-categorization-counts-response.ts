import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload6Schema, type Payload6 } from "./payload6.js";

export type V3GrowthAssortmentRecommendationsCategorizationCountsResponse = {
  /** Payload in the response having the categorization details about the item recommendations. */
  payload?: Payload6;
};

export const v3GrowthAssortmentRecommendationsCategorizationCountsResponseSchema: Schema<V3GrowthAssortmentRecommendationsCategorizationCountsResponse> =
  s.object<V3GrowthAssortmentRecommendationsCategorizationCountsResponse>({
    payload: s.optional(s.lazy(() => payload6Schema)),
  });
