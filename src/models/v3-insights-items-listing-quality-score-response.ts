import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload17Schema, type Payload17 } from "./payload17.js";

export type V3InsightsItemsListingQualityScoreResponse = {
  payload?: Payload17;
};

export const v3InsightsItemsListingQualityScoreResponseSchema: Schema<V3InsightsItemsListingQualityScoreResponse> =
  s.object<V3InsightsItemsListingQualityScoreResponse>({
    payload: s.optional(s.lazy(() => payload17Schema)),
  });
