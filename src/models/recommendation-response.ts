import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload1Schema, type Payload1 } from "./payload1.js";

export type RecommendationResponse = {
  /** Payload in the response having the details about the item recommendations. */
  payload?: Payload1;
};

export const recommendationResponseSchema: Schema<RecommendationResponse> = s.object<RecommendationResponse>({
  payload: s.optional(s.lazy(() => payload1Schema)),
});
