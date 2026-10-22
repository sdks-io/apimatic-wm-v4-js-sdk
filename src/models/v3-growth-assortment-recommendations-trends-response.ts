import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload5Schema, type Payload5 } from "./payload5.js";

export type V3GrowthAssortmentRecommendationsTrendsResponse = {
  /** Payload in the response having the trend details for the recommended item. */
  payload?: Payload5;
};

export const v3GrowthAssortmentRecommendationsTrendsResponseSchema: Schema<V3GrowthAssortmentRecommendationsTrendsResponse> =
  s.object<V3GrowthAssortmentRecommendationsTrendsResponse>({
    payload: s.optional(s.lazy(() => payload5Schema)),
  });
