import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload19Schema, type Payload19 } from "./payload19.js";

export type V3InsightsItemsUnpublishedCountsResponse = {
  payload?: Payload19[];
};

export const v3InsightsItemsUnpublishedCountsResponseSchema: Schema<V3InsightsItemsUnpublishedCountsResponse> =
  s.object<V3InsightsItemsUnpublishedCountsResponse>({
    payload: s.optional(s.array(s.lazy(() => payload19Schema))),
  });
