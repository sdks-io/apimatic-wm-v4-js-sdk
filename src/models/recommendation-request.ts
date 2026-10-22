import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaDataRequestSchema, type MetaDataRequest } from "./meta-data-request.js";
import {
  recommendationRequestFilterSchema,
  type RecommendationRequestFilter,
} from "./recommendation-request-filter.js";

export type RecommendationRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM | To get list of recommended items | string |
   *
   * @default "ITEM"
   */
  recommendationType?: "ITEM";
  /** Meta information for the request. */
  meta?: MetaDataRequest;
  /** Different type of filters can be passed in this object. */
  filterCriteria?: RecommendationRequestFilter;
};

export const recommendationRequestSchema: Schema<RecommendationRequest> = s.object<RecommendationRequest>({
  recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
  meta: s.optional(s.lazy(() => metaDataRequestSchema)),
  filterCriteria: s.optional(s.lazy(() => recommendationRequestFilterSchema)),
});
