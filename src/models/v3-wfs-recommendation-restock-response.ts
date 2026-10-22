import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload110Schema, type Payload110 } from "./payload110.js";

export type V3WfsRecommendationRestockResponse = {
  status?: string;
  payload?: Payload110;
};

export const v3WfsRecommendationRestockResponseSchema: Schema<V3WfsRecommendationRestockResponse> =
  s.object<V3WfsRecommendationRestockResponse>({
    status: s.optional(s.string()),
    payload: s.optional(s.lazy(() => payload110Schema)),
  });
