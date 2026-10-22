import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload4Schema, type Payload4 } from "./payload4.js";

export type V3GrowthAssortmentRecommendationsVariantsResponse = {
  /** Payload in the response having the details about the item recommendations. */
  payload?: Payload4;
};

export const v3GrowthAssortmentRecommendationsVariantsResponseSchema: Schema<V3GrowthAssortmentRecommendationsVariantsResponse> =
  s.object<V3GrowthAssortmentRecommendationsVariantsResponse>({
    payload: s.optional(s.lazy(() => payload4Schema)),
  });
