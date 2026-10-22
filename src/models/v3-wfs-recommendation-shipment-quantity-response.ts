import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload15Schema, type Payload15 } from "./payload15.js";

export type V3WfsRecommendationShipmentQuantityResponse = {
  status?: string;
  payload?: Payload15;
};

export const v3WfsRecommendationShipmentQuantityResponseSchema: Schema<V3WfsRecommendationShipmentQuantityResponse> =
  s.object<V3WfsRecommendationShipmentQuantityResponse>({
    status: s.optional(s.string()),
    payload: s.optional(s.lazy(() => payload15Schema)),
  });
