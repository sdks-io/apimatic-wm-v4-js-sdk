import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload31Schema, type Payload31 } from "./payload31.js";

export type V3WfsRecommendationUnpublishedResponse = {
  status?: string;
  payload?: Payload31;
};

export const v3WfsRecommendationUnpublishedResponseSchema: Schema<V3WfsRecommendationUnpublishedResponse> =
  s.object<V3WfsRecommendationUnpublishedResponse>({
    status: s.optional(s.string()),
    payload: s.optional(s.lazy(() => payload31Schema)),
  });
