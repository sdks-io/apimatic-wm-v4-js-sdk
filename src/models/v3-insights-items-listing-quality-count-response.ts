import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload16Schema, type Payload16 } from "./payload16.js";

export type V3InsightsItemsListingQualityCountResponse = {
  payload?: Payload16[];
};

export const v3InsightsItemsListingQualityCountResponseSchema: Schema<V3InsightsItemsListingQualityCountResponse> =
  s.object<V3InsightsItemsListingQualityCountResponse>({
    payload: s.optional(s.array(s.lazy(() => payload16Schema))),
  });
