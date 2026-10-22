import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload22Schema, type Payload22 } from "./payload22.js";

export type V3WfsRecommendationFulfilWithWfsResponse = {
  status?: string;
  payload?: Payload22;
};

export const v3WfsRecommendationFulfilWithWfsResponseSchema: Schema<V3WfsRecommendationFulfilWithWfsResponse> =
  s.object<V3WfsRecommendationFulfilWithWfsResponse>({
    status: s.optional(s.string()),
    payload: s.optional(s.lazy(() => payload22Schema)),
  });
