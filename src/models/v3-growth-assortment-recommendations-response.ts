import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload3Schema, type Payload3 } from "./payload3.js";

export type V3GrowthAssortmentRecommendationsResponse = {
  /** Payload in the response having the details about the item recommendations. */
  payload?: Payload3;
};

export const v3GrowthAssortmentRecommendationsResponseSchema: Schema<V3GrowthAssortmentRecommendationsResponse> =
  s.object<V3GrowthAssortmentRecommendationsResponse>({
    payload: s.optional(s.lazy(() => payload3Schema)),
  });
